function initAutocomplete() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -20.034431136941887, lng: -44.227068730431554 },
    zoom: 15,
    mapTypeId: "roadmap",
  });

     //  -44.183361 -20.139773,-44.183035 -20.139359,-44.182626 -20.139124,-44.18248 -20.138871,-44.182273 -20.13865,-44.181957 -20.138593,-44.181691 -20.138568,-44.181392 -20.138536,-44.181124 -20.138739,-44.180822 -20.138806,-44.180439 -20.138778,-44.18011 -20.138828,-44.179702 -20.138811,-44.179151 -20.139044,-44.179141 -20.139444,-44.179256 -20.139961,-44.17898 -20.140348,-44.178755 -20.140639,-44.176526 -20.140482,-44.175602 -20.139059,-44.175199 -20.137795,-44.175226 -20.136163,-44.175485 -20.135705,-44.17677 -20.135478,-44.176931 -20.135023,-44.176976 -20.134426,-44.176886 -20.134092,-44.176625 -20.133772,-44.176074 -20.133538,-44.175708 -20.133419,-44.175476 -20.133241,-44.175198 -20.133118,-44.174132 -20.132669,-44.17338 -20.132492,-44.1725 -20.132103,-44.171625 -20.131754,-44.170184 -20.131545,-44.169668 -20.131261,-44.168993 -20.130736,-44.168712 -20.129867,-44.168873 -20.129164,-44.16902 -20.128917,-44.169144 -20.128878,-44.169158 -20.128604,-44.169027 -20.12832,-44.168946 -20.127947,-44.168905 -20.127777,-44.168927 -20.127605,-44.168691 -20.12725,-44.168406 -20.126722,-44.168542 -20.12538,-44.170045 -20.12457,-44.170435 -20.124674,-44.170885 -20.124605,-44.171242 -20.124693,-44.171567 -20.124522,-44.171868 -20.12428,-44.171878 -20.123958,-44.172228 -20.123755,-44.172618 -20.12404,-44.172844 -20.124524,-44.174216 -20.124601,-44.174647 -20.124855,-44.174922 -20.124738,-44.174898 -20.124573,-44.178061 -20.124132,-44.178075 -20.124517,-44.177917 -20.124658,-44.177857 -20.124877,-44.178051 -20.125259,-44.178696 -20.126252,-44.178721 -20.126911,-44.179924 -20.12737,-44.181066 -20.128325,-44.181494 -20.129325,-44.182617 -20.130917
  //constroi poligonos
  const triangleCoords = [
    { lat: -44.18302, lng: -20.131689 },
    { lat: -44.183073, lng: -20.132648 },
    { lat: -44.183105, lng: -20.132907 },
    { lat: -44.183204, lng: -20.133157 },
    { lat: -44.183449, lng: -20.133468 },
    { lat: -44.183802, lng: -20.133909 },
    { lat: -44.184047, lng: -20.134246 },
    { lat: -44.183855, lng: -20.134387 },
    { lat: -44.183655, lng: -20.134426 },
    { lat: -44.183612, lng: -20.134669 },
    { lat: -44.183768, lng: -20.13496 },
    { lat: -44.183904, lng: -20.135357 },
    { lat: -44.183875, lng: -20.135667 },
    { lat: -44.183791, lng: -20.136106 },
    { lat: -44.183734, lng: -20.136467 },
    { lat: -44.183541, lng: -20.136828 },
    { lat: -44.183238, lng: -20.137292 },
    { lat: -44.183154, lng: -20.137576 },
    { lat: -44.183015, lng: -20.138015 },
    { lat: -44.183122, lng: -20.138532 },
    { lat: -44.183258, lng: -20.13861 },
    { lat: -44.183228, lng: -20.139049 },

  ];
  
  const bermudaTriangle = new google.maps.Polygon({
    paths: triangleCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });

  bermudaTriangle.setMap(map);
  

  // Create the search box and link it to the UI element.
  const input = document.getElementById("pac-input");
  const searchBox = new google.maps.places.SearchBox(input);

  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
  // Bias the SearchBox results towards current map's viewport.
  map.addListener("bounds_changed", () => {
    searchBox.setBounds(map.getBounds());
  });

  let markers = [];

  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener("places_changed", () => {
    const places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    // Clear out the old markers.
    markers.forEach((marker) => {
      marker.setMap(null);
    });
    markers = [];

    // For each place, get the icon, name and location.
    const bounds = new google.maps.LatLngBounds();

    places.forEach((place) => {
      if (!place.geometry || !place.geometry.location) {
        console.log("Returned place contains no geometry");
        return;
      }

      const icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25),
      };

      // Create a marker for each place.
      markers.push(
        new google.maps.Marker({
          map,
          icon,
          title: place.name,
          position: place.geometry.location,
        })
      );
      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });
}

window.initAutocomplete = initAutocomplete;