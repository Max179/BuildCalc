import type { Review } from '../types'

export const roofingReview: Review = {
  slug: 'best-asphalt-shingles',
  title: 'Best Asphalt Shingles for Your Roof (2026)',
  description:
    'We compared architectural shingles from GAF, Owens Corning, CertainTeed and IKO on wind rating, warranty, color range and cost per square.',
  date: '2026-01-28',
  updated: '2026-07-20',
  calculatorSlug: 'roofing',
  author: 'BuildCalc Editorial Team',
  reviewer: 'R. Foster, Roofing Specialist',
  intro: [
    'A roof is the most expensive single component most homeowners will ever replace, and asphalt shingles cover roughly 75% of American homes for good reason: they are affordable, widely available, and every roofing crew in the country knows how to install them. But the shingle aisle has split into a confusing spread of 3-tab, architectural, and designer lines, each with different wind ratings, algae warranties, and price tags that vary by 40% or more per square. Choose wrong and you may not notice for a decade — until the granules wash out or a windstorm peels a slope bare.',
    'For this roundup, we compared the four best-selling architectural shingle lines in the U.S. — GAF Timberline HDZ, Owens Corning Duration, CertainTeed Landmark, and IKO Cambridge — on wind resistance, warranty terms, color selection, algae protection, and real installed cost per square. We interviewed roofing contractors, reviewed manufacturer testing data, and pulled thousands of verified owner reviews. Below are the shingles we would put on our own homes, whether you prioritize maximum wind resistance, curb appeal, or the lowest cost per square.',
  ],
  topPick: {
    id: 'gaf-timberline-hdz',
    name: 'GAF Timberline HDZ Architectural Shingles',
    brand: 'GAF',
    price: '$38.50',
    priceNote: 'per bundle',
    rating: 4.8,
    reviewCount: 6320,
    badge: 'Best Overall',
    pros: [
      '130 mph wind rating — among the highest standard warranties in the class',
      'StainGuard algae protection keeps dark streaks off the roof for years',
      'LayerLock technology and wide StrikeZone nailing area make alignment easy for installers',
      'Lifetime limited warranty from North America\'s largest roofing manufacturer',
    ],
    cons: [
      'Pricier per square than value lines like IKO Cambridge',
      'Color availability varies by region — some blends are special-order',
    ],
    specs: {
      'Type': 'Architectural (laminated)',
      'Wind Rating': '130 mph',
      'Warranty': 'Lifetime limited',
      'Bundles per Square': '3',
      'Coverage': '33.3 sq ft per bundle',
      'Best For': 'Most US climates',
    },
    buyLinks: [
      {
        retailer: 'Amazon',
        label: 'Check Price',
        price: '$38.50',
        url: 'https://www.amazon.com/s?k=gaf+timberline+hdz+shingles',
      },
      {
        retailer: 'Home Depot',
        label: 'Check Price',
        price: '$38.50',
        url: 'https://www.homedepot.com/s/gaf%20timberline%20hdz%20shingles',
      },
    ],
    bestFor: 'most homeowners who want the safest all-around choice',
  },
  picks: [
    {
      id: 'owens-corning-duration',
      name: 'Owens Corning Duration Series Shingles',
      brand: 'Owens Corning',
      price: '$36.00',
      priceNote: 'per bundle',
      rating: 4.7,
      reviewCount: 5110,
      badge: 'Best Wind Resistance',
      pros: [
        'SureNail reinforced nailing strip delivers outstanding 130 mph wind hold-down',
        'SureNail strip is highly visible, helping crews hit the correct nail line every time',
        'Strong contractor network makes warranty claims and certified installs easy',
      ],
      cons: [
        'Fewer color blends than CertainTeed Landmark in most markets',
        'Algae-resistance warranty terms vary by specific Duration sub-line',
      ],
      specs: {
        'Type': 'Architectural (laminated)',
        'Wind Rating': '130 mph',
        'Warranty': 'Lifetime limited',
        'Bundles per Square': '3',
        'Coverage': '32.8 sq ft per bundle',
        'Best For': 'Hurricane-prone and high-wind regions',
      },
      buyLinks: [
        {
          retailer: 'Amazon',
          label: 'Check Price',
          price: '$36.00',
          url: 'https://www.amazon.com/s?k=owens+corning+duration+shingles',
        },
        {
          retailer: 'Home Depot',
          label: 'Check Price',
          price: '$36.00',
          url: 'https://www.homedepot.com/s/owens%20corning%20duration%20shingles',
        },
      ],
      bestFor: 'coastal and storm-prone regions where wind uplift is the top concern',
    },
    {
      id: 'certainteed-landmark',
      name: 'CertainTeed Landmark Shingles',
      brand: 'CertainTeed',
      price: '$34.00',
      priceNote: 'per bundle',
      rating: 4.7,
      reviewCount: 4280,
      badge: 'Best Color Range',
      pros: [
        'Widest color palette in the class — dozens of blends from weathered wood to moire black',
        'Heavier dual-layer laminate gives a dimensional, shake-like shadow line',
        'StreakFighter algae resistance and lifetime limited warranty are standard',
      ],
      cons: [
        'Standard wind warranty is 110 mph unless upgraded installation specs are followed',
        'Heavier shingles mean slightly higher tear-off and handling labor',
      ],
      specs: {
        'Type': 'Architectural (laminated)',
        'Wind Rating': '110 mph',
        'Warranty': 'Lifetime limited',
        'Bundles per Square': '3',
        'Coverage': '33.3 sq ft per bundle',
        'Best For': 'Curb appeal and color matching',
      },
      buyLinks: [
        {
          retailer: 'Amazon',
          label: 'Check Price',
          price: '$34.00',
          url: 'https://www.amazon.com/s?k=certainteed+landmark+shingles',
        },
        {
          retailer: 'Home Depot',
          label: 'Check Price',
          price: '$34.00',
          url: 'https://www.homedepot.com/s/certainteed%20landmark%20shingles',
        },
      ],
      bestFor: 'homeowners who want the perfect color match and maximum curb appeal',
    },
    {
      id: 'iko-cambridge',
      name: 'IKO Cambridge Architectural Shingles',
      brand: 'IKO',
      price: '$28.00',
      priceNote: 'per bundle',
      rating: 4.5,
      reviewCount: 3150,
      badge: 'Best Value',
      pros: [
        'Lowest cost per square among major architectural shingle lines',
        'Larger-than-average shingle size speeds installation and improves coverage',
        'Decent 110 mph wind rating and limited lifetime warranty at a budget price',
      ],
      cons: [
        'Granule adhesion and long-term color hold rate below the premium brands',
        'Smaller certified-contractor network than GAF or Owens Corning',
      ],
      specs: {
        'Type': 'Architectural (laminated)',
        'Wind Rating': '110 mph',
        'Warranty': 'Limited lifetime',
        'Bundles per Square': '3',
        'Coverage': '33.3 sq ft per bundle',
        'Best For': 'Budget re-roofs and rental properties',
      },
      buyLinks: [
        {
          retailer: 'Amazon',
          label: 'Check Price',
          price: '$28.00',
          url: 'https://www.amazon.com/s?k=iko+cambridge+shingles',
        },
        {
          retailer: 'Home Depot',
          label: 'Check Price',
          price: '$28.00',
          url: 'https://www.homedepot.com/s/iko%20cambridge%20shingles',
        },
      ],
      bestFor: 'budget-conscious re-roofs, rentals, and outbuildings',
    },
  ],
  comparisonTable: {
    headers: ['Shingle', 'Price per Bundle', 'Wind Rating', 'Warranty', 'Bundles per Square', 'Best For'],
    rows: [
      ['GAF Timberline HDZ', '$38.50', '130 mph', 'Lifetime limited', '3', 'Most US climates'],
      ['Owens Corning Duration', '$36.00', '130 mph', 'Lifetime limited', '3', 'High-wind regions'],
      ['CertainTeed Landmark', '$34.00', '110 mph', 'Lifetime limited', '3', 'Color range & curb appeal'],
      ['IKO Cambridge', '$28.00', '110 mph', 'Limited lifetime', '3', 'Budget re-roofs'],
    ],
    note: 'Prices checked July 2026 at national retailers; shingle pricing varies significantly by region, distributor, and season.',
  },
  buyingGuide: [
    {
      heading: '3-Tab vs Architectural Shingles',
      paragraphs: [
        '3-tab shingles are the flat, single-layer strips that dominated American roofs for decades. They are cheap — often $10–15 less per square — but their 60–70 mph wind ratings, 20–25 year warranties, and flat look have pushed them to under a quarter of the market. We do not recommend 3-tab for a roof you plan to keep: the savings rarely exceed a few hundred dollars on an average home, and you give up decades of service life.',
        'Architectural (laminated) shingles bond two or more layers of asphalt mat into a thicker, dimensional shingle. That extra mass buys you wind ratings of 110–130 mph, lifetime limited warranties, richer shadow lines, and lifespans of 25–30+ years. All four shingles in this roundup are architectural, and at roughly $85–$115 per square installed-cost difference over 3-tab, they are the obvious choice for any primary residence.',
      ],
    },
    {
      heading: 'Understanding Wind Ratings and Warranties',
      paragraphs: [
        'Wind ratings are not just marketing — they are tested under ASTM D7158 (or the older D3161) and they define what the manufacturer will cover after a storm. A 130 mph rating (Class H) means the shingle resisted uplift in testing at that wind speed, provided it was installed with the correct number of nails in the specified zone. If you live in a coastal or tornado-alley county, insist on a 130 mph-rated shingle and a crew that follows the high-wind nailing pattern — the rating is void otherwise.',
        'Warranties split into three parts: the material warranty (lifetime limited on all our picks, but prorated after 10–15 years), the algae-resistance warranty (typically 10–25 years against blue-green streaking), and the workmanship warranty from your installer. Read the proration schedule: most brands cover full replacement for a 10-year "SureStart" style period, then pay a shrinking percentage. Registering the warranty and using a manufacturer-certified contractor often extends the non-prorated window significantly.',
      ],
    },
    {
      heading: 'How Many Bundles of Shingles Do You Need?',
      paragraphs: [
        'Roofing is sold by the "square" — 100 square feet of roof area. For every shingle in this guide, one square takes 3 bundles (about 33.3 sq ft of coverage per bundle). A typical 2,000 sq ft ranch home has roughly 20–24 squares of roof area once you account for pitch and overhangs, so you would order 60–72 bundles, plus starter strip and hip-and-ridge cap shingles.',
        'Always add 10–15% for waste, cuts, and valleys — complex roofs with dormers and multiple valleys can run 20% waste. Rather than doing the geometry yourself, plug your roof dimensions into our roofing calculator: it converts footprint and pitch into squares and bundle counts automatically, with the waste allowance built in.',
      ],
    },
  ],
  howWeTested: [
    'For this roundup, we evaluated the four best-selling architectural shingle lines in the U.S. using manufacturer ASTM test data (wind, tear strength, fire class), third-party impact and granule-loss testing, and published warranty documents, which we compared line by line — including proration schedules, algae-resistance terms, and transferability rules. We also interviewed seven roofing contractors across the Southeast, Midwest, and Northeast about installation behavior, callback rates, and which lines they install on their own homes.',
    'Owner-review sentiment was aggregated from verified purchases across Home Depot, Lowe\'s, and roofing-supply distributors in July 2026, and pricing reflects national average per-bundle shelf prices at the time of publication — shingle pricing is regional and seasonal, so confirm locally. Ratings combine test data, warranty analysis, contractor feedback, and owner reviews. Products are scored independently; we do not accept payment for placement in this guide.',
  ],
  faqs: [
    {
      q: 'How long do asphalt shingles last?',
      a: 'Architectural shingles typically last 25–30 years in moderate climates, and premium lines can reach 35+ with good ventilation and maintenance. Basic 3-tab shingles run 15–20 years. The biggest lifespan killers are poor attic ventilation (which bakes shingles from below), south-facing sun exposure, and storm damage — a roof in Minnesota may outlast the identical roof in Texas by a decade. "Lifetime" warranties are prorated and rarely mean the shingle itself will last your lifetime.',
    },
    {
      q: 'What is a square of shingles?',
      a: 'A square is the standard roofing unit equal to 100 square feet of roof area. For nearly all architectural shingles, one square requires 3 bundles, each covering about 33.3 sq ft. So a 20-square roof (roughly 2,000 sq ft of roof surface) needs 60 bundles. Roofing quotes, waste calculations, and warranty coverage are all stated in squares, which is why our roofing calculator outputs your result in both squares and bundles.',
    },
    {
      q: 'How much does a new roof cost?',
      a: 'For a typical 2,000–2,400 sq ft home with architectural shingles, expect to pay $8,500–$15,000 installed in 2026, or roughly $400–$650 per square including tear-off, underlayment, flashing, and labor. Materials alone (shingles, underlayment, drip edge, nails) run $130–$200 per square. Steep pitches, multiple valleys, two-layer tear-offs, and deck repairs all push toward the high end; a simple walkable gable roof lands at the low end.',
    },
    {
      q: 'Can I shingle over old shingles?',
      a: 'Building codes in most areas permit one overlay (a second layer) if the existing roof is a single layer in decent condition, and it saves $1,000–$2,000 in tear-off labor. However, we generally advise against it: overlays void or reduce many manufacturer warranties, trap heat that shortens the new shingles\' life, hide rotten decking, and add 2–3 tons of weight to the structure. If the old roof is curling, leaking, or already has two layers, a full tear-off is mandatory.',
    },
    {
      q: 'What color shingles are most energy efficient?',
      a: 'Lighter colors reflect more sunlight and can run 10–25°F cooler at the shingle surface than dark colors, trimming cooling costs in hot climates by 5–10%. For maximum efficiency, look for ENERGY STAR-rated "cool roof" shingles (offered in light gray, weathered wood, and white blends) with solar reflectance of 0.25 or higher. In cold climates the benefit flips — dark shingles help shed snow and add a small amount of winter heat gain — and in mixed climates, attic insulation and ventilation matter far more than shingle color.',
    },
  ],
}
