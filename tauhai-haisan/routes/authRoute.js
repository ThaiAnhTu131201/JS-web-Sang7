import express from 'express';
import {registerController,loginController} from '../controllers/authController.js';
//router object
const router = express.Router()

//routing
//Register || METHOD POST
router.post('/register',registerController)

//Login || METHOD POST
router.post('/login',loginController);

export default router;