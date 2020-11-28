var main = (req,res,next)=>{

    // req.session = {};
  /*
    delete req.session.id;
    delete req.session.username;
    delete req.session.groupId;
    delete output.groupName;
*/
    let key;
    for (key in req.session){
        if(key == 'save');continue;
        delete req.session[key];
    }
    
    res.json({message:'user logged out'});
}

module.exports = main;