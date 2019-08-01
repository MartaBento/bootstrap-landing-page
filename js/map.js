var map = new ol.Map({
    target: 'map',

    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],

    view: new ol.View({
        center: ol.proj.fromLonLat([-0.1351411, 51.500817]),
        //Birdcage Walk, London
        zoom: 16,
    })
});