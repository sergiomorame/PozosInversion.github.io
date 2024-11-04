var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_AlcadiasCDMX_1 = new ol.format.GeoJSON();
var features_AlcadiasCDMX_1 = format_AlcadiasCDMX_1.readFeatures(json_AlcadiasCDMX_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlcadiasCDMX_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlcadiasCDMX_1.addFeatures(features_AlcadiasCDMX_1);
var lyr_AlcadiasCDMX_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlcadiasCDMX_1, 
                style: style_AlcadiasCDMX_1,
                popuplayertitle: "Alcadias CDMX",
                interactive: true,
                title: '<img src="styles/legend/AlcadiasCDMX_1.png" /> Alcadias CDMX'
            });
var format_Edomex_2 = new ol.format.GeoJSON();
var features_Edomex_2 = format_Edomex_2.readFeatures(json_Edomex_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Edomex_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Edomex_2.addFeatures(features_Edomex_2);
var lyr_Edomex_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Edomex_2, 
                style: style_Edomex_2,
                popuplayertitle: "Edomex",
                interactive: true,
                title: '<img src="styles/legend/Edomex_2.png" /> Edomex'
            });
var format_Pozos_3 = new ol.format.GeoJSON();
var features_Pozos_3 = format_Pozos_3.readFeatures(json_Pozos_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pozos_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pozos_3.addFeatures(features_Pozos_3);
var lyr_Pozos_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pozos_3, 
                style: style_Pozos_3,
                popuplayertitle: "Pozos",
                interactive: true,
                title: '<img src="styles/legend/Pozos_3.png" /> Pozos'
            });

lyr_Positron_0.setVisible(true);lyr_AlcadiasCDMX_1.setVisible(true);lyr_Edomex_2.setVisible(true);lyr_Pozos_3.setVisible(true);
var layersList = [lyr_Positron_0,lyr_AlcadiasCDMX_1,lyr_Edomex_2,lyr_Pozos_3];
lyr_AlcadiasCDMX_1.set('fieldAliases', {'nombre': 'nombre', 'Inv_Global': 'Inv_Global', });
lyr_Edomex_2.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'COV_': 'COV_', 'COV_ID': 'COV_ID', 'ENTIDAD': 'ENTIDAD', 'CAPITAL': 'CAPITAL', 'RASGO_GEOG': 'RASGO_GEOG', 'NUM_EDO': 'NUM_EDO', });
lyr_Pozos_3.set('fieldAliases', {'nombre': 'nombre', 'Local': 'Local', 'Inv_req_1': 'Inv_req_1', 'Inv_req_2': 'Inv_req_2', 'Inv_req_3': 'Inv_req_3', 'Inv_total': 'Inv_total', 'Inv_global': 'Inv_global', });
lyr_AlcadiasCDMX_1.set('fieldImages', {'nombre': 'TextEdit', 'Inv_Global': '', });
lyr_Edomex_2.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'COV_': 'TextEdit', 'COV_ID': 'TextEdit', 'ENTIDAD': 'TextEdit', 'CAPITAL': 'TextEdit', 'RASGO_GEOG': 'TextEdit', 'NUM_EDO': 'TextEdit', });
lyr_Pozos_3.set('fieldImages', {'nombre': 'TextEdit', 'Local': 'TextEdit', 'Inv_req_1': 'TextEdit', 'Inv_req_2': 'TextEdit', 'Inv_req_3': 'TextEdit', 'Inv_total': 'TextEdit', 'Inv_global': '', });
lyr_AlcadiasCDMX_1.set('fieldLabels', {'nombre': 'no label', 'Inv_Global': 'inline label - visible with data', });
lyr_Edomex_2.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'COV_': 'no label', 'COV_ID': 'no label', 'ENTIDAD': 'no label', 'CAPITAL': 'no label', 'RASGO_GEOG': 'no label', 'NUM_EDO': 'no label', });
lyr_Pozos_3.set('fieldLabels', {'nombre': 'no label', 'Local': 'no label', 'Inv_req_1': 'inline label - visible with data', 'Inv_req_2': 'inline label - visible with data', 'Inv_req_3': 'inline label - visible with data', 'Inv_total': 'inline label - visible with data', 'Inv_global': 'inline label - visible with data', });
lyr_Pozos_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});