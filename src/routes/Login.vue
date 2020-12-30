<template>
  <div id="login">
      <h1>Entre com sua conta</h1>
      <input class="email" type="email" v-model="user.email" placeholder="Digite seu email"/><br>
      <input class="senha" type="password" v-model="user.senha" placeholder="Digite sua senha" /><br>
      <input type="button" class="botao" value="Logar" @click="logarUsuario"/><br>
      <span>Não possui uma conta? <router-link to="/cadastro">Clique aqui</router-link></span>
  </div>
</template>

<script>
import firebase from "../services/firebaseConnection"
export default {
    name:"Login",
    data() {
        return {
            user:{
                email:"",
                senha:"",
            }
        }
    },
    methods: {
        async logarUsuario() {
            await firebase.auth().signInWithEmailAndPassword(this.user.email, this.user.senha)
        }
    }
}
</script>

<style scoped>
    #login {
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
    .email {
        border:1px solid green;
    }
    .senha {
        border: 1px solid red;
    }
    .botao {
        width: 100px;
        height: 30px;
        background-color: greenyellow;
        border: 1px solid green;
    }
</style>