/* PROSPECT DATA: the only file to edit for a new prospect.
   Copy this whole folder to /p/<firm>-<6 random chars>/, edit the values below,
   and replace the three images in img/ (same file names). Values written as
   "[LIKE THIS]" show highlighted on the agreement page as blanks still to fill. */
window.PROSPECT = {
  "firmName": "Green and Gross, P.C.",
  "attn": "Joel Z. Green",
  "firstName": "Joel",
  "city": "Bridgeport, CT",
  "currentDomain": "gglaw.net",
  "currentUrl": "http://gglaw.net/",
  "previewUrl": "https://clairenhaus.com/previews/green-and-gross-p-c/",
  "checkedDate": "October 13, 2026",
  "images": {
    "beforeAfterDesktop": "before-after-desktop",
    "beforeAfterPhone": "before-after-phone",
    "beforeAfterAlt": "Side by side: gglaw.net today, and the new Green and Gross, P.C. site"
  },
  "findings": [
    {
      "title": "Two footer links lead to “Page not found”",
      "body": "Every page of gglaw.net ends with links to a Privacy Policy and Terms of Use. Both open a “Page not found” error, so a visitor (or a search engine) checking how the firm handles their information finds nothing. The same footer still reads “Copyright © 2019.” Your new site has no dead links, and its footer stays current on its own.",
      "image": {
        "name": "footer-404",
        "width": 1400,
        "height": 420,
        "alt": "The gglaw.net footer with Privacy Policy and Terms of Use links, beside the Page not found page both links open",
        "caption": "Your current footer (left) and the page both of its links open (right), checked October 13, 2026."
      }
    },
    {
      "title": "Browsers warn visitors away from the secure address",
      "body": "gglaw.net only works over plain http://, which Chrome and Safari mark “Not secure” in the address bar. Anyone who types or follows https://gglaw.net gets a full-page security warning instead: the certificate the server sends belongs to the hosting company (*.hostingplatform.com), not to gglaw.net, and it expired on July 3, 2026. Your new site launches on https:// with its own certificate, renewed automatically."
    },
    {
      "title": "Your phone number can’t be tapped",
      "body": "(203) 335-5141 appears on every page as plain text, so someone on a phone has to copy it or type it in to call. On your new site the number is a one-tap call button in the header of every page."
    },
    {
      "title": "Emailing an attorney takes a hunt",
      "body": "The Contact page has no email address. It asks visitors to find the “Email Me” link on each attorney’s own page instead. Your new site lists every attorney’s direct email on the Contact page, on the attorneys page and on each bio, as one-tap links."
    },
    {
      "title": "Your visitor statistics stopped in 2023",
      "body": "The site still carries the older version of Google Analytics (Universal Analytics). Google stopped processing data from it in July 2023, so for over three years no visits to gglaw.net have been counted. Your new site can be set up with current, privacy-friendly analytics from launch day."
    },
    {
      "title": "Two versions of the same bio",
      "body": "The Our Attorneys page and the individual bio pages don’t match. On one, Mr. Gross has practiced for “more than thirty years” and the Hudson Pak judgment is “in excess of $1,600,000”; on his own page it’s “more than forty-five years” and “in excess of $1,000,000.” Joel Green’s bio still says “more than twenty five years,” though he was admitted in 1982. Your new site keeps one current bio per attorney."
    },
    {
      "title": "Nine practice areas, no page explaining any of them",
      "body": "Your practice areas, from zoning and land use to elder law and probate, appear only as a one-line list, and the homepage carries about 160 words. Someone searching for help opposing a development or settling an estate finds nothing that speaks to their situation. Your new site gives each area its own page in plain English, with how it works in Connecticut and which attorneys handle it."
    },
    {
      "title": "Nothing tells Google or AI who you are",
      "body": "The site has no structured data (the behind-the-scenes labels that tell search engines and AI assistants your address, phone, attorneys and practice areas), no page description for search results, and no sitemap. Your new site carries all of it on every page, plus a 13-question FAQ written only from facts on your own site."
    }
  ],
  "agreement": {
    "firmLegalName": "Green and Gross, P.C.",
    "firmAddress": "1087 Broad Street, Suite 401, Bridgeport, CT 06604",
    "domain": "gglaw.net",
    "clientEmail": "jgreen@gglaw.net",
    "pageLimit": "20",
    "paymentMethod": "card or bank payment through Stripe",
    "hourlyRate": "$125 per hour",
    "pauseDays": "30",
    "handoverDays": "14",
    "liabilityMonths": "3",
    "governingState": "Georgia",
    "clairenTitle": "Founder"
  }
};
