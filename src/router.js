import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

import Cadastro from "./routes/Cadastro"
import Login from "./routes/Login"
import Home from "./routes/Home"
import MeusPosts from "./routes/MeusPosts"
import AdicionarPost from "./routes/AdicionarPost"

const routes = new Router({
    mode:"history",
    routes:[
        {path:"/cadastro", component:Cadastro, name:"Cadastro"},
        {path:"/login", component:Login, name:"Login"},
        {path:"/", component:Home, name:"Home"},
        {path:"/meusposts", component:MeusPosts, name:"MeusPosts", children:[
            {path:"/meusposts/adicionarpost", component:AdicionarPost, name:"AdicionarPost"}
        ]},
       
    ]
})

export default routes