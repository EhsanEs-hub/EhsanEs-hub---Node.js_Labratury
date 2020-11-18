/*
    datas : [
        '0' => query 
        '1' => data1
    ]

    >> exp: [
        [
            'columnName = ?',
            value,
        ],
        [..],
        ..
    ]
*/
var creator = (datas)=>{
    var inputSqlDatas = [];
    var query = '';
    datas.forEach((Element, index)=>{

        if(Element[1] == undefined)return;
        if(query) query += ' , \n';
    // Element[0] is for our query
        query += Element[0];
        inputSqlDatas.push(Element[1]);
    });
    if (query) query += '\n SET ' + query;
    else return false;
    return {
        query: query,
        data: inputSqlDatas
    };
}
module.exports = creator;