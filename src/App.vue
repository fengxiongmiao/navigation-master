<template>
  <div id="app">
    <!--    <img src="./assets/logo.png">-->
    <!--    <router-link to="/footer">尾页</router-link>-->
    <p>index1.vue 首页元素</p>
    <router-view/>
  </div>

</template>

<script>
    export default {
        name: 'App',
        metaInfo: {
            title: '测试标题2',
            meta: [
                {charset: 'utf-8'},
                {name: 'keywords', content: '关键词1 关键词er 关键词三'},
                {name: 'description', content: '测试简介3'},
                {name: 'author', content: 'startoffly'}

            ]
        }
    }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  p {
    font-weight: bold;
    font-family: 华文隶书, serif;
  }
</style>
