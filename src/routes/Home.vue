<template>
  <div id="home">
      <Cabecalho />
      <div id="posts" v-if="carregado === true">
          <h1>Posts da comunidade</h1>
          <div id="conteudopost" v-for="post in allPosts" :key="post.titulo">
              <h1>{{post.titulo}}</h1>
              <span>{{post.autor}}</span><br>
              <img :src="post.foto" />
              <p>{{post.descricao}}</p>
          </div>
      </div>
      <div v-else>
          <h1>Loading...</h1>
      </div>
  </div>
</template>

<script>
import firebase from "../services/firebaseConnection"
import Cabecalho from "../components/Cabecalho"
export default {
    name:"Home",
    components: {
        Cabecalho
    },
    data() {
        return {
            allPosts:[],
            carregado:false
        }
    },
    async created() {
        this.pegarPosts()
    },
    methods: {
        async pegarPosts() {
            this.allPosts = []
            await firebase.database().ref("posts").on("value", (snapshot) => {
                snapshot.forEach((doc) => {
                    doc.forEach((item) => {
                        firebase.storage().ref("images").child(item.val().titulo).getDownloadURL().then((url) => {
                            this.allPosts.push({
                                titulo:item.val().titulo,
                                autor:item.val().autor,
                                foto:url,
                                descricao:item.val().descricao
                            })
                        })
                    })
                })
                this.carregado = true
            })
        }
    }
}
</script>

<style>

</style>