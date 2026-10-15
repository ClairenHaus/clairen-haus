/* PROSPECT DATA: the only file to edit for a new prospect.
   Copy this whole folder to /p/<firm>-<6 random chars>/, edit the values below,
   and replace the three images in img/ (same file names). Values written as
   "[LIKE THIS]" show highlighted on the agreement page as blanks still to fill. */
window.PROSPECT = {
  "firmName": "Kaufman Law Offices",
  "attn": "Kurt A. Kaufman",
  "firstName": "Kurt",
  "city": "Lima, OH",
  "currentDomain": "kaufmanlawoffice.com",
  "currentUrl": "https://kaufmanlawoffice.com/",
  "previewUrl": "https://clairenhaus.com/previews/kaufman-law-offices/",
  "checkedDate": "October 14, 2026",
  "images": {
    "beforeAfterDesktop": "before-after-desktop",
    "beforeAfterPhone": "before-after-phone",
    "beforeAfterAlt": "Side by side: kaufmanlawoffice.com today, and the new Kaufman Law Offices site"
  },
  "findings": [
    {
      "title": "Your address and numbers are too small to read on a phone",
      "body": "The site has no mobile setup, so a phone lays each page out 980 pixels wide and shrinks it to about 40% of its size. On your home page, the line with both office addresses and all three phone numbers is set in 10-point type, which comes out at about 5 pixels tall on an iPhone. None of your pages has a tap-to-call link for any of the three numbers, so a visitor has to zoom in, read the number and dial it by hand. On your new site every number is a tap-to-call link and the text is full size on any phone.",
      "image": {
        "name": "phone-text",
        "width": 860,
        "height": 516,
        "alt": "The office address and phone line on kaufmanlawoffice.com on an iPhone, beside the offices panel on the new site at the same scale",
        "caption": "Your office details on the same phone, at the same scale: today on the left, your new site on the right."
      }
    },
    {
      "title": "The Newsletter link opens an error",
      "body": "Newsletter is one of the four links on your home page. When we clicked it on October 14, the page behind it returned a server error, and the browser showed an empty error screen instead of a newsletter. It is the kind of thing a visitor notices. Your new site has no dead ends: every link goes to a finished page."
    },
    {
      "title": "A “Contact Form” page with no form",
      "body": "Your Contact page is headed “Contact Form”, but there is no form on it, only a link that tries to open the visitor’s own email program. On a phone or a work computer without email set up, that link does nothing, and your email address isn’t written out anywhere on the site to copy. Your new Contact page has a simple message form (switched off in this preview), your email address written out, and tap-to-call numbers for both offices.",
      "image": {
        "name": "contact-page",
        "width": 660,
        "height": 330,
        "alt": "The kaufmanlawoffice.com Contact page with the Contact Form heading and the E-mail Kaufman Law Office link highlighted",
        "caption": "Your Contact page today: a “Contact Form” heading over a single email link."
      }
    },
    {
      "title": "Search engines get almost nothing to work with",
      "body": "Your Practice Areas, Directions and Contact pages have no page title at all, so a browser tab or a search result shows only the bare web address. The home page title is just “Kaufman Law Office”, with no mention of Lima, St. Marys or the kind of law you practice, and no page has a description or structured data (the behind-the-scenes labels that tell Google and AI assistants your offices, phone numbers and practice areas). Your new site has a clear title and description on every page, plus full structured data for both offices."
    },
    {
      "title": "Eleven practice areas, one bare list",
      "body": "Your Areas of Practice page lists eleven areas, from truck accidents to divorce and dissolution, with no explanation of any of them, and the site says nothing about you beyond your name. Someone comparing lawyers after a crash or a work injury has nothing to read. Your new site gives each area its own page explaining in plain terms how that kind of matter works in Ohio, plus a page for you and a page for each office."
    },
    {
      "title": "Directions as pictures of maps",
      "body": "Your Directions page shows small map images with “Click for larger image”, and the street addresses on it give only the street, with no state or ZIP code. On a phone, a picture of a map can’t open turn-by-turn directions. Your new Offices page has a “Get directions” button for each office that opens the visitor’s maps app, and makes clear that St. Marys is by appointment."
    },
    {
      "title": "A look from another era",
      "body": "Your home page was saved from Microsoft Word 2007 as a web page, and the other pages use very early web code with a tiled marble background and clip-art scales. Your new site keeps your gold-on-navy, small-caps identity, but in a modern, accessible design that loads fast and reads well on any screen."
    }
  ],
  "agreement": {
    "firmLegalName": "Kaufman Law Offices",
    "firmAddress": "Eastgate Plaza, 2100 Harding Highway, Lima, OH 45804",
    "domain": "kaufmanlawoffice.com",
    "clientEmail": "info@kaufmanlawoffice.com",
    "pageLimit": "16",
    "paymentMethod": "card or bank payment through Stripe",
    "hourlyRate": "$125 per hour",
    "pauseDays": "30",
    "handoverDays": "14",
    "liabilityMonths": "3",
    "governingState": "Georgia",
    "clairenTitle": "Founder"
  }
};
