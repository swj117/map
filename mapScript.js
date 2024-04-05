


var container = document.getElementById('map');
var options = {
    center: new kakao.maps.LatLng(37.27592, 127.1324),
    level: 3
};



// map
var map = new kakao.maps.Map(container, options);

//marker
var marker = new kakao.maps.Marker({
    position: map.getCenter()
});
marker.setMap(map);


// click
kakao.maps.event.addListener(map, 'click', function(mouseEvent) {
    var latlng = mouseEvent.latLng;
    marker.setPosition(latlng);

    var message = '위도: ' + latlng.getLat() + '<br>경도: ' + latlng.getLng();
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = message;
    resultDiv.style.opacity = 1;
});
