var db = require('../../../../config/database.js');

var Course = db.model('Course',{

	major:{ type: String},
	course:{type: String},
	description:{type: String},
	rubric:{
		name:{type: String},
		title:{type: String},
		grade:{type:Number, min:0,max:100},
		dueDate:{type:String},
		rubricdescription:{type:String}
	},
	date:{ type: Date,  default: Date.now
	}

})



module.exports = Course;