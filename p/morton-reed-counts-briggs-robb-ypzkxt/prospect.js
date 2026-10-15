/* PROSPECT DATA: the only file to edit for a new prospect.
   Copy this whole folder to /p/<firm>-<6 random chars>/, edit the values below,
   and replace the three images in img/ (same file names). Values written as
   "[LIKE THIS]" show highlighted on the agreement page as blanks still to fill. */
window.PROSPECT = {
  "firmName": "Morton Reed Counts Briggs & Robb",
  "attn": "Nicholas K. Robb",
  "firstName": "Nick",
  "city": "St. Joseph, MO",
  "currentDomain": "mortonreedlaw.com",
  "currentUrl": "https://www.mortonreedlaw.com/",
  "previewUrl": "https://clairenhaus.com/previews/morton-reed-counts-briggs-robb/",
  "checkedDate": "October 14, 2026",
  "images": {
    "beforeAfterDesktop": "before-after-desktop",
    "beforeAfterPhone": "before-after-phone",
    "beforeAfterAlt": "Side by side: mortonreedlaw.com today, and the new site for Morton Reed Counts Briggs & Robb"
  },
  "findings": [
    {
      "title": "Hard to read on a phone",
      "body": "The site has no mobile setup, so a phone lays every page out 1,170 pixels wide and shrinks it to a third of its size. The attorney bios and practice-area pages are set in 11- and 12-pixel text, so on an iPhone they show at about 4 pixels, and visitors have to pinch and zoom to read about your attorneys. Your new site is built for phones first and reflows to any screen.",
      "image": {
        "name": "phone-text",
        "width": 900,
        "height": 823,
        "alt": "Nick Robb’s bio on mortonreedlaw.com on a phone, beside the same bio on the new site",
        "caption": "The same bio on the same phone: today on the left, your new site on the right. Checked October 14, 2026."
      }
    },
    {
      "title": "Your phone number is part of a picture",
      "body": "The address and 816-232-8411 at the top of every page are part of the logo image, not text, so nobody can tap the number to call or copy it, and on a phone it shrinks with the rest of the page. The only place the number is written out is one sentence on the Contact page, and it isn’t a link there either: none of the site’s 17 pages has a tap-to-call link. On your new site the number is a one-tap call button on every page, with a call bar that stays at the bottom of the screen on phones."
    },
    {
      "title": "The home page photos start on a blank slide",
      "body": "On a computer, the photo slideshow on your home page opens on an empty slide, so the right half of the page sits blank and white for the first five seconds before the first photo appears. First-time visitors decide quickly, and that is the first thing they see. Your new home page opens with your history, your new address and a call button, all visible at once."
    },
    {
      "title": "Search engines get an incomplete picture",
      "body": "Your home page title is simply “Morton Reed”, with no mention of attorneys, law or St. Joseph. The sitemap the site gives search engines lists 16 pages but leaves out Blair Merrigan’s profile, and none of the 17 pages carries structured data, the behind-the-scenes labels that tell search engines and AI assistants your address, phone, attorneys and practice areas. Your new site has a clear title on every page, a complete sitemap, structured data throughout, and twelve FAQs written only from facts on your own site."
    }
  ],
  "agreement": {
    "firmLegalName": "Morton, Reed, Counts, Briggs & Robb, LLC",
    "firmAddress": "2301-B Village Drive, St. Joseph, MO 64506",
    "domain": "mortonreedlaw.com",
    "clientEmail": "nrobb@mortonreedlaw.com",
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
