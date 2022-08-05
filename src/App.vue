<template>
  <img src="./assets/logo.png" alt="Vue logo">
  <router-view/>
</template>

<script>

//import PokemonPage from './components/PokemonPage.vue'
import AboutPage from './modulos/pokemon/pages/AboutPage'
export default {
  name: 'App',  

  components: {
    //PokemonPage,
    AboutPage
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
