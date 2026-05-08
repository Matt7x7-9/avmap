// Route data — approximate corridors based on typical 787 routing
// TODO: Update with actual OFP route strings when available

const AIRPORTS = {
  // ── Japan ─────────────────────────────────────────
  KIX: { name: "関西国際空港",           icao: "RJBB", coords: [34.43,  135.24]  },
  NRT: { name: "成田国際空港",           icao: "RJAA", coords: [35.765, 140.385] },
  HND: { name: "羽田空港",              icao: "RJTT", coords: [35.55,  139.78]  },
  // ── Korea ─────────────────────────────────────────
  GMP: { name: "金浦国際空港",           icao: "RKSS", coords: [37.558, 126.792] },
  // ── China ─────────────────────────────────────────
  PEK: { name: "北京首都国際空港",        icao: "ZBAA", coords: [40.080, 116.588] },
  DLC: { name: "大連周水子国際空港",      icao: "ZYTL", coords: [38.967, 121.540] },
  SHA: { name: "上海虹橋国際空港",        icao: "ZSSS", coords: [31.198, 121.336] },
  PVG: { name: "上海浦東国際空港",        icao: "ZSPD", coords: [31.143, 121.805] },
  CAN: { name: "広州白雲国際空港",        icao: "ZGGG", coords: [23.393, 113.308] },
  // ── Taiwan ────────────────────────────────────────
  TSA: { name: "台北松山空港",           icao: "RCSS", coords: [25.069, 121.552] },
  // ── Hong Kong ─────────────────────────────────────
  HKG: { name: "香港国際空港",           icao: "VHHH", coords: [22.31,  113.92]  },
  // ── Southeast Asia ────────────────────────────────
  MNL: { name: "マニラ・ニノイアキノ国際空港", icao: "RPLL", coords: [14.51,  121.013] },
  BKK: { name: "スワンナプーム国際空港",  icao: "VTBS", coords: [13.69,  100.75]  },
  SGN: { name: "タン・ソン・ニャット国際空港", icao: "VVTS", coords: [10.82,  106.65]  },
  SIN: { name: "チャンギ国際空港",        icao: "WSSS", coords: [1.350,  103.983] },
  CGK: { name: "スカルノハッタ国際空港",  icao: "WIII", coords: [-6.125, 106.656] },
  KUL: { name: "クアラルンプール国際空港", icao: "WMKK", coords: [2.746,  101.710] },
  // ── South Asia ────────────────────────────────────
  DEL: { name: "インディラ・ガンジー国際空港", icao: "VIDP", coords: [28.568, 77.112] },
  // ── South Asia (long-haul) ────────────────────────
  BLR: { name: "ケンペゴウダ国際空港",     icao: "VOBL", coords: [13.199,  77.706] },
  // ── Europe ───────────────────────────────────────
  LHR: { name: "ロンドン・ヒースロー空港", icao: "EGLL", coords: [51.477,  -0.461] },
  CDG: { name: "シャルル・ド・ゴール空港", icao: "LFPG", coords: [49.013,   2.550] },
  HEL: { name: "ヘルシンキ・ヴァンター空港", icao: "EFHK", coords: [60.317,  24.963] },
  FRA: { name: "フランクフルト空港",       icao: "EDDF", coords: [50.033,   8.571] },
  // ── North America (long-haul) ────────────────────
  // 西経は +360° — 日本から東向きに表示するため
  ORD: { name: "シカゴ・オヘア国際空港",   icao: "KORD", coords: [41.978, 272.092] },
  BOS: { name: "ボストン・ローガン国際空港", icao: "KBOS", coords: [42.363, 288.993] },
  SAN: { name: "サンディエゴ国際空港",     icao: "KSAN", coords: [32.734, 242.810] },
  DFW: { name: "ダラス・フォートワース空港", icao: "KDFW", coords: [32.897, 262.963] },
  // ── Pacific ───────────────────────────────────────
  YVR: { name: "バンクーバー国際空港",     icao: "CYVR", coords: [49.194, 236.816] },
  HNL: { name: "ダニエル・K・イノウエ国際空港", icao: "PHNL", coords: [21.318, 202.080] },
  // ── Australia ─────────────────────────────────────
  SYD: { name: "シドニー・キングスフォード・スミス空港", icao: "YSSY", coords: [-33.946, 151.177] },
  MEL: { name: "メルボルン・タラマリン空港", icao: "YMML", coords: [-37.673, 144.843] },
};

// Route groups with color coding and approximate path waypoints [lat, lng]
const ROUTE_GROUPS = [
  {
    id: "japan-bkk",
    name: "日本 ↔ バンコク",
    shortName: "BKK",
    color: "#FF8C42",
    airports: ["KIX", "NRT", "HND", "BKK"],
    firs: ["RJJJ-F", "ZSHA", "ZGZU", "ZJSA", "VVHM", "VTBB"],
    routes: {
      "NRT-BKK": [
        [35.76, 140.39],  // NRT
        [33.5,  131.0],   // Fukuoka area
        [30.0,  124.5],   // East China Sea
        [26.0,  119.5],   // Entering Chinese airspace
        [22.0,  113.5],   // Near HKG
        [18.0,  109.0],   // South China
        [15.0,  105.0],   // Vietnam border
        [13.69, 100.75],  // BKK
      ],
      "HND-BKK": [
        [35.55, 139.78],
        [33.5,  131.0],
        [30.0,  124.5],
        [26.0,  119.5],
        [22.0,  113.5],
        [18.0,  109.0],
        [15.0,  105.0],
        [13.69, 100.75],
      ],
      "KIX-BKK": [
        [34.43, 135.24],  // KIX
        [32.5,  129.0],   // Over Kyushu
        [29.0,  123.0],   // East China Sea
        [25.0,  118.5],
        [21.5,  113.0],
        [18.0,  109.0],
        [15.0,  105.0],
        [13.69, 100.75],  // BKK
      ],
    },
    bidirectional: true,
  },
  {
    id: "japan-hkg",
    name: "日本 ↔ 香港",
    shortName: "HKG",
    color: "#4ECDC4",
    airports: ["NRT", "HND", "HKG"],
    firs: ["RJJJ-F", "ZSHA", "ZGZU", "VHHK"],
    routes: {
      "NRT-HKG": [
        [35.76, 140.39],  // NRT
        [33.0,  130.0],   // Over Kyushu
        [29.5,  124.0],   // East China Sea
        [26.0,  120.0],   // Fujian area
        [22.31, 113.92],  // HKG
      ],
      "HND-HKG": [
        [35.55, 139.78],
        [33.0,  130.0],
        [29.5,  124.0],
        [26.0,  120.0],
        [22.31, 113.92],
      ],
    },
    bidirectional: true,
  },
  {
    id: "japan-mnl",
    name: "日本 ↔ マニラ",
    shortName: "MNL",
    color: "#C9B8FF",
    airports: ["NRT", "HND", "MNL"],
    firs: ["RJJJ", "RPHI", "VVHM"],
    routes: {
      // Source: JAL746 OFP 2026-05-05 (actual coordinates)
      "MNL-NRT": [
        [14.510, 121.013],  // RPLL (MNL)
        [14.557, 121.345],  // TANAY
        [14.705, 122.330],  // JOM       A590
        [15.637, 123.055],  // MUPOB     A590
        [17.370, 124.427],  // VIGOR     A590
        [21.000, 127.417],  // GURAG     A590
        [23.005, 129.082],  // TUNTO     A590
        [24.355, 130.122],  // AVLAS     A590
        [25.855, 131.263],  // MDE       A590
        [27.880, 133.138],  // BIXAK     A590
        [28.583, 133.813],  // DOVAG     A590
        [30.125, 135.342],  // OLDUP     A590
        [31.432, 136.653],  // BUBDO     A590→Y83
        [32.877, 138.167],  // GULEG     Y83
        [33.617, 139.025],  // VIPOT     Y83
        [34.072, 139.562],  // MOE       Y83→Y81
        [34.345, 139.975],  // BAFFY     Y81
        [34.460, 140.150],  // MAMAS     Y81
        [34.730, 140.677],  // RUTAS     Y81→RUTASG
        [35.078, 140.720],  // VENUS     RUTASG
        [35.552, 140.828],  // COPEN     RUTASG
        [35.765, 140.385],  // RJAA (NRT)
      ],
    },
    bidirectional: true,
    ofpSource: "JAL746 MNL-NRT 2026-05-05",
  },
  {
    id: "japan-sgn",
    name: "日本 ↔ ホーチミン",
    shortName: "SGN",
    color: "#A8E6CF",
    airports: ["NRT", "HND", "SGN"],
    firs: ["RJJJ-F", "ZSHA", "ZGZU", "ZJSA", "VVHM"],
    routes: {
      "NRT-SGN": [
        [35.76, 140.39],  // NRT
        [33.0,  130.0],
        [29.0,  124.0],
        [25.0,  118.5],
        [21.0,  114.0],
        [17.0,  110.0],
        [13.0,  108.0],
        [10.82, 106.65],  // SGN
      ],
      "HND-SGN": [
        [35.55, 139.78],
        [33.0,  130.0],
        [29.0,  124.0],
        [25.0,  118.5],
        [21.0,  114.0],
        [17.0,  110.0],
        [13.0,  108.0],
        [10.82, 106.65],
      ],
    },
    bidirectional: true,
  },
];
