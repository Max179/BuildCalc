import type { Guide } from '../types'

// 地板相关场景指南
export const flooringGuides: Guide[] = [
  {
    slug: 'flooring-measurement-guide',
    title: 'Flooring Measurement Guide',
    description:
      'Measure any room for new flooring — closets, stairs, odd shapes, waste factors, and how to round up when buying by the box.',
    date: '2026-01-15',
    calculatorSlug: 'flooring',
    sections: [
      {
        paragraphs: [
          'Whether you are laying luxury vinyl plank, laminate, engineered hardwood, or tile, every flooring order starts with the same question: how many square feet is this room, really? Measuring for flooring is more forgiving than measuring for concrete, but the details — closets, stairs, waste factor, and box math — are where first-timers come up short mid-install.',
          'All you need is a tape measure, a notepad, and a simple plan: measure the space honestly, break weird shapes into rectangles, add the right waste allowance, and round up at the register. Here is how to do each step like an installer would.',
        ],
      },
      {
        heading: 'Step 1: Measure the room\'s length and width',
        paragraphs: [
          'For a plain rectangular room, measure the length and width in feet at floor level and multiply them. A 14 × 16 living room is 224 square feet. Measure wall to wall — not to the baseboards, and not to where the old carpet happened to end.',
        ],
        list: [
          'Measure each wall in two places if the room is old; houses settle and walls are rarely parallel. Use the larger measurement.',
          'Record inches as decimals or fractions of a foot (10 ft 6 in = 10.5 ft) so the multiplication stays clean.',
          'Measure every room separately, even if the same flooring runs through several of them.',
          'Sketch a rough floor plan and write each measurement on it — you will thank yourself at the store.',
        ],
      },
      {
        heading: 'Step 2: Handle closets, doorways, and stairs',
        paragraphs: [
          'Closets count. If flooring is going in, measure the closet interior and add its square footage to the room total. The same goes for alcoves, bay window bump-outs, and the strip of floor inside a doorway — installers run flooring through doorways so transitions sit under the door, not at the room line.',
          'Stairs are their own animal. For a straight staircase, measure the tread (the flat part) and riser (the vertical face) of one step, add them, and multiply by the number of steps — most standard steps come to about 3 square feet of coverage each when you include both faces. Landings are measured as simple rectangles. If you are doing carpet or hardwood stairs, round up generously: cuts on stairs are unforgiving and matching grain across steps eats material.',
        ],
      },
      {
        heading: 'Step 3: Break irregular rooms into rectangles',
        paragraphs: [
          'L-shaped great rooms, kitchens with island cutouts, hallways that jog around a bathroom — none of these fit a single length × width formula. The fix is the divide-and-conquer method every estimator uses:',
        ],
        list: [
          'Sketch the room and split it into the fewest possible rectangles. An L-shaped room becomes two rectangles; a room with a bump-out becomes two or three.',
          'Measure and multiply each rectangle separately.',
          'Add all the areas together for the room total.',
          'For a permanent obstacle you are flooring around (a fireplace hearth, a floor-mounted island), calculate its footprint and subtract it.',
        ],
      },
      {
        paragraphs: [
          'Do not stress about 2-inch inaccuracies in the breakdown — your waste factor will absorb them. What matters is that every square foot of actual floor appears in exactly one rectangle.',
        ],
      },
      {
        heading: 'Step 4: Add the right waste factor',
        paragraphs: [
          'Every cut produces an offcut, some planks arrive damaged, and a few boards will be sacrificed to mistakes. The industry-standard allowances:',
        ],
        list: [
          'Straight lay (planks parallel to a wall): add 10% to your total square footage.',
          'Diagonal or herringbone layouts: add 15%, because every perimeter cut is angled and offcuts rarely reuse well.',
          'Tile in small or heavily cut-up rooms (bathrooms with tubs and vanities): lean toward 15% even for straight layouts.',
        ],
      },
      {
        paragraphs: [
          'Multiply your measured area by 1.10 or 1.15 to get your order quantity. Keeping one or two unopened boxes after the job is smart, not wasteful — plank lines get discontinued, and a matching box is the only clean fix for a damaged board five years from now.',
        ],
      },
      {
        heading: 'Step 5: Buying by the box — always round up',
        paragraphs: [
          'Most laminate, LVP, and engineered wood is sold by the box, and each box covers a fixed area — commonly 18 to 30 square feet depending on the product. Divide your waste-adjusted square footage by the box coverage printed on the label, then round up to the next whole box. If the math says 9.2 boxes, you are buying 10.',
          'Never round down to save twenty dollars. Running short mid-install means a second trip and a real risk the store\'s new stock comes from a different production lot with slightly different color or milling. Check the lot numbers on the boxes you load into your cart — they should all match.',
        ],
      },
      {
        heading: 'Step 6: Don\'t forget baseboards and transitions',
        paragraphs: [
          'Flooring rarely ends cleanly at the wall. If you are removing old baseboards or installing new ones, measure the room\'s perimeter in linear feet (subtract door openings) and buy trim separately — baseboard is sold by the linear foot, not the square foot. Add transition strips for every doorway where your new floor meets a different material, and quarter-round or shoe molding if you are leaving existing baseboards in place over a floating floor.',
          'Once you have your room totals and waste factor worked out, plug them into the flooring calculator to confirm your box count before you load up the cart.',
        ],
      },
    ],
  },
  {
    slug: 'how-many-boxes-laminate-flooring',
    title: 'How Many Boxes of Laminate Flooring Do I Need?',
    description:
      'Work out how many boxes of laminate or LVP flooring to buy — square footage, waste factor, coverage per box, and why you always round up.',
    date: '2026-07-19',
    calculatorSlug: 'flooring',
    sections: [
      {
        paragraphs: [
          'Every laminate and LVP estimate I have ever written ended the same way: standing in the flooring aisle with a square footage number on my phone, dividing it by whatever coverage was printed on the box in my cart. Get that division wrong — or skip the waste factor — and you are driving back mid-install hoping the lot numbers still match.',
          'The math itself is simple once you know the three numbers that matter: your true floor area, a waste allowance for cuts, and the coverage per box of the exact product you are buying. Here is the whole process, with real numbers.',
        ],
      },
      {
        heading: 'Step 1: Get the true square footage',
        paragraphs: [
          'Measure each room wall to wall in feet and multiply length by width — then add everything that hides outside the main rectangle. A 12 × 15 bedroom is 180 square feet, but the 2 × 6 closet adds 12 more, and your honest total is 192, not 180. That closet is five or six planks, which is exactly the shortfall that stalls a Saturday install. Measure twice, in two spots along each wall — old houses settle, walls are rarely parallel, and the bigger number is the one you buy for.',
        ],
      },
      {
        heading: 'Step 2: Add waste — 10% straight, 15% diagonal',
        paragraphs: [
          'Every room produces offcuts at the walls, and every install sacrifices a board or two to damaged tongues or a bad cut. Budget for it instead of hoping around it:',
        ],
        list: [
          'Straight lay, planks parallel to the longest wall: multiply your area by 1.10.',
          'Diagonal or herringbone layouts: multiply by 1.15 — angled perimeter cuts almost never reuse their offcuts.',
          'Stairs or rooms chopped up by islands and hearths: lean toward 15% even for a straight layout.',
          'Worked example: 192 square feet × 1.10 = 211.2, so call it 212 square feet of material to buy.',
        ],
      },
      {
        heading: 'Step 3: Divide by the coverage on YOUR box',
        paragraphs: [
          'This is where generic charts fail you. Laminate and LVP boxes cover anywhere from about 18 to 30 square feet depending on plank width and length, and the only number you should divide by is the coverage printed on the label of the product sitting in your cart.',
          'Continuing the bedroom example with a common mid-range laminate at 20.34 square feet per box: 212 ÷ 20.34 = 10.4 boxes, so you are buying 11. A 10 × 12 office runs the same way: 120 square feet, 132 with waste, 132 ÷ 20.34 = 6.5 — buy 7 boxes and expect most of the last one to end up as offcuts and spares. Seven boxes covers 142 square feet, which feels like overkill for a 120-square-foot room until you watch a full box turn into wall offcuts.',
        ],
      },
      {
        heading: 'Why you never round down',
        paragraphs: [
          'If the math says 10.4 boxes, buying 10 leaves you short — ten boxes at 20.34 square feet each is 203.4 square feet against a 212-square-foot need. A second trip is annoying; the real risk is lot mismatch. Same SKU, different production run, and the new planks read as a different color once the floor is down. Flip the boxes in your cart and confirm the lot or batch numbers match before you check out.',
          'Keep one or two unopened boxes in a closet when the job is done. Plank lines get discontinued every few years, and a matching spare box is the only clean repair for a gouged board in year five.',
        ],
      },
      {
        heading: 'Typical coverage per box, for sanity checks',
        list: [
          'Budget narrow-plank laminate: often 15-18 square feet per box.',
          'Standard 7-8 inch laminate: roughly 20-24 square feet per box.',
          'Wide-plank LVP: 18-30 square feet per box depending on plank length.',
          'Engineered hardwood: commonly 20-35 square feet per carton.',
        ],
      },
      {
        heading: 'The fast way to double-check yourself',
        paragraphs: [
          'Once you have your room dimensions and a waste factor picked, drop them into the flooring calculator — it handles the box division and the round-up for you, so the only thing left to do at the store is check lot numbers.',
        ],
      },
    ],
  },
  {
    slug: 'measure-stairs-for-flooring',
    title: 'How to Measure Stairs for Flooring',
    description:
      'Measure stairs for flooring the installer way: tread and riser math, per-step square footage, landings, winders, and the 15% waste allowance.',
    date: '2026-07-19',
    calculatorSlug: 'flooring',
    sections: [
      {
        paragraphs: [
          'Stairs are where flooring estimates go to die. A first-timer measures the bedroom perfectly, buys exactly enough LVP, then looks at the staircase and guesses — and guesses are why installers keep an extra box in the truck.',
          'Stairs are not hard to measure, but they are different: every step is two surfaces, the cuts are unforgiving, and no two staircases in the same house are guaranteed to match. Here is the method, step by step.',
        ],
      },
      {
        heading: 'Know the anatomy: tread, riser, nosing',
        paragraphs: [
          'The tread is the flat part your foot lands on — typically 10 to 11 inches deep. The riser is the vertical face between steps, usually 7 to 7.5 inches tall. The nosing is the rounded front edge of the tread, which finished floors handle with a dedicated stair-nose molding rather than a wrapped plank.',
        ],
        list: [
          'Interior stair width is 36 inches in most homes; older houses run 30-34 inches.',
          'A straight flight for an 8-foot ceiling usually has 12-14 steps — count yours, do not assume.',
          'Any step that looks wider or shaped differently — winders, a flared bottom step — gets measured on its own.',
        ],
      },
      {
        heading: 'The per-step math',
        paragraphs: [
          'Measure one step, then multiply by the count. A 36-inch-wide stair with a 10-inch tread: the tread is 360 square inches, or 2.5 square feet. The 7-inch riser is 252 square inches, or 1.75 square feet. Covering both faces takes about 4.25 square feet per step. You will hear a rule of thumb of roughly 3 square feet per step — that only holds on narrower stairs or tread-only coverage, which is exactly how rules of thumb leave you short on stairs.',
          'Covering treads only — the usual approach for LVP and laminate finished with stair-nose trim — that same step needs just 2.5 square feet of plank.',
        ],
      },
      {
        heading: 'Count steps, then measure the odd ones',
        paragraphs: [
          'Count every step from the first riser to the top landing. Thirteen steps at 4.25 square feet comes to 55.25 square feet of material for a fully covered stair — call it 56. Tread-only LVP on the same flight: 13 × 2.5 = 32.5 square feet.',
          'Winders and pie-shaped steps on a turn are measured individually: take the tread at its widest point and treat each one as its own rectangle. A flared or bullnose bottom step can eat double the material of a standard step.',
        ],
      },
      {
        heading: 'Landings are easy — do not skip them',
        paragraphs: [
          'A landing is just a small room. A 36 × 36 landing is 9 square feet; a 3 × 6 landing at a turn is 18. Add every landing to the stair total before waste ever enters the conversation. If the top landing runs straight into a hallway getting the same floor, measure the hallway separately and add it to the upstairs room total, not the stair total.',
        ],
      },
      {
        heading: 'Waste on stairs: 15% minimum',
        paragraphs: [
          'Stairs generate more scrap per square foot than any other part of the house: every tread is a cut piece, pattern and grain matching across steps eats material, and a miscut tread is a full loss. Add 15% to the stair total — 20% on hardwood if you want grain flowing up the flight. The 56-square-foot example: 56 × 1.15 = 64.4, so you are buying for 65 square feet. Pros order a tread or two beyond even that; a spare in the attic beats a discontinued pattern when a step gets gouged five years from now.',
        ],
      },
      {
        heading: 'Order the trim with the plank',
        paragraphs: [
          'Stair-nose molding and any riser material are bought separately from field plank — nose pieces are sold by the linear foot, one per step, and they are the part everyone forgets. Once you have per-step area, step count, and landings totaled with waste, run the numbers through the flooring calculator to confirm the box count before you order anything.',
        ],
      },
    ],
  },
  {
    slug: 'l-shaped-room-flooring',
    title: 'How Much Flooring for an L-Shaped Room?',
    description:
      'Flooring for an L-shaped room: split it into two rectangles, dodge the overlap mistake, add the right waste factor, and round up by the box.',
    date: '2026-07-19',
    calculatorSlug: 'flooring',
    sections: [
      {
        paragraphs: [
          'The L-shaped room — a living room that jogs into a dining area, a master bedroom with a sitting nook, a basement that wraps the stairs — is the most common measuring hang-up I see from DIYers. The room is not one rectangle, so one length-times-width measurement cannot be right.',
          'The fix is the oldest trick in estimating: divide and conquer. Split the L into two rectangles, measure each one, and add them together. Five extra minutes with the tape beats a fifth box you never bought.',
        ],
      },
      {
        heading: 'Split the L into two rectangles — either way works',
        paragraphs: [
          'There are always two ways to slice an L, and both give the same total. You can run the split line across the short leg or down the long one; pick whichever gives you cleaner walls to measure against. Sketch the room first and draw the split on it so you do not lose track of which walls belong to which rectangle. You do not need graph paper — the back of an envelope works, as long as every wall length ends up written on it.',
          'The one rule that matters: every square foot of floor lands in exactly one rectangle. Overlap is the classic mistake — measure a chunk twice and you have bought a box you will never open.',
        ],
      },
      {
        heading: 'Worked example: a 20-foot great room with a dining leg',
        paragraphs: [
          'Say the main leg measures 20 × 12 and the dining leg measures 10 × 8. Rectangle one: 20 × 12 = 240 square feet. Rectangle two: 10 × 8 = 80 square feet. Room total: 320 square feet.',
          'Sanity-check with the other split — a 10 × 12 rectangle plus a 10 × 20 rectangle: 120 + 200 = 320. Same number, which is exactly the point. If your two splits disagree, one of your tape readings is wrong.',
        ],
      },
      {
        heading: 'Closets, alcoves, and the inside corner',
        paragraphs: [
          'L-shaped rooms usually hide a closet in one leg. Measure closets as their own little rectangles and add them — a 2 × 6 closet is 12 square feet. Bay bump-outs and alcoves get the same treatment. Nothing gets subtracted unless you are flooring around a permanent obstacle like a fireplace hearth; its footprint comes out of the total. One spot that never comes out: doorways. Flooring runs through them so the transition hides under the door, so the doorway strip stays inside whichever rectangle contains it.',
        ],
      },
      {
        heading: 'Waste for L-shapes: why the corner matters',
        paragraphs: [
          'The inside corner of the L is where layouts get decided. Good installers run courses unbroken through the corner rather than changing direction, which means more cut ends land in the scrap pile than in a plain rectangle. For a straight lay, 10% still holds: 320 × 1.10 = 352 square feet to buy. Running herringbone or diagonal through an L? Stay at 15% and do not negotiate: 320 × 1.15 = 368. And if this is your first floating floor, buy the straight-lay number and keep the layout simple — an L-shaped room is not the place to learn angled layouts.',
        ],
      },
      {
        heading: 'From square feet to boxes',
        paragraphs: [
          'Take the waste-adjusted number to the box label. Buying LVP at 23.64 square feet per box: 352 ÷ 23.64 = 14.9 — fifteen boxes. Buying laminate at 20.34 per box: 352 ÷ 20.34 = 17.3 — eighteen boxes. Same room, different product, three boxes apart. That is why you divide by the coverage printed on the product you are actually loading onto the cart, and round up every time. Whichever product you land on, confirm every box carries the same lot number before checkout — a mid-room color shift from a mixed lot is forever.',
        ],
      },
      {
        heading: 'Measure it, then verify it',
        paragraphs: [
          'Sketch the L, split it, measure twice, add waste, round up at the box. Ten minutes with a sketch tonight saves the Saturday-morning emergency run. If you want the arithmetic checked before you drive to the store, punch the two rectangles into the flooring calculator and let it handle the waste factor and box round-up for you.',
        ],
      },
    ],
  },
]
