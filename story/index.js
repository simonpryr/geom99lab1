// This map displays a marker of the mountain of Nepal above 8,000 m above mean sea level  
// When the user clicks the marker, an info window opens.
// Reference taken from Website: https://developers.google.com/maps/documentation/javascript/examples/infowindow-simple
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
    zoom: 7,
    center: { lat: 27.7172, lng: 85.3240},
  });
  const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Mt. Everest</h1>' +
    '<div id="bodyContent">' +
    "<p>Height Above Mean Sea Level : 8,848.86 meter.</p>" +
    // Content Added from Wikipedia
    "<P><b>Mount Everest</b> (Nepali: सगरमाथा, romanized: Sagarmāthā; Standard Tibetan: ཇོ་མོ་གླང་མ, romanized: Chomolungma; " +
    "Chinese: 珠穆朗玛峰; pinyin: Zhūmùlǎngmǎ Fēng) is Earth's highest mountain above sea level, " +
    "located in the Mahalangur Himal sub-range of the Himalayas. " +
    "The China–Nepal border runs across its summit point. " +
    "Its elevation (snow height) of 8,848.86 m (29,031 ft 8+1⁄2 in) was most recently " +
    "established in 2020 by the Chinese and Nepali authorities.</p>" +
    '<p>Attribution: <a href="https://en.wikipedia.org/wiki/Mount_Everest">' +
    "https://en.wikipedia.org/wiki/Mount_Everest</a> " +
    "</p>" +
    "</div>" +
    "</div>";
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
    maxWidth: 250,
  });
  const marker = new google.maps.Marker({
    position: everest,
    label: "1",
    map,
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
    "<P><b>Kangchenjunga</b>, also spelled Kanchenjunga, Kanchanjanghā and Khangchendzonga, is " +
    "the third-highest mountain in the world. Its summit lies at 8,586 m (28,169 ft) in a " +
    "section of the Himalayas, the Kangchenjunga Himal, which is bounded in the west by the " +
    "Tamur River, in the north by the Lhonak River and Jongsang La, and in the east by the Teesta River. " +
    "It lies in the border region between Nepal and Sikkim state of India, with three of the five peaks, " +
    "namely Main, Central and South, directly on the border, and the peaks West and Kangbachen in Nepal's Taplejung District.</p>" +
    '<p>Attribution: <a href="https://en.wikipedia.org/wiki/Kangchenjunga">' +
    "https://en.wikipedia.org/wiki/Kangchenjunga</a> " +
    "</p>" +
    "</div>" +
    "</div>";
  const kjinfowindow = new google.maps.InfoWindow({
    content: kjcontentString,
    maxWidth: 250,
  });
  const marker2 = new google.maps.Marker({
    position: kangchenjunga,
    label: "2",
    map,
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
    "<P><b>Lhotse</b> (Nepali: ल्होत्से L'hōtsē Nepali pronunciation: " +
    "[lot.se]; Tibetan: ལྷོ་རྩེ Tibetan pronunciation: [l̥otse], " +
    "lho tse, Chinese: 洛子峰) is the fourth highest mountain in " +
    "the world at 8,516 metres (27,940 ft), after Mount Everest, K2, " +
    "and Kangchenjunga. The main summit is on the border between Tibet " +
    "Autonomous Region of China and the Khumbu region of Nepal.</p>" +
    '<p>Attribution: <a href="https://en.wikipedia.org/wiki/Lhotse">' +
    "https://en.wikipedia.org/wiki/Lhotse</a> " +
    "</p>" +
    "</div>" +
    "</div>";
  const ltinfowindow = new google.maps.InfoWindow({
    content: ltcontentString,
    maxWidth: 250,
  });
  const marker3 = new google.maps.Marker({
    position: lhotse,
    label: "3",
    map,
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
    "<P><b>Makalu</b> (Nepali: मकालु हिमाल, romanized: Makālu himāl; Chinese: 马卡鲁峰, " +
    "pinyin: Mǎkǎlǔ Fēng) is the fifth highest mountain in the world at 8,485 " +
    "metres (27,838 ft). It is located in the Mahalangur Himalayas 19 km (12 mi) " +
    "southeast of Mount Everest, on the China–Nepal border. One of the " +
    "eight-thousanders, Makalu is an isolated peak in the shape of a four-sided " +
    "pyramid.</p>" +
    '<p>Attribution: <a href="https://en.wikipedia.org/wiki/Makalu">' +
    "https://en.wikipedia.org/wiki/Makalu</a> " +
    "</p>" +
    "</div>" +
    "</div>";
  const mkinfowindow = new google.maps.InfoWindow({
    content: mkcontentString,
    maxWidth: 250,
  });
  const marker4 = new google.maps.Marker({
    position: makalu,
    label: "4",
    map,
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
    "<P><b>Cho Oyu</b> (Nepali: चोयु; Tibetan: ཇོ་བོ་དབུ་ཡ; Chinese: 卓奥友峰) is the sixth-highest " +
    "mountain in the world at 8,188 metres (26,864 ft) above sea level. Cho Oyu " +
    "means "Turquoise Goddess" in Tibetan. The mountain is the westernmost " +
    "major peak of the Khumbu sub-section of the Mahalangur Himalaya 20 km west of " +
    "Mount Everest. The mountain stands on the China Tibet–Nepal Province No. 1 " +
    "border.</p>" +
    '<p>Attribution: <a href="https://en.wikipedia.org/wiki/Cho_Oyu">' +
    "https://en.wikipedia.org/wiki/Cho_Oyu</a> " +
    "</p>" +
    "</div>" +
    "</div>";
  const coinfowindow = new google.maps.InfoWindow({
    content: cocontentString,
    maxWidth: 250,
  });
  const marker5 = new google.maps.Marker({
    position: cho_oyu,
    label: "5",
    map,
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
    '<h1 id="firstHeading" class="firstHeading">Mt. Dhaulagiri</h1>' +
    '<div id="bodyContent">' +
    "<p>Height Above Mean Sea Level : 8,167 meter.</p>" +
    "<P><b>Dhaulagiri</b>, located in Nepal, is the seventh highest mountain in the world at 8,167 metres (26,795 ft) " +
    "above sea level, and the highest mountain within the borders of a single country. It was first climbed " +
    "on 13 May 1960 by a Swiss-Austrian-Nepali expedition. Annapurna I (8,091 m (26,545 ft)) is 34 km (21 mi) " +
    "east of Dhaulagiri. The Kali Gandaki River flows between the two in the Kaligandaki Gorge, said to be the world's deepest. " +
    "The town of Pokhara is south of the Annapurnas, an important regional center and the gateway for climbers and " +
    "trekkers visiting both ranges as well as a tourist destination in its own right.</p>" +
    '<p>Attribution: <a href="https://en.wikipedia.org/wiki/Dhaulagiri">' +
    "https://en.wikipedia.org/wiki/Dhaulagiri</a> " +
    "</p>" +
    "</div>" +
    "</div>";
  const dginfowindow = new google.maps.InfoWindow({
    content: dgcontentString,
    maxWidth: 250,
  });
  const marker6 = new google.maps.Marker({
    position: dhaulagiri_I,
    label: "6",
    map,
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
    "<P><b>Manaslu</b> (/məˈnɑːsluː/; Nepali: मनास्लु, also known as Kutang) is the eighth-highest mountain in the world at 8,163 metres (26,781 ft) " +
    "above sea level. It is in the Mansiri Himal, part of the Nepalese Himalayas, in west-central Nepal. Manaslu means "mountain of the spirit" and  " +
    "the word is derived from the Sanskrit word manasa, meaning "intellect" or "soul". Manaslu was first climbed on May 9, 1956, by Toshio Imanishi " +
    "and Gyalzen Norbu, members of a Japanese expedition. It is said that, given the many unsuccessful attempts by the " +
    "British to climb Everest before Nepali Tenzing Norgay and New Zealander Edmund " +
    "Hillary, "just as the British consider Everest their mountain, Manaslu has always been a Japanese mountain".</p>" +
    '<p>Attribution: <a href="https://en.wikipedia.org/wiki/Manaslu">' +
    "https://en.wikipedia.org/wiki/Manaslu</a> " +
    "</p>" +
    "</div>" +
    "</div>";
  const msinfowindow = new google.maps.InfoWindow({
    content: mscontentString,
    maxWidth: 250,
  });
  const marker7 = new google.maps.Marker({
    position: manaslu,
    label: "7",
    map,
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
    '<h1 id="firstHeading" class="firstHeading">Mt. Annapurna</h1>' +
    '<div id="bodyContent">' +
    "<p>Height Above Mean Sea Level : 8,091 meter.</p>" +
    "<P><b>Annapurna</b> (/ˌænəˈpʊərnəˌ -ˈpɜːr-/;[3][4] Nepali: अन्नपूर्ण) is a " +
    "mountain situated in the Annapurna mountain range of Gandaki Province, " +
    "north-central Nepal. It is the 10th highest mountain " +
    "in the world at 8,091 metres (26,545 ft) above " +
    "sea level and is well known for the difficulty " +
    "and danger involved in its ascent.</p>" +
    '<p>Attribution: <a href="https://en.wikipedia.org/wiki/Annapurna">' +
    "https://en.wikipedia.org/wiki/Annapurna</a> " +
    "</p>" +
    "</div>" +
    "</div>";
  const anpinfowindow = new google.maps.InfoWindow({
    content: anpcontentString,
    maxWidth: 250,
  });
  const marker8 = new google.maps.Marker({
    position: annapurna_I,
    label: "8",
    map,
  });

  marker8.addListener("click", () => {
    anpinfowindow.open({
      anchor: marker8,
      map,
    });
  }); 
}

window.initMap = initMap;
