<template>
<h2>¿Quién es este pokémon?</h2>
  <PokemonPicture :pokemonId ="1" :mostrarPokemon = "true"/>
  <PokemonOptions :pokemons = "arreglo" />
</template>

<script>

import PokemonOptions from './PokemonOptions' 
import PokemonPicture from './PokemonPicture'
import getPokemonOptions from '../helpers/obtenerOpcionesPokemon'


console.log('Llamada al método'+ getPokemonOptions()); 

export default {
  data(){
    return{
      arreglo:[]
    }
    
  },
components:{
    PokemonPicture,
    PokemonOptions,
},
methods:{
    async obtenerPokemonsArreglo(){
    this.arreglo = await getPokemonOptions()
  }
},
mounted(){
  this.obtenerPokemonsArreglo();
}

}
</script>

<style>

</style>