const express = require('express');
const {response} = require("express");
const app= express();


const reqFilter = (req,resp,next)=>{
    //console.log('reqFilter')
    if(!req.query.age){
        resp.send("please provide age");
    }
    else if(req.query.age<18) {
        resp.send("You can not access this page")
    }
    else{
        next();
    }

}
app.use(reqFilter)
app.get('/',(req,resp)=>{
    resp.send('welcome to Home Page')
})

app.get('/user',(req,resp)=>{
    resp.send('welcome to Home page ')
})

app.listen(5200)