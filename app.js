const express = require('express');
const app = express();
const port = 3000;

const randomTexts = [
    "Life is what happens when you're busy making other plans.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Do what you can, with what you have, where you are.",
    "Success is not the key to happiness. Happiness is the key to success.",
    "In the middle of every difficulty lies opportunity."
];

app.get('/', (req, res) => {
    const quotesList = randomTexts.map(text => `<li>&#8594; ${text}</li>`).join('');
    res.send(`
        <html>
            <head>
                <title>Random Quotes</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        text-align: center;
                        background-color: #f4f4f4;
                        padding: 50px;
                    }
                    h1 {
                        color: #333;
                    }
                    ul {
                        list-style-type: none;
                        padding: 0;
                    }
                    li {
                        font-size: 20px;
                        font-style: italic;
                        color: #555;
                        margin: 10px 0;
                    }
                </style>
            </head>
            <body>
                <h1>Random Quote Generator</h1>
                <ul>${quotesList}</ul>
            </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
