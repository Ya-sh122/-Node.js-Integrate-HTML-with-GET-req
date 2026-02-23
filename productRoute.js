const express = require('express');
const route = express.Router();

const productControl  = require('../controller/productController');


route.get('/', productControl.getAllProduct);



module.exports=route;



