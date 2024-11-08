const countWordOccurrences = (sentence: string, word: string): number => {
  let wordAppears: number = 0;
  sentence.split(" ").map((singleWord) => {
    if (singleWord.toLocaleLowerCase().includes(word.toLocaleLowerCase())) {
      wordAppears++;
    }
  });
  return wordAppears;
};

console.log(countWordOccurrences("I love typescript", "typescript"));
