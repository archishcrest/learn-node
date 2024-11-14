const path = require('path');
const express = require('express');
const router = express.Router();


const userController = require('../controllers/users');


router.post('/', userController.addUser);


module.exports = router;