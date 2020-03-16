// Testing transfer data
console.log("Requiring json database")
const data_obj = require('./../database.json');
console.log(data_obj);

// const data_str = JSON.stringify(data_obj);
// console.log(data_str);
// var data_prs = JSON.parse(data_str);
// console.log(data_prs);

//First example function of insert data
const meta = {title: "MiniDB", version: "0.1.0"};
const user = {id: "002", username: "modo", password: "456"};

function insertData(path, data){
  console.log("Pushing data...")
  path.push(data);
  console.log(data);
  
  var json = JSON.stringify(data_obj, null, "\t");
  var fs = require('fs');

  fs.writeFile('./database.json', json, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
}

var fs = require('fs');

insertData(data_obj.meta, meta);
insertData(data_obj.user, user);