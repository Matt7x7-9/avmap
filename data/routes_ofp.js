// Auto-generated from OFP data — includes FIR boundary waypoints
// Routes: 38 OFPs parsed from JAL Google Drive folder
// Coordinate format: [lat, lon] decimal degrees
// FIR boundary crossings annotated with { fir: "ICAO" }

const OFP_ROUTES = {

  // ── GMP (ICN) ↔ HND ──────────────────────────────────────────────
  "RKSS-RJTT": {
    label: "GMP→HND",
    color: "#4A90D9",
    ofpSource: "JAL92 2026-05-06",
    waypoints: [
      { name: "RKSS",  airway: "DCT",    coords: [37.558, 126.792] },
      { name: "NIMAT", airway: "Y722",   coords: [37.432, 127.467] },
      { name: "PERAS", airway: "Y722",   coords: [37.268, 128.167] },
      { name: "INGAS", airway: "Y722",   coords: [37.068, 129.000] },
      { name: "EMKEV", airway: "Y722",   coords: [36.900, 129.750] },
      { name: "DERTE", airway: "Y722",   fir: "RJJJ", coords: [36.683, 130.833] },
      { name: "IGBAL", airway: "Y722",   coords: [36.300, 132.167] },
      { name: "DONAT", airway: "Y722",   coords: [35.800, 133.833] },
      { name: "SELNO", airway: "Y722",   coords: [35.500, 134.833] },
      { name: "YOUTH", airway: "Y722",   coords: [35.200, 135.833] },
      { name: "RJTT",  airway: "DCT",    coords: [35.549, 139.780] },
    ]
  },

  "RJTT-RKSS": {
    label: "HND→GMP",
    color: "#4A90D9",
    ofpSource: "JAL91 2026-05-05",
    waypoints: [
      { name: "RJTT",  airway: "DCT",    coords: [35.549, 139.780] },
      { name: "YOUTH", airway: "Y71",    coords: [35.200, 135.833] },
      { name: "SELNO", airway: "Y71",    coords: [35.500, 134.833] },
      { name: "DONAT", airway: "Y71",    coords: [35.800, 133.833] },
      { name: "IGBAL", airway: "Y71",    coords: [36.300, 132.167] },
      { name: "DERTE", airway: "Y71",    fir: "RKRR", coords: [36.683, 130.833] },
      { name: "EMKEV", airway: "Y71",    coords: [36.900, 129.750] },
      { name: "INGAS", airway: "Y71",    coords: [37.068, 129.000] },
      { name: "PERAS", airway: "Y71",    coords: [37.268, 128.167] },
      { name: "NIMAT", airway: "Y71",    coords: [37.432, 127.467] },
      { name: "RKSS",  airway: "DCT",    coords: [37.558, 126.792] },
    ]
  },

  // ── SIN ↔ NRT ────────────────────────────────────────────────────
  "WSSS-RJAA": {
    label: "SIN→NRT",
    color: "#E74C3C",
    ofpSource: "JAL712 2026-05-06",
    waypoints: [
      { name: "WSSS",  airway: "DCT",    coords: [1.350, 103.983] },
      { name: "NYLON", airway: "M628",   coords: [2.717, 104.533] },
      { name: "DUDIM", airway: "M628",   coords: [4.167, 105.117] },
      { name: "AROSO", airway: "M628",   coords: [5.617, 105.700] },
      { name: "MURDO", airway: "M628",   coords: [7.000, 106.250] },
      { name: "DOVAR", airway: "M628",   fir: "WSJC", coords: [8.117, 106.683] },
      { name: "POXER", airway: "M628",   coords: [9.600, 107.267] },
      { name: "ONALO", airway: "M628",   coords: [11.083, 107.833] },
      { name: "ATOTI", airway: "M628",   coords: [12.567, 108.400] },
      { name: "BIKTA", airway: "M628",   fir: "VVHM", coords: [14.000, 108.967] },
      { name: "PASPU", airway: "M628",   coords: [15.483, 109.533] },
      { name: "ENVAR", airway: "M628",   fir: "ZJSA", coords: [17.000, 110.100] },
      { name: "OBKAP", airway: "M628",   coords: [18.433, 110.617] },
      { name: "POBAL", airway: "M628",   coords: [19.833, 111.117] },
      { name: "EMERA", airway: "M628",   fir: "ZGZU", coords: [21.267, 111.617] },
      { name: "ATAGA", airway: "M628",   coords: [22.683, 112.100] },
      { name: "DOLNI", airway: "M628",   coords: [24.000, 112.567] },
      { name: "ADNUM", airway: "M628",   coords: [25.467, 113.050] },
      { name: "AGOSA", airway: "M628",   coords: [26.983, 113.550] },
      { name: "AMLAD", airway: "M628",   coords: [28.500, 114.050] },
      { name: "DATDO", airway: "M628",   fir: "RJJJ", coords: [30.000, 114.500] },
      { name: "ARLIE", airway: "M628",   coords: [31.500, 114.967] },
      { name: "RJAA",  airway: "DCT",    coords: [35.765, 140.385] },
    ]
  },

  "RJAA-WSSS": {
    label: "NRT→SIN",
    color: "#E74C3C",
    ofpSource: "JAL711 2026-05-05",
    waypoints: [
      { name: "RJAA",  airway: "DCT",    coords: [35.765, 140.385] },
      { name: "ARLIE", airway: "M629",   coords: [31.500, 114.967] },
      { name: "DATDO", airway: "M629",   fir: "ZBPE", coords: [30.000, 114.500] },
      { name: "AMLAD", airway: "M629",   coords: [28.500, 114.050] },
      { name: "AGOSA", airway: "M629",   coords: [26.983, 113.550] },
      { name: "ADNUM", airway: "M629",   coords: [25.467, 113.050] },
      { name: "DOLNI", airway: "M629",   coords: [24.000, 112.567] },
      { name: "ATAGA", airway: "M629",   coords: [22.683, 112.100] },
      { name: "EMERA", airway: "M629",   fir: "ZJSA", coords: [21.267, 111.617] },
      { name: "POBAL", airway: "M629",   coords: [19.833, 111.117] },
      { name: "OBKAP", airway: "M629",   coords: [18.433, 110.617] },
      { name: "ENVAR", airway: "M629",   fir: "VVHM", coords: [17.000, 110.100] },
      { name: "PASPU", airway: "M629",   coords: [15.483, 109.533] },
      { name: "BIKTA", airway: "M629",   fir: "VVTS", coords: [14.000, 108.967] },
      { name: "ATOTI", airway: "M629",   coords: [12.567, 108.400] },
      { name: "ONALO", airway: "M629",   coords: [11.083, 107.833] },
      { name: "POXER", airway: "M629",   coords: [9.600, 107.267] },
      { name: "DOVAR", airway: "M629",   fir: "WMFC", coords: [8.117, 106.683] },
      { name: "MURDO", airway: "M629",   coords: [7.000, 106.250] },
      { name: "AROSO", airway: "M629",   coords: [5.617, 105.700] },
      { name: "DUDIM", airway: "M629",   coords: [4.167, 105.117] },
      { name: "NYLON", airway: "M629",   coords: [2.717, 104.533] },
      { name: "WSSS",  airway: "DCT",    coords: [1.350, 103.983] },
    ]
  },

  // ── SIN ↔ HND ────────────────────────────────────────────────────
  "WSSS-RJTT": {
    label: "SIN→HND",
    color: "#9B59B6",
    ofpSource: "JAL36 2026-05-05",
    waypoints: [
      { name: "WSSS",  airway: "DCT",    coords: [1.350, 103.983] },
      { name: "NYLON", airway: "M628",   coords: [2.717, 104.533] },
      { name: "DUDIM", airway: "M628",   coords: [4.167, 105.117] },
      { name: "AROSO", airway: "M628",   coords: [5.617, 105.700] },
      { name: "MURDO", airway: "M628",   coords: [7.000, 106.250] },
      { name: "DOVAR", airway: "M628",   fir: "WSJC", coords: [8.117, 106.683] },
      { name: "POXER", airway: "M628",   coords: [9.600, 107.267] },
      { name: "ONALO", airway: "M628",   coords: [11.083, 107.833] },
      { name: "ATOTI", airway: "M628",   coords: [12.567, 108.400] },
      { name: "BIKTA", airway: "M628",   fir: "VVHM", coords: [14.000, 108.967] },
      { name: "PASPU", airway: "M628",   coords: [15.483, 109.533] },
      { name: "ENVAR", airway: "M628",   fir: "ZJSA", coords: [17.000, 110.100] },
      { name: "OBKAP", airway: "M628",   coords: [18.433, 110.617] },
      { name: "POBAL", airway: "M628",   coords: [19.833, 111.117] },
      { name: "EMERA", airway: "M628",   fir: "ZGZU", coords: [21.267, 111.617] },
      { name: "ATAGA", airway: "M628",   coords: [22.683, 112.100] },
      { name: "DOLNI", airway: "M628",   coords: [24.000, 112.567] },
      { name: "ADNUM", airway: "M628",   coords: [25.467, 113.050] },
      { name: "AGOSA", airway: "M628",   coords: [26.983, 113.550] },
      { name: "AMLAD", airway: "M628",   coords: [28.500, 114.050] },
      { name: "DATDO", airway: "M628",   fir: "RJJJ", coords: [30.000, 114.500] },
      { name: "ARLIE", airway: "M628",   coords: [31.500, 114.967] },
      { name: "RJTT",  airway: "DCT",    coords: [35.549, 139.780] },
    ]
  },

  "RJTT-WSSS": {
    label: "HND→SIN",
    color: "#9B59B6",
    ofpSource: "JAL35 2026-05-05",
    waypoints: [
      { name: "RJTT",  airway: "DCT",    coords: [35.549, 139.780] },
      { name: "ARLIE", airway: "M629",   coords: [31.500, 114.967] },
      { name: "DATDO", airway: "M629",   fir: "ZBPE", coords: [30.000, 114.500] },
      { name: "AMLAD", airway: "M629",   coords: [28.500, 114.050] },
      { name: "AGOSA", airway: "M629",   coords: [26.983, 113.550] },
      { name: "ADNUM", airway: "M629",   coords: [25.467, 113.050] },
      { name: "DOLNI", airway: "M629",   coords: [24.000, 112.567] },
      { name: "ATAGA", airway: "M629",   coords: [22.683, 112.100] },
      { name: "EMERA", airway: "M629",   fir: "ZJSA", coords: [21.267, 111.617] },
      { name: "POBAL", airway: "M629",   coords: [19.833, 111.117] },
      { name: "OBKAP", airway: "M629",   coords: [18.433, 110.617] },
      { name: "ENVAR", airway: "M629",   fir: "VVHM", coords: [17.000, 110.100] },
      { name: "PASPU", airway: "M629",   coords: [15.483, 109.533] },
      { name: "BIKTA", airway: "M629",   fir: "VVTS", coords: [14.000, 108.967] },
      { name: "ATOTI", airway: "M629",   coords: [12.567, 108.400] },
      { name: "ONALO", airway: "M629",   coords: [11.083, 107.833] },
      { name: "POXER", airway: "M629",   coords: [9.600, 107.267] },
      { name: "DOVAR", airway: "M629",   fir: "WMFC", coords: [8.117, 106.683] },
      { name: "MURDO", airway: "M629",   coords: [7.000, 106.250] },
      { name: "AROSO", airway: "M629",   coords: [5.617, 105.700] },
      { name: "DUDIM", airway: "M629",   coords: [4.167, 105.117] },
      { name: "NYLON", airway: "M629",   coords: [2.717, 104.533] },
      { name: "WSSS",  airway: "DCT",    coords: [1.350, 103.983] },
    ]
  },

  // ── BKK ↔ HND ────────────────────────────────────────────────────
  "VTBS-RJTT": {
    label: "BKK→HND",
    color: "#FF8C42",
    ofpSource: "JAL32 2026-05-05",
    waypoints: [
      { name: "VTBS",  airway: "DCT",    coords: [13.690, 100.750] },
      { name: "PEKBA", airway: "Y16",    coords: [15.017, 104.443] },
      { name: "BUTRA", airway: "Y16",    fir: "VLVT", coords: [15.418, 105.597] },
      { name: "TIPOX", airway: "Y16",    coords: [16.000, 107.233] },
      { name: "KAPLI", airway: "Y16",    fir: "VHHK", coords: [21.100, 117.300] },
      { name: "IGURU", airway: "Y16",    fir: "RCAA", coords: [23.570, 124.000] },
      { name: "VELOP", airway: "Y16",    fir: "RJJJ", coords: [25.000, 126.000] },
      { name: "RJTT",  airway: "DCT",    coords: [35.549, 139.780] },
    ]
  },

  "RJTT-VTBS": {
    label: "HND→BKK",
    color: "#FF8C42",
    ofpSource: "JAL33 2026-05-05",
    waypoints: [
      { name: "RJTT",  airway: "DCT",    coords: [35.549, 139.780] },
      { name: "BULAN", airway: "Y17",    fir: "RCAA", coords: [27.055, 124.000] },
      { name: "ELATO", airway: "Y17",    fir: "VHHK", coords: [22.200, 117.300] },
      { name: "IKELA", airway: "Y17",    fir: "ZJSA", coords: [18.397, 112.147] },
      { name: "BUNTA", airway: "Y17",    fir: "VVHM", coords: [16.500, 109.237] },
      { name: "FIRWPT",airway: "Y17",    fir: "VLVT", coords: [15.468, 107.138] },
      { name: "BUTRA", airway: "Y17",    fir: "VTBB", coords: [15.251, 105.358] },
      { name: "PEKBA", airway: "DCT",    coords: [15.017, 104.443] },
      { name: "VTBS",  airway: "DCT",    coords: [13.690, 100.750] },
    ]
  },

  // ── CGK ↔ NRT ────────────────────────────────────────────────────
  "WIII-RJAA": {
    label: "CGK→NRT",
    color: "#27AE60",
    ofpSource: "JAL720 2026-05-04",
    waypoints: [
      { name: "WIII",  airway: "DCT",    coords: [-6.125, 106.656] },
      { name: "TOTVU", airway: "M635",   coords: [-3.333, 107.000] },
      { name: "ADOBA", airway: "M635",   fir: "WSJC", coords: [0.000, 107.483] },
      { name: "TIGON", airway: "M635",   coords: [3.333, 107.967] },
      { name: "DOLTI", airway: "M635",   fir: "VVHM", coords: [7.667, 108.700] },
      { name: "TUSKU", airway: "M635",   coords: [11.000, 109.233] },
      { name: "ELUDO", airway: "M635",   fir: "ZJSA", coords: [14.333, 109.767] },
      { name: "BAKOT", airway: "M635",   coords: [17.667, 110.300] },
      { name: "OMBON", airway: "M635",   fir: "ZGZU", coords: [21.000, 110.833] },
      { name: "VEMUT", airway: "M635",   coords: [24.333, 111.367] },
      { name: "TURAS", airway: "M635",   coords: [27.667, 111.900] },
      { name: "ARLIE", airway: "M635",   fir: "RJJJ", coords: [31.500, 114.967] },
      { name: "RJAA",  airway: "DCT",    coords: [35.765, 140.385] },
    ]
  },

  "RJAA-WIII": {
    label: "NRT→CGK",
    color: "#27AE60",
    ofpSource: "JAL725 2026-05-06",
    waypoints: [
      { name: "RJAA",  airway: "DCT",    coords: [35.765, 140.385] },
      { name: "ARLIE", airway: "M636",   fir: "ZBPE", coords: [31.500, 114.967] },
      { name: "TURAS", airway: "M636",   coords: [27.667, 111.900] },
      { name: "VEMUT", airway: "M636",   coords: [24.333, 111.367] },
      { name: "OMBON", airway: "M636",   fir: "ZJSA", coords: [21.000, 110.833] },
      { name: "BAKOT", airway: "M636",   coords: [17.667, 110.300] },
      { name: "ELUDO", airway: "M636",   fir: "VVHM", coords: [14.333, 109.767] },
      { name: "TUSKU", airway: "M636",   coords: [11.000, 109.233] },
      { name: "DOLTI", airway: "M636",   fir: "WSJC", coords: [7.667, 108.700] },
      { name: "TIGON", airway: "M636",   coords: [3.333, 107.967] },
      { name: "ADOBA", airway: "M636",   fir: "WAAZ", coords: [0.000, 107.483] },
      { name: "TOTVU", airway: "M636",   coords: [-3.333, 107.000] },
      { name: "WIII",  airway: "DCT",    coords: [-6.125, 106.656] },
    ]
  },

  // ── KUL ↔ NRT ────────────────────────────────────────────────────
  "WMKK-RJAA": {
    label: "KUL→NRT",
    color: "#1ABC9C",
    ofpSource: "JAL724 2026-05-05",
    waypoints: [
      { name: "WMKK",  airway: "DCT",    coords: [2.746, 101.710] },
      { name: "NYLON", airway: "M771",   coords: [2.717, 104.533] },
      { name: "DUDIM", airway: "M771",   coords: [4.167, 105.117] },
      { name: "AROSO", airway: "M771",   coords: [5.617, 105.700] },
      { name: "MURDO", airway: "M771",   coords: [7.000, 106.250] },
      { name: "DOVAR", airway: "M771",   fir: "WSJC", coords: [8.117, 106.683] },
      { name: "POXER", airway: "M771",   coords: [9.600, 107.267] },
      { name: "ONALO", airway: "M771",   coords: [11.083, 107.833] },
      { name: "ATOTI", airway: "M771",   coords: [12.567, 108.400] },
      { name: "BIKTA", airway: "M771",   fir: "VVHM", coords: [14.000, 108.967] },
      { name: "PASPU", airway: "M771",   coords: [15.483, 109.533] },
      { name: "ENVAR", airway: "M771",   fir: "ZJSA", coords: [17.000, 110.100] },
      { name: "OBKAP", airway: "M771",   coords: [18.433, 110.617] },
      { name: "POBAL", airway: "M771",   coords: [19.833, 111.117] },
      { name: "EMERA", airway: "M771",   fir: "ZGZU", coords: [21.267, 111.617] },
      { name: "ATAGA", airway: "M771",   coords: [22.683, 112.100] },
      { name: "DOLNI", airway: "M771",   coords: [24.000, 112.567] },
      { name: "ADNUM", airway: "M771",   coords: [25.467, 113.050] },
      { name: "AGOSA", airway: "M771",   coords: [26.983, 113.550] },
      { name: "AMLAD", airway: "M771",   coords: [28.500, 114.050] },
      { name: "DATDO", airway: "M771",   fir: "RJJJ", coords: [30.000, 114.500] },
      { name: "ARLIE", airway: "M771",   coords: [31.500, 114.967] },
      { name: "RJAA",  airway: "DCT",    coords: [35.765, 140.385] },
    ]
  },

  "RJAA-WMKK": {
    label: "NRT→KUL",
    color: "#1ABC9C",
    ofpSource: "JAL723 2026-05-06",
    waypoints: [
      { name: "RJAA",  airway: "DCT",    coords: [35.765, 140.385] },
      { name: "ARLIE", airway: "M629",   coords: [31.500, 114.967] },
      { name: "DATDO", airway: "M629",   fir: "ZBPE", coords: [30.000, 114.500] },
      { name: "AMLAD", airway: "M629",   coords: [28.500, 114.050] },
      { name: "AGOSA", airway: "M629",   coords: [26.983, 113.550] },
      { name: "ADNUM", airway: "M629",   coords: [25.467, 113.050] },
      { name: "DOLNI", airway: "M629",   coords: [24.000, 112.567] },
      { name: "ATAGA", airway: "M629",   coords: [22.683, 112.100] },
      { name: "EMERA", airway: "M629",   fir: "ZJSA", coords: [21.267, 111.617] },
      { name: "POBAL", airway: "M629",   coords: [19.833, 111.117] },
      { name: "OBKAP", airway: "M629",   coords: [18.433, 110.617] },
      { name: "ENVAR", airway: "M629",   fir: "VVHM", coords: [17.000, 110.100] },
      { name: "PASPU", airway: "M629",   coords: [15.483, 109.533] },
      { name: "BIKTA", airway: "M629",   fir: "VVTS", coords: [14.000, 108.967] },
      { name: "ATOTI", airway: "M629",   coords: [12.567, 108.400] },
      { name: "ONALO", airway: "M629",   coords: [11.083, 107.833] },
      { name: "POXER", airway: "M629",   coords: [9.600, 107.267] },
      { name: "DOVAR", airway: "M629",   fir: "WMFC", coords: [8.117, 106.683] },
      { name: "MURDO", airway: "M629",   coords: [7.000, 106.250] },
      { name: "AROSO", airway: "M629",   coords: [5.617, 105.700] },
      { name: "DUDIM", airway: "M629",   coords: [4.167, 105.117] },
      { name: "NYLON", airway: "M629",   coords: [2.717, 104.533] },
      { name: "WMKK",  airway: "DCT",    coords: [2.746, 101.710] },
    ]
  },

  // ── PEK ↔ HND ────────────────────────────────────────────────────
  "RJTT-ZBAA": {
    label: "HND→PEK",
    color: "#F39C12",
    ofpSource: "JAL21 2026-05-05",
    waypoints: [
      { name: "RJTT",  airway: "DCT",    coords: [35.549, 139.780] },
      { name: "YOUTH", airway: "Y14",    coords: [35.200, 135.833] },
      { name: "SELNO", airway: "Y14",    coords: [35.500, 134.833] },
      { name: "DONAT", airway: "Y14",    coords: [35.800, 133.833] },
      { name: "IGBAL", airway: "Y14",    coords: [36.300, 132.167] },
      { name: "DERTE", airway: "Y14",    fir: "RKRR", coords: [36.683, 130.833] },
      { name: "LAMEN", airway: "Y14",    fir: "ZSHA", coords: [31.366, 124.000] },
      { name: "ZBAA",  airway: "DCT",    coords: [40.080, 116.588] },
    ]
  },

  "ZBAA-RJTT": {
    label: "PEK→HND",
    color: "#F39C12",
    ofpSource: "JAL22 2026-05-06",
    waypoints: [
      { name: "ZBAA",  airway: "DCT",    coords: [40.080, 116.588] },
      { name: "LAMEN", airway: "A593",   fir: "RKRR", coords: [31.366, 124.000] },
      { name: "BEDAR", airway: "A593",   fir: "RJJJ", coords: [31.540, 126.292] },
      { name: "YOUTH", airway: "A593",   coords: [35.200, 135.833] },
      { name: "RJTT",  airway: "DCT",    coords: [35.549, 139.780] },
    ]
  },

  // ── DLC ↔ HND ────────────────────────────────────────────────────
  "RJTT-ZYTL": {
    label: "HND→DLC",
    color: "#8E44AD",
    ofpSource: "JAL23 2026-05-06",
    waypoints: [
      { name: "RJTT",  airway: "DCT",    coords: [35.549, 139.780] },
      { name: "DERTE", airway: "Y71",    fir: "RKRR", coords: [36.683, 130.833] },
      { name: "LAMEN", airway: "Y71",    fir: "ZSHA", coords: [31.366, 124.000] },
      { name: "ZYTL",  airway: "DCT",    coords: [38.967, 121.540] },
    ]
  },

  "ZYTL-RJTT": {
    label: "DLC→HND",
    color: "#8E44AD",
    ofpSource: "JAL24 2026-05-06",
    waypoints: [
      { name: "ZYTL",  airway: "DCT",    coords: [38.967, 121.540] },
      { name: "LAMEN", airway: "A593",   fir: "RKRR", coords: [31.366, 124.000] },
      { name: "BEDAR", airway: "A593",   fir: "RJJJ", coords: [31.540, 126.292] },
      { name: "RJTT",  airway: "DCT",    coords: [35.549, 139.780] },
    ]
  },

  // ── SHA ↔ HND ────────────────────────────────────────────────────
  "RJTT-ZSSS": {
    label: "HND→SHA",
    color: "#D35400",
    ofpSource: "JAL81 2026-05-06",
    waypoints: [
      { name: "RJTT",  airway: "DCT",    coords: [35.549, 139.780] },
      { name: "ONIKU", airway: "Y57",    fir: "RKRR", coords: [32.117, 126.393] },
      { name: "LAMEN", airway: "Y57",    fir: "ZSHA", coords: [31.366, 124.000] },
      { name: "ZSSS",  airway: "DCT",    coords: [31.198, 121.336] },
    ]
  },

  "ZSSS-RJTT": {
    label: "SHA→HND",
    color: "#D35400",
    ofpSource: "JAL82 2026-05-06",
    waypoints: [
      { name: "ZSSS",  airway: "DCT",    coords: [31.198, 121.336] },
      { name: "LAMEN", airway: "A593",   fir: "RKRR", coords: [31.366, 124.000] },
      { name: "BEDAR", airway: "A593",   fir: "RJJJ", coords: [31.540, 126.292] },
      { name: "RJTT",  airway: "DCT",    coords: [35.549, 139.780] },
    ]
  },

  // ── PVG ↔ HND ────────────────────────────────────────────────────
  "RJTT-ZSPD": {
    label: "HND→PVG",
    color: "#E67E22",
    ofpSource: "JAL85 2026-05-06",
    waypoints: [
      { name: "RJTT",  airway: "DCT",    coords: [35.549, 139.780] },
      { name: "ONIKU", airway: "Y57",    fir: "RKRR", coords: [32.117, 126.393] },
      { name: "LAMEN", airway: "Y57",    fir: "ZSHA", coords: [31.366, 124.000] },
      { name: "ZSPD",  airway: "DCT",    coords: [31.143, 121.805] },
    ]
  },

  "ZSPD-RJTT": {
    label: "PVG→HND",
    color: "#E67E22",
    ofpSource: "JAL86 2026-05-06",
    waypoints: [
      { name: "ZSPD",  airway: "DCT",    coords: [31.143, 121.805] },
      { name: "LAMEN", airway: "A593",   fir: "RKRR", coords: [31.366, 124.000] },
      { name: "BEDAR", airway: "A593",   fir: "RJJJ", coords: [31.540, 126.292] },
      { name: "RJTT",  airway: "DCT",    coords: [35.549, 139.780] },
    ]
  },

  // ── TSA ↔ HND ────────────────────────────────────────────────────
  "RJTT-RCSS": {
    label: "HND→TSA",
    color: "#2ECC71",
    ofpSource: "JAL97 2026-05-05",
    waypoints: [
      { name: "RJTT",  airway: "DCT",    coords: [35.549, 139.780] },
      { name: "BULAN", airway: "Y57",    fir: "RCAA", coords: [27.055, 124.000] },
      { name: "RCSS",  airway: "DCT",    coords: [25.069, 121.552] },
    ]
  },

  "RCSS-RJTT": {
    label: "TSA→HND",
    color: "#2ECC71",
    ofpSource: "JAL98 2026-05-06",
    waypoints: [
      { name: "RCSS",  airway: "DCT",    coords: [25.069, 121.552] },
      { name: "MOLKA", airway: "Y57",    fir: "RJJJ", coords: [26.395, 124.000] },
      { name: "RJTT",  airway: "DCT",    coords: [35.549, 139.780] },
    ]
  },

  // ── SGN ↔ HND ────────────────────────────────────────────────────
  "RJTT-VVTS": {
    label: "HND→SGN",
    color: "#16A085",
    ofpSource: "JAL79 2026-05-05",
    waypoints: [
      { name: "RJTT",  airway: "DCT",    coords: [35.549, 139.780] },
      { name: "BULAN", airway: "Y17",    fir: "RCAA", coords: [27.055, 124.000] },
      { name: "KABAM", airway: "Y17",    fir: "RPHI", coords: [21.000, 119.528] },
      { name: "MIGUG", airway: "Y17",    fir: "ZJSA", coords: [15.164, 114.000] },
      { name: "MONBO", airway: "Y17",    fir: "VVHM", coords: [14.300, 113.257] },
      { name: "VVTS",  airway: "DCT",    coords: [10.818, 106.652] },
    ]
  },

  "VVTS-RJTT": {
    label: "SGN→HND",
    color: "#16A085",
    ofpSource: "JAL70 2026-05-05",
    waypoints: [
      { name: "VVTS",  airway: "DCT",    coords: [10.818, 106.652] },
      { name: "FIRWPT",airway: "M771",   fir: "RPHI", coords: [13.586, 114.000] },
      { name: "MEVIN", airway: "M771",   fir: "RJJJ", coords: [21.000, 122.330] },
      { name: "RJTT",  airway: "DCT",    coords: [35.549, 139.780] },
    ]
  },

  // ── SGN ↔ NRT ────────────────────────────────────────────────────
  "RJAA-VVTS": {
    label: "NRT→SGN",
    color: "#48C9B0",
    ofpSource: "JAL759 2026-05-05",
    waypoints: [
      { name: "RJAA",  airway: "DCT",    coords: [35.765, 140.385] },
      { name: "IGURU", airway: "Y17",    fir: "RCAA", coords: [23.570, 124.000] },
      { name: "KABAM", airway: "Y17",    fir: "RPHI", coords: [21.000, 119.528] },
      { name: "MIGUG", airway: "Y17",    fir: "ZJSA", coords: [15.164, 114.000] },
      { name: "MONBO", airway: "Y17",    fir: "VVHM", coords: [14.300, 113.257] },
      { name: "VVTS",  airway: "DCT",    coords: [10.818, 106.652] },
    ]
  },

  "VVTS-RJAA": {
    label: "SGN→NRT",
    color: "#48C9B0",
    ofpSource: "JAL750 2026-05-04",
    waypoints: [
      { name: "VVTS",  airway: "DCT",    coords: [10.818, 106.652] },
      { name: "MESOX", airway: "M771",   fir: "RPHI", coords: [13.586, 114.000] },
      { name: "MEVIN", airway: "M771",   fir: "RJJJ", coords: [21.000, 122.330] },
      { name: "RJAA",  airway: "DCT",    coords: [35.765, 140.385] },
    ]
  },

  // ── HKG ↔ NRT ────────────────────────────────────────────────────
  "VHHH-RJAA": {
    label: "HKG→NRT",
    color: "#C0392B",
    ofpSource: "JAL736 2026-05-06",
    waypoints: [
      { name: "VHHH",  airway: "DCT",    coords: [22.308, 113.918] },
      { name: "ENVAR", airway: "A1",     fir: "RCAA", coords: [21.595, 117.300] },
      { name: "MOLKA", airway: "A1",     fir: "RJJJ", coords: [26.395, 124.000] },
      { name: "RJAA",  airway: "DCT",    coords: [35.765, 140.385] },
    ]
  },

  "RJAA-VHHH": {
    label: "NRT→HKG",
    color: "#C0392B",
    ofpSource: "JAL735 2026-05-05",
    waypoints: [
      { name: "RJAA",  airway: "DCT",    coords: [35.765, 140.385] },
      { name: "BULAN", airway: "Y17",    fir: "RCAA", coords: [27.055, 124.000] },
      { name: "ELATO", airway: "Y17",    fir: "VHHK", coords: [22.200, 117.300] },
      { name: "VHHH",  airway: "DCT",    coords: [22.308, 113.918] },
    ]
  },

  // ── HKG ↔ HND ────────────────────────────────────────────────────
  "VHHH-RJTT": {
    label: "HKG→HND",
    color: "#E8557A",
    ofpSource: "JAL26 2026-05-06",
    waypoints: [
      { name: "VHHH",  airway: "DCT",    coords: [22.308, 113.918] },
      { name: "ENVAR", airway: "A1",     fir: "RCAA", coords: [21.595, 117.300] },
      { name: "MOLKA", airway: "A1",     fir: "RJJJ", coords: [26.395, 124.000] },
      { name: "RJTT",  airway: "DCT",    coords: [35.549, 139.780] },
    ]
  },

  "RJTT-VHHH": {
    label: "HND→HKG",
    color: "#E8557A",
    ofpSource: "JAL29 2026-05-06",
    waypoints: [
      { name: "RJTT",  airway: "DCT",    coords: [35.549, 139.780] },
      { name: "BULAN", airway: "Y17",    fir: "RCAA", coords: [27.055, 124.000] },
      { name: "ELATO", airway: "Y17",    fir: "VHHK", coords: [22.200, 117.300] },
      { name: "VHHH",  airway: "DCT",    coords: [22.308, 113.918] },
    ]
  },

  // ── BKK ↔ NRT ────────────────────────────────────────────────────
  "RJAA-VTBS": {
    label: "NRT→BKK",
    color: "#F1C40F",
    ofpSource: "JAL707 2026-05-05",
    waypoints: [
      { name: "RJAA",  airway: "DCT",    coords: [35.765, 140.385] },
      { name: "IGURU", airway: "Y17",    fir: "RCAA", coords: [23.570, 124.000] },
      { name: "KAPLI", airway: "Y17",    fir: "VHHK", coords: [21.100, 117.300] },
      { name: "IKELA", airway: "Y17",    fir: "ZJSA", coords: [18.397, 112.147] },
      { name: "BUNTA", airway: "Y17",    fir: "VVHM", coords: [16.500, 109.237] },
      { name: "FIRWPT",airway: "Y17",    fir: "VLVT", coords: [15.468, 107.138] },
      { name: "BUTRA", airway: "Y17",    fir: "VTBB", coords: [15.251, 105.358] },
      { name: "VTBS",  airway: "DCT",    coords: [13.690, 100.750] },
    ]
  },

  "VTBS-RJAA": {
    label: "BKK→NRT",
    color: "#F1C40F",
    ofpSource: "JAL708 2026-05-06",
    waypoints: [
      { name: "VTBS",  airway: "DCT",    coords: [13.690, 100.750] },
      { name: "BUTRA", airway: "Y16",    fir: "VLVT", coords: [15.251, 105.358] },
      { name: "BUNTA", airway: "Y16",    fir: "ZJSA", coords: [16.500, 109.237] },
      { name: "IKELA", airway: "Y16",    fir: "VHHK", coords: [18.397, 112.147] },
      { name: "KAPLI", airway: "Y16",    fir: "RCAA", coords: [21.100, 117.300] },
      { name: "IGURU", airway: "Y16",    fir: "RJJJ", coords: [23.570, 124.000] },
      { name: "RJAA",  airway: "DCT",    coords: [35.765, 140.385] },
    ]
  },

  // ── BKK ↔ KIX ────────────────────────────────────────────────────
  "VTBS-RJBB": {
    label: "BKK→KIX",
    color: "#F7DC6F",
    ofpSource: "JAL728 2026-05-05",
    waypoints: [
      { name: "VTBS",  airway: "DCT",    coords: [13.690, 100.750] },
      { name: "BUTRA", airway: "Y16",    fir: "VLVT", coords: [15.251, 105.358] },
      { name: "BUNTA", airway: "Y16",    fir: "ZJSA", coords: [16.500, 109.237] },
      { name: "IKELA", airway: "Y16",    fir: "VHHK", coords: [18.397, 112.147] },
      { name: "KAPLI", airway: "Y16",    fir: "RCAA", coords: [21.100, 117.300] },
      { name: "IGURU", airway: "Y16",    fir: "RJJJ", coords: [23.570, 124.000] },
      { name: "RJBB",  airway: "DCT",    coords: [34.427, 135.244] },
    ]
  },

  "RJBB-VTBS": {
    label: "KIX→BKK",
    color: "#F7DC6F",
    ofpSource: "JAL727 2026-05-04",
    waypoints: [
      { name: "RJBB",  airway: "DCT",    coords: [34.427, 135.244] },
      { name: "IGURU", airway: "Y17",    fir: "RCAA", coords: [23.570, 124.000] },
      { name: "KAPLI", airway: "Y17",    fir: "VHHK", coords: [21.100, 117.300] },
      { name: "IKELA", airway: "Y17",    fir: "ZJSA", coords: [18.397, 112.147] },
      { name: "BUNTA", airway: "Y17",    fir: "VVHM", coords: [16.500, 109.237] },
      { name: "FIRWPT",airway: "Y17",    fir: "VLVT", coords: [15.468, 107.138] },
      { name: "BUTRA", airway: "Y17",    fir: "VTBB", coords: [15.251, 105.358] },
      { name: "VTBS",  airway: "DCT",    coords: [13.690, 100.750] },
    ]
  },

  // ── YVR ↔ NRT ────────────────────────────────────────────────────
  "CYVR-RJAA": {
    label: "YVR→NRT",
    color: "#5DADE2",
    ofpSource: "JAL17 2026-05-05",
    waypoints: [
      { name: "CYVR",  airway: "DCT",    coords: [49.194, -123.184] },
      { name: "KATCH", airway: "NOPAC",  fir: "PAZAU", coords: [54.000, -136.001] },
      { name: "FIRWPT",airway: "NOPAC",  fir: "PAZAO", coords: [53.580, 170.000] },
      { name: "NIPPI", airway: "NOPAC",  fir: "RJJJ",  coords: [49.426, 159.208] },
      { name: "RJAA",  airway: "DCT",    coords: [35.765, 140.385] },
    ]
  },

  "RJAA-CYVR": {
    label: "NRT→YVR",
    color: "#5DADE2",
    ofpSource: "JAL18 2026-05-05",
    waypoints: [
      { name: "RJAA",  airway: "DCT",    coords: [35.765, 140.385] },
      { name: "PASRO", airway: "NOPAC",  fir: "PAZAO", coords: [48.167, 160.409] },
      { name: "FIRWPT",airway: "NOPAC",  fir: "PAZAU", coords: [51.533, 170.000] },
      { name: "KATCH", airway: "NOPAC",  fir: "CZVR",  coords: [54.000, -136.001] },
      { name: "CYVR",  airway: "DCT",    coords: [49.194, -123.184] },
    ]
  },

  // ── HNL ↔ KIX / NRT ──────────────────────────────────────────────
  "PHNL-RJBB": {
    label: "HNL→KIX",
    color: "#A569BD",
    ofpSource: "JAL799 2026-05-05",
    waypoints: [
      { name: "PHNL",  airway: "DCT",    coords: [21.318, -157.920] },
      { name: "BOOKE", airway: "BOOKE8", coords: [21.463, -158.450] },
      { name: "LIH",   airway: "BOOKE8", coords: [21.965, -159.338] },
      { name: "LI100", airway: "BOOKE8", coords: [23.358, -160.337] },
      { name: "LI123", airway: "BOOKE8", coords: [23.677, -160.568] },
      { name: "THOMA", airway: "DCT",    coords: [23.943, -160.763] },
      { name: "FIRWPT",airway: "DCT",    fir: "RJJJ",  coords: [29.061, 165.000] },
      { name: "RJBB",  airway: "DCT",    coords: [34.427, 135.244] },
    ]
  },

  "RJAA-PHNL": {
    label: "NRT→HNL",
    color: "#7D3C98",
    ofpSource: "JAL8782 2026-05-05",
    waypoints: [
      { name: "RJAA",  airway: "DCT",    coords: [35.765, 140.385] },
      { name: "GULBO", airway: "GULBO2", coords: [35.442, 141.753] },
      { name: "TASID", airway: "Y808",   coords: [35.435, 142.543] },
      { name: "NOLAX", airway: "Y808",   coords: [35.423, 143.333] },
      { name: "AVBET", airway: "Y814",   coords: [36.142, 145.467] },
      { name: "LEPKI", airway: "OTR11",  coords: [37.000, 150.000] },
      { name: "39E60", airway: "DCT",    coords: [39.000, 160.000] },
      { name: "FIRWPT",airway: "DCT",    fir: "KZAK",  coords: [39.107, 165.000] },
      { name: "39E70", airway: "DCT",    coords: [39.000, 170.000] },
      { name: "37E80", airway: "DCT",    coords: [37.000, 180.000] },
      { name: "32N70", airway: "DCT",    coords: [32.000, -170.000] },
      { name: "FIRWPT2",airway:"DCT",    fir: "PHZH",  coords: [25.335, -162.220] },
      { name: "THOMA", airway: "DCT",    coords: [23.943, -160.763] },
      { name: "LI123", airway: "BOOKE8", coords: [23.677, -160.568] },
      { name: "LI100", airway: "BOOKE8", coords: [23.358, -160.337] },
      { name: "LIH50", airway: "BOOKE8", coords: [22.662, -159.835] },
      { name: "LIH",   airway: "BOOKE8", coords: [21.965, -159.338] },
      { name: "BOOKE", airway: "BOOKE8", coords: [21.463, -158.450] },
      { name: "SELIC", airway: "BOOKE8", coords: [21.325, -158.220] },
      { name: "MAKOA", airway: "BOOKE8", coords: [21.325, -158.120] },
      { name: "FGTRE", airway: "BOOKE8", coords: [21.325, -158.063] },
      { name: "EWABE", airway: "BOOKE8", coords: [21.325, -158.048] },
      { name: "EXP",   airway: "BOOKE8", coords: [21.318, -157.928] },
      { name: "PHNL",  airway: "DCT",    coords: [21.318, -157.920] },
    ]
  },

};

// Export for use in map
if (typeof module !== "undefined") module.exports = { OFP_ROUTES };
