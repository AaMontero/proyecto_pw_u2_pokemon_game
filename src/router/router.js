import {createRouter, createWebHashHistory} from 'vue-router'
import AboutPage from '../modulos/pokemon/pages/AboutPage.vue'
import ListPage from '../modulos/pokemon/pages/ListPage.vue'
import PokemonPage from '../modulos/pokemon/pages/PokemonPage.vue'
import NoPageFound from '../modulos/pokemon/pages/NoPageFound.vue'

const routes =[
    {path:'/', component:AboutPage},
    {path:'/list', component:ListPage},
    {path:'/pokemon', component:PokemonPage},
    {path: '/pathMatch(.*)', component:NoPageFound},
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
export default router; 