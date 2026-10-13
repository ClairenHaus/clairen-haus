/* PROSPECT DATA: the only file to edit for a new prospect.
   Copy this whole folder to /p/<firm>-<6 random chars>/, edit the values below,
   and replace the three images in img/ (same file names). Values written as
   "[LIKE THIS]" show highlighted on the agreement page as blanks still to fill. */
window.PROSPECT = {
  firmName: "Paul, Flandreau & Berger, LLP",
  attn: "Timothy A. Berger",
  firstName: "Timothy",
  city: "Media, PA",
  currentDomain: "pfblaw.com",
  currentUrl: "https://pfblaw.com/",
  previewUrl: "https://clairenhaus.com/previews/paul-flandreau-berger-llp/",
  checkedDate: "October 13, 2026",

  images: {
    beforeAfterDesktop: "before-after-desktop",   // img/<name>.webp + .jpg
    beforeAfterPhone: "before-after-phone",
    beforeAfterAlt: "Side by side: pfblaw.com today, and the new Paul, Flandreau & Berger, LLP site"
  },

  // What we found on the current site (checked live Oct 13, 2026). First item may carry a screenshot.
  findings: [
    {
      title: "Hard to read on a phone",
      body: "pfblaw.com has no mobile setup, so a phone shows the full 980-pixel-wide desktop page shrunk to fit the screen. On an iPhone the text comes out at about 40% of its normal size, so visitors have to pinch and zoom to read Mr. Flandreau\u2019s bio or find your number. Your new site is built for phones first and reflows to any screen.",
      image: { name: "phone-text", width: 980, height: 669, alt: "James R. Flandreau\u2019s bio on pfblaw.com on a phone, beside the same bio on the new site", caption: "The same attorney bio on the same phone: today on the left, your new site on the right." }
    },
    {
      title: "Your bio pages are titled \u201cCorporation\u201d",
      body: "All four attorney pages and all four articles carry the page title \u201cCorporation\u201d, left over from the original template, and none of them has a page description. That word is what shows in the browser tab and is what Google is given as the page\u2019s name, so a search for any of your attorneys by name gets no help from it. On your new site every page has its own title and description."
    },
    {
      title: "The \u201cEmail\u201d links don\u2019t lead to an email",
      body: "Each attorney page has an \u201cEmail James R. Flandreau\u201d (or Timothy, Denise, Peter) link, but it just opens the Contact Us page, which shows the address and phone number and no email address or form. The form that used to be there was removed, but its leftover code still runs and throws an error on that page. Your number isn\u2019t tappable on a phone either. On your new site the phone and email open with one tap, and the contact page is laid out for a real form."
    },
    {
      title: "Your attorneys and practice areas hide in a hover menu",
      body: "The main menu only shows Home, Firm Info, Contact Us and Publications. Attorneys and Practice Areas appear only in a dropdown that opens when a mouse hovers over \u201cFirm Info\u201d, which is awkward on phones and tablets. Your new site puts Practice Areas and Attorneys in the main menu, with a page for each of the four attorneys and each practice area."
    },
    {
      title: "Signs the site hasn\u2019t been updated since 2011",
      body: "The footer still reads \u201cCopyright \u00a9 2011\u201d. The Real Estate Taxes article tells readers that 2012 appeals must be filed by August 1, 2011, and the Social Security article quotes the 2011 SSI payment amount. Three links on the home page, \u201cGet Our E-Newsletter\u201d, \u201cGrab The RSS Feed\u201d and \u201cCompany Profile\u201d, lead nowhere. Your new site keeps the timeless articles and explains each practice area without dated figures."
    },
    {
      title: "Nothing tells Google or AI who you are",
      body: "There is no structured data, the behind-the-scenes labels that tell search engines and AI assistants your address, phone, attorneys and practice areas, and no sitemap.xml or robots.txt file for search engines to read. Your new site carries all of it on every page, plus ten FAQs answered only from facts on your own site."
    },
    {
      title: "The secure version isn\u2019t enforced",
      body: "Your security certificate is valid, but http://pfblaw.com still loads without switching visitors to the secure https:// version, and browsers label plain http pages \u201cNot secure\u201d. Your new site always loads securely."
    }
  ],

  // Agreement fields. Anything still "[IN BRACKETS]" is a blank Michelle fills before sending.
  agreement: {
    firmLegalName: "Paul, Flandreau & Berger, LLP",
    firmAddress: "320 West Front Street, Media, PA 19063",
    domain: "pfblaw.com",
    clientEmail: "tberger@pfblaw.com",
    pageLimit: "22",
    paymentMethod: "card or bank payment through Stripe",
    hourlyRate: "$125 per hour",
    pauseDays: "30",
    handoverDays: "14",
    liabilityMonths: "3",
    governingState: "Georgia",
    clairenTitle: "Founder"
  }
};
