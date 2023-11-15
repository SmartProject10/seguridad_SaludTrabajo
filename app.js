const express = require('express');
const app= express();
app.set('view engine', 'ejs');
app.use('/', require('./route'));
app.listen(5002, ()=>{
console.log("Esta corriendo en localhost:5002");
});