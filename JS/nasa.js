// Import required modules
const express = require('express'); // Express framework for building web applications
const axios = require('axios'); // Axios for making HTTP requests
const app = express(); // Create an Express application
const port = 3000; // Define the port for the server to listen on

// Define a route for the root URL ('/')
app.get('/', (req, res) => {
    // Make a GET request to NASA's APOD (Astronomy Picture of the Day) API
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then(response => {
            // Extract the image URL from the response
            const imageUrl = response.data.hdurl; // 'hdurl' contains the high-definition image URL

            // Send an HTML response with an image tag pointing to the NASA image
            res.send(`<img src="${imageUrl}" alt="NASA Image">`);
        })
        .catch(error => {
            // Log any errors to the console
            console.error(error);

            // Send a 500 Internal Server Error response if there's an issue with the request
            res.status(500).send('Internal Server Error');
        });
});

// Start the server and make it listen on the specified port
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
