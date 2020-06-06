// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    charsObject = {}
    timesUsed = 0
    maxChar = ''
    for (let char of str) {
        !charsObject[char] ? charsObject[char] = 1 : charsObject[char]++
    }

    for (let value in charsObject) {
        if (charsObject[value] > timesUsed) {
            timesUsed = charsObject[value]
            maxChar = value
        }
    }
    return maxChar
}

module.exports = maxChar;
