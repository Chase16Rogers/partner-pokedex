
export default class Pokemon {
  constructor(data) {
    this.name = data.name
    this.img = data.sprites.other.dream_world.front_default
    this.weight = data.weight
    this.height = data.height
    this.types = data.types
    this.user = 'DefinitelyaUser'
  }
}
