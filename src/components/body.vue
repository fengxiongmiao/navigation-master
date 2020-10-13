<template>
  <div class="xinmove-body">
    <bodyLeftVue></bodyLeftVue>
    <bodyMiddleVue></bodyMiddleVue>
    <bodyRightVue></bodyRightVue>
  </div>

</template>

<script>
    import bodyLeftVue from './body-left';
    import bodyMiddleVue from './body-middle';
    import bodyRightVue from './body-right';
    export default {
        name: "",
        components: {
            bodyLeftVue,bodyMiddleVue,bodyRightVue
        }
    }
</script>

<style scoped>
  /* ============== body =========== */
  .xinmove-body {
    margin: 0 auto;
    width: auto;
    min-height: 100%;
    margin-top: 40px;
    margin-bottom: 10%;
    /*margin-left: 50px;*/
    /*下边距*/
    padding-bottom: 800px;
    max-width: 1170px;
    min-width: 600px;
    /* 并列 */
    display: flex
  }



</style>
