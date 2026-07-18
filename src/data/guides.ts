import type { Guide } from './types'

// 测量指南内容 —— 每篇关联一个计算器 slug
export const guides: Guide[] = [
  {
    slug: 'how-to-measure-concrete-for-a-patio',
    title: 'How to Measure Concrete for a Patio',
    description:
      'Learn how to measure a patio for concrete: length, width, thickness, cubic yards, bagged vs. ready-mix, and how much extra to order.',
    date: '2026-01-15',
    calculatorSlug: 'concrete',
    sections: [
      {
        paragraphs: [
          'A concrete patio is one of the most rewarding weekend projects a homeowner can take on, but the whole job hinges on one unglamorous step: getting the measurements right before the mud shows up. Order too little concrete and you are scrambling to mix emergency bags while a slab sets in the sun. Order too much and you have paid for a truckload of rock you now have to dispose of.',
          'The good news is that the math is simple. Everything comes down to three numbers — length, width, and thickness — plus a few unit conversions and a realistic allowance for waste. This guide walks through the whole process the way a contractor would do it on a quote.',
        ],
      },
      {
        heading: 'Step 1: Measure length, width, and thickness',
        paragraphs: [
          'Grab a long tape measure (a 25-footer works for most patios), a notepad, and a helper if the span is more than about 12 feet. Measure the actual forms or the staked-out area, not the lawn you hope to cover. Work in feet and inches, and write everything down — do not trust memory once you start multiplying.',
        ],
        list: [
          'Measure the length of the slab at its longest point, in feet. For rectangular patios, measure both sides; if they differ, use the larger number.',
          'Measure the width the same way. Multiply length × width to get the area in square feet.',
          'Decide on thickness in inches (more on that below). Convert it to feet by dividing by 12 — 4 inches becomes 0.333 feet, 6 inches becomes 0.5 feet.',
          'Multiply area × thickness (in feet) to get volume in cubic feet.',
          'For an L-shaped or curved patio, break the footprint into rectangles, calculate each one separately, and add the volumes together.',
        ],
      },
      {
        heading: 'Step 2: Choose the right thickness — 4 inches vs. 6 inches',
        paragraphs: [
          'For a standard residential patio that will see foot traffic, grills, and patio furniture, 4 inches is the industry norm. It is thick enough to resist cracking under normal loads when poured over a compacted gravel base, and it keeps material costs reasonable.',
          'Bump up to 6 inches if the slab will carry serious weight — a hot tub, an outdoor kitchen with a masonry island, or a parking pad where a vehicle might occasionally roll onto it. Going from 4 to 6 inches increases your concrete volume by 50%, so it is a real budget decision, not just a rounding difference. Whatever thickness you choose, be consistent across the whole slab; a patio that tapers from 6 inches to 3 inches at the edges will crack at the thin spots first.',
        ],
      },
      {
        heading: 'Step 3: Convert cubic feet to cubic yards',
        paragraphs: [
          'Bagged concrete is sold by yield in cubic feet, but ready-mix concrete is ordered by the cubic yard. One cubic yard is exactly 27 cubic feet, so divide your cubic-foot total by 27 to convert.',
          'A quick example: a 12 × 14 foot patio at 4 inches thick is 168 square feet, times 0.333 feet of thickness, which comes to about 56 cubic feet. Divide by 27 and you get roughly 2.07 cubic yards. That number — the cubic yardage — is what the dispatcher at the ready-mix plant wants to hear when you call.',
        ],
      },
      {
        heading: 'Step 4: Bagged concrete vs. ready-mix — know the break-even point',
        paragraphs: [
          'An 80 lb bag of concrete mix from Home Depot or Lowe\'s yields about 0.60 cubic feet. That means one cubic yard takes about 45 bags — roughly 3,600 pounds of bagged mix you have to haul, rip open, and mix one batch at a time. As a rule of thumb, bagged mix makes sense up to about 1 cubic yard (think small landings, post footings, or a modest 8 × 10 slab). Past that, the labor and per-yard cost of bags stop making sense.',
          'Once your project crosses 1.5 to 2 cubic yards, call a ready-mix company. Most have a minimum order of 1 to 2 yards and charge a short-load fee below that, but the concrete shows up consistent, properly mixed, and fast. For anything over 4 yards, ready-mix is the only sane option. Between 1 and 2 yards, compare the short-load fee against the price of 45–90 bags plus a weekend of mixing — the truck usually wins on both cost and your lower back.',
        ],
      },
      {
        heading: 'Step 5: Add a waste allowance',
        paragraphs: [
          'No slab comes out exactly as calculated. Forms bow, the subgrade is never perfectly level, and a little concrete always ends up stuck to the inside of the mixer or spilled on the driveway. Add 5% to your calculated volume for a straightforward rectangular pour with good forms, and 10% for irregular shapes, sloped or soft subgrade, or your first time finishing.',
          'Apply the waste factor before you convert to bags or place the truck order. It is far cheaper to have a quarter-yard of extra concrete than to be two bags short with a half-finished slab curing in the afternoon heat.',
        ],
      },
      {
        heading: 'Common measuring mistakes to avoid',
        list: [
          'Forgetting to convert inches to feet. Multiplying 12 × 14 × 4 (inches) instead of 12 × 14 × 0.333 gives you a number 12 times too big — the single most common DIY error.',
          'Measuring the grass, not the forms. Stake and build your forms first, then measure inside them.',
          'Ignoring the base depth. Excavation depth is slab thickness plus 4–6 inches of compacted gravel — do not confuse the two when calculating concrete.',
          'Rounding down to hit a neat number. Always round bag counts up and order ready-mix to the nearest quarter-yard above your total.',
          'Skipping the waste factor on a hot day. Concrete waits for no one; a small surplus is your insurance policy.',
        ],
        paragraphs: [
          'Once you have your final cubic footage with waste included, plug the numbers into the concrete calculator to double-check your bag count or yardage before you buy.',
        ],
      },
    ],
  },
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
]

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug)
}
