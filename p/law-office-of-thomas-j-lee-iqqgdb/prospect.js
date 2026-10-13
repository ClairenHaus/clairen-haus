/* PROSPECT DATA: the only file to edit for a new prospect.
   Copy this whole folder to /p/<firm>-<6 random chars>/, edit the values below,
   and replace the three images in img/ (same file names). Values written as
   "[LIKE THIS]" show highlighted on the agreement page as blanks still to fill. */
window.PROSPECT = {
  firmName: "Law Office of Thomas J. Lee",
  attn: "Thomas J. Lee",               // optional; "" hides it
  firstName: "Tom",                    // used on the thank-you page; "" for none
  city: "Brunswick, GA",
  currentDomain: "thomasjleeattorney.com",
  currentUrl: "https://www.thomasjleeattorney.com/",
  previewUrl: "https://clairenhaus.com/previews/law-office-of-thomas-j-lee/",
  checkedDate: "October 13, 2026",   // day the findings below were last checked; shown on the sales page

  images: {
    beforeAfterDesktop: "before-after-desktop",   // img/<name>.webp + .jpg
    beforeAfterPhone: "before-after-phone",
    beforeAfterAlt: "Side by side: thomasjleeattorney.com today, and the new Law Office of Thomas J. Lee site"
  },

  // What we found on the current site (checked live Oct 13, 2026). First item may carry a screenshot.
  findings: [
    {
      title: "The Testimonials page is still a placeholder",
      body: "The Testimonials tab in your main menu opens a page that reads: \u201cClient Testimonials will be added to this section very soon. Please check back. Thanks.\u201d Visitors who click it find an empty page. The new site leaves that tab out until there are real client words to show, and gives the space to your background and practice areas instead.",
      image: { name: "testimonials-placeholder", width: 980, height: 350, alt: "The Testimonials page on thomasjleeattorney.com, showing the 'will be added very soon' message", caption: "Your Testimonials page as it appears today." }
    },
    {
      title: "Your homepage undersells your experience",
      body: "The homepage says you have served clients \u201cfor over thirty years,\u201d and the real estate page says \u201cmore than twenty years.\u201d Your About page says you have practiced in Glynn County since 1970. The new site leads with since 1970, along with your years as Glynn County Attorney and your U.S. Supreme Court admission."
    },
    {
      title: "On a phone, the number to call is two screens down",
      body: "The site does switch to a phone layout, but the first tap-to-call number sits about 2,000 pixels down the homepage, past more than two full screens of text. The new site puts a Call button at the top and keeps Call and Email buttons on screen on every page."
    },
    {
      title: "A website-builder ad on every page",
      body: "Every page carries a \u201cPowered by Weebly\u201d badge and a line inviting visitors to \u201cCreate your own unique website,\u201d and the footer still reads \u00a9 2014. The new site carries only your firm\u2019s name."
    },
    {
      title: "Nothing tells Google or AI who you are",
      body: "There is no structured data, the behind-the-scenes labels that tell search engines and AI assistants who you are, where your office is and what you handle. Your email address is also scrambled in the page code, so tools that read the page without running scripts see \u201c[email protected]\u201d instead of your address. The new site labels every page and lists your email as a plain tap link."
    },
    {
      title: "Visits aren\u2019t being measured",
      body: "The site uses Google\u2019s old Universal Analytics tag, which stopped collecting data in July 2023, and it is set up for tomleeattorney.com rather than thomasjleeattorney.com. If you would like visit numbers, current analytics can be set up at launch."
    }
  ],

  // Agreement fields. Anything still "[IN BRACKETS]" is a blank Michelle fills before sending.
  agreement: {
    firmLegalName: "Law Office of Thomas J. Lee",
    firmAddress: "No. 9, St. Andrews Court, Suite 101, Brunswick, GA 31520",
    domain: "thomasjleeattorney.com",
    clientEmail: "ssilaw@bellsouth.net",
    pageLimit: "10",
    paymentMethod: "card or bank payment through Stripe",
    hourlyRate: "$125 per hour",
    pauseDays: "30",
    handoverDays: "14",
    liabilityMonths: "3",
    governingState: "Georgia",
    clairenTitle: "Founder"
  }
};
