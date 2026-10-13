/* PROSPECT DATA: the only file to edit for a new prospect.
   Copy this whole folder to /p/<firm>-<6 random chars>/, edit the values below,
   and replace the three images in img/ (same file names). Values written as
   "[LIKE THIS]" show highlighted on the agreement page as blanks still to fill. */
window.PROSPECT = {
  firmName: "S. Page Allen & Associates",
  attn: "S. Page Allen",               // optional; "" hides it
  firstName: "Page",                   // used on the thank-you page; "" for none
  city: "North Chesterfield, VA",
  currentDomain: "pageallenlaw.com",
  currentUrl: "https://www.pageallenlaw.com/",
  previewUrl: "https://clairenhaus.com/previews/s-page-allen-associates-p-c/",
  checkedDate: "October 13, 2026",   // day the findings below were last checked; shown on the sales page

  images: {
    beforeAfterDesktop: "before-after-desktop",   // img/<name>.webp + .jpg
    beforeAfterPhone: "before-after-phone",
    beforeAfterAlt: "Side by side: pageallenlaw.com today, and the new S. Page Allen & Associates site"
  },

  // What we found on the current site (checked live Oct 13, 2026). First item may carry a screenshot.
  findings: [
    {
      title: "Every page opens with \u201cCouldn\u2019t load plugin.\u201d",
      body: "The banner at the top of each page is an old Flash animation. Browsers stopped playing Flash at the end of 2020, so in its place visitors see the words \u201cCouldn\u2019t load plugin.\u201d next to your logo, on computers and phones alike. Your new site has a clean header with your logo, your number and one-tap calling.",
      image: { name: "plugin-message", width: 980, height: 84, alt: "The top of the pageallenlaw.com homepage on a phone, showing the message Couldn't load plugin next to the firm's logo", caption: "The top of your homepage as visitors see it today." }
    },
    {
      title: "No phone layout",
      body: "The site has no mobile setup, so a phone shows the whole desktop page shrunk to fit. The text is too small to read without pinching and zooming, and your number isn\u2019t a tap-to-call link."
    },
    {
      title: "The contact form may not be reaching you",
      body: "The form on your Contact page sends messages to an old FrontPage server program. We didn\u2019t submit the form, but when we checked the address it sends to, your server answered \u201c404 \u2013 File or directory not found.\u201d That usually means messages sent through it never arrive, so it\u2019s worth sending yourself a test. Your new site leads with phone and email instead."
    },
    {
      title: "The email shown isn\u2019t the email that opens",
      body: "Your homepage footer shows pallen@pageallenlaw.com, but tapping it starts a message to info@pageallenlaw.com instead. On the new site, the address you see is the address that opens."
    },
    {
      title: "Nothing tells Google or AI who you are",
      body: "None of your 9 pages has a page description, and there is no structured data, the behind-the-scenes labels that tell search engines and AI assistants who you are, where you are, and what you handle. Page titles are short labels like \u201cOur Staff\u201d. Your new site carries all of this on every page, written only from your own information."
    },
    {
      title: "A few details have fallen out of date",
      body: "Every page footer still reads \u201cCopyright \u00a9 2005.\u201d The homepage says your staff has over 50 cumulative years of paralegal experience, while the Our Staff page says over 25. And the home-buying guide describes the truth-in-lending statement and HUD settlement forms that the Loan Estimate and Closing Disclosure replaced in 2015. Your guide is a real asset, so the new site gives it a proper home, and launch is a good moment to refresh those details with you."
    }
  ],

  // Agreement fields. Anything still "[IN BRACKETS]" is a blank Michelle fills before sending.
  agreement: {
    firmLegalName: "S. Page Allen & Associates, P.C.",
    firmAddress: "11521 Midlothian Turnpike, Suite E, North Chesterfield, VA 23235",
    domain: "pageallenlaw.com",
    clientEmail: "pallen@pageallenlaw.com",
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
