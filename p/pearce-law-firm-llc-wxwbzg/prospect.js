/* PROSPECT DATA: the only file to edit for a new prospect.
   Copy this whole folder to /p/<firm>-<6 random chars>/, edit the values below,
   and replace the three images in img/ (same file names). Values written as
   "[LIKE THIS]" show highlighted on the agreement page as blanks still to fill. */
window.PROSPECT = {
  firmName: "Pearce Law Firm, LLC",
  attn: "Dixon F. Pearce, II",            // optional; "" hides it
  firstName: "Dixon",                    // used on the thank-you page; "" for none
  city: "Mt. Pleasant, SC",
  currentDomain: "pearce-law.com",
  currentUrl: "https://www.pearce-law.com/",
  previewUrl: "https://clairenhaus.com/previews/pearce-law-firm-llc/",
  checkedDate: "October 14, 2026",   // day the findings below were last checked; shown on the sales page

  images: {
    beforeAfterDesktop: "before-after-desktop",   // img/<name>.webp + .jpg
    beforeAfterPhone: "before-after-phone",
    beforeAfterAlt: "Side by side: pearce-law.com today, and the new Pearce Law Firm, LLC site"
  },

  // What we found on the current site (checked live Oct 14, 2026). First item may carry a screenshot.
  findings: [
    {
      title: "Hard to read on a phone",
      body: "The site has no mobile setup, so a phone shows the full 1,004-pixel-wide desktop page shrunk to fit the screen. On an iPhone that makes the text about 40% of its normal size, and visitors have to pinch and zoom to read about your services or your team. Your new site is built for phones first and reflows to any screen.",
      image: { name: "phone-text", width: 980, height: 420, alt: "The Attorneys and Staff page of pearce-law.com on a phone, beside the same bios on the new site", caption: "The same staff bios on the same phone: today on the left, your new site on the right." }
    },
    {
      title: "Your phone number can\u2019t be tapped",
      body: "On every page, 843-972-0860 is part of the header picture, so it can\u2019t be tapped, copied, or read by search engines, and the Contact page shows it as plain text. A client on a phone has to type it in by hand. On your new site the number is a one-tap call button on every page."
    },
    {
      title: "No email address shows anywhere",
      body: "Your Contact page has a list of email addresses, including closings@pearce-law.com, but it is switched off in the page\u2019s code, so visitors see only a phone and fax number. Your new site puts the closings email on every page, plus a fee-quote request form."
    },
    {
      title: "Every page has the same title",
      body: "All five pages, from Firm Profile to Contact, carry the same title, \u201cPearce Law Firm | Charleston SC | Residential real estate practice\u201d, and none has a page description. In Google results and browser tabs they all look alike. Your new site gives each of its 16 pages its own title and description."
    },
    {
      title: "Nothing tells Google or AI who you are",
      body: "There is no structured data, the behind-the-scenes labels that tell search engines and AI assistants your address, phone, attorney, services and the communities you serve, and no FAQ content for them to draw answers from. Your new site carries all of it on every page, plus twelve FAQs written only from facts on your own site."
    },
    {
      title: "Some facts on the site have gone stale",
      body: "The Firm Profile says you have \u201cover 25 years experience,\u201d but you have practiced since 1992, which is now 34 years. A staff bio still says she moved to Daniel Island \u201calmost 5 years ago.\u201d Your new site states dates instead, like \u201cpracticing in the local area since 1992,\u201d so it stays accurate."
    },
    {
      title: "Wrong addresses show a bare error page",
      body: "A mistyped or outdated address on pearce-law.com shows a plain server message, \u201c404 Not Found,\u201d with no menu or link back, and there is no sitemap (sitemap.xml) for search engines to read. Your new site launches with a sitemap and a branded \u201cpage not found\u201d page that leads visitors back."
    }
  ],

  // Agreement fields. Anything still "[IN BRACKETS]" is a blank Michelle fills before sending.
  agreement: {
    firmLegalName: "Pearce Law Firm, LLC",
    firmAddress: "1476 Ben Sawyer Blvd, Suite 1, Mt. Pleasant, SC 29464",
    domain: "pearce-law.com",
    clientEmail: "dixon@pearce-law.com",
    pageLimit: "16",
    paymentMethod: "card or bank payment through Stripe",
    hourlyRate: "$125 per hour",
    pauseDays: "30",
    handoverDays: "14",
    liabilityMonths: "3",
    governingState: "Georgia",
    clairenTitle: "Founder"
  }
};
