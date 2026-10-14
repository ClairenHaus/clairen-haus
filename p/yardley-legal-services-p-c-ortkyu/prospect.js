/* PROSPECT DATA: the only file to edit for a new prospect.
   Copy this whole folder to /p/<firm>-<6 random chars>/, edit the values below,
   and replace the three images in img/ (same file names). Values written as
   "[LIKE THIS]" show highlighted on the agreement page as blanks still to fill. */
window.PROSPECT = {
  "firmName": "Yardley Legal Services, P.C.",
  "attn": "David R. Bane",
  "firstName": "David",
  "city": "Yardley, PA",
  "currentDomain": "yardleylegal.com",
  "currentUrl": "https://www.yardleylegal.com/",
  "previewUrl": "https://clairenhaus.com/previews/yardley-legal-services-p-c/",
  "checkedDate": "October 14, 2026",
  "images": {
    "beforeAfterDesktop": "before-after-desktop",
    "beforeAfterPhone": "before-after-phone",
    "beforeAfterAlt": "Side by side: yardleylegal.com today, and the new site for Yardley Legal Services, P.C."
  },
  "findings": [
    {
      "title": "A “Lorem ipsum” placeholder page is still published",
      "body": "yardleylegal.com/services.html is still online, titled “Services - Yardley Legal Services, P.C.”, and its only text is the website builder’s sample paragraph, “Lorem ipsum dolor sit amet…”. It isn’t in your menu, but your sitemap, the list your site hands Google of pages to show, still includes it. So does an unlinked page titled “Makefield Executive Quaters Map”, which holds the only parking directions on your site. Your new site publishes only real pages, and the parking directions sit on the Contact page where visitors look for them.",
      "image": {
        "name": "lorem-ipsum",
        "width": 980,
        "height": 923,
        "alt": "The Services page of yardleylegal.com on a phone, showing only Lorem ipsum placeholder text, beside the new Practice Areas page",
        "caption": "yardleylegal.com/services.html on a phone today (left), and the Practice Areas page on your new site (right)."
      }
    },
    {
      "title": "Your newsletter’s tax tables run together on a phone",
      "body": "The Pennsylvania and New Jersey inheritance tax rates on your Newsletter page are laid out as two columns made with spaces. On a phone the columns break apart, so a reader sees lines like “Spouse – no tax Class A- Spouse and Children- no tax” and has to work out which rate belongs to which state. On your new site, “Death Taxes” is its own page, with a separate, readable table for each state.",
      "image": {
        "name": "tax-table",
        "width": 980,
        "height": 923,
        "alt": "The inheritance tax section of the yardleylegal.com newsletter on a phone, beside the new Death Taxes page with one table per state",
        "caption": "Your Newsletter on a phone today (left), and the new Death Taxes page (right)."
      }
    },
    {
      "title": "Your phone number and email can’t be tapped",
      "body": "215-493-6541 appears at the top of every page and in the Location box as plain text, with no tap-to-call link anywhere on the site. Your email is wrapped in a protection script, so anything that reads the page without running that script, including many AI tools, sees “[email protected]” instead of dbane@yardleylegal.com. On your new site the number and email open with one tap on every page, with a call button that stays at the bottom of the screen on phones."
    },
    {
      "title": "Search engines still read “over 30 years”",
      "body": "Your homepage says the firm has served Pennsylvania and New Jersey “for over 40 years”, but the description your site gives search engines, the text often shown under your name in Google, still says “for over 30 years”. The homepage title reads “Yardley Legal Services, P.C. - Yardley Legal Welcome”, and there is no structured data (the behind-the-scenes labels Google and AI assistants read). Your new site gives every page a clear title and description, and labels your address, phone, practice areas, credentials and an FAQ answered from your own information."
    },
    {
      "title": "Your best material is spread thin",
      "body": "Your free initial consultation, estimated fees up front, no charge for routine phone calls and home appointments are what make you “a different kind of law firm”, but they sit in one paragraph on the homepage. Your 40 years of practice, Harvard and GW credentials and title insurance license are a short list on a page called “Staff”. Your new site gives them room: a Fees page, a full profile for you, a page for each practice area and an FAQ."
    }
  ],
  "agreement": {
    "firmLegalName": "Yardley Legal Services, P.C.",
    "firmAddress": "301 Oxford Valley Road, Suite 603B, Yardley, PA 19067",
    "domain": "yardleylegal.com",
    "clientEmail": "dbane@yardleylegal.com",
    "pageLimit": "13",
    "paymentMethod": "card or bank payment through Stripe",
    "hourlyRate": "$125 per hour",
    "pauseDays": "30",
    "handoverDays": "14",
    "liabilityMonths": "3",
    "governingState": "Georgia",
    "clairenTitle": "Founder"
  }
};
