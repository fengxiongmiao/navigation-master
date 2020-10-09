<template>
  <div class="xinmove-header">
    <div class="xinmove-header-body">
      <div class="xinmove-header-logo">
        <img class="zoompic" src="../assets/image/title-logo.png">
      </div>
      <div class="xinmove-nav-wrap">
        <div class="xinmove-header-card">
          <a href="/index.html" class="bga xinmove-header-active">
            <div class="xinmove-header-cn">主页</div>
            <div class="xinmove-header-en">index</div>
          </a>
        </div>
        <div class="xinmove-header-card">
          <a href="http://blog.xinmove.com" class="bga ">
            <div class="xinmove-header-cn">去博客看看</div>
            <div class="xinmove-header-en">blog</div>
          </a>
        </div>
<!--        <a class="xinmove-header-mobile-menu" onclick="domenu();">-->
<!--          <div class="mobile-line line1"></div>-->
<!--          <div class="mobile-line line2"></div>-->
<!--          <div class="mobile-line line3"></div>-->
<!--        </a>-->
      </div>
      <div id="menu" class="xinmove-header-mobile-menuwrap">
        <div class="xinmove-header-mobile-menuitem">
          <a href="/index.html"> 主页 </a>
        </div>
        <div class="xinmove-header-mobile-menuitem">
          <a href="http://blog.xinmove.com"> 去博客看看 </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: ""
    }
</script>

<style >
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
  .xinmove-header{
    background-color:#242424;
    width:100%;
    height:59px;
    min-width:600px;
  }
  .xinmove-header-body{
    width:auto;
    max-width: 1170px;
    margin:0 auto;
    min-height:100%;
  }
  .xinmove-nav-wrap{
    float:right;
    margin-right:50px;
    width:auto;
  }
  .xinmove-header-card{
    width:120px;
    height:59px;
    float:left;
  }
  .xinmove-header-logo{
    width:120px;
    height:59px;
    float:left;
    margin:0 0 0 50px;
    font-family: 华文隶书,serif;
  }

  .xinmove-header-card a{
    text-align: center;
    width:120px;
    height:59px;
  }

  .xinmove-header-card li{
    text-align: center;
    width:120px;
    height:35px;
    line-height:35px;
    list-style:none;
    font-size:14px;
    transition: all .2s ease-in-out;
    background-color:#242424;
    color:#f2f2f2;
    visibility:hidden;
    opacity:0;
    transition: all .2s ease-in-out;
    cursor:pointer;
    z-index:3;
    display:block;
    /*弹出的菜单被挡住，加了下面两句就好了*/
    position: relative;
  }

  .xinmove-header-card li:hover{
    background-color:#478cdc;
  }

  .xinmove-header-card:hover li{
    visibility:visible;
    opacity:1;
  }

  .xinmove-header-card li a{
    color:#f2f2f2;
    display:block;
  }

  .xinmove-header-cn{
    font-size: 16px;
    padding-top:10px;
  }
  .xinmove-header-en{
    font-size: 12px;
    padding-top:2px;

  }
  .xinmove-header-active{
    background-color:#478cdc;
  }
  .xinmove-header-mobile-menu{
    width:50px;
    height:39px;
    float:right;
    margin:10px 5px 10px 5px;
    padding-top:8px;
    box-sizing: border-box;
    display:none;
    cursor:pointer;
  }

  .mobile-line{
    width: 25px;
    height: 2px;
    border-radius: 1px;
    background: #f2f2f2;
    margin: 5px auto;
    transform-origin: 12% 12%;
    transition: 0.3s;
  }


  .xinmove-header-mobile-menuwrap{
    position:absolute;
    top:59px;
    width:100%;
  }
  .xinmove-header-mobile-menuitem a{
    visibility:hidden;
    opacity: 0;
    text-align: center;
    width:100%;
    height:0;
    line-height:35px;
    list-style:none;
    font-size:14px;
    transition: all .2s ease-in-out;
    background-color:#242424;
    color:#f2f2f2;
    transition: all .2s ease-in-out;
    cursor:pointer;
    z-index:9999;
    display:block;
    /*弹出的菜单被挡住，加了下面两句就好了*/
    position: relative;
    z-index: 2;
  }
  .xinmove-header-mobile-menuitem a:hover{
    background-color:#696969;
  }

  .menuactive .xinmove-header-mobile-menuitem a{
    visibility:visible;
    opacity: 0.9;
    height:35px;
  }

  @media  screen and (min-width:1000px) and (max-width:1110px) {
    .xinmove-header-en {
      display: none;
    }
    .xinmove-header-cn {
      font-size: 14px;
      padding-top:20px;
    }
    .xinmove-header-card{
      width:100px;
    }
    .xinmove-header-card a{
      width:100px;
    }
    .xinmove-header-card li{
      width:100px;
      font-size: 14px;
    }
  }
  @media  screen and (max-width:1000px){
    .xinmove-header-card{
      display:none;
    }
    .xinmove-header-mobile-menu{
      display:block;
    }
  }

</style>
