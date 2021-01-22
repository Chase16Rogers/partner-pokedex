import Axios from 'axios'
const baseURL = window.location.origin.includes('localhost') ? 'http://localhost:3000' : ''
export const api = Axios.create({
  baseURL,
  timeout: 8000
})
export const sandboxApi = Axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/chaseShiwani/pokemon',
  timeout: 3000
})
export const pokeApi = Axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon?limit=30',
  timeout: 3000
})
export const setBearer = function(bearer) {
  api.defaults.headers.authorization = bearer
}

export const resetBearer = function() {
  api.defaults.headers.authorization = ''
}
