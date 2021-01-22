import { AppState } from '../AppState'
import Pokemon from '../Models/Pokemon'
import { pokeApi, sandboxApi } from './AxiosService'
// import Axios from 'axios'

class PokemonService {
  async getPokemon() {
    const res = await pokeApi.get('?limit=30')
    console.log(res.data.results)
    AppState.pokemon = res.data.results
  }

  async getOnePokemon(url) {
    const res = await pokeApi.get(`${url}`)
    this.createPokemon(res.data)
  }

  async getActivePokemon() {
    const res = await sandboxApi.get('')
    AppState.activePokemon = res.data
  }

  async createPokemon(data) {
    const newPoke = new Pokemon(data)
    AppState.activePokemon = newPoke
    console.log(AppState.activePokemon)
    await sandboxApi.post(AppState.activePokemon)
  }

  async editPokemon(id, data) {
    await sandboxApi.put(`${id}`, data)
  }
}

export const pokemonService = new PokemonService()
