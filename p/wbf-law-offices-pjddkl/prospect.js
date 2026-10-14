/* PROSPECT DATA: the only file to edit for a new prospect.
   Copy this whole folder to /p/<firm>-<6 random chars>/, edit the values below,
   and replace the three images in img/ (same file names). Values written as
   "[LIKE THIS]" show highlighted on the agreement page as blanks still to fill. */
window.PROSPECT = {
  "firmName": "WBF Law Offices",
  "attn": "William Bradley Fox",
  "firstName": "William",
  "city": "Deerfield, IL",
  "currentDomain": "wbflawllc.com",
  "currentUrl": "https://www.wbflawllc.com/",
  "previewUrl": "https://clairenhaus.com/previews/wbf-law-offices/",
  "checkedDate": "October 14, 2026",
  "images": {
    "beforeAfterDesktop": "before-after-desktop",
    "beforeAfterPhone": "before-after-phone",
    "beforeAfterAlt": "Side by side: wbflawllc.com today, and the new site for WBF Law Offices"
  },
  "findings": [
    {
      "title": "Tapping the menu on a phone opens an empty screen",
      "body": "On a phone, wbflawllc.com shows a menu button in the top corner. Tapping it opens a dark, full-screen menu with nothing in it, because no pages have been added to the site’s navigation. On a computer the header shows only your logo, and the one way to reach your Contact page is a button near the bottom of the homepage. Your new site has a real menu on every page, with each practice area, your profile, an FAQ and a call button.",
      "image": {
        "name": "empty-menu",
        "width": 980,
        "height": 923,
        "alt": "The wbflawllc.com menu opened on a phone, showing an empty dark screen, beside the menu of the new site",
        "caption": "The menu on wbflawllc.com, opened on a phone today (left), and the menu on your new site (right)."
      }
    },
    {
      "title": "Your practice areas are bullet points inside a résumé",
      "body": "The homepage is laid out like a résumé: education, then employment dates, then your eight practice areas as bullet points, from Estate Planning to GRATs and Section 457 plans, then three publications. There is no page that explains any of those services, and none that a search engine could show to someone looking for help with one of them. Your Duke J.D., your NYU LL.M. in Taxation and your years as a tax partner at Lyon & Caron (2002 to 2024) deserve more than a list. Your new site gives each practice area its own page, with a full profile for you and an About page for the firm.",
      "image": {
        "name": "resume-homepage",
        "width": 980,
        "height": 923,
        "alt": "The practice list in the middle of the wbflawllc.com homepage on a phone, beside the new Practice Areas page",
        "caption": "Your practice areas on wbflawllc.com today (left), and the Practice Areas page on your new site (right)."
      }
    },
    {
      "title": "Your phone number and email can’t be tapped",
      "body": "(224) 241-7063 and wfox@wbflawllc.com appear on both pages of the site as plain text, with no tap-to-call or tap-to-email link anywhere, so a visitor on a phone has to copy or retype them. On your new site the number and email open with one tap on every page, and a call button stays at the bottom of the screen on phones."
    },
    {
      "title": "Search engines get very little to work with",
      "body": "Both pages have an empty page description, the text Google often shows under your name in results. The homepage title is just “WBF Law Offices”, and the Contact page is titled “Contact 1 — WBF Law Offices”, a template name that shows in browser tabs. The site’s structured data (the behind-the-scenes labels Google and AI assistants read) names the website only, with no address, phone, attorney or practice areas. Your new site gives every page a clear title and description, and labels your office, phone, credentials and practice areas, plus an FAQ answered only from your own information."
    }
  ],
  "agreement": {
    "firmLegalName": "WBF Law Office, LLC",
    "firmAddress": "790 Estate Drive, Suite 200, Deerfield, IL 60015",
    "domain": "wbflawllc.com",
    "clientEmail": "wfox@wbflawllc.com",
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
