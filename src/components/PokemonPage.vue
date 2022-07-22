<template>
<h2>¿Quién es este pokémon?</h2>
  <PokemonPicture :pokemonId ="1" :mostrarPokemon = "true"/>
  <PokemonOptions/>
</template>

<script>

import PokemonOptions from './PokemonOptions' 
import PokemonPicture from './PokemonPicture'


export default {
components:{
    PokemonPicture,
    PokemonOptions,
},

}
</script>

<style>

</style>