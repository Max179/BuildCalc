import type { CalculatorContent } from '../types'

// 油漆计算器
export const paint: CalculatorContent = {
  slug: 'paint',
  name: 'Paint Calculator',
  material: 'paint',
  tagline: 'Gallons of paint for any room, with doors and windows subtracted.',
  icon: 'paint-roller',
  category: 'Interior',
  intro:
    'Enter your room dimensions, ceiling height and the number of doors and windows to see exactly how many gallons of paint you need for one, two or three coats.',
  howToTitle: 'How to calculate how much paint you need',
  howTo: [
    'Measure the length and width of the room in feet, then measure the wall height from floor to ceiling. Add the length and width together and multiply by 2 to get the perimeter, then multiply the perimeter by the wall height to get the gross wall area.',
    'Subtract the openings you will not paint. A typical interior door is about 21 sq ft (3 ft × 7 ft) and a typical window is about 15 sq ft (3 ft × 5 ft). This gives you the net paintable wall area.',
    'Multiply the net area by the number of coats — two coats is the standard for a lasting, even finish — then divide by the coverage rate. Most interior paints cover about 350 sq ft per gallon, so divide by 350 and round up to the next whole gallon.',
  ],
  formulaNote:
    'Gallons = [(2 × (Length + Width) × Height) − (Doors × 21 + Windows × 15)] × Coats ÷ 350, rounded up.',
  referenceTable: {
    title: 'Typical paint coverage per gallon',
    note: 'Coverage drops on rough, textured or unpainted surfaces — always check the can label.',
    headers: ['Paint type', 'Coverage per gallon', 'Notes'],
    rows: [
      ['Interior latex wall paint', '350–400 sq ft', 'Smooth, primed drywall'],
      ['Paint-and-primer in one', '300–350 sq ft', 'Slightly thicker body'],
      ['Ceiling paint (flat)', '350–400 sq ft', 'Flat finish hides flaws'],
      ['Drywall primer', '200–300 sq ft', 'Bare drywall soaks it up'],
      ['Exterior acrylic latex', '250–350 sq ft', 'Rough siding reduces coverage'],
      ['Trim & door enamel', '350–400 sq ft', 'Often sold by the quart'],
    ],
  },
  faqs: [
    {
      q: 'How much paint do I need for a 12×12 room?',
      a: 'A 12×12 ft room with 8 ft ceilings has 384 sq ft of wall. Subtract one door (21 sq ft) and two windows (30 sq ft) to get 333 sq ft. Two coats means 666 sq ft of coverage, which at 350 sq ft per gallon works out to 2 gallons.',
    },
    {
      q: 'How many square feet does a gallon of paint cover?',
      a: 'Most interior wall paints cover 350–400 sq ft per gallon per coat on smooth, primed drywall. Plan on 350 sq ft per gallon to be safe — textured walls, bare patches and dramatic color changes all reduce real-world coverage.',
    },
    {
      q: 'Do I need one coat or two?',
      a: 'Two coats is the standard recommendation for even color and durability. One coat can work when you are repainting the same or a very similar color over paint in good condition. Bare drywall needs a primer plus two topcoats — that is effectively three passes.',
    },
    {
      q: 'Does this calculator include the ceiling?',
      a: 'No — it calculates walls only. For the ceiling, multiply the room length by the width: a 12×12 ft ceiling is 144 sq ft, which needs roughly half a gallon per coat. Buy a separate flat ceiling paint.',
    },
    {
      q: 'How much area does a quart of paint cover?',
      a: 'A quart is one quarter of a gallon, so it covers roughly 85–100 sq ft per coat. Quarts are handy for trim, doors, accent walls and touch-ups — one gallon equals exactly 4 quarts.',
    },
    {
      q: 'Should I really subtract doors and windows?',
      a: 'Yes, if you want an accurate number. A standard interior door is about 21 sq ft and a standard window about 15 sq ft. In a room with two doors and three windows that is 87 sq ft — about a quarter of a gallon per coat you would otherwise overbuy.',
    },
    {
      q: 'Do I need primer before painting?',
      a: 'Use primer on new drywall, large patched areas, stains, or when making a drastic color change such as dark red to white. Bare drywall primer covers only 200–300 sq ft per gallon because the surface absorbs so much. If the existing paint is sound and the color is similar, a self-priming paint is usually enough.',
    },
    {
      q: 'How much does a gallon of paint cost?',
      a: 'Expect to pay $30–$70 per gallon for quality interior paint, with premium brands above that. Painting a 12×12 ft room with two coats typically costs $60–$140 in paint alone, plus tape, rollers and trays.',
    },
    {
      q: 'What if my walls are textured?',
      a: 'Orange-peel or knockdown texture can cut coverage by 10–25% because of the extra surface area. Plan on 250–300 sq ft per gallon instead of 350–400, or add one extra gallon to the calculator result for a large room.',
    },
    {
      q: 'Can I return paint I do not use?',
      a: 'Most US home improvement stores accept returns of unopened, untinted paint within about 30 days. Custom-tinted gallons are usually final sale, so measure carefully — rounding up by one gallon is cheap insurance against a mid-project color mismatch.',
    },
  ],
  related: ['drywall', 'flooring', 'tile'],
  guideSlug: 'how-much-paint-do-i-need',
  buyLinks: [
    {
      label: 'Interior Wall Paint (Gallon)',
      note: 'Covers ≈ 350–400 sq ft per coat',
      url: 'https://www.amazon.com/s?k=interior+wall+paint+gallon',
    },
    {
      label: 'Paint Roller Kit',
      note: 'Roller, tray & covers in one',
      url: 'https://www.amazon.com/s?k=paint+roller+kit',
    },
    {
      label: "Painter's Tape",
      note: '≈ $6–9 per roll · clean edges',
      url: 'https://www.amazon.com/s?k=painters+tape',
    },
  ],
}
