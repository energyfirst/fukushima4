// Google Maps APIを使用して地図を初期化する
function initMap(id, title, zoom, lat, lng, icon) {
	var mapOptions = {
		center: new google.maps.LatLng(lat, lng),
		zoom: zoom
	};
	var map = new google.maps.Map(document.getElementById(id), mapOptions);
	var position =  new google.maps.LatLng(lat, lng);
	var marker = new google.maps.Marker({
		position: position,
		map: map,
		icon: icon,
		title: title
	});
}
