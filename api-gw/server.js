// server.js
require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// CORS ayarları
app.use(cors());

app.get('/api/news', async (req, res) => {
  const { category } = req.query;
  const apiKey = process.env.API_KEY;
  const newsApiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}${category ? `&category=${category.toLowerCase()}` : ''}`;

  try {
    const response = await axios.get(newsApiUrl);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).json({ message: 'Error fetching news' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
