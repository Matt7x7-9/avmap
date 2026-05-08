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

// Route groups — 暫定表示用（OFPデータがない新規路線のみ）
// OFPデータ追加後はOFP_GROUPSへ移行してここから削除する
// ※ BKK/HKG/MNL/SGN はOFPルートに移行済みのため削除
const ROUTE_GROUPS = [
  // 現在OFPルートがすべて揃っているため空
  // 新路線追加時はここに暫定ルートを追加、OFP取得後にofp_to_avmap.pyで正式移行
];
