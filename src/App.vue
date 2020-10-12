<template>
  <div id="app">
    <!--    <img src="./assets/logo.png">-->
    <!--    <router-link to="/footer">尾页</router-link>-->
    <!--  header  -->
    <headerVue class="xinmove-header"></headerVue>
    <!--  body  -->
    <bodyVue class="xinmove-body"></bodyVue>
    <!--  footer  -->
    <footerVue class="xinmove-footer"></footerVue>

  </div>

</template>

<script>
    import {headInfo,dataUrl} from './vuex/request';
    import headerVue from './pages/header-body-test';
    import footerVue from './pages/footer';
    import bodyVue from './pages/body';
    export default {
        name: 'App',
        // metaInfo: {
        //     title: '测试标题2',
        //     meta: [
        //         {charset: 'utf-8'},
        //         {name: 'keywords', content: '关键词1 关键词er 关键词三'},
        //         {name: 'description', content: '测试简介3'},
        //         {name: 'author', content: 'startoffly'}
        //     ]
        // },
        data() {
            return {
                title: '',
                description: '这是一篇文章...',
                keywords:'',
                author:''
            }
        },
        components: {
            headerVue,bodyVue,footerVue
        },
        metaInfo() {
            return {
                title: this.title,
                meta: [
                    {name: 'description', content: this.description},
                    {name: 'keywords', content: this.keywords},
                    {name: 'author', content: this.author}
                ]
            }
        },
        created() {
            // this.initData();
            this.createdRequest();
        },
        methods: {
            createdRequest() {
                headInfo({}, res => {
                    // console.log(res)
                    let data = res.data.data;
                    console.log("请求数据为：" + JSON.stringify(data));
                    this.title = data.title;
                    this.description = data.description;
                    this.keywords = data.keywords;
                    this.author = data.author;

                })
            }
            // ,
            // initData() {
            //     this.axios.get(dataUrl+'/test/getInfo').then((resp) => {
            //         const data = resp.data.data;
            //         console.log("二次请求请求数据为：" + JSON.stringify(data));
            //         // 设置title时 metaInfo 会同时更新
            //         this.title = data.title;
            //         this.description = data.decription
            //     })
            // }
        }
    }
</script>

<style>
  @import "common/font/font-awesome.min.css";
  html{
    height:100%;
    width:100%;
  }
  body{
    padding:0;
    margin:0;
    border:0;
    background-color:#f1f5f8;
    font-family:Microsoft YaHei, SimSun;
    color:#242424;
    height:100%;
  }
  a{
    text-decoration:none;
    word-break: break-all;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
  }
  b{
    word-break: break-all;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
  }
  /*定义Placeholder*/
  *::-webkit-input-placeholder {
    color: #929292
  }
  *:-moz-placeholder {
    color: #929292
  }
  *:-ms-input-placeholder {
    /* IE10+ */
    color: #929292
  }


</style>
