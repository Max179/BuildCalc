import type { CalculatorContent } from '../types'

// 碎石计算器
export const gravel: CalculatorContent = {
  slug: 'gravel',
  name: 'Gravel Calculator',
  material: 'gravel',
  tagline: 'Tons and cubic yards of gravel for driveways, paths and drainage.',
  icon: 'mountain',
  category: 'Landscaping',
  intro:
    'Enter the area and depth to get gravel volume in cubic feet and cubic yards, the weight in tons for bulk ordering, and how many 50 lb bags you would need instead.',
  howToTitle: 'How to calculate how much gravel you need',
  howTo: [
    'Measure the length and width of the area in feet and multiply them for the square footage. Multiply by the depth in inches divided by 12 to get cubic feet, then divide by 27 to convert to cubic yards.',
    'Choose a depth for the job: 2–3 inches for walkways and decorative ground cover, and about 4 inches — compacted in two or three layers — for driveways. For a French drain, fill the trench with ¾-inch washed stone around the pipe.',
    'Convert volume to weight for ordering. Crushed stone weighs about 1.4 tons per cubic yard (roughly 2,800 lb), and bulk gravel is sold by the ton or the yard. For small jobs, 50 lb bags hold about 0.5 cu ft each — one cubic yard is 54 bags. Add 5–10% for compaction and settling.',
  ],
  formulaNote:
    'Cubic yards = Length (ft) × Width (ft) × Depth (in) ÷ 12 ÷ 27. Tons = Cubic yards × 1.4. Bags = Cubic feet × (1 + waste %) ÷ 0.5, rounded up.',
  referenceTable: {
    title: 'Gravel quick reference',
    note: 'Weights vary with stone type and moisture — wet gravel can run 10–15% heavier.',
    headers: ['Item', 'Value', 'Notes'],
    rows: [
      ['Weight of 1 cu yd', '≈ 2,800 lb (1.4 tons)', 'Typical crushed stone'],
      ['Coverage of 1 cu yd', '108 sq ft at 3"', '162 sq ft at 2" · 81 sq ft at 4"'],
      ['50 lb bag volume', '0.5 cu ft', '54 bags ≈ 1 cu yd'],
      ['Driveway depth', '4" total', 'Compact in 2–3 layers'],
      ['Walkway depth', '2–3"', 'Over landscape fabric'],
      ['French drain stone', '¾" washed', 'No fines, so water flows'],
    ],
  },
  faqs: [
    {
      q: 'How many tons of gravel do I need for a 12×20 driveway?',
      a: 'At 4 inches deep, a 12×20 ft driveway needs 80 cubic feet, which is about 2.96 cubic yards. At 1.4 tons per cubic yard, order roughly 4.2 tons — round up to 4.5 to allow for compaction.',
    },
    {
      q: 'How much does a cubic yard of gravel weigh?',
      a: 'About 2,800 lb, or 1.4 tons, for typical crushed stone. Pea gravel is similar. Wet stone can weigh 10–15% more, which is why some suppliers prefer selling by the cubic yard rather than by weight.',
    },
    {
      q: 'How many 50 lb bags of gravel equal a cubic yard?',
      a: 'A 50 lb bag holds about 0.5 cubic feet, so one cubic yard (27 cu ft) is 54 bags. Bagged gravel makes sense for small jobs; at 54 bags per yard, bulk delivery wins quickly on bigger projects.',
    },
    {
      q: 'How much area does a ton of gravel cover?',
      a: 'One ton is about 0.71 cubic yards, or roughly 19 cubic feet. That covers about 77 sq ft at 3 inches deep, or about 58 sq ft at 4 inches deep.',
    },
    {
      q: 'How deep should gravel be for a driveway?',
      a: 'Plan on 4 inches of compacted gravel, laid in two or three layers and compacted between passes. Driveways that see heavy trucks or RVs often go to 6 inches with a larger crushed-stone base underneath.',
    },
    {
      q: 'What is the difference between crushed stone and pea gravel?',
      a: 'Crushed stone is angular, so the pieces lock together and compact into a firm surface — right for driveways and shed bases. Pea gravel is rounded, shifts underfoot and will not compact, which makes it better for paths, play areas and decorative beds.',
    },
    {
      q: 'What size gravel should I use for a French drain?',
      a: 'Use ¾-inch washed stone — "washed" means the fine dust has been removed, so water can flow freely through the gaps. Avoid crusher run or road base, which contain fines that clog drainage.',
    },
    {
      q: 'Do I need landscape fabric under gravel?',
      a: 'For paths and decorative beds, yes — fabric keeps weeds down and stops the stone from sinking into the soil over time. For driveways, skip the fabric and focus on a well-compacted subgrade and base layer instead.',
    },
    {
      q: 'How much does gravel cost?',
      a: 'Bulk crushed stone typically runs $30–$60 per ton or $35–$65 per cubic yard, plus a delivery fee. Bagged gravel is $4–$6 per 50 lb bag — four to five times more per yard — so it only pays off for small touch-ups.',
    },
    {
      q: 'Should I order extra gravel?',
      a: 'Yes — order 5–10% more than the calculated volume. Gravel compacts 10–20% when tamped or driven on, and edges always spread a little thinner than planned. A small surplus is far cheaper than a second delivery.',
    },
  ],
  related: ['mulch', 'concrete', 'roofing'],
  buyLinks: [
    {
      label: 'All-Purpose Gravel (Bagged)',
      note: '≈ 0.5 cu ft per 50 lb bag',
      url: 'https://www.amazon.com/s?k=all+purpose+gravel+bags',
    },
    {
      label: 'Paver Base Panels',
      note: 'Lighter alternative to gravel base',
      url: 'https://www.amazon.com/s?k=paver+base+panels',
    },
    {
      label: 'Weed Barrier Fabric',
      note: 'Under driveways & paths',
      url: 'https://www.amazon.com/s?k=weed+barrier+fabric+heavy+duty',
    },
  ],
}
