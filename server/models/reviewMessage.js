import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
  message: String,
  author: String,
  maxScore: {
    default: 0,
    type: Number,
  },
});

const ReviewMessage = mongoose.model("ReviewMessage", reviewSchema);
export default ReviewMessage;
