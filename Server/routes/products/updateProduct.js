var fs = require('fs');
var pool = require('../../common/commonFunction').pool;
const path = require('path');
var _ = require('underscore');

module.exports = function (req, res) {
      console.log("m in add update product");
      var id = req.body.id;
      var dataArr = req.body.formValues;
      var arrayOfObjects = [];
      const path = require('path');

      fs.readFile('data.json', 'utf8', function (err, data) {
            if (err) throw err;

            arrayOfObjects = data ? JSON.parse(data) : [];
            let tempArr = [];
            console.log('arrayOfObjects', dataArr)
            console.log('id', id)
            _.each(arrayOfObjects, function(val) {


                  if (val.id == id) {
                        dataArr['id'] = id;
                        val = dataArr;

                        console.log('val', val)
                        
                       
                  }
                  tempArr.push(val);

                  // _.each(obj, function(value, key) {
                
                });
                
            fs.writeFile('data.json', JSON.stringify(tempArr), 'utf-8', function (err) {
                  if (err) throw err
                  console.log('Done!')
                  return res.send({ status: 'success', data: tempArr });
            })


      });

}