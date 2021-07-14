const API = {
    popularMovies: 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=01e6d84d518a3eb20243bc90b046d661&page=1',
    imgPath: 'https://image.tmdb.org/t/p/w1280',
    search: 'https://api.themoviedb.org/3/search/movie?api_key=01e6d84d518a3eb20243bc90b046d661&query="',
}

let DOM = {
    form: document.getElementById('form'),
    searchField: document.getElementById('search'),
    main: document.getElementById('main'),
    
}
// Get initial movies

getMovies(API.popularMovies)


async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    showMovies(data.results);
}

function showMovies (movies) {
    DOM.main.innerHTML = '';

    movies.forEach(movie => {
        const { title, poster_path, vote_average, overview } = movie;

        const movieEl = document.createElement('DIV');
        movieEl.classList.add('movie');

        movieEl.innerHTML = 
            `
                <img src="${API.imgPath + poster_path}" alt="${title}">
                <div class="movie-info">
                    <h3>${title}</h3>
                    <span class="${getClassByRate(vote_average)}">${vote_average}</span>
                </div>
                <div class="overview">
                    <h3>Overview</h3>
                        ${overview}
                </div>

            `
        DOM.main.appendChild(movieEl);
    });
}

function getClassByRate(vote) {
    if(vote >= 8) {
        return 'green';
    }else if (vote >= 5) {
        return 'orange';
    }else {
        return 'red';
    }

}

DOM.form.addEventListener('submit', (e) => {
    e.preventDefault();
    let searchTerm = DOM.searchField.value;
    
    if (searchTerm && searchTerm !== '') {
        getMovies(API.search + searchTerm);

        searchTerm = '';
    }
    
})


