var toUSD = require('./usd');
var randomNumber = require('./random');
var randomDollar =  toUSD(randomNumber(100, 100000));

console.log('this', randomDollar);
module.exports.randomDollar = randomDollar;
module.exports.balance =  'Account balance: \n';
