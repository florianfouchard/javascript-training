var x = [3,5,6,10,-12,45,34];
console.log('first : ', x[0]);
x[2] = -42; //modifying

//deviation
/*
x[-2] = "what?????";
console.log('found : ', x[-2]); //ça marche très bien mais il ne faut pas le faire
console.log('all table' , x);

x[150] = 149;
console.log('big table now : ', x);*/

//let's start over and serious stuff
x.sort();
console.log('x sorted : ', x);

x.sort(function(a,b){
    if(a<b) return -1;
    else if(a>b) return 1;
    else return 0;
});

console.log('x sorted good : ', x);

var sortFunction = (a,b) => a<b ? -1 : 1; //expression fat arrow
x.sort(sortFunction);
console.log('ES 2015 sorted ', x);

var filtered = x.filter(function(number){
    return number >= 0;
});
console.log('filtered x :', filtered);

var filterFunction = (a) => a>=0 ; //ou direct = x.filter(number => number >= 0);
console.log('filtered x :', x.filter(filterFunction));


console.log('\n#############################################################');

//ajouter un élément à la fin
x[7]=50;
x.push(75); //plus serieuse

//remove last element
var lastElement = x.pop() ; //supprime au debut et shift pour le premier //x.splice(x.length-1)

//remove first
var first = x.shift();

//add an element in first position
x.unshift(5);


console.log(x);
