import type { CalculatorContent } from '../types'

export const tile: CalculatorContent = {
  slug: 'tile',
  name: 'Tile Calculator',
  material: 'tile',
  tagline: 'Tile counts for floors and walls, with waste for cuts built in.',
  icon: 'grid',
  category: 'Interior',
  intro:
    'Enter the length and width of the area you want to tile, pick a tile size and a waste allowance, and get the number of tiles you need to buy.',
  howToTitle: 'How to calculate how much tile you need',
  howTo: [
    'Measure the length and width of the floor or wall in feet and multiply them to get the area in square feet. For an L-shaped or odd-shaped room, break the space into rectangles, calculate each one and add them together.',
    'Convert the tile size to square feet: multiply the tile length by the tile width in inches, then divide by 144 (the square inches in a square foot). A 12×12 in tile is exactly 1 sq ft, a 12×24 in tile is 2 sq ft, an 18×18 in tile is 2.25 sq ft and a 6×6 in tile is 0.25 sq ft.',
    'Add a waste allowance for cuts, breakage and future repairs: 10% for a straight layout, 15–20% for a diagonal (45°) layout, herringbone patterns or rooms with many corners. Divide the adjusted area by the tile area and round up — at the store, also round up to full boxes.',
  ],
  formulaNote:
    'Area (sq ft) = Length (ft) × Width (ft). Tiles = Area × (1 + waste %) ÷ ((tile length in × tile width in) ÷ 144), rounded up.',
  referenceTable: {
    title: 'Common tile sizes and coverage',
    note: 'Tile is sold by the box — divide your tile count by the pieces per box on the label and round up.',
    headers: ['Tile size', 'Area per tile', 'Tiles per 100 sq ft (no waste)'],
    rows: [
      ['6 × 6 in', '0.25 sq ft', '400'],
      ['12 × 12 in', '1 sq ft', '100'],
      ['12 × 24 in', '2 sq ft', '50'],
      ['18 × 18 in', '2.25 sq ft', '45'],
      ['24 × 24 in', '4 sq ft', '25'],
    ],
  },
  faqs: [
    {
      q: 'How many 12×12 tiles do I need for a 10×10 room?',
      a: 'A 10×10 room is 100 sq ft and each 12×12 tile covers exactly 1 sq ft. With a 10% waste allowance you need 110 tiles.',
    },
    {
      q: 'How much extra tile should I buy?',
      a: 'Add 10% for a straight layout in a square room, and 15–20% for diagonal or herringbone layouts, rooms with lots of corners, or brittle natural stone. Keep 2–3 spare tiles after the job for future repairs — dye lots change over time.',
    },
    {
      q: 'How do I calculate tile for a diagonal (45°) layout?',
      a: 'The area does not change — only the waste does. Measure the room as usual and set the waste allowance to 15–20%, because every edge tile is cut on an angle and the offcuts cannot be reused.',
    },
    {
      q: 'How many tiles come in a box?',
      a: 'It varies by size and brand: 12×12 tiles often come 10–15 per box (10–15 sq ft), 12×24 tiles 6–8 per box (12–16 sq ft), and small mosaics are sold by the mesh sheet. Check the coverage printed on the box and round up to full boxes.',
    },
    {
      q: 'Do grout lines change how many tiles I need?',
      a: 'Not meaningfully. Nominal tile sizes already assume a grout joint, and actual tiles are slightly smaller (a "12 in" tile is often 11-7/8 in). With typical 1/16–1/8 in grout lines it evens out, so estimate with the nominal size.',
    },
    {
      q: 'Can I use this calculator for walls and backsplashes?',
      a: 'Yes — multiply the wall height by its width to get the area. A typical backsplash is 18 in high, so a 10 ft run is 15 sq ft. With 3×6 in subway tile (0.125 sq ft each) that is about 120 tiles plus waste.',
    },
    {
      q: 'How much thin-set mortar do I need?',
      a: 'A 50 lb bag of thin-set covers roughly 80–100 sq ft with a 1/4 in square-notch trowel (small and medium tiles) or 40–60 sq ft with a 1/2 in trowel (large-format tile). Check the coverage chart on the bag.',
    },
    {
      q: 'What trowel size should I use?',
      a: 'A 1/4 × 1/4 in square-notch trowel works for tiles up to 12 in; use 1/4 × 3/8 in for 12–16 in tiles and 1/2 in for large-format tiles 18 in and up. Bigger tiles need a deeper mortar bed for full support.',
    },
    {
      q: 'How do I measure an L-shaped or odd-shaped room?',
      a: 'Split it into rectangles, calculate each area separately and add them together. You can run this calculator once per rectangle or total the square footage first — and use the higher waste setting, since jogs mean more cuts.',
    },
    {
      q: 'How many square feet does a box of tile cover?',
      a: 'Most boxes are labeled with coverage — commonly 10–15 sq ft for 12×12 and 12–16 sq ft for 12×24. Divide your adjusted area (including waste) by the box coverage and round up.',
    },
  ],
  related: ['flooring', 'concrete', 'drywall'],
  buyLinks: [
    {
      label: 'Thinset Mortar (50 lb)',
      note: 'Covers ≈ 60–100 sq ft per bag',
      url: 'https://www.amazon.com/s?k=thinset+mortar+50+lb',
    },
    {
      label: 'Tile Spacers',
      note: '1/8" & 1/4" for even grout lines',
      url: 'https://www.amazon.com/s?k=tile+spacers',
    },
    {
      label: 'Grout Float',
      note: '≈ $7–12 · essential tool',
      url: 'https://www.amazon.com/s?k=grout+float',
    },
  ],
}
