

const csv = require('csvtojson');
const fs = require('fs');

//read listings.csv
const converter = csv()
.fromFile('./listings.csv')
.then((json) => {
    json.forEach((row) => {
     
       // console.log(row);
    });
})

//read contacts.csv
const convert = csv()
.fromFile('./contacts.csv')
.then((json) => {
    json.forEach((row) => {
     
        console.log(row);
    });
})
