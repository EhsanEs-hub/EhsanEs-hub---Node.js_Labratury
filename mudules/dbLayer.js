const usersSelect = require("./dbLayers/usersSelect");

var labDatabase = {

    report : {
		
		financial : {
			insert : null,
			select : null,
		},
		technecian : {
			insert : null,
			select : null,
			update : null,
		}			
	},
    request : {
		
		product : {
			insert : null,
			select : null,
			update : null,
			delete : null,
		},
		rowMaterial :{
			insert : null,
			select : null,
			update : null,
			delete : null,
		}			
	} ,
    user : {
		insert : null,
		select : require('./dbLayers/usersSelect.js'),
		update : null,
		delete : null,
		technecian : {
			insert : null,
			select : null,
			update : null,
			delete : null,
		}	
	},
    stock : {
		select : null
	},
}

module.exports.lab = labDatabase;