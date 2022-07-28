const obtenerPokemon = async() =>{
    const vectorNumerico = construirVectorNumeros()
    const vectorObjetos = await convertirVectorNombres(vectorNumerico)
    return vectorObjetos
}

function getNumeroAleatorio(min, max){
    max++
    return  Math.floor(Math.random()* (max-min) + min) 
}
const construirVectorNumeros = () => {
    const arregloPokemonsNumero = [getNumeroAleatorio(1, 600)
        ,getNumeroAleatorio(1, 600),getNumeroAleatorio(1, 600),getNumeroAleatorio(1, 600)]
    return arregloPokemonsNumero
}
const convertirVectorNombres = async([p1,p2,p3,p4] = []) => {
    const data1 = await obtenerNombrePokeemonApi(p1)
    const data2 = await obtenerNombrePokeemonApi(p2)
    const data3 = await obtenerNombrePokeemonApi(p3)
    const data4 = await obtenerNombrePokeemonApi(p4)
    return [{nombre: data1.name, id: data1.id},
        {nombre: data2.name, id: data2.id},
        {nombre: data3.name, id: data3.id},
        {nombre: data4.name, id: data4.id}]

}
const obtenerNombrePokeemonApi = async(id) => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.json())
    return data

}


const getPokemonOptions = async() => {
    return await obtenerPokemon()
}

export default getPokemonOptions