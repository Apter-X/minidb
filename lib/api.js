var data_obj = require('./../database.json');
console.log(data_obj);

var data_str = JSON.stringify(data_obj);
console.log(data_str);

var data_prs = JSON.parse(data_str);
console.log(data_prs);

data_prs.Test.push({id: 1, square: 2})
console.log(data_prs);

var json = JSON.stringify(data_prs);
console.log(json);

var fs = require('fs');

fs.writeFile('./../data.json', json, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
    console.log(json);
});