const searchBtn = document.querySelector('#sbutton');
const luckyBtn = document.querySelector('#lucky');

searchBtn.addEventListener('click', getAllQuotes)
luckyBtn.addEventListener('click', getRandomQuote)

function getAllQuotes(e) {
    e.preventDefault();
    window.location.replace('search.html')
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
