// This example displays a marker at the center of Australia.
// When the user clicks the marker, an info window opens.
function initMap() {
    const tribhuvan = { lat: 27.7001, lng: 85.3568 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: tribhuvan,
    });
    const contentString =
      '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Tribhuvan International Airport</h1>' +
      '<div id="bodyContent">' +
      "<p><b>Tribhuvan International Airport</b>, is an international airport located in <b>Kathmandu, Bagmati, Nepal</b>, It has " +
      " a tabletop runway, a domestic terminal " +
      "and an international terminal " +
      "As the country's main international airport, it connects " +
      "Nepal to over 40 destinations in 17 countries.</p>" +
      "<p>Attribution: Tribhuvan International Airport, <a href="https://en.wikipedia.org/wiki/Tribhuvan_International_Airport">' +
      "https://en.wikipedia.org/wiki/Tribhuvan_International_Airport</a></p>" +
      "</div>" +
      "</div>";
    const infowindow = new google.maps.InfoWindow({
      content: contentString,
      ariaLabel: "Tribhuvan International Airport",
    });
    const marker = new google.maps.Marker({
      position: tribhuvan,
      map,
      title: "Tribhuvan (International Airport)",
    });
  
    marker.addListener("click", () => {
      infowindow.open({
        anchor: marker,
        map,
      });
    });
  }
  
  window.initMap = initMap;
