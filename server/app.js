const results = require('./data');

const express = require('express')
const cors = require('cors');

const app = express()
app.use(cors());

// Generate random result
function getRandomResult () {
    return results[Math.floor(Math.random()*results.length)]
}

// Retrieve all results
app.get('/results', (req, res) => {
    res.send(results);
});

//Retrieve random result
app.get('/results/random', (req, res) => {
    res.send(getRandomResult());
});


// Start server

app.listen(3000, () => console.log(`\nExpress departing now from port 3000!\n`))