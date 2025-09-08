var wms_layers = [];

        var lyr_StamenTonerLight_0 = new ol.layer.Tile({
            'title': 'StamenTonerLight_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'http://tile.stamen.com/toner-lite/{z}/{x}/{y}.png'
            })
        });var format_nietvoelbarebevingen_1 = new ol.format.GeoJSON();
var features_nietvoelbarebevingen_1 = format_nietvoelbarebevingen_1.readFeatures(json_nietvoelbarebevingen_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nietvoelbarebevingen_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_nietvoelbarebevingen_1.addFeatures(features_nietvoelbarebevingen_1);var lyr_nietvoelbarebevingen_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_nietvoelbarebevingen_1, 
                style: style_nietvoelbarebevingen_1,
                title: '<img src="styles/legend/nietvoelbarebevingen_1.png" /> niet voelbare bevingen'
            });var format_voelbarebevingen_2 = new ol.format.GeoJSON();
var features_voelbarebevingen_2 = format_voelbarebevingen_2.readFeatures(json_voelbarebevingen_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_voelbarebevingen_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_voelbarebevingen_2.addFeatures(features_voelbarebevingen_2);var lyr_voelbarebevingen_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_voelbarebevingen_2, 
                style: style_voelbarebevingen_2,
                title: 'voelbare bevingen'
            });

lyr_StamenTonerLight_0.setVisible(true);lyr_nietvoelbarebevingen_1.setVisible(true);lyr_voelbarebevingen_2.setVisible(true);
var layersList = [lyr_StamenTonerLight_0,lyr_nietvoelbarebevingen_1,lyr_voelbarebevingen_2];
lyr_nietvoelbarebevingen_1.set('fieldAliases', {'Datum': 'Datum', 'Locatie': 'Locatie', 'LAT': 'LAT', 'LON': 'LON', 'Magnitude': 'Magnitude', });
lyr_voelbarebevingen_2.set('fieldAliases', {'Datum': 'Datum', 'Locatie': 'Locatie', 'LAT': 'LAT', 'LON': 'LON', 'Magnitude': 'Magnitude', });
lyr_nietvoelbarebevingen_1.set('fieldImages', {'Datum': 'TextEdit', 'Locatie': 'TextEdit', 'LAT': 'TextEdit', 'LON': 'TextEdit', 'Magnitude': 'TextEdit', });
lyr_voelbarebevingen_2.set('fieldImages', {'Datum': 'DateTime', 'Locatie': 'TextEdit', 'LAT': 'TextEdit', 'LON': 'TextEdit', 'Magnitude': 'TextEdit', });
lyr_nietvoelbarebevingen_1.set('fieldLabels', {'Datum': 'inline label', 'Locatie': 'inline label', 'LAT': 'no label', 'LON': 'no label', 'Magnitude': 'header label', });
lyr_voelbarebevingen_2.set('fieldLabels', {'Datum': 'inline label', 'Locatie': 'inline label', 'LAT': 'no label', 'LON': 'no label', 'Magnitude': 'header label', });
lyr_voelbarebevingen_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});

OpenLayers.Renderer.SVG.prototype.MAX_PIXEL = Number.MAX_VALUE;
