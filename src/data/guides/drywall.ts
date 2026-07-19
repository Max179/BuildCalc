import type { Guide } from '../types'

// 石膏板相关场景指南
export const drywallGuides: Guide[] = [
  {
    slug: 'drywall-sheets-12x12-room',
    title: 'How Many Sheets of Drywall for a 12x12 Room?',
    description:
      'How many sheets of drywall does a 12x12 room with 8-foot ceilings take? Full math for 4x8 and 4x12 board, plus the rest of the order.',
    date: '2026-07-19',
    calculatorSlug: 'drywall',
    sections: [
      {
        paragraphs: [
          'Twelve by twelve is America\'s default bedroom, home office, and nursery — and the first room most people ever hang drywall in. The question sounds simple: how many sheets? The honest answer depends on whether you count the ceiling, how you hang the walls, and how realistic you are about your own cutting skills.',
          'Here is the math a contractor runs, worked out on a real 12x12 room with 8-foot ceilings, plus the board-size decision that can cut your finishing work by a third.',
        ],
      },
      {
        heading: 'Start with total square footage',
        paragraphs: [
          'The walls: a 12x12 room has a 48-foot perimeter, and times 8 feet of ceiling height that is 384 square feet. The ceiling adds 144 more, for 528 square feet of board. A 4x8 sheet covers 32 square feet, so the raw math says 528 ÷ 32 = 16.5 sheets.',
          'Now the adjustments. Subtract a 3x7 door (21 square feet) and a typical 3x5 window (15 square feet) and you are down about one sheet — call it 15. Add a 10 percent cutting allowance and you are back near 16. In practice, pros order 14 to 15 sheets of 4x8 for this room, because offcuts from the door and window cutouts get used above and below the openings. First time hanging? Buy 15 and consider the spare your tuition.',
        ],
      },
      {
        heading: 'The 4x12 option: fewer seams, heavier sheets',
        paragraphs: [
          'A 4x12 sheet covers 48 square feet, and hung horizontally it spans a full 12-foot wall with no butt joint — the seam every finisher hates most. Walls take eight sheets (two 4-foot courses around the 48-foot perimeter), the ceiling takes three, and 11 sheets of 4x12 covers the whole room with nearly every seam a factory tapered edge. Your taping footage drops by roughly a third.',
          'The catch: a 1/2-inch 4x12 weighs about 80 pounds and turns corners like a sofa. Working solo, or carrying board up a flight of stairs, 4x8s at roughly 54 pounds are the back-friendly call. Many crews mix — 4x12s on the walls where seams show, 4x8s overhead.',
        ],
      },
      {
        heading: 'Ceilings: thickness matters',
        paragraphs: [
          'On 16-inch-on-center ceiling joists, 1/2-inch board rated for ceilings is acceptable, but 5/8-inch is stiffer, sags less, and deadens sound from the floor above — worth the few extra dollars per sheet over a bedroom. On 24-inch joist spacing, or under any ceiling getting sprayed texture, 5/8 is effectively mandatory.',
          'Rent a panel lift for the ceiling. It runs about $40 a day, holds the sheet dead flat against the joists while you screw, and turns a two-person wrestling match into a one-person screw pattern.',
        ],
      },
      {
        heading: 'The rest of the order',
        list: [
          'Screws: about 30 per 4x8 sheet — 1-1/4 or 1-5/8-inch coarse thread for wood studs. A room this size wants a 5-pound box.',
          'Joint compound: figure 0.05 gallons per sheet — roughly three-quarters of a gallon for the room. Buy the 4.5-gallon bucket anyway; first-timers run heavy, and leftover mud keeps for the next room.',
          'Tape: one 500-foot roll of paper tape covers about 16 sheets — one roll does this room with margin.',
          'Corner bead: one 8-foot stick for every outside corner — count closet bump-outs and soffits.',
          'Primer: a gallon of PVA drywall primer per 400 square feet before paint, or your finish coats will flash under raking light.',
        ],
      },
      {
        heading: 'Hang order that saves finishing time',
        paragraphs: [
          'Ceiling first, then the upper wall course, then the lower course — factory edges meeting at the tapered seam, cut edges buried against the floor where baseboard hides them. Stagger the butt joints so no two line up across the room, and keep screws 3/8 inch in from the edges so the paper does not tear out.',
          'If your room is not a perfect 12x12 — few are — measure each wall and the ceiling and drop the dimensions into the drywall calculator. It converts real measurements into sheet counts for 4x8, 4x10, and 4x12 board with waste built in, so you order once and hang straight through.',
        ],
      },
    ],
  },
  {
    slug: 'basement-drywall-estimate',
    title: 'How Much Drywall for a Basement?',
    description:
      'Estimate drywall for a basement finish the way subs do: linear-foot wall math, mold-resistant board, soffits, code notes, and real costs.',
    date: '2026-07-19',
    calculatorSlug: 'drywall',
    sections: [
      {
        paragraphs: [
          'Finishing a basement is the cheapest square footage in American real estate — but it is also where drywall estimates go wrong. Homeowners take the floor area, divide by 32, and order half the board they actually need, because a basement is not one room. It is perimeter walls, partitions that eat board on both faces, a ceiling full of mechanicals, and a stairwell that laughs at 4x8 sheets.',
          'Here is how to estimate a basement the way a drywall sub does it: wall by wall, in linear feet, with below-grade board choices baked in from the start.',
        ],
      },
      {
        heading: 'Measure walls in linear feet, not floor area',
        paragraphs: [
          'Take a 25 by 30 foot basement — 750 square feet of floor — with 8-foot ceilings. The perimeter is 110 linear feet; at 8 feet tall, that is 880 square feet of board on the outside walls alone. Add a 15-foot partition carving out a bedroom and it takes board on both faces: 15 × 8 × 2 = 240 square feet. The ceiling, if you are drywalling it instead of dropping in tiles, adds 750 more.',
          'Total: 1,870 square feet of drywall from a 750-square-foot floor — two and a half times the floor area. That is 59 sheets of 4x8 before waste, and about 65 with the standard 10 percent allowance. In 4x12s at 48 square feet each, the same job takes 39 sheets, or about 43 with waste. Write the ratio down: finished basements run 2 to 2.5 square feet of board per square foot of floor, and more if you add lots of small rooms.',
        ],
      },
      {
        heading: 'Below grade means different board',
        paragraphs: [
          'Standard white-board drywall has no business touching a basement wall. Basements are the mold capital of the house, so spend the extra two or three dollars a sheet on mold-resistant board — the purple and paperless lines — at minimum on the perimeter walls and anywhere near a bathroom or wet bar. Keep every sheet a half inch off the slab; concrete wicks moisture, and drywall that touches it will drink it.',
          'Framing against foundation walls should stand on pressure-treated bottom plates, with foam board or the vapor strategy your local code requires behind it. Drywall is the last step of moisture management, not the first.',
        ],
      },
      {
        heading: 'Ceilings and code change the count',
        paragraphs: [
          'A drywalled basement ceiling is a maze of soffits around ductwork, beams, and drain lines, and every boxed soffit adds board on three faces. Budget an extra 8 to 10 sheets for soffits in a typical basement, and run 5/8-inch board overhead for sag resistance and sound control. If any part of the basement sits under a garage, code usually demands 5/8-inch Type X for fire separation — no substitutions.',
          'Do not subtract much for openings: basement windows are small, and the door cutouts you remove get spent on soffit returns anyway. Leave cleanouts and shutoff valves behind removable access panels instead of drywalled holes — your future self will send thanks.',
        ],
      },
      {
        heading: 'Budget checkpoints before the truck arrives',
        list: [
          'Material: 1/2-inch board runs about $12 to $16 a sheet; mold-resistant and 5/8-inch run higher. A 65-sheet basement is roughly a $900 to $1,200 board order plus mud, tape, screws, and bead.',
          'Delivery: pay the $75 to $125 for boom or carry-in service. Basements and driveway-only drop-offs do not mix.',
          'Panel lift: a mandatory rental for the ceiling, about $40 a day.',
          'Professional hang-and-finish runs $1.50 to $3.00 per square foot of board if you decide 1,870 square feet is someone else\'s problem.',
          'Order the 10 percent. A basement always has one more corner than the drawing shows.',
        ],
      },
      {
        heading: 'Put a number on your own basement',
        paragraphs: [
          'Every basement is a different animal — walk yours with a tape, write down each wall run, partition, and soffit, and note the ceiling height at the lowest duct. Twenty minutes with a notepad beats two extra delivery trips.',
          'Feed those real dimensions into the drywall calculator and it turns linear feet and ceiling area into sheet counts at 4x8, 4x10, or 4x12 with waste included — the same numbers your supplier needs to load the order.',
        ],
      },
    ],
  },
  {
    slug: 'drywall-mud-tape-estimate',
    title: 'How Much Joint Compound and Tape Per Sheet?',
    description:
      'How much joint compound and tape per sheet of drywall? Trade rules of thumb, three-coat product picks, and a full room shopping list.',
    date: '2026-07-19',
    calculatorSlug: 'drywall',
    sections: [
      {
        paragraphs: [
          'Ask a drywaller what separates a $500 room from a $900 room and he will not say the board — board is cheap. The labor and the money live in the finishing: three coats of joint compound, a roll of tape, and the sanding nobody warns you about. Estimate mud and tape wrong and you are either making a mid-job run to the store or storing half a bucket until it skins over.',
          'The good news is that finishing materials scale predictably with sheet count. Here are the per-sheet numbers the trade uses, and what they mean for a real room.',
        ],
      },
      {
        heading: 'The per-sheet rules of thumb',
        paragraphs: [
          'For tight, professional hanging, figure about 0.05 gallons of joint compound per 4x8 sheet across the taping and finish coats — the number most estimators carry in their head. Tape runs about 30 to 35 linear feet per sheet once you count tapered seams, butt joints, and inside corners, which is why the trade rule says one 500-foot roll of paper tape per 16 sheets of board.',
          'Screws are simpler: roughly 30 per sheet at 16-inch stud spacing. And if you are a first-timer who hangs loose and floats wide — most first-timers do — take the mud number and double it. Compound hides a multitude of sins, and beginners commit them all.',
        ],
      },
      {
        heading: 'What that means for a 12x12 room',
        paragraphs: [
          'A 12x12 bedroom with 8-foot ceilings takes about 15 sheets of 4x8 board. The shopping list writes itself: 15 × 0.05 = 0.75 gallons of compound for pro-style work, or about 1.5 gallons if you finish like the rest of us. Since compound comes in 1-gallon pails and 4.5-gallon buckets, buy the bucket — it covers this room plus the inevitable patch work, and the per-gallon price beats pails by half.',
          'Tape: one 500-foot roll covers the room\'s roughly 470 feet of seam with margin. Screws: about 450 of them, and a 5-pound box of 1-5/8-inch coarse-thread drywall screws is the right buy — running out at sheet twelve is a special kind of frustration.',
        ],
      },
      {
        heading: 'Three coats, three different products',
        paragraphs: [
          'Pros do not use one mud for everything. Gaps over 1/8 inch, prefilling, and setting corner bead get setting-type compound — hot mud — in 20, 45, or 90-minute working times. It hardens chemically instead of air-drying, so it will not shrink or crack in thick fills. Start with 45 or 90; 20-minute mud punishes hesitation.',
          'The tape coat goes on with all-purpose ready-mix — it has the glue to hold tape and the body to fill the taper. Finish coats switch to lightweight topping compound, which spreads thinner, shrinks less, and sands like a dream. You can do a whole room with one bucket of all-purpose in a pinch, but the sand-out will tell on you.',
        ],
      },
      {
        heading: 'The consumables everyone forgets',
        list: [
          'Corner bead: one stick per outside corner, in 8-foot or 10-foot lengths — count closets, soffits, and window returns.',
          'Mesh tape is for repairs and hot mud only; paper tape with ready-mix is stronger and cheaper for full rooms.',
          'Sanding: 150 to 220-grit paper or sponges, plus a pole sander — hand-sanding a ceiling is a character-building exercise.',
          'Dust control: plastic sheeting, a box fan in the window, and a respirator. Drywall dust goes everywhere, including the HVAC.',
          'Primer: one gallon of PVA per 400 square feet. Skipping it means flashing — dull patches where mud meets paper under every raking light.',
        ],
      },
      {
        heading: 'Why pros use less mud than you',
        paragraphs: [
          'Tight hanging is the whole secret. A pro\'s sheets meet edge-to-edge with 1/16-inch gaps, so compound fills seams instead of hiding sins. Every eighth-inch of gap you leave is mud you mix, spread, and sand twice. Hang tighter, buy less.',
          'Get your sheet count first, because everything above multiplies off it. Drop your room dimensions into the drywall calculator, and it hands you the board count to plug into these per-sheet rules — mud, tape, screws, and all.',
        ],
      },
    ],
  },
]
