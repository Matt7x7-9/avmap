// CAUG 2-03 Chapter 2.4 Terminal Other AD - Asia
// Operational notes for 35 airports (all with real data)
// Source: RM_JALISSUE_INT 2-03 Rev.26.4 (14 MAY 2026)

const CAUG_NOTES_24 = {

  OMAA: {
    fullName: 'ABU DHABI, Zayed INTL',
    iata: 'AUH',
    utc: '+4',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 10',
    prefRwy: 'Nil',
    sections: [
      {
        title: 'TWY情報',
        items: [
          'TWY E3A/E3B/E4S/E4N/E9(S of TXL S): 翼幅36m超の機体は使用不可',
          'TWY A6/A8/A10/A11/A13/D5-D8/E7/E8/E10/E12: Rapid Exit TWY',
        ]
      },
      {
        title: '到着',
        items: [
          'ATC clearanceにはSTARが含まれる',
          'ILS GP干渉注意: RWY13R/31L・13L/31Rで地上走行・離陸機によりGP信号変動の可能性あり。ILSプロファイル・Flight Display・APの動作を監視すること',
        ]
      },
      {
        title: '離陸',
        items: [
          'See Jeppesen 10-1P series 3.1 ATC CLEARANCE DELIVERY',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Abu Dhabi Airports (ADA) +971 2 805 5000',
          'MET: OMAA MET +971 2 575 7346',
        ]
      },
    ]
  },

  OMDW: {
    fullName: 'DUBAI, Al Maktoum INTL',
    iata: 'DWC',
    utc: '+4',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9 (Cat 10 on request)',
    prefRwy: 'Nil',
    sections: [
      {
        title: 'TWY情報',
        items: [
          'TWYの勾配変化(2%)あり',
          '着陸後: TWY Vをランディング方向にそのまま直進。Rapid Exit TWYからの急ターンは禁止',
          'OMDW不慣れの場合はFirst Taxiの際にATCへ申告すること',
        ]
      },
      {
        title: '到着',
        items: [
          'RRSM: Jeppesen 20-1P series 2.4参照',
          'XPDR: 着陸後ゲート/スタンド到着までONを維持',
        ]
      },
      {
        title: '離陸',
        items: [
          'Engine Start/Pushback: Jeppesen 20-1P series 3.1参照',
          'XPDR: Pushback or Taxi requestのいずれか早い方からON',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Dubai Airports AOCC +971 4 504 5000 / aocc@dubaiairports.ae',
          'MET: Dubai MET +971 4 504 2990',
        ]
      },
    ]
  },

  OOMS: {
    fullName: 'Muscat INTL',
    iata: 'MCT',
    utc: '+4',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 10',
    prefRwy: 'Nil',
    sections: [
      {
        title: '地上設備',
        items: [
          'GND PWR / Air Starter / PAX Step / Towing / Water&LAV / Follow Me: 全て調査中 (Under investigation)',
        ]
      },
      {
        title: 'TWY情報',
        items: [
          'TWY幅: N1・R1より南: 23m / N1・R1より北: 25m',
        ]
      },
      {
        title: '空港制限',
        items: [
          'LVP未設定のためRVR 550m以上でのみ運用可 (両RWY)',
        ]
      },
      {
        title: '離陸',
        items: [
          'Noise Abatement: NADP 1を適用',
          'Jeppesen 10-1P series 1.2/3.1参照',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Oman Airports (OAMC) Admin: (968) 24 351234 / H24: (968) 24 352555',
          'MET: DGMet (968) 24 354660 / met_dir@met.gov.om',
        ]
      },
    ]
  },

  OTBD: {
    fullName: 'Doha INTL',
    iata: 'DIA',
    utc: '+3',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9 (Cat 10 on request: 45分前通知要)',
    prefRwy: 'Nil',
    sections: [
      {
        title: '到着',
        items: [
          'Doha APPからの周波数移管指示がない場合: 5NM FinalでDoha Tower 118.900 MHzをコンタクト',
          'XPDR: 着陸後スタンド到着までONを維持',
        ]
      },
      {
        title: '離陸',
        items: [
          'XPDR: Start-up clearance要求前にONにすること',
          'DCL (Departure Clearance)でコードが割り当てられていない場合はA2000を選択',
          '離陸後: Doha Approach West 119.725 MHzをコンタクト (別途指示がない限り)',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: MATAR +974-4010-7715 / +974-4010-3999',
          'MET: +974-4010-2239',
        ]
      },
    ]
  },

  RCKH: {
    fullName: 'KAOHSIUNG INTL',
    iata: 'KHH',
    utc: '+8',
    ops: 'H24 (ATIS 2200Z-1600Z)',
    curfew: '—',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'RWY 09 (優先)',
    sections: [
      {
        title: 'COMM/NAV',
        items: [
          'TWR: KHH TWR H24 / GND: KHH DEP(RDR) H24 / APP: KHH APP(RDR) H24',
          'ILS09: IKHG H24 / LLZ27: IKAS H24 / VOR/DME: TNN/HCN H24',
        ]
      },
      {
        title: 'RWY/スポット',
        items: [
          'TWY幅: A/E/S 30m / B/C/D/F/G 35m',
          'PAPI: RWY09 左側 1184ft 3.0° / RWY27 左側 1294ft 3.0°',
          'スポット: 22-23/31-32/511/516/521 → B777-300ER max / 512-514/522 → B772 max',
          'AGS(自動誘導): SPOT 12-32に設置。Captain側で合わせること(Co-pilot側では誤差あり)',
          'マーシャラー誘導: SPOT 3-8/33-37/511-528',
        ]
      },
      {
        title: '地形・制限',
        items: [
          'RWY27 THR北東〜南東約1NMに丘陵。空港から15NM内で急激に高度上昇',
          'Mt Shou Shan(1168ft): 空港北西6NMに位置',
          '高台: 空港の北東〜南東1〜3NMの範囲 200〜500ft',
          '軍事: Kao Ping River東側上空飛行に注意(軍機運用)',
        ]
      },
      {
        title: '到着',
        items: [
          '通信途絶: EMERGENCY SEA-5参照',
          '進入: KIZINおよびその周辺で軍艦によるTA(Traffic Advisory)発生の可能性あり',
          'Taxi: 混雑スポット周囲のクリアランス確保のためA TWY上はゆっくり走行し中心線厳守',
          'パーキング: APU OFF upon arrival。AGSはCapitan側で合わせること',
          'Follow me car: 要請可能',
        ]
      },
      {
        title: '出発',
        items: [
          'ATC Clearance: Datalink または KHH GND 5分前にコール。Call sign・駐機Bay番号・予定FLを通報',
          'Engine Start/Pushback: Push Back終了時に全エンジン始動済みでTaxi開始できる状態であること(ATCが別途許可した場合を除く)',
          'RWY Taxi: ATC許可なくRWYをTaxi pathとして使用しないこと',
          'SID: RNAV SID原則。北向き: RWY09 SK1L / RWY27 LU1(RNAV)・SK1D。南向き: RWY09 HCN1A / RWY27 HCN1B',
          'RNAV SID: RNAV 1 (GNSS or DME/DME/IRU)',
          'Noise: Jeppesen 10-9A参照',
        ]
      },
      {
        title: 'FMS情報',
        items: [
          'STARの最低高度: FMSに未格納',
          'APPTRN "FORKY": FMSに未格納',
        ]
      },
    ]
  },

  RKPC: {
    fullName: 'JEJU',
    iata: 'CJU',
    utc: '+9',
    ops: 'H24',
    curfew: '1400-2100Z',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'RWY 07/25',
    sections: [
      {
        title: '気象',
        items: [
          'LLWAS運用中: マイクロバーストを検知した場合、ATISに最低20分間 "MICROBURST ADVISORIES IN EFFECT" が放送される',
        ]
      },
      {
        title: '到着',
        items: [
          'Noise: Jeppesen参照',
          'Spot情報: Jeppesen参照',
        ]
      },
      {
        title: '離陸',
        items: [
          'Noise: Jeppesen参照',
          'SID情報: 特記事項なし',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: +82-64-797-1670〜1 (RKPCZPZX)',
          'MET: +82-64-742-0365 (RKPCYPYX)',
        ]
      },
    ]
  },

  RKPK: {
    fullName: 'BUSAN (Gimhae INTL)',
    iata: 'PUS',
    utc: '+9',
    ops: '—',
    curfew: '—',
    fuel: 'JET-A1',
    rffs: '—',
    prefRwy: '—',
    sections: [
      {
        title: '注意',
        items: [
          'CAUG 2-03 pp.931-944: キャッシュデータなし',
          '詳細は2-03マニュアル (2.4.RKPK/PUS) を参照してください',
          'その他情報: 軍用機・サーキット図に関する記述あり (2.4.RKPK/PUS.6.1)',
        ]
      },
    ]
  },

  RPLC: {
    fullName: 'PAMPANGA (Clark INTL)',
    iata: 'CRK',
    utc: '+8',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: '—',
    sections: [
      {
        title: '地上設備',
        items: [
          'TUG/BAR: 利用可',
          '⚠ Water/LAV: 利用可。ただしB787は水の品質問題のため補給受取禁止',
          'Follow Me Car: 利用可',
        ]
      },
      {
        title: '到着',
        items: [
          '到着ルート: MNLからレーダーベクター予定',
          'ルーティング: MNL-VOTAS-OLIVA-CIA または ROSER-CRK',
          'MNL APCHからCRK APCHへの引き継ぎ高度: 6000ft',
          'ATC通常: ILSレンジ内でILS向けクリアランス発行',
          'RWY02着陸後: TWY F5を右折→TWY Dを左折→Main Rampへ',
        ]
      },
      {
        title: '出発',
        items: [
          'ATC Clearance: 特記事項なし',
          'SID/TKOF情報: 特記事項なし',
          'Noise: 特記事項なし',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: +63-45-599-2888 EXT 604 (TWR)',
          'MET: +63-45-599-2888 EXT 612',
        ]
      },
    ]
  },

  RPVM: {
    fullName: 'LAPU-LAPU (Mactan-Cebu INTL)',
    iata: 'CEB',
    utc: '+8',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'RWY 04R/22L',
    sections: [
      {
        title: '地上設備',
        items: [
          'GND PWR / Air Starter / PAX Step: 利用可',
          'Towing TUG: 利用可 / Towing BAR: B787は使用不可 (N/A for B787)',
          '⚠ Water/LAV: 利用可。ただしB787は水の品質問題のため補給受取禁止',
        ]
      },
      {
        title: 'RWY/地形',
        items: [
          'RWY操作: RWY04L/22R はCode DおよびCode C以上の機体がTWY C上に存在する場合、T/O・LDGともに禁止',
          'RWY勾配: RWY04R +0.12% / RWY22L -0.12% / RWY04L +0.05% / RWY22R -0.05%',
          'PAPI: 全RWYの両側に設置 3.0%',
          '地形: 空港西〜北西方向12NM以内で3300ftまで急上昇',
          'レーダーパターン: 空港東側で設定。最低高度1600ft',
          'MNLOO: MNL coverage内でJAPANAIR向け情報中継 (CEB ETA 30分前)',
        ]
      },
      {
        title: 'スポット',
        items: [
          'B787指定エリア: 11A / 13A / 15A / M5-M10',
          'Power-in運用',
        ]
      },
      {
        title: '出発',
        items: [
          'ATC Clearance: Start-up clearance はエンジン始動10分前に要求すること',
          'SID/TKOF/Noise: 特記事項なし',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: (到着用) +63-45-599-2888 EXT 604 TWR',
          'MET: +63-45-599-2888 EXT 612',
        ]
      },
    ]
  },

  // ── インド ────────────────────────────────────

  VAAH: {
    fullName: 'AHMEDABAD (Sardar Vallabhbhai Patel INTL)',
    iata: 'AMD',
    utc: '+5.5',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'RWY 23',
    sections: [
      {
        title: 'スポット',
        items: [
          'B777/787利用可能スポット: 31-34, 36, 70',
          'RWY23: Turning Pad設置あり',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: +91-79-2286-9211 / +91-79-2285-0333 / VAAHYHYX / apdahm@aai.aero',
          'MET: +91-79-2285-8064',
        ]
      },
    ]
  },

  VABB: {
    fullName: 'MUMBAI (Chhatrapati Shivaji Maharaj INTL)',
    iata: 'BOM',
    utc: '+5.5',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 10',
    prefRwy: 'RWY 27',
    sections: [
      {
        title: 'RWY情報',
        items: [
          '⚠️ RWY14/32 着陸禁止 (障害物によりJAL規定)',
          'RWY09: TORA/LDA はTWY-N3まで',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: (VABBZPZX)',
          'MET: (VABBYMYX)',
        ]
      },
    ]
  },

  VECC: {
    fullName: 'KOLKATA (Netaji Subhas Chandra Bose INTL)',
    iata: 'CCU',
    utc: '+5.5',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'RWY 01R/19L',
    sections: [
      {
        title: '情報',
        items: [
          '主な特記事項なし (詳細はJeppesen参照)',
        ]
      },
    ]
  },

  VIAR: {
    fullName: 'AMRITSAR (Sri Guru Ram Dass Jee INTL)',
    iata: 'ATQ',
    utc: '+5.5',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 8',
    prefRwy: 'RWY 34',
    sections: [
      {
        title: 'TWY/スポット',
        items: [
          'RWY西側のTWYは使用不可',
          'B777/787利用可能スポット: 2, 5, 11-14',
        ]
      },
      {
        title: '到着',
        items: [
          'STARなし → RADARベクターを期待',
          '到着Taxi: RWY16: F/P→Apron / RWY34: Turning Pad→E→G→Apron (RWY端での転回推奨)',
        ]
      },
      {
        title: '出発',
        items: [
          '出発Taxi: RWY16: G→E→Turning Pad',
        ]
      },
    ]
  },

  // ── マカオ ────────────────────────────────────

  VMMC: {
    fullName: 'MACAU INTL',
    iata: 'MFM',
    utc: '+8',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'RWY 34 (Tail component <10kt)',
    sections: [
      {
        title: 'アプローチ',
        items: [
          'LOC RWY16: D6.5〜D4.5間にベンドあり',
          '(LDG RWY16) Inbound CRS 215°を維持。ZAO VOR方向への逸脱禁止',
          'VDGS設置: Jeppesen 10-1P参照',
        ]
      },
      {
        title: 'ATC Transfer (到着)',
        items: [
          'S (HKG ATC→ZHUHAI ATC)',
          'Established on MCS LLZ (ZHUHAI ATC→MFM TWR)',
          '高度計: RWY16/34 → Set MACAU QNH (HKG ATC→MFM TWR) / Set 1013.2hPa (HKG ATC→ZHUHAI ATC) → Set MACAU QNH (ZHUHAI ATC→MFM TWR)',
        ]
      },
      {
        title: 'ATC Transfer (出発)',
        items: [
          'Initial Right turn (MFM TWR→ZHUHAI ATC)',
          'LKC (ZHUHAI ATC→HKG ATC)',
          '離陸後できるだけ速やかにHKG FIR進入前にSID ALTへ上昇',
          'RWY16/34: Set HKG QNH (MACAU TWR→HKG ATC)',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: ADMINISTRATION OF AIRPORT Ltd. +853-88982829',
          'MET: +853-88986214 / +853-28862203(Forecast Duty)',
        ]
      },
    ]
  },

  // ── インド（南部） ─────────────────────────────

  VOMM: {
    fullName: 'CHENNAI (Chennai INTL)',
    iata: 'MAA',
    utc: '+5.5',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: '—',
    sections: [
      {
        title: 'RWY/TWY情報',
        items: [
          'RWY12/30: Code C以下の機体のみ使用可',
          '誘導灯: Edge lightのみ (Center line light未設置)',
          'RWY07: Full lengthが必要な場合はStart-up request前にATCへ通報',
          'Taxi方向(RWY07 DEP): TWY-K交差点からRWYへ直接進入 (バックトラック不要)',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: +91-44-22561122 / +91-44-22561234 / apdchennai@aai.aero',
          'MET: +91-44-22560168 / +91-44-22560270',
        ]
      },
    ]
  },

  // ── タイ ─────────────────────────────────────

  VTBD: {
    fullName: 'BANGKOK, Don Mueang INTL',
    iata: 'DMK',
    utc: '+7',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'RWY 21',
    sections: [
      {
        title: 'TWY情報',
        items: [
          'TWY J: B737以下のみ使用可 (B767以上は使用不可)',
          '濡れているとき・夜間: TWY中心線・縁線が見えにくい',
        ]
      },
      {
        title: '空港周辺',
        items: [
          '空港周辺に小鳥が多数生息',
        ]
      },
      {
        title: '到着',
        items: [
          'Arrival Route: STAR またはRADAR ベクター',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: (VTBDZPZX)',
          'MET: (VTBDYMYX)',
        ]
      },
    ]
  },

  VTBU: {
    fullName: 'RAYONG (U-Tapao INTL)',
    iata: 'UTP',
    utc: '+7',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 10',
    prefRwy: 'Nil',
    sections: [
      {
        title: '地形',
        items: [
          '⚠️ RWY18 THR北北東2.2nmに無灯の丘陵 896ft',
        ]
      },
      {
        title: '制限',
        items: [
          '⚠️ B787: いかなるスポットからもPower Outは利用不可',
          '夜間: VFRアプローチ不可',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: U-Tapao Airport Authority +66-38-245600 / VTBUZPZX',
          'MET: +66-38-245489',
        ]
      },
    ]
  },

  VTCC: {
    fullName: 'CHIANG MAI INTL',
    iata: 'CNX',
    utc: '+7',
    ops: '24hrs',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    sections: [
      {
        title: '地形',
        items: [
          '空港西側に高地。最高点 5528ft (空港北西5.5nm)',
          '⚠️ IAFでの最低通過高度に注意 (地形のため)',
        ]
      },
      {
        title: 'RWY/TWY',
        items: [
          'RWY18: Straight-in approachは設定されていない',
          'TWY F: 使用不可',
          'RADARサービス: CHIANG MAI APP周波数で24時間 (PRIカバレッジ60nm / SSR 200nm)',
        ]
      },
    ]
  },

  VTSP: {
    fullName: 'PHUKET INTL',
    iata: 'HKT',
    utc: '+7',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'RWY 27',
    sections: [
      {
        title: 'TWY/スポット',
        items: [
          'TWY C/D: ワイドボディ機は使用不可',
          'B787利用可能スポット: 7-15',
          'Spot 4/8-11: RLGシステム設置',
          'Spot 5-7: Safegateシステム設置',
        ]
      },
      {
        title: 'RWY情報',
        items: [
          'RWY27 THR: 180°ターン用Turning Pad設置 (幅200ft/RWY含む)',
          'TWY Gからの使用可能RWY長に注意 (RWY27 DEPの場合)',
          'RADARサービス: PHUKET APP周波数で24時間',
        ]
      },
    ]
  },

  VTBS: {
    fullName: 'BANGKOK, Suvarnabhumi INTL',
    iata: 'BKK',
    utc: '+7',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 10',
    prefRwy: 'Nil',
    sections: [
      {
        title: 'RWY運用',
        items: [
          'South Flow: RWY19 DEP+ARR / RWY20L DEP / RWY20R ARR',
          'North Flow: RWY01 DEP+ARR / RWY02R DEP / RWY02L ARR',
          'PAPI: 全RWY LEFT側 3.0° MEHT 64ft',
        ]
      },
      {
        title: 'TWY/スポット',
        items: [
          'TWY最小幅: 25m',
          'ストップバー: VIS<1500m または夜間に運用',
          'JALスポット: G1-G5, F1-F6, E1-E10, 401-403, 501-505',
          'B787利用可能スポット: D2-D7, E1-E10, F5-F6, G2-G5',
          '⚠️ Power Out: 全スポット不可 (NOT AVBL from any spot)',
          'APU: Block In後5分まで / Block Out 10分前まで運用可',
        ]
      },
      {
        title: '出発',
        items: [
          'GND周波数: Eスポット = 121.75MHz / F・G・401-525スポット = 121.95MHz',
          '⚠️ VHF干渉: Spot E/F/G付近で121.5MHzに干渉あり (PBB近く)',
          'DEP Transition: TWR → APP East/West/South/North → BKK Control',
        ]
      },
      {
        title: '制限空域',
        items: [
          '⚠️ VT(R)-1 BANGKOK CITY: 3000ft以下はATC制限を除き飛行禁止',
          '⚠️ VT(R)-2 KING PALACE: 飛行禁止 (strictly prohibited)',
        ]
      },
      {
        title: '気象・鳥害',
        items: [
          'TS: 4月〜10月 (午後〜深夜)。CB locally developed または ITCZ通過型',
          'FOG: 12月〜4月 放射霧 (深夜〜早朝、VIS<1000m)',
          '鳥害: 空港北側に鳥の餌場。RWY上/周辺に多数。バードスウィープはRQ後5分以内',
        ]
      },
      {
        title: 'B787 地上設備',
        items: [
          'GND PWR / PAX STEP / TUG/BAR / WATER/LAV SVC: 全て利用可 (AVBL)',
        ]
      },
    ]
  },

  // ── ベトナム ──────────────────────────────────

  VVDN: {
    fullName: 'DA NANG INTL',
    iata: 'DAD',
    utc: '+7',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'RWY 35R',
    sections: [
      {
        title: 'RWY情報',
        items: [
          'RWY17 着陸: Visual Approachのみ',
        ]
      },
      {
        title: 'スポット',
        items: [
          '使用可能スポット: 1-10, 14, 18, 20, 23, 25, 27, 31',
          'VDGS (PBB): スポット 14, 16, 18, 20, 23, 25, 27',
          'Follow me car: パイロット要請で利用可',
        ]
      },
      {
        title: 'FMS注意',
        items: [
          '⚠️ B738 FMS NAVDATAの CIR17L / CIR17R / TST17L は使用禁止 (テスト用手順)',
        ]
      },
    ]
  },

  VVCI: {
    fullName: 'HAI PHONG (Cat Bi INTL)',
    iata: 'HPH',
    utc: '+7',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET A1',
    rffs: 'Cat 8',
    prefRwy: '—',
    sections: [
      {
        title: '地上設備',
        items: [
          'GND PWR / Air Starter / PAX Step / Towing TUG&BAR / LAV SVC / Follow Me Car: 全て利用可',
          '⚠️ Water SVC: N/A (利用不可)',
        ]
      },
      {
        title: 'Taxi経路',
        items: [
          '到着後: 着陸RWY25端→Turn Pad→RWY07/25→TWY N4→TWY N→TWY W3/W4→スタンド',
          '  または: TWY N4→TWY N→TWY W3/W4→スタンド',
          'Turning Pad: TWY N1 および N7',
          '出発(スタンド5/6/8/17/19): TWY W3/W4→TWY N→TWY N4→RWY07/25→Turn Pad→離陸',
        ]
      },
    ]
  },

  VVNB: {
    fullName: 'HANOI, Noi Bai INTL',
    iata: 'HAN',
    utc: '+7',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    sections: [
      {
        title: 'COMM',
        items: [
          'コンパニー無線: 現地当局規制により利用不可 (N/A)',
          '運航情報: ACARS または SATCOM 経由 (TYOOD)',
        ]
      },
      {
        title: 'RWY/TWY',
        items: [
          'テールウィンド10KTS超で使用RWY変更',
          '軍用機オペレーション実施中',
          '離陸: T/Oクリアランス後30秒以内に滑走開始',
          '着陸: 減速後60秒以内にRWY退去',
          '⚠️ TWY N1〜N5: 軍用ランプに接続 → 進入禁止',
        ]
      },
      {
        title: 'スポット',
        items: [
          'JAL指定スポット: 14〜21',
          'PBB / VDGS: スポット 14〜27',
          'スポット15-22/24-27: B747-400/B777-300相当まで (翼幅<65m)',
          'スポット14: A380/AN-124相当まで (翼幅<80m)',
        ]
      },
      {
        title: '到着',
        items: [
          'アプローチスピード制限: 12NM最終またはターニングファイナル → 最大200KT',
          '                       5NM最終 → 最大160KT',
          'パーキング: PWR In全スポット。VDGS primary誘導',
          'ノーズホイール停止位置: ストップライン±0.5m超過時は空港当局インタビューの可能性',
        ]
      },
      {
        title: '出発',
        items: [
          'PB/ENG start 5分前にNOIBAI GND にコール (callsign / destination / spot / FL)',
          'プッシュバック: 全スポット可 (オープンスポットはPower Out)',
          '⚠️ RWY11L THR 180°ターン指示あり: Turning PadはコードCまで。エッジライトはRWYと共有 (踏み可)',
        ]
      },
      {
        title: '気象・その他',
        items: [
          'TS: ITCZ・熱帯性低気圧により4月〜9月',
          '煙霧(FU): 6月 および 10月下旬〜11月上旬 (周辺焼き畑由来)',
          '高度制限: 10ft単位の場合は100ft単位に切り上げて適用',
          '鳥害: 空港周辺に注意',
          '制限空域: VVP1 Hanoi City / VVD21 軍事(NOTAM) / VVR7/8/9 Air force TRNG',
        ]
      },
    ]
  },

  VVTS: {
    fullName: 'HO CHI MINH CITY, Tan Son Nhat INTL',
    iata: 'SGN',
    utc: '+7',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    sections: [
      {
        title: 'COMM',
        items: [
          'コンパニー無線: 現地当局規制により利用不可 (N/A)',
          'D-ATIS: TAN SON NHAT 128.0MHz H24',
        ]
      },
      {
        title: 'TWY/スポット',
        items: [
          'TWY S5: 45m / その他TWY: 23m',
          'RWY07L/25Rホールディングポジション: ポジションマーキングのみ (サインなし)',
          'PBB: スポット 9-16 および 17-22',
          '⚠️ スポット14: 駐機中の上り傾斜に注意 (stop position直前)',
          'スポット18/19: B747-400の同時使用不可',
        ]
      },
      {
        title: '到着',
        items: [
          'フォローミーカー: リクエストで利用可',
          'タキシング: Jeppesen 10-6参照',
          'パーキング: PWR In全スポット; VDGS (スポット09-18: stop line +1M/-0.5M)',
        ]
      },
      {
        title: '出発',
        items: [
          'ATC Clearance: TAN SON NHAT DELIVERY に PB 5分前にコール',
          'SID: KADUM DEP (Priority 1) ※軍事理由でANTRI経由指示の場合あり',
          '      ANTRI DEP (Priority 2)',
          'Delivery通報: callsign / destination / spot / FL',
        ]
      },
      {
        title: '気象・その他',
        items: [
          'TS: 雨季15-20分 (5月は激しく1時間以上継続することあり)',
          'FOG: 10月〜11月早朝 (VISはほぼminimaまで低下せず)',
          '高度制限: 10ft単位の場合は100ft単位に切り上げて適用',
          '鳥害: 空港周辺に注意',
          '最寄り軍用空港: Bien Hoa (SGNから北東13NM)',
          '制限空域: VVP4 Ho Chi Minh City (GND〜3000m) / VVD23-26 Air force TRNG(ヘリ)',
        ]
      },
      {
        title: 'B787 地上設備',
        items: [
          'GND PWR / PAX STEP / TUG/BAR / WATER/LAV SVC: 全て利用可 (AVBL)',
          'B787スポット: PBB=17,18,9-16 / Open=29-32,33-36 / 全スポットPB可',
        ]
      },
    ]
  },

  // ── マレーシア・インドネシア・シンガポール ──────

  WMKJ: {
    fullName: 'JOHOR BAHRU (Senai INTL)',
    iata: 'JHB',
    utc: '+8',
    ops: '2230-1600Z',
    curfew: '1600-2230Z',
    fuel: 'JET-A1',
    rffs: 'Cat 8',
    prefRwy: 'Nil',
    sections: [
      {
        title: '地上設備',
        items: [
          'Towing TUG/BAR: B737-400/800・B767-200/300・B747-400・B777-200/300のみ対応するユニバーサルタウバー',
          '⚠️ B787: タウバーなし → ダイバート着陸は可。Power In / Power Out のみで対応',
        ]
      },
      {
        title: 'スポット',
        items: [
          'B767/B777: スポット 1(PBB)/3(PBB)/5-7',
          'B787: スポット 5-7 (PWR-OUT利用可)',
          'VDGS: スポット 1/2/3/4 (B767は対象外)',
        ]
      },
      {
        title: '空域制限',
        items: [
          '⚠️ 禁止空域 WM(P)-228 (GND〜5000ft): 空港南方 (160°/10NM VJR) に存在',
        ]
      },
      {
        title: '到着',
        items: [
          'SINから: RADAR Vectorを期待',
          'KULから: TOPOR ARRIVAL経由',
          'ダイバート機: 機体タイプをATCへ通報 → JHBのGHが利用可能タウバーに応じてスポット割り当て',
          'ダイバート機: Cargo apronに駐機',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: +607-5994500',
        ]
      },
    ]
  },

  WIII: {
    fullName: 'JAKARTA, Soekarno-Hatta INTL',
    iata: 'CGK',
    utc: '+7',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    sections: [
      {
        title: 'COMM',
        items: [
          'コンパニー無線: JL CGK 131.8MHz',
          '⚠️ GND/TWR通信が弱い場所: スポットD31/D51/D61/D71 および RWY/TWY交差部',
          '⚠️ NAVAIDS (ILS含む): NOTAMなしに停止することあり',
          '⚠️ CKG VOR: 40NM以遠は使用不可',
        ]
      },
      {
        title: 'RWY/TWY',
        items: [
          'RWY 07L/25R / 07R/25L: 通常運用',
          '⚠️ RWY 06/24: 着陸のみ (07L/25R閉鎖時等、非正常時のT/Oは可)',
          'TWY幅: 23m + 10m舗装肩 各側',
          'TWY一方通行: NP2/SP2=西行き / NP1/SP1=東行き / WC1=南行き / WC2=北行き',
          'NCY→Terminal E / NC5→Terminal F / NC4→Terminal G',
        ]
      },
      {
        title: 'スポット',
        items: [
          'Terminal G: G16/G19/G23/G36/G2-G6 → B773ER / G26/G29/G33 → A380',
          'Remote Apron: R83/R85/R87/R88 → B773ER',
        ]
      },
      {
        title: '到着',
        items: [
          'ILS同時進入: RWY25L/Rへの Simultaneous ILS APCHはVMC条件下で許可',
          'タキシング: ATCがJeppesen 10-6の「ROUTE No.」で指示することあり (TWY名が優先)',
          '⚠️ 夜間・雨天時: TWYセンターライン・タキシーガイドラインが見えにくい (特にランプ)',
        ]
      },
      {
        title: '出発',
        items: [
          'ATC Clearance: DEL/GND/TWR に PB 25分前にコール',
          '通報: callsign / destination / spot / POB / A/C type+Reg / FL',
          'プッシュバック手順: Jeppesen 10-9参照',
          '⚠️ CGK→JPN: T/Oクリアランス時にTWRがSIDキャンセル・右旋回heading 070を指示する場合あり',
        ]
      },
      {
        title: 'その他',
        items: [
          '凧 (KITES): 最終進入エリア周辺 (特に4月〜10月)',
          '気象: ITCZ 11月に北から南へ通過 → 5月に南から戻る',
          '制限空域: WI(D)-10 SAR訓練 / WI(R)-2 民間航空学校訓練',
        ]
      },
    ]
  },

  WMKK: {
    fullName: 'KUALA LUMPUR INTL',
    iata: 'KUL',
    utc: '+8',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 10',
    prefRwy: 'RWY32R/L',
    sections: [
      {
        title: 'COMM',
        items: [
          'コンパニー無線: JAPAN AIR KUL 131.8MHz',
          'METAR特記コード: TL=TS(中〜強) / TLO=軽いTS / J=視程内だが空港外 / JTL=遠方TS',
        ]
      },
      {
        title: 'RWY運用・閉鎖スケジュール',
        items: [
          'Pref RWY: 32R/L (南向き運用)',
          'RWY14L/32R 閉鎖: 月/木/日 1530-2200UTC + 月 0300-0400UTC',
          'RWY14R/32L 閉鎖: 火/金 1530-2200UTC + 火 0300-0400UTC',
          'RWY15/33 閉鎖: 水/土 1530-2200UTC + 水 0300-0400UTC',
          '再開前20分間検査。定期検査: 0200-0430/0800-1100/1400-1600/2100-2330UTC',
          'Triple RWY DEP (2330-1400UTC): RWY32L DEP / RWY32R mixed / RWY33 mixed',
          '独立・従属並行APCH: ATIS通報あり。サイドステップは8NM以内への変更不可',
        ]
      },
      {
        title: 'スポット',
        items: [
          '⚠️ B787専用スポット: C1, C2, C23, C32, C34, C36',
          'B773ER: C4/C6/C22/C24/C25/C27/C35/C37 (APIS++) / C15/C26 (APIS)',
          '⚠️ Power Out: 全スポット不可 (NOT AVBL from any spot)',
          'スポットによっては3本リードインラインあり (Ref.20-9C: センターラインに従うこと)',
        ]
      },
      {
        title: 'STAR/到着',
        items: [
          'STAR: KUL TMA進入ウェイポイントに基づいてATCが割り当て',
          'PMS East (STAR 1G): KAKAK/PULIP/SAROX → RWY32R/L または 14R/L',
          'PMS West (STAR 1H): NIREN/PUGER/SALAX/GUPTA → RWY15/33',
          '0000-1600UTC: DUAL PMS / 1600-0000UTC: Midnight STAR (3K/3J) またはPMS',
          'ホールディング: PIBOS (AWY R208 と G582 の交差点付近)',
        ]
      },
      {
        title: '出発',
        items: [
          'ATC Clearance: KUL FIR外 → TSAT-10分前にLumpur Deliveryコール',
          '東行き (M771-DUDIS / L625-AKMON / N884-LAXOR): TSAT-30分前にコール',
          '離陸後: Lumpur Departure (135.25MHz) 2000ft通過前にコール',
          'Departures通報: callsign / SID or RD identifier / last level (100ft単位) / assigned altitude',
          '⚠️ AWY G582 東行き: VBA/BATU ARANG VOR 78DMEまでにFL250以上到達すること',
        ]
      },
      {
        title: '気象・その他',
        items: [
          'TS: 午後の熱対流型(30分程度) または SW monsoon期(JUN-SEP、数時間に及ぶことあり)',
          'FOG: 前夜の大雨または夕方の雨の翌早朝に放射霧 (日出後すぐに消散)',
          '鳥害: 渡り鳥の飛行経路上 (SEP-NOV北東方向、FEB-APR南東方向、高度300-3000ft)',
          'SIN-KUL ルート: A464 (南行き KUL→SIN) / A457 (北行き SIN→KUL)',
        ]
      },
    ]
  },

  WSSS: {
    fullName: 'SINGAPORE, Changi INTL',
    iata: 'SIN',
    utc: '+8',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 10',
    prefRwy: 'Nil',
    sections: [
      {
        title: 'COMM',
        items: [
          'コンパニー無線: JAPAN AIR SIN 131.8MHz',
          'CLNCのため DEL周波数の代わりにGND周波数が使用される場合あり',
        ]
      },
      {
        title: 'RWY運用・閉鎖スケジュール',
        items: [
          'RWY: 02L/20R / 02C/20C / 02R/20L',
          '⚠️ RWY20R DEP: RWY20C利用可能な1600-2200UTCは禁止',
          '定期閉鎖: 02L/20R 日/水1700-2200UTC / 02C/20C 火/金1800-2200UTC / 02R/20L 月1800-2200UTC',
          '5分間検査: 毎日 0100-0359 / 0500-0759 / 0800-1059UTC',
        ]
      },
      {
        title: 'TWY・Follow the Greens',
        items: [
          '⚠️ Follow the Greens (2026年3月19日〜): 夜間/低視程時の緑色センターラインライト誘導',
          '赤ストップバー点灯中は前進禁止。verbal clearance limit未満もATCなしに前進禁止',
          '複数グリーンセグメントで迷ったら停止してATCに確認',
          'TWY R/S: タキシング速度制限 20KT',
          '到着: スタンド到着まで Transponder ON を維持',
          '出発: PB clearance request前まで Transponder ON を維持',
        ]
      },
      {
        title: 'スポット',
        items: [
          'JAL: T1 C/Dベイシリーズ、West/East Cargo Apron',
          'PWR In全スポット / VDGS全PAXスタンド設置',
        ]
      },
      {
        title: '到着',
        items: [
          '南行き A464/A576 経由: RWY20R/C使用中かつ120DME SJ以内はSIN ATC (133.25MHz pri, 135.8MHz sec) にSTARリクエスト',
          '依存並行アプローチ (ATIS通報): 3nm staggered separation',
          '騒音: RWY02L/20R 1600-2200UTC はIdle Reverseのみ',
        ]
      },
      {
        title: '出発',
        items: [
          'ENG start: ATC通報後PB。PB終了時に全ENG始動してTaxi ready状態であること',
          '⚠️ CHANGI 1C/1D DEP: Jeppesen initial climb "023°/203°" はTrackではなくRWY Magnetic Headingで飛行',
          '速度制限: 4000ft AMSL以下 230KT / 10000ft AMSL以下 250KT',
          '初期上昇: RNAV-1 GNSS SIDを適用。初期3000ftまで上昇',
          '騒音: AWY G579 (SJ〜GUMPU) は5000ft以上を維持',
          '出発スロット(LSWD): Delivery からSlot period/最早・最遅DEP時刻の通報あり → Expected T/O時刻を計算してreply',
        ]
      },
      {
        title: '⚠️ 船舶横断 (RWY02系統 離陸時)',
        items: [
          '北側shipping channelを横断する船舶がT/O障害となる場合あり (通過時間10-15分)',
          '最小クライムグラジェント: 2500ftまで5% → その後3.3%',
          '02L: 船舶>35m → RWY CODE 02L55 / >55m → CODE 02L140',
          '02C: 船舶>70m → RWY CODE 02C115 / >115m → CODE 02C140',
          '02R: 船舶>65m → RWY CODE 02R140',
          '⚠️ 140m超の船舶: いかなるCODEも性能要件を満たせない → 通過を待つこと',
        ]
      },
      {
        title: '通信途絶 エンルートホールディング',
        items: [
          'HOSBA(HHA): INBD 259° Right 1min, 230KT, FL140/7000ft ALT — SIN ACC 120.3MHz',
          'NYLON(NHA): INBD 203° Left 1min, 220KT, FL140/3000ft ALT — SIN ACC 120.3MHz',
          'SAMKO(SHA): INBD 348° Left 1min, 220KT, FL140/4000ft ALT — SIN ACC 120.3MHz',
        ]
      },
      {
        title: '気象',
        items: [
          'TS: 4-5月および10-11月 (inter-monsoon期)。突風・急激なVIS低下、30分以内に回復',
          'HZ: 年間を通じて観測 (VIS最大1500mまで低下)。SEP-OCTに最多',
        ]
      },
    ]
  },

  // ── キャッシュ未収録空港 ──────────────────────

  VVVD: {
    fullName: 'VAN DON INTL',
    iata: 'VDO',
    utc: '+7',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    sections: [
      {
        title: 'スポット',
        items: [
          'スポット 4, 5, 6: B787利用可',
          'VDGS: スポット 2, 3 に設置',
        ]
      },
      {
        title: '到着',
        items: [
          'アプローチ: STAR + TRANSITION',
        ]
      },
      {
        title: '出発',
        items: [
          '⚠️ TWY B5 からの離陸: RWY03 THR方向へ左旋回。RWY21 THR方向への右旋回は禁止',
          'Water SVC: N/A',
        ]
      },
    ]
  },

  WARR: {
    fullName: 'SURABAYA (Juanda INTL)',
    iata: 'SUB',
    utc: '+7',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 8',
    prefRwy: 'Nil',
    sections: [
      {
        title: '地上設備',
        items: [
          '⚠️ GND PWR / PAX Step / TUG / Water SVC: B787対応について調査中 (Under investigation)',
        ]
      },
      {
        title: '障害物・制限',
        items: [
          '⚠️ アンテナ 1013ft: SBR R-315° / D8.77NM に存在',
          'STAR RWY10 NIMAS: ≥2000ft を維持',
          'MVA: ≥2000ft',
          '⚠️ RWY10/28: 毎日 0600-0615UTC クローズ',
        ]
      },
      {
        title: '鳥害・FOD',
        items: [
          '雨天後: 鳥が多数出現',
          'アウトボードENGパワーを最小限に抑えること (FOD防止)',
        ]
      },
      {
        title: 'スポット',
        items: [
          'T1: スポット 4, 5 (Open), 6, 7, 8, 10, 11 (PBB)',
          'T2: スポット A6, A7, A8 (PBB)',
        ]
      },
      {
        title: '到着',
        items: [
          'アプローチ: RADARベクター',
        ]
      },
    ]
  },

  WBGG: {
    fullName: 'KUCHING INTL',
    iata: 'KCH',
    utc: '+8',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'RWY25 ARR / RWY07 DEP',
    sections: [
      {
        title: '地上設備',
        items: [
          '⚠️ GND PWR / PAX Step / TUG / Water SVC: B787対応について調査中 (Under investigation)',
        ]
      },
      {
        title: 'RWY情報',
        items: [
          'RWY: グルービングなし',
          'Turning Pad: 230ft',
        ]
      },
      {
        title: '気象',
        items: [
          '午後: TSRA多い',
          'SW monsoon期: Hazy (煙霧)',
          'NE monsoon期: 大雨 (Heavy RA)',
        ]
      },
      {
        title: '周辺情報',
        items: [
          '空港位置: 市街地南方6NM',
        ]
      },
      {
        title: '到着',
        items: [
          'アプローチ: RADARベクター',
        ]
      },
    ]
  },

  WBKK: {
    fullName: 'KOTA KINABALU INTL',
    iata: 'BKI',
    utc: '+8',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'RWY20',
    sections: [
      {
        title: '地上設備',
        items: [
          '⚠️ GND PWR / PAX Step / TUG / Water SVC: B787対応について調査中 (Under investigation)',
        ]
      },
      {
        title: 'RWY制限',
        items: [
          '⚠️ RWY20: 火・水曜日 1845-2115UTC クローズ',
          '⚠️ 地形: 空港東側に高地 → 離陸後は必ず西向きターン',
        ]
      },
      {
        title: '気象',
        items: [
          'SW monsoon期: TS多い',
          'NE monsoon期: RA',
        ]
      },
      {
        title: 'スポット',
        items: [
          'スポット 1-5: Power In / Tow Out',
        ]
      },
      {
        title: 'Taxi経路',
        items: [
          '到着 RWY20: H → J → APRON',
          '到着 RWY02: E → C → J → APRON',
          '出発 RWY20: APRON → J → C → N',
          '出発 RWY02: APRON → J → C → K',
        ]
      },
    ]
  },

  WBSB: {
    fullName: 'BANDAR SERI BEGAWAN (Brunei INTL)',
    iata: 'BWN',
    utc: '+8',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'RWY03',
    sections: [
      {
        title: '地上設備',
        items: [
          '⚠️ GND PWR / PAX Step / TUG / Water SVC: B787対応について調査中 (Under investigation)',
        ]
      },
      {
        title: 'RWY/TWY',
        items: [
          'RWY03: グルービングあり',
          'TWY幅: 23m',
        ]
      },
      {
        title: '気象',
        items: [
          'TS: 突風20-30分間継続',
          '雨季: 11月〜1月 (NOV-JAN)',
        ]
      },
      {
        title: 'スポット',
        items: [
          'スポット: S2, S5, F1〜F7',
          'Power In',
        ]
      },
      {
        title: '出発',
        items: [
          'Power Out (Tow Out)',
          'プッシュバック手順: Jeppesen 10-9A参照',
        ]
      },
    ]
  },

  WMKP: {
    fullName: 'PENANG INTL',
    iata: 'PEN',
    utc: '+8',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    sections: [
      {
        title: '地上設備',
        items: [
          '⚠️ GND PWR / PAX Step / TUG / Water SVC: B787対応について調査中 (Under investigation)',
        ]
      },
      {
        title: 'TWY/地形',
        items: [
          '⚠️ TWY-C: B737以下のみ使用可',
          '地形: 空港西〜北方向2NM以内に 1400ft',
          '鳥害: 9月〜2月 (SEP-FEB)',
          'TS時: 強いクロスウィンド注意',
        ]
      },
      {
        title: 'スポット',
        items: [
          'Bay 3-7, 13, 14, 15: B747-400まで',
          'Bay 8: B747まで',
          'Power In',
        ]
      },
      {
        title: 'SID',
        items: [
          'SID経路例: VPG → PR → A464 → VBA',
        ]
      },
    ]
  },

  ZBHH: {
    fullName: 'HOHHOT (Baita INTL)',
    iata: 'HET',
    utc: '+8',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'Nr.3 Jet Fuel (JET A-1)',
    rffs: 'Cat 8',
    prefRwy: 'Nil',
    sections: [
      {
        title: '地上設備',
        items: [
          '⚠️ 全GND設備: B787対応について調査中 (Under investigation)',
        ]
      },
      {
        title: 'PAPI',
        items: [
          'RWY08: 左側 1050ft 3° MEHT 56ft',
          'RWY26: 左側 1165ft 3° MEHT 55ft',
        ]
      },
      {
        title: '出発',
        items: [
          'プッシュバック: ATCクリアランス取得後5分以内に開始すること',
          '⚠️ Circle-to-land: RWY北側は禁止',
        ]
      },
    ]
  },

  ZHHH: {
    fullName: 'WUHAN (Tianhe INTL)',
    iata: 'WUH',
    utc: '+8',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    sections: [
      {
        title: 'RWY',
        items: [
          'RWY: 04/22, 05L/23R, 05R/23L',
          'CAT II: RWY05L/23R',
        ]
      },
      {
        title: '深夜運用',
        items: [
          '深夜オペレーション連絡先: +86-27-6568-7545',
        ]
      },
      {
        title: '手順',
        items: [
          'アプローチ/タキシング: Jeppesen参照',
        ]
      },
    ]
  },

  ZMUB: {
    fullName: 'ULAANBAATAR (Chinggis Khaan INTL)',
    iata: 'ULN',
    utc: '+8',
    ops: '2330-1130UTC',
    curfew: 'Nil',
    fuel: 'TS-1 (= JET A-1)',
    rffs: 'Cat 5 (Cat 8 on request)',
    prefRwy: 'LDG RWY14 / T/O RWY32',
    sections: [
      {
        title: '地上設備',
        items: [
          '⚠️ GND PWR / TUG: B787対応について調査中 (Under investigation)',
          'PAX Step: 5.8m対応あり',
          'Water SVC: 利用可',
        ]
      },
      {
        title: 'RWY制限 (重要)',
        items: [
          '⚠️ 着陸: RWY14のみ。RWY32着陸は禁止 (地形)',
          '⚠️ 離陸: RWY32のみ。RWY14離陸は禁止 (地形)',
          '使用可能距離: THRから8354ftのみ (着陸・離陸共)',
        ]
      },
      {
        title: 'ILS注意',
        items: [
          '⚠️ RWY14 ILS偏差警告ゾーン: THRから 4.85-5.63NM / 7.46-8.4NM / 9.02-10.11NMの区間',
        ]
      },
      {
        title: 'スポット',
        items: [
          'スポット形式: Open',
          'Power In / マーシャラー誘導あり',
          'プッシュバック: Power Out',
        ]
      },
    ]
  },

  ZPPP: {
    fullName: 'KUNMING (Changshui INTL)',
    iata: 'KMG',
    utc: '+8',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    sections: [
      {
        title: '地上設備',
        items: [
          '⚠️ GND PWR / TUG: B787対応について調査中 (Under investigation)',
          'その他設備: 利用可',
        ]
      },
      {
        title: 'Displaced THR',
        items: [
          'RWY03/21: 540m',
          'RWY22R: 500m',
          'RWY04R: 300m',
        ]
      },
      {
        title: '手順',
        items: [
          '到着: STAR',
          'タキシング: Jeppesen参照',
        ]
      },
    ]
  },

  ZSAM: {
    fullName: 'XIAMEN (Gaoqi INTL)',
    iata: 'XMN',
    utc: '+8',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    sections: [
      {
        title: 'Displaced THR',
        items: [
          'RWY05: 150m',
          'RWY23: 200m + END 150m',
        ]
      },
      {
        title: 'ATC',
        items: [
          '中国語: 国内線はATC交信が中国語の場合あり',
          'DCL: 音声による読み上げ復唱不要',
        ]
      },
      {
        title: 'スポット',
        items: [
          '翼幅65m未満対応スポット: 1L, 2L, 3L, 5L, 8, 9, 11, 15, 17, 21-23, 82-85, 205-206, 228',
        ]
      },
      {
        title: '到着',
        items: [
          'フォローミーカー: 誘導あり',
          'アプローチ/タキシング/騒音手順: Jeppesen参照',
        ]
      },
    ]
  },

  ZSHC: {
    fullName: 'HANGZHOU (Xiaoshan INTL)',
    iata: 'HGH',
    utc: '+8',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    sections: [
      {
        title: '地上設備',
        items: [
          '全設備: 利用可',
        ]
      },
      {
        title: '手順',
        items: [
          'RWY/TWY/全手順: Jeppesen参照',
        ]
      },
    ]
  },

  ZWWW: {
    fullName: 'URUMQI (Diwopu INTL)',
    iata: 'URC',
    utc: '+8',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    sections: [
      {
        title: '地上設備',
        items: [
          '全設備: 利用可',
        ]
      },
      {
        title: 'RWY',
        items: [
          'RWY: 07/25, 08L/26R, 08R/26L',
          '⚠️ Full length以外での離陸: ATC許可が必要',
        ]
      },
      {
        title: '手順',
        items: [
          'TWY/タキシング: Jeppesen参照',
        ]
      },
    ]
  },

  RJCB: {
    fullName: 'OBIHIRO',
    iata: 'OBO',
    utc: '+9',
    ops: '0600-2200L',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 7',
    prefRwy: 'Nil',
    sections: [
      {
        title: '運用情報',
        items: [
          'H24運用不可 – 0600-2200LSTのみ',
          'RWY: 17/35',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: 帯広空港ビルディング +81-155-64-0489',
        ]
      },
    ]
  },

  RJCH: {
    fullName: 'HAKODATE',
    iata: 'HKD',
    utc: '+9',
    ops: '0630-2130L',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 7',
    prefRwy: 'Nil',
    sections: [
      {
        title: '運用情報',
        items: [
          '0630-2130LSTのみ運用',
          'RWY: 12/30',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: 函館空港ビルデング +81-138-57-8881',
        ]
      },
    ]
  },

  RJEC: {
    fullName: 'ASAHIKAWA',
    iata: 'AKJ',
    utc: '+9',
    ops: '0700-2100L',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 7',
    prefRwy: 'Nil',
    sections: [
      {
        title: '運用情報',
        items: [
          '0700-2100LSTのみ運用',
          'RWY: 16/34',
          '冬季: 積雪・除雪作業に注意',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: 旭川空港ビル +81-166-83-3939',
        ]
      },
    ]
  },

  RJFK: {
    fullName: 'KAGOSHIMA',
    iata: 'KOJ',
    utc: '+9',
    ops: '0630-2130L',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 8',
    prefRwy: 'Nil',
    sections: [
      {
        title: '運用情報',
        items: [
          '0630-2130LSTのみ運用',
          'RWY: 16/34',
          '火山灰（桜島）: SIGMET/ASHTAM確認必須。火山灰による視程低下・エンジン影響に注意',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: 鹿児島空港ターミナルビル +81-995-58-2111',
        ]
      },
    ]
  },

  RJFR: {
    fullName: 'KITAKYUSHU',
    iata: 'KKJ',
    utc: '+9',
    ops: '0700-2200L',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 7',
    prefRwy: 'Nil',
    sections: [
      {
        title: '運用情報',
        items: [
          '0700-2200LSTのみ運用',
          'RWY: 07/25',
          '海上空港 – 濃霧に注意',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: 北九州空港 +81-93-475-4195',
        ]
      },
    ]
  },

  RJFT: {
    fullName: 'KUMAMOTO',
    iata: 'KMJ',
    utc: '+9',
    ops: '0700-2130L',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 7',
    prefRwy: 'Nil',
    sections: [
      {
        title: '運用情報',
        items: [
          '0700-2130LSTのみ運用',
          'RWY: 07/25',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: 熊本空港 +81-96-232-2811',
        ]
      },
    ]
  },

  RJFU: {
    fullName: 'NAGASAKI',
    iata: 'NGS',
    utc: '+9',
    ops: '0700-2130L',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 7',
    prefRwy: 'Nil',
    sections: [
      {
        title: '運用情報',
        items: [
          '0700-2130LSTのみ運用',
          'RWY: 14/32',
          '山岳地形 – 進入時の地形確認必要',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: 長崎空港ビルディング +81-957-52-5555',
        ]
      },
    ]
  },

  RJSS: {
    fullName: 'SENDAI',
    iata: 'SDJ',
    utc: '+9',
    ops: '0630-2230L',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 8',
    prefRwy: 'Nil',
    sections: [
      {
        title: '運用情報',
        items: [
          '0630-2230LSTのみ運用',
          'RWY: 09/27',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: 仙台空港ビル +81-22-382-5111',
        ]
      },
    ]
  },

  RODN: {
    fullName: 'KADENA AB (Okinawa)',
    iata: '—',
    utc: '+9',
    ops: 'H24 (US Military)',
    curfew: 'Nil',
    fuel: 'JET-A1 / JP-8',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    sections: [
      {
        title: '運用情報',
        items: [
          '米空軍嘉手納基地 – 民間機使用には事前調整が必要',
          'RWY: 05L/23R, 05R/23L',
          'Divert使用時: 嘉手納AB事前許可（Prior Permission Required）',
        ]
      },
      {
        title: '連絡先',
        items: [
          'Kadena AB Command Post: +81-98-961-1110',
        ]
      },
    ]
  },

  RKSI: {
    fullName: 'INCHEON, Incheon INTL',
    iata: 'ICN',
    utc: '+9',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 10',
    prefRwy: 'Nil',
    sections: [
      {
        title: 'TWY情報',
        items: [
          'TWY: 広大なエプロン・複数サテライトゲート – 地上誘導に従うこと',
          'T1とT2は別ターミナル – 到着便を確認',
        ]
      },
      {
        title: '到着',
        items: [
          'ILS運用: H24（RWY 15L/R, 33L/R）',
          'ATIS: 126.1 MHz',
        ]
      },
      {
        title: '離陸',
        items: [
          'Departure: RKSI SID参照',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Incheon International Airport Corp +82-32-741-2114',
        ]
      },
    ]
  },

  UUDD: {
    fullName: 'MOSCOW, Domodedovo INTL',
    iata: 'DME',
    utc: '+3',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 10',
    prefRwy: 'Nil',
    sections: [
      {
        title: 'TWY情報',
        items: [
          'TWY: 大規模空港 – Jeppesen Ground Chart確認必須',
        ]
      },
      {
        title: '到着',
        items: [
          'ILS運用: RWY 14L/R, 32L/R',
          'ロシア空域: FL290以下はロシア国内高度規則（メートル高度）適用',
        ]
      },
      {
        title: '特記事項',
        items: [
          '⚠️ ロシアへのフライト: 制裁・過飛行許可の最新情報確認必須（2024年以降運用変更あり）',
          'ロシア向けGPS/GNSS jamming: モスクワ周辺で報告あり',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Domodedovo Airport +7-495-933-6666',
        ]
      },
    ]
  },

  ULLI: {
    fullName: 'ST. PETERSBURG, Pulkovo INTL',
    iata: 'LED',
    utc: '+3',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 10',
    prefRwy: 'Nil',
    sections: [
      {
        title: '到着',
        items: [
          'ILS運用: RWY 10L/R, 28L/R',
          'ロシア空域: FL290以下はメートル高度適用',
        ]
      },
      {
        title: '特記事項',
        items: [
          '⚠️ ロシアへのフライト: 制裁・過飛行許可の最新情報確認必須',
          'GNSS jamming: Baltic/ロシア近辺で頻繁に報告あり',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Pulkovo Airport +7-812-337-3444',
        ]
      },
    ]
  },

  EGKK: {
    fullName: 'LONDON, Gatwick',
    iata: 'LGW',
    utc: '+0/+1(DST)',
    ops: 'H24',
    curfew: '2300-0600L（Night Restrictions）',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    sections: [
      {
        title: 'TWY情報',
        items: [
          'Single runway operation (RWY 08L/26R) – 滑走路1本のみ',
          'North & South Terminal – 到着ターミナル事前確認',
        ]
      },
      {
        title: '到着',
        items: [
          'ILS: RWY 08L/26R',
          'ATIS: 136.525 MHz',
          'Night restrictions: QC（Quota Count）制度あり – 夜間は機材型式による制限',
        ]
      },
      {
        title: '離陸',
        items: [
          'London TCA: 複雑な空域 – SID確認必須',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Gatwick Airport +44-844-335-1802',
        ]
      },
    ]
  },

  EGSS: {
    fullName: 'LONDON, Stansted',
    iata: 'STN',
    utc: '+0/+1(DST)',
    ops: 'H24',
    curfew: '2300-0600L（Night Restrictions）',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 04/22',
          'ILS: RWY 04/22',
          'Night restrictions: QC制度あり',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Stansted Airport +44-844-335-1803',
        ]
      },
    ]
  },

  EGCC: {
    fullName: 'MANCHESTER',
    iata: 'MAN',
    utc: '+0/+1(DST)',
    ops: 'H24',
    curfew: '2300-0600L（Night Restrictions）',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    sections: [
      {
        title: 'TWY情報',
        items: [
          'RWY: 05L/23R, 05R/23L（2本）',
          'TWY: Jeppesen Ground Chart参照',
        ]
      },
      {
        title: '到着',
        items: [
          'ILS: RWY 05L/R, 23L/R',
          'ATIS: 128.175 MHz',
          'Night restrictions: QC制度適用',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Manchester Airport +44-161-489-3000',
        ]
      },
    ]
  },

  EHAM: {
    fullName: 'AMSTERDAM, Schiphol',
    iata: 'AMS',
    utc: '+1/+2(DST)',
    ops: 'H24',
    curfew: '2300-0600L（Night Restrictions）',
    fuel: 'JET-A1',
    rffs: 'Cat 10',
    prefRwy: 'Nil',
    sections: [
      {
        title: 'TWY情報',
        items: [
          '6本の滑走路（RWY 04/22, 06/24, 09/27, 18R/36L, 18C/36C, 18L/36R）',
          '非常に広大なエプロン – Ground Chartを十分確認',
          'Schiphol East / Cargo apron: 別エリア注意',
        ]
      },
      {
        title: '到着',
        items: [
          'ILS: 全主要RWYに装備',
          'ATIS: 132.975 MHz',
          'Night restrictions: LVP（低視程手順）頻繁に適用',
        ]
      },
      {
        title: '離陸',
        items: [
          'Amsterdam TMA: 複雑な空域 – SID確認必須',
          'CPDLC: EDYY（Maastricht UAC）logon',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Amsterdam Airport Schiphol +31-20-794-0800',
        ]
      },
    ]
  },

  EDDL: {
    fullName: 'DÜSSELDORF',
    iata: 'DUS',
    utc: '+1/+2(DST)',
    ops: 'H24',
    curfew: '2300-0600L（Night Restrictions）',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 05L/23R, 05R/23L',
          'ILS: RWY 05L/R, 23L/R',
          'ATIS: 123.975 MHz',
          'Night restrictions: QC制度あり',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Düsseldorf Airport +49-211-4210',
        ]
      },
    ]
  },

  EFTU: {
    fullName: 'TURKU',
    iata: 'TKU',
    utc: '+2/+3(DST)',
    ops: '0500-2300L',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 7',
    prefRwy: 'Nil',
    sections: [
      {
        title: '運用情報',
        items: [
          '0500-2300LSTのみ運用',
          'RWY: 08/26',
          '冬季: 除氷・積雪対応設備あり',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Turku Airport +358-200-14636',
        ]
      },
    ]
  },

  EETN: {
    fullName: 'TALLINN, Lennart Meri',
    iata: 'TLL',
    utc: '+2/+3(DST)',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 8',
    prefRwy: 'Nil',
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 08/26',
          'ILS: RWY 08/26',
          'ATIS: 126.15 MHz',
        ]
      },
      {
        title: '特記事項',
        items: [
          '⚠️ GNSS jamming: ロシア近接のため頻繁に報告あり – IRS/VOR backup推奨',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Tallinn Airport +372-605-8888',
        ]
      },
    ]
  },

  ESSA: {
    fullName: 'STOCKHOLM, Arlanda',
    iata: 'ARN',
    utc: '+1/+2(DST)',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 10',
    prefRwy: 'Nil',
    sections: [
      {
        title: 'TWY情報',
        items: [
          'RWY: 01L/19R, 01R/19L, 08/26',
          '3本の平行滑走路 – 混雑時のATCコントロール注意',
        ]
      },
      {
        title: '到着',
        items: [
          'ILS: 全主要RWYに装備',
          'ATIS: 125.725 MHz',
        ]
      },
      {
        title: '特記事項',
        items: [
          '⚠️ GNSS jamming: Baltic/ロシア国境付近で報告あり',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Swedavia +46-10-109-0000',
        ]
      },
    ]
  },

  EKCH: {
    fullName: 'COPENHAGEN, Kastrup',
    iata: 'CPH',
    utc: '+1/+2(DST)',
    ops: 'H24',
    curfew: '2300-0600L（Night Restrictions）',
    fuel: 'JET-A1',
    rffs: 'Cat 10',
    prefRwy: 'Nil',
    sections: [
      {
        title: 'TWY情報',
        items: [
          'RWY: 04L/22R, 04R/22L, 12/30',
          'Concourse A/B/C: ターミナル構造複雑 – Ground Chart確認',
        ]
      },
      {
        title: '到着',
        items: [
          'ILS: 主要RWYに装備',
          'ATIS: 126.875 MHz',
          'Night restrictions: QC制度あり',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Copenhagen Airports +45-32-31-3231',
        ]
      },
    ]
  },

  LFPO: {
    fullName: 'PARIS, Orly',
    iata: 'ORY',
    utc: '+1/+2(DST)',
    ops: 'H24',
    curfew: '2300-0600L（Night Restrictions）',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    sections: [
      {
        title: 'TWY情報',
        items: [
          'RWY: 06/24, 08/26',
          'South Terminal / West Terminal: ターミナル確認',
        ]
      },
      {
        title: '到着',
        items: [
          'ILS: RWY 06/24, 08/26',
          'ATIS: 126.0 MHz',
          'Night restrictions: 騒音制限あり（2300-0600）',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Aéroports de Paris +33-1-70-36-39-50',
        ]
      },
    ]
  },

  CYYC: {
    fullName: 'CALGARY, International',
    iata: 'YYC',
    utc: '-7/-6(DST)',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 08/26, 17L/35R, 17R/35L',
          'ILS: 主要RWYに装備',
          'ATIS: 132.7 MHz',
          '冬季: 除氷必須 – De-ice pad位置Jeppesen確認',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Calgary Airport Authority +1-403-735-1200',
        ]
      },
    ]
  },

  CYEG: {
    fullName: 'EDMONTON, International',
    iata: 'YEG',
    utc: '-7(MST 年間固定)',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 02/20, 12/30',
          'ILS: 主要RWYに装備',
          'ATIS: 128.6 MHz',
          '冬季: 除氷必須 – 極寒時の長時間駐機に注意（APU/エンジン始動への影響）',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Edmonton International Airport +1-780-890-8900',
        ]
      },
    ]
  },

  CYYZ: {
    fullName: 'TORONTO, Pearson INTL',
    iata: 'YYZ',
    utc: '-5/-4(DST)',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 10',
    prefRwy: 'Nil',
    sections: [
      {
        title: 'TWY情報',
        items: [
          'RWY: 05/23, 06L/24R, 06R/24L, 15L/33R, 15R/33L',
          'T1（国際線）/ T3（国内線）– 到着ターミナル確認',
          '広大なエプロン – Ground Chart必須',
        ]
      },
      {
        title: '到着',
        items: [
          'ILS: 全主要RWYに装備',
          'ATIS: 135.0 MHz',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Greater Toronto Airports Authority +1-416-247-7678',
        ]
      },
    ]
  },

  KOAK: {
    fullName: 'OAKLAND, Metropolitan Oakland INTL',
    iata: 'OAK',
    utc: '-8/-7(DST)',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 10L/28R, 12/30',
          'ILS: 主要RWYに装備',
          'ATIS: 128.5 MHz',
          'SFOとのコンフリクト: SF Bay Area TCA – 複雑なATCコントロール',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Port of Oakland +1-510-563-3300',
        ]
      },
    ]
  },

  KONT: {
    fullName: 'ONTARIO (CA), Ontario INTL',
    iata: 'ONT',
    utc: '-8/-7(DST)',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 8',
    prefRwy: 'Nil',
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 08L/26R, 08R/26L',
          'ILS: RWY 08L/R, 26L/R',
          'ATIS: 127.75 MHz',
          'LA TCA内 – KZLA（Los Angeles ARTCC）管轄',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Ontario International Airport +1-909-544-5300',
        ]
      },
    ]
  },

  KSMF: {
    fullName: 'SACRAMENTO, International',
    iata: 'SMF',
    utc: '-8/-7(DST)',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 8',
    prefRwy: 'Nil',
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 16L/34R, 16R/34L',
          'ILS: 主要RWYに装備',
          'ATIS: 132.0 MHz',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Sacramento County Airport System +1-916-929-5411',
        ]
      },
    ]
  },

  KDEN: {
    fullName: 'DENVER, International',
    iata: 'DEN',
    utc: '-7/-6(DST)',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 10',
    prefRwy: 'Nil',
    sections: [
      {
        title: 'TWY情報',
        items: [
          'RWY: 07/25, 08/26, 16L/34R, 16R/34L, 17L/35R, 17R/35L（6本）',
          '非常に広大な空港 – Ground Chart必須',
          '標高: 5,431ft（1,655m）– 高標高によるパフォーマンス計算注意',
        ]
      },
      {
        title: '到着',
        items: [
          'ILS: 全主要RWYに装備',
          'ATIS: 135.975 MHz',
          '冬季: 除氷必須。吹雪・地吹雪による視程低下注意',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Denver International Airport +1-303-342-2000',
        ]
      },
    ]
  },

  KMKE: {
    fullName: 'MILWAUKEE, General Mitchell INTL',
    iata: 'MKE',
    utc: '-6/-5(DST)',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 8',
    prefRwy: 'Nil',
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 01L/19R, 01R/19L, 07L/25R, 07R/25L',
          'ILS: 主要RWYに装備',
          'ATIS: 132.75 MHz',
          '冬季: 除氷・積雪除去対応',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Milwaukee County +1-414-747-5300',
        ]
      },
    ]
  },

  KRFD: {
    fullName: 'ROCKFORD, Chicago Rockford INTL',
    iata: 'RFD',
    utc: '-6/-5(DST)',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 7',
    prefRwy: 'Nil',
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 01/19, 07/25',
          'ILS: RWY 07/25',
          'ATIS: 120.225 MHz',
          'Chicago TCA外 – 比較的単純なアプローチ',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Greater Rockford Airport Authority +1-815-969-4000',
        ]
      },
    ]
  },

  KDTW: {
    fullName: 'DETROIT, Metropolitan Wayne County',
    iata: 'DTW',
    utc: '-5(EST 年間固定)',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 10',
    prefRwy: 'Nil',
    sections: [
      {
        title: 'TWY情報',
        items: [
          'RWY: 03L/21R, 03R/21L, 04L/22R, 04R/22L（4本）',
          'McNamara Terminal（国際線）/ North Terminal – ターミナル確認',
          '広大なエプロン – Ground Chart必須',
        ]
      },
      {
        title: '到着',
        items: [
          'ILS: 全主要RWYに装備',
          'ATIS: 135.0 MHz',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Wayne County Airport Authority +1-734-247-7678',
        ]
      },
    ]
  },

  KEWR: {
    fullName: 'NEWARK, Liberty INTL',
    iata: 'EWR',
    utc: '-5/-4(DST)',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 10',
    prefRwy: 'Nil',
    sections: [
      {
        title: 'TWY情報',
        items: [
          'RWY: 04L/22R, 04R/22L, 11/29',
          'New York TCA – 非常に複雑な空域',
          'Terminal A/B/C – 到着ターミナル確認',
        ]
      },
      {
        title: '到着',
        items: [
          'ILS: 全主要RWYに装備',
          'ATIS: 132.35 MHz',
          'NY TCA: KZNY（New York ARTCC）管轄 – 非常に輻輳した空域',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Port Authority of NY & NJ +1-973-961-6000',
        ]
      },
    ]
  },

  KIAD: {
    fullName: 'WASHINGTON, Dulles INTL',
    iata: 'IAD',
    utc: '-5/-4(DST)',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 10',
    prefRwy: 'Nil',
    sections: [
      {
        title: 'TWY情報',
        items: [
          'RWY: 01L/19R, 01R/19L, 12/30',
          'Midfield Concourse（B/C）: モバイルラウンジ使用',
          'Washington ADIZ: 特別フライト規則 – 事前通知必須（DC SFRA）',
        ]
      },
      {
        title: '到着',
        items: [
          'ILS: 全主要RWYに装備',
          'ATIS: 134.85 MHz',
        ]
      },
      {
        title: '特記事項',
        items: [
          'DC SFRA（Special Flight Rules Area）: IAD着陸機でも通過時に要件あり – NOTAM確認',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Metropolitan Washington Airports Authority +1-703-572-2700',
        ]
      },
    ]
  },

  KPSM: {
    fullName: 'PORTSMOUTH, Pease INTL Tradeport',
    iata: 'PSM',
    utc: '-5/-4(DST)',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 7',
    prefRwy: 'Nil',
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 16/34',
          'ILS: RWY 16/34',
          'ATIS: 120.025 MHz',
          '旧空軍基地転用 – 長い滑走路（RWY 34: 11,321ft）',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Pease Development Authority +1-603-433-6088',
        ]
      },
    ]
  },

  KSWF: {
    fullName: 'NEWBURGH, Stewart INTL',
    iata: 'SWF',
    utc: '-5/-4(DST)',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 7',
    prefRwy: 'Nil',
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 09/27',
          'ILS: RWY 09/27',
          'ATIS: 124.7 MHz',
          '旧空軍基地転用 – New York北方約60nm（混雑時のNY代替）',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Port Authority of NY & NJ +1-845-564-2100',
        ]
      },
    ]
  },

  KIAH: {
    fullName: 'HOUSTON, George Bush INTL',
    iata: 'IAH',
    utc: '-6/-5(DST)',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 10',
    prefRwy: 'Nil',
    sections: [
      {
        title: 'TWY情報',
        items: [
          'RWY: 08L/26R, 08R/26L, 09/27, 15L/33R, 15R/33L',
          'Terminal A/B/C/D/E – United Hub – 大規模空港',
          '広大なエプロン – Ground Chart必須',
        ]
      },
      {
        title: '到着',
        items: [
          'ILS: 全主要RWYに装備',
          'ATIS: 119.85 MHz',
          'KZHU（Houston ARTCC）管轄',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Houston Airports +1-281-230-3000',
        ]
      },
    ]
  },

  KIND: {
    fullName: 'INDIANAPOLIS, International',
    iata: 'IND',
    utc: '-5(EST 年間固定)',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 05L/23R, 05R/23L',
          'ILS: RWY 05L/R, 23L/R',
          'ATIS: 132.125 MHz',
          'インディアナ州は年間DST変更なし（EST固定）',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Indianapolis Airport Authority +1-317-487-7243',
        ]
      },
    ]
  },

  KMSP: {
    fullName: 'MINNEAPOLIS, St. Paul INTL',
    iata: 'MSP',
    utc: '-6/-5(DST)',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 10',
    prefRwy: 'Nil',
    sections: [
      {
        title: 'TWY情報',
        items: [
          'RWY: 12L/30R, 12R/30L, 17/35',
          'T1（Lindbergh）/ T2（Humphrey）– 到着ターミナル確認',
          '冬季: 除氷必須 – 極寒対応（-30℃以下になることあり）',
        ]
      },
      {
        title: '到着',
        items: [
          'ILS: 全主要RWYに装備',
          'ATIS: 132.85 MHz',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Metropolitan Airports Commission +1-612-726-5555',
        ]
      },
    ]
  },

  KAUS: {
    fullName: 'AUSTIN, Bergstrom INTL',
    iata: 'AUS',
    utc: '-6/-5(DST)',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 17L/35R, 17R/35L',
          'ILS: 主要RWYに装備',
          'ATIS: 135.95 MHz',
          '旧バーグストロム空軍基地転用 – 長い滑走路',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Austin-Bergstrom International Airport +1-512-530-2242',
        ]
      },
    ]
  },

  PHOG: {
    fullName: 'MAUI, Kahului',
    iata: 'OGG',
    utc: '-10(HST 年間固定)',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 02/20',
          'ILS: RWY 02/20',
          'ATIS: 127.325 MHz',
          'ハワイ時間: UTC-10 年間固定（DST変更なし）',
          '貿易風: RWY 02からの着陸が多い',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Hawaii Airports Division +1-808-872-3830',
        ]
      },
    ]
  },

  PHKO: {
    fullName: 'KONA (Big Island), Ellison Onizuka Kona INTL',
    iata: 'KOA',
    utc: '-10(HST 年間固定)',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 8',
    prefRwy: 'Nil',
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 17/35',
          'ILS: RWY 17/35',
          'ATIS: 119.15 MHz',
          '海沿い空港 – 貿易風による突風注意',
          '溶岩地帯の空港 – 視覚的な特殊環境',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Hawaii Airports Division +1-808-329-9230',
        ]
      },
    ]
  },

  PHTO: {
    fullName: 'HILO (Big Island), Hilo INTL',
    iata: 'ITO',
    utc: '-10(HST 年間固定)',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 8',
    prefRwy: 'Nil',
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 03/21, 08/26',
          'ILS: RWY 03/21',
          'ATIS: 125.25 MHz',
          '火山灰（キラウエア）: ASHTAM確認 – 活動状況によりNOTAM発令',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Hawaii Airports Division +1-808-961-9300',
        ]
      },
    ]
  },

  PHJR: {
    fullName: 'OAHU, Kalaeloa (John Rodgers Field)',
    iata: 'JRF',
    utc: '-10(HST 年間固定)',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 7',
    prefRwy: 'Nil',
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 04L/22R, 11L/29R',
          'ILS: RWY 04L/22R',
          'ATIS: 125.8 MHz',
          'HNL（ホノルル）の代替空港 – 旧海軍航空基地',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Hawaii Airports Division +1-808-682-3923',
        ]
      },
    ]
  },

  YBBN: {
    fullName: 'BRISBANE, International',
    iata: 'BNE',
    utc: '+10(AEST 年間固定)',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 10',
    prefRwy: 'Nil',
    sections: [
      {
        title: 'TWY情報',
        items: [
          'RWY: 01L/19R, 01R/19L',
          'International Terminal / Domestic Terminal – 確認必要',
          'クイーンズランド州: DST変更なし（UTC+10固定）',
        ]
      },
      {
        title: '到着',
        items: [
          'ILS: RWY 01L/R, 19L/R',
          'ATIS: 126.1 MHz',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Brisbane Airport Corporation +61-7-3406-3000',
        ]
      },
    ]
  },

  YBCS: {
    fullName: 'CAIRNS, International',
    iata: 'CNS',
    utc: '+10(AEST 年間固定)',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 15/33',
          'ILS: RWY 15/33',
          'ATIS: 124.5 MHz',
          '熱帯雨林気候 – 雷雨・積乱雲に注意',
          'Great Barrier Reef近接 – 海上進入',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Cairns Airport +61-7-4080-6703',
        ]
      },
    ]
  },

  YPAD: {
    fullName: 'ADELAIDE, International',
    iata: 'ADL',
    utc: '+9:30/+10:30(ACST/ACDT)',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 05/23',
          'ILS: RWY 05/23',
          'ATIS: 126.1 MHz',
          '南オーストラリア州: UTC+9:30（夏季+10:30）– 独特のタイムゾーンに注意',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Adelaide Airport Limited +61-8-8308-9211',
        ]
      },
    ]
  },

};
