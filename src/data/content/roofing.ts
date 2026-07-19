import type { CalculatorContent } from '../types'

export const roofing: CalculatorContent = {
  slug: 'roofing',
  name: 'Roofing Calculator',
  material: 'roofing',
  tagline: 'Squares, shingle bundles and underlayment from footprint and pitch.',
  icon: 'house',
  category: 'Exterior',
  intro:
    'Enter your roof footprint and pitch to estimate roofing squares, shingle bundles and rolls of underlayment for a typical asphalt shingle roof.',
  howToTitle: 'How to estimate shingles for your roof',
  howTo: [
    'Measure the length and width of the building footprint in feet — you are measuring the horizontal area the roof covers, not the sloped surface. Multiply length × width, then multiply by the pitch multiplier for your roof slope to get the true roof area: a 6:12 pitch adds about 12% and a 12:12 pitch about 41% more surface than the footprint.',
    'Roofing is sold by the "square" — one square covers exactly 100 sq ft of roof. Divide the roof area by 100 to get squares. Standard 3-tab and architectural asphalt shingles come 3 bundles to the square.',
    'Add 10% waste for a simple gable roof or 15% for hip roofs and roofs with valleys and dormers, then multiply the squares by 3 to get bundles and round up. For underlayment, divide the roof area by the coverage of one roll — about 400 sq ft for a standard roll of felt — and round up.',
  ],
  formulaNote:
    'Roof area (sq ft) = Footprint length × width × pitch multiplier. Squares = Roof area ÷ 100. Bundles = Squares × 3 × (1 + waste %), rounded up. Underlayment rolls = Roof area ÷ 400, rounded up.',
  referenceTable: {
    title: 'Roof pitch multipliers',
    note: 'Multiply the building footprint area by the factor to get the true sloped roof area.',
    headers: ['Roof pitch', 'Multiplier', 'Notes'],
    rows: [
      ['Flat / low slope', '1.00', 'Up to about 3:12 — membrane or roll roofing may be required'],
      ['4:12', '1.054', 'Minimum pitch for standard shingles with double underlayment'],
      ['6:12', '1.118', 'Very common residential pitch'],
      ['8:12', '1.202', 'Steep — walkable with care'],
      ['10:12', '1.302', 'Steep — roof jacks recommended'],
      ['12:12', '1.414', '45° slope — not walkable, extra labor'],
    ],
  },
  faqs: [
    {
      q: 'How many bundles of shingles do I need for a 1,500 sq ft roof?',
      a: '1,500 sq ft is 15 squares. At 3 bundles per square that is 45 bundles — order about 50 with a 10% waste allowance.',
    },
    {
      q: 'What is a "square" in roofing?',
      a: 'One square equals exactly 100 sq ft of roof surface. It is the standard ordering unit: most asphalt shingles are packaged 3 bundles to the square, so each bundle covers about 33.3 sq ft.',
    },
    {
      q: 'How many square feet does one bundle of shingles cover?',
      a: 'About 33.3 sq ft for standard 3-tab and architectural shingles (3 bundles = 1 square = 100 sq ft). Some heavyweight designer shingles come 4 bundles per square — check the wrapper.',
    },
    {
      q: 'How do I find my roof pitch?',
      a: 'Hold a 12 in level horizontally against the roof surface (or a rafter in the attic) and measure straight down from its end to the roof. That drop in inches is the rise: 6 in of drop over a 12 in run is a 6:12 pitch.',
    },
    {
      q: 'How much does a square of shingles weigh?',
      a: 'Roughly 200–250 lb for architectural asphalt shingles (65–80 lb per bundle). Spread stacks out if you load bundles on the roof, and expect the tear-off from an average home to fill a 10–20 yard dumpster.',
    },
    {
      q: 'Can I install new shingles over the old ones?',
      a: 'Most building codes allow a maximum of two layers, but a tear-off is the better choice if the old shingles are curling, the deck may be damaged, or you want the full manufacturer warranty. Overlays can also void wind warranties.',
    },
    {
      q: 'How much underlayment do I need?',
      a: 'This calculator assumes about 400 sq ft per roll — typical for a roll of #15 felt. #30 felt covers about 200 sq ft per roll, while many synthetics come in 1,000 sq ft rolls. In cold climates add ice-and-water shield at eaves and valleys; one 65 ft roll covers about 200 sq ft.',
    },
    {
      q: 'How many roofing nails do I need per square?',
      a: 'Figure 4 nails per shingle — about 320 nails per square, or 480 in high-wind zones that require 6 per shingle. A 5 lb box of 1-1/4 in roofing nails holds roughly 1,000 nails, enough for about 2–3 squares.',
    },
    {
      q: 'How long will an asphalt shingle roof last?',
      a: '3-tab shingles typically last 15–20 years, architectural (dimensional) shingles 25–30 years and premium designer shingles up to 40. Ventilation, climate and installation quality matter as much as the shingle itself.',
    },
    {
      q: 'Should I order extra shingles for starter strips and ridge caps?',
      a: 'Yes. Starter strips run along all eaves and rakes, and hip/ridge cap shingles cover the peaks — figure one bundle of cap shingles per 20–35 linear ft of ridge. Most pros also add 1–2 bundles of field shingles to cut starters from, or buy factory-made starter.',
    },
  ],
  related: ['paint', 'gravel', 'concrete'],
  buyLinks: [
    {
      label: 'Roofing Nails (1-1/4 in)',
      note: '≈ 320 nails per square',
      url: 'https://www.amazon.com/s?k=roofing+nails+1+1+4+inch',
    },
    {
      label: 'Roofing Underlayment',
      note: 'Felt or synthetic, by the roll',
      url: 'https://www.amazon.com/s?k=roofing+underlayment+roll',
    },
    {
      label: 'Drip Edge Flashing',
      note: '10 ft sections · eaves & rakes',
      url: 'https://www.amazon.com/s?k=drip+edge+flashing',
    },
  ],
}
