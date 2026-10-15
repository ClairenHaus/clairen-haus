/* PROSPECT DATA: the only file to edit for a new prospect.
   Copy this whole folder to /p/<firm>-<6 random chars>/, edit the values below,
   and replace the three images in img/ (same file names). Values written as
   "[LIKE THIS]" show highlighted on the agreement page as blanks still to fill. */
window.PROSPECT = {
  "firmName": "Jere L. Loyd, P.C.",
  "attn": "Jere L. Loyd",
  "firstName": "Jere",
  "city": "St. Joseph, MO",
  "currentDomain": "loydlaw.com",
  "currentUrl": "http://www.loydlaw.com/",
  "previewUrl": "https://clairenhaus.com/previews/jere-l-loyd-pc/",
  "checkedDate": "October 14, 2026",
  "images": {
    "beforeAfterDesktop": "before-after-desktop",
    "beforeAfterPhone": "before-after-phone",
    "beforeAfterAlt": "Side by side: loydlaw.com today, and the new site for Jere L. Loyd, P.C."
  },
  "findings": [
    {
      "title": "Hard to read on a phone",
      "body": "The site has no mobile setup, so a phone lays every page out 980 pixels wide and shrinks it to about 40% of its size. Your attorney profile is set in 13-pixel text, so on an iPhone it shows at about 5 pixels, and visitors have to pinch and zoom to read your credentials or find your number. Your new site is built for phones first and reflows to any screen.",
      "image": {
        "name": "phone-text",
        "width": 900,
        "height": 823,
        "alt": "Jere L. Loyd’s attorney profile on loydlaw.com on a phone, beside the same profile on the new site",
        "caption": "The same profile on the same phone: today on the left, your new site on the right. Checked October 14, 2026."
      }
    },
    {
      "title": "The Contact page map is empty",
      "body": "Your Contact page says “Click on map to enlarge and for directions”, but the map box beside it is blank: the site builder’s map service now refuses to load inside your page. The site also has no secure (https) version, so browsers label every page “Not secure”, and (816) 364-3020 isn’t a tap-to-call link on any of its 12 pages. Your new site has a one-tap call button on every page, a directions link that opens the visitor’s maps app, and a secure address."
    },
    {
      "title": "Page titles with a typo, or no name at all",
      "body": "The title that shows in Google results and browser tabs reads “St. Jopseh, Missouri” on five pages, including your attorney profile and Contact page. All six practice-area pages share the same title, “PracticeAreas”, with no firm name, city or practice named, so in search results they look identical. Your new site gives every page its own clear title and description, plus structured data that tells search engines and AI assistants your address, phone, hours and practice areas."
    },
    {
      "title": "Some pages look unfinished",
      "body": "The Civil Litigation page is a heading with nothing under it, and Social Security Disability, Personal Injury and Wrongful Death are listed as practice areas but have no page at all. On the Resources page, the Library of Congress link points to a retired address that no longer opens, and the Missouri Bar link lands on a “page not found” screen. Your new site has a page for each of your nine practice areas, an FAQ answered from your own information, and current links throughout."
    }
  ],
  "agreement": {
    "firmLegalName": "Jere L. Loyd, P.C.",
    "firmAddress": "3715 Beck Road, Bldg. A, Suite 104, St. Joseph, MO 64506",
    "domain": "loydlaw.com",
    "clientEmail": "loydpc@swbell.net",
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
