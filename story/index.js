// This example displays a marker at the center of Australia.
// When the user clicks the marker, an info window opens.
function initMap() {
  const everest = { lat: 27.9881, lng: 86.9250 };
  const kangchenjunga = { lat: 27.7025, lng: 88.1475};
  const lhotse = { lat: 27.9626, lng: 86.9336 };
  const makalu = { lat: 27.8857, lng: 87.0876 };
  const cho_oyu = { lat: 28.0960, lng: 86.6615 };
  const dhaulagiri_I = { lat: 28.697401, lng: 83.490459 };
  const manaslu = { lat: 28.5497, lng: 84.5597 };
  const annapurna_I = { lat: 28.5961, lng: 83.8203 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
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
    kjinfowindow.open({
      anchor: marker2,
      map,
    });
  });
    const ltcontentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Mt. Lhotse</h1>' +
    '<div id="bodyContent">' +
    "<p>Height Above Mean Sea Level : 8,516 meter.</p>" +
    "</div>" +
    "</div>";
  const ltinfowindow = new google.maps.InfoWindow({
    content: ltcontentString,
  });
  const marker3 = new google.maps.Marker({
    position: lhotse,
    map,
    title: "Uluru (Ayers Rock)",
  });

  marker3.addListener("click", () => {
    ltinfowindow.open({
      anchor: marker3,
      map,
    });
  });
    const mkcontentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Mt. Makalu</h1>' +
    '<div id="bodyContent">' +
    "<p>Height Above Mean Sea Level : 8,463 meter.</p>" +
    "</div>" +
    "</div>";
  const mkinfowindow = new google.maps.InfoWindow({
    content: mkcontentString,
  });
  const marker4 = new google.maps.Marker({
    position: makalu,
    map,
    title: "Uluru (Ayers Rock)",
  });

  marker4.addListener("click", () => {
    mkinfowindow.open({
      anchor: marker4,
      map,
    });
  });
    const cocontentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Mt. Cho Oyu</h1>' +
    '<div id="bodyContent">' +
    "<p>Height Above Mean Sea Level : 8,201 meter.</p>" +
    "</div>" +
    "</div>";
  const coinfowindow = new google.maps.InfoWindow({
    content: cocontentString,
  });
  const marker5 = new google.maps.Marker({
    position: cho_oyu,
    map,
    title: "Uluru (Ayers Rock)",
  });

  marker5.addListener("click", () => {
    coinfowindow.open({
      anchor: marker5,
      map,
    });
  });
    const dgcontentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Mt. Dhaulagiri I</h1>' +
    '<div id="bodyContent">' +
    "<p>Height Above Mean Sea Level : 8,167 meter.</p>" +
    "</div>" +
    "</div>";
  const dginfowindow = new google.maps.InfoWindow({
    content: dgcontentString,
  });
  const marker6 = new google.maps.Marker({
    position: dhaulagiri_I,
    map,
    title: "Uluru (Ayers Rock)",
  });

  marker6.addListener("click", () => {
    dginfowindow.open({
      anchor: marker6,
      map,
    });
  });
    const mscontentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Mt. Manaslu</h1>' +
    '<div id="bodyContent">' +
    "<p>Height Above Mean Sea Level : 8,163 meter.</p>" +
    "</div>" +
    "</div>";
  const msinfowindow = new google.maps.InfoWindow({
    content: mscontentString,
  });
  const marker7 = new google.maps.Marker({
    position: manaslu,
    map,
    title: "Uluru (Ayers Rock)",
  });

  marker7.addListener("click", () => {
    msinfowindow.open({
      anchor: marker7,
      map,
    });
  });
    const anpcontentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Mt. Annapurna I</h1>' +
    '<div id="bodyContent">' +
    "<p>Height Above Mean Sea Level : 8,091 meter.</p>" +
    "</div>" +
    "</div>";
  const anpinfowindow = new google.maps.InfoWindow({
    content: anpcontentString,
  });
  const marker8 = new google.maps.Marker({
    position: annapurna_I,
    map,
    title: "Uluru (Ayers Rock)",
  });

  marker8.addListener("click", () => {
    anpinfowindow.open({
      anchor: marker8,
      map,
    });
  }); 
}

window.initMap = initMap;
