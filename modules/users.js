var perm = require('./datas/perm.json');

// console.log(perm);

var files = perm.api.users;
var perm = perm.perms;
var files = {};
var perms = {};

let key;
for(key in files){

    users[key.toLowerCase()] = {};
    perms[key.toLowerCase()] ={};
    users[key.toLowerCase()] = require(files[key].addr);
    perms[key.toLowerCase()] = files[key].perms;
}
// delete files;

// console.log(users);

var main = (req,res,next)=>{

    console.log('im in');

    let mode = req.params.mode.toLowerCase();
    let func = (mode == 'login') ? '' : (req.params.func == undifined) ? 'undifined' :req.params.func.toLowerCase();

    if (func === undefined){
        res.send('mode not found');return;
    }
    
    // console.log(perms[mode+func]);
    // res.send('Hello Im user..!');
    // console.log(req.session);

    var userGroupId = (req.session.userGroupId == undefined) ? '0' : req.session.userGroupId;
    let access = (perms[mode+func] === undefined) ? undefined : perms[mode=func].find((value)=>{
        if(value == userGroupId)return true;
        else return false;
    });
    // console.log(access);
    if(access == false)res.send('Not Found');
    if(access == undefined)res.send('Permission Denied');
    else perms[mode=func](req,res,next);

    res.json({message : 'Hello Im user..!'});
}

module.exports = main;

/*
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
*/