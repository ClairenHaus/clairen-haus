/* PROSPECT DATA: the only file to edit for a new prospect.
   Copy this whole folder to /p/<firm>-<6 random chars>/, edit the values below,
   and replace the three images in img/ (same file names). Values written as
   "[LIKE THIS]" show highlighted on the agreement page as blanks still to fill. */
window.PROSPECT = {
  "firmName": "Law Office of Gay E. Gilson",
  "attn": "Gay E. Gilson",
  "firstName": "Gay",
  "city": "Corpus Christi, TX",
  "currentDomain": "gilsonlaw.com",
  "currentUrl": "https://gilsonlaw.com/",
  "previewUrl": "https://clairenhaus.com/previews/law-office-of-gay-e-gilson/",
  "checkedDate": "October 14, 2026",
  "images": {
    "beforeAfterDesktop": "before-after-desktop",
    "beforeAfterPhone": "before-after-phone",
    "beforeAfterAlt": "Side by side: gilsonlaw.com today, and the new Law Office of Gay E. Gilson site"
  },
  "findings": [
    {
      "title": "Hard to read on a phone",
      "body": "The site has no mobile setup, so a phone shows the full 980-pixel-wide desktop page shrunk to fit the screen. On an iPhone everything appears at about 40% of its normal size, so the 14-pixel body text shows at under 6 pixels, and visitors have to pinch and zoom to read a practice area or find your number. Your new site is built for phones first and reflows to any screen."
    },
    {
      "title": "Your phone number can’t be tapped",
      "body": "(361) 887-0552 appears at the top of every page and again on the home and contact pages, but always as plain text: none of the site’s 20 pages has a tap-to-call link, so someone on a phone has to copy the number or type it in. On your new site every phone number and email address opens the phone or mail app with one tap, and a Call button is on every page."
    },
    {
      "title": "Hidden town lists that Google calls keyword stuffing",
      "body": "Fifteen of your 20 pages, including the home page and nearly every practice page, end with a list of 49 South Texas town names, from San Antonio and Laredo to Port Aransas and Padre Island, set in white text on the white background. Visitors can’t see it, but search engines read it. Google’s spam policies name hidden text and blocks of city names a page is trying to rank for as keyword stuffing, and say pages that use it can rank lower or drop out of results altogether. Your new site has no hidden text: each page has one clear, visible heading, and your service area is stated plainly, Corpus Christi and south and central Texas.",
      "image": {
        "name": "hidden-text",
        "width": 1100,
        "height": 472,
        "alt": "The home page of gilsonlaw.com as visitors see it, beside the same spot with its white-on-white town list highlighted",
        "caption": "Your home page as visitors see it (left), and the same spot with the hidden white text highlighted (right). Checked October 14, 2026."
      }
    },
    {
      "title": "Most of your practice pages aren’t in the menu",
      "body": "You have detailed pages on 14 areas of employment law, but the menu links to only one of them, Veteran Employment Issues. The other 13, from Age Discrimination to Whistleblower Protections, can be reached only from the list on the home page, so a visitor reading your Contact or About page has no way to get to them. Your new site has a Practice Areas page grouping all 14, and every practice page links to the related ones."
    },
    {
      "title": "Nothing tells Google or AI who you are",
      "body": "None of the site’s pages carries structured data, the behind-the-scenes labels that tell search engines and AI assistants your address, phone, practice areas and credentials. Your new site carries all of it on every page, plus nine FAQs written only from facts on your own site, such as your free telephone consultation, the courts you appear in and why employees shouldn’t email you from work."
    },
    {
      "title": "The footer still says 2011",
      "body": "Your practice pages are clearly kept current, but every page still ends with “Copyright 2011”, the web addresses are long strings of words joined by underscores (the Job Accommodation Network page’s runs to 62 characters), and the menu spells that page’s full name out as a menu item. To someone checking you out it can read as a site nobody looks after, which undersells the work in your content. Your new site has short, readable addresses and a current footer."
    }
  ],
  "agreement": {
    "firmLegalName": "Law Office of Gay E. Gilson",
    "firmAddress": "5525 S. Staples St., Suite B3, Corpus Christi, TX 78411",
    "domain": "gilsonlaw.com",
    "clientEmail": "gegilson@gilsonlaw.com",
    "pageLimit": "21",
    "paymentMethod": "card or bank payment through Stripe",
    "hourlyRate": "$125 per hour",
    "pauseDays": "30",
    "handoverDays": "14",
    "liabilityMonths": "3",
    "governingState": "Georgia",
    "clairenTitle": "Founder"
  }
};
