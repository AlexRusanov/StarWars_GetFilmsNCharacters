class CharacterApi extends FetchApi {
    constructor(){
        super();
    }

    getCharacters(url) {
        return super.get(url);
    }

    renderCharacters(characters) {
        return '<ul>' + characters.map(ch => `<li>${ch.name}</li>`).join('') + '</ul>';
    }


    //XHRApi
    //
    // getCharacters(url) {
    //     return super.get(url).then(response => {
    //         return JSON.parse(response);
    //     });
    // }
    //
    // renderCharacters(character) {
    //     return `<li>${character.name}</li>`;
    // }
}

class Character {
    constructor({name = ''}) {
        this.name = name;
    }
}
