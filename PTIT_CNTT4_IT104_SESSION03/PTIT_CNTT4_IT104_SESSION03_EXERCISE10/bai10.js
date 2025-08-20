function hasDuplicateChars(word) {
    var charSet = new Set();
    for (var _i = 0, word_1 = word; _i < word_1.length; _i++) {
        var char = word_1[_i];
        if (charSet.has(char)) {
            return true;
        }
        charSet.add(char);
    }
    return false;
}
function findLongestUniqueWord(sentence) {
    var words = sentence.split(" ");
    var longest = "";
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word = words_1[_i];
        if (!hasDuplicateChars(word) && word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}
var input = "hello world apple banana orange pumpkin cucumber";
var result = findLongestUniqueWord(input);
console.log(result);
