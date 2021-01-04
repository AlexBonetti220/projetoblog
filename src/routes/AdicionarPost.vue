<template>
  <div id="addpost">
      <h1>Adicionar post</h1>
      
          <input class="titulo" v-model="post.titulo" type="text" placeholder="Digite o título do post" />
          <input class="autor" v-model="post.autor" type="text" placeholder="Digite o nome do autor do post" />
          <legend>Insira uma imagem para o post</legend>
          <div id="image">
              <vue-image-chooser name="image-chooser" @change="salvarImagem" />
          </div>
          <legend>Insira a descrição do post</legend>
          <textarea v-model="post.descricao" cols="65" rows="10" placeholder="Digite a descrição do post"></textarea>
          <input type="button" @click="enviarFoto" value="Postar" id="postar" />
     
  </div>
</template>

<script>
import VueImageChooser from "vue-image-chooser"
import Vue from "vue"
import firebase from "../services/firebaseConnection"
Vue.use(VueImageChooser)
export default {
    name:"AdicionarPost",
    data() {
        return {
            post: {
                titulo: "",
                descricao:"",
                autor:"",
                img:null,
            },
            uidLogado:null
        }
    },
    async created() {
        await firebase.database().ref("usuarioLogado").on("value", (snapshot) => {
            this.uidLogado = snapshot.val().uid.uid
        })
    },
    methods: {
        salvarImagem (file) {
            this.post.img = file.file
        },
        
        criarBlob() {
            return new Blob([this.post.img], {type:this.post.img.type})
        },
        async salvarDados() {
            await firebase.database().ref("posts").child(this.uidLogado).push({
                titulo:this.post.titulo,
                descricao:this.post.descricao,
                autor:this.post.autor,
                dataPostagem:new Date()
            })
            .then(() => {
                alert("Post enviado com sucesso!")
            })
            .catch(() => {
                alert("Erro ao enviar o post, por favor tente novamente!")
            })
        },
        async enviarFoto() {
            //Salvando a imagem
            await firebase.storage().ref(this.uidLogado).child(this.post.titulo).put(this.criarBlob())
            .then(() => {
                //Chamando a função para salvar o realtime database
                this.salvarDados()
            })
            .catch((error) => {
                console.log(error.code)
            })
        }
    }
}
</script>

<style scoped>
    #postar {
        margin-top: 10px;
        background-color: greenyellow;
        border: 1px solid green;
    }
    .titulo {
        border: 1px solid blue;
    }
    .autor {
        border: 1px solid red;
    }
    #addpost {
        text-align:center;
        align-items:center;
        justify-content:center;
        width: 70%;
        margin:0px auto;
        padding-top:7px;
    }
    #image {
        width: 50%;
        margin:0px auto;
    }
    legend {
        padding-bottom: 15px;
        padding-top:15px;
    }
</style>