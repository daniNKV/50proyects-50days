const APIURL = 'https://api.github.com/users/';
 
const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')

async function getUser(username) {
    try {
        const { data }= await axios(APIURL + username);
        createUserCard(data);
    } catch(err) {
        if (err.response.status == 404) {
            createErrorCard('Usuario no encontrado');
        }
    }
}

function createUserCard (user) {
    const cardHTML = `
        <div class="card">
            <div>
                <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
            </div>

            <div class="user-info">
                <h2>${user.name}</h2>
                <p>${user.bio}</p>

                <ul>
                    <li>${user.followers}<strong>Followers</strong></li>
                    <li>${user.following}<strong>Following</strong></li>
                    <li>${user.public_repos} <strong>Repositories</strong></li>
                </ul>

                <div id="repos">
                    <a href="#" class="repo">Repo 1</a>
                    <a href="#" class="repo">Repo 2</a>
                    <a href="#" class="repo">Repo 3</a>
                </div> <!-- Repos -->
            </div> <!-- User Info -->
        </div> <!-- Card -->
        `;
    main.innerHTML = cardHTML;
}

function createErrorCard(msg) {
    const cardHTML = `
        <div class="card" style="text-align: center">
            <h1>${msg}</h1>
        </div>`

    main.innerHTML = cardHTML
}
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const user = search.value;

    if(user) {
        getUser(user);
        search.value = '';
    }
})