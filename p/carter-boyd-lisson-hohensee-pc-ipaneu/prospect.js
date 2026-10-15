/* PROSPECT DATA: the only file to edit for a new prospect.
   Copy this whole folder to /p/<firm>-<6 random chars>/, edit the values below,
   and replace the three images in img/ (same file names). Values written as
   "[LIKE THIS]" show highlighted on the agreement page as blanks still to fill. */
window.PROSPECT = {
  "firmName": "Carter, Boyd, Lisson & Hohensee",
  "attn": "James A. Boyd, Jr.",
  "firstName": "",
  "city": "San Angelo, TX",
  "currentDomain": "carterboyd.com",
  "currentUrl": "https://carterboyd.com/",
  "previewUrl": "https://clairenhaus.com/previews/carter-boyd-lisson-hohensee-pc/",
  "checkedDate": "October 14, 2026",
  "images": {
    "beforeAfterDesktop": "before-after-desktop",
    "beforeAfterPhone": "before-after-phone",
    "beforeAfterAlt": "Side by side: carterboyd.com today, and the new Carter, Boyd, Lisson & Hohensee site"
  },
  "findings": [
    {
      "title": "Your phone number is a picture",
      "body": "On every page of carterboyd.com, (325) 655-4889 appears only inside the header image, next to the address. A phone visitor can’t tap it to call, and nobody can copy it; there isn’t a tap-to-call link anywhere on the site. On your new site the number is a tap-to-call button at the top of every page, and the firm and attorney emails are tap-to-send links."
    },
    {
      "title": "Hard to read on a phone",
      "body": "The site has no mobile setup, so a phone lays every page out 1,080 pixels wide and shrinks it to about 36% of its size. On an iPhone, the 13-pixel text in your attorney profiles shows at under 5 pixels, and the footnotes at about 3. Visitors have to pinch and zoom to read anything. Your new site is built for phones first and reflows to any screen.",
      "image": {
        "name": "phone-text",
        "width": 900,
        "height": 864,
        "alt": "James A. Carter’s profile on carterboyd.com on an iPhone, beside his profile on the new site",
        "caption": "The same phone: James A. Carter’s profile today on the left, the new one on the right."
      }
    },
    {
      "title": "The old firm name is in every page title",
      "body": "All nine pages are titled “… :: Carter, Boyd & Lisson”, and the home page is titled “San Angelo Texas Attorneys :: Carter, Boyd & Lisson”. That title is what shows in browser tabs, bookmarks and, often, Google’s results, so the firm’s current name, with Hohensee, doesn’t appear there at all. The downloadable contact cards on four attorney pages still say “Carter, Boyd & Lisson” too. Your new site uses the full firm name and a clear, distinct title on every page."
    },
    {
      "title": "Search engines get very little to work with",
      "body": "No page has a description for Google to show under your name, and there is no structured data (the behind-the-scenes labels that tell Google and AI assistants your address, phone, practice areas and attorneys). Each page can also be reached at two different addresses, a long one with a code in it and a short one in your sitemap, with nothing telling Google which is the real one. Your new site has one address per page, a written description on every page, and structured data for the firm, each attorney and your FAQ."
    },
    {
      "title": "Attorney pages are uneven",
      "body": "James A. Carter, James A. Boyd, Jr., Jeffrey S. Lisson and Mindy L. Hohensee each have an email link and a contact card on their page; Kolton C. Looka and Elizabeth A. New have neither. None of the six pages has a photo, and the attorney list only opens from a hover menu at the top. Your new site gives every attorney the same full profile, linked to the practice areas they handle, with the firm’s contact details on each one."
    },
    {
      "title": "A 2012 layout",
      "body": "The pages are built from fixed-width tables, the footer still reads “Copyright © 2012”, and the footnotes are set in 9- and 10-pixel type even on a desktop. Your six practice areas share one short list with no page of their own. Your new site gives each practice area its own page, adds an About page, an FAQ and directions, and keeps every fact, credential and board certification from your current site."
    }
  ],
  "agreement": {
    "firmLegalName": "Carter, Boyd, Lisson & Hohensee, PC",
    "firmAddress": "515 W. Harris Ave., Suite 100, San Angelo, TX 76903",
    "domain": "carterboyd.com",
    "clientEmail": "firm@carterboyd.com",
    "pageLimit": "18",
    "paymentMethod": "card or bank payment through Stripe",
    "hourlyRate": "$125 per hour",
    "pauseDays": "30",
    "handoverDays": "14",
    "liabilityMonths": "3",
    "governingState": "Georgia",
    "clairenTitle": "Founder"
  }
};
