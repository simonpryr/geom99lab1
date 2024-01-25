// This example displays a marker at the center of Australia.
// When the user clicks the marker, an info window opens.
function initMap() {
  const everest = { lat: 27.9881, lng: 86.9250 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: everest,
  });
  const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Mt. Everest</h1>' +
    '<div id="bodyContent">' +
    "<p>Height Above Mean Sea Level : 8848.86 meter.</p>" +
    "</div>" +
    "</div>";
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });
  const marker = new google.maps.Marker({
    position: everest,
    map,
    title: "Uluru (Ayers Rock)",
  });

  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
    });
  });
}

window.initMap = initMap;
