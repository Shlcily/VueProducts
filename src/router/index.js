import Vue from 'vue';
import Router from 'vue-router';

/**  引入页面  **/
import tabs from '../views/tabs.vue';
import search from '../views/search.vue';
import linear from '../views/linear.vue';




/**  引入实例Vue  **/
Vue.use(Router);

/**  导出路由配置  **/
export default new Router({
    /**  路由配置  **/
    routes:[
        {
            path:'/',
            redirect:'/search'
        },{
            path:'/tabs',
            component:tabs
        },{
            path:'/search',
            component:search
        },{
            path:'/linearCharts',
            component:linear
        }
    ]
})