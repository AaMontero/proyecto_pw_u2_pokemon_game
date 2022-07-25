<template>
  <div>
    <table>
      <tr>
        <td><label for="Dirección">Ingrese una dirección IP</label></td>
        <td><input v-model="DireccionIP" id="Direccion" type="text" /></td>
      </tr>
    </table>
    <br />
    <table>
      <tr>
        <td><label for="tipoIP">Tipo de IP: </label></td>
        <td>
          <p>{{ TipoIP }}</p>
        </td>
      </tr>
      <tr>
        <td><label for="Continente">Continente: </label></td>
        <td>
          <p>{{ Continente }}</p>
        </td>
      </tr>
      <tr>
        <td><label for="Pais">País: </label></td>
        <td>
          <p>{{ Pais }}</p>
        </td>
      </tr>
      <tr>
        <td><label for="Region">Región: </label></td>
        <td>
          <p>{{ Region }}</p>
        </td>
      </tr>
      <tr>
        <td><label for="Ciudad">Ciudad: </label></td>
        <td>
          <p>{{ Ciudad }}</p>
        </td>
      </tr>
      <tr>
        <td><label for="Organizacion">Organización: </label></td>
        <td>
          <p>{{ Organizacion }}</p>
        </td>
      </tr>
      <tr>
        <td><label for="Proveedor">Proveedor: </label></td>
        <td>
          <p>{{ Proveedor }}</p>
        </td>
      </tr>
      <tr>
        <td><label for="Imagen">Imagen: </label></td>
        <td>
          <img v-if="Imagen" v-bind:src="Imagen" alt="No se encuentra la imagen">
        </td>
      </tr>
    </table>
  </div>
  <div class="botton">
    <td><button v-on:click="consultarDatos2">Consultar</button></td>
  </div>
</template>

<script>
export default {
  data() {
    return {
      DireccionIP: "",
      TipoIP: "",
      Continente: "",
      Pais: "",
      Región: "",
      Ciudad: "",
      Organizacion: "",
      Proveedor: "",
      Imagen: null,
    };
  },
  methods: {
 async consultarDatos2() {
        const {type, continent, country, region, city, connection, flag } = await fetch(
        "https://ipwho.is/" + this.DireccionIP
      ).then((r) => r.json());
      const {org, isp} = connection;
      const {img} = flag; 
      this.TipoIP = type; 
      this.Continente = continent; 
      this.Ciudad = country; 
      this.Region = region; 
      this.Ciudad = city; 
      this.Organizacion = org; 
      this.Proveedor = isp; 
      this.Imagen = img; 


  },   
},
}
    // async ObtenerDireccion() {
    //   const {type} = await fetch("https://ipwho.is/" + this.DireccionIP).then(
    //     (r) => r.json()
    //   );
    //   console.log(type);

    //   this.TipoIP = type;
    // },
    // async ObtenerContinente() {
    //   const {continent} = await fetch(
    //     "https://ipwho.is/" + this.DireccionIP
    //   ).then((r) => r.json());

    //   this.Continente = continent;
    // },
    // async ObtenerPais() {
    //   const {country} = await fetch(
    //     "https://ipwho.is/" + this.DireccionIP
    //   ).then((r) => r.json());

    //   this.Pais = country;
    // },
    // async ObtenerRegion() {
    //   const {region} = await fetch(
    //     "https://ipwho.is/" + this.DireccionIP
    //   ).then((r) => r.json());

    //   this.Region = region;
    // },
    // async ObtenerCiudad() {
    //   const {city} = await fetch("https://ipwho.is/" + this.DireccionIP).then(
    //     (r) => r.json()
    //   );

    //   this.Ciudad = city;
    // },
    // async ObtenerOrganizacion() {
    //   const {connection} = await fetch(
    //     "https://ipwho.is/" + this.DireccionIP
    //   ).then((r) => r.json());
    //   const { org } = connection;

    //   this.Organizacion = org;
    // },
    // async ObtenerProveedor() {
    //   const {connection} = await fetch(
    //     "https://ipwho.is/" + this.DireccionIP
    //   ).then((r) => r.json());
    //   const { isp } = connection;
    //   this.Proveedor = isp;
    // },
    // async obtenerImagen() {
    //   const {flag} = await fetch(
    //     "https://ipwho.is/" + this.DireccionIP
    //   ).then((r) => r.json());
    //   const {img} = flag;
    //   this.Imagen = img;
    //   console.log(img)
    // },
    // consultarDatos() {
    //   this.ObtenerDireccion();
    //   this.ObtenerContinente();
    //   this.ObtenerPais();
    //   this.ObtenerRegion();
    //   this.ObtenerCiudad();
    //   this.ObtenerOrganizacion();
    //   this.ObtenerProveedor();
    //   this.obtenerImagen();
    // },
</script>

<style>
label {
  font-weight: bold;
}
table {
  margin: auto;
}
button {
  margin: auto;
}
.botton {
  margin-left: 47%;
}
</style>