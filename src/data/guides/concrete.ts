import type { Guide } from '../types'

// 混凝土相关场景指南
export const concreteGuides: Guide[] = [
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
    slug: 'how-many-bags-of-concrete-per-fence-post',
    title: 'How Many Bags of Concrete Per Fence Post?',
    description:
      'How many bags of concrete per fence post? Usually 1.5 to 2 bags of 50 lb fast-setting mix for a 4x4 in an 8-inch hole — full math inside.',
    date: '2026-07-19',
    calculatorSlug: 'concrete',
    sections: [
      {
        paragraphs: [
          'Ask ten fence contractors how many bags of concrete a post needs and you will get the same answer in ten different accents: it depends on the hole. But the range is tighter than most homeowners expect, and once you understand the simple cylinder math behind it, you can budget an entire fence line to within a bag or two.',
          'This guide gives you the quick answer for the most common setup — a 4x4 post in an 8-inch hole — then shows the math so you can adjust for 6x6 posts, deeper frost lines, and oversized gate-post holes.',
        ],
      },
      {
        heading: 'The quick answer for a standard 4x4 post',
        paragraphs: [
          'A standard 4x4 fence post (which actually measures 3.5 inches square) set in an 8-inch diameter hole 2 feet deep needs about 0.53 cubic feet of concrete. A 50 lb bag of fast-setting mix yields roughly 0.375 cubic feet, so the math lands at about 1.4 bags — call it 1.5 to 2 bags per post. Buy 2 and you will never come up short, because holes are never perfectly cylindrical and the leftover third of a bag disappears fast.',
          'If you are loading up on standard 80 lb bags instead (about 0.60 cubic feet each), one bag per post is technically enough for this hole size — but most pros still round up, because a post hole that comes out 2 inches wider than planned suddenly needs half a bag more.',
        ],
      },
      {
        heading: 'The math: hole volume minus post displacement',
        paragraphs: [
          'A post hole is a cylinder: pi times the radius squared times the depth. An 8-inch hole has a 4-inch radius, so 2 feet of depth holds about 1,206 cubic inches — 0.70 cubic feet. The post itself takes up space: 3.5 × 3.5 × 24 inches is 294 cubic inches, about 0.17 cubic feet. Subtract the post from the hole and you get 0.53 cubic feet, the number the bag count is built on.',
          'Setting posts on metal post bases above the footing, the way deck builders do it? Skip the subtraction and use the full hole volume.',
        ],
      },
      {
        heading: 'Bag counts for common post and hole sizes',
        list: [
          '4x4 post, 8-inch hole, 2 feet deep: about 0.53 cu ft — 2 bags of 50 lb fast-setting, or 1 bag of 80 lb standard.',
          '4x4 post, 10-inch hole, 2 feet deep: about 0.92 cu ft — 3 bags of 50 lb, or 2 bags of 80 lb.',
          '4x4 post, 8-inch hole, 3 feet deep: about 0.79 cu ft — 2 to 3 bags of 50 lb.',
          '6x6 post, 12-inch hole, 3 feet deep: about 1.73 cu ft — 5 bags of 50 lb, or 3 bags of 80 lb.',
          'Gate and corner posts: bump the hole up one size and add a bag — they carry the load of the whole run.',
        ],
      },
      {
        heading: 'How deep should the hole be?',
        paragraphs: [
          'The classic rule is one-third of the above-ground post height in the ground, plus 6 inches of gravel at the bottom for drainage. For a 6-foot fence, that means 2 feet of post embedment in concrete over the gravel layer.',
          'In cold climates the frost line overrides the rule of thumb. If local frost depth is 36 or 42 inches, the bottom of the footing has to sit below it or freeze-thaw cycles will heave the post out of plumb within a few winters. Your building department publishes the number, and deeper is always better — just budget roughly one extra 50 lb bag for every additional foot of depth on an 8-inch hole.',
        ],
      },
      {
        heading: 'Fast-setting vs. standard mix',
        paragraphs: [
          'Fast-setting mix — the 50 lb bag made specifically for setting posts — is the right call for most fences. Dump it in dry around a braced, plumb post, add about a gallon of water, and it firms up in 20 to 40 minutes. No mixer, no wheelbarrow, and you can hang panels the same day.',
          'Standard 80 lb mix makes sense when a mixer is already on site for a bigger pour, or when you want working time to brace and align a long run of posts before anything sets. For gate posts, many contractors prefer standard mix poured around a well-braced post and left to cure overnight, because a gate punishes a sloppy set for years.',
        ],
      },
      {
        heading: 'Budget the whole fence line',
        paragraphs: [
          'Full-run example: a 100-foot fence with posts every 8 feet has 13 line posts. At 2 bags each that is 26 bags of 50 lb fast-setting mix; add 2 or 3 extra for the two gate posts and one spare for the hole that caves in, and you are loading about 30 bags — roughly 1,500 pounds, so bring the trailer, not the sedan.',
          'Once you know your post size, hole diameter, and depth, drop them into the concrete calculator and it will convert the hole volume to an exact bag count — load the truck once and dig in peace.',
        ],
      },
    ],
  },
  {
    slug: 'how-much-concrete-for-10x10-slab',
    title: 'How Much Concrete for a 10x10 Slab?',
    description:
      'A 10x10 slab at 4 inches thick takes 1.23 cubic yards of concrete — about 56 bags of 80 lb mix. See the math, bag counts, costs, and when to call a truck.',
    date: '2026-07-19',
    calculatorSlug: 'concrete',
    sections: [
      {
        paragraphs: [
          'The 10×10 slab is the most common DIY concrete project in America — shed pads, hot tub bases, AC pads, generator pads, and a thousand backyard landing spots. It is also the perfect size to learn concrete math on, because the numbers are clean and a small mistake will not bankrupt you.',
          'Here is exactly how much concrete a 10×10 takes at both common thicknesses, what that means in bags, and the honest answer on whether you should mix it yourself.',
        ],
      },
      {
        heading: 'The math: 100 square feet times thickness',
        paragraphs: [
          'A 10×10 slab is 100 square feet. At the standard 4-inch thickness, multiply by 0.333 feet (4 divided by 12) to get 33.3 cubic feet. Divide by 27 to convert to cubic yards: 1.23 yards. That is the number everything else hangs on.',
          'Measure inside the forms, not the stakes and string. If your forms wander 2 inches off each way — a 10.2 × 10.2 slab — you have just added 4% to your volume before a single drop is poured.',
        ],
      },
      {
        heading: 'Bag counts for a 10×10 slab',
        list: [
          '4 inches thick, 80 lb bags (0.60 cu ft yield): 33.3 ÷ 0.60 = 56 bags.',
          '4 inches thick, 60 lb bags (0.45 cu ft yield): 33.3 ÷ 0.45 = 74 bags.',
          '6 inches thick (hot tubs, heavy sheds): 50 cu ft — 84 bags of 80 lb.',
          'Add 10% for waste and an uneven subgrade: 61 bags of 80 lb for the 4-inch slab, 92 for the 6-inch.',
        ],
        paragraphs: [
          'Bag yields are printed on the back of every bag — an 80 lb bag of standard mix makes 0.60 cubic feet, a 60 lb bag makes 0.45. Do not assume the heavier bag is the better deal; run the price per cubic foot both ways at the store.',
        ],
      },
      {
        heading: 'Should you really hand-mix 56 bags?',
        paragraphs: [
          'Be honest about the labor. Fifty-six 80 lb bags is 4,480 pounds you will move twice — once into the cart, once into the mixer. With a rented mixer and one helper, expect the better part of a day of mixing, and you will be finishing the first half of the slab while the last batches are still spinning.',
          'At 1.23 yards you are right at the break-even point for ready-mix. Many plants will deliver a single yard, with short-load fees that vary widely by market. Get a quote before committing: 56 bags at $5 to $7 each is $280 to $390 plus the mixer rental, and a delivered yard often lands in the same ballpark with a fraction of the work. Past 1.5 yards, the truck wins every time.',
        ],
      },
      {
        heading: 'Four inches or six?',
        paragraphs: [
          'Four inches over 4 inches of compacted gravel handles sheds, patio furniture, grills, and foot traffic — that covers most 10×10 pads. Go to 6 inches for a hot tub (a filled six-person tub tops 5,000 lb), a workshop with heavy machinery, or anywhere a vehicle tire might clip an edge.',
          'If a structure will sit on the slab — say, a shed with framed walls — thicken the perimeter to 8 inches deep and about 8 inches wide. That turned-down edge is what actually carries the building, and it only adds a few bags to the total.',
        ],
      },
      {
        heading: 'The base matters as much as the bags',
        paragraphs: [
          'The number-one cause of cracked DIY slabs is not bad concrete — it is bad dirt. Strip the topsoil, compact 4 inches of crushed gravel, and pour on that. A slab poured over soft topsoil or mulch will settle and crack no matter how many bags you bought.',
          'Lay 6-mil poly under the slab if it will sit inside an enclosed space, and set wire mesh or rebar on chairs in the middle third of the slab — not on the ground, where it does nothing.',
          'Before you buy a single bag, plug your exact dimensions and thickness into the concrete calculator to confirm the bag count and yardage — adjusting a number on a screen beats adjusting it on the driveway.',
        ],
      },
    ],
  },
  {
    slug: 'sonotube-concrete-guide',
    title: 'How Much Concrete Do You Need for a Sonotube?',
    description:
      'Sonotube concrete math made simple: an 8-inch tube holds 0.35 cu ft per foot, a 12-inch holds 0.79. Volumes, deck footing examples, and bag counts.',
    date: '2026-07-19',
    calculatorSlug: 'concrete',
    sections: [
      {
        paragraphs: [
          'Sonotubes — the cardboard forming tubes stacked by the lumber aisle — are how you pour clean, round footings for decks, pergolas, and pole barns without building a single form. The concrete math is pure cylinder volume, and once you know three numbers, sizing a whole deck of footings takes about two minutes.',
          'The three numbers that matter are the tube diameter, the total depth (below grade plus whatever sticks up as a pier), and the yield of the bags you are buying. Everything else is multiplication.',
        ],
      },
      {
        heading: 'Volume per foot of tube height',
        list: [
          '8-inch tube: 0.35 cu ft per foot of height.',
          '10-inch tube: 0.55 cu ft per foot.',
          '12-inch tube: 0.79 cu ft per foot.',
        ],
        paragraphs: [
          'Those come straight from pi r squared h. An 8-inch tube has a 4-inch radius, so each 12 inches of height holds about 603 cubic inches — 0.35 cubic feet. Translated to bags: every foot of an 8-inch tube takes a little over half an 80 lb bag, and every foot of a 12-inch tube takes about 1.3 bags.',
        ],
      },
      {
        heading: 'Worked example: six deck footings',
        paragraphs: [
          'Say your deck plan calls for six footings in 10-inch tubes, poured 4 feet deep to get below the frost line. Each footing takes 0.55 × 4 = 2.2 cubic feet, and six of them need 13.2 cubic feet — just under half a cubic yard. In bags, that is 13.2 ÷ 0.60 = 22 bags of 80 lb mix, or 30 bags of 60 lb. Toss in one or two spares for the hole that sloughs or the tube that sits crooked.',
          'If the tubes extend above grade to form piers, include that height in the length. A footing 42 inches deep with 8 inches of pier showing is 50 inches of tube — 4.2 feet of volume, not 3.5.',
        ],
      },
      {
        heading: 'Setting a post in the tube? Subtract its volume',
        paragraphs: [
          'If you bury a wood post directly in the footing, the post displaces concrete. A 4x4 (3.5 inches actual) set 3 feet into the tube takes up about a quarter of a cubic foot — less than half a bag per footing, but across a dozen footings it is real money.',
          'Most modern decks skip the buried post entirely: pour the tube full, set a galvanized post base in the wet concrete, and bolt the post on later. It keeps wood out of the ground, passes inspection more easily, and makes the math simpler — full tube volume, no subtraction.',
        ],
      },
      {
        heading: 'Depth is about frost, not preference',
        paragraphs: [
          'Footing depth is set by your local frost line — anywhere from 12 inches in the deep South to 48 inches or more in the upper Midwest and New England. Pour shallower than frost depth and freeze-thaw cycles will jack the footing upward, taking the deck with it. The building department publishes the number, and the inspector will want to see the holes before you pour.',
          'Diameter is about load and soil. Eight-inch tubes suit light pergolas and landings; 10- and 12-inch tubes are the norm for deck footings. Weak soil or a heavy roof load may push you wider — that is a span-table question for your plans examiner, not a guess.',
        ],
      },
      {
        heading: 'Field tips that save bags and headaches',
        list: [
          'Dig the hole an inch or two wider than the tube so you can plumb it, then backfill around the outside before pouring — an unbraced tube bows, and a bowed tube wastes concrete.',
          'Extend the tube 2 to 3 inches above finished grade so post bases stay clear of standing water and mulch.',
          'Pour in lifts and rod each one with a stick or rebar to chase out air pockets, especially below grade where you cannot see voids.',
          'Order about 10% extra — cardboard tubes are never perfectly round once they are in the ground.',
        ],
        paragraphs: [
          'Once you have your tube diameter and total depth, drop them into the concrete calculator for an exact bag count across the whole footing schedule — it beats doing cylinder math in the lumber aisle.',
        ],
      },
    ],
  },
]
