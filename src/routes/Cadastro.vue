<template>
  <div id="cadastro">
      <h1>Crie sua conta agora</h1>
      <input class="nome" type="text" v-model="user.nome" placeholder="Digite seu nome" />
      <br>
      <input class="email" type="email" v-model="user.email" placeholder="Digite seu email"/>
      <br>
      <input class="senha" type="password" v-model="user.senha" placeholder="Digite sua senha" />
      <br>
      <input class="botao" type="button" value="Criar conta" @click="cadastrarUsuario" /><br>
      <span>Já possui uma conta? <router-link to="/login">Clique aqui</router-link></span>
  </div>
</template>

<script>
import firebase from "../services/firebaseConnection"
export default {
    name:"Cadastro",
    data() {
        return {
            user:{
                nome:"",
                email:"",
                senha:""
            }
        }
    },
    methods: {
        async cadastrarUsuario() {
           await firebase.auth().createUserWithEmailAndPassword(this.user.email, this.user.senha).then(() => {
                firebase.database().ref("usuarios").push({
                nome:this.user.nome
            })
           })
        }
    }
}
</script>

<style>
    #cadastro {
        padding-top: 10px;
        align-items:center;
        text-align:center;
        justify-content:center;
        width: 70%;
        margin:0px auto;
    }
    input {
        width: 50%;
        height: 30px;
        margin-bottom:15px;
        border-radius: 3px;
    }
    a {
        text-decoration: none;
    }
    .nome {
        border: 1px solid blue;
    }
    .email {
        border:1px solid green;
    }
    .senha {
        border: 1px solid red;
    }
    .botao {
        width: 100px;
        height: 30px;
        background-color:lightblue;
        border: 1px solid blue;
    }
</style>