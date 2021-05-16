import ReviewMessage from "../models/reviewMessage.js";
import TopMessage from "../models/topMessage.js";

export const getReviews = async (req, res) => {
  try {
    const reviewMessages = await ReviewMessage.find();
    res.status(200).json(reviewMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const createReview = async (req, res) => {
  const { message, maxScore, author, game } = req.body;
  const newReview = new ReviewMessage({ message, maxScore, author, game });
  try {
    await newReview.save();
    res.status(201).json(newReview);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getTops = async (req, res) => {
  try {
    const topMessages = await TopMessage.find();
    res.status(200).json(topMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const createTop = async (req, res) => {
  const top = req.body;
  const newTop = new TopMessage(top);
  try {
    await newTop.save();
    res.status(201).json(newTop);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
