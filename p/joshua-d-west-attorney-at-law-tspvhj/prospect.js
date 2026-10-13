/* PROSPECT DATA: the only file to edit for a new prospect.
   Copy this whole folder to /p/<firm>-<6 random chars>/, edit the values below,
   and replace the three images in img/ (same file names). Values written as
   "[LIKE THIS]" show highlighted on the agreement page as blanks still to fill. */
// Findings checked live on jdwestlaw.com, October 13, 2026.
window.PROSPECT = {
  "firmName": "Joshua D. West, PLC",
  "attn": "Joshua D. West",
  "firstName": "Joshua",
  "city": "Bloomfield Hills, MI",
  "currentDomain": "jdwestlaw.com",
  "currentUrl": "http://jdwestlaw.com/",
  "previewUrl": "https://clairenhaus.com/previews/joshua-d-west-attorney-at-law/",
  "checkedDate": "October 13, 2026",
  "images": {
    "beforeAfterDesktop": "before-after-desktop",
    "beforeAfterPhone": "before-after-phone",
    "beforeAfterAlt": "Side by side: jdwestlaw.com today, and the new Joshua D. West site"
  },
  "findings": [
    {
      "title": "Hard to read on a phone",
      "body": "The site has no mobile setup, so a phone shows the full 980-pixel-wide desktop page shrunk to fit the screen. On an iPhone that makes your bio and practice areas about 40% of their normal size, and visitors have to pinch and zoom to read them or find your number. Your new site is built for phones first and reflows to any screen.",
      "image": {
        "name": "phone-text",
        "width": 980,
        "height": 473,
        "alt": "Joshua D. West's bio on jdwestlaw.com on a phone, beside the same section on the new site",
        "caption": "Your bio on the same phone, at the same scale: today on the left, your new site on the right."
      }
    },
    {
      "title": "Your name and logo don’t appear",
      "body": "Your logo, the page header and the homepage intro are Flash files (logo.swf, header.swf, intro-loader.swf). Browsers stopped running Flash after Adobe ended it in 2020, so those spaces now load blank: a visitor sees empty panels where your name should be. Your new site sets your name in real type that loads everywhere."
    },
    {
      "title": "Browsers mark the site “Not secure”",
      "body": "jdwestlaw.com only loads over plain http://; the secure https:// address doesn’t answer at all. Chrome and Safari label plain-http pages “Not secure”, including the contact page that asks visitors for their name, email and phone. Your new site launches on https:// from day one."
    },
    {
      "title": "The contact form and map don’t work",
      "body": "The online form’s code sends visitors to a page that returns “not found” instead of sending their message, so anything typed there never reaches you. The map beside it shows Google’s “Oops! Something went wrong” error, and the pin in its code is set to Rochester Road in Royal Oak rather than your Woodward Avenue office. Your new site has a working contact page with directions that open straight in Apple or Google Maps."
    },
    {
      "title": "Two email addresses, and numbers you can’t tap",
      "body": "The “Contact” button on every page opens jd@jdwestlaw.com, while the contact and privacy pages list joshwest@jdwestlaw.com. Neither your office number nor your 24-hour line can be tapped on a phone. Your new site uses one address throughout and makes every number one tap to call."
    },
    {
      "title": "Your visitor statistics stopped in 2023",
      "body": "The site still runs Google’s old Universal Analytics tag (ga.js). Google stopped processing data from those tags in July 2023, so nothing has been measuring who visits your site or how they found you since then. Your new site is ready for current analytics at launch."
    },
    {
      "title": "Nothing tells Google or AI who you are",
      "body": "There is no structured data, the behind-the-scenes labels that tell search engines and AI assistants your address, phones, hours and practice areas, and no FAQ content for them to draw answers from. The sitemap also points search engines to a contact page address that doesn’t exist. Your new site carries all of it on every page, plus twelve FAQs written only from facts on your own site."
    },
    {
      "title": "The homepage leads with a weather box",
      "body": "Prime space on the homepage goes to a weather widget, links to Google and CNN, and a “News in Law” box that scrolls a list of suburb names. Your new site leads with your practice areas, your background and the 24-hour line."
    }
  ],
  "agreement": {
    "firmLegalName": "Joshua D. West, PLC",
    "firmAddress": "39520 Woodward Avenue, Suite 230, Bloomfield Hills, MI 48304",
    "domain": "jdwestlaw.com",
    "clientEmail": "joshwest@jdwestlaw.com",
    "pageLimit": "12",
    "paymentMethod": "card or bank payment through Stripe",
    "hourlyRate": "$125 per hour",
    "pauseDays": "30",
    "handoverDays": "14",
    "liabilityMonths": "3",
    "governingState": "Georgia",
    "clairenTitle": "Founder"
  }
};
