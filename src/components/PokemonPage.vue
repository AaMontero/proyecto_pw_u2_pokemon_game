<template>
<h1 v-if="!pokemonCorrecto">Espere por favor...</h1>
<div v-else>
<h2>¿Quién es este pokémon?</h2>
  <PokemonPicture
      :pokemonId="pokemonCorrecto.id"
      :mostrarPokemon="mostrarPokemon"
    />
    <PokemonOptions
      :pokemons="arreglo  "
      @eventoEmitido="validarRespuesta($event)"
    />
    <div v-if="mostrarMensaje">
      <h1>{{ mensajeResultado }}</h1>
      <button v-on:click="resetearJuego">NuevoJuego</button>
    </div>
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
      mostrarPokemon: false,
      mensajeResultado: "",
      mostrarMensaje: false,
    }
    
  },
components:{
    PokemonPicture,
    PokemonOptions,
},
methods:{
    async cargaPokemonInicial(){
    this.arreglo = await getPokemonOptions()
    //0,1,2,3,4
    const numeroAleatorio = Math.floor(Math.random()*4)
    console.log(numeroAleatorio)
    this.pokemonCorrecto = this.arreglo[numeroAleatorio]
    //Importar varios metodos de un archivo
  },validarRespuesta(pokemonSeleccionadoHijo) {
      const idPoke = pokemonSeleccionadoHijo.part1;
      const namePoke = pokemonSeleccionadoHijo.part2;
      console.log("se emitio un evento desde el hijo ");
      console.log(idPoke);
      if (idPoke === this.pokemonCorrecto.id) {
        
        this.mensajeResultado = `Correcto, ${namePoke}`;
      } else {
        this.mensajeResultado = `Incorrecto, el pokemon correcto es: ${this.pokemonCorrecto.nombre}`;
        console.log("incorrecto");
      }
      this.mostrarPokemon = true;
      this.mostrarMensaje = true;
    },
    resetearJuego() {
      this.pokemonArr = [];
      this.pokemonCorrecto = null;
      this.mostrarPokemon = false;
      this.mensajeResultado = "";
      this.mostrarMensaje = false;
      this.cargaPokemonInicial();
    },
},
mounted(){
  this.cargaPokemonInicial();
}

}
</script>

<style>

</style>