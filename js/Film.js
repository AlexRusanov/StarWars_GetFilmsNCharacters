class FilmApi extends FetchApi {
    constructor() {
        super();
    }

    getFilms() {
        return super.get("https://swapi.co/api/films/").then(response => {
            if(!Array.isArray(response.results)) {
                return [];
            }

            return response.results;
        })
    }

    //XHRApi
    //
    // getFilms() {
    //     return super.get('https://swapi.co/api/films/')
    //         .then(response => {
    //             if (!Array.isArray(JSON.parse(response).results)) {
    //                 return [];
    //             }
    //
    //             return JSON.parse(response).results;
    //         })
    // }
    //
    renderFilm(film) {
        return `<h2>Title: ${film.title}</h2>
                <p>Part: ${film.episode_id}</p>
                <p>Short description: ${film.opening_crawl}</p>
                <p>Characters:</p>`;
    }
}

class Film {
    constructor({title = '', episode_id = '', opening_crawl = '', characters = []}) {
        this.title = title;
        this.episode_id = episode_id;
        this.opening_crawl = opening_crawl;
        this.characters = characters;
    }
}