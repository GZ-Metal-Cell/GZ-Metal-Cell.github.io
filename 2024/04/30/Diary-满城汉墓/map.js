var map = L.map('map',
    {
        zoomSnap: 0.1,
        maxZoom: 18,
        zoomControl: true,
        editable: true,
    }).setView([38.947669527139496, 115.30220169138278], 14);

let baseLayer = L.tileLayer("http://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}", {
    attribution: '&copy; 高德地图',
    maxZoom: 18,
    minZoom: 3,
    subdomains: "1234",
    zoom: 3
});
map.addLayer(baseLayer);

var marker = L.marker([38.94755011034871, 115.2979498412339]).addTo(map);
marker.bindPopup("<b>开冲😍！</b>").openPopup();;