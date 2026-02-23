const path = require('path' );


const getAllProduct=(req,res)=>{
   res.sendFile(path.join(__dirname,"..","view","product.html"));
}



module.exports={
    getAllProduct
}