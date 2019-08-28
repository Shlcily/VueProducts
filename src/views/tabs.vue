<template>
    <div class="content">
        <div class="tab_title">滑动Tab切换</div>
        <div class="tab-slider">
            <div class="tab">
                <span v-for="(item, index) in items" :class="{active: actived == index}" @click="toggle(index)" :key="index">{{item.tab}}</span>
            </div>
            <div class="tab-content">
                <div class="wrapbox clearboth">
                    <div class="item" v-for="(item, index) in items" :key="index">{{item.tabContent}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'tabPackage',
    data() {
        return {
            actived: 0,
            items: [{
                'tab': 'tab1',
                'tabContent': 'content1'
            }, {
                'tab': 'tab2',
                'tabContent': 'content2'
            }, {
                'tab': 'tab3',
                'tabContent': 'content3'
            }, {
                'tab': 'tab4',
                'tabContent': 'content4'
            }]
        }
    },
    methods: {
        toggle(index) {
            this.actived = index;
            document.querySelector(".tab-content .wrapbox").style.webkitTransform = "translateX(-" + (this.actived * 400) + "px)";

        }
    }
}
</script>


<style scoped>
.content {
    padding: 0;
    margin: 0;
    font-family: "微软雅黑";
    width: 400px;
}

.clearboth::after {
    content: "";
    display: block;
    clear: both;
}

.tab_title {
    font-size: 28px;
    color:blue;
    text-align: center;
    margin-bottom: 20px;
}

.tab-slider {
    height: auto;
    width: 400px;
}

.tab-slider .tab {
    display: flex;
    height: 40px;
    line-height: 40px;
    background: #ccc;
}

.tab-slider .tab span {
    display: block;
    width: 100%;
    text-align: center;
    cursor: default;
}

.tab-slider .tab .active {
    background: red;
}

.tab-slider .tab-content {
    height: 300px;
    width: 400px;
    overflow: hidden;
}

.tab-slider .tab-content .item {
    float: left;
    height: 300px;
    width: 400px;
    line-height: 300px;
    text-align: center;
    font-size: 60px;
    background: #eee;
}

.tab-slider .wrapbox {
    width: 2000px;
    transition: all 1s;
}
</style>

