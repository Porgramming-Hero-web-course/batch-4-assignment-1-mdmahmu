const removeDuplicates = (numbers: number[]): number[] => {
  const tempArray: number[] = [];
  numbers.map((number) => {
    if (tempArray.includes(number)) {
      return;
    } else {
      tempArray.push(number);
    }
  });
  return tempArray;
};

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
