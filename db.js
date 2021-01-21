//to let the the heroku rout more tan one router

var percTable = require('./percTable.json');
var avgTable = require('./avgTable.json');

module.exports = function (){
    return {
        percTable : percTable,
        avgTable : avgTable,
    }
}
