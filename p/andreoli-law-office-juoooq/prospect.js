/* PROSPECT DATA: the only file to edit for a new prospect.
   Copy this whole folder to /p/<firm>-<6 random chars>/, edit the values below,
   and replace the three images in img/ (same file names). Values written as
   "[LIKE THIS]" show highlighted on the agreement page as blanks still to fill. */
window.PROSPECT = {
  firmName: "Andreoli Law Office",
  attn: "Michael J. Andreoli",            // optional; "" hides it
  firstName: "Mike",                    // used on the thank-you page; "" for none
  city: "Zionsville, IN",
  currentDomain: "datlaw.com",
  currentUrl: "http://datlaw.com/",
  previewUrl: "https://clairenhaus.com/previews/andreoli-law-office/",
  checkedDate: "October 13, 2026",   // day the findings below were last checked; shown on the sales page

  images: {
    beforeAfterDesktop: "before-after-desktop",   // img/<name>.webp + .jpg
    beforeAfterPhone: "before-after-phone",
    beforeAfterAlt: "Side by side: datlaw.com today, and the new Andreoli Law Office site"
  },

  // What we found on the current site (checked live Oct 13, 2026). First item may carry a screenshot.
  findings: [
    {
      title: "Hard to read on a phone",
      body: "The site has no mobile setup, so a phone shows the full 980-pixel-wide desktop page shrunk to fit the screen. On an iPhone that makes the text about 40% of its normal size, and visitors have to pinch and zoom to read your practice areas or your profile. Your new site is built for phones first and reflows to any screen.",
      image: { name: "phone-text", width: 1020, height: 483, alt: "Mike Andreoli's profile on datlaw.com on a phone, beside the same profile on the new site", caption: "The same attorney profile on the same phone: today on the left, your new site on the right." }
    },
    {
      title: "The map link no longer shows a map",
      body: "On the Contact page, \u201cCLICK HERE FOR A MAP\u201d still points to Yahoo Maps, which Yahoo has retired. The link now lands on Yahoo\u2019s search page, so a visitor looking for directions to 1393 West Oak Street gets no map. Your new site has a one-tap \u201cGet directions\u201d button and your directions in words: Ford Road and SR 334, south side of the PNC Bank building, private entrance and parking."
    },
    {
      title: "An email link leads to \u201cpage not found\u201d",
      body: "On the About page, the line \u201cTo schedule a meeting, please contact by email: Michael Andreoli\u201d links to datlaw.com/mandreolilaw@gmail.com instead of opening an email, so a visitor who clicks it gets a \u201cpage not found\u201d error. On your new site every email address and phone number opens the mail or phone app with one tap."
    },
    {
      title: "The secure version shows a warning",
      body: "When a browser opens https://datlaw.com, the server answers with a security certificate issued for a different name (mysql.lumasis.net), so browsers show a full-page security warning instead of your site. The plain http:// version loads, but browsers label it \u201cNot secure\u201d. Your new site launches on secure https:// with a valid certificate."
    },
    {
      title: "Your phone number can\u2019t be tapped",
      body: "(317) 873-6266 appears on every page as plain text, so a visitor on a phone has to copy it or type it in. On your new site the number is a tap-to-call button at the top of every page."
    },
    {
      title: "Every page has the same title",
      body: "All 15 pages, from Zoning/Development to Family Law to the Attorney Profile, carry the same title, \u201cAndreoli Law Office\u201d, and none has a page description. In Google results and browser tabs they all look alike, so someone searching for a zoning or real estate lawyer in Zionsville can\u2019t tell which page answers them."
    },
    {
      title: "Nothing tells Google or AI who you are",
      body: "There is no structured data, the behind-the-scenes labels that tell search engines and AI assistants your address, phone, attorney and practice areas, no sitemap (datlaw.com/sitemap.xml returns \u201cnot found\u201d), and no FAQ content for them to draw answers from. Your new site carries all of it on every page, plus eleven FAQs written only from facts on your own site."
    },
    {
      title: "The news section stops in 2010",
      body: "The newest dated item on the Andreoli News page is your Distinguished Hoosier Award from January 2010. Items like \u201cMr. Andreoli is currently providing legal services\u201d have no date, so visitors can\u2019t tell how current the rest is. Your new site moves the award onto your profile and keeps every page easy to update."
    }
  ],

  // Agreement fields. Anything still "[IN BRACKETS]" is a blank Michelle fills before sending.
  agreement: {
    firmLegalName: "Andreoli Law Office",
    firmAddress: "1393 West Oak Street, Zionsville, IN 46077",
    domain: "datlaw.com",
    clientEmail: "mandreolilaw@gmail.com",
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
