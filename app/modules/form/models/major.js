var db = require('../../../../config/database.js');

var Course = db.model('Course',{

	major:{ type: String},
	course:{type: String},
	description:{type: String},
	rubric:{
		name:{type: String},
		title:{type: String},
<<<<<<< HEAD
		grade:{type:String},
=======
		grade:{type:Number, min:0,max:100},
>>>>>>> 039d2385ea6647611820f37d0c34c43bd4f84baf
		dueDate:{type:String},
		rubricdescription:{type:String}
	},
	date:{ type: Date,  default: Date.now
	}

})



module.exports = Course;