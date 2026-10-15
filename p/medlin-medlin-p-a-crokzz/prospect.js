/* PROSPECT DATA: the only file to edit for a new prospect.
   Copy this whole folder to /p/<firm>-<6 random chars>/, edit the values below,
   and replace the three images in img/ (same file names). Values written as
   "[LIKE THIS]" show highlighted on the agreement page as blanks still to fill. */
window.PROSPECT = {
  "firmName": "Medlin & Medlin",
  "attn": "Steve L. Medlin",
  "firstName": "Steve",
  "city": "Concord, NC",
  "currentDomain": "stevemedlinlaw.com",
  "currentUrl": "https://www.stevemedlinlaw.com/",
  "previewUrl": "https://clairenhaus.com/previews/medlin-medlin-p-a/",
  "checkedDate": "October 14, 2026",
  "images": {
    "beforeAfterDesktop": "before-after-desktop",
    "beforeAfterPhone": "before-after-phone",
    "beforeAfterAlt": "Side by side: stevemedlinlaw.com today, and the new Medlin & Medlin site"
  },
  "findings": [
    {
      "title": "On a phone, the whole site shrinks to about a third of its size",
      "body": "Your site tells phones to lay the page out 1,150 pixels wide, so an iPhone squeezes the entire desktop page onto its screen at about a third of its size. Body text that is a normal 16 pixels on a computer shows at roughly 5 pixels, and visitors have to pinch and zoom to read about your estate planning or estate settlement work. Your new site is built for phones first and reflows to any screen.",
      "image": {
        "name": "phone-text",
        "width": 980,
        "height": 655,
        "alt": "The Estate Settlement page of stevemedlinlaw.com on a phone, beside the same page on the new site",
        "caption": "Your Estate Settlement page on the same phone: today on the left, your new site on the right."
      }
    },
    {
      "title": "Page titles packed with keywords, and hidden copies of your text",
      "body": "Your homepage title is a string of search terms: “estate planning | estate settlement | business contracts | incorporations | lawyer | attorney | Concord NC | Medlin & Medlin, PA”. Each practice page does the same, with typos Google shows in results (“tursts” on Estate Planning, “legale agreements” on Business Contracts). The Estate Settlement and Incorporations pages also carry a second copy of their full text inside a box 1 pixel wide, where visitors can’t see it. Google’s spam policies name keyword stuffing and hidden text, and say they can make a page rank lower or drop out of results altogether. Your new site gives every page one clear, natural title and description, with all text visible."
    },
    {
      "title": "Your experience is undersold",
      "body": "Your homepage says the firm was founded in 1953 and that you have practiced with it since 1977. But your practice pages still say “nearly 40 years of law practice”, the Incorporations page says “my 37 years”, and the search description Google shows says “over 40 years”. The Seminars page lists nothing after January 2015, and the footer still reads “Copyright 2013”. Your new site states the facts once (founded 1953, with the firm since 1977), so the numbers never go stale, and shows your Chief Justice’s Professionalism Certificate and 2023 Liberty Bell Award up front."
    },
    {
      "title": "Your phone number isn’t a call link",
      "body": "(704) 786-8173 sits in the header of every page as plain text, with no tap-to-call link anywhere on the site, and your email address appears only on the Contact page. On your new site the number and email open the phone or mail app with one tap on every page, and the call button is always in the menu."
    },
    {
      "title": "Search engines and AI get little to work with",
      "body": "Half of your 14 pages have an empty page description, and the Community page is titled “Aboutforum”, a leftover template name. There is no structured data (the behind-the-scenes labels that tell Google and AI assistants your address, phone, attorney and practice areas), no sitemap, and its pages try to load several template files that no longer exist on the server. Your new site labels your office, phone, background and practice areas on every page, ships with a sitemap, and includes 12 FAQs answered only from facts on your own site."
    }
  ],
  "agreement": {
    "firmLegalName": "Medlin & Medlin, P.A.",
    "firmAddress": "43 Union Street South, Concord, NC 28025",
    "domain": "stevemedlinlaw.com",
    "clientEmail": "info@stevemedlinlaw.com",
    "pageLimit": "11",
    "paymentMethod": "card or bank payment through Stripe",
    "hourlyRate": "$125 per hour",
    "pauseDays": "30",
    "handoverDays": "14",
    "liabilityMonths": "3",
    "governingState": "Georgia",
    "clairenTitle": "Founder"
  }
};
