/* PROSPECT DATA: the only file to edit for a new prospect.
   Copy this whole folder to /p/<firm>-<6 random chars>/, edit the values below,
   and replace the three images in img/ (same file names). Values written as
   "[LIKE THIS]" show highlighted on the agreement page as blanks still to fill. */
window.PROSPECT = {
  "firmName": "Law Office of Scott N. King",
  "attn": "Scott N. King",
  "firstName": "Scott",
  "city": "Needham, MA",
  "currentDomain": "scottkinglaw.com",
  "currentUrl": "https://scottkinglaw.com/",
  "previewUrl": "https://clairenhaus.com/previews/law-office-of-scott-n-king/",
  "checkedDate": "October 14, 2026",
  "images": {
    "beforeAfterDesktop": "before-after-desktop",
    "beforeAfterPhone": "before-after-phone",
    "beforeAfterAlt": "Side by side: scottkinglaw.com today, and the new site for the Law Office of Scott N. King"
  },
  "findings": [
    {
      "title": "Hard to read on a phone",
      "body": "The site has no mobile setup, so a phone lays every page out 980 pixels wide and shrinks it to about 40% of its size. Your page text is set at 13 pixels, so on an iPhone it shows at about 5 pixels, and visitors have to pinch and zoom to read your bios or find your number. Your new site is built for phones first and reflows to any screen.",
      "image": {
        "name": "phone-text",
        "width": 900,
        "height": 701,
        "alt": "The attorney bios on scottkinglaw.com on a phone, beside Scott N. King’s bio on the new site",
        "caption": "The same bio on the same phone: today on the left, your new site on the right. Checked October 14, 2026."
      }
    },
    {
      "title": "A button on every page leads to “Under Construction”",
      "body": "The “Calculate Cost of Owner’s Title Policy” button is in the menu on all 13 pages, and your Buyer Information page says “Click here to calculate the cost of owner’s title insurance.” Both open a page that says only “Under Construction”. Your new site replaces it with a full Owner’s Title Insurance page, covering what the policy protects, the Eagle policy and first-time buyer discounts, with a one-tap call to your office."
    },
    {
      "title": "Your contact details don’t agree",
      "body": "Your Contact page lists the fax as 339-777-5126, but the footer of every page and your Lender page give 781-431-7701. The street reads “163 Highland Avenue” on the Contact and Directions pages and “163 Highland St” in every footer. On the Our Staff page, the link shown as Maria@scottkinglaw.com actually opens an email to closings@scottkinglaw.com. Your new site shows one set of details everywhere, and we’ll confirm the right fax number with you before launch."
    },
    {
      "title": "Search engines can’t tell your pages apart",
      "body": "12 of your 13 pages carry the same title, “Law Office of Scott N. King”, and none has a page description, so in Google results the Lender, Buyer and Seller pages all look alike. 617-332-1202 is plain text on every page, so it can’t be tapped to call, and the site has no sitemap and no structured data (the behind-the-scenes labels that tell search engines and AI assistants your address, phone, attorneys and services). Your new site has its own title and description on every page, tap-to-call everywhere, a sitemap, and an FAQ answered only from your own information."
    },
    {
      "title": "Small signs the site isn’t kept up",
      "body": "The home page footer still reads © 2009 (the other pages say 2019). The “First time homebuyer Information” link on your Useful Information page now lands on a “page not found” screen at HUD. The menu buttons are pictures of words, and the Lender button is labelled “Buyer/Seller” behind the scenes, which is what screen readers and search engines read. Your new site uses real text links with correct labels and current resource links."
    }
  ],
  "agreement": {
    "firmLegalName": "Law Office of Scott N. King",
    "firmAddress": "Staples Studio, 163 Highland Avenue, Needham, MA 02494",
    "domain": "scottkinglaw.com",
    "clientEmail": "sking@scottkinglaw.com",
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
