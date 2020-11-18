/*
    let info = [{property : [
            {name : 'resume'},
            {name : 'userPhone'},
            {name : 'educationBackground'},
            {name : 'child'}
        ]}];

        res = ObjectToArray(info,result);
        callbackFunction(err,res,fields)
 -------------------------------------------------------       
    exp > infos > [{
        change : true,
        property : [
            {name : 'resume',change : true,},
            {name : 'userPhone',change : true,},
            {name : 'educationBackground',change : true,},
            {name : 'child',change : true,}
        ]
    }]    
*/
// define a recrusive function
convertor(infos,data){
    var datas = [];
    var key;
    var objc;
    var output;
    infos.forEach((element,index) => {
        var obj = data;
        var name = element.name;
        // change is true as default 
        var change = element.change === false ? false : true;
        var property = element.property;
        if(change){
            key = null;
            objc = name ? obj[name] : obj;
            output = [];
            for (key in objc){
                if(property)output.push(convertor(property,objc[key]));
                else output.push(objc[key]);
            };
            if(name)data[name] = output;
            else data = output;
        }
    });
    return data;
}
module.exports = convertor;