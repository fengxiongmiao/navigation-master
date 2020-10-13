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
    import headerVue from './components/header';
    import footerVue from './components/footer';
    import bodyVue from './components/body';
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
                    // console.log("请求数据为：" + JSON.stringify(data));
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


  /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
  ::-webkit-scrollbar
  {
    width: 5px;
    height:5px;
    background-color: #333;
  }

  /*定义滚动条轨道 内阴影+圆角*/
  ::-webkit-scrollbar-track
  {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
    background-color: #333;
  }

  /*定义滑块 内阴影+圆角*/
  ::-webkit-scrollbar-thumb
  {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #a2a2a2;
  }

  /*定义滑块 内阴影+圆角*/
  ::-webkit-scrollbar-thumb:hover
  {
    background-color: #b2b2b2;
  }


  .nma{
    color:#242424;
    text-decoration:none;
    transition-property: color;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
    transition-delay: initial;
    display:block;
  }
  .nma:hover{
    color:#478cdc;
  }
  .nma:active{
    color:#376eae;
  }

  .bga{
    color:#f2f1f1;
    text-decoration:none;
    transition-property: background-color;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
    transition-delay: initial;
    cursor:pointer;
    display:block;
  }
  .bga:hover{
    background-color:#478cdc;
  }
  .bga:active{
    background-color:#376eae;
  }

  ::-moz-selection{ /*���Firefox*/
    background:#f2f1f1;
    color:#000;
  }

  ::selection {
    background:#f2f1f1;
    color:#000;
  }

  /*默认样式，主要是position:fixed实现屏幕绝对定位*/
  #gotoTop{
    display:none;
    position:fixed;
    right: 30px; bottom: 50px;
    cursor:pointer;
    width:50px;
    height:50px;
    text-align:center;
    line-height:50px;
    font-size:18px;
    background-color: #ffffff;
    transition: background-color .2s ease-in-out;
    border: 1px solid #ebf1f5;
    border-radius: 100%;
  }
  /*用CSS表达式(expression)来实现ie6下position:fixed效果*/
  #gotoTop{_position:absolute;_top:expression(documentElement.scrollTop + documentElement.clientHeight * 3/4 + "px")}
  /*鼠标进入的反馈效果*/
  #gotoTop:hover{
    background-color: #478cdc;
    color:#f2f2f2;
  }

  /* ============== ic ============*/
  .icon{
    padding-right:5px;
  }


</style>
