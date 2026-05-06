// FIR boundary polygons — simplified/approximate for visual reference
// GeoJSON format: coordinates are [longitude, latitude]
// These are approximate and intended for reference only, not navigation

const FIR_BOUNDARIES = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { id: "RJJJ", label: "Tokyo FIR" },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [136.0, 24.0], [180.0, 24.0], [180.0, 55.0],
          [136.0, 55.0], [136.0, 24.0]
        ]]
      }
    },
    {
      type: "Feature",
      properties: { id: "RJJJ-F", label: "Fukuoka FIR" },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [122.0, 24.0], [136.0, 24.0], [136.0, 40.0],
          [130.0, 42.0], [122.0, 38.0], [122.0, 24.0]
        ]]
      }
    },
    {
      type: "Feature",
      properties: { id: "ZSHA", label: "Shanghai FIR" },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [117.0, 27.5], [136.0, 27.5], [136.0, 44.0],
          [117.0, 44.0], [117.0, 27.5]
        ]]
      }
    },
    {
      type: "Feature",
      properties: { id: "ZGZU", label: "Guangzhou FIR" },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [100.0, 18.0], [122.0, 18.0], [122.0, 27.5],
          [117.0, 27.5], [100.0, 27.5], [100.0, 18.0]
        ]]
      }
    },
    {
      type: "Feature",
      properties: { id: "ZJSA", label: "Sanya FIR" },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [105.0, 10.0], [122.0, 10.0], [122.0, 18.0],
          [105.0, 18.0], [105.0, 10.0]
        ]]
      }
    },
    {
      type: "Feature",
      properties: { id: "VHHK", label: "Hong Kong FIR" },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [111.5, 18.0], [117.0, 18.0], [117.0, 24.0],
          [111.5, 24.0], [111.5, 18.0]
        ]]
      }
    },
    {
      type: "Feature",
      properties: { id: "RCAA", label: "Taipei FIR" },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [117.0, 18.0], [128.0, 18.0], [128.0, 27.5],
          [117.0, 27.5], [117.0, 18.0]
        ]]
      }
    },
    {
      type: "Feature",
      properties: { id: "RPHI", label: "Manila FIR" },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [114.0, 3.0], [132.0, 3.0], [132.0, 22.0],
          [122.0, 22.0], [122.0, 18.0], [114.0, 18.0], [114.0, 3.0]
        ]]
      }
    },
    {
      type: "Feature",
      properties: { id: "VVHM", label: "Ho Chi Minh FIR" },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [99.0, 8.0], [115.0, 8.0], [115.0, 18.0],
          [105.0, 18.0], [105.0, 10.0], [99.0, 10.0], [99.0, 8.0]
        ]]
      }
    },
    {
      type: "Feature",
      properties: { id: "VTBB", label: "Bangkok FIR" },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [97.0, 5.0], [105.0, 5.0], [105.0, 10.0],
          [99.0, 10.0], [99.0, 22.0], [97.0, 22.0], [97.0, 5.0]
        ]]
      }
    }
  ]
};
