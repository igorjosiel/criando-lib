function filterOccurrences(paragraph) {
    return Object.keys(paragraph).filter(key => paragraph[key] > 1);
}

function buildOutputFile(wordsList) {
    let finalText = '';

    wordsList.forEach((paragraph, index) => {
        const duplicated = filterOccurrences(paragraph).join(', ');

        finalText += `palavras duplicadas no parágrafo ${index + 1}: ${duplicated} \n`;
    });

    return finalText;
}

export { buildOutputFile }
