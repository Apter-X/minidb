const data_obj = require('./../test/database.json');

function changePwd(path, name, oldPwd, newPwd){
  for(var i = 0; +i < path.length; i++){
    var user = path[i].username;
    console.log(user);
    var pwd = path[i].password;
    console.log(pwd);

    if(user === name && pwd === oldPwd){
      pwd = newPwd;
      console.log(`Match! New password of ${user} : ${pwd}`);
    }else{
    console.log('No match!');
    }
  }
}

// example
changePwd(data_obj.user, 'modo', '456', '987');