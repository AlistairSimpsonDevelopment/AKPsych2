function initMap() {
    var mapCenter = {lat: 51.43421, lng: -.16276};
    var map = new google.maps.Map(document.getElementById('map'), {
      center: mapCenter,
      zoom: 12
    });
    /* var marker = new google.maps.Marker( {
        position: mapCenter,
        map: map,
        animation: google.maps.Animation.DROP,
        title: ""
  });
  */
}
