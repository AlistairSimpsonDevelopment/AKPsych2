function initMap() {
  var locations = [
    ['The Awareness Center, Tooting <br>74-80 Upper Tooting Road <br>London <br>SW17 7PB', 51.43421, -.16276 ],
    ['37 Museum Street <br>London <br>WC1A 1LQ', 51.51809, -0.1280]
  ];

    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 51.4881, lng: -0.1376},
      zoom: 12
    });
    var infowindow = new google.maps.InfoWindow();

    for (var i=0; i<locations.length; i++ ) {

      var marker = new google.maps.Marker({
          position: new google.maps.LatLng(locations[i][1], locations[i][2]),
          map: map
      });
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }

    var locationBlocks = document.querySelectorAll('.locationBlock');
    for (var j = 0; j<locationBlocks.length; j++) {
        var locationBlock = locationBlocks[j];
        locationBlock.addEventListener('click', function() {

          var newLat = parseFloat(this.getAttribute('data-lat'));
          var newLng = parseFloat(this.getAttribute('data-lng'));;

            map.panTo({lat: newLat, lng: newLng});

        });
    }

}
window.addEventListener('load', initMap, false);
