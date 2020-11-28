var ajax = {
    process : {},
    loading :'<div class="loading">Loading...</div>',
    post : function(url,send,loadingPosition,callbackFunction){
        var xmlhttp = new XMLHttpRequest();
        var id = 'id'+parseInt(Math.random()*100000000);
        xmlhttp.onreadystatechange = function() {
            if(ajax.process[id] != undefined)return;
            // console.log(ajax.process);           
            if(this.readyState == 4){
                if(ajax.process[id].loadingPosition)document.getElementById(ajax.process[id].loadingPosition).innerHTML = '';
                delete ajax.process[id];
                if(this.status == 200)callbackFunction(JSON.parse(this.responseText));
                else alert('process id:'+id+'error! state:'+this.readyState+'status:'+this.status);
            }             
        };
        setTimeout(()=>{
            if(ajax.process[id] != undefined){
                if(ajax.process[id].loadingPosition)document.getElementById(ajax.process[id].loadingPosition).innerHTML = '';
                delete ajax.process[id];
                alert('process id : '+id+'. its time out');
            }
        },5000);
        xmlhttp.open("POST",url,true);
        xmlhttp.setRequestHeader("content-type", "application/json");
        var send = JSON.stringify(send);
        xmlhttp.send(send);
        this.process[id] = {};
        this.process[id].loadingPosition = loadingPosition;
        this.process[id].url = url;
        if(loadingPosition)document.getElementById(loadingPosition).innerHTML = this.loading;
    },
}