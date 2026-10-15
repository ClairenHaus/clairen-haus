/* PROSPECT DATA: the only file to edit for a new prospect.
   Copy this whole folder to /p/<firm>-<6 random chars>/, edit the values below,
   and replace the three images in img/ (same file names). Values written as
   "[LIKE THIS]" show highlighted on the agreement page as blanks still to fill. */
window.PROSPECT = {
  "firmName": "Sipila Law Office, LLC",
  "attn": "Angela E. Sipila",
  "firstName": "Angela",
  "city": "Virginia, MN",
  "currentDomain": "sipilaw.com",
  "currentUrl": "https://www.sipilaw.com/",
  "previewUrl": "https://clairenhaus.com/previews/sipila-law-office-llc/",
  "checkedDate": "October 14, 2026",
  "images": {
    "beforeAfterDesktop": "before-after-desktop",
    "beforeAfterPhone": "before-after-phone",
    "beforeAfterAlt": "Side by side: sipilaw.com today, and the new Sipila Law Office, LLC site"
  },
  "findings": [
    {
      "title": "Two different office addresses",
      "body": "Your Contact page says “New Office Location: 412 1st Street South, Suite #1”, but the footer on that same page, and on 9 of your other pages, still gives 108 South 5th Avenue, Suite #1. Only the home page footer has the new address. Google, maps apps and anyone who copies the address from the bottom of a page can end up with the old one. The Contact page also lists 218-741-5000 as both your phone and your fax. Your new site shows one address and one phone number, the same on every page, and tells Google exactly where the office is.",
      "image": {
        "name": "contact-address",
        "width": 980,
        "height": 602,
        "alt": "The sipilaw.com Contact page with the new address, the old footer address and the matching phone and fax numbers highlighted",
        "caption": "Your Contact page today. The highlighted footer still shows the old address."
      }
    },
    {
      "title": "Hard to read on a phone",
      "body": "The site has no mobile setup, so a phone lays every page out 980 pixels wide and shrinks it to about 40% of its size. Body text that is 14 pixels on a desktop shows at under 6 pixels on an iPhone, and the address in the footer at about 4. Visitors have to pinch and zoom to read anything. Your new site is built for phones first and reflows to any screen.",
      "image": {
        "name": "phone-text",
        "width": 980,
        "height": 588,
        "alt": "The sipilaw.com Contact page on an iPhone, beside the Contact page of the new site",
        "caption": "The same phone: your Contact page today on the left, the new one on the right."
      }
    },
    {
      "title": "Your phone number can’t be tapped",
      "body": "On your Home, Profile, Practice and Contact pages, 218-741-5000 is plain text or part of a picture, so a phone visitor can’t tap it to call. The only place on the site where your number can be tapped is the “Lawyers on the Iron Range” page, in a list of other Virginia attorneys. On your new site the number is a tap-to-call button at the top of every page, and your email is a tap-to-send link."
    },
    {
      "title": "A note to the web designer is still on the page",
      "body": "Your guardianship page says that suspected abuse, neglect or financial exploitation of a vulnerable adult should be reported to the county’s Adult Protection “(insert link here)”. The link was never added, so the placeholder shows to everyone who reads that section. Your new site’s guardianship page reads cleanly from start to finish and keeps the Minnesota statute references from your own page.",
      "image": {
        "name": "insert-link",
        "width": 980,
        "height": 287,
        "alt": "The sentence on sipilaw.com/pages/guard.html ending in (insert link here), highlighted",
        "caption": "Your guardianship page today."
      }
    },
    {
      "title": "Your best answers are buried",
      "body": "Your FAQ and your Links are sections of the home page, so it runs more than 10,000 pixels long on a desktop, and much of it is a list of outside websites. The excellent answers you wrote about Ethical Wills, Transfer on Death Deeds and Family Care Agreements sit far down that page, and there is no page about probate, deeds or divorce on its own. Your new site gives each of your eight practice areas its own page, using your own explanations, plus a separate FAQ and a short, checked list of free resources."
    },
    {
      "title": "Search engines get very little to work with",
      "body": "Your guardianship and federal-links pages are both titled just “Angela E. Sipila | Attorney At Law”, the home page description that Google may show under your name reads “power of attornety”, there is no structured data (the behind-the-scenes labels that tell Google and AI assistants your address, phone, practice areas and service area), and sipilaw.com/sitemap.xml returns “not found”. Your new site has a unique title and description on every page, structured data naming your six counties, and a sitemap."
    },
    {
      "title": "A layout from the early 2000s",
      "body": "The pages are built from fixed-width tables, so on a desktop the site is a narrow box in the middle of a dark blue screen with most of the space empty. Small details have drifted too: the Profile page says “Click here or more information”, and the free Power of Attorney form links carry a note that they “were down on 4/2017”. Your new site has a modern, accessible layout, a full profile page for you, and directions that mention the parking and the side door."
    }
  ],
  "agreement": {
    "firmLegalName": "Sipila Law Office, LLC",
    "firmAddress": "412 1st Street South, Suite #1, Virginia, MN 55792",
    "domain": "sipilaw.com",
    "clientEmail": "ange@sipilaw.com",
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
