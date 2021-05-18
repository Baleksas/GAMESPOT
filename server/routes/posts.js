import express from "express";
import { getReviews, createReview } from "../controllers/reviews.js";
import {
  getTops,
  createTop,
  updateTop,
  deleteTop,
} from "../controllers/tops.js";

const router = express.Router();

router.get("/reviews", getReviews);
router.post("/reviews", createReview);

router.get("/top", getTops);
router.post("/top", createTop);
router.patch("/top/:id", updateTop);
router.delete("/top/:id", deleteTop);

export default router;
