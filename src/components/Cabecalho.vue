<template>
  <div id="cabecalho">
      <ul>
          <router-link tag="li" to="/">Posts da comunidade</router-link>
          <router-link tag="li" to="/meusposts">Meus posts</router-link>
          <li @click="deslogarUsuario">Sair</li>
      </ul>
  </div>
</template>

<script>
import firebase from "../services/firebaseConnection"
export default {
    name:"Cabecalho",
    methods: {
        async deslogarUsuario(){
            await firebase.auth().signOut()
        }
    }
}
</script>

<style scoped>
    #cabecalho {
        width: 100%;
        text-align:center;
        justify-content: center;
        align-items:center;
    }
    ul{
        list-style:none;
        padding:0px;
        margin:0px;
    }
    li{
        display:inline-block;
        width:33.1%;
        border: 1px solid blue;
    }
    li:hover {
        color:white;
        cursor:pointer;
        background-color:blue;
    }
</style>