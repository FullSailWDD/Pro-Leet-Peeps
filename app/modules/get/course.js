var db = require('../../../config/database.js');

module.exports = db.model('Course',{

	status:{ type: String},
	major:{ type: String},
	course:{type: String},
	description:{type: String},
	rubric:{
		name:{type: String},
		title:{type: String},
		grade:{type:String},
		dueDate:{type:String},
		rubricdescription:{type:String}
	},
	date:{ type: Date,  default: Date.now
	}

})

