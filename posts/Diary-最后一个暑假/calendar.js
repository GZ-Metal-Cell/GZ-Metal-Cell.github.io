var dom = document.getElementById('calendar');
var myChart = echarts.init(dom, null, {
    renderer: 'canvas',
    useDirtyRect: false
});
var app = {};

var option;

{
    function getVirtualData() {
        const date = +echarts.time.parse('2024-07-11');
        const end = +echarts.time.parse('2024-08-31');
        const dayTime = 3600 * 24 * 1000;
        const data = [];
        for (let time = date; time < end; time += dayTime) {
            data.push([
                echarts.time.format(time, '{yyyy}-{MM}-{dd}', false),
                Math.floor(0)
            ]);
        }
        return data;
    }

    const graphData = [['2024-06-01', 0]];
    const links = graphData.map(function (item, idx) {
        return {
            source: idx,
            target: idx + 1
        };
    });
    links.pop();
    option = {
        tooltip: {
            position: 'top',
            formatter: function (params) {
                if (params.data) {

                    return graphData[params.dataIndex][0].split('-')[1] + '/' + graphData[params.dataIndex][0].split('-')[2];
                }
                return params.name;
            }
        },
        calendar: [
            {
                orient: 'vertical',
                monthLabel: {
                    nameMap: 'cn',
                    margin: 10
                },
                dayLabel: {
                    firstDay: 1,
                    nameMap: 'cn'
                },
                cellSize: 20,
                range: '2024-07',
                left: '20%',
            },
            {
                orient: 'vertical',
                yearLabel: {
                    show: false
                },
                monthLabel: {
                    margin: 10
                },
                cellSize: 20,
                top: 200,
                range: '2024-08',
                left: '20%',
            }
        ],
        series: [
            {
                type: 'graph',
                edgeSymbol: ['none', 'arrow'],
                coordinateSystem: 'calendar',
                symbolSize: 10,
                calendarIndex: 0,
                data: graphData
            },
            {
                type: 'heatmap',
                coordinateSystem: 'calendar',
                calendarIndex: 0,
                data: getVirtualData()
            },
            {
                type: 'graph',
                edgeSymbol: ['none', 'arrow'],
                coordinateSystem: 'calendar',
                symbolSize: 10,
                calendarIndex: 1,
                data: graphData
            },
            {
                type: 'heatmap',
                coordinateSystem: 'calendar',
                calendarIndex: 1,
                data: getVirtualData()
            },
        ]
    };
}

if (option && typeof option === 'object') {
    myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);

function setData(newGraphData) {
    myChart.setOption({
        tooltip: {
            position: 'top',
            formatter: function (params) {
                if (params.data) {

                    return newGraphData[params.dataIndex][0].split('-')[1] + '/' + newGraphData[params.dataIndex][0].split('-')[2];
                }
                return params.name;
            }
        },
        series: [
            {
                data: newGraphData,
                calendarIndex: 0
            },
            {
                type: 'heatmap',
                coordinateSystem: 'calendar',
                calendarIndex: 0,
                data: getVirtualData()
            },
            {
                data: newGraphData,
                calendarIndex: 1
            },
            {
                type: 'heatmap',
                coordinateSystem: 'calendar',
                calendarIndex: 1,
                data: getVirtualData()
            },
        ]
    }, false);
}
