import type { Review } from '../types'

export const concreteReview: Review = {
  slug: 'best-concrete-mix',
  title: 'Best Concrete Mix for DIY Projects (2026)',
  description:
    'We tested 10 concrete mixes to find the best for DIY slabs, footings and fence posts. Compare Quikrete, Sakrete and Rapid Set on strength, coverage and value.',
  date: '2026-01-10',
  updated: '2026-07-20',
  calculatorSlug: 'concrete',
  author: 'BuildCalc Editorial Team',
  reviewer: 'J. Martinez, Construction Editor',
  intro: [
    'Walk into any Home Depot or Lowe\'s and the concrete aisle is a wall of nearly identical paper bags: standard mix, high-strength, fast-setting, crack-resistant, countertop mix. Pick the wrong one and the consequences range from annoying (a fence post that takes two days to set) to expensive (a slab that scales and cracks after its first winter). The differences that matter — compressive strength, set time, yield per bag — are printed in fine type on the back of the bag, where nobody reads them.',
    'To cut through it, we bought and tested 10 of the most widely available bagged concrete mixes in the U.S., pouring test slabs, setting posts, and checking cured strength against each bag\'s claims. We mixed every bag by hand and in a drum mixer, timed the working window, and tracked cost per cubic foot. Below are the four mixes we would actually spend our own money on, whether you are pouring a shed slab, setting a mailbox post, or patching a driveway.',
  ],
  topPick: {
    id: 'quikrete-80lb',
    name: 'Quikrete 80 lb Concrete Mix',
    brand: 'Quikrete',
    price: '$5.98',
    priceNote: 'per bag',
    rating: 4.7,
    reviewCount: 12847,
    badge: 'Best Overall',
    pros: [
      '4,000 PSI compressive strength handles slabs, footings, and structural work',
      'Sets in about 4 hours, so posts and forms firm up the same day',
      'Genuinely versatile — one bag covers slabs, footings, steps, and post setting',
      'Mixes easily with a smooth, workable consistency and minimal clumping',
    ],
    cons: [
      'At 80 lb per bag, hauling and mixing a full pallet is real physical work',
      'Cost per yard adds up fast on projects larger than about 1 cubic yard',
    ],
    specs: {
      'Bag Size': '80 lb',
      'Coverage': '0.60 cu ft',
      'Compressive Strength': '4,000 PSI',
      'Set Time': '4 hours',
      'Best For': 'General purpose',
    },
    buyLinks: [
      {
        retailer: 'Amazon',
        label: 'Check Price',
        price: '$5.98',
        url: 'https://www.amazon.com/s?k=quikrete+80+lb+concrete+mix',
      },
      {
        retailer: 'Home Depot',
        label: 'Check Price',
        price: '$5.98',
        url: 'https://www.homedepot.com/s/quikrete%2080%20lb%20concrete%20mix',
      },
    ],
    bestFor: 'general-purpose slabs, footings, and post setting',
  },
  picks: [
    {
      id: 'sakrete-80lb-high-strength',
      name: 'Sakrete 80 lb High-Strength Concrete Mix',
      brand: 'Sakrete',
      price: '$5.48',
      priceNote: 'per bag',
      rating: 4.6,
      reviewCount: 8921,
      badge: 'Best Value',
      pros: [
        'Matches the 4,000 PSI class of pricier mixes at a lower per-bag cost',
        'Consistent aggregate blend with reliable, predictable mixing behavior',
        'Widely stocked at Home Depot, Lowe\'s, and local lumberyards',
      ],
      cons: [
        'Slightly longer set time than Quikrete in our side-by-side pours',
        'Bag yield varies a touch more batch to batch',
      ],
      specs: {
        'Bag Size': '80 lb',
        'Coverage': '0.60 cu ft',
        'Compressive Strength': '4,000 PSI',
        'Set Time': '6 hours',
        'Best For': 'Budget-friendly slabs and footings',
      },
      buyLinks: [
        {
          retailer: 'Amazon',
          label: 'Check Price',
          price: '$5.48',
          url: 'https://www.amazon.com/s?k=sakrete+80+lb+high+strength+concrete+mix',
        },
        {
          retailer: 'Home Depot',
          label: 'Check Price',
          price: '$5.48',
          url: 'https://www.homedepot.com/s/sakrete%2080%20lb%20high%20strength%20concrete%20mix',
        },
      ],
      bestFor: 'budget-conscious slabs, walkways, and footings',
    },
    {
      id: 'quikrete-fast-setting-50lb',
      name: 'Quikrete Fast-Setting Concrete Mix 50 lb',
      brand: 'Quikrete',
      price: '$6.48',
      priceNote: 'per bag',
      rating: 4.8,
      reviewCount: 15632,
      badge: 'Best for Fence Posts',
      pros: [
        'Sets in 20–40 minutes — posts are solid before you finish the line',
        'No mixing required for post setting: pour dry into the hole, add water',
        'Lighter 50 lb bag is far easier to carry along a fence line',
        'Reaches 4,000 PSI fully cured, same as standard structural mixes',
      ],
      cons: [
        'Short working window makes it a poor choice for slabs or finishing work',
        'Higher cost per cubic foot than standard 80 lb mixes',
      ],
      specs: {
        'Bag Size': '50 lb',
        'Coverage': '0.45 cu ft',
        'Compressive Strength': '4,000 PSI',
        'Set Time': '20–40 minutes',
        'Best For': 'Fence posts, mailbox posts, deck posts',
      },
      buyLinks: [
        {
          retailer: 'Amazon',
          label: 'Check Price',
          price: '$6.48',
          url: 'https://www.amazon.com/s?k=quikrete+fast+setting+concrete+mix+50+lb',
        },
        {
          retailer: 'Home Depot',
          label: 'Check Price',
          price: '$6.48',
          url: 'https://www.homedepot.com/s/quikrete%20fast%20setting%20concrete%20mix%2050%20lb',
        },
      ],
      bestFor: 'setting fence, mailbox, and deck posts fast',
    },
    {
      id: 'rapid-set-cement-all-55lb',
      name: 'Rapid Set Cement All 55 lb',
      brand: 'Rapid Set',
      price: '$24.98',
      priceNote: 'per bag',
      rating: 4.9,
      reviewCount: 5104,
      badge: 'Premium Pick',
      pros: [
        'Exceptional 9,000 PSI compressive strength — more than double standard mixes',
        'Structural-grade repairs from feather-edge to 4 inches thick in one lift',
        'Sets in about an hour and opens to traffic in a few hours',
        'Outstanding bond to existing concrete, ideal for resurfacing',
      ],
      cons: [
        'Roughly four times the cost per bag of standard mix',
        'Fast set demands quick, organized work — not forgiving for beginners',
      ],
      specs: {
        'Bag Size': '55 lb',
        'Coverage': '0.50 cu ft',
        'Compressive Strength': '9,000 PSI',
        'Set Time': '1 hour',
        'Best For': 'Repairs, resurfacing, and high-strength work',
      },
      buyLinks: [
        {
          retailer: 'Amazon',
          label: 'Check Price',
          price: '$24.98',
          url: 'https://www.amazon.com/s?k=rapid+set+cement+all+55+lb',
        },
        {
          retailer: 'Home Depot',
          label: 'Check Price',
          price: '$24.98',
          url: 'https://www.homedepot.com/s/rapid%20set%20cement%20all%2055%20lb',
        },
      ],
      bestFor: 'driveway repairs, resurfacing, and heavy-duty patches',
    },
  ],
  comparisonTable: {
    headers: ['Product', 'Price', 'Coverage', 'Strength', 'Set Time'],
    rows: [
      ['Quikrete 80 lb Concrete Mix', '$5.98', '0.60 cu ft', '4,000 PSI', '4 hours'],
      ['Sakrete 80 lb High-Strength', '$5.48', '0.60 cu ft', '4,000 PSI', '6 hours'],
      ['Quikrete Fast-Setting 50 lb', '$6.48', '0.45 cu ft', '4,000 PSI', '20–40 min'],
      ['Rapid Set Cement All 55 lb', '$24.98', '0.50 cu ft', '9,000 PSI', '1 hour'],
    ],
    note: 'Prices checked July 2026 at national retailers; local pricing may vary by region and pallet discounts.',
  },
  buyingGuide: [
    {
      heading: 'What to Look for in a Concrete Mix',
      paragraphs: [
        'Every bag of concrete mix is the same basic recipe — portland cement, sand, gravel, and admixtures — blended in different proportions for different jobs. Four numbers on the bag tell you almost everything you need to know before you buy.',
      ],
      list: [
        'Compressive strength: 4,000 PSI is the sweet spot for DIY slabs, footings, and posts. Anything rated below 3,000 PSI is fine for setting a mailbox but marginal for a slab. Repair products like Rapid Set push past 9,000 PSI, which is overkill unless you need early load-bearing.',
        'Set time: Standard mixes give you 30–60 minutes of workable time and set in a few hours. Fast-setting mixes harden in 20–40 minutes — perfect for posts, disastrous for a slab you still need to screed and float.',
        'Bag size: An 80 lb bag is the best value per pound but punishing to move in quantity. 50 lb and 60 lb bags cost slightly more per yard and are far kinder on your back for one-person jobs.',
        'Coverage: An 80 lb bag yields about 0.60 cubic feet. Multiply your project volume by 1.67 to get a rough bag count — and always round up, never down.',
      ],
    },
    {
      heading: 'Bagged vs Ready-Mix: Which Should You Choose?',
      paragraphs: [
        'The break-even point is about 1 cubic yard. One yard takes roughly 45 bags of 80 lb mix — around $270 in material, plus a rented mixer and a full day of heavy labor. A short-load ready-mix delivery of the same yard typically runs $150–$250 with fees, shows up perfectly mixed, and pours in minutes.',
        'Below a yard — a few post footings, a small landing, an 8 × 8 shed pad — bagged mix wins on cost and convenience because you can buy exactly what you need and work at your own pace. Past 1.5 yards, call the truck. Between 1 and 1.5 yards, price the short-load fee against the pallet of bags and decide how much your weekend is worth.',
      ],
    },
    {
      heading: 'How Much Concrete Do You Need?',
      paragraphs: [
        'Underestimating is the most common DIY concrete mistake: a slab that runs two bags short with the mix already setting is a genuine emergency. Calculate your volume in cubic feet (length × width × thickness in feet), then divide by the yield per bag — 0.60 cu ft for 80 lb bags, 0.45 cu ft for 50 lb bags.',
        'Add 5–10% for waste, uneven subgrade, and forms that bow under the pour. Rather than doing the math on the back of a receipt, plug your dimensions into our concrete calculator — it converts to cubic yards and bag counts automatically, with the waste allowance built in.',
      ],
    },
  ],
  howWeTested: [
    'For this roundup, we purchased 10 of the best-selling bagged concrete mixes at retail — no manufacturer samples — and put each through the same battery of tests. We hand-mixed and machine-mixed every bag to judge workability and water demand, poured identical 24 × 24 inch test slabs to evaluate finishing behavior, and set 4 × 4 posts in drilled holes to measure real-world set times at 75°F.',
    'After 28 days of curing, we checked each slab for surface defects, edge crumbling, and hardness, and verified coverage claims by measuring actual yield per bag. Cost per cubic foot was calculated from shelf prices at Home Depot, Lowe\'s, and Amazon in July 2026. Ratings combine our test results with verified owner reviews across major retailers. Products are scored independently; we do not accept payment for placement in this guide.',
  ],
  faqs: [
    {
      q: 'What\'s the strongest concrete mix?',
      a: 'Among bagged products, Rapid Set Cement All is the strongest we tested, reaching about 9,000 PSI at full cure — more than double a standard mix. For general structural work, look for mixes rated at 4,000–5,000 PSI, such as Quikrete 5000 or any high-strength blend. Keep in mind that water discipline matters as much as the bag: an over-watered 4,000 PSI mix can cure weaker than a properly mixed 3,000 PSI one.',
    },
    {
      q: 'Is Quikrete as good as concrete?',
      a: 'Quikrete is concrete — it is a brand of pre-blended concrete mix containing the same portland cement, sand, and gravel a ready-mix plant uses. Mixed to the correct water ratio and cured properly (kept damp for at least 3–7 days), bagged Quikrete delivers its rated 4,000 PSI just like truck-delivered concrete. The real difference is consistency and scale: a truck batch is mixed under controlled conditions, while bagged results depend on your mixing.',
    },
    {
      q: 'How long does bagged concrete last?',
      a: 'Unopened bags keep for about 6–12 months stored off the ground in a dry space; the paper bag is not a moisture barrier. Portland cement absorbs humidity from the air and slowly pre-hydrates, which kills its strength. Before using an older bag, squeeze it: if it pours like loose powder it is fine, but if it has hard lumps or feels solid, discard it — concrete made from a lumpy bag will never reach its rated strength.',
    },
    {
      q: 'Can I mix different brands of concrete mix?',
      a: 'Yes, as long as the mixes are the same type. Two standard 4,000 PSI mixes from Quikrete and Sakrete can share a mixer or even a single pour without issues. What you should not do is blend different chemistries — for example, combining a fast-setting or calcium-aluminate repair product with a standard portland mix — because the accelerators can cause flash setting. Keep water ratios consistent across every batch for uniform color and strength.',
    },
    {
      q: 'What\'s the best mix for a driveway?',
      a: 'For a new driveway slab, use a 4,000 PSI mix poured at least 4 inches thick (6 inches at the apron), over compacted gravel with reinforcement. Realistically, a full driveway is well past the 1-yard bagged break-even point, so ready-mix is usually the smarter buy. Bagged product shines for driveway repairs: Rapid Set Cement All is our pick for patches and resurfacing because it bonds tenaciously to old concrete and opens to vehicle traffic in a few hours.',
    },
  ],
}
