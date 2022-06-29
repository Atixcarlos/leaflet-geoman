var map = L.map('map').setView([-10.406105052399276,-147.5690460205078], 2);

// add Leaflet-Geoman controls with some options to the map  
map.pm.addControls({  
  position: 'topleft',  
drawMarker: false,
        drawPolygon: false,
        drawPolyline: false,
        drawCircle: false,
        editPolygon: false,
        deleteLayer: false,
        drawRectangle: false,
        drawCircleMarker: false,
        editControls: false,
});  


map.pm.setGlobalOptions({ snappable: true,allowEditing:false,
 }); 
var MyCustomMarker = L.Icon.extend({
options: {
    shadowUrl: null,
    iconAnchor: new L.Point(12, 12),
    iconSize: new L.Point(24, 10),
    iconUrl: 'window-small.png'
}
});
/*
let myButton = new L.Control.PMButton({
        actions: ["cancel"],
        onClick: () => { new L.Marker(map, { icon: new MyCustomMarker() })},
        afterClick: () => {},
        doToggle: true,
        toggleStatus: false,
        disableOtherButtons: true
    });
    
map.addControl(myButton);
*/
/*
 name: 'editgroup',
            title: 'Edit Plotted boundary',
            className: 'control-icon leaflet-pm-icon-edit',
         
            afterClick: (e, obj) => {
                if (obj.button._button.toggleStatus) {
                    drawLayerGroup.pm.enable();
                } else {
                    drawLayerGroup.pm.disable();
                }
            },
            doToggle: true,
            toggleStatus: false,
            disableOtherButtons: true,
            block: 'edit',
            actions: ['finishMode'],
*/
function onclick(e){
    console.log('CLICK');
  
}

// add a new custom control
map.pm.Toolbar.createCustomControl({
  name: 'CustomButton',
  block: 'draw',
  title: 'Small Windows',
  className: 'control-icon leaflet-pm-icon-small-window',


   onClick: () => { 



},
  actions: [{
    text: 'Cancel', 
    onClick: onclick 
  }]
})

var drawnItems = new L.FeatureGroup();
map.addLayer(drawnItems);

var geojson = L.geoJson(myGeoJson, {}).addTo(drawnItems);