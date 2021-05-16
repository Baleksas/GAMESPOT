import ReviewMessage from "../models/reviewMessage.js";

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
