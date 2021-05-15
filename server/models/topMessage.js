import mongoose from "mongoose";

const topSchema = mongoose.Schema({
  player: String,
  maxScore: {
    default: 0,
    type: Number,
  },
  game: String,
});

const TopMessage = mongoose.model("TopMessage", topSchema);
export default TopMessage;
