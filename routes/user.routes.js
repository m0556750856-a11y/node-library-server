

import express from 'express';
import {postSignInUser,postSignUpUser,getUser} from '../controllers/user.controllers.js';
import validateSchema from'../middleware/dateMiddleware.js'; // הייבוא של הפונקציה
import userSchema from'../middleware/schema.js'; // ה-Schema שהגדרנו קודם


const router = express.Router();




// הרשמה (Sign-up)
router.post('/signup', validateSchema(userSchema), postSignUpUser );

// התחברות (Sign-in)
router.post('/signin', validateSchema(userSchema), postSignInUser );

// הצגת כל המשתמשים
router.get('/', validateSchema(userSchema), getUser);

export default router;