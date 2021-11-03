function isPrime(n) {
    if (n < 2) {
        return false;
    } 
    else if (n === 2 || n === 3 || (n-1)%6 === 0 || (n+1)%6 === 0) {
        return true;
    }
    return false;
}

console.log(isPrime(97));
console.log(isPrime(4));