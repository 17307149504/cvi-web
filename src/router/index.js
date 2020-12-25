import Vue from 'vue'
import VueRouter from 'vue-router'
// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        name: 'entityRecognition',
        component: () => import('../components/views/entityRecognition')
    },
    {
        path: '/entityQuery',
        name: 'entityQuery',
        component: () => import('../components/views/entityQuery')
    },
    {
        path: '/relationalQuery',
        name: 'relationalQuery',
        component: () => import('../components/views/relationalQuery')
    },
    {
        path: '/quiz',
        name: 'quiz',
        component: () => import('../components/views/quiz')
    },
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
export default router