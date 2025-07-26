class LeafletMap {
    constructor(id, coordinate, zoom, marker) {
        this.id = id;
        this.coordinate = coordinate;
        this.zoom = zoom;
        this.marker = marker;
    }

    render() {
        $("#" + this.id).css({height: "280px"});
        $("#" + this.id).css({margin: "5px 0"});
        var map = L.map(this.id,
        {
            zoomSnap: 0.1,
            maxZoom: 18,
            zoomControl: true,
            editable: true,
        }).setView(this.coordinate, this.zoom);
    
        let baseLayer = L.tileLayer("http://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}", {
            attribution: '&copy; 高德地图',
            maxZoom: 18,
            minZoom: 3,
            subdomains: "1234",
            zoom: 3
        });
        map.addLayer(baseLayer);
        
        var marker = L.marker(this.coordinate).addTo(map);
        marker.bindPopup(this.marker).openPopup();
    }
}