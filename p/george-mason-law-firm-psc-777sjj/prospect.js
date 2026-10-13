/* PROSPECT DATA: the only file to edit for a new prospect.
   Copy this whole folder to /p/<firm>-<6 random chars>/, edit the values below,
   and replace the three images in img/ (same file names). Values written as
   "[LIKE THIS]" show highlighted on the agreement page as blanks still to fill. */
window.PROSPECT = {
  firmName: "George Mason Law Firm, PSC",
  attn: "George Mason",                // optional; "" hides it
  firstName: "George",                 // used on the thank-you page; "" for none
  city: "Nicholasville, KY",
  currentDomain: "georgemasonlf.com",
  currentUrl: "http://georgemasonlf.hgsitebuilder.com/",
  currentSite: "your current site",   // the old site lives on a builder address, not on currentDomain
  previewUrl: "https://clairenhaus.com/previews/george-mason-law-firm-psc/",
  checkedDate: "October 13, 2026",   // day the findings below were last checked; shown on the sales page

  images: {
    beforeAfterDesktop: "before-after-desktop",   // img/<name>.webp + .jpg
    beforeAfterPhone: "before-after-phone",
    beforeAfterAlt: "Side by side: the George Mason Law Firm site today, and the new George Mason Law Firm site"
  },

  // What we found on the current site (checked live Oct 13, 2026). First item may carry a screenshot.
  findings: [
    {
      title: "Your own domain shows an error page",
      body: "georgemasonlf.com, the address on your firm’s email and the one your current site links to, doesn’t open your website. It shows a website builder’s page saying the domain isn’t connected to a site. Your email on that domain is still set up; only the web address is affected. Your new site is built to go live right on georgemasonlf.com.",
      image: { name: "domain-error", width: 980, height: 592, alt: "What visitors see at georgemasonlf.com today: a website builder’s domain-not-connected page", caption: "georgemasonlf.com as it opened on October 13, 2026." }
    },
    {
      title: "The site lives on a free builder address and shows as “Not secure”",
      body: "Your current site is at georgemasonlf.hgsitebuilder.com and only loads over plain http, so browsers label it “Not secure.” The secure https version doesn’t load at all. The new site runs on your own domain with a secure connection."
    },
    {
      title: "No phone layout",
      body: "The site has no mobile setup, so a phone shows the full 980-pixel desktop page shrunk down. Visitors have to pinch and zoom to read your practice areas or find your number. The new site is designed for phones first."
    },
    {
      title: "Google sees “Powered by BaseKit”",
      body: "The page description search engines read is “Powered by BaseKit,” the keyword tag still says “Use a few keywords.”, and your page titles are just “Home” and “About,” with no firm name. There is also no structured data telling Google and AI assistants who you are, where you are, and what you handle. The new site carries all of that, with your practice areas, office and bar admissions."
    },
    {
      title: "The home page reads as 2012",
      body: "The footer says “Copyright 2012,” the home page still calls the October 22, 2012 Kentucky Mineral Law Conference your “most recent” presentation and says the materials will be posted to a “Published Works” section that isn’t on the site, and the Twitter box shows “No results.” The new site keeps your experience front and center without dated news."
    },
    {
      title: "The map on the home page doesn’t load",
      body: "The embedded map on the home page shows Google’s “This page can’t load Google Maps correctly” message instead of your office. The new site links your address straight to directions."
    }
  ],

  // Agreement fields. Anything still "[IN BRACKETS]" is a blank Michelle fills before sending.
  agreement: {
    firmLegalName: "George Mason Law Firm, PSC",
    firmAddress: "103 Wind Haven Drive, Suite 201, Nicholasville, KY 40356",
    domain: "georgemasonlf.com",
    clientEmail: "george@georgemasonlf.com",
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
