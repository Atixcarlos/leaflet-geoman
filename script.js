var map = L.map('map');

map.pm.setGlobalOptions({ snappable: true, allowEditing: false,
 }); 

// Adding geojson layer (Walls)
var drawnItems = new L.FeatureGroup();
map.addLayer(drawnItems);
var geojson = L.geoJson(myGeoJson, {}).addTo(drawnItems);

    map.fitBounds(geojson.getBounds());
var options = {
  position: 'topright',
  drawMarker: false,
  drawPolygon: false, 
  drawPolyline: false, 
  drawCircle: false,
  drawCircleMarker: false,
  drawRectangle: false,
  cutPolygon: false, 
  dragMode: false,
  deleteLayer: false,
  editMode: false,
  rotateMode: false,
};

// add leaflet.pm controls to the map
map.pm.addControls(options);

// listen to when a new layer is created
map.on('pm:create', function(e) {
  console.log(e)
});


// Function to create a custom icon
function createDrawnIcon(id, type) {
    var iconUrl = [
      'window-small.png',
      'window-medium.png',
      'window-large.png',
      'door.png'          
    ];

    var my_icon = L.icon({
        iconUrl: iconUrl[id],
        iconAnchor: new L.Point(12, 12),
        iconSize: new L.Point(24, 24),
    });

    my_icon.myType = type;

    return(my_icon);
}

 
// Adding Custom controls
var smallMarker = map.pm.Toolbar.copyDrawControl('drawMarker',{name: "smallMarker",className: 'control-icon leaflet-pm-icon-small-window',title: 'Small Windows',})
smallMarker.drawInstance.setOptions({ markerStyle: { draggable: true, icon : createDrawnIcon(0,'Small Window')}});

var mediumMarker = map.pm.Toolbar.copyDrawControl('drawMarker',{name: "mediumMarker",className: 'control-icon leaflet-pm-icon-medium-window',title: 'Medium Windows',})
mediumMarker.drawInstance.setOptions({markerStyle: { draggable: true, icon : createDrawnIcon(1,'Medium Window')}});

var largeMarker = map.pm.Toolbar.copyDrawControl('drawMarker',{name: "largeMarker",className: 'control-icon leaflet-pm-icon-large-window',title: 'Large Windows',})
largeMarker.drawInstance.setOptions({markerStyle: { draggable: true, icon : createDrawnIcon(2,'Large Window')}});

var doorMarker = map.pm.Toolbar.copyDrawControl('drawMarker',{name: "doorMarker",className: 'control-icon leaflet-pm-icon-door',title: 'Doors',})
doorMarker.drawInstance.setOptions({markerStyle: { draggable: true, icon : createDrawnIcon(3,'Door')}});


// Insert legend
var legend = L.control({position: 'bottomright'});
legend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend');
    div.innerHTML +='<img alt="legend"  width="120px" src="legend.png"/>';
    return div;
};
legend.addTo(map);
