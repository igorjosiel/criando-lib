import fs from "fs";
import handleErrors from "./errors/funcoesError.js";
import { countWords } from "./index.js";
import { buildOutputFile } from "./helpers.js";

const filePath = process.argv;
const link     = filePath[2];
const address  = filePath[3];

fs.readFile(link, 'utf-8', (error, text) => {
    try {
        if (error) throw error;

        const result = countWords(text);
        createAndSaveFile(result, address);
    } catch(error) {
        handleErrors(error);
    }
});

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
