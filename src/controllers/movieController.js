import { fetchMovie } from "../services/omdbService.js";
import { fetchReviews } from "../services/reviewService.js";
import { analyzeSentiment } from "../services/aiService.js";
import { validateImdbId } from "../utils/validateImdb.js";

export const getMovieInsights = async (req, res, next) => {
  try {
    const { imdbId } = req.body;
    console.log(imdbId);

    if (!validateImdbId(imdbId)) {
      return res.status(400).json({ error: "Invalid IMDb ID" });
    }

    const movie = await fetchMovie(imdbId);
    // console.log(movie);
    const reviews = await fetchReviews(imdbId);
    // console.log(reviews);
    const sentiment = await analyzeSentiment(reviews);

    res.json({ movie, sentiment });
  } catch (error) {
    next(error);
  }
};
