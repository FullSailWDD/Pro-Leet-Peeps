var db = require('../../../config/database.js');

module.exports = db.model('Course',{

	status:{ type: String},
	major:{ type: String},
	course:{type: String},
	date:{ type: Date,  default: Date.now
	}

})

