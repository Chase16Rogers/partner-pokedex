<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-7">
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" :src="state.active.img" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">
              Card title
            </h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, computed, reactive } from 'vue'

import { AppState } from '../AppState'
import { pokemonService } from '../services/PokemonService'
import { logger } from '../utils/Logger'
export default {
  name: 'ActivePokemon',
  props: {
    activeProp: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const state = reactive({
      active: computed(() => AppState.activePokemon)
    })
    onMounted(async() => {
      try {
        if (!AppState.activePokemon) {
          pokemonService.getActivePokemon()
        }
      } catch (error) {
        logger.error(error)
      }
    })
    return {
      state
    }
  }
}
</script>

<style>

</style>
