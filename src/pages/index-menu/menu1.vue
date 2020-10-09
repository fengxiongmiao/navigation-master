<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div class="card-dwg-hrefc">

    <div class="card-dwg-title">
      <span><i class="icon fa fa-youtube-play fa-lg fa-fw"></i>音乐 / 电影 / 番剧 / 种子资源</span>
    </div>
    <!--    key为序号    -->
    <a class="card-dwg-href" v-for="(value,key) in cards"  target="_blank" :href=value.url
         v-bind:key=value.id >
      <div class="card-dwg-href-div">
        <div class="card-dwg-href-img" :style="'background-image: url('+value.img+');'"></div>
        <div class="card-dwg-href-name">{{value.name}}</div>
        <div class="card-dwg-href-abstract" :title=value.description>{{value.description}}</div>
      </div>
    </a>
    <a class="card-dwg-href" href="http://halihali.li/" target="_blank">
      <div class="card-dwg-href-div">
        <div class="card-dwg-href-img" style="background-image:
        url('../../assets/image/uploadpic/xinmove_com_halihali46asdwda456a74w6.png');"></div>
        <div class="card-dwg-href-name">哈哩哈哩</div>
        <div class="card-dwg-href-abstract" title="在线观看各类视频">在线观看各类视频</div>
      </div>
    </a>

    <a class="card-dwg-href" href="http://www.downfi.com/video/" target="_blank">
      <div class="card-dwg-href-div">
        <div class="card-dwg-href-img" style="background-image: url('../../assets/image/uploadpic/dwgicon_e730a8c8f7bbe579779b24112d568441.jpeg');"></div>
        <div class="card-dwg-href-name">小视频下载</div>
        <div class="card-dwg-href-abstract" title="给链接下视频 支持爱奇艺、腾讯、优酷、快手、土豆、迅雷、公众号、QQ浏览器">给链接下视频 支持爱奇艺、腾讯、优酷、快手、土豆、迅雷、公众号、QQ浏览器</div>
      </div>
    </a>
    <a class="card-dwg-href" href="http://listen1.github.io/listen1/" target="_blank">
      <div class="card-dwg-href-div">
        <div class="card-dwg-href-img" style="background-image: url('../../assets/image/uploadpic/dwgicon_493ed9460373b1f9476f2e68671ea6bf.jpeg');"></div>
        <div class="card-dwg-href-name">Listen 1</div>
        <div class="card-dwg-href-abstract" title="全网音乐 + 全平台客户端">全网音乐 + 全平台客户端</div>
      </div>
    </a>
  </div>
</template>

<script>
    import {testInfo,dataUrl} from '../../vuex/request';
    export default {
        name: 'menu1',
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
                cards: []
            }
        },

        created() {
            // this.initData();
            this.createdRequest();
        },
        methods: {
            createdRequest() {
                testInfo({}, res => {
                    // console.log(res)
                    let data = res.data.data;
                    console.log("请求数据为：" + JSON.stringify(data));
                    // for(let index in data) {
                    //     array[index].name;
                    //     console.log(index,array[index]);
                    //
                    // }
                    this.cards = data;
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

<style scoped>
  /* ============== body =========== */
  .xinmove-body{
    margin:0 auto;
    width:auto;
    min-height:100%;
    margin-top:40px;
    margin-bottom:40px;
    padding-bottom:30px;
    max-width:1170px;
    min-width:600px;
  }

  /* ============== card =========== */

  .card-dwg-title{
    height:auto;
    padding:20px 0px;
    margin:10px auto;
    font-size:16px;
    text-align:left;
    clear:both;
  }

  .card-dwg-title:first-child{
    margin:0 0 10px 0;
    padding:0 0 20px 0;
  }

  .card-dwg-hrefc{
    height:auto;
    width:auto;
    padding:0 50px;
    margin:0px 0px 10px 0px;
    min-width:500px;
  }
  .card-dwg-href{
    width:25%;
    height:80px;
    margin-bottom:20px;
    display:inline-block;
    float:left;
    box-sizing: border-box;
  }
  @media screen and (min-width: 320px) and (max-width: 1110px){
    .card-dwg-href{
      width:33%;
    }
  }
  @media screen and (max-width: 850px){
    .card-dwg-href{
      width:50%;
    }
  }
  /*
  A:hover  B{  改变 B 的样式 }
  这样的话A得是B的父级，像这样：
  这种写法不兼容ie6（ie6只支持a链接伪类）
  */
  .card-dwg-href:hover .card-dwg-href-name{
    color:#478cdc;
  }
  .card-dwg-href:hover .card-dwg-href-abstract{
    color:#b9b9b9;
  }

  .card-dwg-href-div{
    padding:10px 15px;
    height:60px;
    margin-right:15px;
    background-color:#ffffff;
    border-radius: 4px;
    transition: box-shadow 0.3s ease-in-out;
  }
  .card-dwg-href-div:hover{
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  }

  .card-dwg-href-img{
    width: 32px;
    height: 32px;
    background-size:32px 32px;
    background-repeat:no-repeat;
    border-radius: 16px;
    overflow: hidden;
    margin-right: 8px;
    display: inline-block;
    margin-top:11px;
    float:left;
  }
  .card-dwg-href-name{
    width: calc(100% - 45px);
    overflow: hidden;
    text-overflow:ellipsis;
    font-size: 14px;
    font-weight: 500;
    transition: color .3s ease-out;
    float:left;
    margin-top:7px;
    margin-left:5px;
    color:#242424;
  }
  .card-dwg-href-abstract{
    width: calc(100% - 45px);
    overflow: hidden;
    text-overflow:ellipsis;
    font-size: 12px;
    font-weight: 500;
    transition: color .3s ease-out;
    float:left;
    margin-top:6px;
    margin-left:5px;
    color:#929292;
  }
</style>
