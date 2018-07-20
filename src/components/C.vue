<template>
  <div class="C">
    <!-- <common title="c"></common> -->
    <cube-sticky :pos="scrollY" :check-top="checkTop" fixed-show-ani="sticky-fixed-show" @diff-change="diffChange">
      <cube-scroll :scroll-events="scrollEvents" @scroll="scrollHandler">
        <img src="https://ss3.bdstatic.com/iPoZeXSm1A5BphGlnYG/skin/6.jpg">
        <cube-sticky-ele>
          <ul class="sticky-header">
            <li>111</li>
          </ul>
        </cube-sticky-ele>
        <ul>
          <li v-for="item in items" class="border-top-1px" v-bind:key="item">{{item}}</li>
        </ul>
        <ul>
          <li v-for="item in items2" class="border-top-1px" v-bind:key="item">{{item}}</li>
        </ul>
        <ul>
          <li v-for="item in items3" class="border-top-1px" v-bind:key="item">{{item}}</li>
        </ul>
      </cube-scroll>
      <ul class="sticky-header" slot="fixed" ref="stickyHeader">
        <li>header</li>
      </ul>
    </cube-sticky>
  </div>
</template>

<script>
  import common from "./common";
  const _data = [
    "😀 😁 😂 🤣 😃 😄 ",
    "🙂 🤗 🤩 🤔 🤨 😐 ",

    "😔 😕 🙃 🤑 😲 ☹️ ",
    "🐣 🐣 🐣 🐣 🐣 🐣 ",

    "🐥 🐥 🐥 🐥 🐥 🐥 ",
    "🤓 🤓 🤓 🤓 🤓 🤓 ",

    "🦔 🦔 🦔 🦔 🦔 🦔 ",
    "🙈 🙈 🙈 🙈 🙈 🙈 ",

    "🚖 🚖 🚖 🚖 🚖 🚖 ",
    "✌🏻 ✌🏻 ✌🏻 ✌🏻 ✌🏻 ✌🏻 "
  ];
  export default {
    data() {
      return {
        scrollEvents: ["scroll"],
        scrollY: 0,
        checkTop: true,
        items: _data.concat(),
        items2: _data.concat(),
        items3: _data.concat()
      };
    },
    components: {
      common
    },
    methods: {
      scrollHandler({ y }) {
        this.scrollY = -y;
      },
      diffChange() {
        let opacity = 0;
        if (height) {
          opacity = diff / height;
        }
        this.$refs.stickyHeader.style.opacity = opacity;
      }
    }
  };
</script>

<style scoped lang="scss">
  .C {
    width: 100%;
    height: 100%;
    background-color: aqua;
    position: fixed;
  }
  .cube-sticky-ele {
    margin-top: -60px;
    margin-bottom: 4px;
    //height: 56px;
    .cube-sticky-content {
      display: none;
    }
  }
  .cube-sticky-ele .cube-sticky-content .sticky-header {
    visibility: hidden;
  }
  li {
    padding: 20px 10px;
  }
  .cube-sticky-fixed .sticky-header {
    color: #fff;
    /* opacity: 0; */
    background-color: rgba(0, 0, 0, 0.6);
  }
  .cube-scroll-list-wrapper img {
    vertical-align: top;
    height: 250px;
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  .sticky-fixed-show-enter,
  .sticky-fixed-show-leave-active {
    transform: translate(0, -100%);
  }
  .sticky-fixed-show-enter-active,
  .sticky-fixed-show-leave-active {
    transition: all 0.5s ease-in-out;
  }
</style>