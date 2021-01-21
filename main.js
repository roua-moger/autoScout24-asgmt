
//variable for 3 seller type
let private = [];
let dealer = [];
let other = [];
//counting the var
let sumP = 0;
let sumD = 0;
let sumO = 0;

const csv = require('csvtojson');
const fs = require('fs');
 //testing with console.log
       // console.log(row);

//read listings.csv
const converter = csv()
.fromFile('./listings.csv')
.then((json) => {
    json.forEach((row) => {
 
    //Average Listing Selling Price per Seller Type
    if(row.seller_type === 'private'){
        private.push(row.price)
    }else if(row.seller_type === 'dealer'){
        dealer.push(row.price)
    }else if(row.seller_type === 'other'){
        other.push(row.price)
    }

    });

    //counting the var
    for(let i = 0; i < private.length ; i++){
        sumP += parseInt(private[i]);
    }
    for (let j = 0 ; j < dealer.length ; j++){
        sumD += parseInt(dealer[j]);
    }
    for(let c = 0 ; c < other.length ; c++){
        sumO += parseInt(other[c]);
    }
        //calculate the average

    // let pAvg = sumP / private.length;
    // let dAvg = sumD / dealer.length;
    // let oAvg = sumO / other.length; 

    //testing with console.log
    // console.log( '€ ' + pAvg.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') 
    // , '€ ' + dAvg.toFixed(0).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') 
    // , '€ ' +oAvg.toFixed(0).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.'));

    //creat a new json for the average data
    let avgTable = {
        avgList : [
        {
            seller_type : 'private',
            average : '€ ' + (sumP / private.length).toFixed(0).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.'),
        },
        {
            seller_type : 'dealer',
            average : '€ ' + (sumD / dealer.length).toFixed(0).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.'),
        },
        {
            seller_type : 'other',
            average : '€ ' + (sumO / other.length).toFixed(0).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.'),
        },
    ]

   
};

    let data = JSON.stringify(avgTable, null, 2);
    fs.writeFileSync('avgTable.json', data);

    console.log(avgTable);
})

//read contacts.csv
const convert = csv()
.fromFile('./contacts.csv')
.then((json) => {
    json.forEach((row) => {
     
       // console.log(row);
    });
})
