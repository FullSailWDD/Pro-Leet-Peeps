var db = require('../../../config/database.js');

module.exports = db.model('Rubric',{

	status:{ type: String, required : true},
	major:{ type: String, required : true},
	course:{type: String, required: true},
	rubric:{type: String, required: true},

	date:{ type: Date, required : true, default: Date.now
	}

})