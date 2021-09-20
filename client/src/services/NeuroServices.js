export default class NeuroService {
 
    static getModelList(model) {
        return fetch(`http://localhost:5000/api/${model}`)
        .then(res => res.json())
        .catch(error => this.handleError(error));
    }
 
    static getModel(model, id) {
        return fetch(`http://localhost:5000/api/${model}/${id}`)
          .then(res => res.json())
          .then(data => this.isEmpty(data) ? null : data)
          .catch(error => this.handleError(error));
    }

/*
  static getPokemons(): Promise<Pokemon[]> {
    return fetch('http://localhost:3001/pokemons')
      .then(response => response.json())
      .catch(error => this.handleError(error));
  }

  static getPokemon(id: number): Promise<Pokemon|null> {
    return fetch(`http://localhost:3001/pokemons/${id}`)
      .then(response => response.json())
      .then(data => this.isEmpty(data) ? null : data)
      .catch(error => this.handleError(error));
  }
 
  static updatePokemon(pokemon: Pokemon): Promise<Pokemon> {
    return fetch(`http://localhost:3001/pokemons/${pokemon.id}`, {
        method: 'PUT',
        body: JSON.stringify(pokemon),
        headers: {'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .catch(error => this.handleError(error));
  }

  static deletePokemon(pokemon: Pokemon): Promise<{}> {
    return fetch(`http://localhost:3001/pokemons/${pokemon.id}`, {
        method: 'DELETE',
        body: JSON.stringify(pokemon),
        headers: {'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .catch(error => this.handleError(error));
  }

  static addPokemon(pokemon: Pokemon): Promise<Pokemon> {
    delete pokemon.created;

    return fetch(`http://localhost:3001/pokemons`, {
        method: 'POST',
        body: JSON.stringify(pokemon),
        headers: {'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .catch(error => this.handleError(error));
  }

  static searchPokemon(term: string): Promise<Pokemon[]> {
    return fetch(`http://localhost:3001/pokemons?q=${term}`)
      .then(response => response.json())
      .catch(error => this.handleError(error));
  }

  
*/

    static isEmpty(data) {
        return Object.keys(data).length === 0;
    }

    static handleError(error) {
      console.log(error)
  }
}
