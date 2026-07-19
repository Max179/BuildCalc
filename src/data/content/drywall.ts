import type { CalculatorContent } from '../types'

export const drywall: CalculatorContent = {
  slug: 'drywall',
  name: 'Drywall Calculator',
  material: 'drywall',
  tagline: 'Sheet counts for walls from room dimensions, doors and windows.',
  icon: 'square',
  category: 'Interior',
  intro:
    'Enter your room dimensions, wall height and the number of doors and windows to find out how many 4×8, 4×10 or 4×12 drywall sheets you need for the walls.',
  howToTitle: 'How to calculate how much drywall you need',
  howTo: [
    'Measure the length and width of the room in feet, add them together and multiply by two to get the perimeter. Multiply the perimeter by the wall height to get the gross wall area in square feet. Standard ceilings are 8 feet; many newer homes have 9 or 10 foot walls.',
    'Subtract the openings you will not cover: about 21 square feet for each standard door (3 × 7 ft) and about 15 square feet for each average window (3 × 5 ft). That gives you the net wall area that actually needs drywall.',
    'Divide the net area by the coverage of one sheet: a 4×8 sheet covers 32 sq ft, a 4×10 covers 40 sq ft and a 4×12 covers 48 sq ft. Round up to the next whole sheet — offcuts around doors and windows are rarely reusable, so most pros order about 10% extra.',
  ],
  formulaNote:
    'Wall area (sq ft) = 2 × (Length + Width) × Height − (Doors × 21 + Windows × 15). Sheets = Wall area ÷ Sheet coverage (32 / 40 / 48 sq ft), rounded up.',
  referenceTable: {
    title: 'Drywall sheet sizes and coverage',
    note: 'All sheets are 4 ft wide. 1/2 in thick is standard for walls; 5/8 in (Type X) for ceilings and fire-rated walls.',
    headers: ['Sheet size', 'Coverage per sheet', 'Sheets per 1,000 sq ft', 'Best for'],
    rows: [
      ['4 × 8 ft', '32 sq ft', '32', 'DIY — lightest and easiest to handle'],
      ['4 × 10 ft', '40 sq ft', '25', '9 ft walls, fewer butt joints'],
      ['4 × 12 ft', '48 sq ft', '21', 'Long walls, fewest seams'],
      ['4 × 14 ft', '56 sq ft', '18', 'Pro crews on large rooms'],
      ['4 × 16 ft', '64 sq ft', '16', 'Pro crews on large rooms'],
    ],
  },
  faqs: [
    {
      q: 'How many sheets of drywall do I need for a 12×12 room?',
      a: 'With 8 ft ceilings a 12×12 room has 384 sq ft of wall. Subtract one door (21 sq ft) and one window (15 sq ft) and you need about 348 sq ft — that is 11 sheets of 4×8, 9 sheets of 4×10 or 8 sheets of 4×12.',
    },
    {
      q: 'How much drywall do I need for a 2,000 sq ft house?',
      a: 'A common rule of thumb is 3.5–4 sq ft of drywall per square foot of floor area once you include walls, ceilings and closets. A 2,000 sq ft home typically needs about 7,000–8,000 sq ft, or roughly 220–250 sheets of 4×8.',
    },
    {
      q: 'What thickness of drywall should I use?',
      a: '1/2 in is the standard for interior walls. Use 5/8 in (Type X) on ceilings, garages and anywhere a fire rating is required; 1/4 in panels are for curved walls or laminating over old surfaces.',
    },
    {
      q: 'Should drywall be hung horizontally or vertically?',
      a: 'Horizontally (perpendicular to the studs) is the pro standard on walls: fewer joints, seams at a comfortable working height and better bracing of the framing. Hang vertically only when the sheet length matches the wall height exactly.',
    },
    {
      q: 'How many screws do I need per sheet of drywall?',
      a: 'Plan on about 32 screws per 4×8 sheet on walls (16 in on center) and up to 48 on ceilings (12 in on center). A 1 lb box of 1-1/4 in drywall screws holds roughly 250–300 screws.',
    },
    {
      q: 'How much does a sheet of drywall weigh?',
      a: 'A standard 1/2 in 4×8 sheet weighs about 50–54 lb; lightweight panels run 38–40 lb; a 5/8 in 4×8 sheet is 70 lb or more. A 4×12 sheet of 1/2 in can top 80 lb — plan on two people or a panel lift.',
    },
    {
      q: 'Does this calculator include the ceiling?',
      a: 'No — it covers walls only. For a ceiling, multiply room length × width and divide by the sheet coverage: a 12×12 ceiling is 144 sq ft, or 5 sheets of 4×8. Use 5/8 in or sag-resistant panels on ceilings.',
    },
    {
      q: 'How much extra drywall should I buy for waste?',
      a: 'Add about 10%. Offcuts around doors, windows and outlets are rarely reusable, and one damaged sheet mid-project costs far more time than a spare sheet costs money.',
    },
    {
      q: 'What is the difference between drywall, Sheetrock and gypsum board?',
      a: 'They are the same product — drywall and gypsum board are generic names, while Sheetrock is a USG brand. Green board and purple board are moisture- and mold-resistant variants for bathrooms and basements.',
    },
  ],
  related: ['paint', 'flooring', 'tile'],
  buyLinks: [
    {
      label: 'Drywall Screws (1-1/4 in)',
      note: '≈ 1 lb per 500 sq ft',
      url: 'https://www.amazon.com/s?k=drywall+screws+1+1+4+inch',
    },
    {
      label: 'All-Purpose Joint Compound',
      note: '≈ 0.05 gal per sheet',
      url: 'https://www.amazon.com/s?k=all+purpose+joint+compound',
    },
    {
      label: 'Drywall Knife Set',
      note: '6", 10" & 12" taping knives',
      url: 'https://www.amazon.com/s?k=drywall+taping+knife+set',
    },
  ],
}
