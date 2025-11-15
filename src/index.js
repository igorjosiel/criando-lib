const fs = require('fs');

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

console.log(process.argv);

fs.readFile(link, 'utf-8', (error, text) => {
    paragraphBreaks(text);
});

function paragraphBreaks(text) {
    const paragraphs = text.toLowerCase().split('\n');

    const count = paragraphs.flatMap((paragraph) => {
        if (!paragraph) return [];

        return verifyDuplicatedWords(paragraph);
    });
    console.log(count);
}

function clearWords(palavra) {
  return palavra.replace(/[^a-zA-ZÀ-ÿ\s]/g, '');
}

function verifyDuplicatedWords(text) {
    const wordsList = text.split(' ');

    const result = {};

    wordsList.forEach(word => {
        if (word.length >= 3) {
            const clearWord = clearWords(word);
            result[clearWord] = (result[clearWord] || 0) + 1;
        }
    });

    return result;
}
