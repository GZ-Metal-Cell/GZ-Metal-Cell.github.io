var dom = document.getElementById('chart');
var myChart = echarts.init(dom, null, {
    renderer: 'canvas',
    useDirtyRect: false
});
var app = {};

var option;

// 起始日期
const startDate = new Date('2023-12-11');
// 结束日期
const endDate = new Date('2023-12-24');

// 存储日期序列的数组
const dateSequence = [];

// 循环生成日期序列
for (let d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {
    // 将日期添加到数组中
    dateSequence.push(d.getMonth() + 1 + '/' + d.getDate());
}

option = {
    title: {
        text: '保定气候播报：12.11-12.24'
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
            data: [2, 2, 1, -3, -3, -8, -5, -3, -4, -5, -3, -1, 0, 2],
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
            data: [-7, -5, -6, -11, -19, -19, -18, -15, -20, -20, -18, -17, -16, -14],
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