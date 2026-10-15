/* PROSPECT DATA: the only file to edit for a new prospect.
   Copy this whole folder to /p/<firm>-<6 random chars>/, edit the values below,
   and replace the three images in img/ (same file names). Values written as
   "[LIKE THIS]" show highlighted on the agreement page as blanks still to fill. */
window.PROSPECT = {
  firmName: "The Law Office of Lynn Morelli",
  attn: "Lynn Morelli",            // optional; "" hides it
  firstName: "Lynn",                    // used on the thank-you page; "" for none
  city: "Pittsfield, MA",
  currentDomain: "lynnmorelli.com",
  currentUrl: "https://www.lynnmorelli.com/",
  previewUrl: "https://clairenhaus.com/previews/the-law-office-of-lynn-morelli/",
  checkedDate: "October 14, 2026",   // day the findings below were last checked; shown on the sales page

  images: {
    beforeAfterDesktop: "before-after-desktop",   // img/<name>.webp + .jpg
    beforeAfterPhone: "before-after-phone",
    beforeAfterAlt: "Side by side: lynnmorelli.com today, and the new site for The Law Office of Lynn Morelli"
  },

  // What we found on the current site (checked live Oct 14, 2026). First item may carry a screenshot.
  findings: [
    {
      title: "Your contact form sends to an address that no longer exists",
      body: "The \u201cRequest Information or Ask a Question\u201d form on your Contact page is wired to an old Yahoo web-hosting form handler (us.1.p11.webhosting.luminate.com). On October 14 we looked that address up through two public DNS services and it no longer exists, so anything a visitor types into the form very likely never reaches you. We didn\u2019t send a test message, so it\u2019s worth a quick check on your side. Your new site\u2019s form is built to deliver straight to your inbox.",
      image: { name: "contact-form", width: 980, height: 885, alt: "The contact page of lynnmorelli.com on a phone, beside the new contact page", caption: "Your Contact page on the same phone: today on the left, your new site on the right." }
    },
    {
      title: "Hard to read on a phone",
      body: "The site has no mobile setup, so a phone shows the full 1,000-pixel-wide desktop page shrunk to fit the screen. On an iPhone the text ends up at about 40% of its normal size, and visitors have to pinch and zoom to read about your practice. Your new site is built for phones first and reflows to any screen."
    },
    {
      title: "Your phone number can\u2019t be tapped",
      body: "(413) 822-9360 appears on nearly every page, but always as plain text, so someone on a phone has to copy it or type it in to call you. On your new site your number and email open the phone or mail app with one tap, and a call button stays at the bottom of the screen on phones."
    },
    {
      title: "The estate tax figures are out of date",
      body: "Myth 10 on your \u201c10 Myths About Estate Planning\u201d page still gives a $5.6 million federal exemption and a $1 million Massachusetts exemption. Both have changed since (Massachusetts raised its threshold to $2 million in 2023). Your new site keeps the page but leaves the dollar figures out until you give us the numbers you want to quote."
    },
    {
      title: "Nothing tells Google or AI who you are",
      body: "None of your 13 pages has a main heading that search engines can read, and there is no structured data, the behind-the-scenes labels that tell search engines and AI assistants your address, phone, practice areas and who you are. Your new site carries all of it on every page, including your twelve FAQ answers marked up so they can be quoted."
    },
    {
      title: "Small details that date the site",
      body: "The footer on every page still reads \u00a9 2009, and the Contact page\u2019s title, the text shown in Google results and browser tabs, spells the Berkshires as \u201cBerhshires\u201d. Small things, but they can make visitors wonder whether the site is still looked after."
    }
  ],

  // Agreement fields. Anything still "[IN BRACKETS]" is a blank Michelle fills before sending.
  agreement: {
    firmLegalName: "The Law Office of Lynn Morelli",
    firmAddress: "120 Elm Street, Pittsfield, MA 01201",
    domain: "lynnmorelli.com",
    clientEmail: "lynn@lynnmorelli.com",
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
