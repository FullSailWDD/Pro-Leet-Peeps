var db = require('../../../config/database.js');

module.exports = db.model('Course',{

	status:{ type: String, required : true},

	
	date:{ type: Date, required : true, default: Date.now
	}

})