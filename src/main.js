// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store"
import Cube, { Button, Toast, Dialog, ImagePreview, Sticky, Scroll } from 'cube-ui';
import VueTouchRipple from 'vue-touch-ripple'
import 'vue-touch-ripple/dist/vue-touch-ripple.css'

Vue.use(Button)
Vue.use(Toast)
Vue.use(Dialog)
Vue.use(ImagePreview)
Vue.use(Sticky)
Vue.use(Scroll)
Vue.use(VueTouchRipple,
    /* {
        // default global options
        color: '#fff',
        opacity: 0.3,
        speed: 1,
        transition: 'ease'
      } */
)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    router,
    store,
    components: { App },
    template: '<App/>'
}).$mount("#app")