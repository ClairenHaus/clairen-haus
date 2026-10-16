/* PROSPECT DATA: the only file to edit for a new prospect.
   Copy this whole folder to /p/<firm>-<6 random chars>/, edit the values below,
   and replace the three images in img/ (same file names). Values written as
   "[LIKE THIS]" show highlighted on the agreement page as blanks still to fill. */
/* PRICE (Michelle, Oct 16 2026): this firm's build is $2,997, not the shared $3,000.
   $1,500 deposit on signing (the shared $1,500 deposit link in /p/assets/config.js) + $1,497 at launch,
   then the $199/month care plan (first month free). Overrides CH_CONFIG.price for this page only. */
window.CH_CONFIG = window.CH_CONFIG || {};
window.CH_CONFIG.price = { build: 2997, deposit: 1500, balance: 1497, care: 199 };

window.PROSPECT = {
  firmName: "Law Office of William H. Mulder",
  attn: "William H. Mulder",            // optional; "" hides it
  firstName: "William",                    // used on the thank-you page; "" for none
  city: "Saddle Brook, NJ",
  currentDomain: "williammulder.com",
  currentUrl: "https://www.williammulder.com/",
  previewUrl: "https://clairenhaus.com/previews/william-mulder/",
  checkedDate: "October 16, 2026",   // day the findings below were last checked; shown on the sales page

  images: {
    beforeAfterDesktop: "before-after-desktop",   // img/<name>.webp + .jpg
    beforeAfterPhone: "before-after-phone",
    beforeAfterAlt: "Side by side: williammulder.com today, and the new Law Office of William H. Mulder site"
  },

  // What we found on the current site (checked live Oct 16, 2026). First item may carry a screenshot.
  findings: [
    {
      title: "The map on your Directions page points to the wrong address",
      body: "Your Map & Directions page lists the office at 479 N. Midland Ave., but the Google map underneath it is told to look up \u201c440 N Midland Ave\u201d, so the pin and the \u201cDirections\u201d button both send visitors to 440 N Midland Ave, a different building. Anyone who follows the map from their phone ends up at the wrong door. The new site gives the address as one tap into the phone\u2019s own map app, pointed at 479 N. Midland Ave.",
      image: { name: "map-wrong-address", width: 960, height: 583, alt: "The Map & Directions page on williammulder.com: the address reads 479 N. Midland Ave. while the Google map below is pinned at 440 N Midland Ave", caption: "Your Directions page today: 479 N. Midland Ave. in the text, 440 N Midland Ave on the map." }
    },
    {
      title: "Ten of your eleven practice-area pages are hidden from Google",
      body: "Chapter 7 Bankruptcy, Chapter 13 Bankruptcy, Family Law, Real Estate, Traffic Violations, DUI/DWI, Foreclosure Defense, Estate Planning, Commercial Real Estate and Civil Litigation each carry a \u201cnoindex, nofollow\u201d tag that tells Google not to list the page. It works: a search for site:williammulder.com returns 7 pages, and none of those ten is among them. Only the home page, the profile, the practice-area index, Bankruptcy, Contact, Directions and the site map are listed, and even those carry \u201cnofollow\u201d. Someone in Bergen County searching for a DUI or estate-planning lawyer can\u2019t find those pages. Every page of the new site is open to search engines, with its own title and description."
    },
    {
      title: "Two phone numbers on the same page, and a blank fax line",
      body: "The header and the \u201cOur Office\u201d box say 201-468-9688. The footer, the attorney profile and the main block of the Contact page say 201-398-9006. On the Contact and Directions pages the main block reads \u201cPhone: 201-398-9006 Fax:\u201d with nothing after \u201cFax:\u201d, while the box beside it gives 201-468-9688 and the fax. A visitor can\u2019t tell which number reaches you. The new site shows the consultation line and the office line with clear labels, and the fax once, in one place."
    },
    {
      title: "There is no email address anywhere on the site",
      body: "None of the 17 pages shows an email address. The \u201cEmail William Howard Mulder\u201d link on your profile opens the contact form instead, and the form asks for name, company, phone, city, state, how they found you and a disclaimer tick before a message. An email (wmulderesq@aol.com) exists only in hidden code on the home page that visitors never see. The new site puts a tap-to-email link next to the phone on every page."
    },
    {
      title: "Your attorney profile shows \u201cPHOTO COMING SOON\u201d",
      body: "The only attorney page on the site carries a grey placeholder head labelled \u201cPhoto coming soon\u201d; the placeholder file was uploaded in October 2015. It is the first thing a prospective client sees on the page about you. The new profile page is built around your name, your admission and your practice areas, with a monogram mark in place of the placeholder until you send a portrait, which drops in without a redesign."
    },
    {
      title: "A dead link on the Bankruptcy page",
      body: "In the Chapter 13 paragraph, the words \u201cChapter 13\u201d link to \u201chttp://Chapter 13\u201d, an address that doesn\u2019t exist, so the click ends in a browser error instead of your Chapter 13 page. The new site\u2019s links are checked page by page."
    },
    {
      title: "Small things that add up",
      body: "When the home page link is shared in a text or on LinkedIn, the preview text reads \u201cAt the , I leverage nearly 30 years\u2026\u201d, because the firm\u2019s name is missing from the page\u2019s description tag. On a phone, body text is 13px and some of it 11px, below the 16px browsers recommend. The footer copyright reads \u201c\u00a9 2026 MH Sub I, LLC\u201d, the template vendor, rather than your firm. The structured data behind the page lists the city as \u201cNew Jersey\u201d and the state as \u201cSaddle Brook\u201d, leaves the map coordinates blank, and tells Google the office is open 24 hours a day, 7 days a week. And two retired Universal Analytics tags still load on every page alongside three newer ones. Your new site fixes all five."
    }
  ],

  // Agreement fields. Anything still "[IN BRACKETS]" is a blank Michelle fills before sending.
  agreement: {
    firmLegalName: "Law Office of William H. Mulder",
    firmAddress: "479 N. Midland Ave., Saddle Brook, NJ 07663",
    domain: "williammulder.com",
    clientEmail: "wmulderesq@aol.com",
    pageLimit: "15",
    paymentMethod: "card or bank payment through Stripe",
    hourlyRate: "$125 per hour",
    pauseDays: "30",
    handoverDays: "14",
    liabilityMonths: "3",
    governingState: "Georgia",
    clairenTitle: "Founder"
  }
};
