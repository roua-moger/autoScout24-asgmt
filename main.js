

const csv = require('csvtojson');
const fs = require('fs');
const converter = csv()
.fromFile('./listings.csv')
.then((json) => {
    json.forEach((row) => {
     
       // console.log(row);
    });
})