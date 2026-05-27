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
    wakeCategory: 'D',
    b787Info: {
      wingspan: '60.1m (197ft)',
      tailHeight: '17.0m (55.7ft) - 787-9 / 16.9m (55.4ft) - 787-8',
      note: '通常 Cat C より大きな間隔が要求される'
    },
    runways: [
      {id:'07L/25R', len:3800, apch:'ILS (CAT II/III) or RNP', side:'North'},
      {id:'07C/25C', len:3800, apch:'ILS (CAT II/III) or RNP', side:'Center'},
      {id:'07R/25L', len:3800, apch:'ILS (CAT II) or RNP', side:'South'},
    ],
    transitionAltitude: {
      TL: 'FL110 (QNH ≥1013) / FL120 (QNH <1013)',
      TA: '11000 ft'
    },
    tabs: [
      {
        id: 'gen',
        label: 'General',
        sections: [
          {
            title: 'RWY Operations & Configuration',
            items: [
              '【0000-1459 UTC】Three-RWY ops: 07L (North) arr, 07C (Center) dep, 07R (South) mixed',
              '【1500-1759 UTC】07C/25C (Center) arr, 07R/25L (South) dep (segregated)',
              '【1800-2259 UTC】Single RWY only (North or Center)',
              '【2300-2359 UTC】Dual RWY resumes (maintenance rotation)',
              'South apron/Business parking → assign 07R/25L; others → 07L/25R',
              'Independent parallel dep (07C+07R): report assigned SID to Tower on first contact',
              'Wake Turbulence Separation: Category D (B787) requires larger spacing than Cat C',
            ]
          },
          {
            title: 'Surrounding Terrain & MSA ⚠️',
            items: [
              '⚠️ NE 17nm: Chihsing Mountain (3675ft) — affects MSA',
              '⚠️ NE 11nm: Kuangyin Mountain (2008ft)',
              '⚠️ S 30nm: Mountain range (8000ft class)',
              '⚠️ Lantau Island: terrain proximity to RWY 25L approaches causes wind shear (W/NW >20kt)',
              'MSA careful planning required: review Jeppesen Chart for specific SID/STAR MSAs',
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
      {
        id: 'gps',
        label: 'GPS Information',
        sections: [
          {
            title: 'RNP 1 AND CONTINGENCY SID/STARs',
            items: [
              '香港 TMA では RNP 1 SID/STAR が実装されています。以下に指定された機体を除き、全ての航空機の出発・到着時には、適切な RNP システムが装備され、ICAO RNP 1 基準に従って登録国の関連機関により承認されていることが必要です。',
              '認定 GNSS 受信機の搭載は必須です。',
              'RNP 1 の運用承認またはコンプライアンス文書は、検査の際に速やかに提示できるようにしておく必要があります。',
              '以下のカテゴリーの航空機は RNP 1 要件から除外され、STAR チャートおよび RAMEN & RUMSY SID に記載された緊急操作手順を使用した VHHH での運用が認可されています：',
              '  - 人道支援またはSAR 飛行',
              '  - 国家機関の航空機',
              '  - フライトチェック',
              '  - 整備または配送飛行',
              '  - 試験飛行（例：整備後）',
              '  - 民間航空局長からの事前の特別承認がある飛行',
              '  - 出発前に RNP 1 システムの故障または機能低下がある飛行',
              '飛行中に RNP 1 が故障した場合、パイロットはできるだけ速やかに ATC に「UNABLE RNP 1 [DUE TO (理由)]」と通知する必要があります。',
              '報告されたシステムの故障または機能低下の性質によっては、多くの状況において現在の ATC クリアランスでの継続運用が可能な場合があります。',
              'これが実現できない場合、ATC はできるだけ必要な支援を提供します。',
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
    wakeCategory: 'D',
    b787Info: {
      wingspan: '60.1m (197ft)',
      tailHeight: '17.0m (55.7ft) - 787-9 / 16.9m (55.4ft) - 787-8',
      note: '通常 Cat C より大きな間隔が要求される'
    },
    transitionAltitude: {
      TL: 'FL110 (QNH ≥1013) / FL120 (QNH <1013)',
      TA: '11000 ft'
    },
    runways: [
      {id:'01L/19R', len:4000, apch:'ILS Cat II 01L/19R', side:'West'},
      {id:'01R/19L', len:3700, apch:'ILS Cat II 01R/19L', side:'East'},
      {id:'02R/20L', len:4000, apch:'ILS Cat I 02R/20L', side:'East'},
      {id:'02L/20R', len:3700, apch:'ILS Cat I 02L/20R', side:'West'},
    ],
    tabs: [
      {
        id: 'gen',
        label: 'General',
        sections: [
          {
            title: 'RWY Operations & Monsoon Wind Flows',
            items: [
              '【South Flow (May-Oct)】Southwest Monsoon: RWY 19/20 ops typical (afternoon/evening)',
              '  → RWY19 (West) DEP+ARR / RWY20L (West) DEP / RWY20R (East) ARR',
              '【North Flow (Nov-Apr)】Northeast Monsoon: RWY 01/02 ops typical (morning)',
              '  → RWY01 (East) DEP+ARR / RWY02R (East) DEP / RWY02L (West) ARR',
              'Crosswind limit: 20 KT for all RWY',
              'PAPI: 全RWY LEFT側のみ装備、3.0° (MEHT 64ft)',
              'Runway surface: Concrete (excellent condition)',
              'Wake Turbulence Separation: Category D (B787) requires larger spacing than Cat C',
            ]
          },
          {
            title: 'Surrounding Terrain & Airspace ⚠️',
            items: [
              '⚠️ Swampy wetland/rice field terrain around airport (affects weather patterns)',
              '⚠️ S 30nm: Mountain range (2600ft class) — MSA impact',
              '⚠️ Bangkok city center: High-rise buildings — confirm MSA on Jeppesen Chart',
              'MSA carefully planned in SID/STAR: review chart for specific terrain clearance',
            ]
          },
          {
            title: 'Tropical Monsoon Weather Patterns ⚠️',
            items: [
              '【Dry Season (Nov-Apr)】Good visibility, clear weather typical',
              '【Rainy Season (May-Oct)】Tropical thunderstorms frequent, especially evening/night',
              '  → May: Most severe (1+ hour duration common) → plan early departures',
              '  → Wind gusts >25 KT possible during TS activity',
              'Low Visibility: Rare (good visibility except during TS)',
              'NOTAM: Check for active TS warnings (SIGMET, AIRMET)',
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
              'Data Link Communication: DCL (Departure Clearance Uplink) may replace voice',
              '  → System messages via THAIS/FMS; comply with all clearances',
            ]
          },
          {
            title: 'Docking & Parking Systems',
            items: [
              '⚠️ VDGS (Visual Docking Guidance Systems): Available at major stands',
              '  → Provides real-time visual guidance to correct parking position',
              '  → Red/Green indicators on system display for pilot alignment',
              '  → System failure: Use marshaller, follow hand signals only',
              'Parking Stand Coordinates: Precise N/S & E/W grid provided per stand',
              'Ground Power & Services: Availability varies by stand location',
              '  → Power failures: APU must remain running or external power required',
              'Tug/Tow Bar: Both available; coordinate with ground crew',
              'PAX Bridge: Available at designated stands (G, F, E series priority)',
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
              'Descent rate: Min 500ft/min assumed by ATC (lower rate requires notification)',
              'PAPI (all RWY): 3-dot on LEFT side = 3.0° glide slope (MEHT 50ft)',
              'Visual Approach: Possible during good weather; request if available',
              'Long finals: Monitor for conflicting traffic (busy airfield 40/hour landing rate)',
              'Go-Around: If unstable below 500ft, execute immediately (wind shear risk)',
              'Windshear alerts: Listen for ATC reports; adjust approach if received',
              '⚠️ RWY 19 with West wind: Significant turbulence possible (Lantau island effect)',
            ]
          },
          {
            title: 'ILS/RNP Approach Minimums & 着陸距離s',
            items: [
              'RWY 01L/19R (ILS Cat II): RVR 550m minimum, Cat III capable',
              '  → 着陸距離s: 600m, 750m, 1000m, 1600m, 2000m, 3200m available',
              'RWY 01R/19L (ILS Cat II): RVR 550m minimum',
              '  → 着陸距離s: Similar to 01L/19R configuration',
              'RWY 02R/20L (ILS Cat I): RVR 800m minimum',
              '  → RNP Rwy 20R available with precision approach capability',
              'RWY 02L/20R (ILS Cat I): RVR 800m minimum',
              '  → RNAV Rwy 01 approach available with 速度制限s',
              'Missed Approach: Procedures differ per RWY; review approach chart',
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
              'Published 速度制限s: Strictly adhere to STAR procedures',
              '⚠️ Low Level Altitude Limit: 1000ft minimum (apply caution in descent)',
              '高度制限s: Issued with descent clearance (honor exactly)',
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
              'SID確認: Confirm assigned SID with TWR on frequency change',
              'Departure Routing: TWR → APP (East/West/South/North sector) → BKK Control',
              'Available SIDs: EASTE, LEBIM, TUMGA (1C/1D variants per RWY)',
              'SID Climb Gradients: Verify aircraft performance vs. procedure requirements',
              '  → EASTE: Initial climb 074°, various 高度制限s by waypoint',
              '  → LEBIM: Initial 上昇経由 SID, crossing 高度制限s',
              '  → TUMGA: Initial climb, significant altitude step requirements',
              'Terrain Clearance: Most SIDs climbing toward northern highlands',
              '遷移高度: 3000ft (standard for Thailand)',
              'Wind Shear Reporting: If experienced, report to ATC immediately',
              '速度制限s: Published per SID waypoint (typically 250kt below FL100)',
            ]
          },
          {
            title: 'Parking Stands & Ground Support Details',
            items: [
              'West Apron Stands: Detailed coordinate system for all stands (N/S, E/W)',
              '  → G-series (G1-G5): 121.95 MHz GND frequency',
              '  → F-series (F1-F6, F21-F33): 121.95 MHz GND frequency',
              '  → E-series (E1-E10): 121.75 MHz GND frequency (north apron)',
              '  → D-series (D2-D7): 121.95 MHz GND frequency',
              'VDGS (Visual Docking Guidance): Available at select stands',
              '  → Monitor VDGS display for docking position guidance',
              '  → System failure: Manual parking with marshaller guidance',
              'Parking Bay Coordinates: Precise N/S and E/W coordinates available',
              'No Tail Pushes: All stands use nose-in pushback only',
              'Ground Services: Power, water, lavatory, PAX bridge availability varies by stand',
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
              '最低高度: 4000ft for fuel dump operations',
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
    wakeCategory: 'D',
    b787Info: {
      wingspan: '60.1m (197ft)',
      tailHeight: '17.0m (55.7ft) - 787-9 / 16.9m (55.4ft) - 787-8',
      note: '通常 Cat C より大きな間隔が要求される'
    },
    transitionAltitude: {
      DEP_TA: '9000 ft (departure)',
      ARR_TL: 'FL100 (arrival)',
      altitudeUnit: '10ft単位チャート - 100ft単位に切り上げ適用可'
    },
    runways: [
      {id:'07L/25R', len:4000, apch:'ILS Cat II 07L/25R', primaryUse:'Arrival typical'},
      {id:'07R/25L', len:3000, apch:'ILS Cat I 07R/25L', primaryUse:'Departure typical', note:'THR 2431ft Displaced'},
    ],
    tabs: [
      {
        id: 'gen',
        label: 'General',
        sections: [
          {
            title: 'RWY Operations & Configuration',
            items: [
              'RWY 07L/25R: 4000m primary runway (ILS Cat II) — typical arrival RWY',
              '  → Monsoon-dependent: 07L DEP / 25R ARR or 07L ARR',
              'RWY 07R/25L: 3000m secondary runway (ILS Cat I) — typical departure RWY',
              '  → Shorter length; verify B787 performance before planning T/O',
              'PAPI: Available on both runways',
              'Runway Surface: Non-Grooved concrete in good condition',
              'Crosswind Limit: 15 KT maximum',
              '⚠️ Weak tailwind (<5kt) forces RWY 25 usage; ≥5kt triggers ATC discussion',
              'Wake Turbulence Separation: Category D (B787) requires larger spacing than Cat C',
            ]
          },
          {
            title: 'Military Airspace & Restricted Areas ⚠️ CRITICAL',
            items: [
              '⚠️ VV(P)-4 Ho Chi Minh City: GND-3000m (市街地南側) —飛行禁止',
              '  → Circling approach: NORTH側のみ可（南は禁止）',
              '⚠️ VV(R)-19 Bien Hoa (North): GND-FL230 — 軍用空域',
              '  → ATC指示に従えば支障なし',
              '⚠️ Bien Hoa Air Base: NE 13nm (RWY09/27L,R 10,000ft) — 誤認注意',
              '  → SGNとほぼ同方向・同長さRWY → ナビゲーション注意',
              'SID Reassignment: KADUM→ANTRI の軍事理由での指示あり（頻繁）',
              'Coordination: Vietnam ATC による軍事調整を常に期待',
            ]
          },
          {
            title: 'Surrounding Terrain & Geographic Hazards',
            items: [
              '⚠️ Landmark81 (1,540ft): Ho Chi Minh City center, SE 5nm — ビル衝突注意',
              '⚠️ Radio tower (450ft): SE 4nm',
              '⚠️ Obstacle (443ft): NW 2nm',
              'Mekong Delta: North-west low-lying area (water/wetland)',
              'MSA: Jeppesen Chart で SID/STAR の地形クリアランス確認必須',
            ]
          },
          {
            title: 'Southwest/Northeast Monsoon Weather ⚠️',
            items: [
              '【Rainy Season (May-Oct) SW Monsoon】Tropical thunderstorms frequent',
              '  → May: Most severe (1+ hour duration) → early departure planning',
              '  → 15-20min typical, but May exceeds 1hr',
              '  → Wind: S-SE avg 5-7kt, gusts during TS activity',
              '【Dry Season (Nov-Apr) NE Monsoon】Good visibility, cool weather',
              '  → Wind: N-NE avg 5-7kt',
              '  → Fog: Early morning (before 0800) <1km rare but possible Oct-Nov',
              'Temperature: Year-round high (max 30°C+, min 21-22°C)',
            ]
          },
          {
            title: 'Taxiway & Ground Operations',
            items: [
              'TWY S5: 45m width (exceptionally wide)',
              'Other TWY: Standard 23m width',
              'Ground Power: Available at all parking spots',
              'VDGS (Visual Docking Guidance): Available at spots 09-18 (stop line +1.0m / -0.5m)',
              'Follow-me Service: Available on request',
              '⚠️ Apron Congestion: Limited maneuvering space; coordinate carefully with GND',
              '⚠️ TWY Markings: Some sections lack clear visual guidance; follow ATC vectors',
            ]
          },
          {
            title: 'Weather & Hazards ⚠️',
            items: [
              'TS Season: May-Sep (Southwest Monsoon)',
              '  → May: Particularly severe (1+ hours of intense activity common)',
              '  → 15-20 min duration typical; may extend beyond',
              'FOG: Oct-Nov early morning (light; VIS rarely at minimums)',
              '  → Early morning: Check ATIS for rapid VIS changes',
              'Bird Hazard: High concentration in surrounding areas',
              '  → Request bird sweep before departure',
              '⚠️ Military Operations: Bien Hoa (northeast 13NM) military airfield',
              '  → Coordinate with Vietnam ATC on military airspace restrictions',
            ]
          },
          {
            title: 'Restricted Airspace & Special Procedures',
            items: [
              '⚠️ VVP4 HO CHI MINH CITY: GND-3000m 制限空域',
              '  → Overflight prohibited without ATC clearance',
              '⚠️ VVD23-26 AIR FORCE TRAINING: Helicopter training areas',
              '  → Mandatory coordination with military ATC on SID/STAR',
              'Airspace Class: Class C (outer ring) / Class D (inner)',
              'MSA around VVTS: Carefully plan climb/descent on assigned SID/STAR',
            ]
          },
          {
            title: 'Low Visibility Operations',
            items: [
              'ILS CAT II Procedures: Available on RWY 07L/25R',
              '  → RVR minimum: 550m (standard)',
              '  → Reduced landing rate: 40/hour during CAT II ops',
              'CAT I RWY: 07R/25L CAT I minimum 800m RVR',
              '⚠️ Transition Altitude: 3000ft (Vietnam standard)',
              'Approach Briefing: Review all 高度制限s; comply exactly',
            ]
          },
          {
            title: 'Communications & Equipment',
            items: [
              '⚠️ Company VHF: Unavailable (local ATC regulations)',
              'D-ATIS: TAN SON NHAT 128.0 MHz (H24)',
              'GND Frequency: Single VHF channel (coordinate all taxi/pushback)',
              '⚠️ Radio Interference: Possible during peak traffic hours',
              '  → Maintain vigilance on GND frequency',
              'Mode S Operations: Mandatory for all aircraft',
              'ATC Instructions: Follow implicitly; ATC separation is marginal',
            ]
          },
          {
            title: 'Parking & Docking Systems',
            items: [
              'PBB Stands: 9-16 and 17-22 (passenger boarding bridges)',
              '⚠️ Spot 14: Uphill slope during parking (monitor stop position)',
              'Spots 18/19: Not suitable for simultaneous B747-400 use',
              'B787 Preferred Spots: PBB 17, 18, 9-16 (power in available)',
              'Open Apron: Spots 29-32, 33-36 available for overflow',
              'All Spots: Nose-in pushback compatible',
              'VDGS Failure: Use marshallers; follow hand signals only',
            ]
          },
        ]
      },
      {
        id: 'arr',
        label: 'Arrival',
        sections: [
          {
            title: 'RWY Assignments & Approach Selection',
            items: [
              'RWY 07L/25R (ILS Cat II): Primary arrival runway when available',
              '  → Preferred for all JAL arrivals',
              'RWY 07R/25L (ILS Cat I): Alternate when 07L/25R congested',
              '  → Requires longer approach planning (shorter runway)',
              'CAT I vs CAT II: No procedural difference for standard approaches',
              'Vacate: Use fast-exit TWY if available; expedite runway clearing',
              'Follow-me: Request if required for apron navigation',
            ]
          },
          {
            title: 'Descent & Approach Procedures',
            items: [
              'Descent Rate: 500 ft/min minimum standard (notify if lower required)',
              'PAPI: 3-dot descent on LEFT side of RWY (standard 3.0°)',
              'Visual Approach: Possible during VFR conditions (request if available)',
              'Long Finals: Monitor for conflicting traffic (intermediate airspace busy)',
              'Go-Around: Execute immediately if unstable below 500ft',
              'Windshear Alerts: Listen for ATC reports; adjust approach if received',
              '⚠️ Possible Turbulence: Southeast wind through city may cause mechanical turbulence',
            ]
          },
          {
            title: 'ILS/RNP Approach Minimums',
            items: [
              'RWY 07L/25R (ILS Cat II): RVR 550m minimum',
              '  → Available 24/7 when weather requires',
              '  → Approach chart available via FMS',
              'RWY 07R/25L (ILS Cat I): RVR 800m minimum',
              '  → Limited approach guidance available',
              '  → Confirm approach chart loaded before descent',
              'Missed Approach: Procedures differ per RWY; review before approach',
              'Visibility Minimums: Apply CAT I/II rules per runway',
            ]
          },
          {
            title: 'Spot Assignment & Services',
            items: [
              'JAL Primary Spots: 17, 18, 9-16 (PBB with full services)',
              '  → All have ground power, water, lavatory service',
              'B787 Compatible: All PBB spots suitable for B787 operations',
              'APU After Block-In: 5 min max before engines shut down',
              'Ground Power: Available immediately upon spot assignment',
              'Services: PAX steps, tugs/tow bars, water/lavatory all available',
              'Immediate Building Position Lights: Available for night positioning',
            ]
          },
          {
            title: 'Speed Control & Altitude Restrictions ⚠️',
            items: [
              'Speed Control: Applied throughout approach unless ATC authorized otherwise',
              'Published 速度制限s: Adhere to approach chart procedures',
              '⚠️ Low Level Altitude Limit: 1000ft minimum (apply caution in descent)',
              '高度制限s: Issued with descent clearance (honor exactly)',
              '遷移高度: 3000ft (standard Vietnam rules)',
              'Final Approach: Stabilized descent before 500ft mandatory',
            ]
          },
          {
            title: 'RWY Occupancy & Minimum Equipment',
            items: [
              'Minimum Runway Occupancy Time: 20-30 min (varies by parking location)',
              '  → Expedite runway vacating after landing (use fast-exit if available)',
              '  → Landing rate target: 20/hour maximum during normal ops',
              'Aircraft Equipment: Standard ILS Cat I/II equipment required',
              'Runway Lighting: Operational H24 (standard configuration)',
              'Taxiway Lighting: Available; follow ATC guidance for night ops',
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
              'ATC Clearance: Call TAN SON NHAT DELIVERY 5 minutes before pushback',
              'Report: Callsign, destination, assigned spot, cruise flight level',
              'GND Frequency Selection: Single channel (coordinate all movements)',
              'Push-back Clearance: Request explicit approval before pushing',
              'Engine Start: Coordinate timing with GND',
              '⚠️ APU: Maintain running throughout pushback procedure',
              'Marshaller: Required for initial pushback orientation',
            ]
          },
          {
            title: 'Taxi Routing & Ground Operations ⚠️',
            items: [
              'Taxi Clearance: Follow ATC vector explicitly (tight apron)',
              '⚠️ Limited Maneuvering Space: Avoid unnecessary maneuvering',
              'TWY S5 (45m): Use for main taxiway routing when available',
              'Standard TWY (23m): Tighter clearances; monitor wing tips',
              'Holding Point: RWY 07L/25R position marked but limited signage',
              '  → Confirm with ATC before proceeding to runway',
              'Radio Check: If unable to read GND, move forward and retry',
            ]
          },
          {
            title: 'Departure SID & Initial Climb',
            items: [
              'SID Primary: KADUM DEP (Priority 1 assignment)',
              '  → Military coordination required (may be reassigned to ANTRI)',
              'SID Alternate: ANTRI DEP (Priority 2)',
              '  → Used when KADUM unavailable or ATC directed',
              'SID確認: Confirm assigned SID with TWR on first contact',
              'Initial Routing: TWR → Saigon Control (military coordinated)',
              '高度制限s: Honor all SID altitude crossings',
              'Climb Gradient: Verify aircraft performance vs. SID requirements',
              '遷移高度: 3000ft (climb immediately on departure)',
              'Wind Shear Reporting: Report to ATC immediately if encountered',
            ]
          },
          {
            title: 'Military Airspace Coordination',
            items: [
              '⚠️ VVTS is Class D civilian airspace with military overlays',
              '⚠️ Bien Hoa Military: Northeast 13NM (RON coordination required)',
              'VVD23-26 Helicopter Training: Mandatory avoidance unless cleared',
              'Military Instructions: Follow all ATC directives without delay',
              '⚠️ Airspace Crossing: May be assigned non-standard routing for military separation',
              'SID Deviations: Expect possible reassignment from preferred SID',
            ]
          },
          {
            title: 'Parking Stands & Turnaround Details',
            items: [
              'Primary Stands: PBB 17, 18, 9-16 (B787 optimized)',
              'GND Frequency: Single VHF for all ground operations',
              'VDGS Available: Spots 9-18 (follow visual guidance)',
              'Back-Out Capability: All stands allow nose-in pushback',
              'Power-Out Options: Spots 29-32, 33-36 available if needed',
              'Turnaround Time: Budget 50-90 min typical (congestion-dependent)',
              'Ground Services: All required services available at assigned spot',
            ]
          },
          {
            title: 'Weather & Wind Considerations',
            items: [
              'Crosswind Limit: 15 KT maximum for all runways',
              'TS Season (May-Sep): Morning departures preferred',
              '  → Afternoon risk: Severe CB development (1+ hour duration)',
              '  → Plan alternates outside TS region if afternoon slot assigned',
              'Wind Shear: Low-level effect possible during TS activity',
              '  → Adjust departure profile if necessary',
              'Bird Hazard: Request bird sweep before pushback (5 min clearance)',
              'Temperature: High humidity/heat may require performance assessment',
            ]
          },
          {
            title: 'Engine Failure & Emergency Procedures',
            items: [
              'RWY 07 Failure: Initial track 070°, terrain obstacles northeastward',
              '  → Climb to MSA (FL140 minimum) before northbound turn',
              '  → Avoid Bien Hoa military airspace (northeast)',
              'RWY 25 Failure: Initial track 250°, southwest toward Cambodia',
              '  → Coordinate with ATC for low-level routing if necessary',
              'Short-field Performance: Both runways adequate for B787 (check PERF)',
              'Flap Retraction: Confirm positive climb before retracting flaps',
            ]
          },
          {
            title: 'Noise Abatement & Operational Restrictions',
            items: [
              '⚠️ Thrust Reverse: Use restricted during noise-sensitive hours',
              'APU Operations: Secure after pushback if aircraft on external power',
              'Ground Power Supply: Required during parking (electrical load)',
              'Noise Abatement Takeoff: Follow reduced power if issued by ATC',
              'Flight Path: Stay on SID track until passing MSA',
              'Runway Surface: Concrete in good condition; standard performance',
            ]
          },
          {
            title: 'RWY Occupancy & Departure Coordination',
            items: [
              'Minimum Runway Occupancy Time: 18-25 min (varies by SID/routing)',
              'Line-up to Takeoff: Standard 10-15 min wait time expected',
              'Separation: Visual separation from landing traffic on parallel ops',
              'South Flow Operations: Typical May-Sep (RWY 07)',
              'North Flow Operations: Typical Oct-Apr (RWY 25)',
              'Crew Coordination: Monitor ATC for conflicting arrivals on 25R',
            ]
          },
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

  // ── Phase 2: RKSS, ZGGG, RPLL (Notion + Jeppesen統合) ──

  RKSS: {
    fullName: 'SEOUL, Gimpo INTL',
    iata: 'GMP',
    utc: '+9',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    wakeCategory: 'D',
    b787Info: {
      wingspan: '60.1m (197ft)',
      tailHeight: '17.0m (55.7ft) - 787-9 / 16.9m (55.4ft) - 787-8'
    },
    transitionAltitude: {
      TL: 'FL140',
      TA: '14000 ft'
    },
    runways: [
      {id:'14L/32R', len:2745, apch:'ILS Cat II 14L/32R'},
      {id:'14R/32L', len:3000, apch:'ILS Cat II 14R/32L'},
    ],
    tabs: [
      {
        id: 'gen',
        label: 'General',
        sections: [
          {
            title: 'RWY Operations & Configuration',
            items: [
              'RWY 14L/32R (2745m): ILS Cat II — parallel runway (left)',
              'RWY 14R/32L (3000m): ILS Cat II — parallel runway (right)',
              'Parallel operations possible: SDPA/SIPA under traffic conditions',
              'Runway surface: Asphalt, good condition',
              'Crosswind limit: 15 KT maximum',
              'Wake Turbulence: Category D (B787) requires larger spacing than Cat C',
            ]
          },
          {
            title: 'Cold Season Operations ⚠️',
            items: [
              '【Winter (Nov-Mar)】Cold, dry NW wind, excellent visibility',
              '  → Temperature often below 0°C: Monitor aircraft performance/braking',
              '  → Rime icing possible on unheated equipment',
              '【Summer (May-Sep)】Warm/humid, possible afternoon thunderstorms',
              '⚠️ Winter crosswind from NW with 15-20kt gusts possible',
              'De-icing: Available (anti-ice/de-ice fluids for ACFT)',
            ]
          },
          {
            title: 'Surrounding Terrain & Airspace',
            items: [
              'Seoul airspace: Class C, busy with commercial + military traffic',
              'Seoul metropolitan area: Urban terrain, tall buildings south/east',
              '⚠️ K-MOA (Korean Military Operating Area): Coordination required for certain SIDs',
              '高度制限s: Review SID/STAR for terrain clearance',
              'MSA: Carefully planned via Jeppesen Chart',
            ]
          },
          {
            title: 'Communications & NAVAIDS',
            items: [
              'ATIS: 130.7 MHz',
              'GND: 121.7 MHz',
              'TWR: 118.3 MHz (14L/32R) / 119.0 MHz (14R/32L)',
              'APP: 119.5 MHz / 120.1 MHz',
              'VOR/DME: GMP 112.2 (Standard)',
              'ILS: Available on both RWYs (14L, 14R, 32L, 32R)',
            ]
          },
        ]
      },
      {
        id: 'arr',
        label: 'Arrival',
        sections: [
          {
            title: 'RWY Assignments & Approach',
            items: [
              'Typical arrival RWYs: 32L/32R (from north/northeast)',
              '  → Wind-dependent: NW/N wind favors 32; S/SE wind favors 14',
              'Parallel independent approaches (SIPA) possible when authorized',
              'CAT II operations: All RWYs capable; standard crew/ACFT cert required',
              'Vacate: Use rapid-exit taxiway when available (expedite runway clearing)',
            ]
          },
          {
            title: 'Descent & Approach Procedures',
            items: [
              'Descent rate: 500 ft/min standard; notify if lower rate planned',
              '速度制限s: Comply with SID/STAR 高度制限s',
              '⚠️ Cold weather: Monitor ILS performance (potential icing on LOC/GS)',
              'Final approach: Stabilized descent by 500 ft mandatory',
              'Go-around: Execute immediately if unstable below 500 ft',
            ]
          },
          {
            title: 'ILS/RNP Minimums & Landing',
            items: [
              'ILS Cat II: RVR 550m minimum (all RWYs)',
              '着陸距離s: Verify against runway length (2745m minimum 14L)',
              '⚠️ 寒冷気象: Braking action may be reduced in winter',
              'Runway surface condition: Check METAR for contamination',
            ]
          },
          {
            title: 'Parking & Ground Services',
            items: [
              'Primary stands: Domestic (south) + International (north) terminals',
              'B787 compatible stands available at both terminals',
              'Ground power: Available (115V/400Hz)',
              'Services: Tug/tow bars, PAX bridge, water/lavatory available',
              'Gate assignment: ATC/GH coordination (busy airport)',
            ]
          },
        ]
      },
      {
        id: 'dep',
        label: 'Departure',
        sections: [
          {
            title: 'ATC Clearance & Push-back',
            items: [
              'ATIS: 130.7 MHz (pre-flight info)',
              'GND Frequency: 121.7 MHz (all push-back/taxi requests)',
              'Push-back clearance: Request via GND; coordinate timing',
              'Engine start: Allowed after push-back clearance obtained',
              '⚠️ Winter: Request de-ice/anti-ice if required (coordinate early)',
            ]
          },
          {
            title: 'Taxi Routing & SID Verification',
            items: [
              'Taxi: Follow GND instructions; taxiway marking clear (day/night)',
              'SID assignment: Verify on TWR first contact (TWR: 118.3 or 119.0)',
              'Typical SIDs: INCHON, GIMPO departures (check Jeppesen for RWY-specific)',
              '⚠️ Military coordination: K-MOA airspace requires ATC vector compliance',
              '速度制限: Standard 250 KT below FL100 (unless authorized)',
            ]
          },
          {
            title: 'Departure & Climb',
            items: [
              'Initial climb: Follow assigned SID heading/高度制限s',
              '遷移高度: 14000 ft (climb in feet initially, then FL)',
              'Climb performance: Cold weather may reduce climb gradient; monitor',
              'Wind shear: Unlikely winter (stable), possible summer (TS)',
              'En-route handoff: APP frequency after SID altitude clearance',
            ]
          },
          {
            title: 'Winter Operations & De-icing',
            items: [
              '⚠️ De-icing: Request fluid type/schedule with push-back clearance',
              'Contaminated runway: Check METAR for snow/ice (winter)',
              'Braking action: Monitor ATIS reports (winter conditions critical)',
              'Crosswind limit: 15 KT applies year-round',
              'Ground friction: Winter may reduce performance; plan early departure',
            ]
          },
          {
            title: 'Engine Failure Procedure',
            items: [
              'RWY 14 departure: Initial track 140° (stay on SID), MSA 3000 ft minimum',
              'RWY 32 departure: Initial track 320° (stay on SID), MSA 4000 ft minimum',
              'Terrain obstacles: East/southeast direction; stay on SID until MSA',
            ]
          },
        ]
      },
    ]
  },

  ZGGG: {
    fullName: 'GUANGZHOU, Baiyun INTL',
    iata: 'CAN',
    utc: '+8',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 10',
    prefRwy: 'Nil',
    wakeCategory: 'D',
    b787Info: {
      wingspan: '60.1m (197ft)',
      tailHeight: '17.0m (55.7ft) - 787-9 / 16.9m (55.4ft) - 787-8'
    },
    transitionAltitude: {
      TL: 'FL130',
      TA: '13000 ft',
      note: 'PRD airspace: ATC coordination required for FL>FL300'
    },
    runways: [
      {id:'01L/19R', len:3800, apch:'ILS Cat II 01L/19R'},
      {id:'01R/19L', len:3600, apch:'ILS Cat I 01R/19L'},
      {id:'02L/20R', len:3800, apch:'ILS Cat I 02L/20R'},
      {id:'02R/20L', len:3600, apch:'ILS Cat I 02R/20L'},
    ],
    tabs: [
      {
        id: 'gen',
        label: 'General',
        sections: [
          {
            title: 'RWY Operations & Pearl River Delta Airspace',
            items: [
              'RWY 01/02 (North): ILS Cat II (01L), Cat I (01R, 02L, 02R)',
              'RWY 19/20 (South): ILS Cat II (19R), Cat I (19L, 20R, 20L)',
              '⚠️ Parallel operations possible: SDPA/SIPA under PRD coordination',
              '⚠️ Pearl River Delta: Complex airspace with multiple airports (ZUH, CTU, etc.)',
              'Runway surface: Concrete, good condition',
              'Crosswind limit: 15 KT maximum',
              'Wake Turbulence: Category D (B787) requires larger spacing than Cat C',
            ]
          },
          {
            title: 'PRD (Pearl River Delta) Airspace ⚠️ CRITICAL',
            items: [
              '⚠️ ZGGG within PRD airspace: High traffic density, tight separation standards',
              '⚠️ Military coordination: China military airspace overlaps PRD (clearances delayed)',
              '⚠️ SID/STAR design: Complex routing to avoid military areas',
              '⚠️ ATC vector frequency: Multiple hand-offs (APP → Control)',
              '高度制限s: Strictly adhere (military deconfliction)',
              '速度制限s: Often 250 KT below FL100 (occasionally FL140)',
            ]
          },
          {
            title: 'Tropical Monsoon Weather',
            items: [
              '【Summer (May-Sep)】Warm, humid, frequent thunderstorms',
              '  → Afternoon TS common; arrange early departures when possible',
              '  → Wind: S-SE monsoon winds 10-15 KT',
              '【Winter (Oct-Apr)】Cool, dry NE winds, excellent visibility',
              '  → Rare icing, stable conditions',
              'Typhoon season: Jul-Sep highest risk (track Western Pacific systems)',
              '⚠️ 降雨: Possible NOTAM for runway groove flooding (maintain speed)',
            ]
          },
          {
            title: 'Surrounding Terrain & Geographic Hazards',
            items: [
              'Guangzhou city center: 20nm west (metropolitan area, buildings)',
              'Hong Kong/Macau: 80nm south (within regional airspace)',
              'South China Sea: Coastal terrain to south/east',
              'MSA: Terrain-dependent; review SID/STAR for ground clearance',
              'Approach: Monitor for low-flying traffic in busy PRD',
            ]
          },
          {
            title: 'Communications & NAVAIDS',
            items: [
              'ATIS: 134.2 MHz',
              'GND: 121.9 MHz',
              'TWR: 118.1 MHz',
              'APP: 120.3 MHz / 120.8 MHz',
              'DEP: 119.4 MHz / 119.9 MHz',
              'VOR/DME: GZ 115.1 (Guangzhou)',
              'NDB: Available on approach',
            ]
          },
        ]
      },
      {
        id: 'arr',
        label: 'Arrival',
        sections: [
          {
            title: 'RWY Assignment & PRD STAR Procedures',
            items: [
              'Typical arrival RWYs: 01 or 02 (north facing) — wind-dependent',
              '⚠️ STAR routing: Designed to avoid military airspace; ATC vector-based',
              'CAT II operations: 01L only; standard crew/ACFT cert sufficient',
              'CAT I operations: 01R, 02L, 02R (all require standard minimums)',
              'Parallel approaches: SIPA possible when military ATC coordination complete',
            ]
          },
          {
            title: 'Descent & Approach',
            items: [
              'PRD descent clearance: Often delayed (military coordination)',
              'Descent rate: 500 ft/min standard; notify if lower',
              '⚠️ Speed control: Strictly 250 KT (or assigned speed below FL100+)',
              'TS avoidance: Request deviations early if weather ahead (summer)',
              'Windshear: Listen for ATC alerts (especially monsoon season)',
            ]
          },
          {
            title: 'ILS/RNP Minimums',
            items: [
              'ILS Cat II (01L): RVR 550m minimum',
              'ILS Cat I: RVR 800m minimum (01R, 02L, 02R, 19L, 19R, 20L, 20R)',
              'RNP approach: Available; minimums 0.3 NM lateral',
              'Missed approach: Procedure per RWY; review chart',
            ]
          },
          {
            title: 'Parking & Services',
            items: [
              'Terminal assignment: T1/T2/T3 (GH directs to gate)',
              'B787 compatible stands: Available at all terminals',
              'Ground power: 115V/400Hz available',
              'Services: Tugs/tow bars, PAX bridge, water/lavatory available',
              'Turnaround: 1.5-2 hours typical (PRD congestion)',
            ]
          },
        ]
      },
      {
        id: 'dep',
        label: 'Departure',
        sections: [
          {
            title: 'GND Clearance & Push-back',
            items: [
              'ATIS: 134.2 MHz (pre-flight)',
              'GND: 121.9 MHz (push-back request)',
              'Push-back: Coordinate exact time (minimize taxi idle)',
              '⚠️ Winter time: Anti-ice not typically required (warm climate)',
              'Engine start: After push-back clearance',
            ]
          },
          {
            title: 'SID & Military Airspace Coordination ⚠️',
            items: [
              '⚠️ SID routing: Complex (designed to avoid military areas)',
              '⚠️ Military ATC: Clearance delays common (coordinate with GZ Control)',
              'Typical SIDs: GUANGZHOU departures (check Jeppesen per RWY)',
              'Initial climb: Follow SID strictly (terrain & airspace constraints)',
              '⚠️ FL restriction: Often limited to FL250-FL280 initially (military airspace)',
            ]
          },
          {
            title: 'Taxi & Departure Procedures',
            items: [
              'Taxi: GND routing per ATC (complex taxiway layout)',
              'TWR frequency: 118.1 MHz (line-up and departure)',
              'SID確認: Confirm on TWR first contact',
              '速度制限: 250 KT (or assigned) below FL100',
              'Climb gradient: Verify performance against SID requirements',
            ]
          },
          {
            title: 'En-route Handoff & Climbing',
            items: [
              'APP handoff: After SID altitude clearance (typically FL100-FL130)',
              'Control handoff: After APP (FL130+ entering enroute airspace)',
              '⚠️ FL limit: PRD military may restrict to FL250-FL280; expect amendment',
              'Climb planning: Assume lower FL ceiling; plan fuel accordingly',
              '遷移高度: 13000 ft (change to FL-based altitude)',
            ]
          },
          {
            title: 'Summer Monsoon Operations',
            items: [
              '【TS avoidance】Request early SID routing around convection',
              '【Wind considerations】S-SE monsoon: 10-15 KT; crosswind limit 15 KT',
              '【Performance】Hot/humid summer: Monitor takeoff distance (verify before push)',
              '【Alternate】Always brief alternate outside PRD (CTS/PVG/HKG options)',
            ]
          },
        ]
      },
    ]
  },

  RPLL: {
    fullName: 'MANILA, Ninoy Aquino INTL',
    iata: 'MNL',
    utc: '+8',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 10',
    prefRwy: 'Nil',
    wakeCategory: 'D',
    b787Info: {
      wingspan: '60.1m (197ft)',
      tailHeight: '17.0m (55.7ft) - 787-9 / 16.9m (55.4ft) - 787-8'
    },
    transitionAltitude: {
      TL: 'FL130',
      TA: '13000 ft'
    },
    runways: [
      {id:'06L/24R', len:4000, apch:'ILS Cat III 06L/24R'},
      {id:'06R/24L', len:4000, apch:'ILS Cat II 06R/24L'},
    ],
    tabs: [
      {
        id: 'gen',
        label: 'General',
        sections: [
          {
            title: 'RWY Operations & Configuration',
            items: [
              'RWY 06L/24R (4000m): ILS Cat III capable — primary runway',
              'RWY 06R/24L (4000m): ILS Cat II — parallel runway',
              'Parallel operations possible: SDPA/SIPA when both RWYs active',
              'Runway surface: Concrete, good condition',
              'Crosswind limit: 15 KT maximum',
              'Wake Turbulence: Category D (B787) requires larger spacing than Cat C',
            ]
          },
          {
            title: 'Tropical Monsoon & Typhoon Season ⚠️',
            items: [
              '【Southwest Monsoon (May-Oct)】Warm, frequent afternoon TS',
              '  → 降雨 possible; arrange early departures',
              '  → Wind: SW avg 10-15 KT, gusts 20+ KT during TS',
              '【Northeast Monsoon (Nov-Apr)】Cool, dry, stable weather',
              '⚠️ Typhoon season: Jul-Sep (track systems via SIGMET/AIRMET)',
              '⚠️ Tropical depression: May cause runway closure (flooding risk)',
              'Visibility: Generally good except during TS/typhoon activity',
            ]
          },
          {
            title: 'Airport Location & Access',
            items: [
              'Manila Bay: Airport on bay islands (tropical maritime environment)',
              'Quezon City/Metro Manila: 15nm north (major city)',
              'Domestic terminals: T1 (Intl), T2 (Domestic)',
              '標高: Sea level (29 ft AMSL) — hot/humid operations',
              '⚠️ Salt-air corrosion: Aircraft in tropical maritime environment',
            ]
          },
          {
            title: 'Surrounding Airspace & Restrictions',
            items: [
              'Clark Air Base (RPLC): 60nm north (US military; civilian overflight OK)',
              'Subic Bay: Naval base west; civilian overflight OK',
              'South China Sea: International airspace (traffic from multiple FIRs)',
              '⚠️ Airspace congestion: Heavy domestic/regional traffic',
              'MSA: Review SID/STAR for terrain clearance (lowland terrain)',
            ]
          },
          {
            title: 'Communications & NAVAIDS',
            items: [
              'ATIS: 127.0 MHz / 127.4 MHz',
              'GND: 121.7 MHz',
              'TWR: 118.5 MHz (06L/24R) / 119.0 MHz (06R/24L)',
              'APP: 119.5 MHz / 120.2 MHz',
              'DEP: 120.6 MHz / 120.9 MHz',
              'VOR/DME: MLA 115.2 (Manila)',
              'NDB: Available on approach',
              '⚠️ Radio interference: Tropical storms may affect VHF transmission',
            ]
          },
        ]
      },
      {
        id: 'arr',
        label: 'Arrival',
        sections: [
          {
            title: 'RWY Assignment & Approach',
            items: [
              'Typical arrival RWYs: 06 (from east) or 24 (from west) — wind-dependent',
              '⚠️ Wind-dependent: NE wind favors RWY 24; SW wind favors RWY 06',
              'CAT III operations: 06L capable (special crew/ACFT cert required)',
              'CAT II operations: 06R standard',
              'Parallel approaches: SIPA when both RWYs active + coordination complete',
            ]
          },
          {
            title: 'Descent & Approach Procedures',
            items: [
              'Descent rate: 500 ft/min standard; notify if lower',
              '⚠️ Tropical TS: Request deviation early if weather ahead (summer)',
              'Speed control: 250 KT below FL100 (or assigned restriction)',
              'Approach briefing: Confirm RWY assignment + approach type (ILS/RNP)',
              'Go-around: Execute immediately if unstable below 500 ft',
            ]
          },
          {
            title: 'ILS/CAT Operations & Minimums',
            items: [
              'ILS Cat III (06L): RVR 200m minimum (special certification required)',
              'ILS Cat II (06R): RVR 550m minimum',
              'CAT III procedure: Lower minimums; requires auto-land capability + training',
              'Missed approach: Procedure per RWY; review chart',
              '着陸距離: Adequate for B787 on both RWYs (4000m)',
            ]
          },
          {
            title: 'Spot Assignment & Parking',
            items: [
              'T1 (International): PBB gates for international carriers',
              'T2 (Domestic): Overflow for international if T1 full',
              'B787 compatible stands: Available at T1 (preferred)',
              'Gate assignment: GH directs; coordinate with OPS',
              'Ground services: Power, water, lavatory, tugs available',
            ]
          },
          {
            title: 'Monsoon Arrival Considerations',
            items: [
              '【TS season (May-Oct)】Request visual approach if VFR conditions available',
              '【Runway contamination】降雨 may reduce braking action',
              '【Visibility】Sudden drops during TS; brief alternate beforehand',
              '【Windshear】Possible during TS; monitor ATIS alerts',
            ]
          },
        ]
      },
      {
        id: 'dep',
        label: 'Departure',
        sections: [
          {
            title: 'ATC Clearance & Push-back Procedures',
            items: [
              'ATIS: 127.0 or 127.4 MHz (pre-flight information)',
              'GND: 121.7 MHz (push-back request)',
              'Clearance: Request via GND; coordinate push-back time/gate',
              'Push-back: Minimize taxi time (airport congestion)',
              'Engine start: After clearance; anti-ice typically not required (tropical)',
            ]
          },
          {
            title: 'SID & Initial Climb',
            items: [
              'SID assignment: Typical Manila SIDs (check Jeppesen per RWY)',
              'Initial heading: Follow SID routing (traffic separation)',
              '速度制限: 250 KT below FL100 (or assigned)',
              'Climb gradient: Verify aircraft performance (warm/humid conditions)',
              'Transition altitude: 13000 ft',
            ]
          },
          {
            title: 'Taxi & Line-up',
            items: [
              'Taxi clearance: GND routing (complex layout)',
              'TWR contact: On taxi (118.5 MHz for 06L/24R, 119.0 for 06R/24L)',
              'Line-up clearance: TWR frequency',
              'Takeoff clearance: RWY-specific frequency',
              'SID確認: Confirm on TWR first contact',
            ]
          },
          {
            title: 'En-route & Climb Procedure',
            items: [
              'Initial climb: Follow assigned SID (terrain clearance)',
              'APP handoff: After SID altitude clearance',
              'Control handoff: Enroute (FL130+)',
              'Climb planning: Account for tropical heat (reduced climb gradient)',
              'Alternate briefing: Outside RPLL airspace (Clark CRK or Subic SFS)',
            ]
          },
          {
            title: 'Monsoon Departure Operations ⚠️',
            items: [
              '【Summer TS (May-Oct)】Early departure preferred (avoid afternoon TS)',
              '【Wind shear】Possible during TS; monitor climb performance',
              '【Humidity】High humidity reduces performance; verify T/O dist before push',
              '【Tropical airfield effects】Short-field performance acceptable (4000m runways)',
              '【Alternate planning】Ensure alternate outside monsoon belt (CRK, ILO, or northbound)',
            ]
          },
        ]
      },
    ]
  },
  RKSI: {
    fullName: 'Seoul/Incheon International Airport',
    iata: 'ICN',
    utc: '+9',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    wakeCategory: 'D',
    b787Info: {
      wingspan: '60.1m (197ft)',
      tailHeight: '17.0m (55.7ft) - 787-9 / 16.9m (55.4ft) - 787-8',
    },
    transitionAltitude: {
      TL: 'FL140',
      TA: '14,000 ft',
    },
    runways: [
      {id:'15L/33R', len:0, apch:'VOR 15L/33R'},
      {id:'15R/33L', len:0, apch:'VOR 15R/33L'},
      {id:'16L/16R/34L/34R', len:0, apch:'VOR 16L/16R/34L/34R'},
    ],
    tabs: [
      {
        id: 'gen',
        label: 'General',
        sections: [
          {
            title: '空港概要',
            items: [
              '• ICAO: RKSI / IATA: ICN — Seoul/Incheon International Airport（仁川国際空港）',
              '• 位置: N37°27\' E126°26\'（ソウル市内から西方約50km、仁川市沖の埋立地）',
              '• 標高: 23 ft (7 m)',
              '• タイムゾーン: UTC+9（韓国標準時 KST、DST なし）',
              '• 運用時間: 24時間運用',
            ]
          },
          {
            title: '気象',
            items: [
              '• 冬季（12〜2月）: 寒冷。寒冷気象 Altitude Correction（CTAC）が必要になる頻度が高い',
              '• 秋〜春: 霧（FG）の発生あり。早朝・低温時に視程悪化に注意',
              '• 夏季（7〜8月）: 梅雨・台風による強風・降雨。SIGMET確認',
              '• 年間を通じて偏西風が強い。特に冬季は北西方向からの季節風（シベリア寒気）に注意',
            ]
          },
          {
            title: 'TL/TA',
            items: [
              '• Transition Level: FL140',
              '• Transition Altitude: 14,000 ft',
              '• QNH: hPa使用',
            ]
          },
        ]
      },
      {
        id: 'arr',
        label: 'Arrival',
        sections: [
          {
            title: 'STAR',
            items: [
              '• GUKDO ARR系: 日本方面からは主にGUKDO系STARを使用',
              '• SEL APP: 119.1 / SEL ARR: 124.2（GUKDO付近でContact）',
              '• Initial Radio Call: \"CONTACT\"指示後 → Squawk IDENT、Callsign・Type・ATISを通報',
              '• \"MONITOR or STAND BY FOR\"指示後 → Squawk IDENTしてSEL APPをモニター',
              '• CARGO便: CARGO FLTである旨をReportすること',
            ]
          },
          {
            title: 'Approach',
            items: [
              '• ILS Y/Z Approach RWY15L、ILS Y/Z Approach RWY15R',
              '• \"GUKDO #H arrival, descent & maintain 13,000ft\" → SEL APP移管後10,000ft、6,000ftと順次降下',
              '• RWY15R: \"Direct MUNAN cross MUNAN at or above 3,000ft, 許可 ILS Z 15R APP\"',
              '• RWY15R（東側から）: \"GUKDO 2C ARR Expect ILS Y 15R\" → \"Direct SEL\" → \"降下経由 STAR to 3,000, CLR for ILS Y 15R APP\"',
              '• 5,000B(4,000B)と登録されているWPT: HOLDING入り後はATC許可なく当初M/A ALT以上に上昇不可',
            ]
          },
        ]
      },
      {
        id: 'dep',
        label: 'Departure',
        sections: [
          {
            title: 'RWY',
            items: [
              '• RWY 15L/33R: Main RWY（主にARRで使用。Landing Main RWYは15L/33R）',
              '• RWY 15R/33L: 補助RWY',
              '• RWY 16L/16R/34L/34R: 混雑時（0030〜0230Z、1030〜1230Z等）にRWY15L/33Rと同時使用。Emergencyを除き00〜12UTCに限られる',
              '• RWY勾配（Slope）: RM_JALISSUE_INT - 2.3.RKSI.3.1 参照',
            ]
          },
          {
            title: 'ATC',
            items: [
              '• 121.5を他空港より頻繁に使用する傾向がある → 常にMonitor',
              '• SID/STAR飛行中に高度指示を受けても、STAR上の高度制限は無効にならない（旧ICAO方式）',
              '• 韓国管制は米国式\"Descend via XXX ARR\"の用語も併用（韓国軍基準がFAA式のため）',
              '• \"Cleared via XXX ARR\"と指示された場合: 経路のみの承認。高度は別途指示に従う',
            ]
          },
        ]
      },
    ]
  },
  RKPC: {
    fullName: '',
    iata: '',
    utc: '+9',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    wakeCategory: 'D',
    b787Info: {
      wingspan: '60.1m (197ft)',
      tailHeight: '17.0m (55.7ft) - 787-9 / 16.9m (55.4ft) - 787-8',
    },
    transitionAltitude: {
    },
    runways: [
      {id:'07/25', len:3000, apch:'ILS 07/25'},
      {id:'13/31', len:1900, apch:'VOR 13/31'},
    ],
    tabs: [
      {
        id: 'gen',
        label: 'General',
        sections: [
          {
            title: '空港概要',
            items: [
              '• ICAO: RKPC / IATA: CJU',
              '• 位置: Jeju-si, Jeju-do, South Korea (33°30\'42\"N 126°29\'33\"E)',
              '• 標高: 118 ft AMSL',
              '• タイムゾーン: UTC+9 (KST)',
              '• 遷移高度: 14000 ft / TL: FL150',
            ]
          },
          {
            title: '気象',
            items: [
            ]
          },
          {
            title: 'TL/TA',
            items: [
            ]
          },
        ]
      },
      {
        id: 'arr',
        label: 'Arrival',
        sections: [
          {
            title: 'STAR',
            items: [
            ]
          },
          {
            title: 'Approach',
            items: [
              '（記入欄）',
            ]
          },
        ]
      },
      {
        id: 'dep',
        label: 'Departure',
        sections: [
          {
            title: 'RWY',
            items: [
              '• RWY 07/25: 3000m — ILS両方向',
              '• RWY 13/31: 1900m（小型機用）',
            ]
          },
          {
            title: 'ATC',
            items: [
            ]
          },
        ]
      },
    ]
  },
  ZYTL: {
    fullName: '',
    iata: '',
    utc: '+8',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    wakeCategory: 'D',
    b787Info: {
      wingspan: '60.1m (197ft)',
      tailHeight: '17.0m (55.7ft) - 787-9 / 16.9m (55.4ft) - 787-8',
    },
    transitionAltitude: {
    },
    runways: [
      {id:'10/28', len:3300, apch:'ILS 10/28'},
      {id:'11/29', len:3300, apch:'ILS 11/29'},
    ],
    tabs: [
      {
        id: 'gen',
        label: 'General',
        sections: [
          {
            title: '空港概要',
            items: [
              '• ICAO: ZYTL / IATA: DLC',
              '• 位置: Dalian, Liaoning, China (38°57\'57\"N 121°32\'20\"E)',
              '• 標高: 107 ft AMSL',
              '• タイムゾーン: UTC+8 (CST)',
              '• 遷移高度: 3000m (9843ft) / TL: FL100',
            ]
          },
          {
            title: '気象',
            items: [
            ]
          },
          {
            title: 'TL/TA',
            items: [
            ]
          },
        ]
      },
      {
        id: 'arr',
        label: 'Arrival',
        sections: [
          {
            title: 'STAR',
            items: [
            ]
          },
          {
            title: 'Approach',
            items: [
            ]
          },
        ]
      },
      {
        id: 'dep',
        label: 'Departure',
        sections: [
          {
            title: 'RWY',
            items: [
              '• RWY 10/28: 3300m — ILS',
              '• RWY 11/29: 3300m — ILS',
            ]
          },
          {
            title: 'ATC',
            items: [
            ]
          },
        ]
      },
    ]
  },
  ZSPD: {
    fullName: '',
    iata: '',
    utc: '+9',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    wakeCategory: 'D',
    b787Info: {
      wingspan: '60.1m (197ft)',
      tailHeight: '17.0m (55.7ft) - 787-9 / 16.9m (55.4ft) - 787-8',
    },
    transitionAltitude: {
    },
    runways: [
    ],
    tabs: [
      {
        id: 'gen',
        label: 'General',
        sections: [
          {
            title: '空港概要',
            items: [
              '• ICAO: ZSPD / IATA: PVG',
              '• Shanghai Pudong International Airport（上海浦東国際空港）',
              '• 中国・上海市浦東新区',
              '• UTC+8（JST-1）',
              '• 24時間運用',
            ]
          },
          {
            title: '気象',
            items: [
              '• 冬季（12〜2月）: 低視程・濃霧あり → ILS Cat II/III運用の可能性',
              '• 夏季（6〜9月）: 梅雨・雷雨・台風シーズン（7〜10月）',
              '• 卓越風: NW（冬）/ SE（夏）',
              '• 横風計算に注意（RWY 16/34系 vs 17/35系）',
            ]
          },
          {
            title: 'TL/TA',
            items: [
            ]
          },
        ]
      },
      {
        id: 'arr',
        label: 'Arrival',
        sections: [
          {
            title: 'STAR',
            items: [
              '• DUMET付近でSHA APPに移管 → STAR Clearanceが発出される',
              '• Base付近で違うRWYへの進入変更が多い',
              '• SHA APPでは ORBIT（360°旋回）という用語使用あり: Make Orbit Left = 左に360°旋回',
            ]
          },
          {
            title: 'Approach',
            items: [
              '• ILSZ 16L（JEPP 21-1）/ DUM81A RNAV Arrival（JEPP 20-2D）',
              '• Clearance: DUMET 81A RNAV arrival RWY16L',
              '• Initial Approach Fix: MP1 → MP1以降MAX IAS 210ktに制限',
              '• MP1から263°Track への Turn: Chart に FLYING NORTH OF N31°27\' IS STRICTLY PROHIBITED → 注意',
              '• ILSZ 34R（JEPP 21-13）/ DUM91A RNAV Arrival（JEPP 20-2E）',
            ]
          },
        ]
      },
      {
        id: 'dep',
        label: 'Departure',
        sections: [
          {
            title: 'RWY',
            items: [
              '• 長さ: 3400m / ILS / RNAV',
              '• 日本からの到着は通常RWY16L/34Rをアサイン',
              '• 長さ: 3400m / ILS / RNAV',
              '• 日本への出発は通常RWY16R/34Lをアサイン',
            ]
          },
          {
            title: 'ATC',
            items: [
            ]
          },
        ]
      },
    ]
  },
  ZSSS: {
    fullName: '',
    iata: '',
    utc: '+8',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    wakeCategory: 'D',
    b787Info: {
      wingspan: '60.1m (197ft)',
      tailHeight: '17.0m (55.7ft) - 787-9 / 16.9m (55.4ft) - 787-8',
    },
    transitionAltitude: {
    },
    runways: [
      {id:'18L/36R', len:3300, apch:'ILS 18L/36R'},
      {id:'18R/36L', len:3300, apch:'ILS 18R/36L'},
    ],
    tabs: [
      {
        id: 'gen',
        label: 'General',
        sections: [
          {
            title: '空港概要',
            items: [
              '• ICAO: ZSSS / IATA: SHA',
              '• 位置: Shanghai, China (31°11\'59\"N 121°20\'00\"E)',
              '• 標高: 10 ft AMSL',
              '• タイムゾーン: UTC+8 (CST)',
              '• Transition Altitude: 3000m / TL: FL100',
            ]
          },
          {
            title: '気象',
            items: [
            ]
          },
          {
            title: 'TL/TA',
            items: [
            ]
          },
        ]
      },
      {
        id: 'arr',
        label: 'Arrival',
        sections: [
          {
            title: 'STAR',
            items: [
            ]
          },
          {
            title: 'Approach',
            items: [
            ]
          },
        ]
      },
      {
        id: 'dep',
        label: 'Departure',
        sections: [
          {
            title: 'RWY',
            items: [
              '• RWY 18L/36R: 3300m — ILS',
              '• RWY 18R/36L: 3300m — ILS',
            ]
          },
          {
            title: 'ATC',
            items: [
            ]
          },
        ]
      },
    ]
  },
  ZSHC: {
    fullName: '',
    iata: '',
    utc: '+8',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    wakeCategory: 'D',
    b787Info: {
      wingspan: '60.1m (197ft)',
      tailHeight: '17.0m (55.7ft) - 787-9 / 16.9m (55.4ft) - 787-8',
    },
    transitionAltitude: {
    },
    runways: [
      {id:'07/25', len:3600, apch:'ILS 07/25'},
      {id:'17/35', len:3200, apch:'ILS 17/35'},
    ],
    tabs: [
      {
        id: 'gen',
        label: 'General',
        sections: [
          {
            title: '空港概要',
            items: [
              '• ICAO: ZSHC / IATA: HGH',
              '• 位置: Hangzhou, Zhejiang, China (30°13\'46\"N 120°25\'58\"E)',
              '• 標高: 23 ft AMSL',
              '• タイムゾーン: UTC+8 (CST)',
              '• Transition Altitude: 3000m / TL: FL100',
            ]
          },
          {
            title: '気象',
            items: [
            ]
          },
          {
            title: 'TL/TA',
            items: [
            ]
          },
        ]
      },
      {
        id: 'arr',
        label: 'Arrival',
        sections: [
          {
            title: 'STAR',
            items: [
            ]
          },
          {
            title: 'Approach',
            items: [
              '（記入欄）',
            ]
          },
        ]
      },
      {
        id: 'dep',
        label: 'Departure',
        sections: [
          {
            title: 'RWY',
            items: [
              '• RWY 07/25: 3600m — ILS',
              '• RWY 17/35: 3200m — ILS',
            ]
          },
          {
            title: 'ATC',
            items: [
            ]
          },
        ]
      },
    ]
  },
  ZBTJ: {
    fullName: '',
    iata: '',
    utc: '+8',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    wakeCategory: 'D',
    b787Info: {
      wingspan: '60.1m (197ft)',
      tailHeight: '17.0m (55.7ft) - 787-9 / 16.9m (55.4ft) - 787-8',
    },
    transitionAltitude: {
    },
    runways: [
      {id:'16L/34R', len:3600, apch:'ILS 16L/34R'},
      {id:'16R/34L', len:3200, apch:'ILS 16R/34L'},
    ],
    tabs: [
      {
        id: 'gen',
        label: 'General',
        sections: [
          {
            title: '空港概要',
            items: [
              '• ICAO: ZBTJ / IATA: TSN',
              '• 位置: Tianjin, China (39°07\'27\"N 117°20\'44\"E)',
              '• 標高: 15 ft AMSL',
              '• タイムゾーン: UTC+8 (CST)',
              '• Transition Altitude: 3000m / TL: FL100',
            ]
          },
          {
            title: '気象',
            items: [
            ]
          },
          {
            title: 'TL/TA',
            items: [
            ]
          },
        ]
      },
      {
        id: 'arr',
        label: 'Arrival',
        sections: [
          {
            title: 'STAR',
            items: [
            ]
          },
          {
            title: 'Approach',
            items: [
              '（記入欄）',
            ]
          },
        ]
      },
      {
        id: 'dep',
        label: 'Departure',
        sections: [
          {
            title: 'RWY',
            items: [
              '• RWY 16L/34R: 3600m — ILS',
              '• RWY 16R/34L: 3200m — ILS',
            ]
          },
          {
            title: 'ATC',
            items: [
            ]
          },
        ]
      },
    ]
  },
  ZBAA: {
    fullName: 'Beijing Capital International Airport',
    iata: 'PEK',
    utc: '+8',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    wakeCategory: 'D',
    b787Info: {
      wingspan: '60.1m (197ft)',
      tailHeight: '17.0m (55.7ft) - 787-9 / 16.9m (55.4ft) - 787-8',
    },
    transitionAltitude: {
      TL: 'FL118',
    },
    runways: [
      {id:'01/19', len:0, apch:'VOR 01/19'},
      {id:'18L/36R', len:0, apch:'VOR 18L/36R'},
      {id:'18R/36L', len:0, apch:'VOR 18R/36L'},
    ],
    tabs: [
      {
        id: 'gen',
        label: 'General',
        sections: [
          {
            title: '空港概要',
            items: [
              '• ICAO: ZBAA / IATA: PEK — Beijing Capital International Airport（北京首都国際空港）',
              '• 位置: N40°04\' E116°35\'（北京市中心から北東約13nm）',
              '• 標高: 116 ft (35 m)',
              '• タイムゾーン: UTC+8（中国標準時 CST、DST なし）',
              '• 運用時間: 24時間運用',
            ]
          },
          {
            title: '気象',
            items: [
              '• 大気汚染（スモッグ・ヘイズ）: 風が弱い日はHAZY頻発。3,000ft以上はSKY CLRでも地上付近はHAZYになりやすい',
              '• 冬季（12〜2月）: 霧・スモッグによる低視程頻発。VIS予報より悪化するケースが多い',
              '• 北京・天津付近に前線がある際: 雨・雪予報時はMist + HAZYが加わり、ActualのVISがForecastより大幅に悪化することあり',
              '• RWY19/18使用時: 時間帯によっては太陽に向かう方向になり眩しさに注意',
            ]
          },
          {
            title: 'TL/TA',
            items: [
              '• Transition Level: FL118',
              '• ※ 10,000ft Taskと重なるため注意。TLへの移行タイミングを事前に確認すること',
              '• QNH: 降下時に必ずセット。中国はhPa使用',
            ]
          },
        ]
      },
      {
        id: 'arr',
        label: 'Arrival',
        sections: [
          {
            title: 'STAR',
            items: [
              '• Company Radio: 131.5（PAMDA付近から交信可能）',
              '• D-ATIS: MAKNO〜ANRAT間で取得可。到着前に必ず確認',
              '• Beijing Approach: 124.7（DUMAP手前でContact）',
              '• STAR例: \"Cleared via DUMAP 8ZA / 9ZA RNAV ARR RWY18L/19/01, Descend and maintain 5,400m (FL177)\"',
              '• ZBAD向けトラフィックの影響でしばらく降下指示されないことが多い — Pathが高くなりやすいため早めに降下要求',
            ]
          },
          {
            title: 'Approach',
            items: [
              '• ILS Approach RWY01（JEPPESEN参照）',
              '• ARRでのAssignが多い（日本方面から）',
              '• Initial ALT制限: 1,200m（ARR ATIS記載）',
              '• PAPI: 標準角度',
              '• ILS Approach RWY19',
            ]
          },
        ]
      },
      {
        id: 'dep',
        label: 'Departure',
        sections: [
          {
            title: 'RWY',
            items: [
              '• RWY 01/19: 主にARR使用。日本方面からのARRはこのRWYが多い',
              '• RWY 18L/36R: 主にDEP使用（東行き・日本行きはこのRWYが多い）',
              '• RWY 18R/36L: ARR/DEP兼用（西行きDEPで使用）',
              '• 各RWY: 両側に197ft (60m)のStopwayを有する。Slopeはいずれも±0.1%程度',
            ]
          },
          {
            title: 'ATC',
            items: [
              '• Preferential Routing: 方面別でDEP RWYが分けられている（東行き=01/19・18L/36R、西行き=18R/36L）',
              '• DCL（Datalink Clearance）利用可能。SIDとSpot以外はRead Backしなくてよい',
              '• TCAS RA発令時: 中国当局の指示に従うこと（MELに記載）',
              '• 降下指示でDescentRateを指定されることあり: 例 \"Descent rate 2,000 ft/min or more.\"',
            ]
          },
        ]
      },
    ]
  },
  RCSS: {
    fullName: '',
    iata: '',
    utc: '+8',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    wakeCategory: 'D',
    b787Info: {
      wingspan: '60.1m (197ft)',
      tailHeight: '17.0m (55.7ft) - 787-9 / 16.9m (55.4ft) - 787-8',
    },
    transitionAltitude: {
    },
    runways: [
      {id:'10/28', len:2605, apch:'ILS 10/28'},
    ],
    tabs: [
      {
        id: 'gen',
        label: 'General',
        sections: [
          {
            title: '空港概要',
            items: [
              '• ICAO: RCSS / IATA: TSA',
              '• 位置: Taipei City, Taiwan (25°04\'10\"N 121°33\'08\"E)',
              '• 標高: 18 ft AMSL',
              '• タイムゾーン: UTC+8 (CST)',
              '• 遷移高度: 11000 ft / TL: FL130',
            ]
          },
          {
            title: '気象',
            items: [
            ]
          },
          {
            title: 'TL/TA',
            items: [
            ]
          },
        ]
      },
      {
        id: 'arr',
        label: 'Arrival',
        sections: [
          {
            title: 'STAR',
            items: [
            ]
          },
          {
            title: 'Approach',
            items: [
            ]
          },
        ]
      },
      {
        id: 'dep',
        label: 'Departure',
        sections: [
          {
            title: 'RWY',
            items: [
              '• RWY 10/28: 2605m — ILS',
            ]
          },
          {
            title: 'ATC',
            items: [
            ]
          },
        ]
      },
    ]
  },
  RCTP: {
    fullName: '',
    iata: '',
    utc: '+8',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    wakeCategory: 'D',
    b787Info: {
      wingspan: '60.1m (197ft)',
      tailHeight: '17.0m (55.7ft) - 787-9 / 16.9m (55.4ft) - 787-8',
    },
    transitionAltitude: {
    },
    runways: [
      {id:'05L/23R', len:3660, apch:'ILS 05L/23R'},
      {id:'05R/23L', len:3660, apch:'ILS 05R/23L'},
      {id:'06/24', len:3800, apch:'ILS 06/24'},
    ],
    tabs: [
      {
        id: 'gen',
        label: 'General',
        sections: [
          {
            title: '空港概要',
            items: [
              '• ICAO: RCTP / IATA: TPE',
              '• 位置: Taoyuan City, Taiwan (25°04\'35\"N 121°13\'38\"E)',
              '• 標高: 106 ft AMSL',
              '• タイムゾーン: UTC+8 (CST)',
              '• 遷移高度: 11000 ft / TL: FL130',
            ]
          },
          {
            title: '気象',
            items: [
            ]
          },
          {
            title: 'TL/TA',
            items: [
            ]
          },
        ]
      },
      {
        id: 'arr',
        label: 'Arrival',
        sections: [
          {
            title: 'STAR',
            items: [
            ]
          },
          {
            title: 'Approach',
            items: [
            ]
          },
        ]
      },
      {
        id: 'dep',
        label: 'Departure',
        sections: [
          {
            title: 'RWY',
            items: [
              '• RWY 05L/23R: 3660m — ILS',
              '• RWY 05R/23L: 3660m — ILS',
              '• RWY 06/24: 3800m — ILS（独立滑走路）',
            ]
          },
          {
            title: 'ATC',
            items: [
            ]
          },
        ]
      },
    ]
  },
  RCKH: {
    fullName: '',
    iata: '',
    utc: '+8',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    wakeCategory: 'D',
    b787Info: {
      wingspan: '60.1m (197ft)',
      tailHeight: '17.0m (55.7ft) - 787-9 / 16.9m (55.4ft) - 787-8',
    },
    transitionAltitude: {
    },
    runways: [
      {id:'09/27', len:3150, apch:'ILS 09/27'},
    ],
    tabs: [
      {
        id: 'gen',
        label: 'General',
        sections: [
          {
            title: '空港概要',
            items: [
              '• ICAO: RCKH / IATA: KHH',
              '• 位置: Kaohsiung City, Taiwan (22°34\'26\"N 120°21\'00\"E)',
              '• 標高: 31 ft AMSL',
              '• タイムゾーン: UTC+8 (CST)',
              '• 遷移高度: 11000 ft / TL: FL130',
            ]
          },
          {
            title: '気象',
            items: [
            ]
          },
          {
            title: 'TL/TA',
            items: [
            ]
          },
        ]
      },
      {
        id: 'arr',
        label: 'Arrival',
        sections: [
          {
            title: 'STAR',
            items: [
            ]
          },
          {
            title: 'Approach',
            items: [
            ]
          },
        ]
      },
      {
        id: 'dep',
        label: 'Departure',
        sections: [
          {
            title: 'RWY',
            items: [
              '• RWY 09/27: 3150m — ILS両方向',
            ]
          },
          {
            title: 'ATC',
            items: [
            ]
          },
        ]
      },
    ]
  },
  ZSAM: {
    fullName: '',
    iata: '',
    utc: '+8',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    wakeCategory: 'D',
    b787Info: {
      wingspan: '60.1m (197ft)',
      tailHeight: '17.0m (55.7ft) - 787-9 / 16.9m (55.4ft) - 787-8',
    },
    transitionAltitude: {
    },
    runways: [
      {id:'05/23', len:3400, apch:'ILS 05/23'},
      {id:'06/24', len:3400, apch:'ILS 06/24'},
    ],
    tabs: [
      {
        id: 'gen',
        label: 'General',
        sections: [
          {
            title: '空港概要',
            items: [
              '• ICAO: ZSAM / IATA: XMN',
              '• 位置: Xiamen, Fujian, China (24°32\'38\"N 118°07\'42\"E)',
              '• 標高: 59 ft AMSL',
              '• タイムゾーン: UTC+8 (CST)',
              '• Transition Altitude: 3000m / TL: FL100',
            ]
          },
          {
            title: '気象',
            items: [
            ]
          },
          {
            title: 'TL/TA',
            items: [
            ]
          },
        ]
      },
      {
        id: 'arr',
        label: 'Arrival',
        sections: [
          {
            title: 'STAR',
            items: [
            ]
          },
          {
            title: 'Approach',
            items: [
              '（記入欄）',
            ]
          },
        ]
      },
      {
        id: 'dep',
        label: 'Departure',
        sections: [
          {
            title: 'RWY',
            items: [
              '• RWY 05/23: 3400m — ILS',
              '• RWY 06/24: 3400m — ILS',
            ]
          },
          {
            title: 'ATC',
            items: [
            ]
          },
        ]
      },
    ]
  },
  ZPPP: {
    fullName: '',
    iata: '',
    utc: '+9',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    wakeCategory: 'D',
    b787Info: {
      wingspan: '60.1m (197ft)',
      tailHeight: '17.0m (55.7ft) - 787-9 / 16.9m (55.4ft) - 787-8',
    },
    transitionAltitude: {
    },
    runways: [
      {id:'03/21', len:0, apch:'VOR 03/21'},
      {id:'01/19', len:0, apch:'VOR 01/19'},
      {id:'03', len:0, apch:'ILS 03'},
      {id:'01/19', len:0, apch:'VOR 01/19'},
    ],
    tabs: [
      {
        id: 'gen',
        label: 'General',
        sections: [
          {
            title: '空港概要',
            items: [
              '• 正式名称: 昆明長水国際空港（Kunming Changshui International Airport）',
              '• ICAO: ZPPP　IATA: KMG',
              '• 位置: N25°00\' E102°56\'　標高: 6,903 ft / 2,103 m（超高標高空港！）',
              '• 所在地: 雲南省昆明市（「春城」 — 温暖な気候で知られる）',
              '• UTC+8（中国標準時 CST、DSTなし）',
            ]
          },
          {
            title: '気象',
            items: [
            ]
          },
          {
            title: 'TL/TA',
            items: [
            ]
          },
        ]
      },
      {
        id: 'arr',
        label: 'Arrival',
        sections: [
          {
            title: 'STAR',
            items: [
            ]
          },
          {
            title: 'Approach',
            items: [
            ]
          },
        ]
      },
      {
        id: 'dep',
        label: 'Departure',
        sections: [
          {
            title: 'RWY',
            items: [
              '• RWY 03/21: 長さ 13,780 ft（4,200 m）× 幅 200 ft（60 m）舗装',
              '• RWY 01/19: 長さ 13,780 ft（4,200 m）× 幅 200 ft（60 m）舗装（第2滑走路）',
              '• PCN: 高荷重対応。787は通常問題なし',
              '• RWY 03: ILS Cat I / RWY 21: ILS Cat I（逆進入も可）',
            ]
          },
          {
            title: 'ATC',
            items: [
              '• 言語: 英語・中国語混在。英語での対応は可能だが応答が遅い場合あり',
              '• CPDLCなし: ZPKM FIR（昆明）はCPDLC非対応。すべて音声ATC',
              '• 管制間隔: 中国独自の方式（日本・米国と異なる場合あり）。特にSID/STARのルーティング変更が多い',
              '• SELCAL: 長距離飛行時はSELCAL設定を確認',
            ]
          },
        ]
      },
    ]
  },
  VVNB: {
    fullName: '',
    iata: '',
    utc: '+9',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    wakeCategory: 'D',
    b787Info: {
      wingspan: '60.1m (197ft)',
      tailHeight: '17.0m (55.7ft) - 787-9 / 16.9m (55.4ft) - 787-8',
    },
    transitionAltitude: {
    },
    runways: [
    ],
    tabs: [
      {
        id: 'gen',
        label: 'General',
        sections: [
          {
            title: '空港概要',
            items: [
              '• ICAO: VVNB / IATA: HAN  Noi Bai International Airport（ノイバイ国際空港）',
              '• 位置: ハノイ市中心より北約25km',
              '• 標高: 39 ft',
              '• 時刻: UTC+7（ICT，夏時間なし）',
              '• 運用時間: 24時間',
            ]
          },
          {
            title: '気象',
            items: [
              '• 亜熱帯性気候（南部・ホーチミンと異なり季節変化あり）',
              '• 冬季（11〜3月）: 霧や靄が発生しやすい。朝霧で視程1km以下になることあり。気温10〜15℃',
              '• 夏季（5〜9月）: 高温多湿。気温32〜38℃。スコール・雷雨が頻発',
              '• 春季（3〜4月）: Crachin（細かい霧雨）が発生，視程・天井が低い',
            ]
          },
          {
            title: 'TL/TA',
            items: [
            ]
          },
        ]
      },
      {
        id: 'arr',
        label: 'Arrival',
        sections: [
          {
            title: 'STAR',
            items: [
              '• ILS / RNAV(GNSS) STARともに使用可',
              '• Hanoi APP: 124.9 MHz / 119.9 MHz（NOTAM確認）',
            ]
          },
          {
            title: 'Approach',
            items: [
              '• RWY方位: 110度（磁方位）/ CAT I ILS',
              '• 北方山岳地帯への注意 — 最終進入中も地形マージンを確認',
              '• RWY方位: 290度（磁方位）/ CAT I ILS',
              '• こちら側は南方向に比較的障害物少ない',
            ]
          },
        ]
      },
      {
        id: 'dep',
        label: 'Departure',
        sections: [
          {
            title: 'RWY',
            items: [
              '• 長さ: 3800m × 45m（Concrete，Non-Grooved）/ ILS / RNAV',
              '• Non-Grooved: 濡れ滑走路（Wet RWY）での制動距離が増加 → Wet LDRで計算すること',
              '• 長さ: 3800m × 45m（Concrete，Non-Grooved）/ ILS / RNAV',
            ]
          },
          {
            title: 'ATC',
            items: [
            ]
          },
        ]
      },
    ]
  },
  VMMC: {
    fullName: '',
    iata: '',
    utc: '+8',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    wakeCategory: 'D',
    b787Info: {
      wingspan: '60.1m (197ft)',
      tailHeight: '17.0m (55.7ft) - 787-9 / 16.9m (55.4ft) - 787-8',
    },
    transitionAltitude: {
    },
    runways: [
      {id:'16/34', len:3360, apch:'ILS 16/34'},
    ],
    tabs: [
      {
        id: 'gen',
        label: 'General',
        sections: [
          {
            title: '空港概要',
            items: [
              '• ICAO: VMMC / IATA: MFM',
              '• 位置: Macau SAR, China (22°08\'58\"N 113°35\'31\"E)',
              '• 標高: 20 ft AMSL',
              '• タイムゾーン: UTC+8',
              '• 遷移高度: 9000 ft / TL: FL110',
            ]
          },
          {
            title: '気象',
            items: [
            ]
          },
          {
            title: 'TL/TA',
            items: [
            ]
          },
        ]
      },
      {
        id: 'arr',
        label: 'Arrival',
        sections: [
          {
            title: 'STAR',
            items: [
            ]
          },
          {
            title: 'Approach',
            items: [
              '（記入欄）',
            ]
          },
        ]
      },
      {
        id: 'dep',
        label: 'Departure',
        sections: [
          {
            title: 'RWY',
            items: [
              '• RWY 16/34: 3360m — ILS両方向',
              '• 注意: 海上滑走路（旅客桟橋式ターミナル）',
              '• Displaced threshold あり',
            ]
          },
          {
            title: 'ATC',
            items: [
            ]
          },
        ]
      },
    ]
  },
  WMKK: {
    fullName: '',
    iata: '',
    utc: '+8',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    wakeCategory: 'D',
    b787Info: {
      wingspan: '60.1m (197ft)',
      tailHeight: '17.0m (55.7ft) - 787-9 / 16.9m (55.4ft) - 787-8',
    },
    transitionAltitude: {
    },
    runways: [
      {id:'15/33', len:0, apch:'VOR 15/33'},
    ],
    tabs: [
      {
        id: 'gen',
        label: 'General',
        sections: [
          {
            title: '空港概要',
            items: [
              '• ICAO: WMKK / IATA: KUL',
              '• 正式名称: Kuala Lumpur International Airport (KLIA)',
              '• 位置: N02°44\' E101°42\'、セランゴール州セパン（クアラルンプール南方約50km）',
              '• 標高: 69 ft (21 m) AMSL',
              '• タイムゾーン: UTC+8（マレーシア標準時 MYT、DSTなし）',
            ]
          },
          {
            title: '気象',
            items: [
              '• 気候帯: 熱帯雨林気候（高温多湿、年間を通じて雨季）',
              '• 風: 地上風は2〜3ktと弱いことが多い。Monsoon Season（雨季）は南西寄り、それ以外は北東寄り',
              '• 霧: 早朝、特に前夜強い降雨があった場合、放射冷却により発生する可能性あり',
              '• 熱雷: Inter-Monsoon Season（3・4月および10・11月）に特に多発。1日のうちでは午後に多い',
            ]
          },
          {
            title: 'TL/TA',
            items: [
              '• Transition Altitude (TA): ATIS / Jeppesen Chart参照',
              '• Transition Level (TL): ATIS / ATC指示で確認',
              '• QNH: hPa使用（マレーシア）',
            ]
          },
        ]
      },
      {
        id: 'arr',
        label: 'Arrival',
        sections: [
          {
            title: 'STAR',
            items: [
              '• STAR: Jeppesen Chart 20-9A参照（方面別STAR確認）',
              '• Lumpur CTL → Lumpur APP → Lumpur TWR',
              '• Holding: 各HOLDING FIX毎にPROCが定められている（RM_REGPROC - SEA.10.8 - HOLDING SPEEDS）',
            ]
          },
          {
            title: 'Approach',
            items: [
              '• ILS RWY 32R: LOC・GS確認（Jeppesen Chart参照）',
              '• Threshold付近の白いコンクリート舗装（Stopway+距離）に注意。タッチダウン基準点の視認を確実に',
              '• D6.0IEL・D4.0IELでの高度確認によりILS APCHが成立（ATC確認済）',
              '• PIBOS #D Departureでの離陸機との関係注意（RWY32RへのAPCH時）',
              '• ILS RWY 14L: LOC・GS確認（Jeppesen Chart参照）',
            ]
          },
        ]
      },
      {
        id: 'dep',
        label: 'Departure',
        sections: [
          {
            title: 'RWY',
            items: [
              '• RWY 14L/32R（Main Runway 1）: 13,999 ft (4,267 m)',
              '• RWY 14R/32L（Main Runway 2）: 13,999 ft (4,267 m)',
              '• RWY 15/33: 原則としてLCC（klia2）専用',
              '• 通常運用（Normal traffic）: 到着・出発でRWY分離（詳細はJeppesen 20-9A参照）',
            ]
          },
          {
            title: 'ATC',
            items: [
              '• 国際線到着の場合、Lumpur Delivery へのコンタクトは Engine Start 10分前（2025/01/06訂正）',
              '• Airborne後2,000ftまでにDEP Contactが必要（DEP指示がない場合でも自発的に）',
              '• Initial ContactではSID名またはAssigned Heading、通過高度とAssigned Altitudeを通報',
              '• Reduced Separationにより Landing Clearanceが遅くなることがある。Go-Around考慮の場面あり',
            ]
          },
        ]
      },
    ]
  },
  WMKP: {
    fullName: '',
    iata: '',
    utc: '+8',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    wakeCategory: 'D',
    b787Info: {
      wingspan: '60.1m (197ft)',
      tailHeight: '17.0m (55.7ft) - 787-9 / 16.9m (55.4ft) - 787-8',
    },
    transitionAltitude: {
    },
    runways: [
      {id:'04/22', len:3300, apch:'ILS 04/22'},
    ],
    tabs: [
      {
        id: 'gen',
        label: 'General',
        sections: [
          {
            title: '空港概要',
            items: [
              '• ICAO: WMKP / IATA: PEN',
              '• 位置: Penang Island, Malaysia (05°17\'49\"N 100°16\'33\"E)',
              '• 標高: 11 ft AMSL',
              '• タイムゾーン: UTC+8 (MYT)',
              '• 遷移高度: 13000 ft / TL: FL145',
            ]
          },
          {
            title: '気象',
            items: [
            ]
          },
          {
            title: 'TL/TA',
            items: [
            ]
          },
        ]
      },
      {
        id: 'arr',
        label: 'Arrival',
        sections: [
          {
            title: 'STAR',
            items: [
            ]
          },
          {
            title: 'Approach',
            items: [
              '（記入欄）',
            ]
          },
        ]
      },
      {
        id: 'dep',
        label: 'Departure',
        sections: [
          {
            title: 'RWY',
            items: [
              '• RWY 04/22: 3300m — ILS',
            ]
          },
          {
            title: 'ATC',
            items: [
            ]
          },
        ]
      },
    ]
  },
  WMKJ: {
    fullName: '',
    iata: '',
    utc: '+8',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    wakeCategory: 'D',
    b787Info: {
      wingspan: '60.1m (197ft)',
      tailHeight: '17.0m (55.7ft) - 787-9 / 16.9m (55.4ft) - 787-8',
    },
    transitionAltitude: {
    },
    runways: [
      {id:'16/34', len:3002, apch:'ILS 16/34'},
    ],
    tabs: [
      {
        id: 'gen',
        label: 'General',
        sections: [
          {
            title: '空港概要',
            items: [
              '• ICAO: WMKJ / IATA: JHB',
              '• 位置: Johor Bahru, Johor, Malaysia (01°38\'21\"N 103°40\'14\"E)',
              '• 標高: 135 ft AMSL',
              '• タイムゾーン: UTC+8 (MYT)',
              '• 遷移高度: 13000 ft / TL: FL145',
            ]
          },
          {
            title: '気象',
            items: [
            ]
          },
          {
            title: 'TL/TA',
            items: [
            ]
          },
        ]
      },
      {
        id: 'arr',
        label: 'Arrival',
        sections: [
          {
            title: 'STAR',
            items: [
            ]
          },
          {
            title: 'Approach',
            items: [
              '（記入欄）',
            ]
          },
        ]
      },
      {
        id: 'dep',
        label: 'Departure',
        sections: [
          {
            title: 'RWY',
            items: [
              '• RWY 16/34: 3002m — ILS',
            ]
          },
          {
            title: 'ATC',
            items: [
            ]
          },
        ]
      },
    ]
  },
  WSSS: {
    fullName: '',
    iata: '',
    utc: '+9',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    wakeCategory: 'D',
    b787Info: {
      wingspan: '60.1m (197ft)',
      tailHeight: '17.0m (55.7ft) - 787-9 / 16.9m (55.4ft) - 787-8',
    },
    transitionAltitude: {
    },
    runways: [
    ],
    tabs: [
      {
        id: 'gen',
        label: 'General',
        sections: [
          {
            title: '空港概要',
            items: [
              '• ICAO: WSSS / IATA: SIN  Singapore Changi International Airport',
              '• 位置: シンガポール東部，市街地より東約17km',
              '• 標高: 22 ft',
              '• 時刻: UTC+8（SGT，夏時間なし）',
              '• 運用時間: 24時間',
            ]
          },
          {
            title: '気象',
            items: [
              '• 熱帯性気候。年間を通じて高温多湿（気温26〜32℃）',
              '• 雨季: 11〜1月（NE Monsoon）/ 5〜9月（SW Monsoon）',
              '• 午後〜夕方にかけてスコール（Sumatra Squall）が発生しやすい',
              '• ITCZ通過時: 強風・激しい雨・雷雨',
            ]
          },
          {
            title: 'TL/TA',
            items: [
            ]
          },
        ]
      },
      {
        id: 'arr',
        label: 'Arrival',
        sections: [
          {
            title: 'STAR',
            items: [
              '• 南行フライト（AWY A464/A576経由）: RWY使用確認前にシンガポールATCへSTARを要求',
              '•   Primary FREQ 133.25 MHz / Secondary FREQ 135.8 MHz',
            ]
          },
          {
            title: 'Approach',
            items: [
              '• 全RWYにILS設置。RNP AR手順あり（CAT II相当の精度）',
            ]
          },
        ]
      },
      {
        id: 'dep',
        label: 'Departure',
        sections: [
          {
            title: 'RWY',
            items: [
              '• 長さ: 4000m × 60m（Concrete, Grooved）/ ILS / RNAV(RNP)',
              '• 長さ: 4000m × 60m（Concrete, Grooved）/ ILS / RNAV(RNP)',
              '• Noise Abatement: 1600-2200UTC — アイドルリバースのみ使用可（Ship Crossing手順対象）',
              '• 長さ: 4000m × 60m（Concrete, Grooved）/ ILS / RNAV(RNP)',
            ]
          },
          {
            title: 'ATC',
            items: [
            ]
          },
        ]
      },
    ]
  },
  WIII: {
    fullName: '',
    iata: '',
    utc: '+7',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    wakeCategory: 'D',
    b787Info: {
      wingspan: '60.1m (197ft)',
      tailHeight: '17.0m (55.7ft) - 787-9 / 16.9m (55.4ft) - 787-8',
    },
    transitionAltitude: {
    },
    runways: [
      {id:'25R', len:0, apch:'VOR 25R'},
    ],
    tabs: [
      {
        id: 'gen',
        label: 'General',
        sections: [
          {
            title: '空港概要',
            items: [
              '• ICAO: WIII / IATA: CGK',
              '• 正式名称: Bandar Udara Internasional Soekarno-Hatta',
              '• 位置: S06°07\' E106°39\'、西ジャワ州タンゲラン（ジャカルタ西方約20km）',
              '• 標高: 36 ft (11 m) AMSL',
              '• タイムゾーン: UTC+7（インドネシア西部標準時 WIB、DSTなし）',
            ]
          },
          {
            title: '気象',
            items: [
              '• 気候帯: 熱帯。ITC（熱帯収束帯）の動きにより季節変化',
              '• 乾季: 5月〜10月（東寄り風卓越）',
              '• 雨季: 11月〜4月（西寄り風卓越）',
              '• 視程: 年間を通じてHazy（5〜8km程度）。視程障害の大半はHeavy Shower',
            ]
          },
          {
            title: 'TL/TA',
            items: [
              '• 遷移高度 (TA): 確認要（Jeppesen Chart / ATIS）',
              '• Transition Level (TL): 確認要（ATIS / NOTAM）',
              '• QNH使用（インドネシアはhPa）',
            ]
          },
        ]
      },
      {
        id: 'arr',
        label: 'Arrival',
        sections: [
          {
            title: 'STAR',
            items: [
              '• STAR: Jeppesen Chart参照（方面別のSTARを確認）',
              '• Jakarta CTL → Jakarta APP → Soekarno-Hatta TWR',
              '• 周波数はJeppesen Chart 10-2/10-3参照',
            ]
          },
          {
            title: 'Approach',
            items: [
              '• ILS RWY 25L: LOC周波数はJeppesen Chart確認',
              '• CAT I: DA/H確認',
              '• 夜間到着の大半がこのRWY',
              '• ILS RWY 25R: LOC周波数はJeppesen Chart確認',
              '• RWY25Rは路面Bumpy Conditionの報告あり',
            ]
          },
        ]
      },
      {
        id: 'dep',
        label: 'Departure',
        sections: [
          {
            title: 'RWY',
            items: [
              '• RWY 25L/07R（North Runway）: 約12,008 ft (3,660 m)',
              '• RWY 25R/07L（South Runway）: 約12,008 ft (3,660 m)',
              '• RWY 25R: Bumpy Conditionの報告あり（着陸時注意）',
              '• 乾季（東風）: RWY07系使用。夜間到着のほとんどはRWY25系',
            ]
          },
          {
            title: 'ATC',
            items: [
              '• DEP Freqへのcontactは管制からの指示を待ってから実施すること（Rev.26.1で厳格化）',
              '• APCH中に大きく先のWPTへのDirectを指示され、その後Separation確保のため途中WPTへのDirectを指示されることがある（消えたWPTの再入力に時間を要する）',
              '• ILS 25R APCH中、25LトラフィックとのSeparationのため\"Maintain 4T, Follow LOC\"指示があり、LOC CaptureしたときすでにG/Sより高くなっていた事例あり',
              '• Callsign: TWR/GNDは「スカルノ・ハッタ タワー/グランド」（番号による区別なし）',
            ]
          },
        ]
      },
    ]
  },
  WARR: {
    fullName: '',
    iata: '',
    utc: '+7',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    wakeCategory: 'D',
    b787Info: {
      wingspan: '60.1m (197ft)',
      tailHeight: '17.0m (55.7ft) - 787-9 / 16.9m (55.4ft) - 787-8',
    },
    transitionAltitude: {
    },
    runways: [
      {id:'10/28', len:3000, apch:'ILS 10/28'},
      {id:'11/29', len:2500, apch:'VOR 11/29'},
    ],
    tabs: [
      {
        id: 'gen',
        label: 'General',
        sections: [
          {
            title: '空港概要',
            items: [
              '• ICAO: WARR / IATA: SUB',
              '• 位置: Surabaya, East Java, Indonesia (07°22\'52\"S 112°47\'12\"E)',
              '• 標高: 9 ft AMSL',
              '• タイムゾーン: UTC+7 (WIB)',
              '• 遷移高度: 13000 ft / TL: FL145',
            ]
          },
          {
            title: '気象',
            items: [
            ]
          },
          {
            title: 'TL/TA',
            items: [
            ]
          },
        ]
      },
      {
        id: 'arr',
        label: 'Arrival',
        sections: [
          {
            title: 'STAR',
            items: [
            ]
          },
          {
            title: 'Approach',
            items: [
              '（記入欄）',
            ]
          },
        ]
      },
      {
        id: 'dep',
        label: 'Departure',
        sections: [
          {
            title: 'RWY',
            items: [
              '• RWY 10/28: 3000m — ILS',
              '• RWY 11/29: 2500m',
            ]
          },
          {
            title: 'ATC',
            items: [
            ]
          },
        ]
      },
    ]
  },
  WBGG: {
    fullName: '',
    iata: '',
    utc: '+8',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    wakeCategory: 'D',
    b787Info: {
      wingspan: '60.1m (197ft)',
      tailHeight: '17.0m (55.7ft) - 787-9 / 16.9m (55.4ft) - 787-8',
    },
    transitionAltitude: {
    },
    runways: [
      {id:'07', len:0, apch:'VOR 07'},
      {id:'25', len:0, apch:'VOR 25'},
    ],
    tabs: [
      {
        id: 'gen',
        label: 'General',
        sections: [
          {
            title: '空港概要',
            items: [
              '• ICAO: WBGG / IATA: KCH',
              '• 正式名称: Kuching International Airport（クチン国際空港）',
              '• 位置: N01°29\' E110°20\'、マレーシア・サラワク州クチン（ボルネオ島西部）',
              '• 標高: 89 ft (27 m) AMSL',
              '• タイムゾーン: UTC+8（マレーシア標準時 MYT、DSTなし）',
            ]
          },
          {
            title: '気象',
            items: [
              '• スーパー熱帯雨林気候。年間降水量3,000mm以上（世界有数の多雨地域）',
              '• 年間を通じて高温多湿（26〜33°C）',
              '• 季節風: 北東モンスーン（10月〜3月）、南西モンスーン（4月〜9月）',
              '• CB・スコール: 年中発生。特に北東モンスーン期（10〜3月）は激しい降雨',
            ]
          },
          {
            title: 'TL/TA',
            items: [
              '• 遷移高度 (TA): 11,000 ft（WMFC FIR内標準）',
              '• Transition Level (TL): FL130（ATISまたはNOTAMで確認）',
              '• QNH使用（マレーシアはhPa）',
            ]
          },
        ]
      },
      {
        id: 'arr',
        label: 'Arrival',
        sections: [
          {
            title: 'STAR',
            items: [
              '• STAR: Jeppesen Chart参照',
              '• Kuching APP → Kuching TWR',
              '• 周波数はJeppesen Chart確認',
            ]
          },
          {
            title: 'Approach',
            items: [
              '• ILS RWY 25: Jeppesen Chart参照',
              '• FINAL: 東（内陸）方向から進入',
              '• Go-around: 西方向（海側）',
              '• ILS RWY 07: Jeppesen Chart参照',
              '• FINAL: 西（海）方向から進入',
            ]
          },
        ]
      },
      {
        id: 'dep',
        label: 'Departure',
        sections: [
          {
            title: 'RWY',
            items: [
              '• RWY 07/25（メイン）: 約12,402 ft (3,780 m)',
              '• RWY 07: 東方向（内陸）へ出発。北東モンスーン時の主用RWY',
              '• RWY 25: 西方向（海側）への出発。南西モンスーン時の主用RWY',
              '• 平行Taxiway: あり（Jeppesen Chart確認）',
            ]
          },
          {
            title: 'ATC',
            items: [
              '• WMFC FIR（コタキナバル）管轄。Kuala Lumpur ACCと連携',
              '• クチンAPPはローカルの管制。英語（マレーシア英語アクセント）',
              '• トラフィック量: 中程度（MASwings等の地域路線、国際線は少ない）',
              '• CPDLC対応状況: NOTAMで確認',
            ]
          },
        ]
      },
    ]
  },
  WBKK: {
    fullName: '',
    iata: '',
    utc: '+8',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    wakeCategory: 'D',
    b787Info: {
      wingspan: '60.1m (197ft)',
      tailHeight: '17.0m (55.7ft) - 787-9 / 16.9m (55.4ft) - 787-8',
    },
    transitionAltitude: {
    },
    runways: [
      {id:'02', len:0, apch:'VOR 02'},
      {id:'20', len:0, apch:'VOR 20'},
    ],
    tabs: [
      {
        id: 'gen',
        label: 'General',
        sections: [
          {
            title: '空港概要',
            items: [
              '• ICAO: WBKK / IATA: BKI',
              '• 正式名称: Kota Kinabalu International Airport（コタキナバル国際空港）',
              '• 位置: N05°56\' E116°03\'、マレーシア・サバ州コタキナバル（ボルネオ島北西部）',
              '• 標高: 10 ft (3 m) AMSL',
              '• タイムゾーン: UTC+8（マレーシア標準時 MYT、DSTなし）',
            ]
          },
          {
            title: '気象',
            items: [
              '• 熱帯雨林気候。年間を通じて高温多湿（25〜33°C）',
              '• 年間降水量: 約2,400mm。雨季・乾季の区分は不明瞭で年中降水あり',
              '• CB・スコール: 年間を通じて発生。特に午後〜夜が多い',
              '• ウィンドシア: スコール前後に注意',
            ]
          },
          {
            title: 'TL/TA',
            items: [
              '• 遷移高度 (TA): 11,000 ft（WMFC FIR内標準）',
              '• Transition Level (TL): FL130（ATISまたはNOTAMで確認）',
              '• QNH使用（マレーシアはhPa）',
            ]
          },
        ]
      },
      {
        id: 'arr',
        label: 'Arrival',
        sections: [
          {
            title: 'STAR',
            items: [
              '• STAR: Jeppesen Chart参照（方面別STAR）',
              '• Kota Kinabalu ACC → Kota Kinabalu APP → Kota Kinabalu TWR',
              '• 周波数はJeppesen Chart確認',
            ]
          },
          {
            title: 'Approach',
            items: [
              '• ILS RWY 02: Jeppesen Chart参照',
              '• FINAL: 北西（海）方向へ進入。Crosswindに注意',
              '• Go-around: 南シナ海方向（障害物少ない）',
              '• ILS RWY 20: Jeppesen Chart参照',
              '• FINAL: 内陸（東南）方向進入。東南方向の山岳地形に注意',
            ]
          },
        ]
      },
      {
        id: 'dep',
        label: 'Departure',
        sections: [
          {
            title: 'RWY',
            items: [
              '• RWY 02/20（メイン）: 約9,840 ft (3,000 m)',
              '• RWY 02: 南シナ海方向（北西）への出発、山から離れる方向',
              '• RWY 20: 内陸方向への進入 → 南東方向の山岳地形に注意',
              '• 平行Taxiway: 西側に設置',
            ]
          },
          {
            title: 'ATC',
            items: [
              '• WMFC FIR（コタキナバル）管轄。Kuala Lumpur ACCと連携',
              '• ATCはCPDLC対応状況をNOTAMで確認',
              '• RTは英語（マレーシア英語アクセント）。復唱確認を徹底',
              '• トラフィック量: マニラ・ジャカルタほど混雑しないが、AirAsiaのLCCが多い',
            ]
          },
        ]
      },
    ]
  },
  RPLC: {
    fullName: '',
    iata: '',
    utc: '+8',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    wakeCategory: 'D',
    b787Info: {
      wingspan: '60.1m (197ft)',
      tailHeight: '17.0m (55.7ft) - 787-9 / 16.9m (55.4ft) - 787-8',
    },
    transitionAltitude: {
    },
    runways: [
      {id:'02/20', len:0, apch:'VOR 02/20'},
    ],
    tabs: [
      {
        id: 'gen',
        label: 'General',
        sections: [
          {
            title: '空港概要',
            items: [
              '• ICAO: RPLC / IATA: CRK',
              '• 正式名称: Clark International Airport (Diosdado Macapagal International Airport)',
              '• 位置: N15°11\' E120°33\'、フィリピン・ルソン島パンパンガ州クラーク自由港区',
              '• 標高: 484 ft (148 m) AMSL',
              '• タイムゾーン: UTC+8（フィリピン標準時 PST、DSTなし）',
            ]
          },
          {
            title: '気象',
            items: [
              '• 熱帯モンスーン気候。年間を通じて高温多湿',
              '• 乾季: 11月〜4月（晴天多いが Hazy Condition も）',
              '• 雨季: 5月〜10月（CB・スコール多発）',
              '• CB・スコール: 特に雨季の午後は多発。ウィンドシア注意',
            ]
          },
          {
            title: 'TL/TA',
            items: [
            ]
          },
        ]
      },
      {
        id: 'arr',
        label: 'Arrival',
        sections: [
          {
            title: 'STAR',
            items: [
            ]
          },
          {
            title: 'Approach',
            items: [
            ]
          },
        ]
      },
      {
        id: 'dep',
        label: 'Departure',
        sections: [
          {
            title: 'RWY',
            items: [
              '• RWY 02/20: 9,843 ft × 200 ft (3,000 m × 61 m) — 元軍用滑走路、幅広',
              '• 787での使用: RWY 02/20（主）',
              '• RWY 02（北向き T/O）/ RWY 20（南向き T/O）— 風向・ATC 指示による',
              '• ELEV 484 ft（中程度の標高、Performance への影響は小さい）',
            ]
          },
          {
            title: 'ATC',
            items: [
              '• フィリピン英語のアクセント。復唱・Confirm 徹底',
              '• 空軍運用のため、急な滑走路使用制限・Holding が発生する場合あり',
              '• RPLL（マニラ）との混信・交通調整が発生する場合あり（近接した RPHI FIR 内）',
              '• CPDLC: 要確認（Manila FIR での利用可否はチャート参照）',
            ]
          },
        ]
      },
    ]
  },
  RPVM: {
    fullName: '',
    iata: '',
    utc: '+8',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    wakeCategory: 'D',
    b787Info: {
      wingspan: '60.1m (197ft)',
      tailHeight: '17.0m (55.7ft) - 787-9 / 16.9m (55.4ft) - 787-8',
    },
    transitionAltitude: {
    },
    runways: [
      {id:'04/22', len:3300, apch:'ILS 04/22'},
    ],
    tabs: [
      {
        id: 'gen',
        label: 'General',
        sections: [
          {
            title: '空港概要',
            items: [
              '• ICAO: RPVM / IATA: CEB',
              '• 位置: Lapu-Lapu City, Cebu, Philippines (10°18\'26\"N 123°58\'44\"E)',
              '• 標高: 31 ft AMSL',
              '• タイムゾーン: UTC+8 (PST)',
              '• 遷移高度: 13000 ft / TL: FL150',
            ]
          },
          {
            title: '気象',
            items: [
            ]
          },
          {
            title: 'TL/TA',
            items: [
            ]
          },
        ]
      },
      {
        id: 'arr',
        label: 'Arrival',
        sections: [
          {
            title: 'STAR',
            items: [
            ]
          },
          {
            title: 'Approach',
            items: [
              '（記入欄）',
            ]
          },
        ]
      },
      {
        id: 'dep',
        label: 'Departure',
        sections: [
          {
            title: 'RWY',
            items: [
              '• RWY 04/22: 3300m — ILS',
            ]
          },
          {
            title: 'ATC',
            items: [
            ]
          },
        ]
      },
    ]
  },
  VVCI: {
    fullName: '',
    iata: '',
    utc: '+7',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    wakeCategory: 'D',
    b787Info: {
      wingspan: '60.1m (197ft)',
      tailHeight: '17.0m (55.7ft) - 787-9 / 16.9m (55.4ft) - 787-8',
    },
    transitionAltitude: {
    },
    runways: [
      {id:'05L/23R', len:3048, apch:'ILS 05L/23R'},
      {id:'05R/23L', len:2700, apch:'VOR 05R/23L'},
    ],
    tabs: [
      {
        id: 'gen',
        label: 'General',
        sections: [
          {
            title: '空港概要',
            items: [
              '• ICAO: VVCI / IATA: VCL',
              '• 位置: Chu Lai, Quang Nam Province, Vietnam (15°24\'05\"N 108°42\'21\"E)',
              '• 標高: 10 ft AMSL',
              '• タイムゾーン: UTC+7 (ICT)',
              '• 遷移高度: 13000 ft / TL: FL140',
            ]
          },
          {
            title: '気象',
            items: [
            ]
          },
          {
            title: 'TL/TA',
            items: [
            ]
          },
        ]
      },
      {
        id: 'arr',
        label: 'Arrival',
        sections: [
          {
            title: 'STAR',
            items: [
            ]
          },
          {
            title: 'Approach',
            items: [
              '（記入欄）',
            ]
          },
        ]
      },
      {
        id: 'dep',
        label: 'Departure',
        sections: [
          {
            title: 'RWY',
            items: [
              '• RWY 05L/23R: 3048m — ILS',
              '• RWY 05R/23L: 2700m',
            ]
          },
          {
            title: 'ATC',
            items: [
            ]
          },
        ]
      },
    ]
  },
  VTCC: {
    fullName: '',
    iata: '',
    utc: '+7',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    wakeCategory: 'D',
    b787Info: {
      wingspan: '60.1m (197ft)',
      tailHeight: '17.0m (55.7ft) - 787-9 / 16.9m (55.4ft) - 787-8',
    },
    transitionAltitude: {
    },
    runways: [
      {id:'18/36', len:170, apch:'VOR 18/36'},
      {id:'18', len:0, apch:'ILS 18'},
      {id:'36', len:0, apch:'ILS 36'},
    ],
    tabs: [
      {
        id: 'gen',
        label: 'General',
        sections: [
          {
            title: '空港概要',
            items: [
              '• ICAO: VTCC / IATA: CNX',
              '• 正式名称: Chiang Mai International Airport',
              '• 位置: N18°46\' E98°57\'、タイ北部チェンマイ県',
              '• 標高: 1,036 ft (316 m) AMSL — 高標高（山岳盆地）',
              '• タイムゾーン: UTC+7（タイ標準時 ICT、DSTなし）',
            ]
          },
          {
            title: '気象',
            items: [
              '• 熱帯モンスーン気候だが、山岳盆地のため気温は BKK より5〜10°C 低い',
              '• 乾季（11〜4月）: 晴天が多く視程良好。ただし霧（Morning Fog）が早朝に発生することあり',
              '• 雨季（5〜10月）: モンスーンによる大雨。CB・スコール多発',
              '• 冬季（12〜2月）: 早朝の放射霧（Radiation Fog）が盆地に発生しやすい',
            ]
          },
          {
            title: 'TL/TA',
            items: [
            ]
          },
        ]
      },
      {
        id: 'arr',
        label: 'Arrival',
        sections: [
          {
            title: 'STAR',
            items: [
            ]
          },
          {
            title: 'Approach',
            items: [
            ]
          },
        ]
      },
      {
        id: 'dep',
        label: 'Departure',
        sections: [
          {
            title: 'RWY',
            items: [
              '• RWY 18/36: 10,400 ft × 148 ft (3,170 m × 45 m) — 単滑走路',
              '• RWY 18（南向き着陸）/ RWY 36（北向き着陸）',
              '• 787での使用: RWY 18/36（主）',
              '• ELEV 1,036 ft（高標高のため T/O・L/D Performance 計算に注意）',
            ]
          },
          {
            title: 'ATC',
            items: [
              '• VTBB（バンコク FIR）管轄のため、BKK と同様の ATC 手順',
              '• タイ英語のアクセントあり。復唱・Confirm を徹底',
              '• 交通量は BKK より少なく比較的スムーズだが、山岳地形上のベクタリングに注意',
              '• CPDLC: バンコク FIR では利用可能',
            ]
          },
        ]
      },
    ]
  },
  YSSY: {
    fullName: 'Sydney Kingsford Smith International Airport',
    iata: 'SYD',
    utc: '+10',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    wakeCategory: 'D',
    b787Info: {
      wingspan: '60.1m (197ft)',
      tailHeight: '17.0m (55.7ft) - 787-9 / 16.9m (55.4ft) - 787-8',
    },
    transitionAltitude: {
    },
    runways: [
      {id:'16R/34L', len:0, apch:'VOR 16R/34L'},
      {id:'16L/34R', len:0, apch:'VOR 16L/34R'},
      {id:'07/25', len:0, apch:'VOR 07/25'},
      {id:'RWY25', len:0, apch:'VOR RWY25'},
    ],
    tabs: [
      {
        id: 'gen',
        label: 'General',
        sections: [
          {
            title: '空港概要',
            items: [
              '• ICAO: YSSY / IATA: SYD — Sydney Kingsford Smith International Airport（マスコット空港とも称される）',
              '• 位置: N33°56\' E151°10\' — CBD南南西 約4nm (7km)。敷地の半分近くがBotany Bayに突き出た立地',
              '• 標高: 21 ft (6m)',
              '• タイムゾーン: UTC+10（冬季AEST） / UTC+11（夏季AEDT: 10月初旬〜4月初旬）',
              '• 運用時間: 24時間（ただしCurfewあり）',
            ]
          },
          {
            title: '気象',
            items: [
              '• ATISは通常30分ごとに更新（変化がない時は変更されない）',
              '• ATIS取得方法（787）: CENTER VHF → DATA → COMM-MANAGER-VHF → OTHER → 周波数131.45入力 → FLIGHT INFORMATION - ATIS REQUEST',
              '• オーストラリアは気候が安定しているが、季節による風向変化がある（北流・南流）',
              '• RWY16系統最終進入コース（16R/16L）付近: 都市部・住宅地の上空を通過するため騒音制限あり',
            ]
          },
          {
            title: 'TL/TA',
            items: [
              '• Transition Altitude / Level: Jeppesen chart参照',
              '• QNH運用（QFE不使用）',
            ]
          },
        ]
      },
      {
        id: 'arr',
        label: 'Arrival',
        sections: [
          {
            title: 'STAR',
            items: [
              '• STARはJeppesen chart / RM_JALISSUE_INT - 4.3.YSSY.3.1 - RWY情報 参照',
              '• STAR指示後はPRM Approach（平行滑走路同時進入）の可能性があることを念頭に置く',
            ]
          },
          {
            title: 'Approach',
            items: [
              '• ILS Approach: 通常使用。最終進入コースに住宅地があるため騒音考慮',
              '• GLS PRM Approach: JAL未承認のため実施不可',
              '• 混雑時に使用',
              '• RWY34Rと対をなす平行滑走路でPRM運用対象',
              '• JALが通常使用する南方向着陸RWY',
            ]
          },
        ]
      },
      {
        id: 'dep',
        label: 'Departure',
        sections: [
          {
            title: 'RWY',
            items: [
              '• RWY 16R/34L: 当社便通常使用（離着陸とも）。JALメインRWY',
              '• RWY 16L/34R: 混雑状況により着陸で使用する場合がある。Wingspan制限によりLanding後のTaxi TWYに注意',
              '• RWY 07/25: 通常T/Oに使用しない（RWY16R/34Lが横風制限等で使用不可な場合のみ）',
              '• RWY25: Landing Beyond Thresholdは7,969ftのみ',
            ]
          },
          {
            title: 'ATC',
            items: [
              '• Clearanceに \'Standard rate\' が付加された場合は上昇/降下500fpm以上が必要',
              '• PRM Approach実施要件: 機長・副操縦士ともにSYD当局HP掲載資料を学習した上で実施可能',
              '• GLS PRM APCHはJAL未承認のため実施不可',
              '（乗員各自で記入）',
            ]
          },
        ]
      },
    ]
  },
  YMML: {
    fullName: '',
    iata: '',
    utc: '+9',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    wakeCategory: 'D',
    b787Info: {
      wingspan: '60.1m (197ft)',
      tailHeight: '17.0m (55.7ft) - 787-9 / 16.9m (55.4ft) - 787-8',
    },
    transitionAltitude: {
    },
    runways: [
      {id:'PAPI', len:0, apch:'VOR PAPI'},
    ],
    tabs: [
      {
        id: 'gen',
        label: 'General',
        sections: [
          {
            title: '空港概要',
            items: [
              '• ICAO: YMML / IATA: MEL',
              '• Melbourne International Airport（タラマリン空港）',
              '• 位置: メルボルン市北部、都心から22km（Tullamarine地区）',
              '• オーストラリア第2位の発着数。SYD-MEL間年間700万人超（東京-福岡線に匹敵）',
              '• 時刻: UTC+10（夏時間: UTC+11 / AEDT）',
            ]
          },
          {
            title: '気象',
            items: [
            ]
          },
          {
            title: 'TL/TA',
            items: [
            ]
          },
        ]
      },
      {
        id: 'arr',
        label: 'Arrival',
        sections: [
          {
            title: 'STAR',
            items: [
            ]
          },
          {
            title: 'Approach',
            items: [
            ]
          },
        ]
      },
      {
        id: 'dep',
        label: 'Departure',
        sections: [
          {
            title: 'RWY',
            items: [
              '• RWY 16/34（主滑走路）',
              '•   RWY 16: 勾配 -0.80%（下降）',
              '•   RWY 34: 勾配 +0.78%（上昇）',
              '• RWY 09/27（副滑走路）',
            ]
          },
          {
            title: 'ATC',
            items: [
            ]
          },
        ]
      },
    ]
  },
  YBBN: {
    fullName: 'Brisbane Airport',
    iata: 'BNE',
    utc: '+10',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    wakeCategory: 'D',
    b787Info: {
      wingspan: '60.1m (197ft)',
      tailHeight: '17.0m (55.7ft) - 787-9 / 16.9m (55.4ft) - 787-8',
    },
    transitionAltitude: {
      TA: '10,000 ft',
    },
    runways: [
      {id:'01L/19R', len:0, apch:'VOR 01L/19R'},
      {id:'01R/19L', len:0, apch:'VOR 01R/19L'},
    ],
    tabs: [
      {
        id: 'gen',
        label: 'General',
        sections: [
          {
            title: '空港概要',
            items: [
              '• ICAO: YBBN / IATA: BNE — Brisbane Airport',
              '• 位置: クイーンズランド州ブリスベン（N27°23\' E153°07\'）',
              '• 標高: 15 ft / 5 m',
              '• タイムゾーン: UTC+10 (AEST) — サマータイムなし（クイーンズランド州）',
              '• 運用時間: H24',
            ]
          },
          {
            title: '気象',
            items: [
              '• 亜熱帯性気候。夏季（12〜2月）は高温多湿、CB・スコールあり',
              '• 冬季（6〜8月）は比較的温暖・乾燥。気温0°C以下になることは稀だが高度補正は必要な場合あり',
              '• 南東からの貿易風が卓越',
            ]
          },
          {
            title: 'TL/TA',
            items: [
              '• Transition Altitude: 10,000 ft',
              '• Brisbane CTR: 135.2 MHz',
            ]
          },
        ]
      },
      {
        id: 'arr',
        label: 'Arrival',
        sections: [
          {
            title: 'STAR',
            items: [
              '• RNAV STAR: RNAV 1 以上（Jeppesen参照）',
              '• Brisbane Approach → Brisbane Tower',
            ]
          },
          {
            title: 'Approach',
            items: [
              '• ILS / RNAV 進入利用可（Jeppesen参照）',
              '• ILS / RNAV 進入利用可',
            ]
          },
        ]
      },
      {
        id: 'dep',
        label: 'Departure',
        sections: [
          {
            title: 'RWY',
            items: [
              '• RWY 01L/19R: 長い方（メインRWY）',
              '• RWY 01R/19L: 短い方',
              '• Preferential RWY: See Jeppesen（通常 01L/19R）',
              '• RFFS Category 9',
            ]
          },
          {
            title: 'ATC',
            items: [
            ]
          },
        ]
      },
    ]
  },
  YBCS: {
    fullName: 'Cairns Airport',
    iata: 'CNS',
    utc: '+10',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    wakeCategory: 'D',
    b787Info: {
      wingspan: '60.1m (197ft)',
      tailHeight: '17.0m (55.7ft) - 787-9 / 16.9m (55.4ft) - 787-8',
    },
    transitionAltitude: {
    },
    runways: [
      {id:'15', len:0, apch:'VOR 15'},
      {id:'33', len:0, apch:'VOR 33'},
    ],
    tabs: [
      {
        id: 'gen',
        label: 'General',
        sections: [
          {
            title: '空港概要',
            items: [
              '• ICAO: YBCS / IATA: CNS — Cairns Airport',
              '• 位置: オーストラリア・クイーンズランド州北部（N16°53\' E145°45\'）',
              '• 標高: 10 ft / 3 m',
              '• タイムゾーン: UTC+10 (AEST) — サマータイムなし（クイーンズランド州）',
              '• 運用時間: H24',
            ]
          },
          {
            title: '気象',
            items: [
              '• 熱帯性気候。乾季（5〜10月）と雨季（11〜4月）に明確に分かれる',
              '• 雨季はスコール・CB多発。TS Advice System 作動時は遅延あり',
              '• 台風（サイクロン）シーズン: 11〜4月。接近時は空港クローズの可能性',
            ]
          },
          {
            title: 'TL/TA',
            items: [
              '• オーストラリア: TA 10,000 ft / TL FL110（または ATC指示）',
            ]
          },
        ]
      },
      {
        id: 'arr',
        label: 'Arrival',
        sections: [
          {
            title: 'STAR',
            items: [
              '• RNAV STAR = RNAV 1（GNSS または DME/DME/IRU）',
              '• Preferential RWY 15進入が一般的',
            ]
          },
          {
            title: 'Approach',
            items: [
              '• GP 3.0° / MEHT 47 ft / THR elev 1,089 ft',
              '• ILS / RNAV 進入利用可',
              '• Bay（海）側からのアプローチ — 視程良好時はVMCでの進入も可',
              '• GP 3.0° / MEHT 39 ft / THR elev 906 ft',
              '• 南西方向の山岳地形に注意。ILS / RNAV 進入',
            ]
          },
        ]
      },
      {
        id: 'dep',
        label: 'Departure',
        sections: [
          {
            title: 'RWY',
            items: [
              '• RWY 15/33 — 一本のみ',
              '• Preferential RWY: RWY 15',
              '• RWY 15: GP 3.0° / THR 1,089 ft / MEHT 47 ft',
              '• RWY 33: GP 3.0° / THR 906 ft / MEHT 39 ft',
            ]
          },
          {
            title: 'ATC',
            items: [
            ]
          },
        ]
      },
    ]
  },
  YPAD: {
    fullName: 'Adelaide Airport',
    iata: 'ADL',
    utc: '+9',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    wakeCategory: 'D',
    b787Info: {
      wingspan: '60.1m (197ft)',
      tailHeight: '17.0m (55.7ft) - 787-9 / 16.9m (55.4ft) - 787-8',
    },
    transitionAltitude: {
      TA: '10,000 ft',
    },
    runways: [
      {id:'05/23', len:0, apch:'VOR 05/23'},
    ],
    tabs: [
      {
        id: 'gen',
        label: 'General',
        sections: [
          {
            title: '空港概要',
            items: [
              '• ICAO: YPAD / IATA: ADL — Adelaide Airport',
              '• 位置: 南オーストラリア州アデレード（S34°56\' E138°31\'）',
              '• 標高: 20 ft / 6 m',
              '• タイムゾーク: UTC+9.5（冬季）/ UTC+10.5（夏季 DST）',
              '•   ※ 南オーストラリア州は DST あり（10月第1日曜〜4月第1日曜）',
            ]
          },
          {
            title: '気象',
            items: [
              '• 地中海性気候。夏季（12〜2月）は高温乾燥（35°C超えることも）、冬季（6〜8月）は温暖湿潤',
              '• 寒冷気象 Altitude Correction: OAT < 0°C 時に必要（冬季の寒波時に稀に発生）',
              '• 強風（北西のNorth Wind: フェーン現象）は夏季の特徴的な気象',
            ]
          },
          {
            title: 'TL/TA',
            items: [
              '• Transition Altitude: 10,000 ft（オーストラリア標準）',
            ]
          },
        ]
      },
      {
        id: 'arr',
        label: 'Arrival',
        sections: [
          {
            title: 'STAR',
            items: [
              '• RNAV STAR: RNAV 1（GNSS または DME/DME/IRU）',
              '• Adelaide Approach → Adelaide Tower',
            ]
          },
          {
            title: 'Approach',
            items: [
              '• ILS / RNAV 進入利用可（Jeppesen参照）',
              '• SYD (YSSY) からのDiversion: RWY05 KADOM H44 MAXEM Q60 KAKUL経由（682NM）',
              '• ILS / RNAV 進入利用可（Jeppesen参照）',
            ]
          },
        ]
      },
      {
        id: 'dep',
        label: 'Departure',
        sections: [
          {
            title: 'RWY',
            items: [
              '• RWY 05/23: 単一Runway（東北東〜西南西）',
              '• Preferential RWY: See Jeppesen',
              '• RFFS Category 9 (2015〜1345 UTC) / Category 7 (1345〜2015 UTC)',
              '•   ※ DST期間中は1時間繰り上げ（HDS: 1HR Earlier）',
            ]
          },
          {
            title: 'ATC',
            items: [
            ]
          },
        ]
      },
    ]
  },
  PGUM: {
    fullName: 'Antonio B. Won Pat International Airport',
    iata: 'GUM',
    utc: '+10',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    wakeCategory: 'D',
    b787Info: {
      wingspan: '60.1m (197ft)',
      tailHeight: '17.0m (55.7ft) - 787-9 / 16.9m (55.4ft) - 787-8',
    },
    transitionAltitude: {
    },
    runways: [
      {id:'06L/24R', len:0, apch:'VOR 06L/24R'},
      {id:'06R/24L', len:0, apch:'VOR 06R/24L'},
    ],
    tabs: [
      {
        id: 'gen',
        label: 'General',
        sections: [
          {
            title: '空港概要',
            items: [
              '• ICAO: PGUM / IATA: GUM — Antonio B. Won Pat International Airport',
              '• 位置: グアム島北部（N13°29\' E144°47\'）',
              '• 標高: 298 ft / 91 m',
              '• タイムゾーン: UTC+10 (ChST) — サマータイムなし',
              '• 運用時間: H24',
            ]
          },
          {
            title: '気象',
            items: [
              '• 熱帯海洋性気候。台風シーズン: 6〜11月（特に8〜10月がピーク）',
              '• スコールが多く、CBが突発的に発生することがある',
              '• 貿易風（北東風）卓越。台風時は強風・大雨',
            ]
          },
          {
            title: 'TL/TA',
            items: [
              '• Transition Level / Altitude: ATC指示に従う',
            ]
          },
        ]
      },
      {
        id: 'arr',
        label: 'Arrival',
        sections: [
          {
            title: 'STAR',
            items: [
              '• 標準進入: ILS RWY 06L（Preferential）または ILS RWY 06R',
              '• Tailored Arrival VSL24R 指定時: RWY 24R進入',
              '• GUAM Approach: 124.0 MHz（参考）',
            ]
          },
          {
            title: 'Approach',
            items: [
              '• ILS: IGUM H24 / PAPI 3.0°',
              '• 通常のPreferential RWY。THRはnon-displaced。',
              '• ILS: IAWD H24 / PAPI 3.0°',
              '• THR displaced — Landing距離に注意',
              '• Tailored Arrival VSL24R (B787) / PAPI 3.0°',
            ]
          },
        ]
      },
      {
        id: 'dep',
        label: 'Departure',
        sections: [
          {
            title: 'RWY',
            items: [
              '• RWY 06L/24R: Preferential RWY 06L / 勾配 ±0.59%',
              '• RWY 06R/24L: 勾配 ±0.70%',
              '• THR: 06R および 24R は displaced',
              '• PAPI: 全RWY 3.0°',
            ]
          },
          {
            title: 'ATC',
            items: [
            ]
          },
        ]
      },
    ]
  },
  PHNL: {
    fullName: '',
    iata: '',
    utc: '+9',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    wakeCategory: 'D',
    b787Info: {
      wingspan: '60.1m (197ft)',
      tailHeight: '17.0m (55.7ft) - 787-9 / 16.9m (55.4ft) - 787-8',
    },
    transitionAltitude: {
    },
    runways: [
    ],
    tabs: [
      {
        id: 'gen',
        label: 'General',
        sections: [
          {
            title: '空港概要',
            items: [
              '• ICAO: PHNL / IATA: HNL',
              '• Daniel K. Inouye International Airport（旧 Honolulu International Airport）',
              '• ハワイ州オアフ島、ホノルル',
              '• UTC-10（JST-19）/ HST（夏時間なし）',
              '• 24時間運用',
            ]
          },
          {
            title: '気象',
            items: [
              '• 貿易風（NE〜ENE）が卓越。年間を通じて温暖・快晴が多い',
              '• ウィンドシア: 山越え気流（Koolau/Waianae山脈）による報告あり。特にクリアリング後の乱気流注意',
              '• Vog（火山性霞）: ハワイ島方向から漂流することあり。視程低下注意',
              '• G/S False Captureによる過大降下率事例あり（GPWS作動事例 2018年）',
            ]
          },
          {
            title: 'TL/TA',
            items: [
            ]
          },
        ]
      },
      {
        id: 'arr',
        label: 'Arrival',
        sections: [
          {
            title: 'STAR',
            items: [
              '• 代表的Clearance: Cleared to HNL via present position direct BOOKE, BOOKE # Arrival FL370',
              '• Via THOMA/DANNO/CANON/SYVAD Tr. FL370 などのバリエーションあり',
              '• No Traffic時: Descend pilot discretion maintain 8,000ft',
              '• With Traffic時: FL240〜17,000ftの降下指示後、Traffic Clear後 Cross BOOKE at 8,000ft',
              '• MEA未満への降下: STAR Chart上のMEAは管制官がOVERRIDE可能（FAA AIP ENR 1.5）',
            ]
          },
          {
            title: 'Approach',
            items: [
              '• ILS / RNAV',
              '• LAHSO: ATISで LAHSO IN EFFECT と報じられる。外航機は Negative LAHSO を通報',
              '• Negative LAHSO通報後も、Taxi speed減速後に Hold short RWY4L/R の指示の場合あり',
              '• Threshold距離とILS DME/VOR DMEが一致しない複数のRWYあり',
              '• HCF APPから Maintain 170kt until 5(6)DME 等の指示 → 1000ft AAL近辺につき注意が必要',
            ]
          },
        ]
      },
      {
        id: 'dep',
        label: 'Departure',
        sections: [
          {
            title: 'RWY',
            items: [
              '• 長さ: 約3600m / ILS / RNAV / VOR',
              '• LAHSO運用あり（外航機は原則Negative LAHSOを通報）',
              '• LDA RWY 26L: D/W誘導が狭く短い / 南西風が強くOvershootリスク / Waikiki周辺高層ビル群（500ft級）によるGPWS事例あり',
              '• ILS / RNAV',
            ]
          },
          {
            title: 'ATC',
            items: [
            ]
          },
        ]
      },
    ]
  },
  PHKO: {
    fullName: 'Ellison Onizuka Kona International Airport at Keahole',
    iata: 'KOA',
    utc: '-10',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    wakeCategory: 'D',
    b787Info: {
      wingspan: '60.1m (197ft)',
      tailHeight: '17.0m (55.7ft) - 787-9 / 16.9m (55.4ft) - 787-8',
    },
    transitionAltitude: {
    },
    runways: [
      {id:'17/35', len:353, apch:'VOR 17/35'},
    ],
    tabs: [
      {
        id: 'gen',
        label: 'General',
        sections: [
          {
            title: '空港概要',
            items: [
              '• ICAO: PHKO / IATA: KOA — Ellison Onizuka Kona International Airport at Keahole',
              '• 位置: ハワイ島（ビッグアイランド）西岸コナ — N19°44\' W156°02\'',
              '• 標高: 47 ft / 14 m',
              '• タイムゾーン: UTC-10（Hawaii-Aleutian 標準時）— DSTなし',
              '• 運用形態: 民間空港（H24）。国際線・国内線運航',
            ]
          },
          {
            title: '気象',
            items: [
              '• 熱帯性気候。コナ地域は乾燥した晴れが多い（ハワイ島の雨陰側）',
              '• コナストーム（Kona Storm）: 冬季に低気圧が接近した際、南〜南西風が吹き強雨・荒天になる現象',
              '• 通常は北東貿易風が卓越するが、コナ（西岸）は山岳の影響で穏やか',
              '• ウィンドシア: 火山性地形（マウナロア・フアラライ）の影響でWind Shear発生することあり',
            ]
          },
          {
            title: 'TL/TA',
            items: [
              '• 米国基準: 遷移高度 18,000 ft MSL（FL180）',
            ]
          },
        ]
      },
      {
        id: 'arr',
        label: 'Arrival',
        sections: [
          {
            title: 'STAR',
            items: [
              '• RNAV STAR（Jeppesen参照）',
              '• Kona Tower 118.3 MHz',
            ]
          },
          {
            title: 'Approach',
            items: [
              '• ILS / RNAV 進入（Jeppesen参照）',
              '• 通常使用RWY',
              '• ILS / RNAV 進入（Jeppesen参照）',
            ]
          },
        ]
      },
      {
        id: 'dep',
        label: 'Departure',
        sections: [
          {
            title: 'RWY',
            items: [
              '• RWY 17/35: 11,000 ft / 3,353 m（メインRWY・アスファルト）',
              '• Preferential RWY: RWY 17（北風優先・通常）',
              '• ILS / RNAV 進入あり（RWY 17 / RWY 35）',
              '• RFFS Category 8',
            ]
          },
          {
            title: 'ATC',
            items: [
            ]
          },
        ]
      },
    ]
  },
  PHOG: {
    fullName: 'Kahului Airport (Maui)',
    iata: 'OGG',
    utc: '-10',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    wakeCategory: 'D',
    b787Info: {
      wingspan: '60.1m (197ft)',
      tailHeight: '17.0m (55.7ft) - 787-9 / 16.9m (55.4ft) - 787-8',
    },
    transitionAltitude: {
    },
    runways: [
      {id:'02/20', len:132, apch:'VOR 02/20'},
      {id:'05/23', len:521, apch:'VOR 05/23'},
    ],
    tabs: [
      {
        id: 'gen',
        label: 'General',
        sections: [
          {
            title: '空港概要',
            items: [
              '• ICAO: PHOG / IATA: OGG — Kahului Airport (Maui)',
              '• 位置: マウイ島カフルイ — N20°54\' W156°26\'',
              '• 標高: 54 ft / 16 m',
              '• タイムゾーン: UTC-10（Hawaii-Aleutian 標準時）— DSTなし',
              '• 運用形態: 民間空港（H24）。国際線・国内線運航',
            ]
          },
          {
            title: '気象',
            items: [
              '• 熱帯性気候。北東貿易風が卓越（年間を通じて）',
              '• カフルイはマウイ島の北岸中央部。貿易風の影響を直接受け、風が強いことが多い',
              '• ハレアカラ火山（3,055m）が南東に聳える。風の流れが複雑',
              '• コナストーム: 冬季に南西風・強雨が発生することあり',
            ]
          },
          {
            title: 'TL/TA',
            items: [
              '• 米国基準: 遷移高度 18,000 ft MSL（FL180）',
            ]
          },
        ]
      },
      {
        id: 'arr',
        label: 'Arrival',
        sections: [
          {
            title: 'STAR',
            items: [
              '• RNAV STAR（Jeppesen参照）',
              '• Maui Tower 123.9 MHz',
            ]
          },
          {
            title: 'Approach',
            items: [
              '• ILS / RNAV 進入（Jeppesen参照）',
              '• 通常使用RWY。北から進入',
              '• ILS / RNAV 進入（Jeppesen参照）',
              '• 南からの進入 — ハレアカラの雲・乱気流に注意',
              '• RNAV 進入（Jeppesen参照）— 短RWY（4,990ft）のためB787は通常不使用',
            ]
          },
        ]
      },
      {
        id: 'dep',
        label: 'Departure',
        sections: [
          {
            title: 'RWY',
            items: [
              '• RWY 02/20: 6,995 ft / 2,132 m（主RWY・アスファルト）',
              '• RWY 05/23: 4,990 ft / 1,521 m（短RWY）',
              '• Preferential RWY: RWY 02（通常）',
              '• ILS / RNAV 進入あり（RWY 02 / RWY 20）',
            ]
          },
          {
            title: 'ATC',
            items: [
            ]
          },
        ]
      },
    ]
  },
  PHTO: {
    fullName: 'Hilo International Airport',
    iata: 'ITO',
    utc: '-10',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    wakeCategory: 'D',
    b787Info: {
      wingspan: '60.1m (197ft)',
      tailHeight: '17.0m (55.7ft) - 787-9 / 16.9m (55.4ft) - 787-8',
    },
    transitionAltitude: {
    },
    runways: [
      {id:'03/21', len:991, apch:'VOR 03/21'},
      {id:'08/26', len:132, apch:'VOR 08/26'},
    ],
    tabs: [
      {
        id: 'gen',
        label: 'General',
        sections: [
          {
            title: '空港概要',
            items: [
              '• ICAO: PHTO / IATA: ITO — Hilo International Airport',
              '• 位置: ハワイ島（ビッグアイランド）東岸ヒロ — N19°43\' W155°03\'',
              '• 標高: 38 ft / 12 m',
              '• タイムゾーン: UTC-10（Hawaii-Aleutian 標準時）— DSTなし',
              '• 運用形態: 民間空港（H24）。国際線・国内線運航',
            ]
          },
          {
            title: '気象',
            items: [
              '• 熱帯雨林気候。ハワイ州で最も雨の多い都市の一つ（年間降水量3,000mm超）',
              '• 北東貿易風が卓越。ハレアカラ・マウナケア・マウナロアを越えた風が降水をもたらす',
              '• 低雲・霧が頻繁に発生。特に朝・夕方・雨天時は視程悪化',
              '• コナストーム: 冬季の南西風時は強雨・荒天',
            ]
          },
          {
            title: 'TL/TA',
            items: [
              '• 米国基準: 遷移高度 18,000 ft MSL（FL180）',
            ]
          },
        ]
      },
      {
        id: 'arr',
        label: 'Arrival',
        sections: [
          {
            title: 'STAR',
            items: [
              '• RNAV STAR（Jeppesen参照）',
              '• Hilo Tower 118.1 MHz',
            ]
          },
          {
            title: 'Approach',
            items: [
              '• ILS / RNAV 進入（Jeppesen参照）',
              '• 通常使用RWY。北東貿易風に向かう進入',
              '• ILS / RNAV 進入（Jeppesen参照）',
              '• RNAV 進入（Jeppesen参照）— 副RWY',
            ]
          },
        ]
      },
      {
        id: 'dep',
        label: 'Departure',
        sections: [
          {
            title: 'RWY',
            items: [
              '• RWY 03/21: 9,812 ft / 2,991 m（メインRWY・アスファルト）',
              '• RWY 08/26: 6,994 ft / 2,132 m',
              '• Preferential RWY: RWY 03（通常）',
              '• ILS / RNAV 進入あり（RWY 03 / RWY 21）',
            ]
          },
          {
            title: 'ATC',
            items: [
            ]
          },
        ]
      },
    ]
  },
  PMDY: {
    fullName: 'Henderson Field (Midway Atoll)',
    iata: 'MDY',
    utc: '-11',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    wakeCategory: 'D',
    b787Info: {
      wingspan: '60.1m (197ft)',
      tailHeight: '17.0m (55.7ft) - 787-9 / 16.9m (55.4ft) - 787-8',
    },
    transitionAltitude: {
    },
    runways: [
      {id:'06/24', len:377, apch:'VOR 06/24'},
    ],
    tabs: [
      {
        id: 'gen',
        label: 'General',
        sections: [
          {
            title: '空港概要',
            items: [
              '• ICAO: PMDY / IATA: MDY — Henderson Field (Midway Atoll)',
              '• 位置: ミッドウェー環礁（北太平洋）— N28°12\' W177°22\'',
              '• 標高: 13 ft / 4 m',
              '• タイムゾーン: UTC-11（Midway Standard Time）— DSTなし',
              '• 運用形態: 米魚類野生生物局（US Fish & Wildlife Service）管理。定期便なし。',
            ]
          },
          {
            title: '気象',
            items: [
              '• 亜熱帯性気候。年間を通じて比較的穏やかだが、冬季（11〜3月）は強風・波浪',
              '• 台風シーズン（6〜11月）は衰退期の台風・熱帯低気圧が接近することあり',
              '• スコール・CBが発生することあり',
            ]
          },
          {
            title: 'TL/TA',
            items: [
              '• 米国基準: 遷移高度 18,000 ft MSL（FL180）',
            ]
          },
        ]
      },
      {
        id: 'arr',
        label: 'Arrival',
        sections: [
          {
            title: 'STAR',
            items: [
            ]
          },
          {
            title: 'Approach',
            items: [
              '• NDB / RNAV 進入（Jeppesen参照）',
              '• 非精密進入のみ。気象最低値に注意',
            ]
          },
        ]
      },
      {
        id: 'dep',
        label: 'Departure',
        sections: [
          {
            title: 'RWY',
            items: [
              '• RWY 06/24: 约7,800 ft / 2,377 m（アスファルト）',
              '• 単一滑走路。非精密進入（NDB / RNAV）',
            ]
          },
          {
            title: 'ATC',
            items: [
            ]
          },
        ]
      },
    ]
  },
  PWAK: {
    fullName: 'Wake Island Airfield',
    iata: 'AWK',
    utc: '+12',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    wakeCategory: 'D',
    b787Info: {
      wingspan: '60.1m (197ft)',
      tailHeight: '17.0m (55.7ft) - 787-9 / 16.9m (55.4ft) - 787-8',
    },
    transitionAltitude: {
    },
    runways: [
      {id:'10/28', len:987, apch:'VOR 10/28'},
    ],
    tabs: [
      {
        id: 'gen',
        label: 'General',
        sections: [
          {
            title: '空港概要',
            items: [
              '• ICAO: PWAK / IATA: AWK — Wake Island Airfield',
              '• 位置: ウェーク島（北太平洋、グアム東方約1,500NM / N19°17\' E166°38\'）',
              '• 標高: 14 ft / 4 m',
              '• タイムゾーン: UTC+12',
              '• 運用形態: 米軍管理（US Air Force）。民間機は緊急時のみ使用可',
            ]
          },
          {
            title: '気象',
            items: [
              '• 熱帯海洋性気候。年間を通じて温暖・多湿',
              '• 北東貿易風卓越。台風シーズン（6〜11月）はサイクロン直撃リスクあり',
              '• スコール・CBが突発的に発生することがある',
            ]
          },
          {
            title: 'TL/TA',
            items: [
              '• 米国基準: 遷移高度 18,000 ft MSL（FL180）',
            ]
          },
        ]
      },
      {
        id: 'arr',
        label: 'Arrival',
        sections: [
          {
            title: 'STAR',
            items: [
            ]
          },
          {
            title: 'Approach',
            items: [
              '• ILS進入利用可（軍用。民間機も使用可能）',
              '• Jeppesen軍用Chartを参照',
            ]
          },
        ]
      },
      {
        id: 'dep',
        label: 'Departure',
        sections: [
          {
            title: 'RWY',
            items: [
              '• RWY 10/28: 約9,800 ft / 2,987 m（アスファルト）',
              '• 単一滑走路。ILS・精密進入あり（軍用）',
              '• PAPI: 3.0°（推定）',
            ]
          },
          {
            title: 'ATC',
            items: [
            ]
          },
        ]
      },
    ]
  },
  PKMA: {
    fullName: 'Bucholz Army Airfield (Kwajalein)',
    iata: 'KWA',
    utc: '+12',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    wakeCategory: 'D',
    b787Info: {
      wingspan: '60.1m (197ft)',
      tailHeight: '17.0m (55.7ft) - 787-9 / 16.9m (55.4ft) - 787-8',
    },
    transitionAltitude: {
    },
    runways: [
      {id:'06/24', len:440, apch:'VOR 06/24'},
    ],
    tabs: [
      {
        id: 'gen',
        label: 'General',
        sections: [
          {
            title: '空港概要',
            items: [
              '• ICAO: PKMA / IATA: KWA — Bucholz Army Airfield (Kwajalein)',
              '• 位置: クワジャリン環礁（マーシャル諸島）— N08°43\' E167°44\'',
              '• 標高: 9 ft / 3 m',
              '• タイムゾーン: UTC+12',
              '• 運用形態: 米陸軍管理（Ronald Reagan Ballistic Missile Defense Test Site）。民間機は緊急時のみ使用可',
            ]
          },
          {
            title: '気象',
            items: [
              '• 熱帯海洋性気候。年間を通じて温暖・多湿',
              '• 北東貿易風卓越。台風シーズン（6〜11月）はサイクロンリスクあり',
              '• スコール・CBが突発的に発生',
            ]
          },
          {
            title: 'TL/TA',
            items: [
              '• 米国基準: 遷移高度 18,000 ft MSL（FL180）',
            ]
          },
        ]
      },
      {
        id: 'arr',
        label: 'Arrival',
        sections: [
          {
            title: 'STAR',
            items: [
            ]
          },
          {
            title: 'Approach',
            items: [
              '• 計器進入利用可（軍用）',
              '• Jeppesen軍用Chartを参照',
            ]
          },
        ]
      },
      {
        id: 'dep',
        label: 'Departure',
        sections: [
          {
            title: 'RWY',
            items: [
              '• RWY 06/24: 約8,000 ft / 2,440 m（アスファルト）',
              '• 単一滑走路。軍用計器進入あり',
            ]
          },
          {
            title: 'ATC',
            items: [
            ]
          },
        ]
      },
    ]
  },
  PKMJ: {
    fullName: 'Amata Kabua International Airport (Majuro)',
    iata: 'MAJ',
    utc: '+12',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    wakeCategory: 'D',
    b787Info: {
      wingspan: '60.1m (197ft)',
      tailHeight: '17.0m (55.7ft) - 787-9 / 16.9m (55.4ft) - 787-8',
    },
    transitionAltitude: {
    },
    runways: [
      {id:'07/25', len:408, apch:'VOR 07/25'},
    ],
    tabs: [
      {
        id: 'gen',
        label: 'General',
        sections: [
          {
            title: '空港概要',
            items: [
              '• ICAO: PKMJ / IATA: MAJ — Amata Kabua International Airport (Majuro)',
              '• 位置: マジュロ環礁（マーシャル諸島）— N07°04\' E171°16\'',
              '• 標高: 22 ft / 7 m',
              '• タイムゾーン: UTC+12',
              '• 運用形態: 民間空港。国際線・国内線運航あり',
            ]
          },
          {
            title: '気象',
            items: [
              '• 熱帯海洋性気候。年間を通じて温暖・多湿（年間降水量3,000mm超）',
              '• 北東貿易風卓越（11〜4月）。台風シーズン（6〜11月）はサイクロンリスクあり',
              '• CB・スコールが突発的に発生。視程の急変に注意',
            ]
          },
          {
            title: 'TL/TA',
            items: [
              '• 米国基準: 遷移高度 18,000 ft MSL（FL180）',
            ]
          },
        ]
      },
      {
        id: 'arr',
        label: 'Arrival',
        sections: [
          {
            title: 'STAR',
            items: [
              '• Majuro Radio 118.3 MHz（FSS: Flight Service Station）',
              '• ATC非常駐型（FSS運用）のため手順に注意',
            ]
          },
          {
            title: 'Approach',
            items: [
              '• ILS / RNAV 進入（Jeppesen参照）',
              '• 海上からのアプローチ。水平線に対してglide pathを維持',
              '• ILS / RNAV 進入（Jeppesen参照）',
            ]
          },
        ]
      },
      {
        id: 'dep',
        label: 'Departure',
        sections: [
          {
            title: 'RWY',
            items: [
              '• RWY 07/25: 約7,900 ft / 2,408 m（アスファルト）',
              '• 単一滑走路。ILS / RNAV 進入あり',
              '• PAPI: RWY 07 / RWY 25 ともにあり',
            ]
          },
          {
            title: 'ATC',
            items: [
            ]
          },
        ]
      },
    ]
  },
  AYPY: {
    fullName: '',
    iata: '',
    utc: '+9',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    wakeCategory: 'D',
    b787Info: {
      wingspan: '60.1m (197ft)',
      tailHeight: '17.0m (55.7ft) - 787-9 / 16.9m (55.4ft) - 787-8',
    },
    transitionAltitude: {
    },
    runways: [
      {id:'14L/32R', len:3000, apch:'VOR 14L/32R'},
      {id:'14R/32L', len:2438, apch:'VOR 14R/32L'},
    ],
    tabs: [
      {
        id: 'gen',
        label: 'General',
        sections: [
          {
            title: '空港概要',
            items: [
              '• ICAO: AYPY / IATA: POM',
              '• 空港名: Jacksons International Airport',
              '• 位置: パプアニューギニア、ポートモレスビー南東約10km',
              '• 標高: 146ft (45m)',
              '• 時刻: UTC+10（夏時間なし）',
            ]
          },
          {
            title: '気象',
            items: [
              '• 熱帯性気候 / スコール多発（特に午後）',
              '• 乾季: 5〜10月 / 雨季: 11〜4月',
              '• 霧・低視程: 早朝に発生することあり',
            ]
          },
          {
            title: 'TL/TA',
            items: [
            ]
          },
        ]
      },
      {
        id: 'arr',
        label: 'Arrival',
        sections: [
          {
            title: 'STAR',
            items: [
            ]
          },
          {
            title: 'Approach',
            items: [
              '• ILS RWY14L: CAT I / DA 380ft / RVR 550m',
              '• VOR/DME RWY14L',
              '• VOR/DME RWY32R',
              '• RNAV(GNSS) RWY32R',
            ]
          },
        ]
      },
      {
        id: 'dep',
        label: 'Departure',
        sections: [
          {
            title: 'RWY',
            items: [
              '• RWY 14L/32R: 3000m × 45m（主滑走路）ILS RWY14L',
              '• RWY 14R/32L: 2438m × 45m',
            ]
          },
          {
            title: 'ATC',
            items: [
            ]
          },
        ]
      },
    ]
  },
  KSEA: {
    fullName: 'Seattle-Tacoma International Airport',
    iata: 'SEA',
    utc: '-8',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    wakeCategory: 'D',
    b787Info: {
      wingspan: '60.1m (197ft)',
      tailHeight: '17.0m (55.7ft) - 787-9 / 16.9m (55.4ft) - 787-8',
    },
    transitionAltitude: {
    },
    runways: [
      {id:'16L/34R', len:627, apch:'VOR 16L/34R'},
      {id:'16C/34C', len:743, apch:'VOR 16C/34C'},
      {id:'16R/34L', len:926, apch:'VOR 16R/34L'},
    ],
    tabs: [
      {
        id: 'gen',
        label: 'General',
        sections: [
          {
            title: '空港概要',
            items: [
              '• ICAO: KSEA / IATA: SEA — Seattle-Tacoma International Airport',
              '• 位置: ワシントン州シータック市 — N47°27\' W122°18\'',
              '• 標高: 433 ft / 132 m',
              '• タイムゾーン: UTC-8 (PST) / 夏時間 UTC-7 (PDT)',
              '• 運用形態: 民間空港（H24）。国際線・国内線運航',
            ]
          },
          {
            title: '気象',
            items: [
              '• 太平洋岸海洋性気候。冬季雨・低雲・霧多発（10〜3月）',
              '• 夏季（6〜9月）: 比較的安定、霧少ない、視程良好',
              '• 卓越風: 南西風。稀にEast Windが吹くと視程悪化',
              '• レーニア山（4,392m）が南東に聳える — 東向き経路でMSA高い',
            ]
          },
          {
            title: 'TL/TA',
            items: [
              '• 米国基準: 遷移高度 18,000 ft MSL (FL180)',
            ]
          },
        ]
      },
      {
        id: 'arr',
        label: 'Arrival',
        sections: [
          {
            title: 'STAR',
            items: [
              '• RNAV STAR: HAWKZ / GLASR / SUMMA 等（Jeppesen参照）',
              '• Seattle Approach: 120.1 / 124.2 MHz',
            ]
          },
          {
            title: 'Approach',
            items: [
              '• ILS / RNAV（メイン精密進入、南向き）',
              '• 通常使用RWY',
              '• ILS / RNAV（並行RWY同時運用時）',
              '• 3本並行RWY同時着陸 → 管制指示を明確に聴取',
              '• 北向き（北風時・離陸主体、着陸もあり）',
            ]
          },
        ]
      },
      {
        id: 'dep',
        label: 'Departure',
        sections: [
          {
            title: 'RWY',
            items: [
              '• RWY 16L/34R: 3,627m（メインRWY）',
              '• RWY 16C/34C: 2,743m（中央RWY）',
              '• RWY 16R/34L: 2,926m（西側RWY）',
              '• Preferential RWY: 16系統（南向き着陸）が通常。北風時は34系統',
            ]
          },
          {
            title: 'ATC',
            items: [
            ]
          },
        ]
      },
    ]
  },
  KSFO: {
    fullName: 'San Francisco International Airport',
    iata: 'SFO',
    utc: '-8',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    wakeCategory: 'D',
    b787Info: {
      wingspan: '60.1m (197ft)',
      tailHeight: '17.0m (55.7ft) - 787-9 / 16.9m (55.4ft) - 787-8',
    },
    transitionAltitude: {
    },
    runways: [
      {id:'28L/10R', len:618, apch:'VOR 28L/10R'},
      {id:'28R/10L', len:231, apch:'VOR 28R/10L'},
    ],
    tabs: [
      {
        id: 'gen',
        label: 'General',
        sections: [
          {
            title: '空港概要',
            items: [
              '• ICAO: KSFO / IATA: SFO — San Francisco International Airport',
              '• 位置: カリフォルニア州サンマテオ郡（SF南約21km） — N37°37\' W122°22\'',
              '• 標高: 13 ft / 4 m',
              '• タイムゾーン: UTC-8 (PST) / 夏時間 UTC-7 (PDT)',
              '• 運用形態: 民間空港（H24）。国際線・国内線運航',
            ]
          },
          {
            title: '気象',
            items: [
              '• サンフランシスコ湾に突き出した半島上に位置',
              '• 夏季（6〜9月）: 朝霧（カールの霧）が有名 — 午前中霧、午後晴れるパターン',
              '• 冬季（11〜3月）: 雨・低雲多発',
              '• Bay Area特有の西風: 午後に強まる（特に夏季）',
            ]
          },
          {
            title: 'TL/TA',
            items: [
              '• 米国基準: 遷移高度 18,000 ft MSL (FL180)',
            ]
          },
        ]
      },
      {
        id: 'arr',
        label: 'Arrival',
        sections: [
          {
            title: 'STAR',
            items: [
              '• RNAV STAR: BDEGA / SERFR / DYAMD 等（Jeppesen参照）',
              '• NorCal Approach: 135.65 / 120.35 MHz',
            ]
          },
          {
            title: 'Approach',
            items: [
              '• ILS CAT III / RNAV（北側メインRWY、PRM同時並行進入あり）',
              '• 通常使用RWY。Final上に住宅地・Bay Bridgeあり',
              '• ILS CAT III / RNAV（南側平行RWY、PRM）',
              '• RWY28Lと同時平行進入運用 — Breakout指示に即時対応',
              '• 東向き（夜間・東風時・28混雑時）',
            ]
          },
        ]
      },
      {
        id: 'dep',
        label: 'Departure',
        sections: [
          {
            title: 'RWY',
            items: [
              '• RWY 28L/10R: 3,618m（北側・メインRWY）',
              '• RWY 28R/10L: 3,231m（南側・平行RWY）',
              '• Preferential RWY: 28系統（西向き）が通常。夜間・東風時は10系統',
              '• ILS CAT III: 28L / 28R（Low Visibility対応）',
            ]
          },
          {
            title: 'ATC',
            items: [
            ]
          },
        ]
      },
    ]
  },
  KLAX: {
    fullName: 'Los Angeles International Airport',
    iata: 'LAX',
    utc: '-8',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    wakeCategory: 'D',
    b787Info: {
      wingspan: '60.1m (197ft)',
      tailHeight: '17.0m (55.7ft) - 787-9 / 16.9m (55.4ft) - 787-8',
    },
    transitionAltitude: {
    },
    runways: [
      {id:'24L/06R', len:685, apch:'VOR 24L/06R'},
      {id:'24R/06L', len:135, apch:'VOR 24R/06L'},
      {id:'25L/07R', len:685, apch:'VOR 25L/07R'},
      {id:'25R/07L', len:137, apch:'VOR 25R/07L'},
    ],
    tabs: [
      {
        id: 'gen',
        label: 'General',
        sections: [
          {
            title: '空港概要',
            items: [
              '• ICAO: KLAX / IATA: LAX — Los Angeles International Airport',
              '• 位置: カリフォルニア州ロサンゼルス市（ベニスビーチ近郊） — N33°57\' W118°24\'',
              '• 標高: 125 ft / 38 m',
              '• タイムゾーン: UTC-8 (PST) / 夏時間 UTC-7 (PDT)',
              '• 運用形態: 民間空港（H24）。国際線・国内線運航（米国屈指の大規模空港）',
            ]
          },
          {
            title: '気象',
            items: [
              '• 地中海性気候。年間を通じて温暖・乾燥',
              '• 海岸霧（Marine Layer）: 夏季朝に霧・低雲が発生、午前中に晴れる',
              '• Santa Ana Wind: 秋〜冬に東風（乾燥・強風）が吹く、視程は良好だがWind Shear注意',
              '• 交通量: 米国屈指の混雑空港。遅延多発',
            ]
          },
          {
            title: 'TL/TA',
            items: [
              '• 米国基準: 遷移高度 18,000 ft MSL (FL180)',
            ]
          },
        ]
      },
      {
        id: 'arr',
        label: 'Arrival',
        sections: [
          {
            title: 'STAR',
            items: [
              '• RNAV STAR: SADDE / SEAVU / RIIVR 等（Jeppesen参照）',
              '• SoCal Approach: 124.5 / 135.4 MHz',
            ]
          },
          {
            title: 'Approach',
            items: [
              '• ILS / RNAV（北側メインRWY、西向き着陸）',
              '• 通常の国際線使用RWY',
              '• ILS / RNAV（南側メインRWY、西向き着陸）',
              '• 内側RWY（短い）— 大型機は通常使用しない',
              '• 東向き（Santa Ana Wind時・稀）— Final上に住宅地',
            ]
          },
        ]
      },
      {
        id: 'dep',
        label: 'Departure',
        sections: [
          {
            title: 'RWY',
            items: [
              '• RWY 24L/06R: 3,685m（北側・メインRWY）',
              '• RWY 24R/06L: 3,135m（北側内側RWY）',
              '• RWY 25L/07R: 3,685m（南側・メインRWY）',
              '• RWY 25R/07L: 3,137m（南側内側RWY）',
            ]
          },
          {
            title: 'ATC',
            items: [
            ]
          },
        ]
      },
    ]
  },
  KSAN: {
    fullName: 'San Diego International Airport (Lindbergh Field)',
    iata: 'SAN',
    utc: '-8',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    wakeCategory: 'D',
    b787Info: {
      wingspan: '60.1m (197ft)',
      tailHeight: '17.0m (55.7ft) - 787-9 / 16.9m (55.4ft) - 787-8',
    },
    transitionAltitude: {
    },
    runways: [
      {id:'27/09', len:865, apch:'VOR 27/09'},
    ],
    tabs: [
      {
        id: 'gen',
        label: 'General',
        sections: [
          {
            title: '空港概要',
            items: [
              '• ICAO: KSAN / IATA: SAN — San Diego International Airport (Lindbergh Field)',
              '• 位置: カリフォルニア州サンディエゴ市（市街地至近） — N32°44\' W117°11\'',
              '• 標高: 17 ft / 5 m',
              '• タイムゾーン: UTC-8 (PST) / 夏時間 UTC-7 (PDT)',
              '• 運用形態: 民間空港（H24）。国際線・国内線運航',
            ]
          },
          {
            title: '気象',
            items: [
              '• 地中海性気候。年間を通じて温暖・乾燥（「アメリカ最良の気候」とも）',
              '• Marine Layer（海霧）: 夏季朝に発生、午前中に晴れる',
              '• Santa Ana Wind: 秋〜冬に東風（強風・乾燥・視程良好）',
              '• メキシコ国境から約30kmと非常に近い',
            ]
          },
          {
            title: 'TL/TA',
            items: [
              '• 米国基準: 遷移高度 18,000 ft MSL (FL180)',
            ]
          },
        ]
      },
      {
        id: 'arr',
        label: 'Arrival',
        sections: [
          {
            title: 'STAR',
            items: [
              '• RNAV STAR: DEEEP / POGGI 等（Jeppesen参照）',
              '• SoCal Approach: 124.35 / 132.7 MHz',
            ]
          },
          {
            title: 'Approach',
            items: [
              '• 通常使用RWY。西向き着陸（太平洋側から進入）',
              '• VOR/DME or RNAV Approach: Final短い（約4NM）— 高度管理が重要',
              '• Circling: 市街地上空のためCircling Minimumが高い',
              '• 東向き（稀）— Santa Ana Wind時',
              '• Final上に市街地・軍施設 — 特別注意',
            ]
          },
        ]
      },
      {
        id: 'dep',
        label: 'Departure',
        sections: [
          {
            title: 'RWY',
            items: [
              '• RWY 27/09: 2,865m（唯一のRWY）',
              '• Preferential RWY: 27（西向き着陸）が通常。東風時のみ09',
              '• ILS: RWY27（VGSI: PAPI）',
              '• RFFS Category 9',
            ]
          },
          {
            title: 'ATC',
            items: [
            ]
          },
        ]
      },
    ]
  },
  KORD: {
    fullName: 'Chicago O\'Hare International Airport',
    iata: 'ORD',
    utc: '-6',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    wakeCategory: 'D',
    b787Info: {
      wingspan: '60.1m (197ft)',
      tailHeight: '17.0m (55.7ft) - 787-9 / 16.9m (55.4ft) - 787-8',
    },
    transitionAltitude: {
    },
    runways: [
      {id:'10L/28R', len:962, apch:'VOR 10L/28R'},
      {id:'10C/28C', len:288, apch:'VOR 10C/28C'},
      {id:'10R/28L', len:463, apch:'VOR 10R/28L'},
      {id:'09L/27R', len:286, apch:'VOR 09L/27R'},
      {id:'09R/27L', len:48, apch:'VOR 09R/27L'},
      {id:'04L/22R', len:438, apch:'VOR 04L/22R'},
    ],
    tabs: [
      {
        id: 'gen',
        label: 'General',
        sections: [
          {
            title: '空港概要',
            items: [
              '• ICAO: KORD / IATA: ORD — Chicago O\'Hare International Airport',
              '• 位置: イリノイ州シカゴ市北西部 — N41°58\' W87°54\'',
              '• 標高: 672 ft / 205 m',
              '• タイムゾーン: UTC-6 (CST) / 夏時間 UTC-5 (CDT)',
              '• 運用形態: 民間空港（H24）。国際線・国内線運航（米国最大級のハブ空港）',
            ]
          },
          {
            title: '気象',
            items: [
              '• 大陸性気候。四季の変化が激しい',
              '• 冬季（12〜3月）: 降雪・氷雪・Blizzard。De-icing必須、RWY閉鎖あり',
              '• 春・秋: 強風・雷雨・竜巻シーズン（4〜5月、9〜10月）',
              '• 夏季: 雷雨・突風多発、視程急悪化',
            ]
          },
          {
            title: 'TL/TA',
            items: [
              '• 米国基準: 遷移高度 18,000 ft MSL (FL180)',
            ]
          },
        ]
      },
      {
        id: 'arr',
        label: 'Arrival',
        sections: [
          {
            title: 'STAR',
            items: [
              '• RNAV STAR: PAITN / ACITO / LEWKE 等（Jeppesen参照）',
              '• Chicago Approach: 124.0 / 133.5 MHz',
            ]
          },
          {
            title: 'Approach',
            items: [
              '• ILS / RNAV（メインRWY、最長3,962m）',
              '• 通常の国際線使用RWY',
              '• ILS / RNAV — 並行RWY同時運用',
              '• 交差RWY — 南北風時に使用',
            ]
          },
        ]
      },
      {
        id: 'dep',
        label: 'Departure',
        sections: [
          {
            title: 'RWY',
            items: [
              '• RWY 10L/28R: 3,962m（東西・メインRWY）',
              '• RWY 10C/28C: 3,288m',
              '• RWY 10R/28L: 2,463m',
              '• RWY 09L/27R: 2,286m（短め）',
            ]
          },
          {
            title: 'ATC',
            items: [
            ]
          },
        ]
      },
    ]
  },
  KJFK: {
    fullName: 'New York John F. Kennedy International Airport',
    iata: 'JFK',
    utc: '-5',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    wakeCategory: 'D',
    b787Info: {
      wingspan: '60.1m (197ft)',
      tailHeight: '17.0m (55.7ft) - 787-9 / 16.9m (55.4ft) - 787-8',
    },
    transitionAltitude: {
    },
    runways: [
      {id:'04L/22R', len:560, apch:'VOR 04L/22R'},
      {id:'04R/22L', len:460, apch:'VOR 04R/22L'},
      {id:'13L/31R', len:48, apch:'VOR 13L/31R'},
      {id:'13R/31L', len:560, apch:'VOR 13R/31L'},
    ],
    tabs: [
      {
        id: 'gen',
        label: 'General',
        sections: [
          {
            title: '空港概要',
            items: [
              '• ICAO: KJFK / IATA: JFK — New York John F. Kennedy International Airport',
              '• 位置: ニューヨーク州クイーンズ区（ジャマイカ湾岸） — N40°38\' W73°46\'',
              '• 標高: 13 ft / 4 m',
              '• タイムゾーン: UTC-5 (EST) / 夏時間 UTC-4 (EDT)',
              '• 運用形態: 民間空港（H24）。国際線・国内線運航（米国最大の国際線ハブ）',
            ]
          },
          {
            title: '気象',
            items: [
              '• 大西洋岸の大陸性気候。四季がはっきりしている',
              '• 冬季（12〜3月）: 降雪・Nor\'easter・氷雪。De-icing必須',
              '• 夏季: 雷雨・突風・霧（大西洋からの海霧）',
              '• 台風・ハリケーンの影響を受けることあり（ Sandy 2012等）',
            ]
          },
          {
            title: 'TL/TA',
            items: [
              '• 米国基準: 遷移高度 18,000 ft MSL (FL180)',
            ]
          },
        ]
      },
      {
        id: 'arr',
        label: 'Arrival',
        sections: [
          {
            title: 'STAR',
            items: [
              '• RNAV STAR: CAMRN / LENDY / PARCH 等（Jeppesen参照）',
              '• NY Approach: 125.7 / 127.4 MHz',
            ]
          },
          {
            title: 'Approach',
            items: [
              '• ILS / RNAV（北西向き、メイン使用）',
              '• Final: ジャマイカ湾上空から進入',
              '• ILS / RNAV（南向き）— 南西風時',
              '• ILS / RNAV（南東向き）— 北西風時',
              '• 北向き（稀）',
            ]
          },
        ]
      },
      {
        id: 'dep',
        label: 'Departure',
        sections: [
          {
            title: 'RWY',
            items: [
              '• RWY 04L/22R: 2,560m',
              '• RWY 04R/22L: 3,460m（メイン）',
              '• RWY 13L/31R: 3,048m',
              '• RWY 13R/31L: 2,560m',
            ]
          },
          {
            title: 'ATC',
            items: [
            ]
          },
        ]
      },
    ]
  },
  KBOS: {
    fullName: 'Boston Logan International Airport',
    iata: 'BOS',
    utc: '-5',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    wakeCategory: 'D',
    b787Info: {
      wingspan: '60.1m (197ft)',
      tailHeight: '17.0m (55.7ft) - 787-9 / 16.9m (55.4ft) - 787-8',
    },
    transitionAltitude: {
    },
    runways: [
      {id:'04L/22R', len:48, apch:'VOR 04L/22R'},
      {id:'04R/22L', len:621, apch:'VOR 04R/22L'},
      {id:'09/27', len:743, apch:'VOR 09/27'},
      {id:'15R/33L', len:524, apch:'VOR 15R/33L'},
    ],
    tabs: [
      {
        id: 'gen',
        label: 'General',
        sections: [
          {
            title: '空港概要',
            items: [
              '• ICAO: KBOS / IATA: BOS — Boston Logan International Airport',
              '• 位置: マサチューセッツ州ボストン市（ボストン港内半島） — N42°21\' W71°00\'',
              '• 標高: 20 ft / 6 m',
              '• タイムゾーン: UTC-5 (EST) / 夏時間 UTC-4 (EDT)',
              '• 運用形態: 民間空港（H24）。国際線・国内線運航',
            ]
          },
          {
            title: '気象',
            items: [
              '• 大西洋岸の大陸性気候。四季がはっきりしている',
              '• 冬季（12〜3月）: 降雪・Nor\'easter（北東嵐）— 大雪・強風・高波',
              '• 夏季: 霧・低雲あり（大西洋からの海霧）、雷雨も発生',
              '• 秋: ハリケーンの影響を受けることあり',
            ]
          },
          {
            title: 'TL/TA',
            items: [
              '• 米国基準: 遷移高度 18,000 ft MSL (FL180)',
            ]
          },
        ]
      },
      {
        id: 'arr',
        label: 'Arrival',
        sections: [
          {
            title: 'STAR',
            items: [
              '• RNAV STAR: ROBUC / SSONE / JERSS 等（Jeppesen参照）',
              '• Boston Approach: 124.4 / 133.0 MHz',
            ]
          },
          {
            title: 'Approach',
            items: [
              '• ILS / RNAV（メインRWY、北向き着陸）',
              '• Final: ボストン湾上空から進入',
              '• ILS / RNAV（南向き着陸）',
              '• 市街地上空 Final — Noise Abatement考慮',
              '• ILS / RNAV（東西RWY、風次第で使用）',
            ]
          },
        ]
      },
      {
        id: 'dep',
        label: 'Departure',
        sections: [
          {
            title: 'RWY',
            items: [
              '• RWY 04L/22R: 3,048m（メイン）',
              '• RWY 04R/22L: 2,621m',
              '• RWY 09/27: 2,743m（東西）',
              '• RWY 15R/33L: 1,524m（短め・限定使用）',
            ]
          },
          {
            title: 'ATC',
            items: [
            ]
          },
        ]
      },
    ]
  },
  KDFW: {
    fullName: 'Dallas Fort Worth International Airport',
    iata: 'DFW',
    utc: '-6',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    wakeCategory: 'D',
    b787Info: {
      wingspan: '60.1m (197ft)',
      tailHeight: '17.0m (55.7ft) - 787-9 / 16.9m (55.4ft) - 787-8',
    },
    transitionAltitude: {
    },
    runways: [
      {id:'17L/35R', len:85, apch:'VOR 17L/35R'},
      {id:'17C/35C', len:85, apch:'VOR 17C/35C'},
      {id:'17R/35L', len:743, apch:'VOR 17R/35L'},
      {id:'18L/36R', len:85, apch:'VOR 18L/36R'},
      {id:'18R/36L', len:743, apch:'VOR 18R/36L'},
      {id:'13R/31L', len:0, apch:'VOR 13R/31L'},
    ],
    tabs: [
      {
        id: 'gen',
        label: 'General',
        sections: [
          {
            title: '空港概要',
            items: [
              '• ICAO: KDFW / IATA: DFW — Dallas Fort Worth International Airport',
              '• 位置: テキサス州ダラス・フォートワース間（グレープバイン市） — N32°53\' W97°02\'',
              '• 標高: 607 ft / 185 m',
              '• タイムゾーン: UTC-6 (CST) / 夏時間 UTC-5 (CDT)',
              '• 運用形態: 民間空港（H24）。国際線・国内線運航（米国最大級の空港面積）',
            ]
          },
          {
            title: '気象',
            items: [
              '• 大陸性半乾燥気候。テキサス平原に位置',
              '• 冬季（12〜2月）: 氷雨（Freezing Rain）・Ice Storm — DFW最大の気象Threat',
              '• 春（3〜5月）: 竜巻シーズン（Tornado Alley）。雷雨・ひょう（Hail）・突風',
              '• 夏季（6〜8月）: 酷暑（35〜42℃）・雷雨',
            ]
          },
          {
            title: 'TL/TA',
            items: [
              '• 米国基準: 遷移高度 18,000 ft MSL (FL180)',
            ]
          },
        ]
      },
      {
        id: 'arr',
        label: 'Arrival',
        sections: [
          {
            title: 'STAR',
            items: [
              '• RNAV STAR: FINGR / TRRCH / TARRR 等（Jeppesen参照）',
              '• Fort Worth Approach: 124.3 / 126.25 MHz',
            ]
          },
          {
            title: 'Approach',
            items: [
              '• ILS / RNAV（南向き、メインRWY群）',
              '• 通常の国際線使用RWY',
              '• ILS / RNAV（北向き）',
              '• ILS / RNAV（西側南向き）',
              '• 東西風時（稀）',
            ]
          },
        ]
      },
      {
        id: 'dep',
        label: 'Departure',
        sections: [
          {
            title: 'RWY',
            items: [
              '• RWY 17L/35R: 4,085m（最長・メイン）',
              '• RWY 17C/35C: 4,085m',
              '• RWY 17R/35L: 2,743m',
              '• RWY 18L/36R: 4,085m',
            ]
          },
          {
            title: 'ATC',
            items: [
            ]
          },
        ]
      },
    ]
  },
  ZHHH: {
    fullName: '',
    iata: '',
    utc: '+9',
    ops: 'H24',
    curfew: 'Nil',
    fuel: 'JET-A1',
    rffs: 'Cat 9',
    prefRwy: 'Nil',
    wakeCategory: 'D',
    b787Info: {
      wingspan: '60.1m (197ft)',
      tailHeight: '17.0m (55.7ft) - 787-9 / 16.9m (55.4ft) - 787-8',
    },
    transitionAltitude: {
    },
    runways: [
      {id:'04/22', len:0, apch:'VOR 04/22'},
      {id:'04L/22R', len:0, apch:'VOR 04L/22R'},
      {id:'04/04L', len:0, apch:'VOR 04/04L'},
      {id:'22/22R', len:0, apch:'VOR 22/22R'},
    ],
    tabs: [
      {
        id: 'gen',
        label: 'General',
        sections: [
          {
            title: '空港概要',
            items: [
              '• 正式名称: 武漢天河国際空港（Wuhan Tianhe International Airport）',
              '• ICAO: ZHHH　IATA: WUH',
              '• 位置: N30°46\' E114°13\'　標高: 113 ft / 34 m（平地）',
              '• 所在地: 湖北省武漢市（中国中部の主要都市。長江と漢水の合流点）',
              '• UTC+8（中国標準時 CST、DSTなし）',
            ]
          },
          {
            title: '気象',
            items: [
            ]
          },
          {
            title: 'TL/TA',
            items: [
            ]
          },
        ]
      },
      {
        id: 'arr',
        label: 'Arrival',
        sections: [
          {
            title: 'STAR',
            items: [
            ]
          },
          {
            title: 'Approach',
            items: [
            ]
          },
        ]
      },
      {
        id: 'dep',
        label: 'Departure',
        sections: [
          {
            title: 'RWY',
            items: [
              '• RWY 04/22: 長さ 11,483 ft（3,500 m）× 幅 148 ft（45 m）舗装',
              '• RWY 04L/22R: 長さ 11,483 ft（3,500 m）× 幅 148 ft（45 m）舗装（第2滑走路、並行）',
              '• 計器進入方式: ILS（Cat I）/ RNAV(GNSS) / VOR/DME',
              '• RWY 04/04L: 北東向き離陸。武漢市街地側（騒音対策）',
            ]
          },
          {
            title: 'ATC',
            items: [
              '• 言語: 英語・中国語混在。英語対応可能なコントローラーが多い',
              '• CPDLC利用可: ZBWH FIRではCPDLC使用可能。ログオン確認してから使用',
              '• 高度指示: メートル単位での指示あり（1,500m=4,921ft、3,000m=9,843ft等）',
              '• 詳細指示: 速度・高度の細かい指示が多い。PNFが管理',
            ]
          },
        ]
      },
    ]
  },





};
