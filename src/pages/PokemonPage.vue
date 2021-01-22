<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <h2>Pokemon</h2>
      </div>
    </div>

    <div class="row">
      <PokemonComponent v-for="poke in state.pokemon" :key="poke.name" :poke-prop="poke" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { logger } from '../utils/Logger'
import { AppState } from '../AppState'
// import PokemonComponent from '../components/PokemonComponent.vue'
import { pokemonService } from '../services/PokemonService'
export default {
  name: 'Pokemon',
  // components: {
  //   PokemonComponent
  // },
  setup() {
    const state = reactive({
      pokemon: computed(() => AppState.pokemon)
    })
    onMounted(async() => {
      try {
        await pokemonService.getPokemon()
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

</style>script
