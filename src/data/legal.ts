import type { LegalPage } from './types'

// 合规页面内容 —— 隐私政策 / 使用条款 / 关于 / 联系 / 联盟披露
export const legalPages: Record<'privacy' | 'terms' | 'about' | 'contact' | 'affiliate', LegalPage> = {
  privacy: {
    page: 'privacy',
    title: 'Privacy Policy',
    description:
      'How BuildCalc handles your data: no input collection, cookie use, Google AdSense advertising cookies, analytics, and how to contact us.',
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'BuildCalc ("we," "our," or "the site") is a free collection of construction material calculators. This Privacy Policy explains what information is and is not collected when you use the site, how cookies are used, and the choices you have. By using BuildCalc, you agree to the practices described here.',
          'This policy was last updated in January 2026. If we make material changes, we will update this page.',
        ],
      },
      {
        heading: 'Information We Do Not Collect',
        paragraphs: [
          'BuildCalc runs entirely in your browser. Every calculation you perform — dimensions, quantities, costs, and any other numbers you enter — is processed locally on your device. Your calculator inputs are never transmitted to, stored on, or logged by our servers.',
          'We do not require an account, and we do not ask for your name, email address, phone number, or any other personal information in order to use the calculators. If you choose to email us, we will have the contact details you include in that message and will use them only to respond to you.',
        ],
      },
      {
        heading: 'Cookies',
        paragraphs: [
          'Cookies are small text files placed on your device by websites. BuildCalc itself does not set first-party cookies for tracking or identification purposes. However, third-party services used on the site — described below — may set or read cookies on your device subject to their own privacy policies.',
          'You can control or delete cookies at any time through your browser settings. Disabling cookies will not affect the core functionality of the calculators.',
        ],
      },
      {
        heading: 'Third-Party Advertising (Google AdSense)',
        paragraphs: [
          'We use Google AdSense to display advertisements on BuildCalc. Google and its advertising partners use cookies — including the DoubleClick cookie — to serve ads based on your prior visits to this site and other sites on the internet. This is known as personalized or interest-based advertising.',
          'Third-party vendors, including Google, use cookies to serve ads based on your prior visits to this website or other websites. Google\'s use of advertising cookies enables it and its partners to serve ads to you based on your visit to this site and/or other sites on the internet. BuildCalc does not control and is not responsible for the data practices of these third-party vendors; their use of information is governed by their own privacy policies.',
        ],
      },
      {
        heading: 'Your Choices: Opting Out of Personalized Ads',
        paragraphs: [
          'You may opt out of personalized advertising by visiting Google\'s Ads Settings at adssettings.google.com. You can also opt out of many third-party vendors\' use of cookies for personalized advertising by visiting www.aboutads.info/choices.',
          'Opting out will not stop ads from appearing; it means the ads you see will be generic rather than tailored to your browsing history.',
        ],
      },
      {
        heading: 'Analytics',
        paragraphs: [
          'We use Cloudflare Web Analytics to understand aggregate traffic patterns — such as which pages are visited and how the site performs. Cloudflare Web Analytics is privacy-focused: it does not use cookies, does not track individual users across sites, and does not collect personal identifiers. The data we see is aggregated and anonymous.',
        ],
      },
      {
        heading: 'Contact Us',
        paragraphs: [
          'If you have questions about this Privacy Policy or the site\'s data practices, contact us at hello@buildcalc.pages.dev.',
        ],
      },
    ],
  },
  terms: {
    page: 'terms',
    title: 'Terms of Use',
    description:
      'The terms for using BuildCalc: estimates are for reference only, verify before you buy, no warranties, liability limits, and content rights.',
    sections: [
      {
        heading: 'Acceptance of Terms',
        paragraphs: [
          'By accessing or using BuildCalc, you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, please do not use the site. We may update these terms from time to time, and continued use of the site after changes are posted constitutes acceptance of the revised terms.',
        ],
      },
      {
        heading: 'Estimates Are for Reference Only',
        paragraphs: [
          'BuildCalc provides material quantity estimates for planning and budgeting purposes. Results are mathematical estimates based on the values you enter and on common industry assumptions — standard coverage rates, typical waste allowances, and nominal product yields. Actual material requirements for your project may differ due to site conditions, product variations, building codes, and installation methods.',
          'The calculators do not account for every variable in a real construction project, and results should not be treated as engineering advice, structural guidance, or a substitute for a professional quote.',
        ],
      },
      {
        heading: 'Verify Before You Purchase',
        paragraphs: [
          'You are solely responsible for verifying all quantities, dimensions, product specifications, and local building code requirements before purchasing materials or beginning work. Confirm coverage rates and yields on the actual product labels, and consult a qualified contractor or supplier for projects where accuracy is critical. BuildCalc is not responsible for material shortages, over-purchases, or project outcomes resulting from reliance on the site\'s estimates.',
        ],
      },
      {
        heading: 'No Warranties',
        paragraphs: [
          'The site and its calculators are provided "as is" and "as available," without warranties of any kind, express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, accuracy, and non-infringement. We do not warrant that the site will be uninterrupted, error-free, or free of harmful components.',
        ],
      },
      {
        heading: 'Limitation of Liability',
        paragraphs: [
          'To the fullest extent permitted by law, BuildCalc and its operator shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or related to your use of, or inability to use, the site — including but not limited to costs of materials, project delays, or reliance on calculation results. Your sole remedy for dissatisfaction with the site is to stop using it.',
        ],
      },
      {
        heading: 'Intellectual Property',
        paragraphs: [
          'All content on BuildCalc — including text, calculator logic, design, and branding — is the property of the site operator and is protected by copyright and other intellectual property laws. You may use the calculators and read the guides for personal, non-commercial purposes. You may not reproduce, republish, or redistribute the site\'s content in bulk without prior written permission.',
        ],
      },
    ],
  },
  about: {
    page: 'about',
    title: 'About BuildCalc',
    description:
      'BuildCalc is a free set of construction material calculators with transparent formulas that run entirely in your browser.',
    sections: [
      {
        heading: 'What BuildCalc Is',
        paragraphs: [
          'BuildCalc is a free collection of construction and renovation material calculators built for homeowners, DIYers, and small contractors in the United States. Whether you are pouring a patio, painting a bedroom, or flooring a basement, the goal is the same: give you a fast, reliable quantity estimate before you spend a dollar at the lumberyard or big-box store.',
          'Every calculator is paired with plain-English explanations and measurement guides, so you are not just getting a number — you are learning how the number is built.',
        ],
      },
      {
        heading: 'Transparent Formulas, No Black Boxes',
        paragraphs: [
          'We believe an estimate you cannot inspect is an estimate you cannot trust. Each calculator on BuildCalc shows the formula it uses, the assumptions behind it — coverage rates, bag yields, waste allowances — and worked examples you can check with a pencil. If you disagree with an assumption, you can adjust your inputs or allowances and see exactly how the result changes.',
          'Our formulas follow common industry conventions: cubic feet divided by 27 for concrete yardage, 350–400 square feet per gallon for paint coverage, 10–15% waste factors for flooring, and so on. Where products vary, we say so and tell you to check the label.',
        ],
      },
      {
        heading: 'Private by Design',
        paragraphs: [
          'BuildCalc is a purely client-side website. All calculations happen in your browser, on your device. Nothing you type into a calculator is uploaded, stored, or logged anywhere. There are no accounts, no sign-ups, and no paywalls — the tools are simply there when you need them.',
          'The site is supported by advertising, which keeps every calculator free to use.',
        ],
      },
      {
        heading: 'A Work in Progress',
        paragraphs: [
          'We add calculators and improve existing ones over time. If a formula looks wrong, a yield seems off, or there is a calculator you wish existed, we genuinely want to hear about it — real-world feedback from people mid-project is how the site gets better.',
        ],
      },
      {
        heading: 'Our Editorial Process',
        paragraphs: [
          'Every calculator and review on BuildCalc follows a consistent editorial workflow. We start with industry-standard formulas and manufacturer specifications, cross-check coverage rates against multiple product labels, and verify worked examples by hand. Content is drafted by our editorial team, then reviewed by a second editor for accuracy and clarity before publication.',
          'For product reviews, we research the most popular options in each category, analyze specification sheets, and study verified purchase reviews across major retailers. We score products on quality, value, and suitability for typical DIY projects. Manufacturers do not pay for placement, and they never see our content before it is published. Read our full Affiliate Disclosure for details on how we earn money.',
          'We revisit and update content regularly. Every page shows its last-updated date so you can judge freshness for yourself.',
        ],
      },
      {
        heading: 'Photo Credits',
        paragraphs: [
          'The photography on this site comes from openly licensed Creative Commons collections (Wikimedia Commons and Flickr, via the Openverse catalog). We are grateful to the creators below for sharing their work.',
          'Wood-framed house by Jaksmata, CC BY-SA 3.0 (creativecommons.org/licenses/by-sa/3.0), via Wikimedia Commons. Concrete pour by MTA C&D - East Side Access, CC BY 2.0, via Flickr. Indoor painting supplies by David Mulder, CC BY-SA 2.0, via Wikimedia Commons. Laminate installation by Lee J Haywood, CC BY-SA 2.0, via Flickr. Mulch Mania by terren in Virginia, CC BY 2.0, via Flickr. Gravel driveway base by sebilden, CC BY 2.0, via Flickr. Drywall installation by OlgerFallasPainting, CC BY-SA 2.0, via Flickr. Tile work by MrVJTod, CC BY-SA 2.0, via Flickr. Roof install by joncallas, CC BY 2.0, via Flickr. Measuring tapes by chimpwithcan, CC BY 2.0, via Flickr.',
        ],
      },
      {
        heading: 'Contact',
        paragraphs: [
          'Reach us any time at hello@buildcalc.pages.dev. We read every message and typically reply within 2–3 business days.',
        ],
      },
    ],
  },
  contact: {
    page: 'contact',
    title: 'Contact Us',
    description:
      'Get in touch with the BuildCalc team by email — questions, corrections, and new calculator requests are welcome.',
    sections: [
      {
        heading: 'Email Us',
        paragraphs: [
          'The best and only way to reach BuildCalc is by email at hello@buildcalc.pages.dev. There is no phone line and no contact form — a short email with your question is all it takes.',
        ],
      },
      {
        heading: 'Response Time',
        paragraphs: [
          'We aim to reply within 2–3 business days. Messages sent on weekends or U.S. holidays are answered the following business days. BuildCalc is a small operation, so we appreciate your patience if a reply takes a little longer during busy stretches.',
        ],
      },
      {
        heading: 'Corrections and Feedback Are Welcome',
        paragraphs: [
          'Spotted a math error, an outdated coverage rate, or a typo in one of the guides? Tell us. Found a calculator result that does not match what the product label says? We want to know. User corrections are one of the main ways the site stays accurate, and every report is reviewed by a human.',
          'Requests for new calculators and guides are also welcome — if enough people ask for the same tool, it goes on the build list.',
        ],
      },
      {
        heading: 'What to Include in Your Message',
        paragraphs: [
          'To help us help you quickly, mention which calculator or page you are writing about, the values you entered, and the result you expected versus what you saw. Screenshots are welcome but not required. Please do not include sensitive personal information — we do not need it to answer your question.',
        ],
      },
    ],
  },
  affiliate: {
    page: 'affiliate',
    title: 'Affiliate Disclosure',
    description:
      'How BuildCalc earns money through affiliate links: our editorial independence, the programs we participate in, and how we test and score products.',
    sections: [
      {
        heading: 'Our Commitment to You',
        paragraphs: [
          'BuildCalc is free to use, and we intend to keep it that way. To support the site, we participate in affiliate marketing programs. This means that when you click certain links on our site and make a purchase, we may earn a commission — at no additional cost to you.',
          'We believe transparency builds trust. This page explains exactly how affiliate relationships work on BuildCalc, which programs we participate in, and how we keep our recommendations honest.',
        ],
      },
      {
        heading: 'Affiliate Programs We Participate In',
        paragraphs: [
          'BuildCalc is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. As an Amazon Associate, we earn from qualifying purchases.',
          'We may also link to other retailers such as Home Depot and Lowe\'s. Where those links are part of an affiliate program, we earn a commission on qualifying purchases.',
        ],
      },
      {
        heading: 'How Affiliate Links Work on BuildCalc',
        paragraphs: [
          'Affiliate links appear primarily in our product reviews, buying guides, and "Where to Buy" sections. They are marked with a sponsored or nofollow attribute, and we display a disclosure notice on every page that contains them.',
          'Prices shown on our site are approximate and were accurate at the time of publication. Prices change frequently — always check the retailer\'s website for the current price. We are not responsible for price differences between our site and the retailer.',
        ],
      },
      {
        heading: 'Editorial Independence',
        paragraphs: [
          'Our product recommendations are based on independent research, hands-on evaluation of specifications and user feedback, and comparisons of features, durability, and value. Manufacturers and retailers do not pay for placement in our reviews, and they do not see our content before it is published.',
          'A product\'s ranking on BuildCalc is never influenced by the commission rate it offers. If a cheaper product is the better choice for most people, we say so — even if a more expensive alternative would earn us more.',
        ],
      },
      {
        heading: 'How We Test and Score Products',
        paragraphs: [
          'For each product category, we research the most popular and highest-rated options, analyze specifications from manufacturer documentation, and study verified purchase reviews from multiple retailers. We score products on a five-point scale considering quality, value, ease of use, and suitability for typical DIY projects.',
          'Our "Top Pick" is the product we would buy ourselves for the most common use case. "Best Value" is our pick for budget-conscious buyers. Other badges highlight products that excel in specific scenarios.',
        ],
      },
      {
        heading: 'Advertising',
        paragraphs: [
          'In addition to affiliate links, BuildCalc displays advertising through Google AdSense. Advertisers do not influence our editorial content, and advertising is clearly distinguished from our recommendations.',
        ],
      },
      {
        heading: 'Questions',
        paragraphs: [
          'If you have questions about our affiliate relationships or how we make money, contact us at hello@buildcalc-tools.pages.dev.',
        ],
      },
    ],
  },
}
