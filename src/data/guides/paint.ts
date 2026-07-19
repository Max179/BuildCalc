import type { Guide } from '../types'

// 油漆相关场景指南
export const paintGuides: Guide[] = [
  {
    slug: 'how-much-paint-do-i-need',
    title: 'How Much Paint Do I Need?',
    description:
      'Use the perimeter × height formula to estimate wall paint, subtract doors and windows, plan for coats, and buy the right number of gallons.',
    date: '2026-01-15',
    calculatorSlug: 'paint',
    sections: [
      {
        paragraphs: [
          'Nothing stalls a painting project like running dry at 4 p.m. on a Sunday with one wall half-rolled. Estimating paint is genuinely easy once you know the formula — the tricky part is knowing which assumptions to make about doors, windows, coats, and coverage. This guide gives you the same method the paint counter at the hardware store uses.',
          'The short version: measure your walls, subtract the openings, divide by the coverage rate, and multiply by the number of coats. The sections below walk through each step with the real-world adjustments that keep you from buying too little — or three gallons too much.',
        ],
      },
      {
        heading: 'The basic formula: perimeter × height',
        paragraphs: [
          'Start with the perimeter of the room. Add the lengths of all the walls together — for a rectangular room, that is 2 × (length + width). A 12 × 15 foot bedroom has a perimeter of 54 feet.',
          'Multiply the perimeter by the wall height. Standard American ceilings are 8 feet, so that bedroom has 54 × 8 = 432 square feet of wall area. If you are painting the ceiling too, calculate it separately as length × width (12 × 15 = 180 square feet in this example) — ceiling paint and wall paint are usually different products, and ceilings are typically one flat white coat.',
        ],
      },
      {
        heading: 'Subtract doors and windows',
        paragraphs: [
          'You do not paint the openings, so do not buy paint for them. The standard deductions the pros use:',
        ],
        list: [
          'Doors: subtract 21 square feet per standard door (3 ft × 7 ft).',
          'Windows: subtract 15 square feet per average window.',
          'Large openings like picture windows, sliding patio doors, or pass-throughs: measure them and subtract the actual area.',
        ],
      },
      {
        paragraphs: [
          'For the 12 × 15 bedroom with one door and two windows, subtract 21 + 30 = 51 square feet, leaving about 381 square feet of paintable wall. One honest warning: if the room is small or mostly window, do not bother subtracting — the extra margin works in your favor anyway.',
        ],
      },
      {
        heading: 'How many coats do you really need?',
        paragraphs: [
          'One coat is only realistic when you are repainting the same color (or very close) over walls in good shape. Plan on two coats for almost everything else — it is the default assumption for any color change.',
          'Budget for three coats (or a tinted primer plus two) in the classic trouble scenarios: going from a dark color to a light one, covering red or deep navy walls, painting over fresh unpainted drywall, or using a budget paint with thin coverage. Skimping on coats to save a gallon is a false economy — you will see the old color ghosting through, and the fix costs more than the gallon you saved.',
        ],
      },
      {
        heading: 'Coverage rates: 350–400 square feet per gallon',
        paragraphs: [
          'A gallon of quality interior paint covers roughly 350 to 400 square feet per coat on smooth, previously painted drywall. Check the can — manufacturers print their rated coverage, and premium paints often hit 400 while economy lines land closer to 300.',
          'Reduce your expectation for rough surfaces: textured walls, bare plaster, brick, and unprimed drywall can drop real-world coverage to 250–300 square feet per gallon. Divide your total paintable area by the coverage rate to get gallons per coat, then multiply by the number of coats. Our bedroom example: 381 sq ft ÷ 375 = about 1.02 gallons per coat, so 2 coats calls for just over 2 gallons — buy 2 gallons and a quart, or 3 gallons if you want touch-up paint left over.',
        ],
      },
      {
        heading: 'When you need primer',
        paragraphs: [
          'Primer is a separate line item, not a substitute for a coat of paint. You need it when painting bare new drywall, bare wood, patched areas with joint compound, stained or smoke-damaged walls, glossy surfaces, or when making a dramatic dark-to-light color change. Primers cover about 300–400 square feet per gallon, so calculate it the same way as paint, one coat unless the label says otherwise.',
          'Paint-and-primer-in-one products are fine for repaints in decent shape, but they do not replace a dedicated primer on bare drywall or problem stains — the pros at the paint desk will tell you the same thing.',
        ],
      },
      {
        heading: 'Why it pays to buy a little extra',
        paragraphs: [
          'Always round up, and consider buying 10–15% more than the math says. The main reason is batch variation: paint is tinted at the store, and two cans mixed at different times can differ just enough to be visible on the same wall. Buying everything you need in one trip, from the same batch, avoids that problem entirely.',
          'Leftover paint is not wasted money. Seal the can tightly, label it with the room and date, and stash it — future scuffs, furniture dings, and nail-hole patches will blend invisibly only if the touch-up paint came from the same batch. Once you have your square footage and coat count, run the numbers through the paint calculator to confirm your gallon count before you head to the store.',
        ],
      },
    ],
  },
  {
    slug: 'how-much-paint-for-12x12-room',
    title: 'How Much Paint for a 12x12 Room?',
    description:
      'A 12x12 room with 8-foot ceilings has 384 sq ft of wall. After doors and windows, two coats take about 2 gallons — here is the full math.',
    date: '2026-07-19',
    calculatorSlug: 'paint',
    sections: [
      {
        paragraphs: [
          'The 12×12 bedroom is the most common room in American housing — kids rooms, guest rooms, home offices, rentals. The paint math is mercifully simple, and once you have done it for this room you can scale the same four steps to the whole house.',
          'The short answer is 2 gallons for the walls. The longer answer below shows where that number comes from, plus what to buy for the ceiling and trim so you are not making a second trip.',
        ],
      },
      {
        heading: 'Step 1: Wall area = perimeter × height',
        paragraphs: [
          'A 12×12 room has a perimeter of 48 feet (12 + 12 + 12 + 12). With standard 8-foot ceilings, that is 48 × 8 = 384 square feet of wall area.',
          'Nine-foot ceilings change the number fast: 48 × 9 = 432 square feet, a 12.5% jump. Vaulted or sloped ceilings — measure each wall separately, tallest and shortest points, and average them.',
        ],
      },
      {
        heading: 'Step 2: Subtract the openings',
        paragraphs: [
          'You do not paint doors and windows, so do not buy paint for them. The standard deductions pros use are 21 square feet per door and 15 per average window. A typical 12×12 bedroom has one door and two windows: subtract 21 + 30 = 51 square feet, leaving 333 square feet of paintable wall.',
          'If the room has something bigger — a wide cased opening to a bathroom, mirrored closet doors you are leaving alone — measure the actual opening and subtract the real number instead.',
        ],
      },
      {
        heading: 'Step 3: Coats and coverage',
        paragraphs: [
          'Plan on two coats for any color change, and use 375 square feet per gallon as your planning number — quality interior paint covers 350 to 400 on smooth, previously painted drywall. The math: 333 × 2 coats = 666 square feet of coverage needed, divided by 375 is 1.78 gallons.',
          'Verdict: buy 2 gallons. You will use about a gallon and three-quarters, and the leftover becomes your touch-up stash for the next decade of furniture dings. Repainting the same color over walls in good shape? One careful coat might do it, but 2 gallons is still the safer buy — batch-matched touch-up paint is worth more than the $40 you would save.',
        ],
      },
      {
        heading: 'Do not forget the ceiling and trim',
        paragraphs: [
          'The ceiling is a separate product — flat ceiling paint, usually one coat. A 12×12 ceiling is 144 square feet, which takes under half a gallon, so a single gallon leaves you plenty for the hallway next weekend.',
          'Trim is its own line item too. A 12×12 room runs about 60 to 80 linear feet of baseboard plus door and window casing, and one quart of semi-gloss handles two coats on all of it with a little to spare.',
          'One more spot people forget: the closet interior. Painting the inside of a standard reach-in closet adds roughly 40 to 50 square feet — one coat is fine in there — so figure another quart into the wall paint. And if the door itself is getting painted, a standard interior door is about 20 square feet per side, so two coats on both faces eats most of a quart of trim paint on its own.',
        ],
      },
      {
        heading: 'Adjust for the real world',
        list: [
          'Heavy texture (orange peel, knockdown): drop coverage to 250–300 sq ft per gallon and budget 2.5 to 3 gallons.',
          'New unpainted drywall: add a gallon of drywall primer — the first coat of paint soaks in and covers poorly without it.',
          'Dark to light color change: a tinted primer plus two coats beats three coats of paint every time.',
          'One accent wall (8 × 12 = 96 sq ft): plan on about half a gallon for two coats — deep base colors often need a third pass, so buy the gallon.',
        ],
        paragraphs: [
          'If your room is not exactly 12×12 — and most are not — enter your real wall lengths, ceiling height, and openings into the paint calculator and it will hand you the gallon count for your exact room, ceiling and trim included.',
        ],
      },
    ],
  },
  {
    slug: 'exterior-house-paint-estimate',
    title: 'How Much Paint for a House Exterior?',
    description:
      'Estimate exterior house paint by siding type: measure wall area, subtract openings, and plan on 250–400 sq ft per gallon plus trim. Worked example inside.',
    date: '2026-07-19',
    calculatorSlug: 'paint',
    sections: [
      {
        paragraphs: [
          'Exterior paint is the biggest paint job most homeowners ever price out, and quotes swing wildly — one painter says 12 gallons, another says 20, and both might be honest. Exterior coverage depends on your siding material more than any other variable, so the only way to sanity-check an estimate is to run the math yourself.',
          'The process is the same as interior work — area, openings, coverage, coats — but the coverage rates are lower, the surfaces are rougher, and the trim list is longer. Here is the full method on a real example.',
        ],
      },
      {
        heading: 'Step 1: Measure the wall area',
        paragraphs: [
          'Walk the house with a long tape and add up the perimeter. A 30 × 50 one-story ranch has 160 linear feet of wall. Multiply by wall height — figure 9 feet for a single story (8-foot ceiling plus a foot of band joist) — and you get 1,440 square feet.',
          'Gable ends add more: a gable 30 feet wide with a 4-foot rise is 60 square feet (half of base times height), and two of them add 120. Gross wall area for our example: about 1,560 square feet. Two-story house? Measure each story separately — a 2,500-square-foot two-story commonly pencils out to 2,800 to 3,500 square feet of wall after openings.',
        ],
      },
      {
        heading: 'Step 2: Subtract doors and windows',
        paragraphs: [
          'Exterior openings are bigger and more numerous than interior ones. Use the same deductions — 15 square feet per window, 21 per door. Our ranch with 15 windows and 3 doors gives up 225 + 63 = 288 square feet, leaving roughly 1,270 square feet of paintable siding.',
          'Painting the garage door to match the body color? Leave it in the total. Leaving the brick or stone veneer alone? Subtract that whole section of wall instead.',
        ],
      },
      {
        heading: 'Step 3: Coverage depends on your siding',
        list: [
          'Vinyl, aluminum, or previously painted fiber cement: 350–400 sq ft per gallon.',
          'Painted wood siding or T1-11 in decent shape: 300–350 sq ft per gallon.',
          'Stucco and brick: 200–300 sq ft per gallon — rough stucco can go lower.',
          'Rough-sawn cedar, shakes, or weathered bare wood: 150–250 sq ft per gallon, and the first coat drinks it.',
        ],
        paragraphs: [
          'Spraying uses more paint than brushing and rolling — figure 10 to 15% extra — because a slice of every pass sails past the wall. Pros account for it in the bid; DIYers renting a sprayer should too.',
        ],
      },
      {
        heading: 'Step 4: Run the two-coat math',
        paragraphs: [
          'Exterior jobs are almost always two coats — sun and weather punish a thin film. Our ranch needs 1,270 × 2 = 2,540 square feet of coverage. On smooth fiber cement at 375 per gallon that is about 6.8 gallons, so buy 7. On rough cedar at 200 per gallon, the same house drinks nearly 13. That spread is why your neighbor\'s gallon count is useless for your house.',
          'Trim is separate: fascia, soffits, corner boards, and window trim on a one-story ranch typically take 2 to 3 gallons for two coats, plus a gallon of accent color if the front door and shutters get their own.',
        ],
      },
      {
        heading: 'Primer, weather, and other reality checks',
        paragraphs: [
          'Bare wood, spots scraped to bare substrate, and tannin-bleeding cedar all need primer — spot-prime at 300 to 400 square feet per gallon, or prime the whole house if more than a quarter of it is bare. Masonry going from unpainted to painted wants a masonry primer first.',
          'Check the label\'s weather window before you schedule: most exterior paints want 50 to 90 degrees, no rain in the forecast, and time to dry before the overnight dew. A gallon count means nothing if you wash coat one off the siding.',
          'Before you sign a painting contract or load up at the paint desk, run your own square footage and siding type through the paint calculator — walking into the conversation knowing your real gallon count is the best leverage you have.',
        ],
      },
    ],
  },
  {
    slug: 'kitchen-cabinet-paint-guide',
    title: 'How Much Paint for Kitchen Cabinets?',
    description:
      'Kitchen cabinet paint math: a typical 10x10 kitchen has 130–150 sq ft of paintable surface, so one gallon of cabinet enamel covers two coats.',
    date: '2026-07-19',
    calculatorSlug: 'paint',
    sections: [
      {
        paragraphs: [
          'Painting kitchen cabinets is the highest-ROI weekend in home improvement — a $200 paint job that reads like a $20,000 remodel. But the material math is nothing like wall painting: you are coating dozens of small panels on both sides plus the frames, and the product is a specialty enamel, not wall paint.',
          'The good news is the total area is smaller than people fear, and one gallon handles most kitchens. Here is how to count it up before you buy.',
        ],
      },
      {
        heading: 'Step 1: Count the fronts — both sides',
        paragraphs: [
          'Doors and drawer fronts are most of the surface. Measure each one, multiply width by height, and add them up. A typical 10×10 kitchen has around 13 doors averaging 15 × 30 inches (about 3 square feet each) and 5 drawer fronts around 24 × 6 inches (1 square foot each) — roughly 44 square feet of fronts.',
          'Painting both sides, which you should, doubles that to about 88 square feet. If you are leaving the insides alone to save a weekend, say so now — it cuts the total nearly in half.',
          'Take the doors off and number each one with painter\'s tape behind the hinge before you measure — they get painted flat on sawhorses, and the tape note kills the guessing game at reassembly. Count every door, including the little one hiding the trash pull-out.',
        ],
      },
      {
        heading: 'Step 2: Add frames and exposed ends',
        paragraphs: [
          'The face frames, exposed ends of the cabinet boxes, and any tall pantry panels add up faster than people expect. Figure another 40 to 60 square feet for a 10×10 kitchen, depending on how much frame shows and whether the island ends get paneled. Crown molding and light-rail trim ride along in the trim paint, not the gallon count.',
          'All in, a typical full kitchen lands between 130 and 150 square feet of paintable surface. A small galley kitchen might be 80; a big kitchen with an island and a pantry wall can top 200.',
        ],
      },
      {
        heading: 'Step 3: The verdict — usually one gallon',
        paragraphs: [
          'Cabinet enamels cover about 350 to 400 square feet per gallon per coat, and you need two coats for a hard, even finish. Our example: 140 square feet × 2 coats = 280 square feet of coverage, which is about 0.75 gallons. One gallon covers the whole kitchen with enough left for a third pass on the doors that take the most abuse.',
          'Painting only the island or a bathroom vanity? Those run 15 to 25 square feet of panel — a quart per coat does it, so 2 quarts total.',
        ],
      },
      {
        heading: 'Primer is not optional',
        paragraphs: [
          'Cabinets live in grease, steam, and fingerprints, and most factory finishes are glossy — paint will not stick to either without prep. Clean everything with a degreaser or TSP substitute, scuff-sand the sheen off, then prime. A bonding primer covers 300 to 400 square feet per gallon, so 140 square feet takes under half a gallon for one coat — 2 quarts covers it.',
          'Over oak, use a stain-blocking primer or the tannins can ghost through light colors months later. Over laminate or thermofoil, use an adhesion-promoting primer rated for slick surfaces. This is the step that decides whether the job lasts two years or ten.',
        ],
      },
      {
        heading: 'Buy a real cabinet enamel, not wall paint',
        paragraphs: [
          'Cabinet-specific products — waterborne alkyd hybrids and acrylic urethane enamels — level out like oil paint, cure hard enough to shrug off fingernails and pot lids, and come in quarts and gallons. They cost more than wall paint, but at one gallon per kitchen the splurge is the best $80 in the whole project. Semi-gloss and satin are the standard sheens; flat has no business near a stove.',
          'Every kitchen is a different door count, so total up your own fronts and frames and run the square footage through the paint calculator — it will tell you whether you are a two-quart kitchen or a full-gallon one.',
        ],
      },
    ],
  },
]
