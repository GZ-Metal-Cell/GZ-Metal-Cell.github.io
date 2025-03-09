var dom = document.getElementById('chart');
var myChart = echarts.init(dom, null, {
    renderer: 'canvas',
    useDirtyRect: false
});
var app = {};
var option;

var img = new Image();
img.src = 'Fuzhou.webp';

img.onload = function () {
    $.get(
        'Fuzhou.svg',
        function (svg) {
            echarts.registerMap('sicily', { svg: svg });
            option = {
                tooltip: {},
                geo: [
                    {
                        map: 'sicily',
                        roam: true,
                        layoutCenter: ['50%', '50%'],
                        layoutSize: '150%',
                        selectedMode: 'single',
                        itemStyle: {
                            color: undefined
                        },
                        emphasis: {
                            itemStyle: {
                                color: 'rgba(0, 255, 255, 0.25)',
                            },
                            label: {
                                show: false
                            }
                        },
                        selectedMode: false,

                        regions: [
                            {
                                //地图区域的名称
                                name: "福州市",
                                // 该区域的多边形样式设置
                                itemStyle: {
                                    color: {
                                        type: 'image',
                                        image: img,
                                        repeat: 'no-repeat',
                                    },
                                    borderColor: '#111',
                                    //图形阴影的模糊大小
                                    shadowBlur: 5,
                                    //阴影颜色
                                    shadowColor: "#000",
                                    //shadowOffsetY
                                    shadowOffsetY: 5,
                                    //透明度
                                    opacity: 1
                                },
                                emphasis: {
                                    itemStyle: {
                                        color: {
                                            type: 'image',
                                            image: img,
                                            repeat: 'no-repeat',
                                        },
                                        borderColor: '#111',
                                        shadowBlur: 5,
                                        shadowColor: "#000",
                                        shadowOffsetY: 5,
                                        opacity: 1
                                    },
                                },
                                tooltip: {
                                    show: true,
                                    confine: true,
                                    formatter: function () {
                                        return [];
                                    }
                                }
                            },
                            {
                                name: "鼓楼区",
                                tooltip: {
                                    show: true,
                                    confine: true,
                                    formatter: function () {
                                        return [
                                            '鼓楼区',
                                            '啊！三坊七巷真是太好玩了！'
                                        ].join('<br/>');
                                    }
                                }
                            },
                            {
                                name: "仓山区",
                                tooltip: {
                                    show: true,
                                    confine: true,
                                    formatter: function () {
                                        return [
                                            '仓山区',
                                            '我们的时代多美好~像朝霞漫天灿烂~'
                                        ].join('<br/>');
                                    }
                                }
                            },
                            {
                                name: "闽侯县",
                                tooltip: {
                                    show: true,
                                    confine: true,
                                    formatter: function () {
                                        return [
                                            '闽侯县',
                                            '知明行笃~立诚致广~全面求发展~'
                                        ].join('<br/>');
                                    }
                                }
                            },
                            {
                                name: "长乐区",
                                tooltip: {
                                    show: true,
                                    confine: true,
                                    formatter: function () {
                                        return [
                                            '长乐区',
                                            '闽江江水都流向~流向长乐的海~'
                                        ].join('<br/>');
                                    }
                                }
                            },
                        ]
                    }
                ],
            };
            myChart.setOption(option);
            myChart.on('selectchanged', function (params) {
                if (!params.selected.length) {
                    myChart.dispatchAction({
                        type: 'hideTip'
                    });
                    myChart.dispatchAction({
                        type: 'geoSelect',
                        geoIndex: 0
                        // Use no name to unselect.
                    });
                } else {
                    var btnDataIdx = params.selected[0].dataIndex[0];
                    var name = option.series.data[btnDataIdx][2];
                    myChart.dispatchAction({
                        type: 'geoSelect',
                        geoIndex: 0,
                        name: name
                    });
                    myChart.dispatchAction({
                        type: 'showTip',
                        geoIndex: 0,
                        name: name
                    });
                }
            });
        }
    );

    if (option && typeof option === 'object') {
        myChart.setOption(option);
    }

    myChart.on('click', function (params) {
        // 获取选中项的宽度和高度
        console.log("选中项: ", params.event);
    });

    window.addEventListener('resize', myChart.resize);
};