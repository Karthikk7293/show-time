import express from "express";

import {logout, userLogin, userRegister,updateProfile,getUserDetails} from '../controllers/userController.js'
import { authenticatedUser, } from "../middleware/authentication.js";

const Router = express.Router();


Router.route("/login").post(userLogin);

Router.route('/register').post(userRegister);

Router.route("/logout").get(logout)
Router.route('/update').put(authenticatedUser,updateProfile)

Router.route('/profile').get(authenticatedUser,getUserDetails)

export default Router;