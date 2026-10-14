/* PROSPECT DATA: the only file to edit for a new prospect.
   Copy this whole folder to /p/<firm>-<6 random chars>/, edit the values below,
   and replace the three images in img/ (same file names). Values written as
   "[LIKE THIS]" show highlighted on the agreement page as blanks still to fill. */
window.PROSPECT = {
  "firmName": "Slaughter & Slaughter, LLP",
  "attn": "Donald E. Slaughter",
  "firstName": "Don",
  "city": "Newport Beach, CA",
  "currentDomain": "slaughterlaw.com",
  "currentUrl": "https://slaughterlaw.com/",
  "previewUrl": "https://clairenhaus.com/previews/slaughter-slaughter-llp/",
  "checkedDate": "October 14, 2026",
  "images": {
    "beforeAfterDesktop": "before-after-desktop",
    "beforeAfterPhone": "before-after-phone",
    "beforeAfterAlt": "Side by side: slaughterlaw.com today, and the new Slaughter & Slaughter, LLP site"
  },
  "findings": [
    {
      "title": "On a phone, your menu shows the website software\u2019s logo instead of yours",
      "body": "Tapping the menu button on slaughterlaw.com on a phone opens a dark panel topped by the logo of Grav, the software the site is built on, rather than your S&S mark, and the only link inside it is \u201cHome\u201d. On your new site the phone menu carries your name and leads to every page: practice areas, both attorneys, about, FAQ and contact, with a Call button underneath.",
      "image": {
        "name": "phone-menu",
        "width": 980,
        "height": 779,
        "alt": "The phone menu on slaughterlaw.com, headed by the GRAV logo with a single Home link, beside the phone menu on the new site",
        "caption": "The phone menu today (left) and on your new site (right)."
      }
    },
    {
      "title": "Search engines are given the software\u2019s description, not yours",
      "body": "The description tag on your home page, the summary Google often shows under your name in search results, reads \u201cGrav is an easy to use, yet powerful, open source flat-file CMS\u201d. It is the default text that ships with the software. The page title is just \u201cHome | S&S Law\u201d, with no mention of Newport Beach, taxation, business law or estate planning. Every page on your new site has its own title and a description written from your practice."
    },
    {
      "title": "Your phone number can\u2019t be tapped, and there\u2019s no email",
      "body": "949-721-9091 appears once, at the bottom of the page, as plain text, so a visitor on a phone has to remember it and dial it by hand. The site lists no email address and has no contact form. Your new site puts a Call button on every page, a call bar that stays at the bottom of the screen on phones, and tap-to-email links for both of you."
    },
    {
      "title": "Most of what your site used to say is gone",
      "body": "Your earlier site described each practice area, from tax controversy before the IRS, the Tax Court and the Franchise Tax Board to trusts and estates, along with your backgrounds at Ball, Hunt, Brown and Baerwitz and at General Electric, and the clients you represent. Today the whole site is one page listing your education, a few practice areas and the office address. Your new site restores that content in your own words across 15 pages, including a page for each practice area and a full profile for each of you."
    },
    {
      "title": "AI assistants are turned away, and nothing describes your firm to them",
      "body": "When we requested your home page as the crawlers ChatGPT and Claude use, the site answered \u201c403 Forbidden\u201d, so those assistants can\u2019t read it. This is often a default security setting at the web host rather than a deliberate choice, and if so it can be switched off. The page also carries no structured data, the behind-the-scenes labels that tell search engines and AI assistants your address, phone, attorneys and practice areas. Your new site carries all of it on every page, plus thirteen FAQs answered only from facts on your own sites."
    }
  ],
  "agreement": {
    "firmLegalName": "Slaughter & Slaughter, LLP",
    "firmAddress": "4 Upper Newport Plaza, Suite 100, Newport Beach, CA 92660",
    "domain": "slaughterlaw.com",
    "clientEmail": "don@slaughterlaw.com",
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
