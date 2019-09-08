const mainContainer = document.querySelector(".main");

const filmApi = new FilmApi(),
      characterApi = new CharacterApi();

filmApi.getFilms().then(films => {
    films.forEach(film => {
        const filmItem = new Film(film);

        const filmCard = document.createElement('div');
        filmCard.classList.add("film-card");
        filmCard.innerHTML = filmApi.renderFilm(film);

        mainContainer.appendChild(filmCard);

        Promise.all(
            filmItem.characters.map(url => {
                return characterApi.getCharacters(url);
            })
        ).then(response => {
            const characters = response.map(ch => new Character(ch));

            const charactersDiv = document.createElement("div");

            charactersDiv.innerHTML = characterApi.renderCharacters(characters);

            filmCard.appendChild(charactersDiv);
        })

        //XHRApi
        //
        // filmItem.characters.map(url => {
        //     characterApi.getCharacters(url).then(el => {
        //         const character = new Character(el);
        //
        //         const charactersUl = document.createElement('ul');
        //         charactersUl.innerHTML += characterApi.renderCharacters(character);
        //
        //         filmCard.appendChild(charactersUl);
        //     })
        // })
    })
});
