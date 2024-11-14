const User = require('../models/user');


// Create and Save a new Tutorial
exports.addUser = (req, res) => {

	const user = {
	    name: req.body.name,
	    email: req.body.email,
	    //published: req.body.published ? req.body.published : false
	};

  	User.create(user)
  	.then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the user."
      });
    })
};