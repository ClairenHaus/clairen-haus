/* PROSPECT DATA: the only file to edit for a new prospect.
   Copy this whole folder to /p/<firm>-<6 random chars>/, edit the values below,
   and replace the three images in img/ (same file names). Values written as
   "[LIKE THIS]" show highlighted on the agreement page as blanks still to fill. */
window.PROSPECT = {
  "firmName": "Grimes, Fay & Kopp",
  "attn": "Elton W. Fay and Andrew C. Kopp",
  "firstName": "",
  "city": "Columbia, MO",
  "currentDomain": "gfklawfirm.com",
  "currentUrl": "https://www.gfklawfirm.com/",
  "previewUrl": "https://clairenhaus.com/previews/grimes-fay-and-kopp/",
  "checkedDate": "October 14, 2026",
  "images": {
    "beforeAfterDesktop": "before-after-desktop",
    "beforeAfterPhone": "before-after-phone",
    "beforeAfterAlt": "Side by side: gfklawfirm.com today, and the new site for Grimes, Fay & Kopp"
  },
  "findings": [
    {
      "title": "Hard to read on a phone",
      "body": "Every page tells phones to lay it out 1,000 pixels wide, so an iPhone shows the full desktop page shrunk to about 39% of its normal size. The 18-pixel body text ends up roughly 7 pixels tall, and visitors have to pinch and zoom to read about your practice or find your hours. Your new site is built for phones first and reflows to any screen.",
      "image": {
        "name": "phone-text",
        "width": 980,
        "height": 749,
        "alt": "The Divorce, Custody & Adoption page of gfklawfirm.com on a phone, beside the same page on the new site",
        "caption": "Your family law page on the same phone: today on the left, your new site on the right. Checked October 14, 2026."
      }
    },
    {
      "title": "Calling or finding you takes extra steps",
      "body": "None of the phone numbers on the site are set up as tap-to-call links, and the gold “Call Us Today” button on the home page opens the Contact page instead of dialing. The maps on the Location page are still pictures, so they can’t be tapped for directions. On your new site both office numbers are one-tap call buttons, with a call bar for Columbia and Centralia that stays at the bottom of the screen on phones, and each office has a directions link."
    },
    {
      "title": "Nothing tells Google or AI who you are",
      "body": "None of the 13 pages in your sitemap has a page description for search results, so Google writes its own snippet, and the home page has no main heading. There is also no structured data, the behind-the-scenes labels that tell search engines and AI assistants your two offices, phone numbers, hours and practice areas. Your new site carries all of it on every page, plus thirteen FAQs written only from facts on your own site."
    },
    {
      "title": "Dates that undersell the firm",
      "body": "The footer still reads © 2014, which can make visitors wonder whether the site is kept up. The Our Firm page says the firm has served Mid-Missouri “for more than 50 years” and was started “over 60 years ago”, while the same page dates the practice to 1946, so both figures sell your history short by decades. Your new site states the 1946 start plainly and leaves out counts that go stale."
    },
    {
      "title": "A few typos on key pages",
      "body": "Small slips can catch a careful reader’s eye: the Personal Injury page says “personal injury clams”, and the family law page has “non-nonsense legal counsel” and “all are of family and domestic relations”. Your new site’s copy keeps your own wording and corrects these."
    }
  ],
  "agreement": {
    "firmLegalName": "Grimes, Fay & Kopp, LLC",
    "firmAddress": "11 N 5th Street, Columbia, MO 65201",
    "domain": "gfklawfirm.com",
    "clientEmail": "info@gfklawfirm.com",
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
