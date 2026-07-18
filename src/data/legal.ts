import type { LegalPage } from './types'

// 合规页面内容 —— 隐私政策 / 使用条款 / 关于 / 联系
export const legalPages: Record<'privacy' | 'terms' | 'about' | 'contact', LegalPage> = {
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
}
