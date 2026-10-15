/* PROSPECT DATA: the only file to edit for a new prospect.
   Copy this whole folder to /p/<firm>-<6 random chars>/, edit the values below,
   and replace the three images in img/ (same file names). Values written as
   "[LIKE THIS]" show highlighted on the agreement page as blanks still to fill. */
window.PROSPECT = {
  "firmName": "Katie Marie Law, PC",
  "attn": "Katherine Baluha",
  "firstName": "Katie",
  "city": "Freeland, MI",
  "currentDomain": "katiemarielaw.com",
  "currentUrl": "http://katiemarielaw.com/",
  "previewUrl": "https://clairenhaus.com/previews/katie-marie-law-pc/",
  "checkedDate": "October 14, 2026",
  "images": {
    "beforeAfterDesktop": "before-after-desktop",
    "beforeAfterPhone": "before-after-phone",
    "beforeAfterAlt": "Side by side: katiemarielaw.com today, and the new Katie Marie Law, PC site"
  },
  "findings": [
    {
      "title": "Hard to read on a phone",
      "body": "The site has no mobile setup, so a phone lays every page out about 1,208 pixels wide and shrinks it to roughly a third of its size. On an iPhone, text that is 18 pixels on a desktop shows at about 6 pixels, and the pink menu buttons become a thin strip you have to pinch and zoom to tap. Your new site is built for phones first and reflows to any screen.",
      "image": {
        "name": "phone-text",
        "width": 980,
        "height": 623,
        "alt": "The top of katiemarielaw.com on an iPhone, beside the same view of the new site",
        "caption": "The same phone, the same moment: today on the left, your new site on the right."
      }
    },
    {
      "title": "Keyword stuffing in your page titles",
      "body": "On your What We Do, Family Law and Divorce pages, a coding error puts a hidden list of 23 search phrases into the page title, so browsers and search engines read titles like “KatieMarieLaw, Trial Family Law Firm> <meta name=\"keywords\" content=\"family law, custody, attorney, divorce … lawyers in Midland, lawyers in Saginaw, lawyers in Bay City …”. That is keyword stuffing. Google’s spam policies name keyword stuffing directly, including blocks of text listing the cities a page is trying to rank for, and pages that break those policies can rank lower or drop out of results altogether. Your new site gives every page one clean, readable title and a real description.",
      "image": {
        "name": "keyword-title",
        "width": 980,
        "height": 442,
        "alt": "The full page title of katiemarielaw.com/Divorce.htm, with its 23 search phrases highlighted",
        "caption": "Your Divorce page’s title, copied exactly. The highlighted part is the keyword list."
      }
    },
    {
      "title": "An expired security certificate",
      "body": "The security certificate for katiemarielaw.com expired on May 19, 2026. Anyone who opens the site at https://katiemarielaw.com gets a full-page “Your connection is not private” warning instead of your home page, and the plain http version is the only one that works, which browsers label “Not secure”. Your new site launches on https with a certificate that renews automatically."
    },
    {
      "title": "Page addresses that don’t match the page",
      "body": "Your Adoption page lives at katiemarielaw.com/CriminalLaw.htm and is titled “Criminal Law Practice”. Your Custody page is at /EstatePlan.htm, and your Child Support page is at /BusinessLaw.htm. Search engines go by those names and titles, so an adoption page is being described to Google as criminal law. Your new site gives each practice area its own clearly named page."
    },
    {
      "title": "Your phone number can’t be tapped",
      "body": "None of the 13 pages lets a phone visitor tap (989) 573-8330 to call; the number is plain text or part of a picture. On your new site the number is a tap-to-call button in the header of every page, and your email is a tap-to-send link."
    },
    {
      "title": "Search engines get almost nothing to work with",
      "body": "None of the 13 pages has a working page description, there is no structured data (the behind-the-scenes labels that tell Google and AI assistants your address, phone, attorney and practice areas), and katiemarielaw.com/sitemap.xml returns “not found”. The menu buttons are pictures with no text labels, so search engines and screen readers can’t read your menu. Your new site has a real description and structured data on every page, a sitemap, real-text menus, and ten FAQs written only from facts on your own site."
    },
    {
      "title": "Built with tools from around 2000",
      "body": "The pages were made in Microsoft FrontPage 4.0, with a fixed table layout and image buttons, and small details have drifted: the copyright reads 2023 on most pages but “KatieMarieLaw PLC 2010-2019” on the Location page. Your new site has a modern layout, a page for each practice area, a full profile page for Katie, and a team page that includes Bridgette."
    }
  ],
  "agreement": {
    "firmLegalName": "Katie Marie Law, PC",
    "firmAddress": "5798 Midland Road, Freeland, MI 48623",
    "domain": "katiemarielaw.com",
    "clientEmail": "kmlaw@katiemarielaw.com",
    "pageLimit": "13",
    "paymentMethod": "card or bank payment through Stripe",
    "hourlyRate": "$125 per hour",
    "pauseDays": "30",
    "handoverDays": "14",
    "liabilityMonths": "3",
    "governingState": "Georgia",
    "clairenTitle": "Founder"
  }
};
