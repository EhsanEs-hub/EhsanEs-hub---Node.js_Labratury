/*
    datas : [
        '0' => sql where Condition
        '1' => data1
        '2' => data2
    ]

    >> exp: [
        'userInfo.userInfoRegistrationDate = ?', 
        (con.registerStart == undefined) ? undefined : con.registerStart.toString(),
        (con.registerEnd == undefined) ? undefined : con.registerEnd.toString(),
    ],
*/
var creator = (datas)=>{
    var inputSqlDatas = [];
    var where = '';
    datas.forEach((Element, index)=>{

        if(Element[1] == undefined)return;
        if(where) where += ' AND \n';
    // Element[0] is for our query
        where += Element[0];
        inputSqlDatas.push(Element[1]);
    // if a data has two part for exp has a Between a to b
        if(Element[2] == undefined)return;
        inputSqlDatas.push(Element[2]);
    });
    if (where) where += '\n WHERE ' + where;
    return {
        query: where,
        data: inputSqlDatas
    };
}
module.exports = creator;