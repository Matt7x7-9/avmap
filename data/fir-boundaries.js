// FIR boundary polygons — improved approximations based on ICAO FIR charts
// GeoJSON format: coordinates are [longitude, latitude]
// Reference: ICAO Asia/Pacific FIR boundaries (approximate, not for navigation)

const FIR_BOUNDARIES = {
  type: "FeatureCollection",
  features: [
    {
      // Tokyo FIR (RJJJ) — eastern Japan + vast Pacific area
      type: "Feature",
      properties: { id: "RJJJ", label: "Tokyo FIR" },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [136.0, 24.0],
          [180.0, 24.0],
          [180.0, 70.0],
          [136.0, 70.0],
          [136.0, 43.0],
          [136.0, 24.0]
        ]]
      }
    },
    {
      // Fukuoka FIR (RJJJ-F) — western Japan, Yellow Sea, part of East China Sea
      // Eastern boundary: ~136°E; Western: follows Korean/China coast ~124°E
      // Southern boundary meets Shanghai FIR ~31°N (near AKARA/SADLI)
      type: "Feature",
      properties: { id: "RJJJ-F", label: "Fukuoka FIR" },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [124.0, 43.0],
          [136.0, 43.0],
          [136.0, 24.0],
          [130.0, 24.0],
          [128.0, 24.0],
          [125.0, 25.0],
          [124.0, 27.0],
          [123.5, 29.0],
          [123.5, 31.0],  // approx SADLI/LAMEN area boundary
          [124.0, 33.0],
          [124.0, 37.0],
          [124.0, 40.0],
          [124.0, 43.0]
        ]]
      }
    },
    {
      // Shanghai FIR (ZSHA) — East China Sea, eastern/northern China
      // Southern boundary ~27.5°N; meets Fukuoka ~124°E; extends to ~44°N
      type: "Feature",
      properties: { id: "ZSHA", label: "Shanghai FIR" },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [110.0, 27.5],
          [123.5, 27.5],
          [123.5, 31.0],  // meets Fukuoka FIR boundary
          [124.0, 33.0],
          [124.0, 37.0],
          [124.0, 40.0],
          [124.0, 43.0],
          [110.0, 43.0],
          [110.0, 27.5]
        ]]
      }
    },
    {
      // Guangzhou FIR (ZGZU) — southern China, northern South China Sea coast
      // North boundary: ~27.5°N; South: ~20°N; West: ~100°E; East: ~117°E
      type: "Feature",
      properties: { id: "ZGZU", label: "Guangzhou FIR" },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [100.0, 20.0],
          [110.0, 20.0],
          [113.0, 20.0],
          [116.5, 21.5],
          [116.5, 24.0],
          [110.0, 27.5],
          [100.0, 27.5],
          [100.0, 20.0]
        ]]
      }
    },
    {
      // Sanya FIR (ZJSA) — South China Sea (Chinese-administered)
      // Covers the contested South China Sea area south of Guangzhou FIR
      type: "Feature",
      properties: { id: "ZJSA", label: "Sanya FIR" },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [105.0, 8.0],
          [120.0, 8.0],
          [120.0, 12.0],
          [117.5, 15.0],
          [116.5, 18.0],
          [116.5, 21.5],
          [113.0, 20.0],
          [110.0, 20.0],
          [107.0, 18.0],
          [105.0, 15.0],
          [105.0, 8.0]
        ]]
      }
    },
    {
      // Hong Kong FIR (VHHK) — delegated FIR within Guangzhou FIR
      // Small area around Hong Kong: roughly 113°E-116.5°E, 20°N-24°N
      type: "Feature",
      properties: { id: "VHHK", label: "Hong Kong FIR" },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [113.0, 20.0],
          [116.5, 21.5],
          [116.5, 24.0],
          [113.0, 24.0],
          [113.0, 20.0]
        ]]
      }
    },
    {
      // Taipei FIR (RCAA) — Taiwan airspace + surrounding sea
      // Overlaps somewhat with Manila FIR to the south and Fukuoka to north
      type: "Feature",
      properties: { id: "RCAA", label: "Taipei FIR" },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [116.5, 24.0],
          [128.0, 24.0],
          [128.0, 27.5],
          [123.5, 27.5],
          [123.5, 26.0],
          [120.0, 22.0],
          [116.5, 21.5],
          [116.5, 24.0]
        ]]
      }
    },
    {
      // Manila FIR (RPHI) — Philippine airspace + surrounding Pacific/SCS
      type: "Feature",
      properties: { id: "RPHI", label: "Manila FIR" },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [116.5, 21.5],
          [120.0, 22.0],
          [123.5, 26.0],
          [128.0, 24.0],
          [135.0, 18.0],
          [135.0, 3.0],
          [120.0, 3.0],
          [116.5, 8.0],
          [120.0, 12.0],
          [120.0, 8.0],
          [116.5, 8.0],
          [116.5, 21.5]
        ]]
      }
    },
    {
      // Ho Chi Minh FIR (VVHM) — southern Vietnam + Gulf of Thailand/SCS
      type: "Feature",
      properties: { id: "VVHM", label: "Ho Chi Minh FIR" },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [99.0, 8.0],
          [105.0, 8.0],
          [105.0, 15.0],
          [107.0, 18.0],
          [110.0, 20.0],
          [105.0, 20.0],  // approx border with Guangzhou/Sanya
          [102.0, 18.0],
          [102.0, 14.0],
          [103.0, 10.0],
          [99.0, 8.0]
        ]]
      }
    },
    {
      // Bangkok FIR (VTBB) — Thailand + parts of surrounding countries
      type: "Feature",
      properties: { id: "VTBB", label: "Bangkok FIR" },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [97.0, 5.5],
          [103.0, 5.5],
          [103.0, 10.0],
          [102.0, 14.0],
          [102.0, 18.0],
          [100.0, 20.0],
          [97.0, 24.0],
          [97.0, 20.0],
          [98.0, 16.0],
          [97.0, 12.0],
          [97.0, 5.5]
        ]]
      }
    }
  ]
};
