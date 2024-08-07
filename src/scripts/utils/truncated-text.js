export function getTruncatedText(text = '', maxLength = 1000, removeHTMLTags = true){

    if(!text || text.length === 0){
        return '';
    }

    if(removeHTMLTags){
        text = text.replaceAll(/<(?!br\s*\/?)[^>]+>/gi, ' ');
    }

    let shortenedText = text.substring(0, maxLength);
    const regexForHTMLElements = /<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g;
    const HTMLElements = shortenedText.match(regexForHTMLElements);

    if(!removeHTMLTags && HTMLElements && HTMLElements.length > 0){

        const amountHTMLElementsLetters = HTMLElements.join().replaceAll(',', '').length;

        maxLength += amountHTMLElementsLetters;

        shortenedText = text.substring(0, maxLength);

    } else if(text.length <= maxLength) {

        return text;

    }

    let lastSpaceIndex = shortenedText.lastIndexOf(' ');

    if (lastSpaceIndex === -1) {
        return text.substring(0, maxLength) + ' ...';
    }

    return text.substring(0, lastSpaceIndex) + ' ...';

}