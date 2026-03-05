import axiosInstance from "../config/axios.js";
import { OMDB_API_KEY } from "../config/env.js";

export const fetchMovie = async (imdbId) => {
  // console.log(OMDB_API_KEY);
  const response = await axiosInstance.get("https://www.omdbapi.com/", {
    params: {
      i: imdbId,
      apikey: OMDB_API_KEY,
    },
  });

  if (response.data.Response === "False") {
    throw new Error(response.data.Error);
  }

  return response.data;
};
