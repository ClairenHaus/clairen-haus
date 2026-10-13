/* PROSPECT DATA: the only file to edit for a new prospect.
   Copy this whole folder to /p/<firm>-<6 random chars>/, edit the values below,
   and replace the three images in img/ (same file names). Values written as
   "[LIKE THIS]" show highlighted on the agreement page as blanks still to fill. */
window.PROSPECT = {
  "firmName": "Charles H. Boohaker, P.C.",
  "attn": "Charles H. Boohaker",
  "firstName": "Charles",
  "city": "Birmingham, AL",
  "currentDomain": "boohaker-law.com",
  "currentUrl": "http://boohaker-law.com/",
  "previewUrl": "https://clairenhaus.com/previews/charles-h-boohaker-p-c/",
  "checkedDate": "October 13, 2026",
  "images": {
    "beforeAfterDesktop": "before-after-desktop",
    "beforeAfterPhone": "before-after-phone",
    "beforeAfterAlt": "Side by side: boohaker-law.com today, and the new Charles H. Boohaker, P.C. site"
  },
  "findings": [
    {
      "title": "Hard to read on a phone",
      "body": "The site has no mobile setup, so a phone shows the full 980-pixel-wide desktop page shrunk to fit the screen. On an iPhone that makes your bio, your practice areas and your phone number about 40% of their normal size, and visitors have to pinch and zoom to read them. Your new site is built for phones first and reflows to any screen.",
      "image": {
        "name": "phone-text",
        "width": 980,
        "height": 590,
        "alt": "Charles H. Boohaker's attorney page on boohaker-law.com on a phone, beside the same bio on the new site",
        "caption": "Your attorney page on the same phone, at the same scale: today on the left, your new site on the right."
      }
    },
    {
      "title": "Browsers mark the site “Not secure”",
      "body": "boohaker-law.com only loads over plain http://; the secure https:// address doesn’t connect at all. Chrome and Safari label plain-http pages “Not secure” in the address bar, which is the first thing a potential client sees. Your new site launches on https:// from day one."
    },
    {
      "title": "The Directions page map is missing",
      "body": "The Directions page shows map zoom controls around an empty space: the map image it asks for no longer exists on the server (it returns “not found”), and the “Directions” link beside it leads to a “not found” page too. Your new site opens directions to 1905 14th Avenue South straight in Apple Maps or Google Maps with one tap."
    },
    {
      "title": "Your phone number can’t be tapped",
      "body": "205-930-5900 appears on the homepage, Contact and Directions pages as plain text, so a visitor on a phone has to remember it or type it in. On your new site the number is a one-tap call button on every page, alongside your email."
    },
    {
      "title": "The site hasn’t changed since 2008",
      "body": "Your web server reports the homepage was last changed on July 10, 2008. Every page also still carries code injected by an old desktop ad-blocking program (“Ad Muncher”), a sign the pages were saved from a computer and re-uploaded rather than kept up as a website, and a background image the pages ask for is missing on every page. Your new site is clean, current code that’s easy to keep up to date."
    },
    {
      "title": "Eleven practice areas, no page explaining any of them",
      "body": "Your practice areas, from personal injury and wrongful death to dram shop liability, workers’ compensation and construction litigation, appear only as one comma-separated list. Someone searching for help with a car wreck or a work injury finds nothing that speaks to their situation. Your new site gives each area its own page in plain English, with how it works in Alabama."
    },
    {
      "title": "Nothing tells Google or AI who you are",
      "body": "There is no structured data, the behind-the-scenes labels that tell search engines and AI assistants your address, phone, attorney and practice areas, and no sitemap or FAQ for them to draw on. The description search engines show lists only three of your eleven practice areas. Your new site carries all of it on every page, plus eleven FAQs written only from facts on your own site."
    },
    {
      "title": "Your bio reads like a directory card",
      "body": "Your attorney page lists an internal directory number (“ISLN”) and your full date of birth, but says nothing in sentences about who you are or how to reach you beyond an email link. Your new site tells your story in plain sentences, keeps the credentials that matter, and puts a call button beside it."
    }
  ],
  "agreement": {
    "firmLegalName": "Charles H. Boohaker, P.C.",
    "firmAddress": "1905 14th Avenue South, Birmingham, AL 35205",
    "domain": "boohaker-law.com",
    "clientEmail": "charles@boohaker-law.com",
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
