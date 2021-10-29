function binSearch(key, arr) {
    let l = 0;
    let r = arr.length - 1;
    while (l <= r) {
        let x = Math.floor((l+r)/2);
        if (arr[x] === key) {
            return x;
        } else {
            if (arr[x] > key) {
                r = x - 1;
            } else {
                l = x + 1;
            }
        }
    }
    return -1;
}

console.log(binSearch(2, [1, 2, 5, 10]));
console.log(binSearch(6, [1, 2, 5, 10]));