import type { Guide } from '../types'

// 屋面相关场景指南
export const roofingGuides: Guide[] = [
  {
    slug: 'shingle-bundles-per-square',
    title: 'How Many Bundles of Shingles Per Square?',
    description:
      'One roofing square equals 100 sq ft and takes 3 bundles of asphalt shingles. See how to convert roof area to bundles, plus starter and ridge cap.',
    date: '2026-07-19',
    calculatorSlug: 'roofing',
    sections: [
      {
        paragraphs: [
          'Roofing has its own unit of measure, and until you speak it, every quote sounds like a foreign language. Contractors do not sell shingles by the piece or even by the square foot — they talk in squares and bundles. Learn the conversion and you can check any roofer\'s estimate in about thirty seconds.',
          'Here it is in one line: a square is 100 square feet of roof surface, and it takes 3 bundles of standard asphalt shingles to cover it. Everything else is refinement.',
        ],
      },
      {
        heading: 'What a "square" actually means',
        paragraphs: [
          'One roofing square equals exactly 100 square feet of roof surface — picture a 10 × 10 foot patch. A roof measuring 2,400 square feet is 24 squares, whether it sits on a simple ranch gable or a cut-up Victorian. When a roofer tells you the house is 22 squares, that single number is what the shingles, underlayment, nails, and labor all scale from.',
          'Notice the wording: roof surface, not house square footage. A sloped roof always has more surface than the floor plan beneath it, which is why pitch has to be part of any honest material estimate.',
        ],
      },
      {
        heading: 'Why 3 bundles — and when it is 4',
        paragraphs: [
          'Shingles ship in bundles because a full square weighs 200 to 240 pounds — more than anyone should shoulder up a ladder. Each bundle covers about 33 square feet at a manageable 60 to 80 pounds. Three bundles per square: that ratio holds for standard three-tab shingles and nearly all architectural (laminated) shingles on the shelf.',
          'The exception is heavyweight designer shingles — the thick, slate-look laminates. Some of those pack 4 bundles per square because each shingle is beefier. The wrapper always states coverage per bundle, so verify before you order the fancy stuff on the 3-per-square assumption.',
        ],
      },
      {
        heading: 'Worked example: turning roof area into bundles',
        paragraphs: [
          'Say your measured roof area is 2,400 sq ft. Divide by 100 to get 24 squares, multiply by 3, and the shingle order is 72 bundles. On a simple gable roof with few penetrations, add 10% waste for cuts and course trimming: 72 × 1.10 ≈ 80 bundles. Hip roofs with valleys and dormers chew through material faster — carry 15%, which puts you at about 83 bundles.',
          'Round to whole bundles, and remember most suppliers take back unopened ones. Being three bundles over costs a return trip; being three short mid-job costs a crew standing around at full day rates while someone drives to the yard.',
        ],
      },
      {
        heading: 'Do not forget starter and ridge cap',
        paragraphs: [
          'Field shingles are not the whole order. Starter strip runs along every eave and rake edge, so measure those linear feet and buy starter accordingly — or budget extra three-tab shingles to cut into starter the old-school way. Hip and ridge cap shingles cover the peaks: a bundle of dedicated cap covers roughly 20 to 25 linear feet of ridge.',
          'On our 24-square example with 60 feet of ridge and two 25-foot hips, that is 110 linear feet of cap — about 5 bundles on top of the field count. Forget the cap and your roof is done except for the one part everyone sees from the street.',
        ],
      },
      {
        heading: 'Ordering mistakes to avoid',
        list: [
          'Using house square footage instead of roof surface area — pitch makes the roof bigger than the footprint.',
          'Assuming every shingle is 3 bundles per square; check the wrapper on designer shingles.',
          'Skipping the waste factor on a roof with valleys, dormers, or skylights — carry 15%.',
          'Ordering field shingles only and forgetting starter strip and ridge cap.',
          'Rounding down to the even square. Round up; unopened bundles are returnable.',
        ],
        paragraphs: [
          'If you have your roof\'s length, width, and pitch handy, the roofing calculator will convert all of it into squares and bundles for you, waste included.',
        ],
      },
    ],
  },
  {
    slug: 'measure-roof-pitch',
    title: 'How to Measure Roof Pitch (and Why It Changes Your Material Order)',
    description:
      'Roof pitch multiplies your material order. Learn three ways to measure it and use the multiplier table to turn house footprint into roof area.',
    date: '2026-07-19',
    calculatorSlug: 'roofing',
    sections: [
      {
        paragraphs: [
          'Ask two roofers to estimate the same house from the curb and the one who wins the job is usually the one who measured the pitch. Pitch — how steep the roof is — changes the actual surface area, the shingle count, the underlayment spec, and whether a crew can walk the roof or needs jacks and harnesses. Guessing it is how material orders come up two squares short.',
          'The good news: pitch is a single number, you can measure it with a level and a tape in five minutes, and once you have it, a simple multiplier converts your house footprint into real roof area.',
        ],
      },
      {
        heading: 'What pitch means',
        paragraphs: [
          'Pitch is written as rise over a 12-inch run. A 6/12 roof (say it "six-twelve") climbs 6 inches for every 12 inches it runs horizontally. A 4/12 is a gentle slope you can stroll across; a 12/12 rises a foot per foot and is a 45-degree wall that demands roof jacks.',
          'Anything under 2/12 is low-slope territory where standard shingles are not even allowed by manufacturers — those roofs need membrane or rolled roofing. Knowing your pitch tells you what you can legally and practically install before you spend a dime.',
        ],
      },
      {
        heading: 'Three ways to measure it',
        list: [
          'From the attic: hold a 12-inch level against the underside of a rafter with the bubble centered, then measure straight down from the end of the level to the rafter. That drop in inches is your rise — 6 inches means 6/12.',
          'From the roof: at the gable end, set the level flat on the shingles, get it level, and measure from the 12-inch mark straight down to the roof surface. Same math, no crawl through the insulation.',
          'From outside at the gable: on a ladder at the rake wall, hold the level against the soffit or rake board and measure the drop. Less precise on wavy old boards, but fast.',
        ],
      },
      {
        heading: 'The pitch multiplier',
        paragraphs: [
          'A sloped roof is always bigger than the floor under it, and the multiplier tells you by how much. It is simply the slope length divided by the horizontal run — geometry you can trust to three decimals.',
        ],
        list: [
          '3/12 pitch: × 1.031',
          '4/12 pitch: × 1.054',
          '5/12 pitch: × 1.083',
          '6/12 pitch: × 1.118',
          '7/12 pitch: × 1.158',
          '8/12 pitch: × 1.202',
          '10/12 pitch: × 1.302',
          '12/12 pitch: × 1.414',
        ],
      },
      {
        paragraphs: [
          'Multiply the building footprint, overhangs included, by the factor and you have roof surface area. If your pitch falls between two listed values, round up to the next multiplier — a 5.5/12 roof bills like a 6/12.',
        ],
      },
      {
        heading: 'Worked example: footprint to squares',
        paragraphs: [
          'Take a one-story house, 40 × 30 feet — a 1,200 sq ft footprint — with a 6/12 gable roof. Multiply 1,200 by 1.118 and the true roof area is about 1,342 sq ft, or 13.4 squares. Order as if it were 1,200 sq ft and you are short before the tear-off is even done.',
          'Now add waste: 10% for a plain gable takes the order to roughly 14.7 squares, so you buy 15 squares — 45 bundles of architectural shingles. Put that same house at 8/12 instead of 6/12 and the multiplier jumps to 1.202, pushing the area to 1,442 sq ft. Same house, same footprint, two extra squares of material. That is why pitch changes your order.',
        ],
      },
      {
        heading: 'Pitch mistakes that cost you',
        list: [
          'Eyeballing steepness from the driveway. A 4/12 and a 6/12 look nearly identical from the ground but differ by about 6% of your material.',
          'Using footprint area as roof area with no multiplier at all.',
          'Measuring the drop from a level that is not actually level — check the bubble twice.',
          'Assuming one pitch for the whole house; measure each roof plane on additions and porches separately.',
          'Ignoring the under-2/12 rule and shingling a low-slope porch anyway. It will leak.',
        ],
        paragraphs: [
          'Once you have your rise and run, feed them into the roofing calculator — it applies the multiplier, adds waste, and hands you the square count and bundle total in one shot.',
        ],
      },
    ],
  },
  {
    slug: 'shingles-2000-sqft-roof',
    title: 'How Many Shingles for a 2,000 Sq Ft Roof?',
    description:
      'A 2,000 sq ft roof needs about 20-23 squares of shingles. Get the exact bundle count, waste factors, and the full material list for the job.',
    date: '2026-07-19',
    calculatorSlug: 'roofing',
    sections: [
      {
        paragraphs: [
          '"How many shingles for a 2,000 square foot roof?" is the most common roofing question on the internet, and the honest answer starts with a question of its own: is 2,000 the roof, or the house? Those two numbers differ by 10 to 20% once pitch enters the picture, and that gap is two to four squares of shingles — real money.',
          'Here are both answers with the math shown, plus the waste factors and the supporting materials that turn a pile of bundles into an actual finished roof.',
        ],
      },
      {
        heading: 'First, figure out which 2,000 you have',
        paragraphs: [
          'If a roofer or a satellite measurement says your roof surface is 2,000 sq ft, use it as-is. If what you know is that your house has 2,000 sq ft of living space, that is the footprint — and the roof is bigger. A 2,000 sq ft footprint under a 6/12 pitch multiplies by 1.118, making the true roof surface about 2,240 sq ft before you order a single bundle.',
          'Two-story homes throw people off here: a 2,000 sq ft two-story might only sit on a 1,100 sq ft footprint, and it is the footprint — not the total living space — that the roof covers.',
        ],
      },
      {
        heading: 'If 2,000 sq ft is the roof surface',
        paragraphs: [
          'Divide by 100: 20 squares. At 3 bundles per square, that is 60 bundles of architectural shingles. Now apply waste: a simple up-and-over gable roof runs clean at 10%, taking the order to 66 bundles. A hip roof with valleys, dormers, or skylights deserves 15%, which lands at 69 bundles — call it 23 squares all-in.',
          'So the working answer for a true 2,000 sq ft roof is 20 squares of coverage and a purchase order of 66 to 69 bundles, depending on how cut-up the roof is. Most suppliers credit unopened bundles, so err on the high side.',
        ],
      },
      {
        heading: 'If 2,000 sq ft is the house footprint',
        paragraphs: [
          'Apply the pitch multiplier first. At 4/12 (× 1.054) the roof is 2,108 sq ft — 21.1 squares. At 6/12 (× 1.118) it is 2,236 sq ft — 22.4 squares. At 8/12 (× 1.202) it is 2,404 sq ft — 24 squares. Same house, three very different orders.',
          'Add waste on top: at 6/12 with a typical 10-15% factor, you are buying 24.6 to 25.7 squares. Round up and the truck drops 25 to 26 squares — 75 to 78 bundles. That is the real answer for a "2,000 sq ft house," and it is why nobody reputable quotes materials without asking about pitch.',
        ],
      },
      {
        heading: 'The rest of the material list',
        list: [
          'Underlayment: synthetic rolls commonly cover 10 squares (1,000 sq ft) each — 2 to 3 rolls for this roof. Old-school #15 felt covers about 400 sq ft per roll, so plan on 5 to 6.',
          'Ice and water shield: required at eaves in snow country and smart in every valley. Rolls cover about 200 sq ft (3 ft × 65 ft); a typical job uses 2 to 4.',
          'Drip edge: measure all eaves and rakes and divide by 10-foot pieces — a 2,000 sq ft ranch usually needs 150 to 200 linear feet, or 15 to 20 pieces.',
          'Nails: figure 350 to 400 per square hand-nailing, more with a 6-nail wind pattern. Twenty squares eats 7,000 to 8,000 nails — roughly one 30 lb box of coil nails for a gun.',
          'Starter strip and ridge cap: measure eaves plus rakes for starter, ridges plus hips for cap. Each bundle of cap covers about 20 to 25 linear feet.',
        ],
      },
      {
        heading: 'Mistakes to avoid on this job',
        list: [
          'Ordering 60 bundles flat with zero waste because "2,000 divided by 33.3 said so."',
          'Confusing total living space with roof area on a two-story house.',
          'Skipping the pitch multiplier when all you know is the footprint.',
          'Forgetting underlayment, drip edge, and cap shingles — the bundles are only about two-thirds of the ticket.',
          'Ignoring local code on ice barrier at the eaves; inspectors check.',
        ],
        paragraphs: [
          'To skip the spreadsheet, enter your roof dimensions and pitch into the roofing calculator and it will hand you squares, bundles, and waste in one pass — the same numbers a supplier\'s counter would give you.',
        ],
      },
    ],
  },
]
