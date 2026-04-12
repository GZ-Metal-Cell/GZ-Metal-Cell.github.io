// 创建一个 Leaflet 地图对象，设置了一些参数，如缩放级别、最大缩放级别、是否可编辑等，并将地图视图移动到指定的经纬度位置。
var map = L.map('map',
    {
        zoomSnap: 0.1, // 地图的有效缩放级别
        maxZoom: 18,  // 最大缩放级别
        // crs: L.CRS.EPSG4326,  // 高德不是这个坐标系   
        zoomControl: true,
        editable: true,
        // wheelPxPerZoomLevel:	60  // 鼠标滚轮缩放 较小的值将使滚轮轮缩放更快
    }).setView([26.078799594917704, 119.29471468823111], 14);  // 待显示地点的经纬度和缩放级别

// 创建一个瓦片图层对象 baseLayer，指定了高德地图的瓦片地址和一些参数，然后将该图层添加到地图中。
// 目前 http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineCommunity/MapServer/tile/{z}/{y}/{x} 也是可用的。
let baseLayer = L.tileLayer("http://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}", {
    attribution: '&copy; 高德地图',
    maxZoom: 18,  // 应与 var map 里的 maxZoom 一致，不然显示不出来图片。
    minZoom: 3,
    subdomains: "1234",
    zoom: 3
});
map.addLayer(baseLayer);

// 监听地图的点击事件，当用户点击地图时会输出当前点击的经纬度信息。
map.on('click', function (event) {
    // console.log(event); // 返回当前点击的所有信息
    let { lat, lng } = event.latlng;  // 经纬度信息
    console.log("[" + lat + ", " + lng + "]");  // 输出经纬度信息，便于调试
});

// 监听地图的缩放开始事件（zoomstart），当缩放级别发生改变时会输出当前的缩放级别。
map.on('zoomstart', function () {
    var zoomLevel = map.getZoom();
    console.log(zoomLevel); // 显示缩放等级（好像只能显示滚动之前的）
});

// 给某个点做标记
var marker = L.marker([26.081476491742904, 119.29704755981834]).addTo(map);
marker.bindPopup("<b>这个地方真是太好玩了！</b><br/>这是屁股树的坐标😍！");

// 定义路径点的坐标数组
var latlngs = [
    [26.08009367221409,119.29242494512384],
    [26.080079217568272,119.29223174932305],
    [26.08009367221409,119.29216735072279],
    [26.080310491686973,119.29212978487263],
    [26.080296037067946,119.29162532917066],
    [26.080453431663422,119.29152938351272],
    [26.080381158638648,119.29095499726753],
    [26.07820812885429,119.29081367507568],
    [26.07815030932909,119.29159187052262],
    [26.078212947146778,119.29209635584687]
];
// 创建路径对象并添加到地图上
var polyline = L.polyline(latlngs, {color: 'green'}).addTo(map);
polyline.bindPopup("上学去了😭");

// 定义多边形的边界点坐标数组
var latlngs = [
    [26.074889884389435,119.2912822984996],
    [26.073579264327183,119.2915720922007],
    [26.073902102248386,119.2926293025549],
    [26.07466823643904,119.29226437715347],
    [26.075150079274067,119.29180822040166]
];
// 创建多边形对象并添加到地图上
var polygon = L.polygon(latlngs, {color: 'blue'}).addTo(map);
polygon.bindPopup("乌石山下，白马河旁~");

// 绘制圆
var circle = L.circle([26.077862817425885, 119.29212395568047], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 32.6  // 这个单位是米。
}).addTo(map);
circle.bindPopup("阿公阿妈家~");

// 定义矩形的地理边界
var bounds = [[26.081312674254516, 119.2925756072068], [26.08073449305117, 119.29365965031108]];
// 创建一个橙色的矩形
var rectangle = L.rectangle(bounds, {color: "#ff7800", weight: 1}).addTo(map);
rectangle.bindPopup("就没见它开张过！😠");

// 创建 SVG，但好像 Popup 不能被点开
var svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svgElement.setAttribute('xmlns', "http://www.w3.org/2000/svg");
svgElement.setAttribute('viewBox', "0 0 200 200");
svgElement.innerHTML = '<rect width="200" height="200"/><rect x="75" y="23" width="50" height="50" style="fill:red"/><rect x="75" y="123" width="50" height="50" style="fill:#0013ff"/>';
var svgElementBounds = [[26.077898151572324, 119.30137317389199], [26.07745968496554, 119.30187226304396]];
var svg = L.svgOverlay(svgElement, svgElementBounds).addTo(map);

// 纯 popup
var popup = L.popup()
    .setLatLng([26.079171783403833, 119.2939243421818])
    .setContent("小迷糊和小小怪最喜欢吃的百姓鲜捞~")
    .openOn(map);