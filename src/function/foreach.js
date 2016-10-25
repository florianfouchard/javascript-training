var users = require('../data').users;

users.forEach(function(user){
    console.log('user name :',user.name);
});

console.log('###########     avec fat arrow       ###################');
users.forEach(user =>console.log('user name :',user.name));

console.log('#########################################################');

var result =[];
var noadmins = [];
users.forEach(function(user){
    if(user.admin){
        result.push(user.name);
    }
    else { noadmins.push(user.name)}
});
console.log('admin : ', result, '\n and no admins :', noadmins);