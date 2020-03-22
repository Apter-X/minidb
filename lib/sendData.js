const data_obj = require('./../test/database.json');

function sendData(path, data){
  console.log("Sending data...")
  path.push(data);
  console.log(data);
  
  var json = JSON.stringify(data_obj, null, "\t");
  var fs = require('fs');

  fs.writeFile('./test/database.json', json, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
}

//example
const user = {username: "user", password: "789"};
sendData(data_obj.user, user);