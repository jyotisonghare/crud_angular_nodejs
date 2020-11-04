var fs = require('fs');
var pool = require('../../common/commonFunction').pool;
const path = require('path');
var _ = require('underscore');

module.exports = function (req, res) {
    console.log("m in add Add product");
    var id = req.body.id;
    var dataArr = req.body.formValues;
    var arrayOfObjects = [];
    const path = require('path');
    fs.readFile('data.json', 'utf8', function (err, data) {
        if (err) throw err;

        arrayOfObjects = data ? JSON.parse(data) : [];
        arrayOfObjects = arrayOfObjects.length ? _.sortBy(arrayOfObjects, function (item) { return item.id; }) : [];
        let lastObjId = arrayOfObjects.length  ? arrayOfObjects[arrayOfObjects.length-1].id : 1;
        console.log(" lastObj #######", lastObjId);
        
        dataArr['id'] = lastObjId+1;
        arrayOfObjects.push(dataArr);
        console.log('arrayOfObjects', dataArr)

        fs.writeFile('data.json', JSON.stringify(arrayOfObjects), 'utf-8', function (err) {
            if (err) throw err
            console.log('Done!')
            return res.send({ status: 'success', data: arrayOfObjects });
        })
        
    });

}