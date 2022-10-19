const searchBtn = document.querySelector('#sbutton');
const luckyBtn = document.querySelector('#lucky');
const body = document.querySelector('body');

searchBtn.addEventListener('click', getAllResults);
luckyBtn.addEventListener('click', getRandomResult)


function getAllResults(e) {
    fetch('http://localhost:3000/results')
        .then(resp => resp.json())
        .then(showMovies)
}

function showMovies(results) {
    for (let m = 0; m < results.length; m++) {
        const element = results[m];
        const newH3 = document.createElement('h3');
        newH3.textContent = `Name: ${element.title}`;
        const newP = document.createElement('p');
        newP.textContent = `Description: ${element.desc}`;
        body.append(newH3);
        body.append(newP);
        
    }
    
}

function getRandomResult(e) {
    e.preventDefault();
    fetch('http://localhost:3000/results/random')
        .then(resp => resp.json())
        .then(resp => getRandomResult)
}
