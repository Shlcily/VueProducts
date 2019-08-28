<template>
    <div>
        <!--<tabIndex></tabIndex>-->
        <div class="left">
             <router-link :to="{path:'/tabs'}" tag="div">滑动Tab切换</router-link>
             <router-link :to="{path:'/search'}" tag="div">仿百度下拉搜索框</router-link>
              <router-link :to="{path:'/linearCharts'}" tag="div">Echatrs图表 -- 折线图</router-link>
        </div>
        <div class="right">
            <router-view></router-view>
        </div>
    </div>
</template>


<script>

    export default {
       name:'App',
       data () {
            return {
                
            }
        }
    }
</script>

<style>
    /*body{margin: 0;padding: 0;}*/
</style>

<style scoped>
    .left {
        width: 40%;
        height: 888px;
        float: left;
        border-right: 5px solid cornflowerblue;
    }
    .left div {
        width: 345px;
        height: 40px;
        line-height: 40px;
        text-align: left;
        font-size: 20px;
        float: left;
    }

    .right {
        float: left;
        width: 56%;
        height: 888px;
        background: pink;
        margin-left: 1%;
    }
</style>
