const fs = require('fs');

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

console.log(process.argv);

fs.readFile(link, 'utf-8', (error, text) => {
    console.log(text);
});
