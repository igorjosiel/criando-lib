import fs from "fs";
import path from "path";
import { Command } from "commander";
import handleErrors from "./errors/funcoesError.js";
import { countWords } from "./index.js";
import { buildOutputFile } from "./helpers.js";
import chalk from "chalk";

const program = new Command();

program
    .version('0.0.1')
    .option('-t, --text <string>', 'caminho do texto a ser processado')
    .option('-d, --destination <string>', 'caminho da pasta onde salvar o arquivo de resultados')
    .action((options) => {
        const { text, destination } = options;

        if (!text || !destination) {
            console.error(chalk.red('erro: favor inserir os caminhos de origem e destino'));
            
            program.help();

            return;
        }

        const textPath = path.resolve(text);
        const destinationPath = path.resolve(destination);

        try {
            processFile(textPath, destinationPath);
            
            console.log(chalk.green('Texto processado com sucesso!'));
        } catch (error) {
            console.log('ocorreu um erro no processamento', error);
        }
    });

program.parse();

function processFile(text, destination) {
    fs.readFile(text, 'utf-8', (error, text) => {
        try {
            if (error) throw error;
    
            const result = countWords(text);
            createAndSaveFile(result, destination);
        } catch(error) {
            handleErrors(error);
        }
    });
}

async function createAndSaveFile(wordsList, address) {
    const newFile = `${address}/result.txt`;

    const textWords = buildOutputFile(wordsList);

    try {
        await fs.promises.writeFile(newFile, textWords);
        console.log("Arquivo criado");
    } catch (error) {
        throw error;
    }
}
