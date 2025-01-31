const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.port || 3000;

// Enable CORS
app.use(cors());

// Endpoint to get required data
app.get('/', (req, res) => {
    const response = {
        email:'khalfan5663@gmail.com',
        current_datetime: new Date().toISOString(),
        github_url: 'https://github.com/AishaKhalfan/HNG12-Internship',
    };
    res.status(200).json(response);
});

//Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
