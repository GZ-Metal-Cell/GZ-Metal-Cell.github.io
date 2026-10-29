(function () {
    window.DiaryMap = class DiaryMap {
        constructor(id, coordinate, zoom, marker) {
            this.id = id;
            this.coordinate = coordinate;
            this.zoom = zoom;
            this.marker = marker;
        }
        render() {
            const element = document.getElementById(this.id);
            if (!element) return;
            element.style.height = '280px';
            element.style.margin = '5px 0';
            const map = L.map(element, { zoomSnap: 0.1, maxZoom: 18, zoomControl: true }).setView(this.coordinate, this.zoom);
            L.tileLayer('https://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}', {
                attribution: '&copy; 高德地图', minZoom: 3, maxZoom: 18, subdomains: '1234'
            }).addTo(map);
            L.marker(this.coordinate).addTo(map).bindPopup(this.marker).openPopup();
            const observer = new MutationObserver(() => {
                if (element.isConnected) return;
                observer.disconnect();
                map.remove();
            });
            observer.observe(document.body, { childList: true, subtree: true });
        }
    };
})();
