const searchBtn = document.querySelector('#sbutton');
const luckyBtn = document.querySelector('#lucky');

searchBtn.addEventListener('click', getAllResults)
luckyBtn.addEventListener('click', getRandomResult)

function getAllResults(e) {
    e.preventDefault();
    window.location.replace('search.html')
    fetch('http://localhost:3000/results')
        .then(resp => resp.json())
        .then(resp => {     })
}

function getRandomResult(e) {
    e.preventDefault();
    fetch('http://localhost:3000/results/random')
        .then(resp => resp.json())
        .then(resp => {     })
}
