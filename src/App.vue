<template>
  <div id="app">
    <router-link to="/A" @click.native="clickLink">A</router-link>
    <router-link to="/B" @click.native="clickLink">B</router-link>
    <router-link to="/C" @click.native="clickLink">C</router-link>
    <router-link to="/D" @click.native="clickLink">D</router-link>
    <transition :name="$store.state.states">
      <router-view></router-view>
    </transition>
    <div>Index Page</div>
    <!-- <touch-ripple :speed="1" :opacity="0.3" color="#fff" transition="ease"> -->
    <!-- your element... -->
    <!-- <cube-button @click="showToast">Button</cube-button>

    </touch-ripple> -->

  </div>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        toastTxt: "你好"
      };
    },
    methods: {
      clickLink() {
        this.$store.commit("setTransition", "turn-on");
      },
      showToast() {
        this.$createToast({
          time: 1000,
          txt: this.toastTxt
        }).show();
      }
    },
    mounted() {
      //监听浏览器返回事件
      window.addEventListener(
        "popstate",
        e => {
          this.$store.commit("setTransition", "turn-off");
        },
        false
      );
    }
  };
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }
  .btn {
    width: 50%;
  }
  html,
  body,
  #app {
    height: 100%;
  }

  .v-touch-ripple {
    width: 100%;
    position: fixed;
    top: 70px;
  }
  .page-move-enter,
  .page-move-leave-active {
    -webkit-transform: translate(100%);
    transform: translate(100%);
  }

  .page-move-enter-active,
  .page-move-leave-active {
    -webkit-transition: transform 0.3s, -webkit-transform 0.3s;
    transition: -webkit-transform 0.3s;
    transition: transform 0.3s;
    transition: transform 0.3s, -webkit-transform 0.3s;
    -moz-transition: transform 0.3s, -webkit-transform 0.3s;
    -ms-transition: transform 0.3s, -webkit-transform 0.3s;
    -o-transition: transform 0.3s, -webkit-transform 0.3s;
  }

  .turn-on-enter {
    transform: translate3d(100%, 0, 0);
  }
  .turn-on-leave-to {
    /* transform: translate3d(-20%, 0, 0); */
  }
  .turn-on-enter-active,
  .turn-on-leave-active {
    transition: transform 0.3s ease;
  }
  .turn-off-enter {
    /* transform: translate3d(-20%, 0, 0); */
  }
  .turn-off-leave-to {
    transform: translate3d(100%, 0, 0);
  }
  .turn-off-enter-active,
  .turn-off-leave-active {
    transition: transform 0.3s ease;
  }
  .turn-off-leave-active {
    z-index: 2;
  }
</style>