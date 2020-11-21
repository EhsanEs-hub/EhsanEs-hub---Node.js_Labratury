var conn = require('../mysql.js');
var whereCreatore = require('./dbLayerWhereCreatore.js');

var usersSelect = {
    smallInfo : (con, callbackFunction)=>{
    
        let sql = "SELECT * FROM user INNER JOIN userGroup USING (userGroupId)";
        let where = '';
        let username = null;
        if (!con) con = {};
        if (con.username !== undefined){
            username = con.username;
            where += 'user.userUsername = ? '
        }
        if (where) sql += '\n WHERE ' + where;
        console.log('sql:',sql);

        if (con.username !== undefined)conn.query(sql, username, callbackFunction) 
        else conn.query(sql, username, callbackFunction);

        
    },
    largeInfo : (con, callbackFunction)=>{
        
        let sql = "SELECT * FROM user INNER JOIN userGroup USING (userGroupId) INNER JOIN userInfo USING (userId)";
        let datas = [
            [
                    'user.userUsername = ? ', 
            (con.username == undefined) ? undefined : con.username.toString()
            ],
            [
                    'userInfo.userInfoFirstName = ? ', 
            (con.firstname == undefined) ? undefined : con.firstname.toString(),
            ],
            [
                    'userInfo.userInfoLastName = ? ', 
            (con.lastname == undefined) ? undefined : con.lastname.toString(),
            ],
            [
                'userInfo.userInfoBirthday = ? ', 
            (con.birthday == undefined) ? undefined : con.birthday.toString(),
            ],
            [
                'userInfo.userInfoEmail = ? ', 
            (con.email == undefined) ? undefined : con.email.toString(),
            ],
            [
                'userInfo.userInfoPhone = ? ', 
            (con.phone == undefined) ? undefined : con.phone.toString(),
            ],
            [
                'userInfo.userInfoNationalCode = ? ', 
            (con.nationalCode == undefined) ? undefined : con.nationalCode.toString(),
            ],
            [
                'userInfo.userInfoAddress = ? ', 
            (con.address == undefined) ? undefined : con.address.toString(),
            ],
            [
                'userInfo.userInfoPostCode = ? ', 
            (con.postCode == undefined) ? undefined : con.postCode.toString(),
            ],
            [
                'userInfo.userInfoRegistrationDate = ? ', 
            (con.register == undefined) ? undefined : con.register.toString(),
            ]
        ]
 
        datas = whereCreatore(datas);
        if (datas.query) sql += datas.query;
        console.log('sql:',sql);
        conn.query(sql, datas.data, callbackFunction);
       
    },
   
    inOut : ()=>{
        console.log('inOut is done ...')
    }, 
};

module.exports = usersSelect;