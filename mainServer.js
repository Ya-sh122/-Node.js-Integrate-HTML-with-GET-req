const express = require('express');
const app = express();


const productRoutes = require('./routes/productRoutes');


app.use('/products', productRoutes);


app.listen(3000,()=>{console.log('Ecom server is running at 3000')});



