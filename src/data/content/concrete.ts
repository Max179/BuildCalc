import type { CalculatorContent } from '../types'

// 混凝土计算器 —— 参考实现（其余计算器按此结构补充）
export const concrete: CalculatorContent = {
  slug: 'concrete',
  name: 'Concrete Calculator',
  material: 'concrete',
  tagline: 'Cubic yards and bag counts for slabs, footings and posts.',
  icon: 'blocks',
  category: 'Masonry',
  intro:
    'Enter your slab dimensions to get the concrete volume in cubic feet and cubic yards, plus how many 60 lb or 80 lb bags you need — including an allowance for waste.',
  howToTitle: 'How to calculate how much concrete you need',
  howTo: [
    'Measure the length and width of the area in feet, and the thickness (depth) in inches. For a slab, multiply length × width × thickness to get the volume. Because thickness is measured in inches, divide it by 12 to convert it to feet before multiplying.',
    'The result is a volume in cubic feet. Concrete is usually ordered by the cubic yard, so divide cubic feet by 27 to convert. One cubic yard equals exactly 27 cubic feet.',
    'If you are using bagged concrete instead of a ready-mix truck, divide the total cubic feet by the yield of one bag: an 80 lb bag yields about 0.60 cubic feet and a 60 lb bag about 0.45 cubic feet. Always round up — you cannot buy half a bag.',
  ],
  formulaNote:
    'Volume (cu yd) = Length (ft) × Width (ft) × Thickness (in) ÷ 12 ÷ 27. Bags = Volume (cu ft) × (1 + waste %) ÷ bag yield, rounded up.',
  referenceTable: {
    title: 'Bagged concrete yield (approximate)',
    note: 'Yields are manufacturer approximations — check the bag label for exact values.',
    headers: ['Bag size', 'Yield per bag', 'Bags per cubic yard'],
    rows: [
      ['40 lb bag', '0.30 cu ft', '90'],
      ['60 lb bag', '0.45 cu ft', '60'],
      ['80 lb bag', '0.60 cu ft', '45'],
      ['90 lb bag', '0.68 cu ft', '40'],
    ],
  },
  faqs: [
    {
      q: 'How many 80 lb bags of concrete do I need for a 10×10 slab?',
      a: 'A 10×10 ft slab at 4 inches thick is about 33.3 cubic feet (1.23 cubic yards). At 0.60 cu ft per 80 lb bag that is 56 bags — or about 61 bags with a 10% waste allowance.',
    },
    {
      q: 'How many cubic yards is a 12×12 slab at 4 inches thick?',
      a: '12 × 12 × (4 ÷ 12) = 48 cubic feet, which is 48 ÷ 27 ≈ 1.78 cubic yards.',
    },
    {
      q: 'What is the difference between cubic feet and cubic yards?',
      a: 'One cubic yard equals 27 cubic feet. Ready-mix concrete is priced per cubic yard, while bag yields are listed in cubic feet.',
    },
    {
      q: 'How thick should a concrete slab be?',
      a: 'Common practice: 4 inches for patios, walkways and shed floors; 5–6 inches for driveways and garage floors that carry vehicles. Local codes and soil conditions can require more.',
    },
    {
      q: 'How much does concrete weigh?',
      a: 'Standard concrete weighs about 150 lb per cubic foot — roughly 4,050 lb (just over 2 tons) per cubic yard.',
    },
    {
      q: 'Should I order extra concrete for waste?',
      a: 'Yes. Add 5–10% to allow for spillage, uneven subgrade and over-excavation. Running short mid-pour is far more expensive than a small surplus.',
    },
    {
      q: 'What is the difference between 60 lb and 80 lb bags?',
      a: 'Only the yield: an 80 lb bag makes about 0.60 cu ft of concrete versus 0.45 cu ft for a 60 lb bag. Fewer, heavier bags are usually cheaper per cubic foot; lighter bags are easier to carry.',
    },
    {
      q: 'When should I order a ready-mix truck instead of bags?',
      a: 'A common rule of thumb: once a project exceeds about 1–2 cubic yards (roughly 45–90 bags of 80 lb concrete), a ready-mix delivery is usually cheaper and gives better quality than hand-mixing bags.',
    },
  ],
  related: ['gravel', 'tile', 'paint'],
  guideSlug: 'how-to-measure-concrete-for-a-patio',
  buyLinks: [
    {
      label: '80 lb Concrete Mix',
      note: '≈ $5–7 per bag · 0.60 cu ft yield',
      url: 'https://www.amazon.com/s?k=80+lb+concrete+mix',
    },
    {
      label: 'Fast-Setting Concrete Mix',
      note: 'Best for fence & deck posts',
      url: 'https://www.amazon.com/s?k=fast+setting+concrete+mix+50+lb',
    },
    {
      label: 'Concrete Mixing Tub',
      note: '≈ $10–15 · reusable',
      url: 'https://www.amazon.com/s?k=concrete+mixing+tub',
    },
  ],
}
