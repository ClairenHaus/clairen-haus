/* PROSPECT DATA: the only file to edit for a new prospect.
   Copy this whole folder to /p/<firm>-<6 random chars>/, edit the values below,
   and replace the three images in img/ (same file names). Values written as
   "[LIKE THIS]" show highlighted on the agreement page as blanks still to fill. */
window.PROSPECT = {
  firmName: "Callow & Associates, P.L.L.C.",
  attn: "Thomas Callow",            // optional; "" hides it
  firstName: "Thomas",                 // used on the thank-you page; "" for none
  city: "Bloomfield Hills, MI",
  currentDomain: "callowlaw.com",
  currentUrl: "http://callowlaw.com/",
  previewUrl: "https://clairenhaus.com/previews/callow-associates-pllc/",
  checkedDate: "October 13, 2026",   // day the findings below were last checked; shown on the sales page

  images: {
    beforeAfterDesktop: "before-after-desktop",   // img/<name>.webp + .jpg
    beforeAfterPhone: "before-after-phone",
    beforeAfterAlt: "Side by side: callowlaw.com today, and the new Callow & Associates site"
  },

  // What we found on the current site (checked live Oct 13, 2026). First item may carry a screenshot.
  findings: [
    {
      title: "Hard to read on a phone",
      body: "The site has no mobile setup, so a phone shows the whole 1,028-pixel-wide desktop page shrunk to fit the screen. On an iPhone that makes the attorney bios and your address about 38% of their normal size, and visitors have to pinch and zoom to read them. Your new site is built for phones first and reflows to any screen.",
      image: { name: "phone-text", width: 980, height: 420, alt: "The attorney bios on callowlaw.com on a phone, beside Charles Lillie\u2019s bio on the new site", caption: "The same bios on the same phone: today on the left, your new site on the right." }
    },
    {
      title: "The secure version of the site shows a warning",
      body: "Anyone who opens https://callowlaw.com gets a browser warning instead of your site: the security certificate it presents is issued to the hosting company\u2019s own domain (hostingplatform.com), not to callowlaw.com, and it expired on July 3, 2026. The plain http:// version loads, but browsers label it \u201cNot secure\u201d. Your new site launches on https with a valid certificate."
    },
    {
      title: "Your phone number is part of a picture",
      body: "The 248-609-9720 at the top of the page is drawn into the header image, so it can\u2019t be tapped to call, copied, or read by Google. The number lower on the page is plain text, also not tappable. On your new site every number and email opens the phone or mail app with one tap."
    },
    {
      title: "One page for six practice areas",
      body: "Estate planning, probate and trusts, taxation, employee benefits, real estate and closely held businesses are mentioned only inside two short bios, on a single page. There is no page for any of them, so someone searching for an estate planning or probate lawyer in Bloomfield Hills has nothing specific to land on. Your new site gives each area its own page, plus a page for each attorney, an FAQ and a contact page."
    },
    {
      title: "Nothing tells Google or AI who you are",
      body: "The page has no description, no headings, and no structured data, the behind-the-scenes labels that tell search engines and AI assistants your address, phone, attorneys and practice areas. Your new site carries all of it on every page, plus eleven FAQs answered only from facts on your own site."
    }
  ],

  // Agreement fields. Anything still "[IN BRACKETS]" is a blank Michelle fills before sending.
  agreement: {
    firmLegalName: "Callow & Associates, P.L.L.C.",
    firmAddress: "41000 Woodward Ave, Suite 120 East, Bloomfield Hills, MI 48304",
    domain: "callowlaw.com",
    clientEmail: "tcallow@callowlaw.com",
    pageLimit: "14",
    paymentMethod: "card or bank payment through Stripe",
    hourlyRate: "$125 per hour",
    pauseDays: "30",
    handoverDays: "14",
    liabilityMonths: "3",
    governingState: "Georgia",
    clairenTitle: "Founder"
  }
};
