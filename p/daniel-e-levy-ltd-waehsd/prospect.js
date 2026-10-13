/* PROSPECT DATA: the only file to edit for a new prospect.
   Copy this whole folder to /p/<firm>-<6 random chars>/, edit the values below,
   and replace the three images in img/ (same file names). Values written as
   "[LIKE THIS]" show highlighted on the agreement page as blanks still to fill. */
window.PROSPECT = {
  firmName: "Daniel E. Levy, Ltd.",
  attn: "Daniel E. Levy",            // optional; "" hides it
  firstName: "Dan",                    // used on the thank-you page; "" for none
  city: "Lake Forest, IL",
  currentDomain: "danielelevy.com",
  currentUrl: "https://danielelevy.com/",
  previewUrl: "https://clairenhaus.com/previews/daniel-e-levy-ltd/",
  checkedDate: "October 13, 2026",   // day the findings below were last checked; shown on the sales page

  images: {
    beforeAfterDesktop: "before-after-desktop",   // img/<name>.webp + .jpg
    beforeAfterPhone: "before-after-phone",
    beforeAfterAlt: "Side by side: danielelevy.com today, and the new Daniel E. Levy, Ltd. site"
  },

  // What we found on the current site (checked live Oct 13, 2026). First item may carry a screenshot.
  findings: [
    {
      title: "The pages are wider than a phone",
      body: "Your pages are built at a fixed width of about 950 to 980 pixels, more than twice the width of an iPhone screen. On a phone, the home page runs off the right edge, so each line of your introduction is cut off and visitors have to scroll sideways to read it, while pages like your Attorney Profile shrink to fit and the text becomes too small to read without zooming. Your new site is built for phones first and reflows to any screen.",
      image: { name: "phone-text", width: 1020, height: 497, alt: "Dan Levy's Attorney Profile on danielelevy.com on a phone, beside the same text on the new site", caption: "The same attorney profile on the same phone: today on the left, your new site on the right." }
    },
    {
      title: "Your phone number can\u2019t be tapped",
      body: "(847) 808-0222 appears at the top of every page as plain text, so someone on a phone has to copy it or type it in to call you. On your new site the number is a tap-to-call button on every page, and your email opens the mail app with one tap."
    },
    {
      title: "A typo in Google and the browser tab",
      body: "The title of your Estate Planning and Probate page reads \u201cDaniel E. Levy \u2014 Attorneyes at Law \u2014 Estate Planning and Probate\u201d. The page title is the line Google shows in search results and the label on the browser tab, so the misspelling is the first thing someone searching for an estate planning lawyer may see. Every page on your new site has its own clear, checked title."
    },
    {
      title: "The contact form has a script error",
      body: "Every page shows a script error in the browser from the contact form\u2019s spam check: the code tries to fill in a hidden field that isn\u2019t on the page. We didn\u2019t send a test message, so we can\u2019t tell whether messages still reach you, but it\u2019s worth checking. Your new site leads with your phone number and email and keeps the form simple."
    },
    {
      title: "The same site lives at two addresses",
      body: "Your full site also opens at illinoisclosings.com as an identical copy, and nothing on either one tells Google which address is the main one. Search engines then have to choose between two copies of the same pages. Your new site names one main address on every page, and the second domain can simply forward to it."
    },
    {
      title: "Nothing tells Google or AI who you are",
      body: "None of your seven pages has a page description or structured data, the behind-the-scenes labels that tell search engines and AI assistants your address, phone, attorney and practice areas. There is also no sitemap (danielelevy.com/sitemap.xml returns \u201cnot found\u201d) and no FAQ for them to draw answers from. Your new site carries all of it on every page, plus fourteen FAQs written only from facts on your own site."
    }
  ],

  // Agreement fields. Anything still "[IN BRACKETS]" is a blank Michelle fills before sending.
  agreement: {
    firmLegalName: "Daniel E. Levy, Ltd.",
    firmAddress: "100 S. Saunders Rd., Suite 150, Lake Forest, IL 60045",
    domain: "danielelevy.com",
    clientEmail: "dan@danielelevy.com",
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
