const data_obj = require('../example/database.json');

function listUsr(path){
  var user = [];
  for(var i = 0; +i < path.length; i++){
    user.push(path[i].username);
  }
  return user;
}

// example
users = listUsr(data_obj.user);
console.log(users);