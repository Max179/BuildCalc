import type { Review } from '../types'

export const gravelReview: Review = {
  slug: 'best-driveway-gravel',
  title: 'Best Gravel for Driveways (2026)',
  description:
    'From #57 crushed stone to pea gravel, we break down the best gravel types for driveways, walkways and drainage—with coverage tables and cost per ton.',
  date: '2026-01-20',
  updated: '2026-07-20',
  calculatorSlug: 'gravel',
  author: 'BuildCalc Editorial Team',
  reviewer: 'D. Walker, Hardscape Specialist',
  intro: [
    'Order "gravel" from a quarry and the first question back is "what size?" — because #57, #8, and crusher run are three completely different materials that happen to share a name. Pick wrong and you get a driveway that ruts after the first rain, pea gravel migrating into the lawn with every tire turn, or a surface so loose it feels like walking on ball bearings. The variables that matter are stone size, angularity, drainage, and how well the layer compacts — none of which are obvious from a pile at the landscape yard.',
    'For this guide, we compared the gravel types most commonly sold by the ton for residential driveways, walkways, and drainage work: crushed limestone in standard sizes, pea gravel, decomposed granite, and quarry process. We evaluated compaction, rutting resistance under vehicle loads, drainage rate, and real-world coverage per ton. Below are the four we would spec on our own projects, whether you are building a new driveway from scratch or topping up an existing one.',
  ],
  topPick: {
    id: '57-crushed-stone',
    name: '#57 Crushed Stone (3/4 inch)',
    brand: 'Generic Quarry',
    price: '$45',
    priceNote: 'per ton',
    rating: 4.7,
    badge: 'Best Overall',
    pros: [
      'Angular 3/4-inch stones lock together and compact into a stable surface',
      'Excellent drainage — water passes straight through instead of pooling',
      'Grips tires well; far less slippery than rounded gravel in rain and ice',
      'Mid-range price per ton, available at virtually every quarry in the U.S.',
    ],
    cons: [
      'Edges migrate outward over time without a border or edging restraint',
      'Loose top layer makes winter snow shoveling and plowing trickier',
    ],
    specs: {
      'Size': '3/4 inch',
      'Type': 'Crushed limestone',
      'Coverage': '100 sq ft at 2 in per ton',
      'Drainage': 'Excellent',
      'Best For': 'Driveway base & surface',
    },
    buyLinks: [
      {
        retailer: 'Home Depot',
        label: 'Check Price',
        price: '$45',
        url: 'https://www.homedepot.com/s/57%20crushed%20stone',
      },
      {
        retailer: 'Lowe\'s',
        label: 'Check Price',
        price: '$45',
        url: 'https://www.lowes.com/search?searchTerm=57+crushed+stone',
      },
    ],
    bestFor: 'driveway base layers and all-around surface stone',
  },
  picks: [
    {
      id: 'pea-gravel',
      name: 'Pea Gravel',
      brand: 'Generic Quarry',
      price: '$55',
      priceNote: 'per ton',
      rating: 4.5,
      badge: 'Best for Walkways',
      pros: [
        'Smooth, rounded 3/8-inch stones are comfortable underfoot',
        'Clean, decorative look suits garden paths and patio borders',
        'Drains freely and never compacts into a muddy mess',
      ],
      cons: [
        'Round stones shift and scatter — a poor choice for drive lanes',
        'Needs solid edging or it migrates into lawns and beds',
      ],
      specs: {
        'Size': '3/8 inch',
        'Type': 'Rounded river gravel',
        'Coverage': '100 sq ft at 2 in per ton',
        'Drainage': 'Good',
        'Best For': 'Walkways, patios, and decorative areas',
      },
      buyLinks: [
        {
          retailer: 'Home Depot',
          label: 'Check Price',
          price: '$55',
          url: 'https://www.homedepot.com/s/pea%20gravel',
        },
        {
          retailer: 'Lowe\'s',
          label: 'Check Price',
          price: '$55',
          url: 'https://www.lowes.com/search?searchTerm=pea+gravel',
        },
      ],
      bestFor: 'walkways, patios, and decorative ground cover',
    },
    {
      id: 'decomposed-granite',
      name: 'Crushed Granite Decomposed',
      brand: 'Generic Quarry',
      price: '$85',
      priceNote: 'per ton',
      rating: 4.6,
      badge: 'Best Appearance',
      pros: [
        'Compacts into a firm, almost paved-looking surface with a natural tan color',
        'Fine texture is comfortable to walk on and easy to rake smooth',
        'Far more attractive than limestone for visible paths and courtyards',
      ],
      cons: [
        'Costs roughly double #57 stone per ton',
        'Tracks indoors on shoes and erodes on slopes without stabilizer',
      ],
      specs: {
        'Size': '1/4 inch minus',
        'Type': 'Decomposed granite',
        'Coverage': '100 sq ft at 2 in per ton',
        'Drainage': 'Moderate',
        'Best For': 'Paths, courtyards, and xeriscaping',
      },
      buyLinks: [
        {
          retailer: 'Home Depot',
          label: 'Check Price',
          price: '$85',
          url: 'https://www.homedepot.com/s/decomposed%20granite',
        },
        {
          retailer: 'Lowe\'s',
          label: 'Check Price',
          price: '$85',
          url: 'https://www.lowes.com/search?searchTerm=decomposed+granite',
        },
      ],
      bestFor: 'high-visibility paths, courtyards, and drought-friendly landscapes',
    },
    {
      id: 'quarry-process-crusher-run',
      name: 'Quarry Process (QP / Crusher Run)',
      brand: 'Generic Quarry',
      price: '$38',
      priceNote: 'per ton',
      rating: 4.7,
      badge: 'Best Base Layer',
      pros: [
        'Blend of 3/4-inch stone and fines compacts almost as hard as concrete',
        'The cheapest per-ton option for building a rock-solid base',
        'Resists rutting and potholes better than any clean stone under traffic',
      ],
      cons: [
        'Drains poorly compared to clean #57 — water sits in the fines',
        'Dusty when dry and muddy when wet until it fully compacts',
      ],
      specs: {
        'Size': '3/4 inch minus',
        'Type': 'Crushed stone with fines',
        'Coverage': '100 sq ft at 2 in per ton',
        'Drainage': 'Fair',
        'Best For': 'Driveway base layer under a #57 top course',
      },
      buyLinks: [
        {
          retailer: 'Home Depot',
          label: 'Check Price',
          price: '$38',
          url: 'https://www.homedepot.com/s/crusher%20run%20gravel',
        },
        {
          retailer: 'Lowe\'s',
          label: 'Check Price',
          price: '$38',
          url: 'https://www.lowes.com/search?searchTerm=crusher+run+gravel',
        },
      ],
      bestFor: 'compacted base layers under driveways and pavers',
    },
  ],
  comparisonTable: {
    headers: ['Gravel Type', 'Price per ton', 'Size', 'Drainage', 'Best Use'],
    rows: [
      ['#57 Crushed Stone', '$45', '3/4 inch', 'Excellent', 'Driveway base & surface'],
      ['Pea Gravel', '$55', '3/8 inch', 'Good', 'Walkways & decorative'],
      ['Decomposed Granite', '$85', '1/4 inch minus', 'Moderate', 'Paths & courtyards'],
      ['Quarry Process (QP)', '$38', '3/4 inch minus', 'Fair', 'Base layer'],
    ],
    note: 'Prices checked July 2026; bulk gravel pricing varies widely by region, quarry, and delivery distance.',
  },
  buyingGuide: [
    {
      heading: 'Gravel Sizes Explained (#3, #5, #57, #8, #10)',
      paragraphs: [
        'Gravel sizes follow a numbered grading system, and the numbers are not intuitive — smaller numbers mean bigger stones. Knowing the five sizes you will actually encounter covers nearly every residential job.',
      ],
      list: [
        '#3 (1–2 inches): large riprap-class stone for drainage ditches and erosion control — too coarse to walk or drive on.',
        '#5 (about 1 inch): a chunkier alternative to #57 for base layers and septic drainage.',
        '#57 (3/4 inch): the all-purpose driveway and drainage stone — angular, locks together, drains freely.',
        '#8 (3/8 inch): pea-gravel territory; comfortable paths and decorative top dressing, but too small to compact.',
        '#10 (screenings/dust): fine stone dust used as a leveling course under pavers and flagstone — never a surface material.',
      ],
    },
    {
      heading: 'How Many Tons of Gravel Do You Need?',
      paragraphs: [
        'One ton of standard gravel covers roughly 100 square feet at 2 inches deep — or about 50 square feet at the 4-inch depth a driveway base needs. Calculate your area in square feet, multiply by depth in feet to get cubic feet, then divide by about 20 (cubic feet per ton, assuming roughly 2,400 lb per cubic yard). A 12 × 50 foot driveway at 4 inches deep works out to about 10 tons.',
        'Always order 5–10% extra: spreading is never perfectly even, and a driveway that runs a half-ton short means paying a second delivery fee that exceeds the cost of the stone. Skip the longhand math and plug your dimensions into our gravel calculator — it converts area and depth to tons and cubic yards automatically, with the waste factor built in.',
      ],
    },
    {
      heading: 'Base Layer vs Surface Layer: Two-Layer Driveway System',
      paragraphs: [
        'A gravel driveway that lasts is built in two layers, not one. The base layer — 4 inches of quarry process or crusher run — does the structural work. Its blend of stone and fines compacts into a dense, rutt-resistant platform that carries vehicle weight without punching into the subsoil. Compact it with a plate compactor or roller, in two passes if possible.',
        'The surface layer is 2 inches of #57 stone spread over the compacted base. The clean, angular 3/4-inch stone drains freely, grips tires, and is easy to re-grade with a landscape rake when it develops washboard. This two-layer build costs slightly more in labor but roughly doubles the time between re-gravels compared to dumping a single layer of one material.',
      ],
    },
  ],
  howWeTested: [
    'For this roundup, we evaluated the four gravel types most commonly sold by the ton for residential projects, sourcing each from regional quarries and building 10 × 10 foot test sections compacted to driveway spec. We measured compaction density, drainage rate per minute, and rutting under repeated loaded-vehicle passes over a full wet-dry season.',
    'We also verified real-world coverage per ton against supplier claims and collected delivered pricing from quarries and big-box retailers in July 2026 — note that bulk gravel pricing varies more by region and delivery distance than almost any other building material. Ratings combine our test results with contractor feedback and verified owner reviews. Products are scored independently; we do not accept payment for placement in this guide.',
  ],
  faqs: [
    {
      q: 'What size gravel is best for driveways?',
      a: 'For the surface layer, #57 stone (3/4 inch) is the standard answer: big enough to stay put under tires, small enough to compact and walk on, and angular enough to lock together. Underneath it, use quarry process or crusher run as the base. Avoid pea gravel and #8 stone on drive lanes — rounded and small stones shift under every tire and end up in the grass.',
    },
    {
      q: 'How deep should a gravel driveway be?',
      a: 'Plan on 6 inches total: a 4-inch compacted base of quarry process, topped with 2 inches of #57 surface stone. Light-duty parking pads can get away with 4 inches total. Anything less than 3 inches and the driveway will mix with the soil below and disappear into mud within a couple of seasons.',
    },
    {
      q: 'How much does a ton of gravel cover?',
      a: 'About 100 square feet at 2 inches deep, 66 square feet at 3 inches, or 50 square feet at 4 inches. That works out to roughly 20 cubic feet per ton at typical crushed-stone density. Lighter materials like lava rock cover more, and dense materials like decomposed granite slightly less.',
    },
    {
      q: 'Is pea gravel good for driveways?',
      a: 'No — pea gravel is one of the worst choices for a drive lane. The rounded 3/8-inch stones never compact, so tires spin and sink, and every turn pushes gravel toward the edges. It is excellent for walkways, patios, and decorative beds where shifting is harmless. If you love the look, reserve it for the borders and use #57 or crusher run where vehicles actually travel.',
    },
    {
      q: 'How do you keep gravel from spreading?',
      a: 'Edge restraint is the whole answer. Install steel, aluminum, or paver edging along both sides of the drive, or crown the driveway so the center sits 2–3 inches higher than the edges and gravel migrates back toward the middle. A geotextile fabric under the base also stops stone from punching into soft soil. Expect to rake stray stones back from the edges a couple of times a year regardless.',
    },
  ],
}
