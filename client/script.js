const searchBtn = document.querySelector('#search');
const randomBtn = document.querySelector('#random');

searchBtn.addEventListener('click', getAllQuotes)
randomBtn.addEventListener('click', getRandomQuote)

function getAllQuotes(e) {
    e.preventDefault();
    fetch('http://localhost:3000/results')
        .then(resp => resp.json())
        .then(resp => {     })
}

function getRandomQuote(e) {
    e.preventDefault();
    fetch('http://localhost:3000/results/random')
        .then(resp => resp.json())
        .then(resp => {     })
}