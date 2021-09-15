/*
 * @Author: your name
 * @Date: 2021-09-09 20:21:12
 * @LastEditTime: 2021-09-09 20:21:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \天眼前端课\第二阶段\考核2\js\GIS(js)\data.js
 */
import * as echarts from 'echarts';

var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

option = {
    title: {
        text: '鱼塘总数量：28525 块',
        subtext: '各二级地类数量',
        left: 'left'
    },
    tooltip: {
        trigger: 'item'
    },
    // legend: {
    //     orient: 'vertical',
    //     left: 'left',
    // },
    series: [{
        name: '访问来源',
        type: 'pie',
        radius: '50%',
        data: [
            { value: 28525, name: '鱼塘' },
            // {value: 735, name: '直接访问'},
            // {value: 580, name: '邮件营销'},
            // {value: 484, name: '联盟广告'},
            // {value: 300, name: '视频广告'}
        ],
        label: {
            // alignTo: 'edge',
            formatter: '{name|{b}}\n{time|{c} 块}',
            minMargin: 5,
            // edgeDistance: 10,
            lineHeight: 15,
            rich: {
                time: {
                    fontSize: 10,
                    color: '#999'
                }
            }
        },
        emphasis: {
            itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};

option && myChart.setOption(option);