<template>
  <div class="personal-body" >
    <img class="personal-body-img"  src="../../assets/image/fei.jpg">
    <div class="personal-body-title">
      测试简介
    </div>
    <div class="personal-body-description">
      测试简介
    </div>
  </div>
</template>

<script>
    export default {
        name: "",
    }

</script>

<style scoped>

  .personal-body-img{
    opacity:0.05;
    filter:alpha(opacity=5); /* 针对 IE8 以及更早的版本 */
  }

  .personal-body {


  }

  .personal-body::before {
  }
</style>
