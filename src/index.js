export function countWords(text) {
    const paragraphs = extractParagraphs(text);

    const count = paragraphs.flatMap((paragraph) => {
        if (!paragraph) return [];

        return verifyDuplicatedWords(paragraph);
    });
    
    return count;
}

function extractParagraphs(text) {
    return text.toLowerCase().split('\n');
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
