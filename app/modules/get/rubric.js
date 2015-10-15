var db = require('../../../config/database.js');

module.exports = db.model('Rubric',{

	status:{ type: String, required : true},
	name:{ type: String, required : true},
	title:{type: String, required: true},
	grade:{type: String, required: true},
	dueDate:{type: Date, required: true},
	date:{ type: Date, required : true, default: Date.now
	}

})