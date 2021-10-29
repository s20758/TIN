function amountToCoins(amount, coins) {
    let res = new Array();
    for(let i = 0; i < coins.length; i++) {
        while((amount - coins[i]) >= 0) {
           res.push(coins[i].toString());
           amount = amount - coins[i];
        }
    }
    return res.join(", ");
}

console.log(amountToCoins(89, [25, 10, 5, 2, 1]));