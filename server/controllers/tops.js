import TopMessage from "../models/topMessage";
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
