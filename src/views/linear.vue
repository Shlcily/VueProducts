<template>
    <div class="box">
        <div id="lineCharts"></div>
        <div id="hotCharts"></div>
    </div>
</template>


<script>

import echarts from 'echarts';
import $ from 'jquery';

export default {
    data() {
        return {
            charts: "",
            linearData: [
                { count: 820, time: 'Mon' },
                { count: 932, time: 'Tue' },
                { count: 901, time: 'Wed' },
                { count: 934, time: 'Thu' },
                { count: 1290, time: 'Fri' },
                { count: 1330, time: 'Sat' },
                { count: 1320, time: 'Sun' },
            ],
            hotData:[
                { count: 15, time: 0 },
                { count: -50, time: 10 },
                { count: -56, time: 20 },
                { count: -46, time: 30 },
                { count: -22.1, time:40 },
                { count: -2.5, time: 50 },
                { count: -27.7, time: 60 },
                { count: -55.7, time: 70 },
                { count: -79-6.5, time: 80 }
            ]
        }
    },
    methods: {
        allCharts() {
            // 折线图
            this.getLinear(this.linearData);
            
            this.getLinear1(this.hotData);
        },
        getLinear(obj) {
            let charts = echarts.init(document.getElementById("lineCharts"));
            let count = [], times = [];
            $.each(obj, function(index, item) {
                count.push(item.count);
                times.push(item.time);
            });
            let option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'line',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                xAxis: [
                    {
                        type: 'category',
                        axisTick: {
                            //  横坐标的 刻度
                            show: true,
                            alignWithLabel: true,
                            inside: true,
                            length: 4,
                            lineStyle: {
                                color: 'rgb(174,151,149)',
                                width: 2,
                            }
                        },
                        axisLabel: {//标签设置
                            color: "#fff"
                        },
                        boundaryGap: false,
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: 'rgb(151,133,95)',
                                width: 2
                            }
                        },
                        data: times,
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLabel: {
                            color: "#fff"
                        },
                        splitLine: {//Y轴横线
                            show: true,
                            lineStyle: {
                                color: 'rgba(170,152,136,0.2)',
                                type: 'solid',
                                width: 1
                            }
                        },
                        axisLine: {//Y轴竖线
                            show: true,
                            lineStyle: {
                                color: 'rgb(151,133,95)',
                                width: 2
                            }
                        },
                        axisTick: {
                            show: true
                        }
                    }
                ],
                series: [
                    {
                        name: '被转载量',
                        smooth: true,
                        symbolSize: 10,
                        showSymbol: false,
                        type: 'line',
                        itemStyle: {
                            normal: {
                                color: 'rgb(151,133,95)',
                                width: 2
                            }
                        },
                        data: count,
                        areaStyle: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0, color: 'rgba(187,150,105,0.4)' // 0% 处的颜色
                                }, {
                                    offset: 1, color: 'transparent' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            }
                        },
                    },
                ]
            };
            charts.setOption(option, true);
        },
        getLinear1(obj) {
            let hotCharts = echarts.init(document.getElementById("hotCharts"));
             let count = [], times = [];
            $.each(obj, function(index, item) {
                count.push(item.count);
                times.push(item.time);
            });
            hotCharts.setOption({
                legend: {
                    data: ['高度(km)与气温(°C)变化关系']
                },
                tooltip: {
                    trigger: 'axis',
                    formatter: "Temperature : <br/>{b}km : {c}°C"
                },
                // grid: {
                //     left: '3%',
                //     right: '4%',
                //     bottom: '3%',
                //     containLabel: true
                // },
                xAxis: {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} °C'
                    }
                },
                yAxis: {
                    type: 'category',
                    axisLine: { onZero: false },
                    axisLabel: {
                        formatter: '{value} km'
                    },
                    boundaryGap: false,
                    data: times
                },
                series: [
                    {
                        name: '高度(km)与气温(°C)变化关系',
                        type: 'line',
                        smooth: true,
                        lineStyle: {
                            normal: {
                                width: 3,
                                shadowColor: 'rgba(0,0,0,0.4)',
                                shadowBlur: 10,
                                shadowOffsetY: 10
                            }
                        },
                        data: count
                    }
                ]
            }, true)
        }
    },
    mounted() {
        this.allCharts();
    }
}
</script>

<style>
#lineCharts {
    width: 800px;
    height: 450px;
    margin: 20px;
    background: palegoldenrod;
}
#hotCharts {
   width: 824px;
    height: 398px;
    background: blanchedalmond;
}
</style>
