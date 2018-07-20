<template>
  <div class="A">
    <common title="a"></common>
    <div class="bottom">
      bottom
    </div>
    <touch-ripple :speed="1" :opacity="0.3" color="#fff" transition="ease">
      <cube-button @click="showDialog">Dialog</cube-button>
    </touch-ripple>

  </div>
</template>

<script>
  import common from "./common";
  export default {
    data() {
      return {};
    },
    components: {
      common
    },
    methods: {
      showDialog() {
        this.$createDialog({
          type: "alert",
          title: "我是标题",
          content: "我是内容"
          //icon: "cubeic-alert"
        }).show();
      }
    }
  };
</script>

<style scoped lang="scss">
  .A {
    width: 100%;
    height: 100%;
    background-color: rgb(214, 198, 52);
    position: fixed;
  }
  .bottom {
    width: 100%;
    height: 50px;
    background-color: red;
    position: fixed;
    bottom: 0px;
  }
</style>