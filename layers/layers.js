ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([113.618974, -8.147663, 114.299918, -7.723907]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ADMINISTRASIDESA_AR_25K_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_25K_1 = format_ADMINISTRASIDESA_AR_25K_1.readFeatures(json_ADMINISTRASIDESA_AR_25K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ADMINISTRASIDESA_AR_25K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_AR_25K_1.addFeatures(features_ADMINISTRASIDESA_AR_25K_1);
var lyr_ADMINISTRASIDESA_AR_25K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIDESA_AR_25K_1, 
                style: style_ADMINISTRASIDESA_AR_25K_1,
                popuplayertitle: 'ADMINISTRASIDESA_AR_25K',
                interactive: true,
    title: 'ADMINISTRASIDESA_AR_25K<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_0.png" /> ARJASA<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_1.png" /> ASEMBAGUS<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_2.png" /> BONDOWOSO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_3.png" /> CERME<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_4.png" /> CURAHDAMI<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_5.png" /> GLAGAH<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_6.png" /> GLENMORE<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_7.png" /> GRUJUGAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_8.png" /> JELBUK<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_9.png" /> KAPONGAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_10.png" /> KENDIT<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_11.png" /> KLABANG<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_12.png" /> KRUCIL<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_13.png" /> LEDOKOMBO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_14.png" /> MAESAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_15.png" /> MLANDINGAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_16.png" /> PAKEM<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_17.png" /> PANJI<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_18.png" /> PANTI<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_19.png" /> PRAJEKAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_20.png" /> PUJER<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_21.png" /> SITUBONDO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_22.png" /> SONGGON<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_23.png" /> SUBOH<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_24.png" /> SUKOSARI<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_25.png" /> SUKOWONO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_26.png" /> SUMBERJAMBE<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_27.png" /> SUMBERMALANG<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_28.png" /> TAMANAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_29.png" /> TAPEN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_30.png" /> TEGALAMPEL<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_31.png" /> TENGGARANG<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_32.png" /> TLOGOSARI<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_33.png" /> WONGSOREJO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_34.png" /> WONOSARI<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_35.png" /> WRINGIN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_36.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr_ADMINISTRASIDESA_AR_25K_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ADMINISTRASIDESA_AR_25K_1];
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_ADMINISTRASIDESA_AR_25K_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});