var data_obj = require('./../database.json');
console.log(data_obj);

var data_str = JSON.stringify(data_obj);
console.log(data_str);

var data_prs = JSON.parse(data_str);
console.log(data_prs);

data_prs.Test.push({id:"D"})
console.log(data_prs);

var json = JSON.stringify(data_prs, null, "\t");
console.log(json);

var fs = require('fs');

fs.writeFile('./database.json', json, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});