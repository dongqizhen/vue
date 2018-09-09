import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import A from '../components/A'
import B from '../components/B'
import C from '../components/C'
import D from '../components/D'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/A',
            component: A,
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/B',
            component: B
        },
        {
            path: '/C',
            component: C
        },
        {
            path: '/D',
            component: D
        }
    ],
    /* scrollBehavior(to, from, savedPosition) {
        console.log(to, from, savedPosition)
        if (savedPosition) {
            return savedPosition
        } else {
            if (from.meta.keepAlive) {
                from.meta.savedPosition = document.body.scrollTop;
            }
            return {
                x: 0,
                y: to.meta.savedPosition || 0
            }
        }
    } */
})