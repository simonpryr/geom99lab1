// This example displays a marker at the Mountain if Nepal Above 8000m.
// When the user clicks the marker, an info window opens.
// The maximum width of the info window is set to 200 pixels.
function initMap() {
  const m1 = { lat: 27.9881, lng: 86.9250 };
  const m2 = { lat: 27.7025, lng: 88.1475 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: { lat: 27.7172, lng: 85.3240 },
  });
  const m1contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
    "sandstone rock formation in the southern part of the " +
    "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
    "south west of the nearest large town, Alice Springs; 450&#160;km " +
    "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
    "features of the Uluru - Kata Tjuta National Park. Uluru is " +
    "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
    "Aboriginal people of the area. It has many springs, waterholes, " +
    "rock caves and ancient paintings. Uluru is listed as a World " +
    "Heritage Site.</p>" +
    '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
    "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
    "(last visited June 22, 2009).</p>" +
    "</div>" +
    "</div>";
  const m1infowindow = new google.maps.InfoWindow({
    content: m1contentString,
    maxWidth: 200,
    ariaLabel: "Uluru",
  });
  const m1marker = new google.maps.Marker({
    position: m1,
    map,
    title: "Uluru (Ayers Rock)",
  });

  marker.addListener("click", () => {
    m1infowindow.open({
      anchor: m1marker,
      map,
    });
  });
}

window.initMap = initMap;
