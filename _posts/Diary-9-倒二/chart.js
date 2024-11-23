var dom = document.getElementById('chart');
var myChart = echarts.init(dom, null, {
    renderer: 'canvas',
    useDirtyRect: false
});
var app = {};

var option;

// 起始日期
const startDate = new Date('2023-12-25');
// 结束日期
const endDate = new Date('2024-1-7');

// 存储日期序列的数组
const dateSequence = [];

// 循环生成日期序列
for (let d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {
    // 将日期添加到数组中
    dateSequence.push(d.getMonth() + 1 + '/' + d.getDate());
}

option = {
    title: {
        text: '保定气候播报：12.25-1.7'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {},
    toolbox: {
        show: true,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: { readOnly: false },
            magicType: { type: ['line', 'bar'] },
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: dateSequence
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} °C'
        }
    },
    series: [
        {
            name: '最高温',
            type: 'line',
            data: [4, 4, 5, 4, 3, 4, 6, 4, 4, 3, 3, 5, 4, 1],
            markPoint: {
                data: [{ type: 'max', name: 'Max' }]
            },
            markLine: {
                data: [{ type: 'average', name: 'Avg' }]
            }
        },
        {
            name: '最低温',
            type: 'line',
            data: [-14, -14, -13, -12, -9, -9, -10, -11, -12, -11, -12, -13, -7, -12],
            markPoint: {
                data: [{ type: 'min', name: 'Min' }]
            },
            markLine: {
                data: [{ type: 'average', name: 'Avg' }]
            }
        }
    ]
};

if (option && typeof option === 'object') {
    myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);