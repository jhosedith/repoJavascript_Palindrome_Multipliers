function isPalindrome(str, caseSensitive = false) {
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, ''); // delete caracteres no alphanumeric
    const normalizedStr = caseSensitive ? cleanStr : cleanStr.toLowerCase();
    const reversedStr = normalizedStr.split('').reverse().join('');

    return normalizedStr === reversedStr;
}

module.exports = isPalindrome;