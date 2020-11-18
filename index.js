var express = require('express');
var app = express();
var dbLayer = require('./mudules/dbLayer.js')


app.all("/", (req, res, next)=>{ 

    // dbLayer.lab.user.select.smallInfo({username:'goli'}, (err, res, fields)=>{
    dbLayer.lab.user.select.largeInfo({firstname:'goli'}, (err, res, fields)=>{
        console.log('err:',err); 
        console.log('res:',res);   
    });
    res.send('Hello World!');
	next();
});

app.listen(3000, ()=>console.log('server running on port 3000 ...'));
