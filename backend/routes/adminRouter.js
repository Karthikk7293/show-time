import express from "express";

import {adminLogin,adminRegister,logout,getAllUsers} from '../controllers/adminController.js'
import { authenticatedAdmin } from "../middleware/authentication.js";

const Router = express.Router()



Router.route("/login").post(adminLogin);

Router.route('/register').post(adminRegister);

Router.route("/logout").get(logout);

Router.route('/allusers').get(getAllUsers)

export default Router;
