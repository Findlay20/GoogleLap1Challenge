const searchBtn = document.querySelector('#sbutton');
const luckyBtn = document.querySelector('#lucky');
const searchSection = document.querySelector('#searchPage')
const resultSection = document.querySelector('#results');

searchBtn.addEventListener('click', getAllResults);
luckyBtn.addEventListener('click', getRandomResult)


function getAllResults(e) {
    fetch('http://localhost:3000/results')
        .then(resp => resp.json())
        .then(showMovies)
}


function hideSearch() {
    searchSection.style.display = 'none'
}

function showMovies(results) {
    hideSearch();
    for (let m = 0; m < results.length; m++) {
        const element = results[m];
        const newH3 = document.createElement('h3');
        newH3.textContent = `Name: ${element.title}`;
        const newP = document.createElement('p');
        newP.textContent = `Description: ${element.desc}`;
        resultSection.append(newH3);
        resultSection.append(newP);
    }
    const homepage = document.createElement('a');
    homepage.href = 'index.html';
    homepage.textContent = '<-- Back to search'
    resultSection.append(homepage)
}

function getRandomResult(e) {
    e.preventDefault();
    fetch('http://localhost:3000/results/random')
        .then(resp => resp.json())
        .then(showRandomResult)

        
}

