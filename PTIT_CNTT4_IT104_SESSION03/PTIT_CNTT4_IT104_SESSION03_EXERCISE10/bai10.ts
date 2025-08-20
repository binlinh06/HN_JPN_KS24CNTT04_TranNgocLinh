function hasDuplicateChars(word: string): boolean {
  const charSet = new Set<string>();
  for (let char of word) {
    if (charSet.has(char)) {
      return true; 
    }
    charSet.add(char);
  }
  return false;
}

function findLongestUniqueWord(sentence: string): string {
  const words = sentence.split(" ");
  let longest = "";

  for (let word of words) {
    if (!hasDuplicateChars(word) && word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}

const input = "hello world apple banana orange pumpkin cucumber";
const result = findLongestUniqueWord(input);
console.log(result);
