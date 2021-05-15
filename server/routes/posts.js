import express from "express";
import {
  getReviews,
  createReview,
  getTops,
  createTop,
} from "../controllers/reviews.js";

const router = express.Router();

router.get("/reviews", getReviews);
router.post("/reviews", createReview);

router.get("/top", getTops);
router.post("/top", createTop);

export default router;
