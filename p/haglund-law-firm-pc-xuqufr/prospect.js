/* PROSPECT DATA: the only file to edit for a new prospect.
   Copy this whole folder to /p/<firm>-<6 random chars>/, edit the values below,
   and replace the three images in img/ (same file names). Values written as
   "[LIKE THIS]" show highlighted on the agreement page as blanks still to fill. */
window.PROSPECT = {
  "firmName": "Haglund Law Firm, P.C.",
  "attn": "Wayne D. Haglund",
  "firstName": "Wayne",
  "city": "Lufkin, TX",
  "currentDomain": "haglundlaw.com",
  "currentUrl": "http://www.haglundlaw.com/",
  "previewUrl": "https://clairenhaus.com/previews/haglund-law-firm-pc/",
  "checkedDate": "October 14, 2026",
  "images": {
    "beforeAfterDesktop": "before-after-desktop",
    "beforeAfterPhone": "before-after-phone",
    "beforeAfterAlt": "Side by side: haglundlaw.com today, and the new Haglund Law Firm, P.C. site"
  },
  "findings": [
    {
      "title": "Hard to read on a phone",
      "body": "The site has no mobile setup, so a phone shows the full 980-pixel-wide desktop page shrunk to fit the screen. The body text is already small at 12 pixels, so on an iPhone it shows at about 5 pixels, and visitors have to pinch and zoom to read a practice area or find your number. Your new site is built for phones first and reflows to any screen.",
      "image": {
        "name": "phone-text",
        "width": 900,
        "height": 840,
        "alt": "The Contact Us page of haglundlaw.com on a phone, beside the contact page of the new site",
        "caption": "The same contact details on the same phone: today on the left, your new site on the right."
      }
    },
    {
      "title": "Your phone number can\u2019t be tapped",
      "body": "(936) 639-0007 appears at the top and bottom of every page, but always as plain text, so someone on a phone has to copy it or type it in. On your new site every phone number and email address opens the phone or mail app with one tap, and a Call button stays in reach on every page."
    },
    {
      "title": "The News section stopped in 2021",
      "body": "The News menu on every page still leads with a December 1, 2021 post about COVID-19 mask and vaccine rules for Head Start programs, and the next newest post is from January 2016. Two of the six post titles listed in the menu have typos (\u201cSudivision\u201d, \u201csponors\u201d). To a school board or business owner checking you out, it reads as a site nobody looks after, which undersells a practice with your record."
    },
    {
      "title": "A few dead ends",
      "body": "\u201cCommunity\u201d in the main menu opens a page that says only \u201cComing Soon.\u201d The \u201cWatch Our Video\u201d button on the homepage opens a pop-up from an outside video service, and when we opened it on October 14 it showed broken images and no video. The \u201cPractice Areas\u201d menu item opens the School Law page rather than an overview of all ten areas. Your new site has a real Practice Areas page plus a page for each area, and nothing that leads nowhere."
    },
    {
      "title": "Nothing tells Google or AI who you are",
      "body": "There is no structured data, the behind-the-scenes labels that tell search engines and AI assistants your address, phone, attorney and practice areas, and no FAQ content for them to draw answers from. The homepage also carries two description tags (one of them empty) and a location tag that names 107 W Kerr Ave instead of your E. Frank Ave. office. Your new site carries all of it, correctly, on every page, plus twelve FAQs written only from facts on your own site."
    },
    {
      "title": "The secure version isn\u2019t enforced, and old code fails",
      "body": "Your security certificate works, but http://www.haglundlaw.com still loads without switching visitors to the secure https:// version, and some browsers label plain http pages \u201cNot secure.\u201d Every page also still asks for files from services that no longer answer, including a copy of jQuery hosted on Google Code (closed in 2016) and an Internet Explorer 6 stylesheet that returns \u201cnot found.\u201d"
    }
  ],
  "agreement": {
    "firmLegalName": "Haglund Law Firm, P.C.",
    "firmAddress": "207 E. Frank Ave., Suite 106, Lufkin, TX 75904",
    "domain": "haglundlaw.com",
    "clientEmail": "contactus@haglundlaw.com",
    "pageLimit": "17",
    "paymentMethod": "card or bank payment through Stripe",
    "hourlyRate": "$125 per hour",
    "pauseDays": "30",
    "handoverDays": "14",
    "liabilityMonths": "3",
    "governingState": "Georgia",
    "clairenTitle": "Founder"
  }
};
