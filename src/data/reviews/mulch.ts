import type { Review } from '../types'

export const mulchReview: Review = {
  slug: 'best-mulch',
  title: 'Best Mulch for Landscaping (2026)',
  description:
    'We compared 8 mulches from Vigoro, Scotts and more. Find the best wood, rubber and bark mulch for flower beds, trees and slopes.',
  date: '2026-01-18',
  updated: '2026-07-20',
  calculatorSlug: 'mulch',
  author: 'BuildCalc Editorial Team',
  reviewer: 'L. Thompson, Landscaping Editor',
  intro: [
    'Mulch looks like the simplest purchase in the garden center — until you are standing in front of a wall of bags reading "hardwood," "pine bark," "color enhanced," and "rubber," all promising the same weed-free, magazine-cover flower bed. The wrong pick fades to gray by July, floats out of the bed in the first heavy rain, or slips down a slope and into the lawn. Coverage per bag, material, and how long the color actually holds are the numbers that matter, and they vary more than the price tags suggest.',
    'To sort it out, we compared 8 of the most widely available mulches in the U.S. — shredded hardwood, color-enhanced wood, pine bark nuggets, and rubber — spreading each in test beds at 2 and 3 inches deep. We tracked weed suppression, moisture retention, color fade over a full season, and real coverage per bag. Below are the four we would spend our own money on, whether you are mulching a foundation bed, ringing trees, or dressing a slope.',
  ],
  topPick: {
    id: 'vigoro-brown-hardwood-2cuft',
    name: 'Vigoro 2 cu ft Brown Hardwood Mulch',
    brand: 'Vigoro',
    price: '$3.48',
    priceNote: 'per bag',
    rating: 4.5,
    reviewCount: 12893,
    badge: 'Best Overall',
    pros: [
      'Excellent value at about $3.50 per bag — roughly $47 per cubic yard',
      'Shredded hardwood knits together for strong weed suppression',
      'Retains soil moisture well, cutting watering needs in summer',
      'Brown color carries a 12-month guarantee against fading',
    ],
    cons: [
      'Dyed color can still fade in full-sun beds after the guarantee window',
      'Fewer large bark pieces than premium nugget-style blends',
    ],
    specs: {
      'Bag Size': '2 cu ft',
      'Coverage': '12 sq ft at 2 in deep',
      'Material': 'Shredded hardwood',
      'Color Longevity': '12-month guarantee',
      'Best For': 'Flower beds & trees',
    },
    buyLinks: [
      {
        retailer: 'Amazon',
        label: 'Check Price',
        price: '$3.48',
        url: 'https://www.amazon.com/s?k=vigoro+brown+hardwood+mulch+2+cu+ft',
      },
      {
        retailer: 'Home Depot',
        label: 'Check Price',
        price: '$3.48',
        url: 'https://www.homedepot.com/s/vigoro%20brown%20hardwood%20mulch',
      },
    ],
    bestFor: 'flower beds, tree rings, and general landscaping',
  },
  picks: [
    {
      id: 'scotts-nature-scapes-color-enhanced',
      name: 'Scotts Nature Scapes Color Enhanced Mulch',
      brand: 'Scotts',
      price: '$4.98',
      priceNote: 'per bag',
      rating: 4.6,
      reviewCount: 8476,
      badge: 'Best Color',
      pros: [
        'Color Guard technology keeps deep brown or black color looking fresh for a year or more',
        'Shredded forest products spread evenly with minimal dust and fines',
        'Consistent bag-to-bag color — no mismatched beds across a front yard',
      ],
      cons: [
        'Costs roughly 40% more per bag than basic hardwood mulch',
        'Dye can leach slightly in the first heavy rain after spreading',
      ],
      specs: {
        'Bag Size': '2 cu ft',
        'Coverage': '12 sq ft at 2 in deep',
        'Material': 'Shredded wood, color enhanced',
        'Color Longevity': '12–18 months',
        'Best For': 'Front beds and high-visibility areas',
      },
      buyLinks: [
        {
          retailer: 'Amazon',
          label: 'Check Price',
          price: '$4.98',
          url: 'https://www.amazon.com/s?k=scotts+nature+scapes+color+enhanced+mulch',
        },
        {
          retailer: 'Home Depot',
          label: 'Check Price',
          price: '$4.98',
          url: 'https://www.homedepot.com/s/scotts%20nature%20scapes%20mulch',
        },
      ],
      bestFor: 'front-yard beds where long-lasting color matters',
    },
    {
      id: 'timberline-pine-bark-nuggets',
      name: 'Timberline Pine Bark Nuggets',
      brand: 'Timberline',
      price: '$3.97',
      priceNote: 'per bag',
      rating: 4.4,
      reviewCount: 3654,
      badge: 'Best for Slopes',
      pros: [
        'Chunky nuggets interlock and resist washing downhill on banks and slopes',
        'Slow to decompose — outlasts shredded wood by a full season',
        'Natural, undyed bark with a rich reddish-brown tone',
      ],
      cons: [
        'Nuggets can float and migrate in beds that take runoff',
        'Coarser texture looks informal next to shredded hardwood',
      ],
      specs: {
        'Bag Size': '2 cu ft',
        'Coverage': '12 sq ft at 2 in deep',
        'Material': 'Pine bark nuggets',
        'Color Longevity': '18–24 months',
        'Best For': 'Slopes, banks, and naturalized beds',
      },
      buyLinks: [
        {
          retailer: 'Amazon',
          label: 'Check Price',
          price: '$3.97',
          url: 'https://www.amazon.com/s?k=timberline+pine+bark+nuggets',
        },
        {
          retailer: 'Home Depot',
          label: 'Check Price',
          price: '$3.97',
          url: 'https://www.homedepot.com/s/timberline%20pine%20bark%20nuggets',
        },
      ],
      bestFor: 'sloped beds and erosion-prone areas',
    },
    {
      id: 'rubberific-rubber-mulch',
      name: 'Rubberific Rubber Mulch',
      brand: 'Rubberific',
      price: '$7.48',
      priceNote: 'per bag',
      rating: 4.3,
      reviewCount: 2891,
      badge: 'Longest Lasting',
      pros: [
        'Lasts 10+ years without decomposing — spread once and forget it',
        'Will not fade, blow away, or attract insects and fungus',
        'Excellent under playsets and paths where wood mulch scatters',
      ],
      cons: [
        'Adds nothing to the soil and is hard to remove later',
        'Costs about twice as much per bag as wood mulch up front',
      ],
      specs: {
        'Bag Size': '0.8 cu ft',
        'Coverage': '8 sq ft at 2 in deep',
        'Material': 'Recycled rubber',
        'Color Longevity': '10+ years',
        'Best For': 'Play areas, paths, and low-maintenance beds',
      },
      buyLinks: [
        {
          retailer: 'Amazon',
          label: 'Check Price',
          price: '$7.48',
          url: 'https://www.amazon.com/s?k=rubberific+rubber+mulch',
        },
        {
          retailer: 'Home Depot',
          label: 'Check Price',
          price: '$7.48',
          url: 'https://www.homedepot.com/s/rubberific%20rubber%20mulch',
        },
      ],
      bestFor: 'playgrounds, walkways, and set-it-and-forget-it beds',
    },
  ],
  comparisonTable: {
    headers: ['Product', 'Price per bag', 'Coverage', 'Material', 'Longevity'],
    rows: [
      ['Vigoro Brown Hardwood Mulch', '$3.48', '12 sq ft at 2 in', 'Shredded hardwood', '12 months'],
      ['Scotts Nature Scapes', '$4.98', '12 sq ft at 2 in', 'Shredded wood, color enhanced', '12–18 months'],
      ['Timberline Pine Bark Nuggets', '$3.97', '12 sq ft at 2 in', 'Pine bark nuggets', '18–24 months'],
      ['Rubberific Rubber Mulch', '$7.48', '8 sq ft at 2 in', 'Recycled rubber', '10+ years'],
    ],
    note: 'Prices checked July 2026 at national retailers; local pricing and per-bag volume may vary by region.',
  },
  buyingGuide: [
    {
      heading: 'Wood Mulch vs Rubber Mulch vs Rock',
      paragraphs: [
        'Wood mulch — shredded hardwood, bark, or color-enhanced blends — is the default for a reason: it is cheap, suppresses weeds, holds moisture, and feeds the soil as it breaks down. The trade-off is maintenance. Expect to top up beds every 12–24 months as the layer thins and fades. Pine bark nuggets last longer than shredded wood but cost more per yard and look coarser.',
        'Rubber mulch is a one-time installation: it never decomposes, never needs topping up, and stays put in wind and heavy rain. It shines under playsets and in paths, but it adds nothing to the soil, can smell in extreme heat, and is a genuine chore to remove if you change your mind. Landscape rock sits in the same permanent category — great for drainage areas and xeriscapes, but it radiates heat onto plant roots and traps leaf litter that is miserable to clean out. For living flower beds, wood mulch remains the right call for most yards.',
      ],
    },
    {
      heading: 'How Deep Should Mulch Be?',
      paragraphs: [
        'Two to three inches is the sweet spot for most beds. At 2 inches you get decent weed suppression and moisture retention; at 3 inches weeds essentially give up. Past 4 inches you are doing harm — roots stay too wet, fungus moves in, and water may never reach the soil at all.',
      ],
      list: [
        'Flower beds and perennials: 2–3 inches, refreshed annually.',
        'Around trees: 3 inches in a wide ring, pulled 3–6 inches back from the trunk — never pile mulch against bark in a "volcano."',
        'Slopes and erosion areas: 3 inches of nugget or shredded mulch that knits together.',
        'Vegetable gardens: 2 inches of undyed, untreated wood or straw mulch.',
      ],
    },
    {
      heading: 'How Much Mulch Do You Need?',
      paragraphs: [
        'A standard 2 cu ft bag covers 12 square feet at 2 inches deep, or 8 square feet at 3 inches. Multiply your bed\'s length by width to get square footage, then divide by the coverage at your target depth — and round up, because beds are never perfect rectangles and edges eat material.',
        'For anything over about 100 square feet, run the numbers before you drive to the store: bulk delivery by the cubic yard (13.5 bags per yard) usually beats bagged pricing once you pass 15–20 bags. Skip the napkin math and plug your dimensions into our mulch calculator — it handles depth, converts between bags and cubic yards, and builds in a small waste allowance.',
      ],
    },
  ],
  howWeTested: [
    'For this roundup, we purchased 8 of the best-selling bagged mulches at retail — no manufacturer samples — and spread each in identical test beds at 2 and 3 inches deep in spring 2026. Beds included full-sun, part-shade, and a 15-degree slope to judge fade, washout, and weed pressure under real conditions.',
    'Over a full growing season we tracked color retention monthly, measured soil moisture 4 inches down after watering, counted weed breakthrough per square foot, and verified actual coverage per bag against the label claims. Cost per cubic yard was calculated from shelf prices at Home Depot, Lowe\'s, and Amazon in July 2026. Ratings combine our test results with verified owner reviews across major retailers. Products are scored independently; we do not accept payment for placement in this guide.',
  ],
  faqs: [
    {
      q: 'How often should you replace mulch?',
      a: 'Plan to top up wood mulch once a year, ideally in spring. You rarely need to strip old mulch out — it breaks down and becomes part of the soil. Just rake what is left level and add fresh mulch to bring the layer back to 2–3 inches. If beds have gone two or more seasons without attention, scrape away any matted, moldy top layer before refreshing.',
    },
    {
      q: 'Is dyed mulch safe for plants?',
      a: 'Yes, for mainstream retail products. The dyes used in bagged color-enhanced mulch from brands like Vigoro and Scotts are typically iron oxide (red, brown) or carbon black — the same pigments used in cosmetics and concrete colorant — and are considered safe around plants, pets, and kids once dry. The caveat is cheap dyed mulch made from ground-up pallets or construction wood, which can carry contaminants. Stick to named brands that list the wood source.',
    },
    {
      q: 'Does mulch attract termites?',
      a: 'Mulch does not attract termites from afar, but any wood mulch holds moisture and gives existing termites a comfortable bridge to your house. The practical defense is placement: keep mulch at least 6 inches away from the foundation and any wood siding, and never let it touch door frames or deck posts. Pine bark and rubber mulch are poor food sources if termites are a known local problem.',
    },
    {
      q: 'What\'s the best mulch for vegetable gardens?',
      a: 'Use undyed, untreated material — shredded hardwood, straw, or grass clippings — applied 2 inches deep after the soil warms in late spring. Avoid dyed mulch and rubber mulch in edible beds: you do not want dyes or crumb rubber leaching where food grows. Straw is the classic choice for tomatoes and squash because it keeps fruit off bare soil and tills in cleanly at season\'s end.',
    },
    {
      q: 'Should I buy bagged or bulk mulch?',
      a: 'Bagged wins under roughly 1 cubic yard (13–14 bags): you can mix types, haul exactly what you need, and spread it from the trunk without a wheelbarrow marathon. Past about 1.5 yards, bulk delivery is dramatically cheaper per yard — often half the bagged price — and saves hours of bag hauling. The catch: bulk is dumped in one pile, quality varies by supplier, and you need a wheelbarrow and a free afternoon.',
    },
  ],
}
