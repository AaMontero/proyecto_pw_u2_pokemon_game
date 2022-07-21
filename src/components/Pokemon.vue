<template>
  <div class = "Bloque"> 
    <label for="nombre">Número del Pokemon: </label>
    <br>
    <input v-model = "numeroP" id="nombre" type="text" />
    <br>
    <button v-on:click="obtenerDatos"> Consultar</button>
    <h1>{{nombreP}}</h1>
    <img v-if="imagen" v-bind:src="imagen" alt="No se encuentra la imagen">
    <br>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      numeroP: "", 
      nombreP: "", 
      imagen: null, 
    };
  },
  methods: {
    async obtenerDatos(){
        this.obtenerNombreP();
        this.obtenerImagenP(); 
    },
    async obtenerNombreP(){
        const {name} = await fetch("https://pokeapi.co/api/v2/pokemon/"+this.numeroP).then((r) =>
        r.json()
      );

      this.nombreP = name; 
    },
    obtenerImagenP(){
        this.imagen = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"+this.numeroP+".svg"
    }


  },
};
</script>

<style>
#Bloque{
    display: block;
}


</style>