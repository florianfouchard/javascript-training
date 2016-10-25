function add(a,b){ //peut etre déclarée avant ou après l'appel
    return a+b;
};
console.log('2+3 =', add(2,3));

var mult = function(a,b){ //déclarée avant l'appel UNIQUEMENT !
    return a*b;
};
console.log('4x3 =', mult(4,3));

var divide = (a,b) => a/b;
console.log('10/5 = ', divide(10,5));