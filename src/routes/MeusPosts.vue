<template>
  <div id="meusposts">
      <h1>Meus posts</h1>
      <div @click="adicionarPost" id="botaoadicionar">
          <span>+</span>
      </div>
  </div>
</template>

<script>
export default {
    name:"MeusPosts", 
    methods: {
        adicionarPost () {
            this.$router.push({name:"AdicionarPost"})
        }
    }
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