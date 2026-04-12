// 学习计划数据
const data = {
    "name": "学习计划",
    "children": [
        {
            "name": "前端",
            "children": [
                { "name": "HTML/CSS" },
                {
                    "name": "JavaScript",
                    "children": [
                        { "name": "基础语法" },
                        { "name": "DOM操作" },
                        { "name": "ES6+" }
                    ]
                },
                {
                    "name": "框架",
                    "children": [
                        { "name": "React" },
                        { "name": "Vue" }
                    ]
                }
            ]
        },
        {
            "name": "后端",
            "children": [
                { "name": "Node.js" },
                {
                    "name": "数据库",
                    "children": [
                        { "name": "SQLite" },
                        { "name": "MySQL" }
                    ]
                }
            ]
        },
        {
            "name": "工具与工程化",
            "children": [
                { "name": "Git" },
                { "name": "Webpack" },
                { "name": "VSCode" }
            ]
        }
    ]
};

// 全局变量
let svg, g, tree, root;

// 响应式绘制函数
function drawChart() {
    // 清空现有内容
    d3.select("#chart").selectAll("*").remove();
    
    // 获取容器的实际尺寸
    const container = document.getElementById('chart-container');
    const rect = container.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // 计算边距（相对于容器大小）
    const margin = {
        top: height * 0.05,
        right: width * 0.05,
        bottom: height * 0.05,
        left: width * 0.15
    };
    
    // 计算有效绘图区域
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    
    // 创建SVG
    svg = d3.select("#chart")
        .attr("width", width)
        .attr("height", height);
    
    // 方法1: 简单居中 - 将g移到SVG中心点
    g = svg.append("g")
        .attr("transform", `translate(${width/2},${height/2})`);
    
    // 创建树布局 - 调整尺寸以适应居中布局
    tree = d3.tree().size([height * 0.9, width * 0.8]);
    root = d3.hierarchy(data);
    tree(root);
    
    // 计算树的实际边界，用于精确居中
    const nodes = root.descendants();
    const minX = d3.min(nodes, d => d.x);
    const maxX = d3.max(nodes, d => d.x);
    const minY = d3.min(nodes, d => d.y);
    const maxY = d3.max(nodes, d => d.y);
    
    // 计算偏移量使树内容居中
    const offsetX = -(minY + maxY) / 2;
    const offsetY = -(minX + maxX) / 2;
    
    // 添加一个子组来应用内容偏移
    const contentGroup = g.append("g")
        .attr("transform", `translate(${offsetX},${offsetY})`);
    
    // 画连线
    contentGroup.selectAll(".link")
        .data(root.links())
        .join("path")
        .attr("class", "link")
        .attr("d", d3.linkHorizontal()
            .x(d => d.y)
            .y(d => d.x));
    
    // 画节点
    const node = contentGroup.selectAll(".node")
        .data(root.descendants())
        .join("g")
        .attr("class", "node")
        .attr("transform", d => `translate(${d.y},${d.x})`);
    
    // 节点圆圈 - 大小根据容器调整
    const circleRadius = Math.max(8, Math.min(20, width * 0.015));
    node.append("circle")
        .attr("r", circleRadius)
        .attr("fill", d => d.children ? "#69b3a2" : "#ff6b6b")
        .attr("stroke", "#333")
        .attr("stroke-width", 2);
    
    // 节点文本 - 大小根据容器调整
    const fontSize = Math.max(10, Math.min(14, width * 0.012));
    node.append("text")
        .attr("dy", "0.31em")
        .attr("x", d => d.children ? -(circleRadius + 5) : (circleRadius + 5))
        .attr("text-anchor", d => d.children ? "end" : "start")
        .style("font-family", "sans-serif")
        .style("font-size", `${fontSize}px`)
        .style("font-weight", d => d.children ? "bold" : "normal")
        .text(d => d.data.name);
    
    // 添加交互效果
    node.selectAll("circle")
        .on("mouseover", function(event, d) {
            d3.select(this)
                .transition()
                .duration(200)
                .attr("r", circleRadius * 1.2);
        })
        .on("mouseout", function(event, d) {
            d3.select(this)
                .transition()
                .duration(200)
                .attr("r", circleRadius);
        });
    
    console.log(`图表重绘完成: ${width}x${height}, 树偏移: (${offsetX.toFixed(1)}, ${offsetY.toFixed(1)})`);
}

// 容器大小调整函数
function resizeContainer(size) {
    const container = document.getElementById('chart-container');
    container.className = `chart-container ${size === 'normal' ? '' : size}`;
    
    // 延迟重绘，等待CSS过渡完成
    setTimeout(() => {
        drawChart();
    }, 100);
}

// 手动更新图表
function updateChart() {
    drawChart();
}

// 监听窗口大小变化
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(drawChart, 250); // 防抖动
});

// 使用 ResizeObserver 监听容器大小变化（现代浏览器）
if (window.ResizeObserver) {
    const observer = new ResizeObserver(entries => {
        for (let entry of entries) {
            if (entry.target.id === 'chart-container') {
                clearTimeout(resizeTimer);
                resizeTimer = setTimeout(drawChart, 100);
            }
        }
    });
    observer.observe(document.getElementById('chart-container'));
}

// 初始绘制
drawChart();