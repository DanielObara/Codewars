function findNumber(array) {
  const orded = array.sort((a,b) => a-b);
  // console.log("findNumber -> orded", orded.length)
  for (i = 1; i < orded.length +1; i++) {
    if (orded.indexOf(i) === -1) {
      break;
    }
  }
  return i;
}

const arr1 = [13, 11, 10, 3, 2, 1, 4, 5, 6, 9, 7, 8];
const arr2 = [1, 3, 4, 5, 6, 7, 8];
const arr3 = [7, 8, 1, 2, 4, 5, 6];
const arr4 = [1, 2, 3, 5];
const arr5 = [1, 3];
const arr6 = [2, 3, 4];
const arr7 = [13, 11, 10, 3, 2, 1, 4, 5, 6, 9, 7, 8];
const arr8 = [1, 2, 3];
console.log("findNumber(arr)", findNumber(arr1));
console.log("findNumber(arr)", findNumber(arr2));
console.log("findNumber(arr)", findNumber(arr3));
console.log("findNumber(arr)", findNumber(arr4));
console.log("findNumber(arr)", findNumber(arr5));
console.log("findNumber(arr)", findNumber(arr6));
console.log("findNumber(arr)", findNumber(arr7));
console.log("findNumber(arr)", findNumber(arr8));
