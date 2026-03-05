import express from "express";
import { getMovieInsights } from "../controllers/movieController.js";

const router = express.Router();

// POST /api/v1/movie
router.post("/", getMovieInsights);

export default router;
