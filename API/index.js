
const express = require('express')();
const cors = require("cors");
const products = require("./products")


const app = express();
app.use(express.json()); //express.json is the middleware

app.use(cors());

app.get("/products" , (req,res) =>{
  res.send(products);  
});
const port = process.env.POrt || 5555
//run node. to 
//request - from the user
// response - from the backend after a request is made
// use too swaggerHub to design an api
app.listen(
    port,
    ()=>console.log(`its alive on http://localhost:${port}`)
)