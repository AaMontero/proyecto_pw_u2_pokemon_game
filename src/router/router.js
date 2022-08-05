import {createRouter, createWebHashHistory} from 'vue-router'
import AboutPage from '@/modulos/pokemon/pages/AboutPage'
import ListPage from '../modulos/pokemon/pages/ListPage'
import PokemonPage from '../modulos/pokemon/pages/PokemonPage'

const routers =[
    {path:'/', component:AboutPage},
    {path:'/list', component:ListPage},
    {path:'/pokemon', component:PokemonPage},
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
export default router; 