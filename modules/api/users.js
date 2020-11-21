var insertGroup = require('./users/insertGroup.js');
var insertUser = require('./users/insertUser.js');
var insertInfo = require('./users/insertInfo.js');
var selectGroup = require('./users/selectGroup.js');
var selectUser = require('./users/selectUser.js');
var selectInfo = require('./users/selectInfo.js');
var deleteGroup = require('./users/deleteGroup.js');
var deleteUser = require('./users/deleteUser.js');
var deleteInfo = require('./users/deleteInfo.js');
var updateGroup = require('./users/updateGroup.js');
var updateUser = require('./users/updateUser.js');
var updateInfo = require('./users/updateInfo.js');

var users = (req,res,next)=>{

    let mode = req.params.mode.toLowerCase();
    let func = req.params.func.toLowerCase();

    switch (mode){

        case 'insert':
            switch(func){case 'Group': insertGroup(req,res,next);break;
                        case 'User': insertUser(req,res,next);break;
                        case 'Info': insertInfo(req,res,next);break;
                        default:res.send('mode not found');return;break;}
            break;

        case 'select':
            switch(func){case 'Group': selectGroup(req,res,next);break;
                        case 'User': selectUser(req,res,next);break;
                        case 'Info': selectInfo(req,res,next);break;
                        default:res.send('mode not found');return;break;}
            break;
        case 'delete':
            switch(func){case 'Group': deleteGroup(req,res,next);break;
                        case 'User': deleteUser(req,res,next);break;
                        case 'Info': deleteInfo(req,res,next);break;
                        default:res.send('mode not found');return;break;}
            break;
        case 'update':
            switch(func){case 'Group': updateGroup(req,res,next);break;
                        case 'User': updateUser(req,res,next);break;
                        case 'Info': updateInfo(req,res,next);break;
                        default:res.send('mode not found');return;break;}
            break;
    default:
    res.send('mode not found');return;
    break;
    }
    res.json({message : 'Hello Im user..!'});
};

module.exports = users;