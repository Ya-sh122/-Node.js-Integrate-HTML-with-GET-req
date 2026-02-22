const express = require('express');
const route = express.Router();


const productControl = require('../controller/productController');


route.get('/', productControl.getProducts);
route.post('/', productControl.addingProduct);
route.get('/:id', productControl.getproductByID);


module.exports=route;
