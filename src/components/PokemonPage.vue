<template>
<h1 v-if="!pokemonCorrecto">Espere por favor...</h1>
<div v-else>
<h2>¿Quién es este pokémon?</h2>
  <PokemonPicture :pokemonId ="pokemonCorrecto.id" :mostrarPokemon = "false"/>
  <PokemonOptions :pokemons = "arreglo" />
</div>

</template>

<script>

import PokemonOptions from './PokemonOptions' 
import PokemonPicture from './PokemonPicture'
import getPokemonOptions from '../helpers/obtenerOpcionesPokemon'


console.log('Llamada al método'+ getPokemonOptions()); 

export default {
  data(){
    return{
      arreglo:[],
      pokemonCorrecto: null,
      mostrarPokemons: false,
    }
    
  },
components:{
    PokemonPicture,
    PokemonOptions,
},
methods:{
    async obtenerPokemonsArreglo(){
    this.arreglo = await getPokemonOptions()
    //0,1,2,3,4
    const numeroAleatorio = Math.floor(Math.random()*4)
    console.log(numeroAleatorio)
    this.pokemonCorrecto = this.arreglo[numeroAleatorio]
    //Importar varios metodos de un archivo
  }
},
mounted(){
  this.obtenerPokemonsArreglo();
}

}
</script>

<style>

</style>