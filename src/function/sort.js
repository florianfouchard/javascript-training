var x = [0,3,5,6,10,12,-12,45,34];

var sortFunction = function(a,b){
    if(a===b)return 0;
    return a<b ? -1:1;
};
x.sort(sortFunction);
console.log(x);

var users = require('../data').users;
//console.log('users', users);

function sortUsers (user1, user2){
    if(user1.name ===user2.name){
        return 0;
    }
    return user1.name<user2.name ? -1:1;
}

usersSorted = users.sort(sortUsers)
console.log(users.map(user=>user.name));