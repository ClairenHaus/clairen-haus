/* PROSPECT DATA: the only file to edit for a new prospect.
   Copy this whole folder to /p/<firm>-<6 random chars>/, edit the values below,
   and replace the three images in img/ (same file names). Values written as
   "[LIKE THIS]" show highlighted on the agreement page as blanks still to fill. */
window.PROSPECT = {
  firmName: "Law Office of Kevin M. LaMontagne, PLLC",
  attn: "Kevin M. LaMontagne",            // optional; "" hides it
  firstName: "Kevin",                    // used on the thank-you page; "" for none
  city: "Boynton Beach, FL",
  currentDomain: "klamontagnelaw.com",
  currentUrl: "https://www.klamontagnelaw.com/",
  previewUrl: "https://clairenhaus.com/previews/law-office-of-kevin-m-lamontagne-pllc/",
  checkedDate: "October 14, 2026",   // day the findings below were last checked; shown on the sales page

  images: {
    beforeAfterDesktop: "before-after-desktop",   // img/<name>.webp + .jpg
    beforeAfterPhone: "before-after-phone",
    beforeAfterAlt: "Side by side: klamontagnelaw.com today, and the new Law Office of Kevin M. LaMontagne site, on a desktop and on a phone"
  },

  // What we found on the current site (checked live Oct 14, 2026). First item may carry a screenshot.
  findings: [
    {
      title: "Lists of search keywords print on every page",
      body: "A line of keywords, \u201cwills trusts leases ladybird, deed, commercial, disputes, evictions, bankruptcy, estate planning probate attorney law firm\u201d, prints above your header on every page, and a second list sits under the footer. They look like keywords pasted into the site\u2019s settings in a spot that shows on the page. The dark type on a dark background makes them easy to miss, but screen readers read them aloud and search engines see them as page text. Your new site has none of it.",
      image: { name: "keyword-text", width: 980, height: 632, alt: "The top and bottom of klamontagnelaw.com, with the keyword lines highlighted and shown enlarged", caption: "The top and bottom of your homepage today, with the keyword lines highlighted and enlarged so they can be read." }
    },
    {
      title: "Hard to read on a phone",
      body: "The site has no mobile setup, so a phone shows the full 980-pixel-wide desktop page shrunk to fit the screen, with text at about 40% of its normal size. Visitors have to pinch and zoom to read your practice areas or find your number. Your new site is built for phones first, with a call button always within reach."
    },
    {
      title: "Your phone number can\u2019t be tapped",
      body: "(561) 732-0100 appears only as plain text, so a visitor on a phone has to copy it or type it in. Your new site makes every phone number and email address open the phone or mail app with one tap."
    },
    {
      title: "Bankruptcy is hidden under \u201cMore\u2026\u201d",
      body: "In the menu, Bankruptcy and Helpful Links sit under a \u201cMore\u2026\u201d dropdown. The site has no Contact or About page either: your address and phone appear only at the bottom of the homepage, and your bio is one long block of text there. Your new site gives each practice area, your bio, the FAQ and the contact details their own page."
    },
    {
      title: "Page titles are lists of keywords",
      body: "Every page title is a long string of keywords, and the homepage title runs over 200 characters (\u201cLAW OFFICE OF KEVIN M. LAMONTAGNE, PLLC - Estate Planning Attorney - contracts, leases, commercial, business, wills, trusts\u2026\u201d). Google cuts titles off after about 60 characters, so searchers see mostly keywords. The Estate Planning title also carries a typo, \u201cProbate Avoidancef\u201d, and the page descriptions are keyword lists too. Your new site gives each page a clear title and a plain-English description."
    },
    {
      title: "Nothing tells Google or AI who you are",
      body: "There is no structured data, the behind-the-scenes labels that tell search engines and AI assistants your address, phone, practice areas and background, and no FAQ content for them to draw answers from. Your new site carries all of it on every page, plus fifteen FAQs written only from your own guidance on living trusts, ladybird deeds, closings and bankruptcy exemptions."
    },
    {
      title: "A few signs the site needs attention",
      body: "The Google+ icon on every page links to a page about Google+ shutting down. The Bankruptcy page promises that the homestead exemption \u201cwill be explained in more detail below\u201d, but nothing follows. A handful of small typos (\u201cone to to discuss\u201d, \u201calso know as\u201d) have crept into the Estate Planning page. All are fixed on your new site."
    }
  ],

  // Agreement fields. Anything still "[IN BRACKETS]" is a blank Michelle fills before sending.
  agreement: {
    firmLegalName: "Law Office of Kevin M. LaMontagne, PLLC",
    firmAddress: "1375 Gateway Boulevard, Boynton Beach, FL 33426",
    domain: "klamontagnelaw.com",
    clientEmail: "klamontagne@bellsouth.net",
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
