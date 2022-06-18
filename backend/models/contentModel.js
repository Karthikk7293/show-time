import mongoose from "mongoose";


const contentShema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter the title !"]
  },
  description: {
    type: String,
    required: [true, "Please enter the description"]
  },
  thumbnail: {
    public_id: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  content: {
    public_id: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  views: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  comments: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      comment: {
        type: String,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      }
    },
  ],
  movie: {},

}, { timestamps: true })

export default mongoose.model("Content", contentShema);