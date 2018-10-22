var mymap = L.map('mapid').setView([-5.997020, 106.031725], 13);

      L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoibXJpemtpZmFkaWwyNiIsImEiOiJjamx4N2ZjZjYxZGNlM3BvZDN6bGFhd2NmIn0.XZsIU5kfy5xRKqh5sXixyw'
      }).addTo(mymap);

      function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("Clicked at " + e.latlng.toString())
            .openOn(mymap);
      }
      mymap.on('click', onMapClick);

      var marker = L.marker([-5.997020, 106.031725]).addTo(mymap);
      var popup = L.popup();
      var bindPopup = marker.bindPopup("Fakultas Teknik, UNTIRTA");
      var polygon = L.polygon([
        [-5.997681, 106.041155],
        [-5.996274, 106.041648],
        [-5.994736, 106.044041],
        [-5.995803, 106.047506],
        [-6.003828, 106.047571],
        [-6.005663, 106.046004],
        [-6.005535, 106.042314],
        [-6.00227, 106.043],
        [-5.99845, 106.042142],
      ]).addTo(mymap).bindPopup("Green Area");