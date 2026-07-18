

import express from 'express';
import {postSignInUser,postSignUpUser,getUser} from '../controllers/user.controllers.js';


const router = express.Router();




// הרשמה (Sign-up)
router.post('/signup',postSignUpUser );

// התחברות (Sign-in)
router.post('/signin',postSignInUser );

// הצגת כל המשתמשים
router.get('/', getUser);

export default router;