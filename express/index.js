const express =require("express");
const app = express();


app.get('',(req,resp)=>{
    //console.log("Data sent by browser => ",req.query.name )
    //resp.send('welcome, This is home page' + " Hey" +  " " +req.query.name)
    resp.send(`
    <h1>welcome, This is home page</h1>'
    <a href = "/about" > Go to about page </a>
    
`)
});

app.get('/about',(req,resp)=>{
    resp.send(`
    <input type = "text" placeholder = "user name" value = "${req.query.name}" />
    <button> Click Me </button>
    <a href = "/" > Go to Home page </a>
    `)
});

app.get('/help',(req,resp)=>{
    resp.send([{
        name:'abhinav',
        email:'abhinav@kumar.com'
    },
        {
            name:'abhishek',
            email:'abhishek@kumar.com'
        }
        ])
});

app.listen(4600);