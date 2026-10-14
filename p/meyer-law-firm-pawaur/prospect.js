/* PROSPECT DATA: the only file to edit for a new prospect.
   Copy this whole folder to /p/<firm>-<6 random chars>/, edit the values below,
   and replace the three images in img/ (same file names). Values written as
   "[LIKE THIS]" show highlighted on the agreement page as blanks still to fill. */
window.PROSPECT = {
  firmName: "Meyer Law Firm",
  attn: "Colette K. Meyer",            // optional; "" hides it
  firstName: "Colette",                    // used on the thank-you page; "" for none
  city: "Jupiter, FL",
  currentDomain: "meyerlawfirmfl.com",
  currentUrl: "http://meyerlawfirmfl.com/",
  previewUrl: "https://clairenhaus.com/previews/meyer-law-firm/",
  checkedDate: "October 14, 2026",   // day the findings below were last checked; shown on the sales page

  images: {
    beforeAfterDesktop: "before-after-desktop",   // img/<name>.webp + .jpg
    beforeAfterPhone: "before-after-phone",
    beforeAfterAlt: "Side by side: meyerlawfirmfl.com today, and the new Meyer Law Firm site"
  },

  // What we found on the current site (checked live Oct 14, 2026). First item may carry a screenshot.
  findings: [
    {
      title: "The map on your Contact page shows Australia",
      body: "Visitors who open your Contact page see Google\u2019s \u201cThis page can\u2019t load Google Maps correctly\u201d message, a map stamped \u201cFor development purposes only\u201d, and the map is centered on the Upper Nepean area of New South Wales, Australia instead of Jupiter. The map key behind it no longer works. Your new site gives the address, phone and email as one-tap links and a direct link to directions in the phone\u2019s map app.",
      image: { name: "map-error", width: 1330, height: 437, alt: "The broken Google map on the meyerlawfirmfl.com Contact page, beside the contact details on the new site", caption: "Your Contact page today (left) and the new contact page (right)." }
    },
    {
      title: "The Real Estate page lists a different phone number and email",
      body: "Every page footer shows 561.748.7720 and the client services email, except the Real Estate page, which shows T: 561.748.9878, F: 888.994.2010, and an \u201cEmail Us\u201d button addressed to mike@MeyerLawFirmFL.com. A client reading about a closing could easily call or write to the wrong place. The new site uses one set of contact details everywhere."
    },
    {
      title: "Browsers warn visitors before they reach you",
      body: "The site only loads on plain http://, which Chrome and Safari label \u201cNot secure\u201d. Anyone who types or follows https://meyerlawfirmfl.com gets a full-page security warning, because the certificate on the server belongs to the hosting company (sni.dreamhost.com), not to your domain. Your new site launches on https:// with a valid certificate."
    },
    {
      title: "A second copy of your site lives at an old development address",
      body: "Many of your photos and internal links, including your logo, the team photos and the practice-area links on the home page, load from meyerlawfirmfl.dreamhosters.com, the address the site was built on in 2012. That address still serves a full copy of the site, so search engines can find two versions of every page. The new site lives only on meyerlawfirmfl.com."
    },
    {
      title: "Some legal information is from 2012",
      body: "The Estate Planning page still says the estate tax exemption law \u201cexpires at the end of 2012\u201d, the gifting answer gives the 2012 annual gift amount ($13,000), a resource list says \u201cGet ready for possible changes in 2013\u201d, and 7 of the AARP article links now lead to \u201cpage not found\u201d. The footer reads \u00a9 2012. On the new site, these sections stay in general terms you can update, without dated figures."
    },
    {
      title: "Your Wills and Trusts FAQ is broken",
      body: "Leftover code shows on the page as \u201c[/toggle]\u201d, \u201cAre there any disadvantages to a will?\u201d opens to nothing because its answer is stuck inside the previous question, and five later answers sit outside their questions. The Powers of Attorney page shows a stray \u201cToggle\u201d label. The new site carries all 33 of your answers, each under its question, and marks them up so Google and AI assistants can read them."
    },
    {
      title: "Small things that add up",
      body: "Your phone number isn\u2019t a tap-to-call link anywhere, so phone visitors have to copy it by hand. The only analytics on the site is Google\u2019s old Universal Analytics, which stopped recording visits in July 2023, so the site has had no visitor numbers since. And the firm has no structured data describing it as a law firm. Your new site fixes all three."
    }
  ],

  // Agreement fields. Anything still "[IN BRACKETS]" is a blank Michelle fills before sending.
  agreement: {
    firmLegalName: "Colette K. Meyer, P.A.",
    firmAddress: "1070 E. Indiantown Road, Suite 312, Jupiter, FL 33477",
    domain: "meyerlawfirmfl.com",
    clientEmail: "ClientServicesDirector@MeyerLawFirmFL.com",
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
