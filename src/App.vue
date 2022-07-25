<template>
  <ConsultaIP/>
</template>

<script>
import Pokemon from "./components/Pokemon.vue"
import PokemonPage from './components/PokemonPage.vue'
import PokemonPicture from '@/components/PokemonOptions.vue'
import PokemonOptions from '@/components/PokemonOptions.vue'
import ConsultaIP from '@/components/ConsultaIP.vue'
export default {
  name: 'App',

  components: {
    PokemonPage,
    ConsultaIP,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
