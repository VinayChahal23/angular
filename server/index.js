const express = require('express');
// const json = require("server\assets\products.json");
const routehandler = require('./routes/routehandler')
const app = express();

app.use(express.json())


app.use('/',routehandler)

//write error middleware

// require('./routes/routes-handler')(app);

console.log("started");
app.listen(3000, ()=>{
    console.log("listening buddy");
})