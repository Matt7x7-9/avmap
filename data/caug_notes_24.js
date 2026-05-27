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
    runways: [{'id':'13L/31R', 'len':4100, 'apch':'ILS Cat III 13L/31R'}, {'id':'13R/31L', 'len':4106, 'apch':'ILS Cat III 13R/31L'}],
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
    runways: [{'id':'12/30', 'len':4500, 'apch':'ILS Cat II 12/30'}],
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
    runways: [{'id':'08L/26R', 'len':4000, 'apch':'ILS 08L/26R'}, {'id':'08R/26L', 'len':4080, 'apch':'ILS 08R/26L'}],
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
    runways: [{'id':'15/33', 'len':4572, 'apch':'ILS Cat III 15/33'}],
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
    runways: [{'id':'09/27', 'len':3150, 'apch':'ILS Cat II 09/27'}],
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
    runways: [{'id':'07/25', 'len':3180, 'apch':'ILS Cat II 07/25'}, {'id':'13/31', 'len':1910, 'apch':'ILS 13/31'}],
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
    runways: [{'id':'02R/20L', 'len':3200, 'apch':'ILS 02R/20L'}],
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
    runways: [{'id':'04L/22R', 'len':2560, 'apch':'ILS 04L'}, {'id':'04R/22L', 'len':3310, 'apch':'ILS 04R/22L'}],
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
    runways: [{'id':'05/23', 'len':3505, 'apch':'ILS 05/23'}],
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
    runways: [{'id':'09/27', 'len':3509, 'apch':'ILS Cat II 09/27'}, {'id':'14/32', 'len':2871, 'apch':'ILS 14/32'}],
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
    runways: [{'id':'01L/19R', 'len':2832, 'apch':'ILS Cat II 01L/19R'}, {'id':'01R/19L', 'len':3633, 'apch':'ILS 01R/19L'}],
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
    runways: [{'id':'16/34', 'len':3658, 'apch':'ILS Cat II 16/34'}],
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

  // ── 香港 ────────────────────────────────────

  VHHH: {
    fullName: 'HONG KONG INTL',
    iata: 'HKG',
    utc: '+8',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 10',
    prefRwy: 'RWY 25',
    runways: [
      {id:'07L/25R', len:3800, apch:'ILS (CAT II/III) or RNP'},
      {id:'07C/25C', len:3800, apch:'ILS (CAT II/III) or RNP'},
      {id:'07R/25L', len:3800, apch:'ILS (CAT II) or RNP'},
    ],
    tabs: [
      {
        id: 'gen',
        label: 'General',
        sections: [
          {
            title: 'RWY Operations',
            items: [
              '【0000-1459 UTC】Three-RWY ops: 07L arr, 07C dep (N/NE/E), 07R mixed',
              '【1500-1759 UTC】07C/25C arr, 07R/25L dep (segregated)',
              '【1800-2259 UTC】Single RWY only (North or Center)',
              '【2300-2359 UTC】Dual RWY resumes (maintenance rotation)',
              'South apron/Business parking → assign 07R/25L; others → 07L/25R',
              'Independent parallel dep (07C+07R): report assigned SID to Tower on first contact',
            ]
          },
          {
            title: 'Wind Shear & Turbulence ⚠️',
            items: [
              'E-SW winds >15 KT: significant WS/moderate turbulence (>30 KT: larger)',
              'NW-NE winds >20 KT: significant WS (esp. RWY 25 approaches)',
              'South RWY (07R/25L) most affected (Lantau hills proximity)',
              'Cool season (Nov-Apr): NE low-level jet up to 50 KT → WS on 07 departure',
              '⚠️ RWY 25L: NW/N winds; 25C: SW/S/SE and NW/N/NE >15 KT',
              '⚠️ RWY 25R: strong S winds; 07R TDZ: NW/N >15 KT',
            ]
          },
          {
            title: 'Transponder & Taxi',
            items: [
              'Mode S: Stay on AUTO/XPNDR until fully parked (weight-on-wheel)',
              'Taxi: Extreme CAUTION, minimum engines power only',
              'RNP 1 mandatory (GNSS receiver required); exempt: humanitarian/SAR/state ACFT',
            ]
          },
          {
            title: 'ILS & Lighting ⚠️',
            items: [
              '⚠️ CAT I ops 07R/25L: GP signal may be interfered by taxiing ACFT',
              '⚠️ False ILS capture risk: monitor profile/altitude carefully',
              '⚠️ Do NOT arm capture modes before STELA (07R), TONIC (07C), TUTBA (07L)',
              'Red Lightning Warning: no chocks, no push-back, APU must run (or 1x starboard engine)',
              'TCAS alerts possible from VFR traffic in vicinity',
            ]
          },
        ]
      },
      {
        id: 'arr',
        label: 'Arrival',
        sections: [
          {
            title: 'CAT Operations & RWY Assignments',
            items: [
              '07L/25R: CAT II/III; 07C/25C: 07C CAT II / 25C CAT II/III; 07R/25L: CAT II',
              'Special aircrew & ACFT cert required for CAT II/III (07L, 25C)',
              'Vacate via 1st available rapid exit TWY; don\'t stop on exit TWY',
            ]
          },
          {
            title: 'Reduced RWY Separation (RRSM)',
            items: [
              'Conditions: VIS ≥5km, ceiling ≥3000\', daylight, visual contact, no adverse braking',
              '07L/25R: preceding past 2400m from THR (abeam TWY C8/C5)',
              '07C/25C: preceding past 2400m from THR (abeam TWY F6/A8 or F3)',
              '07R/25L: preceding past 2900m from THR (abeam TWY K6 or K2)',
            ]
          },
          {
            title: 'Descent & Delays',
            items: [
              'Descent rate: min 500\'/min assumed by ATC; inform if lower',
              'Delay >20 min: NOTAM issued; ≥30 min: on ATIS',
              '⚠️ Pearl River Delta region likely affected by same weather → consider alternates outside',
            ]
          },
        ]
      },
      {
        id: 'dep',
        label: 'Departure',
        sections: [
          {
            title: 'A-CDM & Clearance',
            items: [
              'TOBT ±5 min; TSAT window ±10 min',
              'TOBT earlier by ≥30 min → re-file flight plan',
              'TOBT later by ≥15 min → send DLA message',
              'PDC data link: send RCD ≤40 min before EOBT (if no response in 5 min, voice)',
              'Read back: Callsign, Destination, Route, SID, Squawk',
            ]
          },
          {
            title: 'Push-back & Start-up',
            items: [
              'Standard: BLUE/RED to taxi-lane; GREEN: S103/S108/W123 (special stands)',
              '⚠️ S103, S108, W123: 180° push-back = ONE ENGINE ONLY (start other after push-back)',
              'RWY 07C: During three-RWY ops (0000-1459 UTC): Radius-to-Fix SIDs (BEKOL 1X/1Z, DALOL 1X/1Z, etc.)',
              'RWY 07C: During noise mitigating period (1500-2300 UTC): BEKOL 1Y, DALOL 1Y, LEKEN 1Y, PECAN 1Y',
            ]
          },
          {
            title: 'Departure Speed & SID Verification',
            items: [
              'Depart speed: cross PORPA/ROVER/HH412/HH421/PRAWN/POVEG at MIN 205 KT → NADP 2 recommended',
              '⚠️ RWY 07C: Verify correct SID carefully (LEFT/RIGHT turn depends on RWY mode)',
              '⚠️ Independent parallel dep (07C+07R): report assigned SID to Tower on 1st contact',
              '⚠️ Terrain: stay on SID track until passing MSA; ATC has APM/DPM monitoring',
            ]
          },
          {
            title: 'Climb Requirements (Critical Waypoints)',
            items: [
              'ADLAD/BEKOL: BEKOL at or above FL157 (4800m)',
              'RWY 25L: HH481 ≥7000\', HH482 ≥FL110',
              'DALOL/LEKEN: SEGPO ≥FL140',
              'DUMEP/LARIT/XEMEK: VEMSO ≥9000\', SAMED ≥FL130, LUBMO ≥FL160',
              'PECAN: VEDVO ≥FL110, SEGPO ≥FL140, HH471 ≥9000\'',
              'SOSLU (07C): VEMSO ≥9000\', SAMED ≥FL130, SEGPO ≥FL140',
              '⚠️ If unable to comply: inform HK Delivery before start-up',
            ]
          },
          {
            title: 'Engine Failure (B787)',
            items: [
              'RWY 07L/C: Track 074° → intercept OUBD R-105 07EF1 → 07EF2 turn RIGHT to 190° → accelerate (avoid 1100\' OBST 10.6NM ENE) → at 4500\' RIGHT to LIMES',
              'RWY 07R: Track 074° → 07RE1 turn RIGHT to 190° → same avoidance/climb to LIMES',
            ]
          },
        ]
      },
    ],
    sections: []
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
    runways: [{'id':'16/34', 'len':3214, 'apch':'ILS Cat II 16/34'}],
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
    runways: [{'id':'07/25', 'len':3658, 'apch':'ILS Cat II 07/25'}, {'id':'12/30', 'len':2045, 'apch':'ILS Cat II 12/30'}],
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
    runways: [{'id':'03L/21R', 'len':3700, 'apch':'ILS or RNP 03L / ILS (CAT2) or RNP 21R'}, {'id':'03R/21L', 'len':3500, 'apch':'RNP or VOR 03R / ILS or RNP 21L'}],
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
    runways: [{'id':'18/36', 'len':3505, 'apch':'ILS or RNP 18 / RNP or VOR 36'}],
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
    runways: [{'id':'18/36', 'len':3400, 'apch':'ILS Cat II 18/36'}],
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
    runways: [{'id':'09/27', 'len':3100, 'apch':'ILS Cat II 09/27'}],
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
    runways: [
      {id:'01L/19R', len:4000, apch:'ILS Cat II 01L/19R'},
      {id:'01R/19L', len:3700, apch:'ILS Cat II 01R/19L'},
      {id:'02R/20L', len:4000, apch:'ILS Cat I 02R/20L'},
      {id:'02L/20R', len:3700, apch:'ILS Cat I 02L/20R'},
    ],
    tabs: [
      {
        id: 'gen',
        label: 'General',
        sections: [
          {
            title: 'RWY Operations & Wind Flows',
            items: [
              '【South Flow】RWY 19/20 ops: RWY19 DEP+ARR / RWY20L DEP / RWY20R ARR (typical May-Oct, afternoon/evening)',
              '【North Flow】RWY 01/02 ops: RWY01 DEP+ARR / RWY02R DEP / RWY02L ARR (typical Nov-Apr, morning)',
              'Crosswind limit: 20 KT for all RWY',
              'PAPI: 全RWY LEFT側のみ装備、3.0° (MEHT 64ft)',
              'Runway surface: Concrete (excellent condition)',
            ]
          },
          {
            title: 'Taxiway & Ground Operations',
            items: [
              'TWY min width: 25m (standard)',
              'Stop bars: Operated when VIS <1500m or during night ops',
              'Fast-exit TWY: Available on main RWYs',
              '⚠️ Minimum pushback path: Ensure adequate space at assigned gate (crowded apron)',
              'Ground power: Universal plugs available (all stands)',
            ]
          },
          {
            title: 'Weather & Hazards ⚠️',
            items: [
              'TS Season: Apr-Oct (afternoon/evening; CB development or ITCZ passage)',
              '  → May-Sep: Severe afternoon TS common (organize early departures)',
              '  → Wind gust: >25KT possible during TS activity',
              'FOG: Dec-Apr (radiative fog, 2300-0800 LT, VIS often <1000m)',
              '  → Early morning: Check TAF/ATIS for rapid VIS changes',
              'Bird Hazard: Airfield north side near feeding grounds',
              '  → RWY surface & vicinity: High bird concentration',
              '  → Bird sweep: Request & wait 5 min before departure',
            ]
          },
          {
            title: 'Restricted Airspace & Special Procedures',
            items: [
              '⚠️ VT(R)-1 BANGKOK CITY: Below 3000ft prohibited except on ATC clearance',
              '⚠️ VT(R)-2 KING PALACE: Strictly prohibited (do NOT enter)',
              'Wildlife Area: North apron boundary, avoid low altitude passes',
              'MSA around BKK: Carefully plan climb/descent on assigned SID/STAR',
              'Simultaneous Parallel Runway Ops (SDPA/SIPA): Possible when traffic permits',
              '  → SDPA: Dependent parallel approaches (min spacing 1000 ft)',
              '  → SIPA: Independent parallel approaches (RMC available)',
            ]
          },
          {
            title: 'Low Visibility Operations',
            items: [
              '⚠️ ILS CAT II Procedures: Available 24/7 when weather requires',
              '  → RVR minimum: 550m for RWY 01L/01R, 350m others',
              '  → Reduced landing rate: 40/hour during CAT II ops',
              '  → Pilots notified of LVP activation via ATIS',
              'LVP Conditions: RVR <1500m or visibility <1000m',
              'Stop Bars: Used at F1-F13, F21-F30, F31-F33 during LVP',
              'Expedited procedures: Ensure rapid runway vacating (fast-exit mandatory)',
            ]
          },
          {
            title: 'Communications & Equipment Failure',
            items: [
              '⚠️ Radio Failure Procedure: If unable to establish contact with ATC',
              '  → Continue to nearest suitable aerodrome (DMC/alternate)',
              '  → For 15-20 pax: Land at nearest suitable airport',
              '  → For 20+ pax: Specific alternate planning required',
              '⚠️ Transponder Failure: Report immediately if possible',
              '  → If unable to advise ATC: proceed as cleared, attempt other comms',
              '  → Land at nearest suitable aerodrome',
              'Mode S Operations: Mandatory on ground for all aircraft',
            ]
          },
        ]
      },
      {
        id: 'arr',
        label: 'Arrival',
        sections: [
          {
            title: 'RWY Assignments & CAT Operations',
            items: [
              'All RWY: ILS Cat I or Cat II capable (no Cat III)',
              '01L/19R (ILS Cat II): Standard arrival when available',
              '01R/19L (ILS Cat II): Alternate arrival',
              '02R/20L (ILS Cat I): Backup arrival (North Flow)',
              '02L/20R (ILS Cat I): Backup arrival (North Flow)',
              'CAT II Operations: Normal crew+ACFT certification sufficient',
              'Vacate: Use fast-exit TWY when available; expedite runway vacating',
            ]
          },
          {
            title: 'Descent & Approach Procedures',
            items: [
              'Descent rate: Min 500ft/min assumed by ATC',
              'PAPI (all RWY): 3-dot on LEFT side = 3.0° glide slope',
              'Visual Approach: Possible during good weather; request if available',
              'Long finals: Monitor for conflicting traffic (busy airfield)',
              'Go-Around: If unstable below 500ft, execute immediately (wind shear risk)',
              'Windshear alerts: Listen for ATC reports; adjust approach if received',
            ]
          },
          {
            title: 'Spot Assignment & Services',
            items: [
              'JAL Primary Spots: G1-G5, F1-F6, E1-E10, 401-403, 501-505',
              'B787 Capable Spots: D2-D7, E1-E10, F5-F6, G2-G5',
              '⚠️ Power Out Spots: Some gates have intermittent power; confirm availability',
              'APU after Block-In: 5 min max before engines shut down',
              'APU before Block-Out: Restart up to 10 min before push clearance',
              'Ground power: 115V/400Hz universal plugs available',
              'Services: PAX steps, tugs/tow bars, water/lavatory service all available',
              'No Tail Pushes: Strictly prohibited at VTBS (use nose-in only)',
              'Immediate Building Position Lights: Available for night positioning',
            ]
          },
          {
            title: 'Speed Control & Altitude Restrictions ⚠️',
            items: [
              'Speed Control: Applied at all times unless ATC authorized otherwise',
              'Published Speed Restrictions: Strictly adhere to STAR procedures',
              '⚠️ Low Level Altitude Limit: 1000ft minimum (apply caution in descent)',
              'Altitude Restrictions: Issued with descent clearance (honor exactly)',
              'ILS CAT II Approach: Specific speed/descent rate requirements',
              'Go-Around: If unstable below 500ft due to wind shear risk',
            ]
          },
          {
            title: 'RWY Occupancy & Minimum Equipment',
            items: [
              'Minimum Runway Occupancy Time: 30-50 min depending on RWY (see tables)',
              '  → Expedite runway vacating after landing (use fast-exit TWY)',
              '  → Minimum landing rate: 40/hour during normal ops',
              'Reduced Communication Workload: During CAT II ops',
              'Runway Occupancy Tables: RWY 01L (19R) requires TRA/TBA coordination',
              'Aircraft Equipment: Must meet CAT II certification requirements',
            ]
          },
        ]
      },
      {
        id: 'dep',
        label: 'Departure',
        sections: [
          {
            title: 'Push-back & Start-up Procedures',
            items: [
              'GND Frequency Selection: Critical step due to interference',
              '  → Spots E1-E10: 121.75 MHz (north apron)',
              '  → Spots F1-F6, G1-G5, 401-525: 121.95 MHz (south/east apron)',
              'Push-back Clearance: Request on assigned GND frequency',
              'Engine Start: Coordinate timing with GND (congestion management)',
              'APU: Secure before pushback or after engines running',
            ]
          },
          {
            title: 'VHF Interference & Taxi Routing ⚠️',
            items: [
              '⚠️ VHF Interference Zone: Spots E/F/G near PBB (Passenger Boarding Bridge)',
              '  → 121.5 MHz & 121.75 MHz may experience interference',
              '  → Switch to departure freq as soon as airborne',
              'Taxi Routing: Follow GND clearance explicitly (tight apron)',
              'Radio Check: If unable to read GND, move forward & retry (avoid dead zones)',
              'TWY Congestion: BKK is busy; expect hold orders during peak hours',
            ]
          },
          {
            title: 'Departure SID & Initial Climb',
            items: [
              'SID Verification: Confirm assigned SID with TWR on frequency change',
              'Departure Routing: TWR → APP (East/West/South/North sector) → BKK Control',
              'SID Climb Gradients: Verify aircraft performance vs. procedure requirements',
              'Terrain Clearance: Most SIDs climbing toward northern highlands',
              'Transition Altitude: 3000ft (standard for Thailand)',
              'Wind Shear Reporting: If experienced, report to ATC immediately',
            ]
          },
          {
            title: 'Weather & Wind Considerations',
            items: [
              'Crosswind Limit: 20 KT for all RWYs',
              'TS Season (Apr-Oct): Strong afternoon activity',
              '  → Aim for early morning departures (0500-1000 LT) when possible',
              '  → Plan alternates outside TS region if departing afternoon',
              'Wind Shear: Low-level jet (cool season: Nov-Mar) may cause climb-out difficulties',
              '  → Reduce load/pax if necessary for performance margin',
              'Bird Hazard: Request bird sweep before pushing (5 min clearance)',
            ]
          },
          {
            title: 'Engine Failure (B787 Departure)',
            items: [
              'Crosswind RWY ops: Most departures use RWY 19/01 (long axis)',
              'RWY 19 Failure: Initial track northeast, terrain obstacles eastward',
              '  → Climb to MSA (FL140 recommended) before turning enroute',
              'RWY 01 Failure: Initial track northwest, avoid Nakhon Pathom hills (WSW)',
              '  → Coordinate with ATC for low-level routing if necessary',
              'Short-field Performance: Standard runway lengths adequate for B787',
              'Flap Retraction: Confirm positive climb gradient before retraction',
            ]
          },
          {
            title: 'Noise Abatement & Special Restrictions',
            items: [
              '⚠️ Thrust Reverse Usage: Restricted on RWYs 19R/01L during noise procedures',
              '⚠️ APU Operations: APU running required after push-back (until taxi clearance)',
              '⚠️ Ground Power Supply: Required during parking (electrical load)',
              'Noise Abatement Takeoff: Follow reduced power procedures if issued',
              'Flight Path: Stay on SID track until passing MSA; no shortcuts',
              '⚠️ Runway Surface: Concrete in good condition; standard performance assumed',
            ]
          },
          {
            title: 'RWY Occupancy & Parallel Ops Procedures',
            items: [
              'Minimum Runway Occupancy Time: 25-45 min depending on RWY (see tables)',
              'Simultaneous Operations Possible: SDPA/SIPA when authorized',
              '  → SDPA: Dependent parallel deps (RMC aware of traffic)',
              '  → SIPA: Independent parallel deps (fully autonomous separation)',
              'South Flow (RWY 19/20): RWY 19 DEP+ARR, RWY 20 segregated',
              'North Flow (RWY 01/02): RWY 01 DEP+ARR, RWY 02 segregated',
              'Crew Coordination: Critical during parallel ops (monitor tower frequencies)',
            ]
          },
          {
            title: 'Fuel Dumping & In-Flight Procedures',
            items: [
              '⚠️ Fuel Dumping Area: Designated area south of airport (avoid populated areas)',
              'Fuel Dump Clearance: Must obtain ATC clearance before initiating dump',
              'Minimum Altitude: 4000ft for fuel dump operations',
              'Arrival Planning: Consider fuel state vs. dumping time if heavy landing required',
              'Alternative Airports: Plan alternates with adequate fuel reserves',
              'In-Flight Management: Min landing fuel per procedures; declare early if needed',
            ]
          },
        ]
      },
    ],
    sections: []
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
    runways: [{'id':'17L/35R', 'len':3500, 'apch':'ILS Cat III 17L/35R'}, {'id':'17R/35L', 'len':3048, 'apch':'ILS Cat III 17R/35L'}],
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
    runways: [{'id':'07/25', 'len':3050, 'apch':'ILS Cat II 07/25'}],
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
    runways: [{'id':'16/34', 'len':3800, 'apch':'ILS Cat II 16/34'}],
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
    runways: [{'id':'10/28', 'len':3000, 'apch':'ILS 10/28'}],
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
    runways: [{'id':'07/25', 'len':3780, 'apch':'ILS Cat II 07/25'}],
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
    runways: [{'id':'02/20', 'len':3780, 'apch':'ILS Cat II 02/20'}],
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
    runways: [{'id':'03/21', 'len':3658, 'apch':'ILS 03/21'}],
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
    runways: [{'id':'04/22', 'len':3352, 'apch':'ILS 04/22'}],
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
    runways: [{'id':'08/26', 'len':3600, 'apch':'ILS Cat II 08/26'}],
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
    runways: [{'id':'04/22', 'len':3400, 'apch':'ILS 22'}, {'id':'05L/23R', 'len':3600, 'apch':'ILS 05L/23R'}, {'id':'05R/23L', 'len':3200, 'apch':'ILS 05R/23L'}],
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
    runways: [{'id':'14/32', 'len':3100, 'apch':'ILS 14/32'}],
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
    runways: [{'id':'03/21', 'len':4000, 'apch':'ILS 03/21'}, {'id':'04/22', 'len':4500, 'apch':'ILS 04/22'}],
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
    runways: [{'id':'05/23', 'len':3400, 'apch':'ILS 05/23'}],
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
    runways: [{'id':'06/24', 'len':3400, 'apch':'ILS 06/24'}, {'id':'07/25', 'len':3600, 'apch':'ILS Cat II 07/25'}],
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
    runways: [{'id':'07/25', 'len':3600, 'apch':'ILS Cat II 07/25'}, {'id':'08L/26R', 'len':3200, 'apch':'ILS 08L/26R'}, {'id':'08R/26L', 'len':3600, 'apch':'ILS 08R/26L'}],
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
    runways: [{'id':'17/35', 'len':2500, 'apch':'ILS 17/35'}],
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
    runways: [{'id':'12/30', 'len':3000, 'apch':'ILS Cat II 12/30'}],
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
    runways: [{'id':'16/34', 'len':2499, 'apch':'ILS Cat II 16/34'}],
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
    runways: [{'id':'16/34', 'len':2999, 'apch':'ILS Cat II 16/34'}],
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
    runways: [{'id':'18/36', 'len':2500, 'apch':'ILS Cat II 18/36'}],
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
    runways: [{'id':'07/25', 'len':2999, 'apch':'ILS Cat II 07/25'}],
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
    runways: [{'id':'14/32', 'len':2999, 'apch':'ILS 14/32'}],
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
    runways: [{'id':'09/27', 'len':3000, 'apch':'ILS Cat II 09/27'}, {'id':'12/30', 'len':1201, 'apch':'ILS Cat II 12/30'}],
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
    runways: [{'id':'05L/23R', 'len':3688, 'apch':'ILS 05L/23R'}, {'id':'05R/23L', 'len':3688, 'apch':'ILS 05R/23L'}],
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
    runways: [{'id':'15L/33R', 'len':3750, 'apch':'ILS Cat III 15L/33R'}, {'id':'15R/33L', 'len':3750, 'apch':'ILS Cat III 15R/33L'}, {'id':'16L/34R', 'len':4000, 'apch':'ILS Cat II 16L/34R'}, {'id':'16R/34L', 'len':3750, 'apch':'ILS Cat II 16R/34L'}],
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
    runways: [{'id':'13C/31C', 'len':2370, 'apch':'ILS Cat II 13C/31C'}, {'id':'13R/31L', 'len':3500, 'apch':'ILS Cat III 13R/31L'}],
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
    runways: [{'id':'10L/28R', 'len':3397, 'apch':'ILS Cat II 10L/28R'}, {'id':'10R/28L', 'len':3780, 'apch':'ILS Cat III 10R/28L'}],
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
    runways: [{'id':'08L/26R', 'len':2561, 'apch':'ILS 08L/26R'}, {'id':'08R/26L', 'len':3317, 'apch':'ILS Cat III 08R/26L'}],
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
    runways: [{'id':'04/22', 'len':3049, 'apch':'ILS Cat II 04/22'}],
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
    runways: [{'id':'05L/23R', 'len':3048, 'apch':'ILS Cat III 05L/23R'}, {'id':'05R/23L', 'len':3050, 'apch':'ILS Cat III 05R/23L'}],
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
    runways: [{'id':'04/22', 'len':2020, 'apch':'ILS 04/22'}, {'id':'06/24', 'len':3439, 'apch':'ILS Cat III 06/24'}, {'id':'09/27', 'len':3453, 'apch':'ILS Cat II 09/27'}, {'id':'18C/36C', 'len':3300, 'apch':'ILS Cat III 18C/36C'}, {'id':'18L/36R', 'len':3400, 'apch':'ILS Cat II 18L/36R'}, {'id':'18R/36L', 'len':3800, 'apch':'ILS Cat II 18R/36L'}],
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
    runways: [{'id':'05L/23R', 'len':2700, 'apch':'ILS Cat II 05L/23R'}, {'id':'05R/23L', 'len':3000, 'apch':'ILS Cat III 05R/23L'}],
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
    runways: [{'id':'08/26', 'len':2500, 'apch':'ILS Cat II 08/26'}],
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
    runways: [{'id':'08/26', 'len':3480, 'apch':'ILS Cat II 08/26'}],
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
    runways: [{'id':'01L/19R', 'len':3301, 'apch':'ILS Cat II 01L/19R'}, {'id':'01R/19L', 'len':2500, 'apch':'ILS 01R/19L'}, {'id':'08/26', 'len':2500, 'apch':'ILS Cat II 08/26'}],
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
    runways: [{'id':'04L/22R', 'len':3600, 'apch':'ILS Cat III 04L/22R'}, {'id':'04R/22L', 'len':3300, 'apch':'ILS Cat III 04R/22L'}, {'id':'12/30', 'len':2800, 'apch':'ILS Cat II 12/30'}],
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
    runways: [{'id':'02/20', 'len':2400, 'apch':'ILS Cat II 02/20'}, {'id':'06/24', 'len':3650, 'apch':'ILS Cat II 06/24'}, {'id':'07/25', 'len':3320, 'apch':'ILS Cat II 07/25'}],
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
    runways: [{'id':'08/26', 'len':1890, 'apch':'ILS Cat II 08/26'}, {'id':'11/29', 'len':2438, 'apch':'ILS 11/29'}, {'id':'17L/35R', 'len':4267, 'apch':'ILS Cat III 17L/35R'}, {'id':'17R/35L', 'len':3863, 'apch':'ILS Cat III 17R/35L'}],
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
    runways: [{'id':'02/20', 'len':3353, 'apch':'ILS Cat II 02/20'}, {'id':'12/30', 'len':3109, 'apch':'ILS Cat II 12/30'}],
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
    runways: [{'id':'05/23', 'len':3389, 'apch':'ILS 05/23'}, {'id':'06L/24R', 'len':2956, 'apch':'ILS 06L/24R'}, {'id':'06R/24L', 'len':2743, 'apch':'ILS 06R/24L'}, {'id':'15L/33R', 'len':3368, 'apch':'ILS Cat III 15L/33R'}, {'id':'15R/33L', 'len':2770, 'apch':'ILS 15R/33L'}],
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
    runways: [{'id':'12/30', 'len':3206, 'apch':'ILS Cat II 12/30'}, {'id':'10R/28L', 'len':1894, 'apch':'ILS Cat III 10R/28L'}, {'id':'10L/28R', 'len':1663, 'apch':'ILS Cat II 10L/28R'}],
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
    runways: [{'id':'08L/26R', 'len':3718, 'apch':'ILS Cat II 08L/26R'}, {'id':'08R/26L', 'len':3109, 'apch':'ILS 08R/26L'}],
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
    runways: [{'id':'17L/35R', 'len':2623, 'apch':'ILS Cat III 17L/35R'}, {'id':'17R/35L', 'len':2621, 'apch':'ILS Cat III 17R/35L'}],
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
    runways: [{'id':'16R/34L', 'len':4877, 'apch':'ILS Cat II 16R/34L'}, {'id':'07/25', 'len':3658, 'apch':'ILS Cat II 07/25'}, {'id':'08/26', 'len':3658, 'apch':'ILS Cat II 08/26'}, {'id':'16L/34R', 'len':3658, 'apch':'ILS Cat II 16L/34R'}, {'id':'17L/35R', 'len':3658, 'apch':'ILS Cat III 17L/35R'}, {'id':'17R/35L', 'len':3658, 'apch':'ILS Cat III 17R/35L'}],
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
    runways: [{'id':'01L/19R', 'len':3045, 'apch':'ILS Cat II 01L/19R'}, {'id':'07R/25L', 'len':2530, 'apch':'ILS 07R/25L'}, {'id':'01R/19L', 'len':1275, 'apch':'ILS 01R/19L'}],
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
    runways: [{'id':'07/25', 'len':3049, 'apch':'ILS Cat II 07/25'}, {'id':'01/19', 'len':2499, 'apch':'ILS 01/19'}],
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
    runways: [{'id':'04R/22L', 'len':3659, 'apch':'ILS Cat III 04R/22L'}, {'id':'03R/21L', 'len':3048, 'apch':'ILS 03R/21L'}, {'id':'04L/22R', 'len':3048, 'apch':'ILS 04L/22R'}, {'id':'09L/27R', 'len':2654, 'apch':'ILS 09L/27R'}, {'id':'03L/21R', 'len':2591, 'apch':null}],
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
    runways: [{'id':'04L/22R', 'len':3353, 'apch':'ILS Cat II 04L/22R'}, {'id':'04R/22L', 'len':3048, 'apch':'ILS 04R/22L'}, {'id':'11/29', 'len':2050, 'apch':'ILS 11/29'}],
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
    runways: [{'id':'01C/19C', 'len':3505, 'apch':'ILS Cat III 01C/19C'}, {'id':'01R/19L', 'len':3505, 'apch':'ILS 01R/19L'}, {'id':'01L/19R', 'len':2865, 'apch':'ILS Cat II 01L/19R'}, {'id':'12/30', 'len':3201, 'apch':'ILS Cat II 12/30'}],
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
    runways: [{'id':'16/34', 'len':3451, 'apch':'ILS Cat II 16/34'}],
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
    runways: [{'id':'09/27', 'len':3602, 'apch':'ILS Cat II 09/27'}, {'id':'16/34', 'len':1830, 'apch':'ILS Cat II 16/34'}],
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
    runways: [{'id':'15L/33R', 'len':3658, 'apch':'ILS Cat II 15L/33R'}, {'id':'09/27', 'len':3048, 'apch':'ILS Cat II 09/27'}, {'id':'08R/26L', 'len':2866, 'apch':'ILS 08R/26L'}, {'id':'08L/26R', 'len':2743, 'apch':'ILS 08L/26R'}, {'id':'15R/33L', 'len':3048, 'apch':'ILS 15R/33L'}],
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
    runways: [{'id':'05L/23R', 'len':3414, 'apch':'ILS Cat II 05L/23R'}, {'id':'05R/23L', 'len':3048, 'apch':'ILS 05R/23L'}, {'id':'14/32', 'len':2218, 'apch':'ILS 14/32'}],
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
    runways: [{'id':'04/22', 'len':3355, 'apch':'ILS Cat III 04/22'}, {'id':'12R/30L', 'len':3048, 'apch':'ILS 12R/30L'}, {'id':'12L/30R', 'len':2499, 'apch':'ILS Cat II 12L/30R'}, {'id':'17/35', 'len':2438, 'apch':null}],
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
    runways: [{'id':'18R/36L', 'len':3734, 'apch':'ILS Cat II 18R/36L'}, {'id':'18L/36R', 'len':2743, 'apch':'ILS Cat II 18L/36R'}],
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
    runways: [{'id':'02/20', 'len':2133, 'apch':'ILS Cat II 02/20'}, {'id':'05/23', 'len':1518, 'apch':null}],
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
    runways: [{'id':'17/35', 'len':3353, 'apch':'ILS 17/35'}],
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
    runways: [{'id':'08/26', 'len':2987, 'apch':'ILS Cat II 08/26'}, {'id':'03/21', 'len':1707, 'apch':null}],
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
    runways: [{'id':'11/29', 'len':2550, 'apch':'ILS 11/29'}, {'id':'04R/22L', 'len':2435, 'apch':null}, {'id':'04L/22R', 'len':1373, 'apch':null}],
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
    runways: [{'id':'01R/19L', 'len':3560, 'apch':'ILS 01R/19L'}, {'id':'01L/19R', 'len':3300, 'apch':'ILS Cat II 01L/19R'}],
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
    runways: [{'id':'15/33', 'len':3197, 'apch':'ILS 15/33'}],
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
    runways: [{'id':'05/23', 'len':3100, 'apch':'ILS Cat I 05/23'}, {'id':'12/30', 'len':1652, 'apch':'ILS Cat II 12/30'}],
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

  // ── ＊ Contingency Airports ────────────────────

  RJCK: {
    fullName: 'KUSHIRO',
    iata: 'KUH',
    utc: '+9',
    ops: '0700-2100L',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 7',
    prefRwy: 'Nil',
    runways: [{'id':'17/35', 'len':2500, 'apch':'ILS 17/35'}],
    sections: [
      {
        title: '運用情報',
        items: [
          '0700-2100LSTのみ運用',
          'RWY: 17/35',
          '霧が多い（太平洋沿岸）– 低視程進入に注意',
          '冬季: 積雪・凍結対応',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: 釧路空港 +81-154-57-8304',
        ]
      },
    ]
  },

  RORS: {
    fullName: 'SHIMOJISHIMA',
    iata: 'SHI',
    utc: '+9',
    ops: '0730-2030L',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 7',
    prefRwy: 'Nil',
    runways: [{'id':'17/35', 'len':3000, 'apch':'ILS 17'}],
    sections: [
      {
        title: '運用情報',
        items: [
          '0730-2030LSTのみ運用',
          'RWY: 17/35（JALフライトトレーニング用途でも使用）',
          '宮古島南西部 – 沖縄エリアの代替空港',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: 下地島空港 +81-980-76-4371',
        ]
      },
    ]
  },

  OMDB: {
    fullName: 'DUBAI, Dubai INTL',
    iata: 'DXB',
    utc: '+4',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 10',
    prefRwy: 'Nil',
    runways: [{'id':'12L/30R', 'len':4351, 'apch':'ILS Cat II 12L/30R'}, {'id':'12R/30L', 'len':4447, 'apch':'ILS 12R/30L'}],
    sections: [
      {
        title: 'TWY情報',
        items: [
          'RWY: 12L/30R, 12R/30L（平行2本）',
          'Concourse A/B/C/D: 非常に広大 – Ground Chart必須',
          'TWY混雑: 世界有数のトラフィック量',
        ]
      },
      {
        title: '到着',
        items: [
          'ILS: RWY 12L/R, 30L/R',
          'ATIS: 127.675 MHz',
          'RWY交互使用: ATCの指示に従う',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Dubai Airports +971-4-224-5555',
        ]
      },
    ]
  },

  OBBI: {
    fullName: 'BAHRAIN, Bahrain INTL',
    iata: 'BAH',
    utc: '+3',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    runways: [{'id':'12L/30R', 'len':3956, 'apch':'ILS Cat II 12L/30R'}, {'id':'12R/30L', 'len':2530, 'apch':'ILS 12R/30L'}],
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 12L/30R, 12R/30L',
          'ILS: RWY 12L/R, 30L/R',
          'ATIS: 128.1 MHz',
          'OBBB FIR管轄: HF MID-2 MWARA利用',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Bahrain Airport Company +973-17-321-964',
        ]
      },
    ]
  },

  UAAA: {
    fullName: 'ALMATY, International',
    iata: 'ALA',
    utc: '+5',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 10',
    prefRwy: 'Nil',
    runways: [{'id':'05L/23R', 'len':4500, 'apch':'ILS 05L/23R'}, {'id':'05R/23L', 'len':4400, 'apch':'ILS 05R/23L'}],
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 05/23, 23（主用）',
          'ILS: RWY 05/23',
          'ATIS: 126.9 MHz',
          '天山山脈が南側に近接 – 進入経路の地形注意',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Almaty International Airport +7-727-270-3333',
        ]
      },
    ]
  },

  UACC: {
    fullName: 'ASTANA (NUR-SULTAN), Nursultan Nazarbayev INTL',
    iata: 'NQZ',
    utc: '+5',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 10',
    prefRwy: 'Nil',
    runways: [{'id':'04/22', 'len':3500, 'apch':'ILS 04/22'}],
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 04/22',
          'ILS: RWY 04/22',
          'ATIS: 128.5 MHz',
          '冬季: 極寒（-40℃以下）– 除氷・エンジン始動に注意',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Astana International Airport +7-7172-792-900',
        ]
      },
    ]
  },

  UBBB: {
    fullName: 'BAKU, Heydar Aliyev INTL',
    iata: 'GYD',
    utc: '+4',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 10',
    prefRwy: 'Nil',
    runways: [{'id':'16/34', 'len':4000, 'apch':'ILS Cat II 16/34'}, {'id':'17/35', 'len':3200, 'apch':'ILS 17/35'}],
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 16/34',
          'ILS: RWY 16/34',
          'ATIS: 128.3 MHz',
          'カスピ海沿岸 – 強風注意',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Baku Airports CJSC +994-12-497-2727',
        ]
      },
    ]
  },

  UDYZ: {
    fullName: 'YEREVAN, Zvartnots INTL',
    iata: 'EVN',
    utc: '+4',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    runways: [{'id':'08/26', 'len':3850, 'apch':'ILS Cat II 08/26'}],
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 09/27',
          'ILS: RWY 09/27',
          'ATIS: 128.0 MHz',
          'アラガツ山（4,090m）が北側に近接 – 地形注意',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Zvartnots International Airport +374-10-493-000',
        ]
      },
    ]
  },

  UGTB: {
    fullName: 'TBILISI, Shota Rustaveli INTL',
    iata: 'TBS',
    utc: '+4',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    runways: [{'id':'13R/31L', 'len':3000, 'apch':'ILS Cat III 13R/31L'}],
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 13/31',
          'ILS: RWY 13/31',
          'ATIS: 126.0 MHz',
          'コーカサス山脈に囲まれた盆地 – 地形進入注意',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: United Airports of Georgia +995-32-231-0601',
        ]
      },
    ]
  },

  UZTT: {
    fullName: 'TASHKENT, Islam Karimov INTL',
    iata: 'TAS',
    utc: '+5',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 10',
    prefRwy: 'Nil',
    runways: [{'id':'08L/26R', 'len':4000, 'apch':'ILS 08L/26R'}, {'id':'08R/26L', 'len':3905, 'apch':'ILS 08R/26L'}],
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 08/26',
          'ILS: RWY 08/26',
          'ATIS: 127.6 MHz',
          '⚠️ FIRコード注意: タシュケントFIRは UZTR（旧UTTR）。空港コードUZTTとは別',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Uzbekistan Airports +998-71-140-2800',
        ]
      },
    ]
  },

  UHWW: {
    fullName: 'VLADIVOSTOK, Vladivostok INTL',
    iata: 'VVO',
    utc: '+10',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    runways: [{'id':'07R/25L', 'len':3500, 'apch':'ILS 07R/25L'}],
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 07/25',
          'ILS: RWY 07/25',
          'ATIS: 126.5 MHz',
          '⚠️ ロシア空域: 制裁状況・過飛行許可の最新情報確認必須',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Vladivostok Air +7-423-230-4444',
        ]
      },
    ]
  },

  UHHH: {
    fullName: 'KHABAROVSK, Novy',
    iata: 'KHV',
    utc: '+10',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    runways: [{'id':'05L/23R', 'len':3500, 'apch':'ILS 05L/23R'}, {'id':'05R/23L', 'len':4000, 'apch':'ILS 05R/23L'}],
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 05/23, 17/35',
          'ILS: RWY 05/23',
          'ATIS: 126.0 MHz',
          '⚠️ ロシア空域: 制裁状況・過飛行許可の最新情報確認必須',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Khabarovsk Airport +7-4212-795-757',
        ]
      },
    ]
  },

  UHMM: {
    fullName: 'MAGADAN, Sokol',
    iata: 'GDX',
    utc: '+11',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 8',
    prefRwy: 'Nil',
    runways: [{'id':'10/28', 'len':3452, 'apch':'ILS 10/28'}],
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 10/28',
          'ILS: RWY 10/28',
          '冬季: 極寒（-50℃以下になることあり）– 除氷・エンジン始動注意',
          '⚠️ ロシア空域: 制裁状況・過飛行許可確認必須',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Magadan Airport +7-4132-620-190',
        ]
      },
    ]
  },

  UHPP: {
    fullName: 'PETROPAVLOVSK-KAMCHATSKY, Yelizovo',
    iata: 'PKC',
    utc: '+12',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    runways: [{'id':'16L/34R', 'len':3400, 'apch':'ILS Cat II 16L/34R'}, {'id':'16R/34L', 'len':3400, 'apch':'ILS Cat II 16R/34L'}],
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 16/34',
          'ILS: RWY 16/34',
          '火山地帯（カムチャッカ半島）– 火山灰ASHTAM確認必須',
          '⚠️ ロシア空域: 制裁状況・過飛行許可確認必須',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Yelizovo Airport +7-4152-411-339',
        ]
      },
    ]
  },

  UHSS: {
    fullName: 'YUZHNO-SAKHALINSK, Khomutovo',
    iata: 'UUS',
    utc: '+11',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 8',
    prefRwy: 'Nil',
    runways: [{'id':'01/19', 'len':3400, 'apch':'ILS 01/19'}],
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 01/19',
          'ILS: RWY 01/19',
          '冬季: 積雪・除雪作業に注意。北海道に近接',
          '⚠️ ロシア空域: 制裁状況・過飛行許可確認必須',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Yuzhno-Sakhalinsk Airport +7-4242-463-463',
        ]
      },
    ]
  },

  UHMA: {
    fullName: 'ANADYR, Ugolny',
    iata: 'DYR',
    utc: '+12',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 7',
    prefRwy: 'Nil',
    runways: [{'id':'02/20', 'len':3500, 'apch':'ILS Cat II 02/20'}],
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 05/23',
          '極北: 冬季は-40℃以下。凍結跑道・視程障害に注意',
          '⚠️ ロシア空域: 制裁状況・過飛行許可確認必須',
          'ベーリング海沿岸 – アラスカ代替として使用可能性',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Ugolny Airport +7-42722-6-33-00',
        ]
      },
    ]
  },

  UEEE: {
    fullName: 'YAKUTSK',
    iata: 'YKS',
    utc: '+9',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 8',
    prefRwy: 'Nil',
    runways: [{'id':'05R/23L', 'len':3400, 'apch':'ILS 05R/23L'}],
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 04/22, 13/31',
          'ILS: RWY 22/04',
          '世界最寒の都市のひとつ（-50℃以下）– 極寒時のパフォーマンス注意',
          '⚠️ ロシア空域: 制裁状況・過飛行許可確認必須',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Yakutsk Airport +7-4112-392-192',
        ]
      },
    ]
  },

  UIBB: {
    fullName: 'BRATSK',
    iata: 'BTK',
    utc: '+8',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 7',
    prefRwy: 'Nil',
    runways: [{'id':'12/30', 'len':3160, 'apch':'ILS Cat II 12/30'}],
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 11/29',
          '冬季: 極寒・積雪',
          '⚠️ ロシア空域: 制裁状況・過飛行許可確認必須',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Bratsk Airport +7-3953-412-222',
        ]
      },
    ]
  },

  UIII: {
    fullName: 'IRKUTSK',
    iata: 'IKT',
    utc: '+8',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    runways: [{'id':'12/30', 'len':3565, 'apch':'ILS Cat II 12/30'}],
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 12/30',
          'ILS: RWY 12/30',
          'ATIS: 126.0 MHz',
          'バイカル湖近接 – 濃霧発生注意',
          '⚠️ ロシア空域: 制裁状況・過飛行許可確認必須',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Irkutsk Airport +7-3952-200-660',
        ]
      },
    ]
  },

  UNNT: {
    fullName: 'NOVOSIBIRSK, Tolmachevo',
    iata: 'OVB',
    utc: '+7',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 10',
    prefRwy: 'Nil',
    runways: [{'id':'07/25', 'len':3597, 'apch':'ILS Cat II 07/25'}, {'id':'16/34', 'len':3602, 'apch':'ILS Cat II 16/34'}],
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 07L/25R, 07R/25L',
          'ILS: RWY 07L/R, 25L/R',
          'ATIS: 128.5 MHz',
          '⚠️ ロシア空域: 制裁状況・過飛行許可確認必須',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Tolmachevo Airport +7-383-216-9510',
        ]
      },
    ]
  },

  UNKL: {
    fullName: 'KRASNOYARSK, Yemelyanovo',
    iata: 'KJA',
    utc: '+7',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    runways: [{'id':'11/29', 'len':3700, 'apch':'ILS 11/29'}],
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 07/25',
          'ILS: RWY 07/25',
          '冬季: 極寒・積雪',
          '⚠️ ロシア空域: 制裁状況・過飛行許可確認必須',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Yemelyanovo Airport +7-391-226-8181',
        ]
      },
    ]
  },

  UNAA: {
    fullName: 'ABAKAN',
    iata: 'ABA',
    utc: '+7',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 7',
    prefRwy: 'Nil',
    runways: [{'id':'02/20', 'len':3250, 'apch':'ILS Cat II 02/20'}],
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 12/30',
          '⚠️ ロシア空域: 制裁状況・過飛行許可確認必須',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Abakan Airport +7-3902-220-270',
        ]
      },
    ]
  },

  USSS: {
    fullName: 'YEKATERINBURG, Koltsovo',
    iata: 'SVX',
    utc: '+5',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 10',
    prefRwy: 'Nil',
    runways: [{'id':'08L/26R', 'len':2497, 'apch':'ILS 08L/26R'}, {'id':'08R/26L', 'len':3025, 'apch':'ILS 08R/26L'}],
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 08L/26R, 08R/26L',
          'ILS: RWY 08L/R, 26L/R',
          'ATIS: 128.1 MHz',
          '⚠️ ロシア空域: 制裁状況・過飛行許可確認必須',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Koltsovo Airport +7-343-226-8000',
        ]
      },
    ]
  },

  USCC: {
    fullName: 'CHELYABINSK, Balandino',
    iata: 'CEK',
    utc: '+5',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 8',
    prefRwy: 'Nil',
    runways: [{'id':'09/27', 'len':3200, 'apch':'ILS Cat II 09/27'}],
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 09/27',
          '⚠️ ロシア空域: 制裁状況・過飛行許可確認必須',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Chelyabinsk Airport +7-351-773-5070',
        ]
      },
    ]
  },

  UWWW: {
    fullName: 'SAMARA, Kurumoch',
    iata: 'KUF',
    utc: '+4',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    runways: [{'id':'05/23', 'len':2554, 'apch':'ILS 05/23'}, {'id':'15/33', 'len':3001, 'apch':'ILS 15/33'}],
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 05/23',
          'ILS: RWY 05/23',
          '⚠️ ロシア空域: 制裁状況・過飛行許可確認必須',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Kurumoch Airport +7-846-279-8000',
        ]
      },
    ]
  },

  UWUU: {
    fullName: 'UFA',
    iata: 'UFA',
    utc: '+5',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    runways: [{'id':'14R/32L', 'len':3761, 'apch':'ILS 14R/32L'}],
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 03/21',
          'ILS: RWY 03/21',
          '⚠️ ロシア空域: 制裁状況・過飛行許可確認必須',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Ufa Airport +7-347-229-3401',
        ]
      },
    ]
  },

  USRR: {
    fullName: 'SURGUT',
    iata: 'SGC',
    utc: '+5',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 8',
    prefRwy: 'Nil',
    runways: [{'id':'07/25', 'len':2790, 'apch':'ILS Cat II 07/25'}],
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 08/26',
          '冬季: 極寒・積雪',
          '⚠️ ロシア空域: 制裁状況・過飛行許可確認必須',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Surgut Airport +7-3462-529-800',
        ]
      },
    ]
  },

  USTR: {
    fullName: 'TYUMEN, Roshchino',
    iata: 'TJM',
    utc: '+5',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 8',
    prefRwy: 'Nil',
    runways: [{'id':'03/21', 'len':3003, 'apch':'ILS 03/21'}, {'id':'12/30', 'len':2704, 'apch':'ILS Cat II 12/30'}],
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 09/27',
          '⚠️ ロシア空域: 制裁状況・過飛行許可確認必須',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Roshchino Airport +7-3452-79-3080',
        ]
      },
    ]
  },

  ULMM: {
    fullName: 'MURMANSK',
    iata: 'MMK',
    utc: '+3',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 8',
    prefRwy: 'Nil',
    runways: [{'id':'13/31', 'len':2500, 'apch':'ILS 13/31'}],
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 13/31',
          '北極圏内 – 冬季は極夜、夏季は白夜',
          '⚠️ GNSS jamming: ロシア北西部で頻繁',
          '⚠️ ロシア空域: 制裁状況・過飛行許可確認必須',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Murmansk Airport +7-8152-258-000',
        ]
      },
    ]
  },

  HUEN: {
    fullName: 'ENTEBBE, Entebbe INTL',
    iata: 'EBB',
    utc: '+3',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    runways: [{'id':'17/35', 'len':3658, 'apch':'ILS 17/35'}, {'id':'12/30', 'len':2408, 'apch':'ILS Cat II 12/30'}],
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 12/30, 17/35',
          'ILS: RWY 12/30',
          'ATIS: 128.4 MHz',
          'ヴィクトリア湖岸（標高3,782ft）– 高高度パフォーマンス注意',
          '熱帯気候 – スコールによる突発的な視程低下',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Entebbe Airport +256-414-320-512',
        ]
      },
    ]
  },

  EDDK: {
    fullName: 'COLOGNE-BONN, Konrad Adenauer',
    iata: 'CGN',
    utc: '+1/+2(DST)',
    ops: 'H24',
    curfew: '2300-0500L（一部制限）',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    runways: [{'id':'06/24', 'len':2459, 'apch':'ILS 06/24'}, {'id':'13L/31R', 'len':3815, 'apch':'ILS Cat III 13L/31R'}],
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 14L/32R, 14R/32L',
          'ILS: 主要RWYに装備',
          'ATIS: 126.125 MHz',
          '夜間: 一部制限あり（German QC制度）',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Cologne Bonn Airport +49-2203-40-4001',
        ]
      },
    ]
  },

  ENBO: {
    fullName: 'BODØ',
    iata: 'BOO',
    utc: '+1/+2(DST)',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 8',
    prefRwy: 'Nil',
    runways: [{'id':'07/25', 'len':2794, 'apch':'ILS Cat II 07/25'}],
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 07/25',
          'ILS: RWY 07/25',
          'ATIS: 126.0 MHz',
          '北極圏近く – 冬季は悪天候・積雪',
          'ENOB（Bodo Oceanic FIR）の管制センターが所在',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Avinor Bodø Airport +47-75-52-5000',
        ]
      },
    ]
  },

  BIKF: {
    fullName: 'KEFLAVIK, Keflavik INTL',
    iata: 'KEF',
    utc: '+0(UTC年間固定)',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 10',
    prefRwy: 'Nil',
    runways: [{'id':'01/19', 'len':3054, 'apch':'ILS 01/19'}, {'id':'10/28', 'len':3065, 'apch':'ILS 10/28'}],
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 02/20, 10/28',
          'ILS: RWY 02/20, 10/28',
          'ATIS: 119.7 MHz',
          '強風・横風が多い（大西洋岸）– 最大Crosswind制限確認',
          'アイスランド: UTC年間固定（DST変更なし）',
          'NAT HLA: BIRD FIRの主要空港 – FANS-1/A logon BIRD',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Isavia +354-425-0600',
        ]
      },
    ]
  },

  LGAV: {
    fullName: 'ATHENS, Eleftherios Venizelos',
    iata: 'ATH',
    utc: '+2/+3(DST)',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 10',
    prefRwy: 'Nil',
    runways: [{'id':'03L/21R', 'len':3800, 'apch':'ILS 03L/21R'}, {'id':'03R/21L', 'len':4000, 'apch':'ILS 03R/21L'}],
    sections: [
      {
        title: 'TWY情報',
        items: [
          'RWY: 03L/21R, 03R/21L',
          'ILS: RWY 03L/R, 21L/R',
          'ATIS: 132.375 MHz',
        ]
      },
      {
        title: '到着',
        items: [
          '海からの進入 – サロニカ湾上空',
          '夏季: 強い日射による乱流（昼間）',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Athens International Airport +30-210-353-0000',
        ]
      },
    ]
  },

  LHBP: {
    fullName: 'BUDAPEST, Liszt Ferenc INTL',
    iata: 'BUD',
    utc: '+1/+2(DST)',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    runways: [{'id':'13L/31R', 'len':3707, 'apch':'ILS Cat II 13L/31R'}, {'id':'13R/31L', 'len':3010, 'apch':'ILS Cat III 13R/31L'}],
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 13L/31R, 13R/31L',
          'ILS: RWY 13L/R, 31L/R',
          'ATIS: 126.15 MHz',
          'LHCC FIR管轄 – CPDLC logon LHCC',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Budapest Airport +36-1-296-9696',
        ]
      },
    ]
  },

  LIMC: {
    fullName: 'MILAN, Malpensa',
    iata: 'MXP',
    utc: '+1/+2(DST)',
    ops: 'H24',
    curfew: '2300-0600L（Night Restrictions）',
    fuel: 'JET-A1',
    rffs: 'Cat 10',
    prefRwy: 'Nil',
    runways: [{'id':'17L/35R', 'len':3920, 'apch':'ILS Cat III 17L/35R'}, {'id':'17R/35L', 'len':3920, 'apch':'ILS Cat III 17R/35L'}],
    sections: [
      {
        title: 'TWY情報',
        items: [
          'RWY: 17L/35R, 17R/35L',
          'T1（国際）/ T2（LCCほか）– ターミナル確認',
          '冬季: 霧（Po平原）– LVP頻繁',
        ]
      },
      {
        title: '到着',
        items: [
          'ILS: RWY 17L/R, 35L/R',
          'ATIS: 127.8 MHz',
          '霧: 11月〜2月に濃霧多発 – CAT IIIb対応確認',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: SEA Aeroporti +39-02-7485-2200',
        ]
      },
    ]
  },

  LBSF: {
    fullName: 'SOFIA',
    iata: 'SOF',
    utc: '+2/+3(DST)',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    runways: [{'id':'09/27', 'len':3600, 'apch':'ILS Cat II 09/27'}],
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 09/27',
          'ILS: RWY 09/27',
          'ATIS: 126.575 MHz',
          '標高1,742ft – パフォーマンス計算注意',
          'バルカン山脈近接 – 進入時の地形注意',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Sofia Airport +359-2-937-2211',
        ]
      },
    ]
  },

  CYWG: {
    fullName: 'WINNIPEG, James Armstrong Richardson INTL',
    iata: 'YWG',
    utc: '-6/-5(DST)',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    runways: [{'id':'13/31', 'len':2695, 'apch':'ILS 13/31'}, {'id':'18/36', 'len':3353, 'apch':'ILS Cat II 18/36'}],
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 13/31, 18/36',
          'ILS: 主要RWYに装備',
          'ATIS: 132.95 MHz',
          '冬季: 極寒（-40℃以下）– 除氷・エンジン始動注意',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Winnipeg Airports Authority +1-204-987-9400',
        ]
      },
    ]
  },

  CYXY: {
    fullName: 'WHITEHORSE, Erik Nielsen INTL',
    iata: 'YXY',
    utc: '-7(PST 年間固定)',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 7',
    prefRwy: 'Nil',
    runways: [{'id':'14L/32R', 'len':2011, 'apch':null}, {'id':'14R/32L', 'len':2895, 'apch':'ILS 14R/32L'}],
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 13L/31R',
          'ILS: RWY 13L/31R',
          'ATIS: 132.2 MHz',
          '北方空港 – 冬季は-40℃以下、白夜・極夜あり',
          'ユーコン準州: UTC-7年間固定（DST変更なし）',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Whitehorse International Airport +1-867-667-8440',
        ]
      },
    ]
  },

  CYZF: {
    fullName: 'YELLOWKNIFE',
    iata: 'YZF',
    utc: '-7/-6(DST)',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 7',
    prefRwy: 'Nil',
    runways: [{'id':'10/28', 'len':1524, 'apch':null}, {'id':'16/34', 'len':2286, 'apch':'ILS Cat II 16/34'}],
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 10/28, 14/32',
          'ILS: RWY 10/28',
          'ATIS: 132.7 MHz',
          '極北 – 冬季は-50℃以下になることあり',
          'Northern Canada極地代替空港',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Yellowknife Airport +1-867-920-3477',
        ]
      },
    ]
  },

  CYFB: {
    fullName: 'IQALUIT',
    iata: 'YFB',
    utc: '-5/-4(DST)',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 7',
    prefRwy: 'Nil',
    runways: [{'id':'16/34', 'len':2623, 'apch':'ILS Cat II 16/34'}],
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 09/27',
          'ILS: RWY 09/27',
          'バフィン島 – 北極圏内。吹雪・Whiteout注意',
          '北大西洋横断ルート（CZQO）の緊急代替空港として機能',
          '燃料・整備: 限定的 – 事前調整推奨',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Iqaluit Airport +1-867-979-0801',
        ]
      },
    ]
  },

  KBFI: {
    fullName: 'SEATTLE, Boeing Field / King County INTL',
    iata: 'BFI',
    utc: '-8/-7(DST)',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 8',
    prefRwy: 'Nil',
    runways: [{'id':'14R/32L', 'len':3050, 'apch':'ILS 14R/32L'}, {'id':'14L/32R', 'len':1131, 'apch':null}],
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 13L/31R, 13R/31L',
          'ILS: RWY 13L/31R',
          'ATIS: 128.45 MHz',
          'SEA-TAC（KSEA）の南隣 – 非常に近接しているため空域注意',
          'ボーイング社製造・試験飛行拠点',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: King County International Airport +1-206-296-7380',
        ]
      },
    ]
  },

  KGEG: {
    fullName: 'SPOKANE, Spokane INTL',
    iata: 'GEG',
    utc: '-8/-7(DST)',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 8',
    prefRwy: 'Nil',
    runways: [{'id':'03/21', 'len':3353, 'apch':'ILS 03/21'}, {'id':'08/26', 'len':2499, 'apch':'ILS Cat II 08/26'}],
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 03/21, 07/25',
          'ILS: RWY 03/21, 07/25',
          'ATIS: 134.3 MHz',
          '冬季: 積雪・凍結注意',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Spokane Airport +1-509-455-6455',
        ]
      },
    ]
  },

  KPDX: {
    fullName: 'PORTLAND, Portland INTL',
    iata: 'PDX',
    utc: '-8/-7(DST)',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    runways: [{'id':'10R/28L', 'len':3353, 'apch':'ILS Cat III 10R/28L'}, {'id':'10L/28R', 'len':2995, 'apch':'ILS Cat II 10L/28R'}, {'id':'03/21', 'len':1829, 'apch':null}],
    sections: [
      {
        title: 'TWY情報',
        items: [
          'RWY: 03/21, 10L/28R, 10R/28L',
          'ILS: 主要RWYに装備',
          'ATIS: 128.35 MHz',
          'コロンビア川沿岸 – 濃霧・低視程注意',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Port of Portland +1-503-460-4234',
        ]
      },
    ]
  },

  KLAS: {
    fullName: 'LAS VEGAS, Harry Reid INTL',
    iata: 'LAS',
    utc: '-8/-7(DST)',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    runways: [{'id':'08L/26R', 'len':4522, 'apch':'ILS Cat II 08L/26R'}, {'id':'08R/26L', 'len':3208, 'apch':'ILS 08R/26L'}, {'id':'01L/19R', 'len':2978, 'apch':'ILS Cat II 01L/19R'}, {'id':'01R/19L', 'len':2978, 'apch':'ILS 01R/19L'}],
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 01L/19R, 01R/19L, 08L/26R, 08R/26L',
          'ILS: 全主要RWYに装備',
          'ATIS: 132.0 MHz',
          '標高2,181ft – 夏季の高温時（45℃超）はパフォーマンス低下注意',
          '夏季Hot & High: Performance Chart確認必須',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Clark County Department of Aviation +1-702-261-5211',
        ]
      },
    ]
  },

  KPHX: {
    fullName: 'PHOENIX, Sky Harbor INTL',
    iata: 'PHX',
    utc: '-7(MST 年間固定)',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 10',
    prefRwy: 'Nil',
    runways: [{'id':'08/26', 'len':3502, 'apch':'ILS Cat II 08/26'}, {'id':'07L/25R', 'len':3139, 'apch':'ILS 07L/25R'}, {'id':'07R/25L', 'len':2377, 'apch':'ILS 07R/25L'}],
    sections: [
      {
        title: 'TWY情報',
        items: [
          'RWY: 07L/25R, 07R/25L, 08/26',
          'ILS: 全主要RWYに装備',
          'ATIS: 132.85 MHz',
          '標高1,135ft。夏季は50℃超 – Hot & High',
          'アリゾナ州: UTC-7年間固定（DST変更なし）',
        ]
      },
      {
        title: '特記事項',
        items: [
          '夏季高温: 気温が高いとV速度・クライムパフォーマンスに大きく影響',
          '砂嵐（Haboob）: 視程ゼロになることあり – SIGMET/METAR確認',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: City of Phoenix Aviation Department +1-602-273-3300',
        ]
      },
    ]
  },

  KABQ: {
    fullName: 'ALBUQUERQUE, Sunport INTL',
    iata: 'ABQ',
    utc: '-7/-6(DST)',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 8',
    prefRwy: 'Nil',
    runways: [{'id':'08/26', 'len':4204, 'apch':'ILS Cat II 08/26'}, {'id':'03/21', 'len':3048, 'apch':'ILS 03/21'}, {'id':'12/30', 'len':1829, 'apch':'ILS Cat II 12/30'}],
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 03/21, 08/26',
          'ILS: 主要RWYに装備',
          'ATIS: 135.1 MHz',
          '標高5,355ft（1,632m）– 高標高によるパフォーマンス注意（デンバーに次ぐ高高度）',
          'ロッキー山脈近接 – 山岳波（Mountain Wave）注意',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Albuquerque International Sunport +1-505-244-7700',
        ]
      },
    ]
  },

  KSLC: {
    fullName: 'SALT LAKE CITY, International',
    iata: 'SLC',
    utc: '-7/-6(DST)',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 10',
    prefRwy: 'Nil',
    runways: [{'id':'16L/34R', 'len':3658, 'apch':'ILS Cat II 16L/34R'}, {'id':'16R/34L', 'len':3658, 'apch':'ILS Cat II 16R/34L'}, {'id':'17/35', 'len':2925, 'apch':'ILS 17/35'}, {'id':'14/32', 'len':1491, 'apch':'ILS 14/32'}],
    sections: [
      {
        title: 'TWY情報',
        items: [
          'RWY: 16L/34R, 16R/34L, 17/35',
          'ILS: 全主要RWYに装備',
          'ATIS: 132.8 MHz',
          '標高4,227ft – 高標高によるパフォーマンス注意',
          '冬季: 積雪（Wasatch山脈からの降雪）',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Salt Lake City Department of Airports +1-801-575-2400',
        ]
      },
    ]
  },

  KMCO: {
    fullName: 'ORLANDO, International',
    iata: 'MCO',
    utc: '-5/-4(DST)',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 10',
    prefRwy: 'Nil',
    runways: [{'id':'18R/36L', 'len':3659, 'apch':'ILS Cat II 18R/36L'}, {'id':'18L/36R', 'len':3659, 'apch':'ILS Cat II 18L/36R'}, {'id':'17R/35L', 'len':3048, 'apch':'ILS Cat III 17R/35L'}, {'id':'17L/35R', 'len':2744, 'apch':'ILS Cat III 17L/35R'}],
    sections: [
      {
        title: 'TWY情報',
        items: [
          'RWY: 17L/35R, 17R/35L, 18L/36R, 18R/36L',
          'ILS: 全主要RWYに装備',
          'ATIS: 124.6 MHz',
          '夏季: 午後の雷雨が非常に多い（フロリダ半島）',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Greater Orlando Aviation Authority +1-407-825-2001',
        ]
      },
    ]
  },

  KMIA: {
    fullName: 'MIAMI, International',
    iata: 'MIA',
    utc: '-5/-4(DST)',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 10',
    prefRwy: 'Nil',
    runways: [{'id':'09/27', 'len':3967, 'apch':'ILS Cat II 09/27'}, {'id':'08R/26L', 'len':3202, 'apch':'ILS Cat II 08R/26L'}, {'id':'12/30', 'len':2853, 'apch':'ILS Cat II 12/30'}, {'id':'08L/26R', 'len':2621, 'apch':'ILS 08L/26R'}],
    sections: [
      {
        title: 'TWY情報',
        items: [
          'RWY: 08L/26R, 08R/26L, 09/27, 12/30',
          'ILS: 全主要RWYに装備',
          'ATIS: 119.75 MHz',
          'Concourse複雑 – Ground Chart必須',
          'ハリケーンシーズン（6-11月）: 天候急変注意',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Miami-Dade Aviation Department +1-305-876-7000',
        ]
      },
    ]
  },

  KTPA: {
    fullName: 'TAMPA, International',
    iata: 'TPA',
    utc: '-5/-4(DST)',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    runways: [{'id':'01L/19R', 'len':3353, 'apch':'ILS Cat II 01L/19R'}, {'id':'01R/19L', 'len':2530, 'apch':'ILS 01R/19L'}, {'id':'10/28', 'len':2133, 'apch':null}],
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 01L/19R, 01R/19L',
          'ILS: 主要RWYに装備',
          'ATIS: 124.9 MHz',
          '夏季: 午後の雷雨（フロリダ）',
          'ハリケーンシーズン（6-11月）注意',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Tampa International Airport +1-813-870-8700',
        ]
      },
    ]
  },

  KCHS: {
    fullName: 'CHARLESTON, International',
    iata: 'CHS',
    utc: '-5/-4(DST)',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 8',
    prefRwy: 'Nil',
    runways: [{'id':'15/33', 'len':2744, 'apch':'ILS 15/33'}, {'id':'03/21', 'len':2134, 'apch':'ILS 03/21'}],
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 03/21, 15/33',
          'ILS: RWY 03/21, 15/33',
          'ATIS: 123.8 MHz',
          '旧空軍基地共用 – Charleston AFB隣接',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Charleston County Aviation Authority +1-843-767-7000',
        ]
      },
    ]
  },

  PANC: {
    fullName: 'ANCHORAGE, Ted Stevens INTL',
    iata: 'ANC',
    utc: '-9/-8(DST)',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 10',
    prefRwy: 'Nil',
    runways: [{'id':'07R/25L', 'len':3780, 'apch':'ILS Cat II 07R/25L'}, {'id':'07L/25R', 'len':3231, 'apch':'ILS 07L/25R'}, {'id':'15/33', 'len':3312, 'apch':'ILS 15/33'}],
    sections: [
      {
        title: 'TWY情報',
        items: [
          'RWY: 07L/25R, 07R/25L, 15/33',
          'ILS: 全主要RWYに装備',
          'ATIS: 119.0 MHz',
          '北太平洋路線の主要テクニカルストップ空港',
        ]
      },
      {
        title: '到着',
        items: [
          'PAZA FIR（Anchorage）管轄 – CPDLC logon PAZN',
          '冬季: 極寒・積雪・氷結跑道注意',
          '火山灰（アラスカ半島方面）: ASHTAM常時確認',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Ted Stevens Anchorage International Airport +1-907-266-2526',
        ]
      },
    ]
  },

  PAJN: {
    fullName: 'JUNEAU, Juneau INTL',
    iata: 'JNU',
    utc: '-9/-8(DST)',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 7',
    prefRwy: 'Nil',
    runways: [{'id':'08/26', 'len':2700, 'apch':'ILS Cat II 08/26'}],
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 08/26',
          'ILS: RWY 08/26',
          'ATIS: 132.45 MHz',
          '山に囲まれた複雑な地形 – 進入制限あり',
          '低雲・霧が多い（年間降水量多い）',
          '非精密進入が多い – 気象条件確認必須',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Juneau International Airport +1-907-789-7821',
        ]
      },
    ]
  },

  PAFA: {
    fullName: 'FAIRBANKS, Fairbanks INTL',
    iata: 'FAI',
    utc: '-9/-8(DST)',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 8',
    prefRwy: 'Nil',
    runways: [{'id':'02L/20R', 'len':3597, 'apch':'ILS Cat II 02L/20R'}],
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 02L/20R, 02R/20L',
          'ILS: RWY 02L/R, 20L/R',
          'ATIS: 132.75 MHz',
          '極寒: 冬季は-50℃以下になることあり',
          'エンジン始動・油圧系統・ブレーキへの影響に注意',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Fairbanks International Airport +1-907-474-2500',
        ]
      },
    ]
  },

  PAEI: {
    fullName: 'EIELSON AFB',
    iata: '—',
    utc: '-9/-8(DST)',
    ops: 'H24 (US Military)',
    curfew: 'Nil',
    fuel: 'JP-8 / JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    runways: [{'id':'14/32', 'len':4429, 'apch':'ILS 14/32'}],
    sections: [
      {
        title: '運用情報',
        items: [
          '米空軍アイールソン基地 – 民間機使用には事前許可必要',
          'RWY: 12/30',
          'フェアバンクスから約26nm南東',
          '極寒: 冬季は-50℃以下',
        ]
      },
      {
        title: '連絡先',
        items: [
          'Eielson AFB Command Post: +1-907-377-1110',
        ]
      },
    ]
  },

  PAED: {
    fullName: 'ANCHORAGE, Elmendorf AFB / JBER',
    iata: '—',
    utc: '-9/-8(DST)',
    ops: 'H24 (US Military)',
    curfew: 'Nil',
    fuel: 'JP-8 / JET-A1',
    rffs: 'Cat 10',
    prefRwy: 'Nil',
    runways: [{'id':'06/24', 'len':3048, 'apch':'ILS 06/24'}, {'id':'16/34', 'len':2284, 'apch':'ILS Cat II 16/34'}],
    sections: [
      {
        title: '運用情報',
        items: [
          '米空軍エルメンドルフ基地（JBER）– 民間機使用には事前許可必要',
          'RWY: 06/24',
          'Ted Stevens INTL（PANC）に隣接',
        ]
      },
      {
        title: '連絡先',
        items: [
          'JBER Command Post: +1-907-552-4113',
        ]
      },
    ]
  },

  PAKN: {
    fullName: 'KING SALMON',
    iata: 'AKN',
    utc: '-9/-8(DST)',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 7',
    prefRwy: 'Nil',
    runways: [{'id':'12/30', 'len':2713, 'apch':'ILS Cat II 12/30'}],
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 12/30',
          'ILS: RWY 12/30',
          'アラスカ半島南西部 – 太平洋横断ルートの緊急代替',
          '火山地帯近接（カトマイ等）– ASHTAM確認',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: King Salmon Airport +1-907-246-3909',
        ]
      },
    ]
  },

  PACD: {
    fullName: 'COLD BAY',
    iata: 'CDB',
    utc: '-10/-9(DST)',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 6',
    prefRwy: 'Nil',
    runways: [{'id':'15/33', 'len':3103, 'apch':'ILS 15/33'}, {'id':'08/26', 'len':1494, 'apch':'ILS Cat II 08/26'}],
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 01/19, 15/33',
          'アリューシャン列島入口付近 – 北太平洋横断の緊急代替空港',
          '強風・荒天が多い（アリューシャン低気圧の影響）',
          '施設: 限定的 – 燃料入手要確認',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Cold Bay Airport +1-907-532-2485',
        ]
      },
    ]
  },

  PASY: {
    fullName: 'EARECKSON AS (SHEMYA)',
    iata: 'SYA',
    utc: '-12/-11(DST)',
    ops: 'H24 (US Military)',
    curfew: 'Nil',
    fuel: 'JP-8 / JET-A1',
    rffs: 'Cat 8',
    prefRwy: 'Nil',
    runways: [{'id':'10/28', 'len':3049, 'apch':'ILS 10/28'}],
    sections: [
      {
        title: '運用情報',
        items: [
          '米空軍シェミア島基地 – 民間機使用には事前許可必要',
          'RWY: 10/28',
          'アリューシャン列島最西端近く – 北太平洋横断の重要代替空港',
          '強風・濃霧: 年間を通じて悪天候が多い',
          '⚠️ タイムゾーン: UTC-12（日付変更線付近）',
        ]
      },
      {
        title: '連絡先',
        items: [
          'Eareckson AS Operations: +1-907-392-3800',
        ]
      },
    ]
  },

  PGUM: {
    fullName: 'GUAM, A.B. Won Pat INTL',
    iata: 'GUM',
    utc: '+10(ChST 年間固定)',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 10',
    prefRwy: 'Nil',
    runways: [{'id':'06L/24R', 'len':3662, 'apch':'ILS Cat I 06L/24R'}, {'id':'06R/24L', 'len':3052, 'apch':'ILS 06R/24L'}],
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 06L/24R, 06R/24L',
          'ILS: RWY 06L/R, 24L/R',
          'ATIS: 127.1 MHz',
          '台風リスク: 6-12月（Super Typhoon多い）– SIGMET常時確認',
          'PHZH FIR（Honolulu）管轄',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: A.B. Won Pat International Airport +1-671-646-0300',
        ]
      },
    ]
  },

  PGUA: {
    fullName: 'ANDERSEN AFB (GUAM)',
    iata: '—',
    utc: '+10(ChST 年間固定)',
    ops: 'H24 (US Military)',
    curfew: 'Nil',
    fuel: 'JP-8 / JET-A1',
    rffs: 'Cat 10',
    prefRwy: 'Nil',
    runways: [{'id':'06R/24L', 'len':3409, 'apch':'ILS 06R/24L'}, {'id':'06L/24R', 'len':3218, 'apch':null}],
    sections: [
      {
        title: '運用情報',
        items: [
          '米空軍アンダーセン基地 – 民間機使用には事前許可必要',
          'RWY: 06L/24R, 06R/24L',
          'グアム北部 – Won Pat INTLの北約8nm',
          '台風: Super Typhoon通過時はNOTAM確認',
        ]
      },
      {
        title: '連絡先',
        items: [
          'Andersen AFB Command Post: +1-671-366-1110',
        ]
      },
    ]
  },

  PGSN: {
    fullName: 'SAIPAN, Francisco C. Ada INTL',
    iata: 'SPN',
    utc: '+10(ChST 年間固定)',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 8',
    prefRwy: 'Nil',
    runways: [{'id':'07/25', 'len':2652, 'apch':'ILS Cat II 07/25'}],
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 07/25',
          'ILS: RWY 07/25',
          'ATIS: 135.3 MHz',
          '台風リスク: 北マリアナ諸島 – SIGMET確認',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Commonwealth Ports Authority +1-670-664-3500',
        ]
      },
    ]
  },

  PKMJ: {
    fullName: 'MAJURO, Marshall Islands INTL',
    iata: 'MAJ',
    utc: '+12(MHT 年間固定)',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 7',
    prefRwy: 'Nil',
    runways: [{'id':'07/25', 'len':2407, 'apch':'ILS Cat II 07/25'}],
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 07/25',
          '標高: ほぼ海面レベル（最高点3m）– 海抜が非常に低い',
          'KZAK（Oakland Oceanic）FIR管轄',
          '施設: 限定的 – 燃料・整備事前確認',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Marshall Islands Airports Authority +692-625-3283',
        ]
      },
    ]
  },

  PKWA: {
    fullName: 'KWAJALEIN, Bucholz AAF',
    iata: 'KWA',
    utc: '+12(MHT 年間固定)',
    ops: 'H24 (US Military)',
    curfew: 'Nil',
    fuel: 'JP-8 / JET-A1',
    rffs: 'Cat 8',
    prefRwy: 'Nil',
    runways: [{'id':'06/24', 'len':2032, 'apch':null}],
    sections: [
      {
        title: '運用情報',
        items: [
          '米軍クワジェリン環礁 – 民間機使用には事前許可必要',
          'RWY: 06/24',
          'ミサイル試験場として使用 – NOTAMによる閉鎖あり',
          'KZAK（Oakland Oceanic）FIR管轄',
        ]
      },
      {
        title: '連絡先',
        items: [
          'Bucholz AAF Operations: +1-805-355-2000',
        ]
      },
    ]
  },

  PMDY: {
    fullName: 'MIDWAY ATOLL, Henderson Field',
    iata: 'MDY',
    utc: '-11(SST 年間固定)',
    ops: 'Limited',
    curfew: 'Nil',
    fuel: 'JET-A1（要事前手配）',
    rffs: 'Cat 5',
    prefRwy: 'Nil',
    runways: [{'id':'06/24', 'len':2409, 'apch':'ILS 06/24'}],
    sections: [
      {
        title: '運用情報',
        items: [
          '米魚類野生生物保護局管轄 – 通常は商業運航なし',
          'RWY: 06/24',
          '緊急時のみ使用 – 燃料・施設は非常に限定的',
          '事前許可（Prior Permission Required）必須',
          'KZAK（Oakland Oceanic）FIR管轄',
        ]
      },
      {
        title: '連絡先',
        items: [
          'Midway Atoll NWR: +1-808-220-2100',
        ]
      },
    ]
  },

  PWAK: {
    fullName: 'WAKE ISLAND, Wake Island Airfield',
    iata: 'AWK',
    utc: '+12(WAKT 年間固定)',
    ops: 'H24 (US Military)',
    curfew: 'Nil',
    fuel: 'JP-8（要事前手配）',
    rffs: 'Cat 7',
    prefRwy: 'Nil',
    runways: [{'id':'10/28', 'len':3000, 'apch':'ILS 10/28'}],
    sections: [
      {
        title: '運用情報',
        items: [
          '米軍ウェーク島 – 民間機緊急時は使用可能だが事前許可推奨',
          'RWY: 10/28',
          '太平洋横断ルートの中間点 – 重要な緊急代替',
          'KZAK（Oakland Oceanic）FIR管轄',
          '台風リスク: シーズン中は閉鎖になることあり',
        ]
      },
      {
        title: '連絡先',
        items: [
          'Wake Island Airfield Operations: +1-808-471-7110',
        ]
      },
    ]
  },

  AYPY: {
    fullName: 'PORT MORESBY, Jacksons INTL',
    iata: 'POM',
    utc: '+10(PGT 年間固定)',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    runways: [{'id':'14L/32R', 'len':2750, 'apch':'ILS 14L/32R'}],
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 14L/32R, 14R/32L',
          'ILS: RWY 14L/32R',
          'ATIS: 128.3 MHz',
          '熱帯気候 – 雷雨・積乱雲に注意',
          '標高: 146ft / Papua New Guinea YMMM FIR管轄',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: National Airports Corporation +675-324-5400',
        ]
      },
    ]
  },

  YPPH: {
    fullName: 'PERTH, International',
    iata: 'PER',
    utc: '+8(AWST 年間固定)',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 10',
    prefRwy: 'Nil',
    runways: [{'id':'03/21', 'len':3444, 'apch':'ILS Cat I 03/21'}, {'id':'06/24', 'len':2163, 'apch':null}],
    sections: [
      {
        title: 'TWY情報',
        items: [
          'RWY: 03/21, 06/24',
          'ILS: 主要RWYに装備',
          'ATIS: 126.1 MHz',
          '西オーストラリア州: UTC+8年間固定（DST変更なし）',
        ]
      },
      {
        title: '到着',
        items: [
          'インド洋沿岸 – 強い南西風（Fremantle Doctor）注意',
          'YMMM（Melbourne）FIR管轄',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Perth Airport +61-8-9478-8888',
        ]
      },
    ]
  },

  YPDN: {
    fullName: 'DARWIN, International',
    iata: 'DRW',
    utc: '+9:30(ACST 年間固定)',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    runways: [{'id':'11/29', 'len':3354, 'apch':'ILS 11/29'}, {'id':'18/36', 'len':1524, 'apch':'ILS Cat II 18/36'}],
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 11/29, 18/36',
          'ILS: RWY 11/29',
          'ATIS: 126.1 MHz',
          '北部準州: UTC+9:30年間固定（DST変更なし）',
          'モンスーンシーズン（11-4月）: 激しい雷雨・スコール注意',
          '軍用空港共用（RAAF Darwin）',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Darwin International Airport +61-8-8920-1811',
        ]
      },
    ]
  },

  YBTL: {
    fullName: 'TOWNSVILLE, Townsville INTL',
    iata: 'TSV',
    utc: '+10(AEST 年間固定)',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 8',
    prefRwy: 'Nil',
    runways: [{'id':'01/19', 'len':2438, 'apch':'ILS 01/19'}, {'id':'07/25', 'len':1100, 'apch':'ILS Cat II 07/25'}],
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 01/19',
          'ILS: RWY 01/19',
          'ATIS: 126.1 MHz',
          'クイーンズランド州: UTC+10年間固定（DST変更なし）',
          '軍用空港共用（RAAF Townsville）',
          'サイクロンシーズン（11-4月）注意',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Townsville Airport +61-7-4727-3211',
        ]
      },
    ]
  },

  // ── 新規追加 Contingency Airports (v75) ─────────────────────────

  RJAW: {
    fullName: '硫黄島, Iwo Jima (JMSDF)',
    iata: 'IWO',
    utc: '+9',
    ops: '軍用（JMSDF）。民間使用は事前許可要',
    curfew: '—',
    fuel: 'JET-A1（軍調整要）',
    rffs: 'Cat 7',
    prefRwy: 'Nil',
    runways: [{'id':'07/25', 'len':2652, 'apch':'ILS Cat II 07/25'}],
    sections: [
      {
        title: '運用情報',
        items: [
          'JMSDF（海上自衛隊）硫黄島航空基地',
          '緊急・ダイバート使用のみ。事前調整必須',
          'RWY: 08/26 (3,000m)',
          'NOTAM確認必須（訓練等による閉鎖あり）',
          '無人島：宿泊・地上支援なし',
        ]
      },
      {
        title: '連絡先',
        items: [
          'JMSDF 硫黄島基地 (緊急時): 121.5 MHz',
        ]
      },
    ]
  },

  ZSAM: {
    fullName: '厦門, Xiamen Gaoqi INTL',
    iata: 'XMN',
    utc: '+8（中国標準時、DST無し）',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 05/23, 24L/06R（第2滑走路）',
          'ILS: 全RWY',
          'ATIS: 127.65 MHz',
          '台湾海峡に近接。NOTAM/ATC指示厳守',
          '新ターミナル（T4）2025年開業',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: 厦門高崎空港 +86-592-573-0330',
        ]
      },
    ]
  },

  LTFM: {
    fullName: 'イスタンブール, Istanbul Airport',
    iata: 'IST',
    utc: '+3（TRT、DST無し）',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 10',
    prefRwy: 'Nil',
    runways: [{'id':'16L/34R', 'len':3750, 'apch':'ILS Cat II 16L/34R'}, {'id':'16R/34L', 'len':3750, 'apch':'ILS Cat II 16R/34L'}, {'id':'17L/35R', 'len':4100, 'apch':'ILS Cat III 17L/35R'}, {'id':'17R/35L', 'len':4100, 'apch':'ILS Cat III 17R/35L'}, {'id':'18/36', 'len':3060, 'apch':'ILS Cat II 18/36'}],
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 16L/34R, 16R/34L, 17L/35R, 17R/35L（6RWY計画、4本稼働）',
          'ATIS: 128.4 MHz',
          '欧州最大級のハブ。混雑注意',
          'トルコ: UTC+3年間固定（夏時間廃止）',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Istanbul Airport +90-212-444-1442',
        ]
      },
    ]
  },

  LTAC: {
    fullName: 'アンカラ, Esenboga INTL',
    iata: 'ESB',
    utc: '+3（TRT、DST無し）',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    runways: [{'id':'03L/21R', 'len':3750, 'apch':'ILS 03L/21R'}, {'id':'03R/21L', 'len':3750, 'apch':'ILS 03R/21L'}],
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 03L/21R, 03R/21L',
          'ILS: RWY 03R/21L',
          'ATIS: 126.2 MHz',
          '標高895m。冬季ブレーキング注意',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Esenboga Airport +90-312-590-4000',
        ]
      },
    ]
  },

  LTCE: {
    fullName: 'エルズルム, Erzurum Airport',
    iata: 'ERZ',
    utc: '+3（TRT、DST無し）',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 6',
    prefRwy: 'Nil',
    runways: [{'id':'08L/26R', 'len':3810, 'apch':'ILS 08L/26R'}, {'id':'08R/26L', 'len':3810, 'apch':'ILS 08R/26L'}],
    sections: [
      {
        title: '運用情報',
        items: [
          'RWY: 10/28 (3,000m)',
          '標高1,758m（高高度空港）。性能計算注意',
          '冬季: 着氷・積雪・吹雪。除雪対応あり',
          '東トルコ内陸部。山岳地形',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Erzurum Airport +90-442-235-5300',
        ]
      },
    ]
  },

  EGPH: {
    fullName: 'エディンバラ, Edinburgh Airport',
    iata: 'EDI',
    utc: '+0/+1（GMT/BST）',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    runways: [{'id':'06/24', 'len':2558, 'apch':'ILS Cat I 06/24'}],
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 06/24',
          'ILS: RWY 06/24',
          'ATIS: 131.35 MHz',
          'スコットランド主要国際空港',
          '低雲・霧・横風注意。冬季降雪あり',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Edinburgh Airport +44-844-448-8833',
        ]
      },
    ]
  },

  LOWW: {
    fullName: 'ウィーン, Vienna INTL (Schwechat)',
    iata: 'VIE',
    utc: '+1/+2（CET/CEST）',
    ops: 'H24',
    curfew: '夜間制限あり（22:00-06:00 LT）',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    runways: [{'id':'11/29', 'len':3500, 'apch':'ILS Cat III 11/29'}, {'id':'16/34', 'len':3600, 'apch':'ILS Cat II 16/34'}],
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 11/29, 16/34',
          'ILS: RWY 11, 16, 29, 34',
          'ATIS: 128.2 MHz',
          '欧州中央部ハブ。VDL Mode 2 CPDLC使用（LSAS/LOVV）',
          '夜間騒音規制: 22:00-06:00 原則禁止',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Vienna Airport +43-1-7007-22233',
        ]
      },
    ]
  },

  UKBB: {
    fullName: 'キーウ, Boryspil INTL',
    iata: 'KBP',
    utc: '+2/+3（EET/EEST）',
    ops: 'H24（ウクライナ戦時下。運航可否要確認）',
    curfew: '夜間飛行制限あり（戦時）',
    fuel: 'JET-A1（供給状況要確認）',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    runways: [{'id':'18L/36R', 'len':4000, 'apch':'ILS Cat II 18L/36R'}, {'id':'18R/36L', 'len':3500, 'apch':'ILS Cat II 18R/36L'}],
    sections: [
      {
        title: '運用情報',
        items: [
          '⚠️ ウクライナ: 2022年2月以降戦時状態',
          '現在民間航空は停止中（軍事使用）',
          'フライト前に最新NOTAMおよびNOTAM D確認必須',
          'RWY: 18L/36R, 18R/36L',
          'ILS: 全方向',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Boryspil Airport +380-44-364-4572',
        ]
      },
    ]
  },

  BGSF: {
    fullName: 'カンゲルルススアク, Kangerlussuaq Airport',
    iata: 'SFJ',
    utc: '-3/-2（WGT/WGST）',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 7',
    prefRwy: 'Nil',
    runways: [{'id':'09/27', 'len':2810, 'apch':'ILS Cat II 09/27'}],
    sections: [
      {
        title: '運用情報',
        items: [
          'RWY: 10/28 (2,799m)',
          'グリーンランド主要ダイバート空港（北極ルート）',
          '旧USAF Sondrestrom Air Base',
          '極地気象: 強風・吹雪・ホワイトアウト注意',
          '標高47m。周囲に山岳地形',
          '夏季は白夜。冬季は極夜',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Kangerlussuaq Airport +299-84-1098',
        ]
      },
    ]
  },

  KATL: {
    fullName: 'アトランタ, Hartsfield-Jackson Atlanta INTL',
    iata: 'ATL',
    utc: '-5/-4（EST/EDT）',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 10',
    prefRwy: 'Nil',
    runways: [{'id':'09L/27R', 'len':3776, 'apch':'ILS Cat III 09L/27R'}, {'id':'08R/26L', 'len':3048, 'apch':'ILS Cat II 08R/26L'}, {'id':'08L/26R', 'len':2743, 'apch':'ILS 08L/26R'}, {'id':'09R/27L', 'len':2743, 'apch':'ILS 09R/27L'}, {'id':'10/28', 'len':2743, 'apch':'ILS 10/28'}],
    sections: [
      {
        title: '到着',
        items: [
          'RWY: 08L/26R, 08R/26L, 09L/27R, 09R/27L, 10/28（5本）',
          'ATIS: 127.75 MHz（南）/ 135.0 MHz（北）',
          '世界最多旅客数ハブ。混雑注意',
          'デルタ航空ハブ。JAL提携便多数',
          '内陸空港: 雷雨・着氷・積雪注意',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Atlanta Hartsfield-Jackson +1-404-530-6600',
        ]
      },
    ]
  },

  KBIL: {
    fullName: 'ビリングス, Billings Logan INTL',
    iata: 'BIL',
    utc: '-7/-6（MST/MDT）',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 6',
    prefRwy: 'Nil',
    runways: [{'id':'10L/28R', 'len':3206, 'apch':'ILS Cat II 10L/28R'}, {'id':'07/25', 'len':1677, 'apch':'ILS Cat II 07/25'}],
    sections: [
      {
        title: '運用情報',
        items: [
          'RWY: 10L/28R, 10R/28L',
          'ILS: RWY 28R',
          'ATIS: 135.075 MHz',
          '標高1,088m（高高度空港）。性能計算注意',
          'モンタナ州北極ルートダイバート候補',
          '冬季: 積雪・着氷・吹雪注意',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Billings Logan Airport +1-406-247-8609',
        ]
      },
    ]
  },

  PHLI: {
    fullName: 'リフエ（カウアイ島）, Lihue Airport',
    iata: 'LIH',
    utc: '-10（HST、DST無し）',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 7',
    prefRwy: 'Nil',
    runways: [{'id':'03/21', 'len':1981, 'apch':'ILS 03/21'}, {'id':'17/35', 'len':1981, 'apch':null}],
    sections: [
      {
        title: '運用情報',
        items: [
          'RWY: 03/21, 17/35',
          'ILS: RWY 03',
          'ATIS: 127.05 MHz',
          'カウアイ島（ハワイ諸島最古）唯一の空港',
          '太平洋ダイバート候補（PHNL混雑時）',
          '熱帯性気候: スコールによる視程低下注意',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Lihue Airport +1-808-274-3800',
        ]
      },
    ]
  },

  PTRO: {
    fullName: 'パラオ, Roman Tmetuchl INTL',
    iata: 'ROR',
    utc: '+9（PWT、DST無し）',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 6',
    prefRwy: 'Nil',
    runways: [{'id':'09/27', 'len':2195, 'apch':'ILS Cat II 09/27'}],
    sections: [
      {
        title: '運用情報',
        items: [
          'RWY: 09/27 (2,012m)',
          'ILS: RWY 09',
          'ATIS: 125.9 MHz',
          '西太平洋Contingency Airport',
          'パラオ共和国唯一の国際空港',
          '熱帯性気候。スコール・積乱雲注意',
          '燃料事前手配推奨（供給量制限の場合あり）',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Palau Airport +680-488-2422',
        ]
      },
    ]
  },

  YBAS: {
    fullName: 'アリススプリングス, Alice Springs Airport',
    iata: 'ASP',
    utc: '+9:30（ACST、DST無し）',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 6',
    prefRwy: 'Nil',
    runways: [{'id':'12/30', 'len':2438, 'apch':'ILS Cat II 12/30'}, {'id':'17/35', 'len':1133, 'apch':null}],
    sections: [
      {
        title: '運用情報',
        items: [
          'RWY: 12/30 (1,762m)',
          'ILS: RWY 12',
          'ATIS: 127.65 MHz',
          '標高545m。オーストラリア中央部内陸空港',
          '極端な大陸性気候: 夏季50℃超、冬季0℃以下',
          '高温時のペイロード/性能制限注意',
          '軍共用（RAAF Joint Strike Fighter基地）',
        ]
      },
      {
        title: '連絡先',
        items: [
          'APT: Alice Springs Airport +61-8-8951-1211',
        ]
      },
    ]
  },

};
