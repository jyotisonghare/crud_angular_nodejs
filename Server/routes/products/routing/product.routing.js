const express = require('express');
const productRouter = express.Router();

var getAllProduct = require('../getAllProduct');
var addProduct = require('../addProduct');
var updateProduct = require('../updateProduct');
var deleteProduct = require('../deleteProduct');


productRouter.post('/getAllProduct', getAllProduct);
productRouter.post('/addProduct', addProduct);
productRouter.post('/updateProduct', updateProduct);
// productRouter.post('/deleteProduct', deleteProduct);


module.exports = productRouter;