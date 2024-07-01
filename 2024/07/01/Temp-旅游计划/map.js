var map = L.map('map',
    {
        zoomSnap: 0.1,
        maxZoom: 18,
        zoomControl: true,
        editable: true,
    }).setView([23.122597745996405, 113.25966074651629], 12);

let baseLayer = L.tileLayer("http://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}", {
    attribution: '&copy; 高德地图',
    maxZoom: 18,
    minZoom: 3,
    subdomains: "1234",
    zoom: 3
});
map.addLayer(baseLayer);

var marker = L.marker([23.15052493655212, 113.32496893552357]).addTo(map).bindPopup("<b>广州东站</b>").openPopup();