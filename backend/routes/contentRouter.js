import express from "express";
import { authenticatedUser } from "../middleware/authentication.js";
import { createContent,getAllContents,likeAndDislike,getSingleContent } from "../controllers/contentControllers.js";

const Router = express.Router()

Router.route('/create').post(authenticatedUser,createContent)
Router.route('/get-all-content').get(getAllContents)
Router.route('/single-content/:id').patch(authenticatedUser,likeAndDislike)
                                     .post(authenticatedUser,getSingleContent)

export default Router;