results = [
    {

    },
    {
        
    },
    {

    },
]



function getRandomResult () {
    return results[Math.floor(Math.random()*quotes.length)]
}

// Retrieve all results
app.get('/results', (req, res) => {
    res.send(quotes);
});

//Retrieve random result
app.get('/results/random', (req, res) => {
    res.send(getRandomQuote());
});


// Start server

app.listen(3000, () => console.log(`\nExpress departing now from port 3000!\n`))