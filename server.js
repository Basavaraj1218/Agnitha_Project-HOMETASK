// server.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const API_URL = "https://www.googleapis.com/books/v1/volumes";

// Route to search for books
app.get('/api/books', async (req, res) => {
    const query = req.query.query;
    try {
        const response = await axios.get(API_URL, {
            params: {
                q: query,
                maxResults: 10,  // Limit the results
                langRestrict: 'en',
            }
        });
        res.json(response.data.items);
    } catch (error) {
        console.error("Error fetching data from Google Books API", error);
        res.status(500).send("Error fetching books data");
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
