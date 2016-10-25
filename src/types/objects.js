var x = {};

console.log('x :', x, typeof x);

var john = {
    name : 'John',
    address : 'London',
    friend : {
        name: 'Jim',
        age : 12
    }
}; //keys : values comme pour les hashmaps

console.log('John\'s address :', john.address);
console.log(john.friend.age);

//******** Modifying ******/

var funkyCop  = {
    name: 'Robocop'
};

var ennemy = {
    name : 'Dick'
};

funkyCop.foe=ennemy;
console.log('funck :', funkyCop);

ennemy.foe = funkyCop;
funkyCop.name = "Venere Robocop;";

ennemy.dead=true;
delete funkyCop.foe;

console.log(funkyCop);