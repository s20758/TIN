function longestWord(n) {
    let arr = n.split(" ");
    let tmp = "";
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > tmp.length) {
        tmp = arr[i];
      }
    }
    return tmp;
}
  
console.log(longestWord("apple tree is giving apples"));