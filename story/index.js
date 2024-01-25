// This example displays a marker at the center of Australia.
// When the user clicks the marker, an info window opens.
function initMap() {
  const everest = { lat: 27.9881, lng: 86.9250 };
  const kangchenjunga = { lat: 27.7025, lng: 88.1475};
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: { lat: 27.7172, lng: 85.3240},
  });
  const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Mt. Everest</h1>' +
    '<div id="bodyContent">' +
    "<p>Height Above Mean Sea Level : 8,848.86 meter.</p>" +
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
  const kjcontentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Mt. Kangchenjunga</h1>' +
    '<div id="bodyContent">' +
    "<p>Height Above Mean Sea Level : 8,586 meter.</p>" +
    "</div>" +
    "</div>";
  const kjinfowindow = new google.maps.InfoWindow({
    content: kjcontentString,
  });
  const marker2 = new google.maps.Marker({
    position: kangchenjunga,
    map,
    title: "Uluru (Ayers Rock)",
  });

  marker2.addListener("click", () => {
    infowindow.open({
      anchor: marker2,
      map,
    });
  });
}

window.initMap = initMap;
