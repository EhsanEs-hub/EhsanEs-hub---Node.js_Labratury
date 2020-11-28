var perm = require('.././datas/perm.json');

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
delete files;

// console.log(users);

var main = (req,res,next)=>{

    console.log('im in');

    let mode = req.params.mode.toLowerCase();
    let func = (mode == 'login' || mode == 'logout') ? '' : (req.params.func == undefined) ? 'undifined' : req.params.func.toLowerCase();

    if (func === undefined){
        res.json({error:'404',message:'mode not found'});return;
    }
    
    // console.log(perms[mode+func]);
    // res.send('Hello Im user..!');
    // console.log(req.session);

    var userGroupId = (req.session.userGroupId == undefined) ? '0' : req.session.userGroupId;
    let access = (perms[mode+func] === undefined) ? false : perms[mode+func].find((value)=>{
        if(value == userGroupId)return true;
        else return false;
    });
    // console.log(access);
    if(access == false)res.json({error:'404',message:'not found'});
    if(access == undefined)res.json({error:'403',message:'Permission Denied'});
    else users[mode+func](req,res,next);

    res.json({message : 'Hello Im user..!'});
}

module.exports = main;