console.log('starting async');

setTimeout(() => {
        console.log('Inside settimeout call back')
}, 3000);

setTimeout(() => {
        console.log('Inside settimeout call back0')
}, 0);


console.log('finish async');

var x = 1;
var Y = x + 9;
console.log(`Y: ${Y}`);

var add =(a,b) => {
        var total = a + b;
        return total;
};
var res = add(78,6);

console.log(res);
