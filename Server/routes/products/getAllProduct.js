var fs = require('fs');
var pool = require('../../common/commonFunction').pool;
const path = require('path');
var _ = require('underscore');

module.exports = function (req, res) {
console.log("m in add product");
var data1 = [];
const path = require('path');

fs.readFile('data.json', 'utf8', function (err, data) {
      if (err) throw err;
      data1 = data ? JSON.parse(data) : [];
      data1 = data1.length ?  _.sortBy( data1, function( item ) { return item.id; } ) : [];
      return res.send({ status: 'success', data: data1 });
 });
 
}