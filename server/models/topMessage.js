import mongoose from "mongoose";

const topSchema = mongoose.Schema({
  player: String,
  game: String,
  place: Number,
  maxScore: {
    default: 0,
    type: Number,
  },
});

const TopMessage = mongoose.model("TopMessage", topSchema);
export default TopMessage;
