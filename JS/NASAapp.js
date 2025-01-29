const express = require('express');
const axios = require('axios');

const app = express();
const port = 3001;

app.get('/', (req, res) => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then(response => {
            const data = response.data;
            const title = data.title;
            const explanation = data.explanation;

            const html = `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>${title}</title>
                    <style>
                        body {
                            font-family: 'Arial', sans-serif;
                            margin: 20px;
                        }
                        img {
                            max-height: auto;
                            width: 100%;
                        }
                    </style>
                </head>
                <body>
                    <h1>${title}</h1>
                    <p>${explanation}</p>
                    <img src="${data.url}" alt="${title}">
                </body>
                </html>
            `;

            res.send(html);
        })
        .catch(error => {
            res.status(500).send('Internal Server Error');
        });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
