var wms_layers = [];


        var lyr_MobileAtlasthunderforest_0 = new ol.layer.Tile({
            'title': 'Mobile Atlas (thunderforest)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.thunderforest.com/mobile-atlas/{z}/{x}/{y}.png?apikey=b709137f5f0241ab9d0cf9c1c0b43d2c'
            })
        });
var format_ClarkCounty_1 = new ol.format.GeoJSON();
var features_ClarkCounty_1 = format_ClarkCounty_1.readFeatures(json_ClarkCounty_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClarkCounty_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClarkCounty_1.addFeatures(features_ClarkCounty_1);
var lyr_ClarkCounty_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClarkCounty_1, 
                style: style_ClarkCounty_1,
                popuplayertitle: "Clark County",
                interactive: true,
                title: 'Clark County'
            });
var format_HIVPreventionTable0814in_2 = new ol.format.GeoJSON();
var features_HIVPreventionTable0814in_2 = format_HIVPreventionTable0814in_2.readFeatures(json_HIVPreventionTable0814in_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HIVPreventionTable0814in_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HIVPreventionTable0814in_2.addFeatures(features_HIVPreventionTable0814in_2);
var lyr_HIVPreventionTable0814in_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HIVPreventionTable0814in_2, 
                style: style_HIVPreventionTable0814in_2,
                popuplayertitle: "HIVPreventionTable0814(in)",
                interactive: true,
                title: '<img src="styles/legend/HIVPreventionTable0814in_2.png" /> HIVPreventionTable0814(in)'
            });
var format_NeedleExchangeListSheet1_3 = new ol.format.GeoJSON();
var features_NeedleExchangeListSheet1_3 = format_NeedleExchangeListSheet1_3.readFeatures(json_NeedleExchangeListSheet1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NeedleExchangeListSheet1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NeedleExchangeListSheet1_3.addFeatures(features_NeedleExchangeListSheet1_3);
var lyr_NeedleExchangeListSheet1_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NeedleExchangeListSheet1_3, 
                style: style_NeedleExchangeListSheet1_3,
                popuplayertitle: "NeedleExchangeList(Sheet1)",
                interactive: true,
                title: '<img src="styles/legend/NeedleExchangeListSheet1_3.png" /> NeedleExchangeList(Sheet1)'
            });
var group_group1 = new ol.layer.Group({
                                layers: [lyr_ClarkCounty_1,lyr_HIVPreventionTable0814in_2,lyr_NeedleExchangeListSheet1_3,],
                                fold: "open",
                                title: "group1"});

lyr_MobileAtlasthunderforest_0.setVisible(true);lyr_ClarkCounty_1.setVisible(true);lyr_HIVPreventionTable0814in_2.setVisible(true);lyr_NeedleExchangeListSheet1_3.setVisible(true);
var layersList = [lyr_MobileAtlasthunderforest_0,group_group1];
lyr_ClarkCounty_1.set('fieldAliases', {'fid': 'fid', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'COUSUBFP': 'COUSUBFP', 'COUSUBNS': 'COUSUBNS', 'GEOID': 'GEOID', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'LSAD': 'LSAD', 'CLASSFP': 'CLASSFP', 'MTFCC': 'MTFCC', 'CNECTAFP': 'CNECTAFP', 'NECTAFP': 'NECTAFP', 'NCTADVFP': 'NCTADVFP', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', });
lyr_HIVPreventionTable0814in_2.set('fieldAliases', {'ID': 'ID', 'Name': 'Name', 'Street': 'Street', 'City': 'City', 'Zip': 'Zip', 'Hours of Operations': 'Hours of Operations', 'Phone Number': 'Phone Number', 'Products and Services': 'Products and Services', 'Notes': 'Notes', 'Website': 'Website', 'Type': 'Type', 'Lat': 'Lat', 'Long': 'Long', });
lyr_NeedleExchangeListSheet1_3.set('fieldAliases', {'ID': 'ID', 'Name': 'Name', 'Street': 'Street', 'City': 'City', 'Zip': 'Zip', 'Hours of Operations': 'Hours of Operations', 'Phone Number': 'Phone Number', 'Products and Services': 'Products and Services', 'Notes': 'Notes', 'Sign-Up/Log-In Online': 'Sign-Up/Log-In Online', 'Sign-Up Notes': 'Sign-Up Notes', 'Website': 'Website', 'Type': 'Type', 'Lat': 'Lat', 'Long': 'Long', });
lyr_ClarkCounty_1.set('fieldImages', {'fid': 'TextEdit', 'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'COUSUBFP': 'TextEdit', 'COUSUBNS': 'TextEdit', 'GEOID': 'TextEdit', 'NAME': 'TextEdit', 'NAMELSAD': 'TextEdit', 'LSAD': 'TextEdit', 'CLASSFP': 'TextEdit', 'MTFCC': 'TextEdit', 'CNECTAFP': 'TextEdit', 'NECTAFP': 'TextEdit', 'NCTADVFP': 'TextEdit', 'FUNCSTAT': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'INTPTLAT': 'TextEdit', 'INTPTLON': 'TextEdit', });
lyr_HIVPreventionTable0814in_2.set('fieldImages', {'ID': 'Range', 'Name': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'Zip': 'Range', 'Hours of Operations': 'TextEdit', 'Phone Number': 'TextEdit', 'Products and Services': 'TextEdit', 'Notes': 'TextEdit', 'Website': 'TextEdit', 'Type': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', });
lyr_NeedleExchangeListSheet1_3.set('fieldImages', {'ID': 'Range', 'Name': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'Zip': 'Range', 'Hours of Operations': 'TextEdit', 'Phone Number': 'TextEdit', 'Products and Services': 'TextEdit', 'Notes': 'TextEdit', 'Sign-Up/Log-In Online': 'TextEdit', 'Sign-Up Notes': 'TextEdit', 'Website': 'TextEdit', 'Type': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', });
lyr_ClarkCounty_1.set('fieldLabels', {'fid': 'hidden field', 'STATEFP': 'no label', 'COUNTYFP': 'no label', 'COUSUBFP': 'no label', 'COUSUBNS': 'no label', 'GEOID': 'no label', 'NAME': 'no label', 'NAMELSAD': 'no label', 'LSAD': 'no label', 'CLASSFP': 'no label', 'MTFCC': 'no label', 'CNECTAFP': 'no label', 'NECTAFP': 'no label', 'NCTADVFP': 'no label', 'FUNCSTAT': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', });
lyr_HIVPreventionTable0814in_2.set('fieldLabels', {'ID': 'hidden field', 'Name': 'inline label - visible with data', 'Street': 'inline label - visible with data', 'City': 'inline label - visible with data', 'Zip': 'inline label - visible with data', 'Hours of Operations': 'inline label - visible with data', 'Phone Number': 'inline label - visible with data', 'Products and Services': 'inline label - visible with data', 'Notes': 'inline label - visible with data', 'Website': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Lat': 'hidden field', 'Long': 'hidden field', });
lyr_NeedleExchangeListSheet1_3.set('fieldLabels', {'ID': 'hidden field', 'Name': 'inline label - visible with data', 'Street': 'inline label - visible with data', 'City': 'inline label - visible with data', 'Zip': 'inline label - visible with data', 'Hours of Operations': 'inline label - visible with data', 'Phone Number': 'inline label - visible with data', 'Products and Services': 'inline label - visible with data', 'Notes': 'inline label - visible with data', 'Sign-Up/Log-In Online': 'inline label - visible with data', 'Sign-Up Notes': 'inline label - visible with data', 'Website': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Lat': 'hidden field', 'Long': 'hidden field', });
lyr_NeedleExchangeListSheet1_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});