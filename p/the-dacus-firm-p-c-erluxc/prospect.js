/* PROSPECT DATA: the only file to edit for a new prospect.
   Copy this whole folder to /p/<firm>-<6 random chars>/, edit the values below,
   and replace the three images in img/ (same file names). Values written as
   "[LIKE THIS]" show highlighted on the agreement page as blanks still to fill. */
window.PROSPECT = {
  "firmName": "The Dacus Firm, P.C.",
  "attn": "Deron Dacus",
  "firstName": "Deron",
  "city": "Tyler, TX",
  "currentDomain": "dacusfirm.com",
  "currentUrl": "https://www.dacusfirm.com/",
  "previewUrl": "https://clairenhaus.com/previews/the-dacus-firm-p-c/",
  "checkedDate": "October 14, 2026",
  "images": {
    "beforeAfterDesktop": "before-after-desktop",
    "beforeAfterPhone": "before-after-phone",
    "beforeAfterAlt": "Side by side: dacusfirm.com today, and the new The Dacus Firm, P.C. site"
  },
  "findings": [
    {
      "title": "Hard to read on a phone",
      "body": "The site has no mobile setup, so a phone shows the full 980-pixel-wide desktop page shrunk to fit the screen. On an iPhone that makes everything about 40% of its normal size, so your bios, your practice areas and your phone number are tiny until a visitor pinches and zooms. Your new site is built for phones first and reflows to any screen.",
      "image": {
        "name": "phone-text",
        "width": 980,
        "height": 420,
        "alt": "Deron Dacus's bio on dacusfirm.com on a phone, beside the same bio on the new site",
        "caption": "Deron's bio on the same phone, at the same scale: today on the left, your new site on the right."
      }
    },
    {
      "title": "The map on your Contact page shows an error",
      "body": "Instead of a map, the Contact page shows Google's “This page can't load Google Maps correctly” message, with “For development purposes only” stamped across it. That usually means the map's Google account or key needs attention. On your new site the address opens directions in the visitor's own maps app with one tap, with nothing to break."
    },
    {
      "title": "Your phone numbers can’t be tapped",
      "body": "903-705-1117 appears at the top and bottom of every page, and Deron's and Shannon's direct lines appear on the bios and Contact page, but none of them is a tap-to-call link, and info@dacusfirm.com in the footer is plain text. A caller on a phone has to copy the number or type it in. On your new site every number and email opens the phone or mail app with one tap."
    },
    {
      "title": "Your best results look undated",
      "body": "The News page and the home page show only a month and day, like “Sep. 12”, with no year. Open the items and the newest is from September 2017; the rest are from 2014 to 2016. The “click here” link on the Lowrance verdict story, your $39 million result, now leads to a “page not found” on the newspaper's site. Your new site gives every item its year and keeps the results on your own pages."
    },
    {
      "title": "Nothing tells Google or AI who you are",
      "body": "There is no structured data, the behind-the-scenes labels that tell search engines and AI assistants your address, phone, attorneys and practice areas. Your attorney, practice and contact pages have no description of their own, there is no sitemap or robots.txt (both return “page not found”), and the home page still tells Google its main address is the old, non-secure http:// version. Your new site carries all of it on every page, plus an FAQ answered only from your own facts."
    },
    {
      "title": "Signs the site isn’t being kept up",
      "body": "The Contact form's “Concerning” list still offers Peter Kerr, who isn't on your Attorneys page. The home page's practice strip shows five of your six practice areas and leaves out Catastrophic Injury and Wrongful Death. Each page we checked logs a script error left over from the home page slideshow, and the only analytics is Google's old version, which stopped counting visits in July 2023. Your new site is current and easy to keep up to date."
    }
  ],
  "agreement": {
    "firmLegalName": "The Dacus Firm, P.C.",
    "firmAddress": "821 ESE Loop 323, Suite 430, Tyler, TX 75701",
    "domain": "dacusfirm.com",
    "clientEmail": "ddacus@dacusfirm.com",
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
