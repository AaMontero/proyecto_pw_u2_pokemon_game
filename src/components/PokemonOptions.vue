<template>
<div class = "options_container">
    <ul>
      <li
        v-for="pokemon in pokemons"
        :key="pokemon.id"
        v-on:click="
          $emit('eventoEmitido', { part1: pokemon.id, part2: pokemon.nombre })
        "
      >
        {{ pokemon.nombre }}
      </li>
  </ul>
  </div>
  
</template>

<script>
export default {
    props:{
        pokemons:{
            type:Array,
            required:true
        }
    }
    
}
</script>

<style>
    ul{
        list-style-type: none;
    }
    li{
        background-color: white;
        border-radius: 5px;
        border: 1px solid rgb(0, 0, 0.05);
        width: 400px;
        margin-top: 10px;
        cursor:pointer;
        
    }
    li:hover{
        background-color: gray;
    }
    .options_container{
        justify-content: center;
        display:flex;
    }
</style>