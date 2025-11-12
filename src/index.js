const fs = require('fs');

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

console.log(process.argv);

fs.readFile(link, 'utf-8', (error, text) => {
    paragraphBreaks(text);
});

function paragraphBreaks(text) {
    const paragraphs = text.toLowerCase().split('\n');

    const count = paragraphs.map(paragraph => {
        return verifyDuplicatedWords(paragraph);
    });
    console.log(count);
}

function verifyDuplicatedWords(text) {
    const wordsList = text.split(' ');

    const result = {};

    wordsList.forEach(word => {
        result[word] = (result[word] || 0) + 1;
    });

    return result;
}
