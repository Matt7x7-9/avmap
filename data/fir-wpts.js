// FIR境界ウェイポイント 恒久表示データ
// 2026-09-04 勉強メモより確定
// fir_from → fir_to の境界上にある確定WPT

const FIR_BOUNDARY_WPTS = [

  // ===== JAPAN FIR 境界 =====
  { name: "IGURU", airway: "Y52/Q13", coords: [23.950, 124.000], fir_from: "RJJJ", fir_to: "RCAA", note: "Japan→Taipei FIR (Y52系)" },
  { name: "IGMON", airway: "Y50",     coords: [27.622, 124.720], fir_from: "RJJJ", fir_to: "RCAA", note: "Japan→Taipei FIR (Y50系)" },
  { name: "LANAT", airway: "Y697",    coords: [36.368, 131.419], fir_from: "RJJJ", fir_to: "RKRR", note: "Japan→Incheon FIR" },
  { name: "SAPRA", airway: "Y16",     coords: [34.020, 127.850], fir_from: "RJJJ", fir_to: "RKRR", note: "Japan→Incheon FIR (別ルート)" },
  { name: "BUBDO", airway: "A590",    coords: [26.070, 127.600], fir_from: "RJJJ", fir_to: "RPHI", note: "Japan→Manila FIR (A590/BUBDO系)" },
  { name: "NIPPI", airway: "A591",    coords: [34.167, 140.000], fir_from: "RJJJ", fir_to: "KZAK", note: "Japan→Oakland Oceanic (PAZA内)" },

  // ===== TAIPEI FIR 境界 =====
  { name: "KAPLI", airway: "G86",     coords: [21.167, 117.500], fir_from: "RCAA", fir_to: "VHHK", note: "Taipei→HKG FIR (G86/J1/T1)" },
  { name: "KABAM", airway: "N892",    coords: [21.000, 119.880], fir_from: "RCAA", fir_to: "RPHI", note: "Taipei→Manila FIR (Phil.南回り分岐)" },
  { name: "BULAN", airway: "A1",      coords: [27.092, 124.000], fir_from: "RCAA", fir_to: "VHHK", note: "Taipei→HKG FIR (A1/Y50系)" },
  { name: "AGAVO", airway: "A591",    coords: [29.780, 122.847], fir_from: "RKRR", fir_to: "RCAA", note: "Incheon→Taipei FIR" },

  // ===== HKG FIR 境界 =====
  { name: "IKELA", airway: "A1",      coords: [18.662, 112.245], fir_from: "VHHK", fir_to: "ZJSA", note: "HKG→Sanya FIR (A1)" },
  { name: "DOSUT", airway: "M771",    coords: [18.500, 111.500], fir_from: "VHHK", fir_to: "ZJSA", note: "HKG→Sanya FIR (M771)" },
  { name: "OSANU", airway: "M646",    coords: [7.690,  117.293], fir_from: "WBFC", fir_to: "RPHI", note: "Kota Kinabalu→Manila FIR (M646)" },

  // ===== SANYA FIR 境界 =====
  { name: "BUNTA", airway: "A1",      coords: [16.833, 109.395], fir_from: "ZJSA", fir_to: "VVHH", note: "Sanya→Hanoi FIR (A1)" },

  // ===== HANOI FIR 境界 =====
  { name: "PAPRA", airway: "A1",      coords: [15.767, 107.183], fir_from: "VVHH", fir_to: "VLVT", note: "Hanoi→Vientiane FIR (A1 BKK幹線)" },
  { name: "ASUKU", airway: "G221",    coords: [15.600, 107.500], fir_from: "VVHH", fir_to: "VVHM", note: "Hanoi→Ho Chi Minh FIR (G221 SGN幹線)" },
  { name: "TATIM", airway: "A1",      coords: [15.300, 107.000], fir_from: "VVHH", fir_to: "VVHM", note: "Hanoi→Ho Chi Minh FIR (A1)" },

  // ===== VIENTIANE FIR 境界 =====
  { name: "BUTRA", airway: "A1",      coords: [15.418, 105.597], fir_from: "VLVT", fir_to: "VTBB", note: "Vientiane→Bangkok FIR (A1)" },
  { name: "OMURO", airway: "G474",    coords: [13.640, 103.600], fir_from: "VTBB", fir_to: "VDPP", note: "Bangkok→Phnom Penh FIR (G474/L880)" },

  // ===== HO CHI MINH FIR 境界 =====
  { name: "MESOX", airway: "N892",    coords: [13.980, 113.045], fir_from: "VVHM", fir_to: "RPHI", note: "Ho Chi Minh→Manila FIR (N892) ※E114付近" },
  { name: "ARESI", airway: "L625",    coords: [13.973, 114.450], fir_from: "RPHI", fir_to: "VVHM", note: "Manila→Ho Chi Minh FIR (L625)" },

  // ===== MANILA FIR 境界 =====
  { name: "LAXOR", airway: "N884",    coords: [3.500,  110.000], fir_from: "RPHI", fir_to: "WSJC", note: "Manila→Singapore FIR (N884/M772)" },
  { name: "UPKET", airway: "M767",    coords: [5.000,  109.500], fir_from: "RPHI", fir_to: "WSJC", note: "Manila→Singapore FIR (M767)" },

  // ===== SINGAPORE/KL FIR 境界 =====
  { name: "RILRI", airway: "N884",    coords: [0.500,  105.000], fir_from: "WSJC", fir_to: "WIIF", note: "Singapore→Jakarta FIR (N884)" },
  { name: "GUTUP", airway: "L625",    coords: [4.987,  107.933], fir_from: "WSJC", fir_to: "WIIF", note: "Singapore→Jakarta FIR (L625)" },
  { name: "KIBOL", airway: "G334",    coords: [2.500,  104.500], fir_from: "WSJC", fir_to: "WMFC", note: "Singapore→Kuala Lumpur FIR (G334)" },

  // ===== PACIFIC (Oakland Oceanic) 境界 =====
  { name: "NIXEE", airway: "PACOTS",  coords: [36.000, -162.000+360], fir_from: "KZAK", fir_to: "PHZH", note: "Oakland→HCF (Honolulu) ※PACOTS変動あり" },
  { name: "LINSO", airway: "A599",    coords: [19.000,  96.000], fir_from: "VLKM", fir_to: "VYYY", note: "Kunming→Yangon FIR (A599)" },
  { name: "TANEK", airway: "L301",    coords: [17.500,  98.500], fir_from: "VTBB", fir_to: "VYYY", note: "Bangkok→Yangon FIR (L301/M633)" },
  { name: "LULDA", airway: "P762",    coords: [14.500,  95.500], fir_from: "VYYY", fir_to: "VOMF", note: "Yangon→Chennai FIR (P762)" },

];
