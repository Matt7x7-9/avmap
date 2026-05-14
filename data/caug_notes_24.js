// CAUG 2-03 Chapter 2.4 Terminal Other AD - Asia
// Operational notes for 35 airports (26 with cache data, 9 placeholder)
// Source: RM_JALISSUE_INT 2-03 Rev.26.3 (16 APR 2026)

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

  // ── マレーシア ────────────────────────────────

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

  // ── キャッシュ未収録空港 ──────────────────────

  VVVD: {
    fullName: 'VAN DON INTL',
    iata: 'VDO',
    utc: '+7',
    ops: '—',
    curfew: '—',
    fuel: 'JET-A1',
    rffs: '—',
    prefRwy: '—',
    sections: [{ title: '注意', items: ['CAUG 2-03: キャッシュデータなし。詳細はマニュアル (2.4.VVVD/VDO) 参照'] }]
  },

  WARR: {
    fullName: 'SURABAYA (Juanda INTL)',
    iata: 'SUB',
    utc: '+7',
    ops: '—',
    curfew: '—',
    fuel: 'JET-A1',
    rffs: '—',
    prefRwy: '—',
    sections: [{ title: '注意', items: ['CAUG 2-03: キャッシュデータなし。詳細はマニュアル (2.4.WARR/SUB) 参照'] }]
  },

  WBGG: {
    fullName: 'KUCHING INTL',
    iata: 'KCH',
    utc: '+8',
    ops: '—',
    curfew: '—',
    fuel: 'JET-A1',
    rffs: '—',
    prefRwy: '—',
    sections: [{ title: '注意', items: ['CAUG 2-03: キャッシュデータなし。詳細はマニュアル (2.4.WBGG/KCH) 参照'] }]
  },

  WBKK: {
    fullName: 'KOTA KINABALU INTL',
    iata: 'BKI',
    utc: '+8',
    ops: '—',
    curfew: '—',
    fuel: 'JET-A1',
    rffs: '—',
    prefRwy: '—',
    sections: [{ title: '注意', items: ['CAUG 2-03: キャッシュデータなし。詳細はマニュアル (2.4.WBKK/BKI) 参照'] }]
  },

  WBSB: {
    fullName: 'BANDAR SERI BEGAWAN (Brunei INTL)',
    iata: 'BWN',
    utc: '+8',
    ops: '—',
    curfew: '—',
    fuel: 'JET-A1',
    rffs: '—',
    prefRwy: '—',
    sections: [{ title: '注意', items: ['CAUG 2-03: キャッシュデータなし。詳細はマニュアル (2.4.WBSB/BWN) 参照'] }]
  },

  WMKP: {
    fullName: 'PENANG INTL',
    iata: 'PEN',
    utc: '+8',
    ops: '—',
    curfew: '—',
    fuel: 'JET-A1',
    rffs: '—',
    prefRwy: '—',
    sections: [{ title: '注意', items: ['CAUG 2-03: キャッシュデータなし。詳細はマニュアル (2.4.WMKP/PEN) 参照'] }]
  },

  ZBHH: {
    fullName: 'HOHHOT (Baita INTL)',
    iata: 'HET',
    utc: '+8',
    ops: '—',
    curfew: '—',
    fuel: 'JET-A1',
    rffs: '—',
    prefRwy: '—',
    sections: [{ title: '注意', items: ['CAUG 2-03: キャッシュデータなし。詳細はマニュアル (2.4.ZBHH/HET) 参照'] }]
  },

  ZHHH: {
    fullName: 'WUHAN (Tianhe INTL)',
    iata: 'WUH',
    utc: '+8',
    ops: '—',
    curfew: '—',
    fuel: 'JET-A1',
    rffs: '—',
    prefRwy: '—',
    sections: [{ title: '注意', items: ['CAUG 2-03: キャッシュデータなし。詳細はマニュアル (2.4.ZHHH/WUH) 参照'] }]
  },

  ZMUB: {
    fullName: 'ULAANBAATAR (Chinggis Khaan INTL)',
    iata: 'ULN',
    utc: '+8',
    ops: '—',
    curfew: '—',
    fuel: 'JET-A1',
    rffs: '—',
    prefRwy: '—',
    sections: [{ title: '注意', items: ['CAUG 2-03: キャッシュデータなし。詳細はマニュアル (2.4.ZMUB/ULN) 参照'] }]
  },

  ZPPP: {
    fullName: 'KUNMING (Changshui INTL)',
    iata: 'KMG',
    utc: '+8',
    ops: '—',
    curfew: '—',
    fuel: 'JET-A1',
    rffs: '—',
    prefRwy: '—',
    sections: [{ title: '注意', items: ['CAUG 2-03: キャッシュデータなし。詳細はマニュアル (2.4.ZPPP/KMG) 参照'] }]
  },

  ZSAM: {
    fullName: 'XIAMEN (Gaoqi INTL)',
    iata: 'XMN',
    utc: '+8',
    ops: '—',
    curfew: '—',
    fuel: 'JET-A1',
    rffs: '—',
    prefRwy: '—',
    sections: [{ title: '注意', items: ['CAUG 2-03: キャッシュデータなし。詳細はマニュアル (2.4.ZSAM/XMN) 参照'] }]
  },

  ZSHC: {
    fullName: 'HANGZHOU (Xiaoshan INTL)',
    iata: 'HGH',
    utc: '+8',
    ops: '—',
    curfew: '—',
    fuel: 'JET-A1',
    rffs: '—',
    prefRwy: '—',
    sections: [{ title: '注意', items: ['CAUG 2-03: キャッシュデータなし。詳細はマニュアル (2.4.ZSHC/HGH) 参照'] }]
  },

  ZWWW: {
    fullName: 'URUMQI (Diwopu INTL)',
    iata: 'URC',
    utc: '+8',
    ops: '—',
    curfew: '—',
    fuel: 'JET-A1',
    rffs: '—',
    prefRwy: '—',
    sections: [{ title: '注意', items: ['CAUG 2-03: キャッシュデータなし。詳細はマニュアル (2.4.ZWWW/URC) 参照'] }]
  },

};
