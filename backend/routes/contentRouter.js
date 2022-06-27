import express from "express";
import { authenticatedUser } from "../middleware/authentication.js";
import { createContent,getAllContents,likeAndDislike,getSingleContent,addComment,getPopularContents,getSuggestedPost,getChannelDetails,subscribeChannel} from "../controllers/contentControllers.js";

const Router = express.Router()

Router.route('/create').post(authenticatedUser,createContent)
Router.route('/get-all-content').get(getAllContents)
Router.route('/single-content/:id').patch(authenticatedUser,likeAndDislike)
                                   .post(authenticatedUser,getSingleContent)
Router.route('/comment/:id').patch(authenticatedUser,addComment)
Router.route('/get-popular-contents/:id').post(getPopularContents)
Router.route('/get-suggested-contents').get(getSuggestedPost)
Router.route('/channel/:id').post(getChannelDetails)
Router.route('/subcribe/:id').post(authenticatedUser,subscribeChannel)

export default Router;