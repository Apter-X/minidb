// compare password inserted into database
function comparePwd(usr, pwd){
  let data_obj = require('./../test/database.json');
  login = data_obj.user
  // console.log(login);

  for(let i = 0; +i < login.length; i++){
    // console.log(login[i].username);

    if (login[i].username === usr && login[i].password === pwd){
      return 1;
    }
  }
  return 0;
}

var result = comparePwd('admin', '1234');
console.log(`return : ${result}`)