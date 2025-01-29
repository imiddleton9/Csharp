const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/photos', async (req, res) => {
    try {
        const sol = req.query.sol;
        const camera = req.query.camera;
        const apiKey = 'oOc6rNyYhuRihg3OMSjaT7OR2TRHr4IgsBNercfA';  // Use your API key if you have one
        const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&camera=${camera}&api_key=${apiKey}`;

        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error occurred while fetching data from NASA API');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});