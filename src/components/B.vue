<template>
  <div class="B">
    <common title="b"></common>
    <touch-ripple :speed="1" :opacity="0.3" color="#fff" transition="ease">
      <cube-button @click="showImagePreview">ImagePreview</cube-button>
    </touch-ripple>
  </div>
</template>

<script>
  import common from "./common";
  export default {
    data() {
      return {
        imgs: [
          "https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0mpd5uj21hc0tyws2.jpg",
          "https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0ncnnej21hc0zetxo.jpg",
          "https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0mqvu5j21hc0zkgzz.jpg",
          "https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0m3ufuj21hc0zkqbj.jpg"
        ]
      };
    },
    components: {
      common
    },
    methods: {
      showImagePreview() {
        this.$createImagePreview({
          imgs: this.imgs
        }).show();
      }
    }
  };
</script>

<style scoped>
  .B {
    width: 100%;
    height: 100%;
    background-color: rgb(245, 105, 250);
    position: fixed;
  }
</style>