var express = require('express');
var app = express();
// var dbLayer = require('./modules/dbLayer.js')
var api = require('./modules/api.js');

app.all("/", (req, res, next)=>{ 

    /* dbLayer.lab.user.select.smallInfo({username:'goli'}, (err, res, fields)=>{
       dbLayer.lab.user.select.largeInfo({username:'goli'}, (err, res, fields)=>{
        console.log('err:',err); 
        console.log('res:',res);   
    }); */
   // res.send('Hello World!');
    // next();
    res.json({message : 'Hello World!'});
});

app.use(api);

app.listen(3000, ()=>console.log('server running on port 3000 ...'));

  