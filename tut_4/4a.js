//function expression
let factorial_r = function(n) {
    let res = 1;
    if (n === 0) {
        return res;
    }
    res = n*factorial_r(--n);
    return res;
};

//function declaration
function factorial_i(n) {
    let res = 1;
    for (let i = 2; i <= n; i++) {
        res *= i;
    }
    return res;
}

console.log(factorial_r(5));
console.log(factorial_i(5));