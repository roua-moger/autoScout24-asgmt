// fetch the data from API "https://autoscout24-api.herokuapp.com/" then add the right router

//creat avgTable with JS
let avgTable = document.getElementById('avgTable');

fetch("https://autoscout24-api.herokuapp.com/avgTable")
.then(response => response.json())
.then(data => {
    //console.log(data.avgList);
    let avg = data.avgList;
    for(let i = 0; i < avg.length; i++){
        let tabRow = createAvgTable(avg[i]);
        avgTable.appendChild(tabRow);
    }
});

function createAvgTable(data){
    let row = document.createElement("tr");
    row.innerHTML = `
    <td>${data.seller_type}</td>
    <td>${data.average}</td>
    `
    return row;
}

//create percTable in JS
let percTable = document.getElementById("percTable");
fetch("https://autoscout24-api.herokuapp.com/percTable")
.then(response => response.json())
.then(data => {
    //console.log(data.percList);
    let perc = data.percList;
    for(let i = 0; i < perc.length; i++){
        let percRow = createPercTable(perc[i]);
        percTable.appendChild(percRow);
    }
});

function createPercTable(data){
    let row = document.createElement("tr");
    row.innerHTML = `
    <td>${data.make}</td>
    <td>${data.pecentual}</td>
    `
    return row;

}