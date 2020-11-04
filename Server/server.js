var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var api = require('./api');




app.use(bodyParser.json({limit: '1500mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '3000mb', extended: true}))
app.use(function (req, res, next) { //allow cross origin requests
     /*var err = new Error('Not Found');
   err.status = 404;
   next(err);*/

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');

//  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  // Pass to next layer of middleware
  next();
 });

/**Read all path of APIS */
app.use('/api', api);

// app.get('/', function(req, res){
//    res.send("Hello world!");
// });


app.listen(3000);
console.log(" App is listening port 3000 ");
