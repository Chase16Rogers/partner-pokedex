<template>
  <div class="col-4">
    <router-link :to="{name: 'ActivePokemon'}">
      <div class="card" @click="setActive">
        <div class="card-body text-center">
          <h4>{{ pokeProp.name }}</h4>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { pokemonService } from '../services/PokemonService'
import { logger } from '../utils/Logger'
export default {
  name: 'PokemonComponent',
  props: {
    pokeProp: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {
      setActive() {
        try {
          console.log(props.pokeProp.url)
          pokemonService.getOnePokemon(props.pokeProp.url)
        } catch (error) {
          logger.error(error)
        }
      }
    }
  }
}
</script>

<style>

</style>
