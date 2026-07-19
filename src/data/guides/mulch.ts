import type { Guide } from '../types'

// 覆盖物（mulch）相关场景指南
export const mulchGuides: Guide[] = [
  {
    slug: 'how-many-bags-mulch-flower-bed',
    title: 'How Many Bags of Mulch for a Flower Bed?',
    description:
      'Calculate bags of mulch for a flower bed — cubic feet per bag, square footage, bed depth, and the exact bag count with a simple worked example.',
    date: '2026-07-19',
    calculatorSlug: 'mulch',
    sections: [
      {
        paragraphs: [
          'I have seen bags of mulch disappear faster than expected on Saturday morning more times than I care to count. You start with what looks like a generous stack by the garage, and halfway through the front bed you are standing in the driveway, dusty and sweaty, doing mental math you should have done Thursday night.',
          'The truth is, one bag does not go far. Two cubic feet of shredded hardwood or pine bark mulch covers about 12 square feet at the 2-inch depth most flower beds want. A 3 × 10 bed is 30 square feet and eats 2.5 bags before you have even reached the shrubs. Knowing the math ahead of time is the difference between a clean Saturday and a second trip to the garden center.',
        ],
      },
      {
        heading: 'The numbers that matter',
        paragraphs: [
          'The two numbers on the bag that matter to you are cubic feet of material and recommended coverage area. Ignore the rest for now. A standard bag at the big-box store is 2 cubic feet. The coverage rule of thumb is 12 square feet per 2-cubic-foot bag at 2 inches deep; at 3 inches, that drops to about 8 square feet. And if you ever price bulk against bags, one cubic yard is 27 cubic feet — thirteen and a half bags — which is why beds bigger than about 150 square feet usually belong on a delivery truck instead of in your trunk.',
        ],
      },
      {
        heading: 'Work the bed size in square feet',
        paragraphs: [
          'Measure each flower bed as a rectangle — even if the shape wanders a little, rectangles get you close enough. A bed 4 feet wide and 12 feet long is 48 square feet. An irregular bed can be broken into rectangles: a front yard bed 12 × 3 plus a side strip 8 × 2 adds up to 36 + 16 = 52 square feet total.',
        ],
      },
      {
        heading: 'Pick your depth — then divide',
        paragraphs: [
          'Flower beds around trees and shrubs usually get mulched 2 to 3 inches deep. Any more and you risk suffocating roots and inviting rot. Here is the exact math using 2 cubic-foot bags, which is what you will find at every garden center:',
        ],
        list: [
          '48-square-foot bed at 2 inches deep: 48 ÷ 12 = 4 bags.',
          '48-square-foot bed at 3 inches deep: 48 ÷ 8 = 6 bags.',
          '52-square-foot irregular bed at 2 inches: 52 ÷ 12 = 4.3 — round up to 5 bags.',
          '52-square-foot bed at 3 inches: 52 ÷ 8 = 6.5 — round up to 7 bags.',
        ],
      },
      {
        heading: 'Why you round up',
        paragraphs: [
          'Mulch compacts after rain, settles over time, and small piles behind shrubs always need a little extra to look finished. Buying half a bag more is cheap insurance against patchy spots six weeks later. Do not buy extra just to store it in the garage — it will mold and sprout fungus if it sits in a bag all summer.',
        ],
      },
      {
        heading: 'Beds with trees in the middle',
        paragraphs: [
          'A bed centered around a tree is measured as a circle or a square, whichever is easier. A 6-foot-diameter circle is 28.3 square feet — call it 30 to be safe. At 2 inches deep, that is 3 bags. If the bed is already established and you are only topping off last year\'s layer, cut the depth in half — an inch of fresh mulch over existing material looks tidy and does not bury roots.',
        ],
      },
      {
        heading: 'Get the bag count before you leave the house',
        paragraphs: [
          'Walk the beds with a tape measure, work out your total square footage, decide on 2 or 3 inches, then let the mulch calculator turn that into an exact bag count. It is faster than standing in aisle 27 doing long division on your phone, and it saves you from the second trip that every weekend warrior eventually makes.',
        ],
      },
    ],
  },
  {
    slug: 'playground-mulch-depth',
    title: 'How Deep Should Playground Mulch Be?',
    description:
      'Playground mulch depth: the ASTM F1292 standard, how many cubic yards you need, maintenance schedules, and what happens when it compresses over time.',
    date: '2026-07-19',
    calculatorSlug: 'mulch',
    sections: [
      {
        paragraphs: [
          'Anytime I walk a site visit and see bare dirt under a swing set, I know the conversation is going to be about liability, not aesthetics. Playground mulch is not ordinary landscaping bark — it is engineered for impact absorption, and the depth requirement exists because children fall from heights, not because it looks tidy.',
          'The depth rule comes from ASTM F1292, the standard for impact attenuation of surfacing materials. For residential playsets with platforms up to 8 feet high, 9 inches of loose-fill engineered wood fiber is the accepted minimum. Public parks and commercial playgrounds with taller equipment call for 12 inches. Anything less and the material will not compress enough to absorb a fall the way the standard intends.',
        ],
      },
      {
        heading: 'Why the numbers are 9 and 12 inches',
        paragraphs: [
          'ASTM F1292 tests surfacing under a weighted headform dropped from a height. The material must absorb enough impact that the peak deceleration stays below a threshold that reduces concussion risk. Loose-fill wood fiber performs differently at different depths — under 9 inches, it compacts too quickly, transmitting more force to the head or limb. Above 12 inches, the gains level off and you are mostly wasting material.',
        ],
      },
      {
        heading: 'How much to order: a worked example',
        paragraphs: [
          'A typical residential play area is 16 × 16 feet, or 256 square feet. At 9 inches deep, convert depth to feet (0.75 ft) and multiply: 256 × 0.75 = 192 cubic feet. Because playground mulch is usually sold by the cubic yard, divide by 27: 192 ÷ 27 = 7.1 cubic yards, so you are ordering 8 yards.',
          'If the play area is 20 × 20 feet (400 square feet) and the set has a 10-foot platform, go to 12 inches: 400 × 1.0 = 400 cubic feet, which is 14.8 cubic yards — round up to 15.',
        ],
      },
      {
        heading: 'Mulch in bags versus bulk delivery',
        paragraphs: [
          'Bulk is the practical choice for anything over a couple of yards. A cubic yard of loose-fill wood fiber covers 36 square feet at 9 inches deep. By the bag, each 2-cubic-foot bag covers just 2.67 square feet at 9 inches — the same 256-square-foot play area would need 96 bags. Unless you have a pickup bed and a free afternoon, bulk delivery from a landscape supplier is the way to go.',
        ],
      },
      {
        heading: 'Compaction is real — schedule top-offs',
        paragraphs: [
          'Fresh playground mulch settles and compacts under foot traffic, weather, and time. In my experience, 9 inches of fresh material is 6 to 7 inches by the end of the first season. The fix is a maintenance schedule: rake and fluff quarterly, add 1 to 2 inches of fresh material every spring, and measure depth with a ruler before the kids start using it in warm weather. A 3-inch top-off on that 256-square-foot area is 64 cubic feet, or 2.4 cubic yards — call it 3 yards delivered.',
        ],
      },
      {
        heading: 'Borders and containment',
        paragraphs: [
          'Without a border, loose mulch wanders. Timber or commercial plastic edging holds the material in place and defines the safety zone. The safety zone should extend at least 6 feet beyond the swing arc and slide exit — do not calculate mulch just for the footprint of the set itself. A 16 × 16 area is usually the minimum; a swing set with two swings really wants a 20 × 24 footprint to keep kids landing on mulch, not turf.',
        ],
      },
      {
        heading: 'Check your numbers before the truck rolls',
        paragraphs: [
          'Before you call the landscape yard, confirm your play area dimensions, pick 9 or 12 inches based on platform height, and run it through the mulch calculator. It will give you cubic yards to the tenth so you are not guessing when the dispatcher asks how much to send.',
        ],
      },
    ],
  },
  {
    slug: 'mulch-vs-rock-landscaping',
    title: 'Mulch vs. Rock: Which Ground Cover Costs Less?',
    description:
      'Compare mulch and rock landscaping costs over 5 years — upfront price, installation labor, annual maintenance, and which saves money long-term.',
    date: '2026-07-19',
    calculatorSlug: 'mulch',
    sections: [
      {
        paragraphs: [
          'I get asked this question every spring: "Should I use mulch or rock around the house?" The honest answer is that the cheaper option depends on how long you plan to stay in the house and how much weekend labor you are willing to do. Mulch is cheap upfront and expensive over time; rock is expensive upfront and nearly free after that.',
          'If you are landscaping a rental or flipping a house, mulch wins. If you are planting roots for a decade, rock usually pays for itself somewhere between year four and year seven — sooner if you are paying a crew for the annual mulch refresh, later if you spread it yourself. Here are the real numbers.',
        ],
      },
      {
        heading: 'Material cost per square foot',
        paragraphs: [
          'Shredded hardwood mulch at the garden center runs about $3 to $5 per bag for 2 cubic feet. At a 2-inch depth, one bag covers 12 square feet, so material cost lands around $0.25 to $0.42 per square foot. Decorative landscape rock — river rock, lava rock, or crushed granite — runs $4 to $7 per half-cubic-foot bag, or $75 to $150 per cubic yard in bulk. Spread at 2 to 3 inches deep, rock lands around $1.00 to $1.75 per square foot by the time material, delivery, and the extra labor are in — that 3-to-4-times gap over mulch is real.',
          'A 200-square-foot bed in mulch: about $50 to $85 in bags. The same bed in rock: $200 to $350 before you move a shovel.',
        ],
      },
      {
        heading: 'Labor and installation',
        paragraphs: [
          'Mulch is light and forgiving — one person with a wheelbarrow can spread a bed in an afternoon. Rock is heavy, and the wheelbarrow will complain. A typical 200-square-foot mulch bed takes 2 to 3 hours to spread. The same bed in 3-inch rock takes 4 to 6 hours and usually needs a second pair of hands for the delivery and raking phase.',
          'If you are hiring out, landscapers charge roughly $50 to $100 per hour for two workers. The labor gap alone adds $100 to $300 to the rock job.',
        ],
      },
      {
        heading: 'The 5-year math',
        paragraphs: [
          'This is where the decision separates homeowners from flippers. Mulch decomposes, fades, and compacts. It needs a 1- to 2-inch top-off every spring to stay attractive and functional. Over five years, that is five refreshes at roughly half the initial material cost each time. Rock does not decompose — once it is down, the only maintenance is pulling weeds that sneak through the fabric.',
        ],
        list: [
          '200 sq ft mulch, initial: $70. Annual spring top-off — a 1-inch refresh, about half the initial material: $35 × 5 years = $175. Five-year DIY total: $245.',
          'Same bed in rock, installed: about $300. Annual maintenance: near zero. Five-year total: $300.',
          'DIY break-even lands around year 7. Pay a crew $80 to $120 for the spring refresh instead, and rock pulls ahead by year 4.',
        ],
      },
      {
        heading: 'Weed control and landscape fabric',
        paragraphs: [
          'Both mulch and rock need a weed barrier underneath if you want to stay sane. Porous landscape fabric runs $0.15 to $0.30 per square foot — add $30 to $60 for the 200-square-foot example. Skipping fabric is penny-wise and pound-foolish: without it, mulch feeds weed seeds from below and rock beds become weed gardens within two seasons.',
        ],
      },
      {
        heading: 'Plant health and heat',
        paragraphs: [
          'Mulch keeps soil cool and retains moisture — good for shrubs, perennials, and anything with roots. Rock absorbs heat during the day and radiates it at night, which can stress plants in hot climates. Around the foundation, rock can trap moisture against siding if the grade is wrong, while mulch lets water evaporate. None of this changes the cost math, but it changes where you should use each material.',
        ],
      },
      {
        heading: 'The bottom line for your yard',
        paragraphs: [
          'If you want low cost today and do not mind raking fresh mulch every spring, go with hardwood or pine bark. If you want to landscape once and forget about it, rock is the long play. Before you order either material, measure your beds accurately, pick your depth, and run the square footage through the mulch calculator — it will give you bag or cubic-yard totals for mulch, and the same area number works for your rock quote at the stone yard.',
        ],
      },
    ],
  },
]
