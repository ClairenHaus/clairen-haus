/* PROSPECT DATA: the only file to edit for a new prospect.
   Copy this whole folder to /p/<firm>-<6 random chars>/, edit the values below,
   and replace the three images in img/ (same file names). Values written as
   "[LIKE THIS]" show highlighted on the agreement page as blanks still to fill. */
window.PROSPECT = {
  firmName: "Law Offices of Christopher P. Taylor, P.A.",
  attn: "Christopher P. Taylor",            // optional; "" hides it
  firstName: "Christopher",                  // used on the thank-you page; "" for none
  city: "Delray Beach, FL",
  currentDomain: "cptprobatelaw.com",
  currentUrl: "https://www.cptprobatelaw.com/",
  previewUrl: "https://clairenhaus.com/previews/law-offices-of-christopher-p-taylor-p-a/",
  checkedDate: "October 13, 2026",   // day the findings below were last checked; shown on the sales page

  images: {
    beforeAfterDesktop: "before-after-desktop",   // img/<name>.webp + .jpg
    beforeAfterPhone: "before-after-phone",
    beforeAfterAlt: "Side by side: cptprobatelaw.com today, and the new Law Offices of Christopher P. Taylor site"
  },

  // What we found on the current site (checked live Oct 13, 2026). First item may carry a screenshot.
  findings: [
    {
      title: "Hard to read on a phone",
      body: "The site has no mobile setup, so a phone shows the full desktop page, about 980 pixels wide, shrunk to fit the screen. Your detailed articles on will contests and probate end up in tiny print that visitors have to pinch and zoom to read. Your new site is built for phones first and reflows to any screen.",
      image: { name: "phone-text", width: 980, height: 420, alt: "The Florida Will Contests page of cptprobatelaw.com on a phone, beside the same topic on the new site", caption: "The same will contest content on the same phone: today on the left, your new site on the right." }
    },
    {
      title: "Your phone number opens a map to a different address",
      body: "On the Contact page, tapping \u201cTelephone: +1 (561) 455-0677\u201d or your email address doesn\u2019t call or email you. Both open Google Maps to 150 N Swinton Ave, not your office at 301 W. Atlantic Ave. Elsewhere the number is plain text, so it can\u2019t be tapped at all. On your new site every number and email opens the phone or mail app with one tap, and the map points to your office."
    },
    {
      title: "One practice page in your menu is blank",
      body: "\u201cBreach of Fiduciary Duty, Removal and Surcharge\u201d is listed under Probate & Trust Litigation, but the page shows only its heading. A visitor looking for help with a trustee or personal representative finds nothing there. Your new site covers it alongside your other litigation work."
    },
    {
      title: "The newest article is from 2015",
      body: "Your home page lists \u201cRecent Posts\u201d, and the newest is from October 2015. The writing itself is genuinely useful, but the dates can make visitors wonder whether the site, and the practice, are current. Your new site keeps your articles in a Guides section, each with its date and a clear note to call before relying on it."
    },
    {
      title: "Your page titles run together",
      body: "Inner pages carry titles like \u201cFlorida Will Contests - Law Offices of Christopher P. TaylorChristopher P. Taylor \u2013 Florida Probate Lawyer\u201d, with the firm name repeated and no space. That is what shows in Google results and browser tabs. The home page also has no main heading. Each page on your new site has its own clean title and description."
    },
    {
      title: "Part of the design is blocked by browsers",
      body: "Every page asks for its heading font over an insecure (http://) link while the site itself is secure, so browsers block it and log an error. The site also still runs on 2011-era code (jQuery 1.6.4) and Flash-era scripts. Your new site is lightweight, secure throughout, and has no outdated code."
    },
    {
      title: "Nothing tells Google or AI who your firm is",
      body: "The site has only basic page labels. There is no structured data giving search engines and AI assistants your address, phone, attorney and practice areas, and no FAQ content for them to draw answers from. Your new site carries all of it on every page, plus eleven FAQs written only from facts on your own site."
    }
  ],

  // Agreement fields. Anything still "[IN BRACKETS]" is a blank Michelle fills before sending.
  agreement: {
    firmLegalName: "Law Offices of Christopher P. Taylor, P.A.",
    firmAddress: "301 W. Atlantic Ave., Ste. 0-2, Delray Beach, FL 33444",
    domain: "cptprobatelaw.com",
    clientEmail: "cpt@cptprobatelaw.com",
    pageLimit: "12",
    paymentMethod: "card or bank payment through Stripe",
    hourlyRate: "$125 per hour",
    pauseDays: "30",
    handoverDays: "14",
    liabilityMonths: "3",
    governingState: "Georgia",
    clairenTitle: "Founder"
  }
};
