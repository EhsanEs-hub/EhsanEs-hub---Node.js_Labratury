var express = require('express');
var app = express();
var dbLayer = require('./dbLayer.js');

/*
app.all('/users',(req,res,next)=>{
    res.json({message : 'Hello i am user..!'});
})
*/

app.all('/users/:mode/:func',require('./api/users.js'));

app.all('/users/login',require('./api/users/login.js'));

module.exports = app;
