
const app = require('express')();
const port = 5555;

//run node. to 
//request - from the user
// response - from the backend after a request is made
// use too swaggerHub to design an api
app.listen(
    port,
    ()=>console.log(`its alive on http://localhost:${port}`)
)