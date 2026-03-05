# IMDb Insight Backend

A Node.js/Express API server that provides movie data and AI-powered sentiment analysis for the IMDb Insight Tool.

## 🚀 Overview

This backend service handles movie data retrieval from the OMDB API and performs sentiment analysis on movie reviews using OpenAI's GPT models. It serves as the data layer for the IMDb Insight frontend application.

## ✨ Features

- **Movie Data Retrieval**: Fetches comprehensive movie information from OMDB API
- **AI Sentiment Analysis**: Analyzes audience reviews using OpenAI GPT models
- **RESTful API**: Clean REST endpoints for movie analysis
- **Error Handling**: Comprehensive error handling with appropriate HTTP status codes
- **CORS Support**: Cross-origin resource sharing for frontend integration
- **Environment Configuration**: Secure API key management

## 🛠️ Tech Stack

- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **OpenAI API** - AI sentiment analysis
- **OMDB API** - Movie database API
- **Axios** - HTTP client for external API calls
- **CORS** - Cross-origin resource sharing
- **Dotenv** - Environment variable management

## 📋 Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **OMDB API Key** (free from http://www.omdbapi.com/)
- **OpenAI API Key** (from https://platform.openai.com/)

## 🚀 Installation

1. **Clone the repository** (if not already done):

   ```bash
   git clone https://github.com/itsak0008/imdb-backend.git
   cd imdb-backend
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Environment Setup**:
   Create a `.env` file in the root directory:
   ```env
   PORT=5000
   OMDB_API_KEY=your_omdb_api_key_here
   OPENAI_API_KEY=your_openai_api_key_here
   ```

## 🏃‍♂️ Running the Server

### Development Mode

```bash
npm run dev
```

Starts the server with nodemon for automatic restarts on `http://localhost:5000`

### Production Mode

```bash
npm start
```

Starts the server in production mode on `http://localhost:5000`

## 📁 Project Structure

```
imdb-backend/
├── src/
│   ├── config/
│   │   ├── axios.js      # Axios configuration
│   │   └── env.js        # Environment variables
│   ├── controllers/
│   │   └── movieController.js  # Main API logic
│   ├── routes/
│   │   └── movieRoutes.js      # API routes
│   ├── services/
│   │   ├── aiService.js        # OpenAI integration
│   │   ├── omdbService.js      # OMDB API client
│   │   └── reviewService.js    # Review data (mock)
│   ├── utils/
│   │   ├── errorHandler.js     # Error handling middleware
│   │   └── validateImdb.js     # IMDb ID validation
│   └── app.js                  # Express app setup
├── .env                        # Environment variables
├── server.js                   # Server entry point
├── package.json                # Dependencies and scripts
└── README.md                   # This file
```

## 📡 API Endpoints

### POST /api/v1/movie

Analyze a movie by IMDb ID and return movie data with sentiment analysis.

**Request Body:**

```json
{
  "imdbId": "tt0111161"
}
```

**Success Response (200):**

```json
{
  "movie": {
    "Title": "The Shawshank Redemption",
    "Year": "1994",
    "Rated": "R",
    "Released": "14 Oct 1994",
    "Runtime": "142 min",
    "Genre": "Drama",
    "Director": "Frank Darabont",
    "Writer": "Stephen King, Frank Darabont",
    "Actors": "Tim Robbins, Morgan Freeman, Bob Gunton",
    "Plot": "Two imprisoned men bond over a number of years...",
    "Language": "English",
    "Country": "United States",
    "Awards": "Nominated for 7 Oscars. 21 wins & 43 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5B...",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "9.3/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "91%"
      },
      {
        "Source": "Metacritic",
        "Value": "82/100"
      }
    ],
    "Metascore": "82",
    "imdbRating": "9.3",
    "imdbVotes": "2,800,000",
    "imdbID": "tt0111161",
    "Type": "movie",
    "DVD": "21 Dec 1999",
    "BoxOffice": "$28,884,312",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
  },
  "sentiment": {
    "summary": "Overall positive sentiment with praise for...",
    "classification": "Positive"
  }
}
```

**Error Responses:**

- `400 Bad Request`: Invalid IMDb ID format
- `404 Not Found`: Movie not found in OMDB
- `500 Internal Server Error`: Server or API errors

## 🔧 Services

### OMDB Service

- Fetches movie data from OMDB API
- Handles API errors and response validation
- Includes request/response logging

### AI Service

- Integrates with OpenAI GPT models
- Performs sentiment analysis on movie reviews
- Handles API quota limits and retries
- Provides fallback responses on failures

### Review Service

- Currently provides mock review data
- Designed for future integration with real review APIs
- Supports multiple review sources

## 🛡️ Error Handling

The application includes comprehensive error handling:

- **Validation Errors**: Invalid IMDb ID format
- **API Errors**: OMDB or OpenAI API failures
- **Network Errors**: Connection issues
- **Quota Errors**: OpenAI API limit exceeded
- **Fallback Responses**: Graceful degradation when services fail

## 🔐 Security

- API keys stored in environment variables
- Input validation for IMDb IDs
- CORS configuration for frontend integration
- Error messages don't expose sensitive information

## 🧪 Testing

### Manual Testing

```bash
# Test the API with curl
curl -X POST http://localhost:5000/api/v1/movie \
  -H "Content-Type: application/json" \
  -d '{"imdbId":"tt0111161"}'
```

### Development Testing

- Use tools like Postman or Insomnia for API testing
- Check server logs for debugging information
- Monitor OpenAI API usage and quotas

## 🚀 Deployment

### Environment Variables for Production

```env
PORT=5000
NODE_ENV=production
OMDB_API_KEY=your_production_omdb_key
OPENAI_API_KEY=your_production_openai_key
```

### Deployment Options

- **Heroku**: Easy Node.js deployment
- **Railway**: Modern app hosting
- **Vercel**: Serverless functions
- **AWS/DigitalOcean**: VPS deployment
- **Docker**: Containerized deployment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [OMDB API](http://www.omdbapi.com/) for movie data
- [OpenAI](https://openai.com/) for AI sentiment analysis
- [IMDb](https://www.imdb.com/) for movie information

## 📞 Support

If you encounter any issues:

- Check the server logs for error messages
- Verify API keys are correctly set
- Ensure OMDB and OpenAI services are accessible
- Open an issue on GitHub for bugs or feature requests

## 🔗 Related

- **Frontend Repository**: [imdb-insight](https://github.com/itsak0008/imdb-insight)
- **Live Demo**: [IMDb Insight Tool](https://imdb-insight.netlify.app/)
