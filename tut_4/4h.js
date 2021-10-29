function secondLowestGreatest(n) {
    let arr = [...new Set(n.sort(function (x, y) {
        return x - y;
    }))];
    return [arr[1], arr[arr.length-2]];
}

console.log(secondLowestGreatest([1, 1, 5, 2, 2, 6, 10, 10]));