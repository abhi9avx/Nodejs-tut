const express = require('express');
const {response} = require("express");
const reqFilter = require('../dynamic-page-middleware/middleware')
const app= express();


// const reqFilter = (req,resp,next)=>{
//     //console.log('reqFilter')
//     if(!req.query.age){
//         resp.send("please provide age");
//     }
//     else if(req.query.age<18) {
//         resp.send("You can not access this page")
//     }
//     else{
//         next();
//     }
//
// }
// app.use(reqFilter)
app.get('/',(req,resp)=>{
    resp.send('welcome to Home Page')
})

app.get('/user',reqFilter,(req,resp)=>{
    resp.send('welcome to user page ')
})

app.get('/about',reqFilter, (req,resp)=>{
    resp.send('welcome to about page ')
})

app.get('/contact',reqFilter, (req,resp)=>{
    resp.send('welcome to contact page ')
})

app.listen(5200)