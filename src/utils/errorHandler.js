// export const errorHandler = (err, req, res, next) => {
//   console.error(err.message);
//   res.status(500).json({
//     error: err.message || "Internal Server Error",
//   });
// };

// export const errorHandler = (err, req, res, next) => {
//   console.error("FULL ERROR:", err);

//   res.status(500).json({
//     message: err.message,
//     stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
//   });
// };

export const errorHandler = (err, req, res, next) => {
  console.error("FULL ERROR:", err.message);

  // If error came from Axios (external API)
  if (err.response) {
    return res.status(err.response.status).json({
      error: err.response.data || err.message,
    });
  }

  // Normal error
  res.status(500).json({
    error: err.message || "Internal Server Error",
  });
};
