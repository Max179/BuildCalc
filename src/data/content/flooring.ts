import type { CalculatorContent } from '../types'

// 地板计算器
export const flooring: CalculatorContent = {
  slug: 'flooring',
  name: 'Flooring Calculator',
  material: 'flooring',
  tagline: 'Square footage and box counts for laminate, vinyl plank and hardwood.',
  icon: 'layers',
  category: 'Interior',
  intro:
    'Measure your room to get the flooring square footage you need — including a waste allowance for cuts — plus how many boxes to buy based on the coverage printed on the carton.',
  howToTitle: 'How to calculate how much flooring you need',
  howTo: [
    'Measure the length and width of the room in feet and inches, then multiply them to get the square footage. For an L-shaped room, split it into two rectangles, calculate each area separately and add them together.',
    'Add a waste allowance for cuts, mistakes and future repairs: 5% for a simple square room, 10% for a typical room, and 15% for diagonal or herringbone layouts and rooms with lots of angles, closets or doorways.',
    'Divide the total square footage (including waste) by the coverage printed on the box — laminate and luxury vinyl plank commonly cover 18–24 sq ft per box — and round up, because stores only sell full boxes. Keep one spare box for future repairs.',
  ],
  formulaNote:
    'Boxes = Length (ft) × Width (ft) × (1 + waste %) ÷ box coverage (sq ft), rounded up.',
  referenceTable: {
    title: 'Typical coverage per box by flooring type',
    note: 'Always confirm the exact coverage on the carton — it varies by brand and product line.',
    headers: ['Flooring type', 'Typical sq ft per box', 'Typical plank / tile size'],
    rows: [
      ['Laminate', '18–22 sq ft', '7.5" × 48" planks'],
      ['Luxury vinyl plank (LVP)', '20–24 sq ft', '6"–9" × 48" planks'],
      ['Engineered hardwood', '20–25 sq ft', '5"–7" wide planks'],
      ['Solid hardwood strip', '18–20 sq ft', '2.25" wide strips'],
      ['Ceramic / porcelain tile', '10–15 sq ft', '12"×12" to 12"×24"'],
      ['Peel-and-stick vinyl tile', '20–45 sq ft', '12"×12" tiles, 20–45 per box'],
    ],
  },
  faqs: [
    {
      q: 'How much extra flooring should I buy for waste?',
      a: 'The standard rule is 10% extra. Use 5% for a plain rectangular room with a straight lay, and 15% for diagonal or herringbone patterns, or rooms with many corners, closets and doorways where off-cuts cannot be reused.',
    },
    {
      q: 'How many boxes of laminate do I need for a 12×12 room?',
      a: 'A 12×12 ft room is 144 sq ft. Add 10% waste to get 158.4 sq ft, then divide by the box coverage: at 20 sq ft per box that is 7.92, so buy 8 boxes.',
    },
    {
      q: 'How do I measure an L-shaped room?',
      a: 'Split the room into two rectangles that do not overlap. Multiply length × width for each, add the two areas together, then apply your waste percentage once to the combined total.',
    },
    {
      q: 'Should I subtract closets and cabinets?',
      a: 'Include closets — they get flooring too. In kitchens, base cabinets sit on the subfloor and do not get flooring, so you can subtract their footprint: a standard base cabinet run is 24 inches deep times its length.',
    },
    {
      q: 'Is "box coverage" the same as square feet per box?',
      a: 'Yes. Every carton is printed with something like "covers 20.04 sq ft" — that is the number to enter here. It already accounts for the plank size and count inside that specific box.',
    },
    {
      q: 'Should I buy an extra box for future repairs?',
      a: 'Yes. Dye lots vary between production runs and product lines get discontinued, so an exact match years later is unlikely. One sealed spare box stored flat in a dry place covers most future plank replacements.',
    },
    {
      q: 'How do I convert square feet to square yards?',
      a: 'Divide by 9 — one square yard is exactly 9 square feet. This matters because carpet is usually priced per square yard: a 150 sq ft room is about 16.7 square yards.',
    },
    {
      q: 'Do I need underlayment, and how much?',
      a: 'Most laminate and many vinyl plank floors require underlayment (some LVP has it pre-attached — check the box). Buy underlayment equal to the room area plus about 5%; it comes off a roll, so it needs less cutting waste than planks.',
    },
    {
      q: 'What is the difference between laminate and vinyl plank?',
      a: 'Laminate has a wood-fiber core with a photographic wear layer — stiff, scratch-resistant, but not waterproof. LVP is made of waterproof vinyl, so it handles kitchens, baths and basements. Both click together and both are typically sold in boxes covering around 20 sq ft.',
    },
    {
      q: 'Can I install new flooring over old flooring?',
      a: 'Floating floors (laminate, LVP) can go over one layer of flat, sound existing flooring like vinyl sheet or tile — never over carpet or cushioned vinyl. Check the manufacturer height limits for doors and appliances before you commit.',
    },
  ],
  related: ['tile', 'paint', 'drywall'],
  guideSlug: 'flooring-measurement-guide',
}
