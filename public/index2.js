const express = require('express');
const path = require("path");
const app = express();


const publicPath = path.join(__dirname,'public');
// app.use(express.static(publicPath));
//
// console.log(publicPath);

app.get('',(req,resp)=>{
    resp.sendfile(`${publicPath}/home.html`)
})

app.get('/about',(req,resp)=>{
    resp.sendfile(`${publicPath}/about.html`)
})

app.get('*',(req,resp)=>{
    resp.sendfile(`${publicPath}/nopage.html`)
})



app.listen(5500);