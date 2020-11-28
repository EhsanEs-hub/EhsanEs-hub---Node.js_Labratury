var template = {

    path: null,
    title: null,
    location: null,
    process: {},
    session: {},
    setSession: function(){
        if(this.session.setSession)return;
        this.session.setSession = true;
        ajax.post('/users/get/session',{},'',(data)=>{
            template.session.setSession = false;
            if(data.error !== undefined){
                template.session.id = null;
                template.session.username = null;
                template.session.groupId = '0';
                template.groupName = 'guest';
                return;
            }
            template.session.id = data.userId;
            template.session.username = data.userUsername;
            template.session.groupId = data.userGroupId;
            template.groupName = data.userGroupName;
        })
    },
    pages:{
        home:{
            open: function(){
                if (template.session.groupId == undefined){
                    template.setSession();
                    setTimeout(()=>{template.pages.home.open();},2000);
                    return;
                }
                if (template.session.groupId == '0')
                   document.getElementById("container").innerHTML = templateDatas.HomeLoginContent;
                   else
                   document.getElementById("container").innerHTML = templateDatas.HomePannelContent;
                /*
                if (template.session.groupId !== '0'){
                ajax.post('/users/get/session',{username:'ehsan',password:'8811'},'page-loading',(data)=>{
                    console.log(data);
                })}
                */
            },
            api:{
                login: function(){
                    var username = document.getElementById('login-form-username');
                    var password = document.getElementById('login-form-password');
                    var post = {username:username, password:password};
                }               
            }
        },
        user : null,
        backup : null,
        stock : null,
        request : null,
        report : null
    }
};

template.pages.home.open();