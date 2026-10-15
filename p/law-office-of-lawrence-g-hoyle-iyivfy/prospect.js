/* PROSPECT DATA: the only file to edit for a new prospect.
   Copy this whole folder to /p/<firm>-<6 random chars>/, edit the values below,
   and replace the three images in img/ (same file names). Values written as
   "[LIKE THIS]" show highlighted on the agreement page as blanks still to fill. */
window.PROSPECT = {
  "firmName": "Law Office of Lawrence G. Hoyle",
  "attn": "Lawrence G. Hoyle",
  "firstName": "Larry",
  "city": "Wellesley Hills, MA",
  "currentDomain": "attorneyhoyle.com",
  "currentUrl": "https://www.attorneyhoyle.com/",
  "previewUrl": "https://clairenhaus.com/previews/law-office-of-lawrence-g-hoyle/",
  "checkedDate": "October 14, 2026",
  "images": {
    "beforeAfterDesktop": "before-after-desktop",
    "beforeAfterPhone": "before-after-phone",
    "beforeAfterAlt": "Side by side: attorneyhoyle.com today, and the new site for the Law Office of Lawrence G. Hoyle"
  },
  "findings": [
    {
      "title": "Hard to read on a phone",
      "body": "The site has no mobile setup, so a phone shows the full 1,044-pixel-wide desktop page shrunk to fit the screen. On an iPhone that makes everything about 37% of its normal size, and the body text is set at 13 pixels to begin with, so visitors have to pinch and zoom to read about your practice or find your number. Your new site is built for phones first and reflows to any screen."
    },
    {
      "title": "Your phone number can’t be tapped",
      "body": "781.489.1489 appears on every page as plain text, but none of the site’s 25 pages has a tap-to-call link, so a visitor on a phone has to copy the number or type it in. On your new site the number is a one-tap call button on every page, with a call bar that stays at the bottom of the screen on phones."
    },
    {
      "title": "Hidden text and town lists that Google calls keyword stuffing",
      "body": "On nine pages, including Contact, Directions, Business Law and Real Estate Law, headings such as “Massachusetts Business Law” and “Massachusetts Corporations” are set in white text on the white background, some at 8 pixels, so visitors can’t see them but search engines can. The Areas Served page is a block of more than 180 Massachusetts town names across seven counties, under the page title “Wellesley Weston Lincoln Needham Newton Lexington Lawyer”. Google’s spam policies name both hidden text and blocks of city names a page is trying to rank for as keyword stuffing, and say pages that use it can rank lower or drop out of results altogether. Your new site has no hidden text: each page has one clear, visible heading, and your service area is stated plainly, the towns you name and the counties where you handle probate.",
      "image": {
        "name": "hidden-text",
        "width": 980,
        "height": 470,
        "alt": "The Business Law page on attorneyhoyle.com as visitors see it, beside the same page with its white-on-white text highlighted",
        "caption": "Your Business Law page as visitors see it (left), and with the hidden white text highlighted (right). Checked October 14, 2026."
      }
    },
    {
      "title": "Broken images on the Special Needs Trusts page",
      "body": "Three images on the Special Needs Trusts page point to a file on a personal computer instead of the website, so they never load for visitors and the browser reports an error each time the page opens. That page is also about 50,000 characters of uninterrupted text. Your new site gives special needs trusts a clear page of its own in plain language."
    },
    {
      "title": "Nothing tells Google or AI who you are",
      "body": "None of the site’s pages carries structured data, the behind-the-scenes labels that tell search engines and AI assistants your address, phone, practice areas and credentials. Your new site carries all of it on every page, plus twelve FAQs written only from facts on your own site, such as your LL.M. in taxation, the counties where you handle probate and what happens at a first meeting."
    }
  ],
  "agreement": {
    "firmLegalName": "Law Office of Lawrence G. Hoyle",
    "firmAddress": "40 Washington Street, Suite 200, Wellesley Hills, MA 02481",
    "domain": "attorneyhoyle.com",
    "clientEmail": "larry@attorneyhoyle.com",
    "pageLimit": "15",
    "paymentMethod": "card or bank payment through Stripe",
    "hourlyRate": "$125 per hour",
    "pauseDays": "30",
    "handoverDays": "14",
    "liabilityMonths": "3",
    "governingState": "Georgia",
    "clairenTitle": "Founder"
  }
};
