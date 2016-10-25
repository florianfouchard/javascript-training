function add(a,b){
    return a+b;
};

function divide(a,b){
    return a/b;
};

function multiply(a,b){
    return a*b;
};

function minus(a,b){
    return a-b;
};

var x=2;
var y=6;
console.log(add(x,y));
console.log(divide(x,y));
console.log(multiply(x,y));
console.log(minus(x,y));

function operation(op,x,y){
    return op(x,y);
}

console.log('add', operation(add,56,59));

var ops = [add, divide, multiply, minus];
var rand = ops[Math.floor(Math.random()*ops.length)];

console.log(rand.name, operation(rand,56,59));

var data=[4,3];
data.operation = function(op){
    return op(this[0], this[1]);
};

console.log(data.operation(multiply));
