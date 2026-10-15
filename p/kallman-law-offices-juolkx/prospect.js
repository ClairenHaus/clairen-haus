/* PROSPECT DATA: the only file to edit for a new prospect.
   Copy this whole folder to /p/<firm>-<6 random chars>/, edit the values below,
   and replace the three images in img/ (same file names). Values written as
   "[LIKE THIS]" show highlighted on the agreement page as blanks still to fill. */
window.PROSPECT = {
  "firmName": "Law Office of Richard M. Kallman",
  "attn": "Richard M. Kallman",
  "firstName": "Richard",
  "city": "Ipswich, MA",
  "currentDomain": "kallmanlaw.com",
  "currentUrl": "http://www.kallmanlaw.com/",
  "previewUrl": "https://clairenhaus.com/previews/kallman-law-offices/",
  "checkedDate": "October 14, 2026",
  "images": {
    "beforeAfterDesktop": "before-after-desktop",
    "beforeAfterPhone": "before-after-phone",
    "beforeAfterAlt": "Side by side: kallmanlaw.com today, and the new Kallman Law site"
  },
  "findings": [
    {
      "title": "The top of your homepage is an empty box",
      "body": "The banner at the top of kallmanlaw.com is a Flash file (kallflash.swf). Adobe ended Flash at the end of 2020 and no current browser plays it, so visitors see a blank panel where the banner should be, and Chrome shows the words \u201cCouldn\u2019t load plugin.\u201d It\u2019s the first thing anyone sees. Your new site opens with your practice, your office by the Choate Bridge and a one-tap call button.",
      "image": {
        "name": "flash-banner",
        "width": 1020,
        "height": 400,
        "alt": "The top of kallmanlaw.com in Chrome: the banner area shows \u201cCouldn\u2019t load plugin.\u201d",
        "caption": "The top of your homepage in Chrome today. The circled panel is where the Flash banner used to play."
      }
    },
    {
      "title": "Hard to read on a phone",
      "body": "The site has no mobile setup, so a phone shows the full 980-pixel-wide desktop page shrunk to fit the screen, about 40% of its normal size. Visitors have to pinch and zoom to read your practice areas or find your number. Your new site is built for phones first and reflows to any screen."
    },
    {
      "title": "Your phone number can\u2019t be tapped",
      "body": "978.356.2934 appears at the bottom of every page as plain text, so a visitor on a phone has to copy it or type it in, and your email address only appears on the Contact page. On your new site the number and email open the phone or mail app with one tap, from every page."
    },
    {
      "title": "The site has no secure (https) version",
      "body": "https://www.kallmanlaw.com doesn\u2019t connect, so the site only loads over plain http and browsers label it \u201cNot secure\u201d. That includes the Contact page, whose form asks visitors for their name, address, phone number and comments. Your new site launches on https only."
    },
    {
      "title": "Some details look out of date",
      "body": "Your Approved Closing Attorney list still names lenders that no longer exist under those names, such as Countrywide Home Loans, Sovereign Bank and Banknorth. Your bio says \u201cover 25 years\u201d of experience, while your own r\u00e9sum\u00e9 starts with a 1983 law degree, so it undersells you. The new site leaves the lender list out until you give us a current one."
    },
    {
      "title": "Search engines and AI get very little to work with",
      "body": "All five practice areas share one \u201cSpecialties\u201d page, the inner pages have no search description, and there is no structured data, the behind-the-scenes labels that tell Google and AI assistants your address, phone, attorney and practice areas. There\u2019s no sitemap either. Your new site has a page for each practice area, an FAQ answered only from facts on your own site, structured data on every page and a sitemap."
    }
  ],
  "agreement": {
    "firmLegalName": "Law Office of Richard M. Kallman",
    "firmAddress": "4 South Main Street, Suite 11, Ipswich, MA 01938",
    "domain": "kallmanlaw.com",
    "clientEmail": "rich@kallmanlaw.com",
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
