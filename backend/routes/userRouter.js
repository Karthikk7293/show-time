import express from "express";

import {logout, userLogin, userRegister,updateProfile,getUserDetails,updateChannel,addSaveVideos,loadUser} from '../controllers/userController.js'
import { authenticatedUser, } from "../middleware/authentication.js";

const Router = express.Router();


Router.route("/login").post(userLogin);

Router.route('/register').post(userRegister);

Router.route('/load').get(authenticatedUser,loadUser)

Router.route("/logout").get(logout)

Router.route('/update').put(authenticatedUser,updateProfile)

Router.route('/profile').get(authenticatedUser,getUserDetails)

Router.route("/update-channel").put(authenticatedUser,updateChannel)

Router.route('/add-saved-videos/:id').patch(authenticatedUser,addSaveVideos)

export default Router;