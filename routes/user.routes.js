
import {postSignInUser,postSignUpUser,getUser} from '../controllers/user.controllers'
const express = require('express');
const router = express.Router();
const users = require('./users');


// הרשמה (Sign-up)
router.post('/signup',postSignUpUser );

// התחברות (Sign-in)
router.post('/signin',postSignInUser );

// הצגת כל המשתמשים
router.get('/', getUser);

module.exports = router;