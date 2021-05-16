import TopMessage from "../models/topMessage.js";
export const getTops = async (req, res) => {
  try {
    const topMessages = await TopMessage.find();
    res.status(200).json(topMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const createTop = async (req, res) => {
  const { player, maxScore, game } = req.body;
  const newTop = new TopMessage({ player, maxScore, game });
  try {
    await newTop.save();
    res.status(201).json(newTop);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
