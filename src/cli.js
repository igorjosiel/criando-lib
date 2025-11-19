import fs from "fs";
import handleErrors from "./errors/funcoesError.js";
import { countWords } from "./index.js";

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

fs.readFile(link, 'utf-8', (error, text) => {
    try {
        if (error) throw error;

        countWords(text);
    } catch(error) {
        handleErrors(error);
    }
});
