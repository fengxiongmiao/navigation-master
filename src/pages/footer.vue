<template>
  <div>
    foot
  </div>
</template>

<script>
    export default {
        name: ""
    }
</script>

<style scoped>
  /* ============== footer ========= */
  .xinmove-footer{
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
