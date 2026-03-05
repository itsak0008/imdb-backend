export const fetchReviews = async (imdbId) => {
  // Mock reviews - replace with real API later
  const mockReviews = {
    default: `
      Brilliant storyline and strong acting.
      Cinematography was outstanding.
      Slightly slow pacing in the middle.
      Overall highly recommended. A masterpiece in filmmaking.
      Engaging from start to finish with memorable characters.
      The plot twists kept me on the edge of my seat.
      Absolutely loved every moment of this film.
    `,
  };
  return mockReviews.default;
};

// TODO: Integrate real reviews API
// Suggested services: IMDb API, IMDB-Scout, or web scraping
