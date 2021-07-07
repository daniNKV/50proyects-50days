const jokeEl = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn')

jokeBtn.addEventListener('click', () => generateJoke())

generateJoke();
/*
function generateJoke () {
   const config = {
       headers: {
        'Accept': 'application/json'
    }
    }
    fetch('https://icanhazdadjoke.com', config)
        .then((response) => response.json())
        .then((data) => {
            jokeEl.innerHTML = data.joke;
    })
}*/

async function generateJoke () {
    const config = {
        headers: {
         'Accept': 'application/json'
     }
     }
     const response = await fetch('https://icanhazdadjoke.com', config)

     const data = await response.json()

     jokeEl.innerHTML = data.joke;
 }