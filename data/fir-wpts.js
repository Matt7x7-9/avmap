// FIR境界ウェイポイント 恒久表示データ
// 2026-09-04 勉強メモより確定
// fir_from → fir_to の境界上にある確定WPT

const FIR_BOUNDARY_WPTS = [

  // ===== JAPAN FIR 境界 =====
  { name: "IGURU", airway: "Y52/Q13", coords: [23.950, 124.000], fir_from: "RJJJ", fir_to: "RCAA", note: "Japan→Taipei FIR (Y52系)" },
  { name: "IGMON", airway: "Y50",     coords: [27.622, 124.720], fir_from: "RJJJ", fir_to: "RCAA", note: "Japan→Taipei FIR (Y50系)" },
  { name: "LANAT", airway: "Y697",    coords: [36.373, 131.428], fir_from: "RJJJ", fir_to: "RKRR", note: "Japan→Incheon FIR" },
  { name: "SAPRA", airway: "Y16",     coords: [35.823, 130.723], fir_from: "RJJJ", fir_to: "RKRR", note: "Japan→Incheon FIR (別ルート)" },
  { name: "BUBDO", airway: "A590",    coords: [31.432, 136.653], fir_from: "RJJJ", fir_to: "RPHI", note: "Japan→Manila FIR (A590/BUBDO系)" },
  { name: "NIPPI", airway: "A591",    coords: [49.710, 159.347], fir_from: "RJJJ", fir_to: "KZAK", note: "Japan→Oakland Oceanic (PAZA内)" },

  // ===== TAIPEI FIR 境界 =====
  { name: "KAPLI", airway: "G86",     coords: [21.100, 117.300], fir_from: "RCAA", fir_to: "VHHK", note: "Taipei→HKG FIR (G86/J1/T1)" },
  { name: "KABAM", airway: "N892",    coords: [21.000, 119.880], fir_from: "RCAA", fir_to: "RPHI", note: "Taipei→Manila FIR (Phil.南回り分岐)" },
  { name: "AGAVO", airway: "A591",    coords: [37.167, 124.000], fir_from: "RKRR", fir_to: "RCAA", note: "Incheon→Taipei FIR" },

  // ===== HKG FIR 境界 =====
  { name: "IKELA", airway: "A1",      coords: [18.397, 112.147], fir_from: "VHHK", fir_to: "ZJSA", note: "HKG→Sanya FIR (A1)" },
  { name: "OSANU", airway: "M646",    coords: [7.690,  117.293], fir_from: "WBFC", fir_to: "RPHI", note: "Kota Kinabalu→Manila FIR (M646)" },

  // ===== SANYA FIR 境界 =====
  { name: "BUNTA", airway: "A1",      coords: [16.500, 109.237], fir_from: "ZJSA", fir_to: "VVHH", note: "Sanya→Hanoi FIR (A1)" },

  // ===== HANOI FIR 境界 =====
  { name: "PAPRA", airway: "A1",      coords: [15.767, 107.183], fir_from: "VVHH", fir_to: "VLVT", note: "Hanoi→Vientiane FIR (A1 BKK幹線)" },
  { name: "ASUKU", airway: "G221",    coords: [15.364, 109.147], fir_from: "VVHH", fir_to: "VVHM", note: "Hanoi→Ho Chi Minh FIR (G221 SGN幹線)" },

  // ===== VIENTIANE FIR 境界 =====
  { name: "BUTRA", airway: "A1",      coords: [15.418, 105.597], fir_from: "VLVT", fir_to: "VTBB", note: "Vientiane→Bangkok FIR (A1)" },
  { name: "OMURO", airway: "G474",    coords: [13.640, 103.600], fir_from: "VTBB", fir_to: "VDPP", note: "Bangkok→Phnom Penh FIR (G474/L880)" },

  // ===== HO CHI MINH FIR 境界 =====
  { name: "MESOX", airway: "N892",    coords: [13.980, 113.045], fir_from: "VVHM", fir_to: "RPHI", note: "Ho Chi Minh→Manila FIR (N892) ※E114付近" },
  { name: "ARESI", airway: "L625",    coords: [13.973, 114.450], fir_from: "RPHI", fir_to: "VVHM", note: "Manila→Ho Chi Minh FIR (L625)" },

  // ===== MANILA FIR 境界 =====
  { name: "GUTUP", airway: "L625",    coords: [4.987,  107.933], fir_from: "RPHI", fir_to: "WSJC", note: "Manila→Singapore FIR (L625)" },

  // ===== PACIFIC / その他 =====
  { name: "LINSO", airway: "A599",    coords: [23.375,  98.917], fir_from: "VLKM", fir_to: "VYYY", note: "Kunming→Yangon FIR (A599)" },
  { name: "TANEK", airway: "L301",    coords: [14.052,  98.972], fir_from: "VTBB", fir_to: "VYYY", note: "Bangkok→Yangon FIR (L301/M633)" },
  { name: "LULDA", airway: "P762",    coords: [12.397,  94.417], fir_from: "VYYY", fir_to: "VOMF", note: "Yangon→Chennai FIR (P762)" },

];
