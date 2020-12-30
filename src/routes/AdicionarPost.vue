<template>
  <div id="addpost">
      <h1>Adicionar post</h1>
      <form>
          <input type="text" placeholder="Digite o título do post" />
          <input type="text" placeholder="Digite o nome do autor do post" />
          <legend>Insira uma imagem para o post</legend>
          <div id="image">
              <vue-image-chooser name="image-chooser" @change="salvarImagem" />
          </div>
          <legend>Insira a descrição do post</legend>
          <textarea cols="65" rows="10" placeholder="Digite a descrição do post"></textarea>
      </form>
  </div>
</template>

<script>
import VueImageChooser from "vue-image-chooser"
import Vue from "vue"
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
            }
        }
    },
    methods: {
        salvarImagem (file) {
            this.post.img = file.file
        }
    }
}
</script>

<style scoped>
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