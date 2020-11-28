var dbLayer = require('../../dbLayer.js');

/*
    INTERFACE domain.com/users/login
    POST :
        username,
        password
    RETURNS
        {error:'empty',field:''}
        {error:"username is undefined"}
*/
var main = (req,res,next)=>{

    let username,password;

    if (req.body.username == undefined) username = undefined;
    else username = req.body.username;  
    //if(!username) console.log('username is empty');
    // to inform client that blank should be filled
    if(!username){
        res.json({error:'empty',field:'username'});
        return;
    };

    if (req.body.password == undefined) password = undefined;
    else password = req.body.password;  
    // if(!password) console.log('password is empty');
    if(!password){
        res.json({error:'empty',field:'password'});
        return;
    };

    dbLayer.lab.user.select.smallInfo(

        {username:username},

        (err,resp,field)=>{

            if(resp[0] == undefined){
                res.json({error:"username is undefined"});
                return;
            };
            
            req.session.id = resp[0].userId;
            req.session.username = resp[0].userUsername;
            req.session.groupId = resp[0].userGroupId;
            req.groupName = resp[0].userGroupName;

            let output = {};
            output.id = resp[0].userId;
            output.username = resp[0].userUsername;
            output.groupId = resp[0].userGroupId;
            output.groupName = resp[0].userGroupName;
            res.json(output);
            // console.log(res);           
        }
    )
    // res.json({message:'im Login'});
};
module.exports = main;