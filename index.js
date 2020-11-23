var cookieSession = require('cookie-session');
var express = require('express');
var app = express();
// var dbLayer = require('./modules/dbLayer.js')
var api = require('./modules/api.js');
var keygrip = require('keygrip');
var fs = require('fs');

var options = {
    extentions : ['html','css','js','jpg','gif','png','ttf','otf' ],
    index : 'index.html'
}
app.use('/public/', express.static('./public', options));

// app.use('/', express.static('./public/index.html', options));

app.use(cookieSession({

    name: 'vn-sys-session',
   // keys: new keygrip(['key1','key2'], 'SHA384', 'base64'),
    keys :'test',
    maxAge: 30*60*1000
}));

app.use((req, res, next)=>{

    req.session.maxAge = 30*60*1000;
    req.sessionOptions.maxAge = req.session.maxAge || req.sessionOptions.maxAge;
    next();
});

app.all("/", (req, res, next)=>{ 
    /* dbLayer.lab.user.select.smallInfo({username:'goli'}, (err, res, fields)=>{
       dbLayer.lab.user.select.largeInfo({username:'goli'}, (err, res, fields)=>{
        console.log('err:',err); 
        console.log('res:',res);   
    }); */
   // res.send('Hello World!');
    // next();
    // res.json({message : 'Hello World!'});

    fs.readFile('./public/index.html',{encoding:'utf-8'}, (err,data)=>{
        res.send(data);
        console.log(err);
    });

});

app.use(api);

app.listen(3000, ()=>console.log('server running on port 3000 ...'));

  