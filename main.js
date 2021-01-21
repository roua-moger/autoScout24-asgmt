
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
let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;
let count6 = 0;
let count7 = 0;
let count8 = 0;

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
    for (let i = 0 ; i < dealer.length ; i++){
        sumD += parseInt(dealer[i]);
    }
    for(let i = 0 ; i < other.length ; i++){
        sumO += parseInt(other[i]);
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
    makeList.forEach((r) =>
     { counter[r] = (counter[r]||0) + 1;
    });
    console.log(counter);

     for(let i = 0; i < makeList.length ; i++){  
        if(newMakeList.indexOf(makeList[i]) === -1){
            newMakeList.push(makeList[i]);
        }; 
    }
     console.log(newMakeList);

     //calculate the percentual
     for(let i = 0; i < audi.length ; i++){
         if(audi[i]) count1++
     }
     for(let i = 0; i < mazda.length; i++){
         if(mazda[i]) count2++
     }
     for(let i = 0; i < bwm.length; i++){
        if(bwm[i]) count3++
    }
    for(let i = 0; i < toyota.length; i++){
        if(toyota[i]) count4++
    }
    for(let i = 0; i < renanlt.length; i++){
        if(renanlt[i]) count5++
    }
    for(let i = 0; i < vw.length; i++){
        if(vw[i]) count6++
    }
    for(let i = 0; i < fiat.length; i++){
        if(fiat[i]) count7++
    }
    for(let i = 0; i < mercedesBenz.length; i++){
        if(mercedesBenz[i]) count8++
    }

    //test how to count the percentual
    let audiPerc = count1 / makeList.length * 100;
    console.log(audiPerc);

    //creat a new json for the average data
    let percTable = {
        percList : [
            {
                make: newMakeList[0],
                pecentual : (count1 / makeList.length * 100).toFixed(0) + ' %',
            },
            {
                make: newMakeList[1],
                pecentual : (count2 / makeList.length * 100).toFixed(0) + ' %',
            },
            {
                make: newMakeList[2],
                pecentual : (count3 / makeList.length * 100).toFixed(0) + ' %',
            },
            {
                make: newMakeList[3],
                pecentual : (count4 / makeList.length * 100).toFixed(0) + ' %',
            },
            {
                make: newMakeList[4],
                pecentual : (count5 / makeList.length * 100).toFixed(0) + ' %',
            },
            {
                make: newMakeList[5],
                pecentual : (count6 / makeList.length * 100).toFixed(0) + ' %',
            },
            {
                make: newMakeList[6],
                pecentual : (count7 / makeList.length * 100).toFixed(0) + ' %',
            },
            {
                make: newMakeList[7],
                pecentual : (count8 / makeList.length * 100).toFixed(0) + ' %',
            }
        ]
    };

    //convert to json file
    let dataPerc = JSON.stringify(percTable, null, 2);
    fs.writeFileSync('percTable.json', dataPerc);
    console.log(percTable);
});

//read contacts.csv
const convert = csv()
.fromFile('./contacts.csv')
.then((json) => {
    json.forEach((row) => {
     
       // console.log(row);
    });
})
