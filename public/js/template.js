var templateEngine = {

    path : null,
    title : null,
    location : null,
    process : {},
    pages:{
        login:{
            open: function(){

            },
            api:{
                login: function(){
                    var username = document.getElementById('login-form-username');
                    var password = document.getElementById('login-form-password');
                    var post = {username=username, password=password};
                }
                
            }
        },
        user : null,
        backup : null,
        stock : null,
        request : null,
        report : null
    }

}