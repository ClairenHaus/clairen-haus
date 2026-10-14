/* PROSPECT DATA: the only file to edit for a new prospect.
   Copy this whole folder to /p/<firm>-<6 random chars>/, edit the values below,
   and replace the three images in img/ (same file names). Values written as
   "[LIKE THIS]" show highlighted on the agreement page as blanks still to fill. */
window.PROSPECT = {
  "firmName": "Pankey & Horlock, LLC",
  "attn": "Larry A. Pankey",
  "firstName": "Larry",
  "city": "Dunwoody, GA",
  "currentDomain": "gacondolaw.com",
  "currentUrl": "https://gacondolaw.com/",
  "previewUrl": "https://clairenhaus.com/previews/pankey-horlock-llc/",
  "checkedDate": "October 14, 2026",
  "images": {
    "beforeAfterDesktop": "before-after-desktop",
    "beforeAfterPhone": "before-after-phone",
    "beforeAfterAlt": "Side by side: gacondolaw.com today, and the new Pankey & Horlock, LLC site"
  },
  "findings": [
    {
      "title": "Hard to read on a phone",
      "body": "The site has no mobile setup, so a phone shows the full 980-pixel-wide desktop page shrunk to fit the screen. On an iPhone that makes the text about 40% of its normal size, and a board member checking you out has to pinch and zoom to read your services or an attorney\u2019s bio. Your new site is built for phones first and reflows to any screen.",
      "image": {
        "name": "phone-text",
        "width": 980,
        "height": 420,
        "alt": "Laura Horlock\u2019s bio page on gacondolaw.com on a phone, beside the same bio on the new site",
        "caption": "Laura Horlock\u2019s bio on the same phone: today on the left, your new site on the right."
      }
    },
    {
      "title": "Your phone number can\u2019t be tapped",
      "body": "770-670-6250 is part of the header picture on every page, and the footer and Contact page show it as plain text. There isn\u2019t a single tap-to-call link anywhere on the site, so a manager on a phone has to type the number in by hand. On your new site the number is a one-tap call button on every page, and each attorney\u2019s email opens with one tap."
    },
    {
      "title": "Search results can\u2019t describe your pages",
      "body": "None of your nine pages has a page description, so Google writes its own snippet from whatever text it finds. The page titles are keyword strings like \u201cLaura Horlock, Attorney DeKalb County Atlanta GA Lawyer Attorney Law Firm.\u201d Your new site gives each of its 13 pages a clear title and description."
    },
    {
      "title": "Nothing tells Google or AI who you are",
      "body": "There is no structured data, the behind-the-scenes labels that tell search engines and AI assistants your address, phone, attorneys, practice areas and the 18 counties you serve, and no FAQ content for them to draw answers from. Your new site carries all of it on every page, plus twelve FAQs written only from facts on your own site, like what an association can do about delinquent owners before going to court."
    },
    {
      "title": "Your visitor stats likely stopped in 2023",
      "body": "Every page still loads Google\u2019s old Universal Analytics tracking code (UA-122962608-1). Google stopped recording data for Universal Analytics in July 2023, so the site has most likely recorded no visitor statistics since then. Your new site can launch with current analytics, so you can see how people find you."
    },
    {
      "title": "Some facts on the site have gone stale",
      "body": "Laura\u2019s bio mentions \u201ctwo decades of practice,\u201d but she began in 1991, which is now 35 years. Lisa\u2019s bio says \u201cmore than seven years\u201d and \u201cthe past fifteen years,\u201d and the footer on every page reads \u201cMetopolitan Atlanta.\u201d Your new site states dates instead, like \u201cpracticing in Atlanta since 1991,\u201d so it stays accurate."
    },
    {
      "title": "Wrong addresses show a bare error page",
      "body": "A mistyped or outdated address on gacondolaw.com sends visitors to a plain \u201cPage Not Found\u201d message with no menu, phone number or link back, and there is no sitemap (sitemap.xml) for search engines to read. Your new site launches with a sitemap and a branded \u201cpage not found\u201d page that leads visitors back."
    }
  ],
  "agreement": {
    "firmLegalName": "Pankey & Horlock, LLC",
    "firmAddress": "1441 Dunwoody Village Parkway, Suite 200, Dunwoody, GA 30338",
    "domain": "gacondolaw.com",
    "clientEmail": "lpankey@pankeyhorlock.com",
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
