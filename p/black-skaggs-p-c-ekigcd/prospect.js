/* PROSPECT DATA: the only file to edit for a new prospect.
   Copy this whole folder to /p/<firm>-<6 random chars>/, edit the values below,
   and replace the three images in img/ (same file names). Values written as
   "[LIKE THIS]" show highlighted on the agreement page as blanks still to fill. */
window.PROSPECT = {
  "firmName": "Black & Skaggs, P.C.",
  "attn": "Dennis G. Black",
  "firstName": "Dennis",
  "city": "Tyler, TX",
  "currentDomain": "blackskaggs.com",
  "currentUrl": "http://blackskaggs.com/",
  "previewUrl": "https://clairenhaus.com/previews/black-skaggs-p-c/",
  "checkedDate": "October 13, 2026",
  "images": {
    "beforeAfterDesktop": "before-after-desktop",
    "beforeAfterPhone": "before-after-phone",
    "beforeAfterAlt": "Side by side: blackskaggs.com today, and the new Black & Skaggs, P.C. site"
  },
  "findings": [
    {
      "title": "Hard to read on a phone",
      "body": "None of the site\u2019s pages has a mobile setup, so a phone shows the full 1,010-pixel-wide desktop page shrunk to fit the screen. On an iPhone that makes the text about 39% of its normal size, and visitors have to pinch and zoom to read your practice areas or find your number. Your new site is built for phones first and reflows to any screen.",
      "image": {
        "name": "phone-text",
        "width": 980,
        "height": 420,
        "alt": "The Practice Areas page of blackskaggs.com on a phone, beside the same page on the new site",
        "caption": "The same Practice Areas page on the same phone: today on the left, your new site on the right."
      }
    },
    {
      "title": "The site often doesn\u2019t load",
      "body": "When we checked it on October 13, pages regularly took more than a minute to load or didn\u2019t load at all, and twice the homepage showed the hosting company\u2019s \u201cAn error occurred. Sorry, the page you are looking for is currently unavailable\u201d message instead of your site. Anyone looking you up at that moment sees an error, not your firm. Your new site is fast, lightweight static pages on modern hosting."
    },
    {
      "title": "Browsers show a security warning",
      "body": "Visiting https://blackskaggs.com brings up a full-page browser warning: the security certificate on the server is issued to the hosting company\u2019s domain (hostingplatform.com), not to blackskaggs.com, and it expired on July 3, 2026. The plain http:// version loads, but browsers label it \u201cNot secure\u201d. Your new site launches on https:// with a valid certificate for your own domain."
    },
    {
      "title": "18 of your 19 pages have no title",
      "body": "Only the homepage has a page title. Attorney Profiles, Practice Areas, Contact Us and every attorney bio and practice page have a blank title and no description, so in Google results and browser tabs they show up as a bare web address. Your new site gives every page its own title and description, like \u201cToxic Torts | Black & Skaggs, P.C., Tyler, Texas\u201d."
    },
    {
      "title": "Your phone number can\u2019t be tapped",
      "body": "(903) 593-9400 appears as plain text on every page, so a visitor on a phone has to copy it or type it in. On your new site the number is a one-tap call button on every page, and each attorney\u2019s email opens the mail app."
    },
    {
      "title": "Nothing tells Google or AI who you are",
      "body": "There is no structured data, the behind-the-scenes labels that tell search engines and AI assistants your two offices, phone, attorneys and practice areas, and no FAQ content for them to draw answers from. Your new site carries all of it on every page, plus eleven FAQs written only from facts on your own site."
    },
    {
      "title": "Small things visitors notice",
      "body": "The contact form sends visitors\u2019 details over an unencrypted http:// connection to the old site-builder\u2019s server, the footer still reads \u00a92022, and Marcus A. Carroll is listed as Of Counsel on the Attorneys page but as Shareholder on his own profile, where a plain black box stands in for his photo. Your new site keeps every attorney\u2019s title consistent and is easy to keep current."
    }
  ],
  "agreement": {
    "firmLegalName": "Black & Skaggs, P.C.",
    "firmAddress": "103 Baylor Drive, Tyler, TX 75703",
    "domain": "blackskaggs.com",
    "clientEmail": "dblack@blackskaggs.com",
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
