/* PROSPECT DATA: the only file to edit for a new prospect.
   Copy this whole folder to /p/<firm>-<6 random chars>/, edit the values below,
   and replace the three images in img/ (same file names). Values written as
   "[LIKE THIS]" show highlighted on the agreement page as blanks still to fill. */
window.PROSPECT = {
  firmName: "Michael J. Wittick, A Professional Law Corporation",
  attn: "Michael J. Wittick",            // optional; "" hides it
  firstName: "Mike",                    // used on the thank-you page; "" for none
  city: "Irvine, CA",
  currentDomain: "irvinetrustestateprobate.com",
  currentUrl: "https://irvinetrustestateprobate.com/",
  previewUrl: "https://clairenhaus.com/previews/wittick-law/",
  checkedDate: "October 14, 2026",   // day the findings below were last checked; shown on the sales page

  images: {
    beforeAfterDesktop: "before-after-desktop",   // img/<name>.webp + .jpg
    beforeAfterPhone: "before-after-phone",
    beforeAfterAlt: "Side by side: irvinetrustestateprobate.com today, and the new Wittick Law site"
  },

  // What we found on the current site (checked live Oct 14, 2026). First item may carry a screenshot.
  findings: [
    {
      title: "Hard to read on a phone",
      body: "The site tells phones to lay the page out 1,300 pixels wide, so an iPhone shows the entire homepage shrunk to about 30% of its size. The 13-pixel body text ends up around 4 pixels tall, and visitors have to pinch and zoom to read about your practice or find your number. Your new site is built for phones first and reflows to any screen.",
      image: { name: "phone-text", width: 980, height: 400, alt: "The welcome text of irvinetrustestateprobate.com on a phone, beside the same text on the new site", caption: "The same welcome text on the same phone: today on the left, your new site on the right." }
    },
    {
      title: "Your phone number can\u2019t be tapped",
      body: "949-753-2829 appears in the header picture and as plain text in the footer, but none of the pages we checked has a tap-to-call link, and the site shows no email address, so a visitor on a phone has to type the number in or use the form. On your new site the number opens the phone app with one tap from every page, including a call bar that stays at the bottom of the screen."
    },
    {
      title: "The tax pages still quote 2008 figures",
      body: "Several articles still describe the law as it stood around 2008: the Living Trusts page says a married couple\u2019s exemption \u201cin 2008, is worth $2,000,000\u201d, the Generation Skipping Tax page says there \u201cwill be no GST tax in 2010\u201d, and the Retirement Planning page cites \u201ca 2008 rate of 45%\u201d. For a certified estate planning specialist, a visitor comparing attorneys may read that as a site that is no longer kept up. Your new pages explain each area without dated figures, so they stay accurate."
    },
    {
      title: "Your experience is described four different ways",
      body: "The homepage says \u201cnearly three decades\u201d, the banner says \u201c30 Years of Experience\u201d, your bio says \u201c28 years of experience\u201d, and the Probate and Fiduciary pages say about 17 years, while the same bio dates your career to a litigation partnership in the 1980s. Your new site tells one consistent story, anchored to the dates in your own bio."
    },
    {
      title: "Nothing tells Google or AI who you are",
      body: "None of the 37 pages we checked has a page description, so Google writes its own snippet for each, and there is no structured data, the behind-the-scenes labels that tell search engines and AI assistants your address, phone, attorney and practice areas. Your new site carries all of it on every page, plus thirteen FAQs written only from facts on your own site."
    },
    {
      title: "Signs the site has been left on autopilot",
      body: "The newest blog post is from December 2020, the social icons still link to Google+, which closed in 2019, and the visitor tracking code is the older version of Google Analytics that stopped recording data in July 2023, so the site has likely not been counting visitors since. Your attorney page also loads the Avvo badge over an insecure connection, which browsers block."
    },
    {
      title: "No sitemap, and wrong addresses don\u2019t say \u201cnot found\u201d",
      body: "There is no sitemap.xml for search engines, and a mistyped address under /lawyer/ loads a normal-looking page instead of a \u201cpage not found\u201d message, so search engines can\u2019t tell real pages from broken links. Your new site launches with a sitemap and a proper \u201cpage not found\u201d page."
    }
  ],

  // Agreement fields. Anything still "[IN BRACKETS]" is a blank Michelle fills before sending.
  agreement: {
    firmLegalName: "Michael J. Wittick, A Professional Law Corporation",
    firmAddress: "7700 Irvine Center Drive, Suite 800, Irvine, CA 92618",
    domain: "irvinetrustestateprobate.com",
    clientEmail: "mwittick@witticklaw.com",
    pageLimit: "20",
    paymentMethod: "card or bank payment through Stripe",
    hourlyRate: "$125 per hour",
    pauseDays: "30",
    handoverDays: "14",
    liabilityMonths: "3",
    governingState: "Georgia",
    clairenTitle: "Founder"
  }
};
