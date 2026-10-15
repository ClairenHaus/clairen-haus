/* PROSPECT DATA: the only file to edit for a new prospect.
   Copy this whole folder to /p/<firm>-<6 random chars>/, edit the values below,
   and replace the three images in img/ (same file names). Values written as
   "[LIKE THIS]" show highlighted on the agreement page as blanks still to fill. */
window.PROSPECT = {
  firmName: "Ivanovic Law Offices",
  attn: "Linda Ivanovic",            // optional; "" hides it
  firstName: "Linda",                    // used on the thank-you page; "" for none
  city: "Milwaukee, WI",
  currentDomain: "ivanoviclaw.com",
  currentUrl: "https://ivanoviclaw.com/",
  previewUrl: "https://clairenhaus.com/previews/ivanovic-law-offices/",
  checkedDate: "October 14, 2026",   // day the findings below were last checked; shown on the sales page

  images: {
    beforeAfterDesktop: "before-after-desktop",   // img/<name>.webp + .jpg
    beforeAfterPhone: "before-after-phone",
    beforeAfterAlt: "Side by side: ivanoviclaw.com today, and the new Ivanovic Law Offices site"
  },

  // What we found on the current site (checked live Oct 14, 2026). First item may carry a screenshot.
  findings: [
    {
      title: "Hard to read on a phone",
      body: "The site has no mobile setup, so a phone shows the full 1,000-pixel-wide desktop page shrunk to about 39% of its size. On an iPhone, the practice-area lists and attorney bios appear roughly 5 to 6 pixels tall, and visitors have to pinch and zoom to read them or fill in the contact form. Your new site is built for phones first and reflows to any screen.",
      image: { name: "phone-text", width: 980, height: 1060, alt: "The Areas of Practice page of ivanoviclaw.com on an iPhone, beside the same page on the new site", caption: "The same page on the same phone: today on the left, your new site on the right." }
    },
    {
      title: "A broken award badge on every page",
      body: "The \u201cFamily Lawyers in Milwaukee\u201d 2022 award badge in your footer no longer loads: the badge service returns an error, so all 14 pages show a broken-image icon with the badge\u2019s label beside it. Your new site uses no outside images that can break this way.",
      image: { name: "broken-badge", width: 980, height: 379, alt: "The footer of ivanoviclaw.com with a broken image where the 2022 award badge should be", caption: "The footer of your home page today. The outlined box is where the 2022 award badge should appear." }
    },
    {
      title: "Some of the copy has fallen behind the firm",
      body: "Linda\u2019s bio still says she has been a divorce attorney \u201cfor over 20 years\u201d and the \u201cWhy you need\u201d page says \u201c20+ years of practice\u201d, though she was admitted in 1993. The attorney list on that page leaves out Max Carter, who joined in 2022. Your new site gives each attorney a current profile page, with dates instead of year counts that go stale."
    },
    {
      title: "Search engines get almost nothing to work with",
      body: "None of the 14 pages has a page description, and there is no structured data (the behind-the-scenes labels that tell Google and AI assistants your address, phone, attorneys and practice areas). Instead, every page carries the same hidden list of 12 search phrases, such as \u201cDivorce Attorney Near Me\u201d, in a \u201ckeywords\u201d tag that Google has said it doesn\u2019t use, and photos are labeled with search phrases like \u201cOzaukee divorce lawyers\u201d rather than a description of the picture. Your new site has a real description and structured data on every page, plus ten FAQs written only from facts on your own site."
    },
    {
      title: "Your home page headlines are inside the pictures",
      body: "The messages in your home page slideshow, such as \u201cRespected for their professional, yet unyielding approach\u201d, are part of the images, so search engines and screen readers can\u2019t read them and they can\u2019t be edited without a designer. On your new site every headline is real text."
    },
    {
      title: "Wrong addresses show your homepage instead of a \u201cnot found\u201d page",
      body: "Any mistyped or outdated address on ivanoviclaw.com quietly loads the homepage as if it were a real page, and there is no sitemap for search engines (ivanoviclaw.com/sitemap.xml returns \u201cnot found\u201d). Both ivanoviclaw.com and www.ivanoviclaw.com also serve the full site separately. Your new site launches with a sitemap, a proper \u201cpage not found\u201d page and one main address."
    },
    {
      title: "Built on a fixed, 2011-era layout",
      body: "The pages sit in a narrow fixed-width column with small text and wide empty margins on larger screens, and the menus run on a 2011 version of the jQuery library. Your new site has a full-width modern layout, a practice-area page for each kind of case, and a profile page for each attorney."
    }
  ],

  // Agreement fields. Anything still "[IN BRACKETS]" is a blank Michelle fills before sending.
  agreement: {
    firmLegalName: "Ivanovic Law Offices",
    firmAddress: "322 East Michigan St. #300, Milwaukee, WI 53202",
    domain: "ivanoviclaw.com",
    clientEmail: "linda@ivanoviclaw.com",
    pageLimit: "19",
    paymentMethod: "card or bank payment through Stripe",
    hourlyRate: "$125 per hour",
    pauseDays: "30",
    handoverDays: "14",
    liabilityMonths: "3",
    governingState: "Georgia",
    clairenTitle: "Founder"
  }
};
