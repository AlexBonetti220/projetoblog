<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import firebase from "./services/firebaseConnection"
export default {
  name: 'App',
  components: {
    
  },
  async created() {
    await firebase.auth().onAuthStateChanged((user) => {
      //Logou?
      if(user) {
        //Salvo o uid no banco de dados
        firebase.database().ref("usuarioLogado").child("uid").set({
          uid:user.uid
        })
        .then(() => {
          if(this.$router.history.current.name !== "Home")
            this.$router.push({name:"Home"})
        })        
      }else{
        if(this.$router.history.current.name !== "Login")
          this.$router.push({name:"Login"})
      }
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
