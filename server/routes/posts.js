import express from "express";
import { getReviews, createReview } from "../controllers/reviews.js";
import { getTops, createTop } from "../controllers/tops.js";

const router = express.Router();

router.get("/reviews", getReviews);
router.post("/reviews", createReview);

router.get("/top", getTops);
router.post("/top", createTop);

export default router;
