function Dinosaurus(name){

    this.size = 12;
    this.name = name;
}

Dinosaurus.prototype.age = -65000000;

const denver = new Dinosaurus('Denver');

function Carnivore(){
}

Carnivore.prototype.eat = function(obj){
    console.log(this.name+' eats '+obj.name);
};

const tRex = new Carnivore();
tRex.name = 'TeeRexe';

//modification:
var eating = tRex.eat;
eating(tRex);

boundToDenver= eating.bind(denver);
console.log('Bound eating to denver');
boundToDenver(tRex);

//one shot :
eating.bind(denver)(tRex);




