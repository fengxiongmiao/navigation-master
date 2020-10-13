<template>
  <div class="xinmove-footer">
    <div class="footer-container">
      <div class="footer-logo">
        © 2020 xinmove.com<a href="https://beian.miit.gov.cn/#/Integrated/recordQuery" target="_blank" class="beian-a">浙ICP备17052134号-1</a>
        <span id='cnzz_stat_icon_1279294755'></span>
<!--        <script src='http://s9.cnzz.com/z_stat.php?id=1279294755&show=pic' type='text/javascript'></script>-->
        <a  href="Mailto:startbing@foxmail.com" title="邮件：startbing@foxmail.com" class="bga"><i class="fa fa-envelope"></i> 发送邮件</a>
        <!-- <a  href="https://github.com/startoffly" title="github：BEWINDOWEB" target="_blank" class="bga"><i class="fa fa-github"></i> github</a> -->

      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "",
      mounted () {
        const script = document.createElement('script')
        script.src = 'https://s95.cnzz.com/z_stat.php?id=1279294755&show=pic'
        script.language = 'JavaScript'
        document.body.appendChild(script)
      },
      watch: {
        '$route' () {
          if (window._czc) {
            let location = window.location
            let contentUrl = location.pathname + location.hash
            let refererUrl = '/'
            window._czc.push(['_trackPageview', contentUrl, refererUrl])
          }
        }
      }
    }
</script>

<style scoped>
  /* ============== footer ========= */
  .xinmove-footer{
    /*padding: 20px 0px 20px 0px;*/
    width:100%;
    height:20px;
    background-color:#242424;
    min-width:600px;
    clear:both;
  }
  .footer-container{
    margin:0px auto;
    width:960px;
    color: #f2f1f1;
    font-size:14px;
  }
  .footer-logo{
    color: #f2f1f1;
    width:960px;
    height:20px;
    margin-right:5px;
    text-align:center;
  }
  .footer-logo a{
    padding-left:10px;
    padding-right:10px;
    display:inline;
  }

  @media  screen and (max-width:1000px) {
    .xinmove-footer{
      height:auto;
    }
    .footer-container{
      width:auto;
      height:auto;
    }
    .footer-logo{
      width:auto;
      text-align:center;
      display:block;
      width:100%;
      height:auto;
      line-height:25px;

    }
    .footer-logo a{
      width:100%;
      height:25px;
      display:block;
      line-height:25px;
      box-sizing: border-box;
    }
  }

  .beian-a{
    color: #f2f1f1;
  }
</style>
