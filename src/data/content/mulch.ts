import type { CalculatorContent } from '../types'

// 覆盖物（mulch）计算器
export const mulch: CalculatorContent = {
  slug: 'mulch',
  name: 'Mulch Calculator',
  material: 'mulch',
  tagline: 'Cubic yards and bag counts for mulch beds at any depth.',
  icon: 'sprout',
  category: 'Landscaping',
  intro:
    'Enter your bed dimensions and desired depth to get the mulch volume in cubic feet and cubic yards, plus how many standard 2 cu ft bags to buy.',
  howToTitle: 'How to calculate how much mulch you need',
  howTo: [
    'Measure the length and width of the bed in feet and multiply them to get the square footage. Multiply by the depth in inches divided by 12 to convert to a volume in cubic feet, then divide by 27 to get cubic yards — the unit bulk mulch is sold by.',
    'Pick the right depth: 2–3 inches is enough to refresh an existing bed, while new beds need 3–4 inches to suppress weeds and hold moisture. Avoid going deeper than 4 inches, which can suffocate roots, and keep mulch a few inches away from trunks and stems.',
    'Decide between bags and bulk. Bagged mulch is usually sold in 2 cu ft bags, and one cubic yard equals 13.5 of them. Bags are convenient for small jobs; once you pass roughly 2 cubic yards, a bulk delivery is usually much cheaper per yard.',
  ],
  formulaNote:
    'Cubic yards = Length (ft) × Width (ft) × Depth (in) ÷ 12 ÷ 27. Bags = Cubic feet × (1 + waste %) ÷ 2, rounded up.',
  referenceTable: {
    title: 'Mulch coverage quick reference',
    note: 'One cubic yard of mulch weighs roughly 400–800 lb depending on material and moisture.',
    headers: ['Depth', '1 cu yd covers', '2 cu ft bags per 100 sq ft'],
    rows: [
      ['1 inch', '324 sq ft', '4.2 bags'],
      ['2 inches', '162 sq ft', '8.3 bags'],
      ['3 inches', '108 sq ft', '12.5 bags'],
      ['4 inches', '81 sq ft', '16.7 bags'],
      ['6 inches', '54 sq ft', '25 bags'],
    ],
  },
  faqs: [
    {
      q: 'How many bags of mulch are in a cubic yard?',
      a: 'One cubic yard is 27 cubic feet, so it equals 13.5 standard 2 cu ft bags — in practice, 14 bags covers just over a yard. Some brands sell 1.5 or 3 cu ft bags, so check the label.',
    },
    {
      q: 'How much area does one 2 cu ft bag of mulch cover?',
      a: 'At 3 inches deep, one 2 cu ft bag covers about 8 sq ft. At 2 inches it covers 12 sq ft, and at 4 inches only 6 sq ft.',
    },
    {
      q: 'How deep should mulch be?',
      a: 'Use 2–3 inches to top up an existing bed and 3–4 inches for a brand-new bed. More than 4 inches can suffocate roots and repel water. Keep mulch pulled back 2–3 inches from tree trunks — "mulch volcanoes" trap moisture against bark and cause rot.',
    },
    {
      q: 'How many cubic yards of mulch do I need for a 10×10 bed?',
      a: 'A 10×10 ft bed at 3 inches deep is 25 cubic feet, which is about 0.93 cubic yards. In bags, that is 12.5 — so buy 13 bags of 2 cu ft mulch, or 14 with a 10% allowance for settling.',
    },
    {
      q: 'Is bulk mulch cheaper than bags?',
      a: 'Usually, once you need more than about 2 cubic yards. Bagged mulch runs $3–$4 per 2 cu ft bag (equivalent to $40–$54 per cubic yard), while bulk hardwood mulch is typically $30–$45 per cubic yard plus a delivery fee. Bags still make sense for small beds or spot touch-ups.',
    },
    {
      q: 'How much does mulch weigh?',
      a: 'Hardwood bark mulch weighs roughly 400–800 lb per cubic yard depending on how wet it is, and a 2 cu ft bag weighs about 20–40 lb. A half-ton pickup can safely carry 1–2 cubic yards.',
    },
    {
      q: 'How often should I replace mulch?',
      a: 'Top up beds with about 1 inch of fresh mulch each spring to replace what has decomposed. Plan a fuller refresh every 2–3 years. Organic mulch feeding the soil as it breaks down is a feature, not a flaw.',
    },
    {
      q: 'Can I put new mulch over old mulch?',
      a: 'Yes, as long as the combined depth stays under about 4 inches. If the old layer is already 2–3 inches thick, rake some of it out first or just add a thin 1-inch top-up for color.',
    },
    {
      q: 'Does dyed mulch last longer than natural mulch?',
      a: 'The color typically holds for one to two seasons before fading, but the mulch itself decomposes at about the same rate as undyed hardwood. Quality dyed mulches use colorants that are safe for plants and pets.',
    },
    {
      q: 'Is rubber mulch better than wood mulch?',
      a: 'Rubber mulch does not decompose, so it can last 5+ years without replacement, but it costs two to three times more up front and adds nothing to the soil. Wood mulch is cheaper and improves soil as it breaks down — better for beds; rubber is popular for playgrounds.',
    },
  ],
  related: ['gravel', 'concrete', 'tile'],
  buyLinks: [
    {
      label: 'Bagged Hardwood Mulch',
      note: '2 cu ft bags · ≈ $3–5 each',
      url: 'https://www.amazon.com/s?k=bagged+hardwood+mulch',
    },
    {
      label: 'Landscape Fabric',
      note: 'Weed barrier under mulch',
      url: 'https://www.amazon.com/s?k=landscape+fabric+weed+barrier',
    },
    {
      label: 'Garden Edging',
      note: 'Keeps mulch off the lawn',
      url: 'https://www.amazon.com/s?k=garden+edging',
    },
  ],
}
