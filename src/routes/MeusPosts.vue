<template>
  <div id="meusposts">
      <div id="post" v-if="carregado">
        <h1>Meus posts</h1>
        <div id="conteudopost" v-for="post in posts" :key="post.titulo">
            <h1>{{post.titulo}}</h1>
            <span>{{post.autor}}</span>
            <img :src="post.foto" />
            <p>{{post.descricao}}</p>
        </div>
      </div>
      <div v-else>
          <img src="../assets/loading.gif">
      </div>
      <div v-show="carregado" @click="adicionarPost" id="botaoadicionar">
          <span>+</span>
      </div>
  </div>
</template>

<script>
import firebase from "../services/firebaseConnection"
export default {
    name:"MeusPosts", 
    data(){
        return {
            uidLogado:0,
            posts:[],
            carregado:false
        }
    },
    async created() {
        //Pegando o usuario logado
        await firebase.database().ref("usuarioLogado").child("uid").on("value", (snapshot) => {
            this.uidLogado = snapshot.val().uid
        })
        this.pegarPosts()
    },
    methods: {
        adicionarPost () {
            this.$router.push({name:"AdicionarPost"})
        },
        async pegarPosts(){
            this.posts = []
            await firebase.database().ref("posts").child(this.uidLogado).on("value", (snapshot) => {
                snapshot.forEach((item) => {
                    let titulo = item.val().titulo
                    //Pegando a foto
                   firebase.storage().ref(this.uidLogado).child(titulo).getDownloadURL().then((url) => {
                        this.posts.push({
                            titulo,
                            descricao:item.val().descricao,
                            autor:item.val().autor,
                            foto:url
                        })
                    })
                })
            })
            this.carregado = true
        },
    },
}
</script>

<style scoped>
    #meusposts {
        text-align:center;
        align-items:center;
        justify-content:center;
        padding-top:7px;
        margin:0px auto;
        width: 60%;
        border: 1px solid red;
    }
    #botaoadicionar {
        width: 60px;
        border: 1px solid darkblue;
        background-color: whitesmoke;
        height: 60px;
        border-radius: 30px;
        position: fixed;
        top: 80%;
        left: 85%;
        text-align:center;
        justify-content: center;
        align-items:center;
        display: flex;
        cursor:pointer;
    }
</style>