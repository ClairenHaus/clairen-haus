/* PROSPECT DATA: the only file to edit for a new prospect.
   Copy this whole folder to /p/<firm>-<6 random chars>/, edit the values below,
   and replace the three images in img/ (same file names). Values written as
   "[LIKE THIS]" show highlighted on the agreement page as blanks still to fill. */
window.PROSPECT = {
  "firmName": "Sinclaire Law Firm, LLC",
  "attn": "John \u201cJack\u201d Sinclaire, III",
  "firstName": "Jack",
  "city": "Charleston, SC",
  "currentDomain": "sinclairelawfirm.com",
  "currentUrl": "https://sinclairelawfirm.com/",
  "previewUrl": "https://clairenhaus.com/previews/sinclaire-law-firm/",
  "checkedDate": "October 14, 2026",
  "images": {
    "beforeAfterDesktop": "before-after-desktop",
    "beforeAfterPhone": "before-after-phone",
    "beforeAfterAlt": "Side by side: sinclairelawfirm.com today, and the new Sinclaire Law Firm site"
  },
  "findings": [
    {
      "title": "The map in your Contact Us section never appears",
      "body": "Your homepage has a Google map of 115 River Landing Drive in the Contact Us section, but it is loaded over an old, insecure (http://) link. Because the page itself is secure (https://), Chrome, Safari and other browsers block it, so visitors see an empty green box where the map should be. Your new site gives the address, phone and email as one-tap links, with Google Maps and Apple Maps buttons for directions.",
      "image": {
        "name": "map-blank",
        "width": 1572,
        "height": 649,
        "alt": "The empty map area in the Contact Us section of sinclairelawfirm.com, beside the office card on the new site",
        "caption": "Your Contact Us section today (left) and the new contact card on a phone (right)."
      }
    },
    {
      "title": "Your practice areas are a picture, not text",
      "body": "The list of what you handle, from auto accidents and nursing home abuse to DUI, drug cases and expungements, is a single image down the left side of the page. Google, AI assistants and screen readers can\u2019t read it, so someone searching for a Charleston DUI or wrongful death lawyer won\u2019t find those words anywhere on your site. Your new site gives personal injury and criminal defense their own pages, with a page each for your main areas."
    },
    {
      "title": "On a phone, it\u2019s a tiny desktop page",
      "body": "The site has no mobile setup and a fixed 910-pixel layout, so a phone shows the whole desktop page shrunk to fit. Visitors have to pinch and zoom to read your bio or find your number. Your new site is built for phones first, with a call button always in reach."
    },
    {
      "title": "Your phone number can\u2019t be tapped",
      "body": "(843) 853-9300 appears three times, always as plain text, so a visitor on a phone has to copy it or type it in to call for the free consultation. On your new site every number and email opens the phone or mail app with one tap."
    },
    {
      "title": "The homepage hasn\u2019t changed since 2013",
      "body": "Your server reports the homepage was last updated in November 2013, and the line about your years in the justice system was written then, so it now undersells your experience. The new site uses dates that stay true on their own: 17 years as a prosecutor, private practice since January 2001."
    },
    {
      "title": "Nothing tells Google or AI who you are",
      "body": "The site is one page with no page description, no main heading and no structured data, the behind-the-scenes labels that tell search engines and AI assistants your address, phone, practice areas and background. Your new site carries all of it on every page, plus eleven FAQs written only from facts on your own site."
    }
  ],
  "agreement": {
    "firmLegalName": "Sinclaire Law Firm, LLC",
    "firmAddress": "115 River Landing Drive, Suite 102, Charleston, SC 29492",
    "domain": "sinclairelawfirm.com",
    "clientEmail": "jack@sinclairelawfirm.com",
    "pageLimit": "14",
    "paymentMethod": "card or bank payment through Stripe",
    "hourlyRate": "$125 per hour",
    "pauseDays": "30",
    "handoverDays": "14",
    "liabilityMonths": "3",
    "governingState": "Georgia",
    "clairenTitle": "Founder"
  }
};
