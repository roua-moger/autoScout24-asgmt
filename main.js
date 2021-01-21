
//var for 3 seller type
let private = [];
let dealer = [];
let other = [];
//counting the var
let sumP = 0;
let sumD = 0;
let sumO = 0;
//var to test wich cars are in make
let makeList = [];
let newMakeList = [];
//var for the make car
let audi = [];
let mazda = [];
let bwm = [];
let toyota = [];
let renanlt = [];
let vw = [];
let fiat = [];
let mercedesBenz = [];
//var for make car counting 


const csv = require('csvtojson');
const fs = require('fs');
 //testing with console.log
       // console.log(row);

//read listings.csv
const converter = csv()
.fromFile('./listings.csv')
.then((json) => {
    json.forEach((row) => {
 
    //start the code for Average Listing Selling Price per Seller Type 
    if(row.seller_type === 'private'){
        private.push(row.price)
    }else if(row.seller_type === 'dealer'){
        dealer.push(row.price)
    }else if(row.seller_type === 'other'){
        other.push(row.price)
    }

    // start the code for Percentual Distribution of available cars by Make
    //test wich cars are in make
    if(row.make){
        makeList.push(row.make)
    }

    if(row.make === 'Audi'){
        audi.push(row.make)
    }else if(row.make === 'Mazda'){
        mazda.push(row.make)
    }else if(row.make === 'BWM'){
        bwm.push(row.make)
    }else if(row.make === 'Toyota'){
        toyota.push(row.make)
    }else if(row.make === 'Renault'){
        renanlt.push(row.make)
    }else if(row.make === 'VW'){
        vw.push(row.make)
    }else if(row.make === 'Fiat'){
        fiat.push(row.make)
    }else if(row.make === 'Mercedes-Benz'){
        mercedesBenz.push(row.make)
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
    //convert to json file
    let data = JSON.stringify(avgTable, null, 2);
    fs.writeFileSync('avgTable.json', data);

    console.log(avgTable);

    //test wich cars are in make and howmany
    var counter = {};
    makeList.forEach(function(r) { counter[r] = (counter[r]||0) + 1;});
    console.log(counter);

     for(let m = 0; m < makeList.length ; m++){  
        if(newMakeList.indexOf(makeList[m]) === -1){
            newMakeList.push(makeList[m]);
        }; 
    }
     console.log(newMakeList);

})

//read contacts.csv
const convert = csv()
.fromFile('./contacts.csv')
.then((json) => {
    json.forEach((row) => {
     
       // console.log(row);
    });
})
