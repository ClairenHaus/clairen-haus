/* PROSPECT DATA: the only file to edit for a new prospect.
   Copy this whole folder to /p/<firm>-<6 random chars>/, edit the values below,
   and replace the three images in img/ (same file names). Values written as
   "[LIKE THIS]" show highlighted on the agreement page as blanks still to fill. */
window.PROSPECT = {
  firmName: "Wilson Rode, PLLC",
  attn: "L. James Wilson",            // optional; "" hides it
  firstName: "Jim",                    // used on the thank-you page; "" for none
  city: "Troy, MI",
  currentDomain: "wilsonrode.com",
  currentUrl: "https://wilsonrode.com/",
  previewUrl: "https://clairenhaus.com/previews/wilson-rode-pllc/",
  checkedDate: "October 13, 2026",   // day the findings below were last checked; shown on the sales page

  images: {
    beforeAfterDesktop: "before-after-desktop",   // img/<name>.webp + .jpg
    beforeAfterPhone: "before-after-phone",
    beforeAfterAlt: "Side by side: wilsonrode.com today, and the new Wilson Rode, PLLC site"
  },

  // What we found on the current site (checked live Oct 13, 2026). First item may carry a screenshot.
  findings: [
    {
      title: "Hard to read on a phone",
      body: "The site has no mobile setup, so a phone shows the full 980-pixel-wide desktop page shrunk to fit the screen. On an iPhone that makes the text about 40% of its normal size, and visitors have to pinch and zoom to read your practice areas or find your number. Your new site is built for phones first and reflows to any screen.",
      image: { name: "phone-text", width: 980, height: 420, alt: "The Business and Tax section of wilsonrode.com on a phone, beside the same section on the new site", caption: "The same Business and Tax section on the same phone: today on the left, your new site on the right." }
    },
    {
      title: "Your phone number can\u2019t be tapped",
      body: "(248) 816-1000 appears on every page as plain text, so a visitor on a phone has to copy it or type it in. The attorneys\u2019 direct email addresses are plain text too. On your new site every number and email opens the phone or mail app with one tap."
    },
    {
      title: "Every page has the same title",
      body: "All seven pages, from Practice Areas to each attorney\u2019s bio, carry the same title, \u201cWilson Rode, PLLC\u201d, and none has a page description. In Google results and browser tabs they all look alike, so someone searching for an estate planning or litigation lawyer in Troy can\u2019t tell which page answers them."
    },
    {
      title: "Nothing tells Google or AI who you are",
      body: "There is no structured data, the behind-the-scenes labels that tell search engines and AI assistants your address, phone, attorneys and practice areas, and no FAQ content for them to draw answers from. Your new site carries all of it on every page, plus ten FAQs written only from facts on your own site."
    },
    {
      title: "Wrong addresses show your homepage instead of a \u201cnot found\u201d page",
      body: "Any mistyped or outdated address on wilsonrode.com quietly loads the homepage as if it were a real page, including the addresses where search engines look for a sitemap and crawl instructions (sitemap.xml and robots.txt), so they get no map of your site. Your new site launches with a sitemap and a proper \u201cpage not found\u201d page."
    },
    {
      title: "The secure version isn\u2019t enforced",
      body: "Your security certificate is valid, but http://wilsonrode.com still loads without switching visitors to the secure https:// version, and some browsers label plain http pages \u201cNot secure\u201d. The footer also still reads \u00a9 2012, which can make visitors wonder whether the site is kept up."
    },
    {
      title: "The attorney bios are hidden behind a hover menu",
      body: "The \u201cAttorneys\u201d menu item doesn\u2019t lead anywhere on its own; the three bios open only from a dropdown that appears when a mouse hovers over it, which is awkward on phones and tablets. Your new site gives the attorneys their own page and a profile page each."
    }
  ],

  // Agreement fields. Anything still "[IN BRACKETS]" is a blank Michelle fills before sending.
  agreement: {
    firmLegalName: "Wilson Rode, PLLC",
    firmAddress: "2250 Butterfield Drive, Suite 220, Troy, MI 48084",
    domain: "wilsonrode.com",
    clientEmail: "info@wilsonrode.com",
    pageLimit: "13",
    paymentMethod: "card or bank payment through Stripe",
    hourlyRate: "$125 per hour",
    pauseDays: "30",
    handoverDays: "14",
    liabilityMonths: "3",
    governingState: "Georgia",
    clairenTitle: "Founder"
  }
};
