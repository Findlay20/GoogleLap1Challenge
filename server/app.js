const results = require('./data');

const express = require('express')
const cors = require('cors');

const app = express()
app.use(cors());

app.get('/', (req, res) => res.send('Our GOTY API'));

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

// Find by id and handling for out-of-range IDs
app.get('/results/:id', (req, res) => {
    const result = results.find(r => r.id === parseInt(req.params.id));
    if(!result) return res.status(404).send('There is no result with this is id. Choose a number between 1 and 10.');
    res.send(result)
  });

// Start server

app.listen(3000, () => console.log(`\nExpress departing now from port 3000!\n`))
