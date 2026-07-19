import type { Guide } from '../types'

// 瓷砖相关场景指南
export const tileGuides: Guide[] = [
  {
    slug: 'bathroom-tile-how-much',
    title: 'How Much Tile for a Bathroom?',
    description:
      'Figure out how much tile your bathroom floor and shower walls need, with real square-foot math, waste factors, and a full worked example.',
    date: '2026-07-19',
    calculatorSlug: 'tile',
    sections: [
      {
        paragraphs: [
          'Few things stall a bathroom remodel faster than running out of tile with two rows left to set. Because tile is fired in lots, the same style bought a month later can come back a shade off, and in a small bathroom that mismatch reads from the doorway. The fix is boring but bulletproof: measure carefully once, add a sensible waste factor, and buy everything in a single trip.',
          'The math itself is nothing more than length times width, applied to the floor and then to each wall you plan to cover. Where people go wrong is not the multiplication — it is forgetting a wall, skipping the waste factor, or trusting the square footage on boxes pulled from mixed lots. Here is the process a tile setter would walk through on an estimate.',
        ],
      },
      {
        heading: 'Step 1: Measure the floor',
        paragraphs: [
          'Start with the footprint. Multiply the room length by its width in feet. A classic hall bath is 5 × 8 feet, which is 40 square feet of floor. Measure wall to wall, even behind where the vanity will sit — most pros tile the entire floor before the vanity and toilet go in, so the finish looks built-in rather than patched around cabinets.',
        ],
        list: [
          'Measure at floor level, not at countertop height — walls are rarely perfectly plumb.',
          'For L-shaped bathrooms, split the floor into rectangles, calculate each one, and add them together.',
          'Ignore the toilet flange and register cutouts; the few inches you would save get eaten by cuts anyway.',
        ],
      },
      {
        heading: 'Step 2: Measure the tub or shower walls',
        paragraphs: [
          'Wet walls are where the square footage hides. For a standard 60-inch alcove tub tiled 6 feet up the wall, you are covering three surfaces: the 5-foot back wall (5 × 6 = 30 sq ft) and two 30-inch side walls (2.5 × 6 = 15 sq ft each). That is 60 square feet — more than the entire floor of a small bath.',
          'For a walk-in shower, measure each wall separately: width times finished tile height. Tile usually stops at 6 feet or runs to the ceiling, so confirm the height before you multiply. Count the shower floor and any niche interiors on their own lines, since those often take a different, smaller tile than the walls.',
        ],
      },
      {
        heading: 'Step 3: Add the right waste factor',
        paragraphs: [
          'Industry standard is 10% extra for a straight (grid) layout and 15% for diagonal, herringbone, or any pattern that generates heavy cuts at the walls. Small bathrooms honestly deserve the high end of that range: in a 5 × 8 room, nearly every tile touches a wall, a flange, or a door jamb, so cut waste is proportionally higher than in a big open kitchen.',
          'Multiply your measured total by 1.10 or 1.15, then round up to full boxes. When the job is done, keep one unopened box in the attic — a cracked tile five years from now is a 20-minute repair if the spare matches the original dye lot.',
        ],
      },
      {
        heading: 'Worked example: a 5 × 8 hall bath',
        paragraphs: [
          'Floor: 5 × 8 = 40 sq ft. Tub surround: 60 sq ft. Total = 100 sq ft. With a straight lay at 10% waste, you need 110 sq ft; run the same room on a diagonal and the target climbs to 115.',
          'Say you picked a 12 × 24 porcelain sold 8 pieces to a box, 16 sq ft per box. At 110 sq ft you need 6.9 boxes — so you buy 7. That one rounding decision is the difference between grouting on Sunday and driving back across town hoping the shelf lot matches what you already set.',
        ],
      },
      {
        heading: 'Mistakes that leave you short',
        list: [
          'Buying for the floor and forgetting the walls until the thinset is already mixed.',
          'Subtracting the vanity and toilet areas, then deciding mid-job to tile the whole floor anyway.',
          'Using 5% waste because it looked like enough — budget 10% minimum, 15% for diagonal layouts.',
          'Mixing boxes from different dye lots; check the lot number printed on every box before checkout.',
          'Rounding down to a neat box count. Round up, always.',
        ],
        paragraphs: [
          'Once your floor and wall totals are on paper, drop them into the tile calculator to confirm the box count and waste allowance before you load the cart.',
        ],
      },
    ],
  },
  {
    slug: 'kitchen-backsplash-tile',
    title: 'How Much Tile for a Kitchen Backsplash?',
    description:
      'Most kitchens need around 30 sq ft of backsplash tile. Learn how to measure each run, subtract windows, and add the right waste allowance.',
    date: '2026-07-19',
    calculatorSlug: 'tile',
    sections: [
      {
        paragraphs: [
          'A backsplash is the smallest tiling job in the house and the one everybody notices, because it sits at eye level between the countertop and the upper cabinets. The good news: the average kitchen only has about 30 square feet of backsplash, so the material bill stays modest. The bad news: it is exactly the kind of job where a homeowner buys the exact footage, makes two bad cuts on a mosaic sheet, and ends up one sheet short.',
          'Measuring takes ten minutes with a tape and a notepad. The only wrinkle is that a backsplash is almost never one clean rectangle — it is a series of runs broken up by windows, outlets, and the range hood. Measure wall by wall and the math stays easy.',
        ],
      },
      {
        heading: 'Step 1: Measure each run, wall by wall',
        paragraphs: [
          'Standard backsplash height is 18 inches — the gap between the countertop and the bottom of the upper cabinets. Convert that to 1.5 feet, then multiply by the length of each counter run. Write every wall down on its own line instead of totaling in your head.',
        ],
        list: [
          'Wall A: 10 ft of counter × 1.5 ft = 15 sq ft.',
          'Wall B (the return wall): 8 ft × 1.5 ft = 12 sq ft.',
          'Behind the range, most people tile up to the hood. Add the extra height: a 30-inch range opening going 2 more feet up is 2.5 × 2 = 5 sq ft.',
          'Where there are no uppers — beside a window or on an open wall — decide your stopping height first and measure to that line.',
        ],
      },
      {
        heading: 'Step 2: Subtract windows, ignore outlets',
        paragraphs: [
          'Subtract large openings only. A 3 × 2 foot window over the sink removes 6 real square feet of tile, so take it out of the total. Outlets and switch plates are the opposite: leave them in the number. Each one costs you a cut tile, and the square inches you would save by subtracting them never survive the wet saw.',
          'Measure in inches, then convert. Walls wander. An 18-inch nominal gap might read 17.25 at one end and 18.5 at the other, and ordering to the optimistic number is how you come up short on the last row.',
        ],
      },
      {
        heading: 'Worked example: the 30 sq ft kitchen',
        paragraphs: [
          'Add the runs: 15 + 12 + 5 = 32 sq ft. Subtract the window: 32 − 6 = 26 sq ft. That is your net coverage, and it lands right at the national average for a modest L-shaped kitchen.',
          'Now apply waste. Ten percent for a straight subway layout takes you to 28.6 sq ft — call it 29. Planning a herringbone or diagonal set? Use 15%, which puts you at 30 sq ft even. Mosaic sheets are usually about 1 sq ft each, so the shopping list writes itself: 29 sheets, or 30 for the fancy pattern.',
        ],
      },
      {
        heading: 'Translating square feet into boxes and sheets',
        paragraphs: [
          'Check coverage on the label before you fall in love with a tile. Classic 3 × 6 subway tile works out to exactly 8 pieces per square foot (each tile covers 18 square inches), so 29 sq ft means 232 pieces — three boxes if yours are packed 100 to a box. Sheet-mounted mosaics vary from 0.9 to 1.05 sq ft per sheet, so count sheets, not the marketing photo.',
          'Buy everything from the same shelf lot, and grab one extra sheet or a handful of loose subway tiles for the garage shelf. Backsplashes get cracked by flying pot lids and over-enthusiastic stand mixers more often than you would think.',
        ],
      },
      {
        heading: 'Backsplash mistakes to skip',
        list: [
          'Ordering exact net footage with zero waste — the number-one way to stall a one-weekend job.',
          'Forgetting the return on the side of a cabinet run or the 2-inch strip behind the faucet.',
          'Using a 10% waste factor on herringbone or intricate mosaics; use 15% and keep the leftovers.',
          'Subtracting outlet openings. The cut tile is the outlet opening.',
          'Assuming all mosaic sheets are exactly 1 sq ft. Check the label first.',
        ],
        paragraphs: [
          'When your wall-by-wall numbers are written down, run them through the tile calculator to sanity-check sheets, boxes, and waste before you head to the store.',
        ],
      },
    ],
  },
  {
    slug: 'thinset-grout-per-square-foot',
    title: 'How Much Thinset and Grout Per Square Foot?',
    description:
      'Thinset covers 60-100 sq ft per 50 lb bag depending on your trowel. Get exact thinset and grout quantities per square foot, with examples.',
    date: '2026-07-19',
    calculatorSlug: 'tile',
    sections: [
      {
        paragraphs: [
          'Standing in the aisle guessing at bags of thinset is a rite of passage. Buy too little and you are driving back mid-job with half a floor setting up; buy too much and you own six dusty bags of mortar you will never return. Both materials are cheap compared to the tile itself — the trick is knowing the real coverage numbers instead of the optimistic ones printed on the bag.',
          'Thinset coverage is governed almost entirely by your trowel notch. Grout coverage is governed by tile size and joint width. Get those two variables right and you can estimate any room in the house within a bag.',
        ],
      },
      {
        heading: 'Thinset: the trowel decides',
        paragraphs: [
          'A 50 lb bag of thinset mortar covers roughly 60 to 100 square feet, and the spread between those numbers is the notch. A 1/4 × 1/4 inch square-notch trowel — the standard for 12-inch floor tile — lays a thin bed and stretches a bag to about 80-100 sq ft. Step up to a 1/4 × 3/8 notch for 12 × 24 plank tile and coverage drops to 60-75 sq ft. Large-format tile on a 1/2 × 1/2 notch can burn a bag in 40-50 sq ft.',
          'Walls and small tile go the other way: a 3/16 V-notch for mosaics barely sips mortar. And if the floor is not flat, forget the chart — skim-coating dips and back-buttering big tiles can easily eat an extra bag per hundred square feet.',
        ],
      },
      {
        heading: 'Worked example: 100 sq ft of 12 × 24 floor',
        paragraphs: [
          'You are setting 12 × 24 porcelain with a 1/4 × 3/8 square-notch trowel. At roughly 65 sq ft per 50 lb bag, 100 sq ft needs 1.5 bags. Nobody sells half a bag, so the order is 2 — and any seasoned setter keeps one extra on the truck, because the alternative is a cold joint in the middle of the room.',
          'That job also wants a modified (polymer-fortified) thinset rated for porcelain, so read the bag spec, not just the coverage chart. Cheap unmodified mortar under dense porcelain is a callback waiting to happen.',
        ],
      },
      {
        heading: 'Grout: tile size and joint width run the show',
        paragraphs: [
          'Grout math surprises beginners because small tile uses dramatically more grout than big tile — more joints per square foot means more space to fill. A 25 lb bag of sanded grout might cover 140 sq ft of 12 × 12 tile with 1/8-inch joints, or barely 50 sq ft of 2-inch hex mosaics. Same bag, a third of the coverage.',
        ],
        list: [
          '3 × 6 subway tile, 1/16-inch joints: roughly 175-250 sq ft per 25 lb bag.',
          '12 × 12 tile, 1/8-inch joints: roughly 100-140 sq ft per bag.',
          '12 × 24 tile, 3/16-inch joints: roughly 90-120 sq ft per bag.',
          '1-2 inch mosaics, 3/16-inch joints: often just 40-60 sq ft per bag.',
        ],
      },
      {
        heading: 'Worked example: the same floor, plus a mosaic surprise',
        paragraphs: [
          'The 100 sq ft floor of 12 × 24 with 3/16-inch joints needs about a quarter pound of grout per square foot — one 25 lb bag covers it with enough left over for touch-ups. Easy.',
          'Now add the shower pan: 12 sq ft of 2-inch hex mosaic. The joint-heavy pattern eats grout at close to half a pound per square foot, so the pan alone wants 6-8 lb. The single bag still covers both — but only just, and only because you checked the mosaic coverage instead of assuming the floor number applied everywhere.',
        ],
      },
      {
        heading: 'Setting-material mistakes that cost money',
        list: [
          'Buying thinset off the bag\'s best-case coverage number instead of the trowel-notch chart.',
          'Using unsanded grout on joints wider than 1/8 inch — it shrinks and cracks.',
          'Mixing a whole bag at once in summer. Mix half batches you can use inside 20-30 minutes.',
          'Forgetting that back-buttering large-format tile adds mortar beyond the trowel chart.',
          'Assuming mosaic grout coverage matches floor-tile coverage. It does not — not even close.',
        ],
        paragraphs: [
          'Before you buy, plug your room size, tile dimensions, and joint width into the tile calculator to get bag counts for thinset and grout in one pass.',
        ],
      },
    ],
  },
]
