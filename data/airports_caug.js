// CAUG Manual 2-03 airports — plotted as map markers
// Offline & Online対応（Service Workerにプリキャッシュ）

const CAUG_AIRPORTS = [
  // ── Canada ──────────────────────────────
  { icao: "CYEG", name: "Edmonton International",         coords: [53.309, -113.580] },
  { icao: "CYVR", name: "Vancouver International",        coords: [49.194, -123.184] },
  { icao: "CYYC", name: "Calgary International",          coords: [51.113, -114.020] },
  { icao: "CYYZ", name: "Toronto Pearson International",  coords: [43.677,  -79.630] },

  // ── Europe ──────────────────────────────
  { icao: "EDDF", name: "Frankfurt am Main",              coords: [50.033,    8.571] },
  { icao: "EDDL", name: "Düsseldorf",                    coords: [51.280,    6.757] },
  { icao: "EETN", name: "Tallinn Lennart Meri",           coords: [59.413,   24.833] },
  { icao: "EFHK", name: "Helsinki-Vantaa",               coords: [60.317,   24.963] },
  { icao: "EFTU", name: "Turku",                          coords: [60.514,   22.263] },
  { icao: "EGCC", name: "Manchester",                     coords: [53.354,   -2.275] },
  { icao: "EGKK", name: "London Gatwick",                 coords: [51.148,   -0.190] },
  { icao: "EGLL", name: "London Heathrow",                coords: [51.477,   -0.461] },
  { icao: "EGSS", name: "London Stansted",                coords: [51.885,    0.235] },
  { icao: "EHAM", name: "Amsterdam Schiphol",             coords: [52.308,    4.764] },
  { icao: "EKCH", name: "Copenhagen Kastrup",             coords: [55.618,   12.656] },
  { icao: "ESSA", name: "Stockholm Arlanda",              coords: [59.652,   17.919] },
  { icao: "LFPG", name: "Paris Charles de Gaulle",        coords: [49.013,    2.550] },
  { icao: "LFPO", name: "Paris Orly",                     coords: [48.725,    2.360] },
  { icao: "ULLI", name: "St. Petersburg Pulkovo",         coords: [59.800,   30.263] },
  { icao: "UUDD", name: "Moscow Domodedovo",              coords: [55.408,   37.906] },
  { icao: "UUEE", name: "Moscow Sheremetyevo",            coords: [55.972,   37.414] },

  // ── USA ─────────────────────────────────
  { icao: "KBOS", name: "Boston Logan",                   coords: [42.363,  -71.006] },
  { icao: "KDEN", name: "Denver International",           coords: [39.856, -104.674] },
  { icao: "KDFW", name: "Dallas/Fort Worth",              coords: [32.897,  -97.038] },
  { icao: "KDTW", name: "Detroit Metropolitan",           coords: [42.212,  -83.353] },
  { icao: "KEWR", name: "Newark Liberty",                 coords: [40.692,  -74.169] },
  { icao: "KIAH", name: "Houston George Bush",            coords: [29.980,  -95.338] },
  { icao: "KIND", name: "Indianapolis",                   coords: [39.717,  -86.294] },
  { icao: "KJFK", name: "New York JFK",                   coords: [40.641,  -73.779] },
  { icao: "KLAX", name: "Los Angeles",                    coords: [33.942, -118.408] },
  { icao: "KOAK", name: "Oakland",                        coords: [37.721, -122.221] },
  { icao: "KONT", name: "Ontario (California)",           coords: [34.056, -117.601] },
  { icao: "KORD", name: "Chicago O'Hare",                 coords: [41.978,  -87.905] },
  { icao: "KSAN", name: "San Diego",                      coords: [32.733, -117.190] },
  { icao: "KSEA", name: "Seattle-Tacoma",                 coords: [47.449, -122.311] },
  { icao: "KSFO", name: "San Francisco",                  coords: [37.619, -122.375] },
  { icao: "KSMF", name: "Sacramento",                     coords: [38.696, -121.591] },

  // ── Middle East ─────────────────────────
  { icao: "OMAA", name: "Abu Dhabi",                      coords: [24.433,   54.651] },
  { icao: "OMDW", name: "Dubai World Central (Al Maktoum)", coords: [24.896,  55.161] },
  { icao: "OOMS", name: "Muscat",                         coords: [23.593,   58.285] },
  { icao: "OTBD", name: "Doha (old)",                     coords: [25.261,   51.565] },
  { icao: "OTHH", name: "Doha Hamad",                     coords: [25.273,   51.608] },

  // ── Pacific / USA territories ────────────
  { icao: "PANC", name: "Anchorage",                      coords: [61.174, -149.996] },
  { icao: "PASY", name: "Eareckson (Shemya)",             coords: [52.713,  174.113] },
  { icao: "PGUM", name: "Guam A.B. Won Pat",              coords: [13.484,  144.797] },
  { icao: "PHJR", name: "Kalaeloa (Oahu)",                coords: [21.307, -158.070] },
  { icao: "PHKO", name: "Kona",                           coords: [19.739, -156.046] },
  { icao: "PHNL", name: "Honolulu",                       coords: [21.318, -157.922] },
  { icao: "PHOG", name: "Maui Kahului",                   coords: [20.899, -156.430] },
  { icao: "PHTO", name: "Hilo",                           coords: [19.721, -155.049] },

  // ── Taiwan / Korea / Japan ───────────────
  { icao: "RCKH", name: "Kaohsiung",                      coords: [22.577,  120.350] },
  { icao: "RCSS", name: "Taipei Songshan",                coords: [25.069,  121.552] },
  { icao: "RCTP", name: "Taipei Taoyuan",                 coords: [25.077,  121.232] },
  { icao: "RJAA", name: "Narita",                         coords: [35.765,  140.385] },
  { icao: "RJBB", name: "Kansai",                         coords: [34.430,  135.240] },
  { icao: "RJFF", name: "Fukuoka",                        coords: [33.585,  130.451] },
  { icao: "RJTT", name: "Tokyo Haneda",                   coords: [35.552,  139.780] },
  { icao: "RKPC", name: "Jeju",                           coords: [33.511,  126.493] },
  { icao: "RKSI", name: "Incheon",                        coords: [37.460,  126.440] },
  { icao: "RKSS", name: "Gimpo",                          coords: [37.558,  126.792] },
  { icao: "ROAH", name: "Naha",                           coords: [26.196,  127.646] },

  // ── Philippines ─────────────────────────
  { icao: "RPLC", name: "Clark",                          coords: [15.186,  120.560] },
  { icao: "RPLL", name: "Manila Ninoy Aquino",            coords: [14.508,  121.018] },
  { icao: "RPVM", name: "Mactan-Cebu",                    coords: [10.307,  123.979] },

  // ── India / South Asia ──────────────────
  { icao: "VAAH", name: "Ahmedabad",                      coords: [23.072,   72.634] },
  { icao: "VABB", name: "Mumbai Chhatrapati Shivaji",     coords: [19.088,   72.868] },
  { icao: "VECC", name: "Kolkata Netaji Subhash Chandra Bose", coords: [22.655, 88.447] },
  { icao: "VIAR", name: "Amritsar Sri Guru Ram Dass Jee", coords: [31.709,   74.797] },
  { icao: "VIDP", name: "Delhi Indira Gandhi",            coords: [28.568,   77.112] },
  { icao: "VOBL", name: "Bengaluru Kempegowda",           coords: [13.199,   77.706] },
  { icao: "VOMM", name: "Chennai",                        coords: [12.990,   80.169] },

  // ── China / Macao ───────────────────────
  { icao: "VMMC", name: "Macau",                          coords: [22.150,  113.591] },
  { icao: "VHHH", name: "Hong Kong",                      coords: [22.308,  113.915] },
  { icao: "ZBAA", name: "Beijing Capital",                coords: [40.080,  116.588] },
  { icao: "ZBTJ", name: "Tianjin Binhai",                 coords: [39.124,  117.346] },
  { icao: "ZGGG", name: "Guangzhou Baiyun",               coords: [23.393,  113.308] },
  { icao: "ZSPD", name: "Shanghai Pudong",                coords: [31.143,  121.805] },
  { icao: "ZSSS", name: "Shanghai Hongqiao",              coords: [31.198,  121.336] },
  { icao: "ZYTL", name: "Dalian Zhoushuizi",              coords: [38.967,  121.540] },

  // ── Southeast Asia ──────────────────────
  { icao: "VTBD", name: "Bangkok Don Mueang",             coords: [13.906,  100.607] },
  { icao: "VTBS", name: "Bangkok Suvarnabhumi",           coords: [13.690,  100.750] },
  { icao: "VTBU", name: "U-Tapao",                        coords: [12.679,  101.005] },
  { icao: "VTCC", name: "Chiang Mai",                     coords: [18.768,   98.963] },
  { icao: "VTSP", name: "Phuket",                         coords: [ 8.113,   98.300] },
  { icao: "VVCI", name: "Can Tho",                        coords: [10.085,  105.712] },
  { icao: "VVDN", name: "Da Nang",                        coords: [16.044,  108.199] },
  { icao: "VVNB", name: "Hanoi Noi Bai",                  coords: [21.218,  105.807] },
  { icao: "VVTS", name: "Ho Chi Minh (Tan Son Nhat)",     coords: [10.818,  106.652] },
  { icao: "WIII", name: "Jakarta Soekarno-Hatta",         coords: [-6.125,  106.656] },
  { icao: "WMKJ", name: "Johor Bahru",                    coords: [ 1.641,  103.670] },
  { icao: "WMKK", name: "Kuala Lumpur",                   coords: [ 2.746,  101.710] },
  { icao: "WSSS", name: "Singapore Changi",               coords: [ 1.350,  103.983] },

  // ── Australia ───────────────────────────
  { icao: "YBBN", name: "Brisbane",                       coords: [-27.384, 153.118] },
  { icao: "YBCS", name: "Cairns",                         coords: [-16.885, 145.755] },
  { icao: "YMML", name: "Melbourne Tullamarine",          coords: [-37.673, 144.843] },
  { icao: "YPAD", name: "Adelaide",                       coords: [-34.945, 138.531] },
  { icao: "YSSY", name: "Sydney Kingsford Smith",         coords: [-33.946, 151.177] },
];
