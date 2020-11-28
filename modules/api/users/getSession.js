/* 
    INTERFACE /users/get/session
*/
var main = (req,res,next)=>{

    let output = {};
    output.id = req.session.userId;
    output.username = req.session.userUsername;
    output.groupId = req.session.userGroupId;
    output.groupName = req.session.userGroupName;
    res.json(output);

};
module.exports = main;