const fs = require('fs');

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

console.log(process.argv);

fs.readFile(link, 'utf-8', (error, text) => {
    verifyDuplicatedWords(text);
});

function verifyDuplicatedWords(text) {
    const wordsList = text.split(' ');

    const result = {};

    wordsList.forEach(word => {
        result[word] = (result[word] || 0) + 1;
    });

    console.log(result);
}
