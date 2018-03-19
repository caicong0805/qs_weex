import Router from 'vue-router';
import ViewHome from './assets/pages/home.vue';
import ViewTopic from './assets/pages/topic.vue'
import ViewClass from './assets/pages/class.vue';
import ViewShop from './assets/pages/shop.vue';
import ViewMy from './assets/pages/my.vue';
Vue.use(Router);

export default {
    routers:[
        {
            path:'/',
            redirect:'/home'
        },
        {
            path:'/home',
            component:ViewHome
        },
        {
            path:'/topic',
            component:ViewHome
        },
        {
            path:'/class',
            component:ViewHome
        },
        {
            path:'/shop',
            component:ViewHome
        },
        {
            path:'/my',
            component:ViewHome
        },
    ]
}