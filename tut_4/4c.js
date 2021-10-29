function isPalindrome(n) {
    let tmp = "";
    for (let i = n.length; i >= 0; i--) {
        tmp += n.charAt(i);
    }
    return tmp===n;
}

console.log(isPalindrome("tenet"));
console.log(isPalindrome("apple"));