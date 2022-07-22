<template>
  <div class="pokemonContainer">
    <img
      class="pokemon_oculto"
      :src="imagenFuente"
      alt="No se encontro la imagen"
    />
    <img v-if="mostrarPokemon"
     v-bind:src="imagenFuente" alt="No se encontro la imagen" />
  </div>
</template>

<script>
export default {
props: {
    pokemonId:{
        type: Number,
        required:true, 
    },
    mostrarPokemon:{
        type: Boolean,
        required:true,
        default: false, 
    }
},
computed:{
        imagenFuente(){
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
        }
    }
};
</script>

<style>
.pokemon_oculto {
  filter: brightness(0);
}
img {
  height: 250px;
  position: absolute;
  right: 37%;
}
.pokemonContainer {
  height: 300px;
}
</style>