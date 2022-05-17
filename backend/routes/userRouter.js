import express from "express";

import {logout, userLogin, userRegister} from '../controllers/userController.js'

const Router = express.Router();


Router.route("/login").post(userLogin);

Router.route('/register').post(userRegister);

Router.route("/logout").get(logout)

export default Router;