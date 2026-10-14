/* PROSPECT DATA: the only file to edit for a new prospect.
   Copy this whole folder to /p/<firm>-<6 random chars>/, edit the values below,
   and replace the three images in img/ (same file names). Values written as
   "[LIKE THIS]" show highlighted on the agreement page as blanks still to fill. */
window.PROSPECT = {
  firmName: "Lowcountry Law Office on Aging, Mental Health & Disabilities, LLC",
  attn: "Alyson C. Fudge",            // optional; "" hides it
  firstName: "Alyson",                 // used on the thank-you page; "" for none
  city: "Mt. Pleasant, SC",
  currentDomain: "lowcountrylawofc.com",
  currentUrl: "https://lowcountrylawofc.com/",
  previewUrl: "https://clairenhaus.com/previews/lowcountry-law-office-on-aging-mental-health-disabilities-llc/",
  checkedDate: "October 14, 2026",   // day the findings below were last checked; shown on the sales page

  images: {
    beforeAfterDesktop: "before-after-desktop",   // img/<name>.webp + .jpg
    beforeAfterPhone: "before-after-phone",
    beforeAfterAlt: "Side by side: lowcountrylawofc.com today, and the new Lowcountry Law Office site"
  },

  // What we found on the current site (checked live Oct 13-14, 2026). First item may carry a screenshot.
  findings: [
    {
      title: "The map on your Contact page is an empty box",
      body: "Your Contact page tells visitors \u201cPlease see the Map Below\u201d, but the space below it is a blank white box. The map was never filled in: the page still holds the website builder\u2019s unfilled placeholder where the map address should be. For families trying to find the eWall Street Office Park, your new site puts the address, a one-tap \u201cGet directions\u201d button and your written directions together on every phone.",
      image: { name: "phone-text", width: 1020, height: 739, alt: "The Contact page of lowcountrylawofc.com showing an empty box under \u201cPlease see the Map Below\u201d, beside the new site\u2019s address card with Call and Get directions buttons", caption: "Today the map space on your Contact page is blank (left). Your new site gives one-tap call and directions (right)." }
    },
    {
      title: "Hard to read on a phone",
      body: "The site has no mobile setup, so a phone shows the full 980-pixel-wide desktop page shrunk to fit the screen. On an iPhone that makes the already-small 11-pixel text about 40% of its normal size, and visitors have to pinch and zoom to read about your services. Your new site is built for phones first and reflows to any screen."
    },
    {
      title: "Your phone number can\u2019t be tapped",
      body: "843.416.1102 appears on every page as small plain text, so a visitor on a phone has to copy it or type it in. On your new site every phone number and email opens the phone or mail app with one tap, and a Call button stays in reach on every page."
    },
    {
      title: "Page titles are whole paragraphs",
      body: "Most pages use their entire opening text as the page title. The Attorney Bio page\u2019s title is 2,469 characters long, the whole biography, and the description Google reads is a list of keywords (\u201cWills SC, Wills Charleston SC, Trusts SC\u2026\u201d). Search results cut all of that off, so people can\u2019t tell what each page offers. Your new site gives every page a short, clear title and description."
    },
    {
      title: "Nothing tells Google or AI who you are",
      body: "There is no structured data, the behind-the-scenes labels that tell search engines and AI assistants your address, phone, attorney and services. Your new site carries all of it on every page, plus a FAQ page answered only from guidance already on your own site, like what to bring to start probate."
    },
    {
      title: "The site looks unattended",
      body: "The footer on every page still reads \u201cCopyright 2010\u201d, and the sitemap search engines read was last updated in January 2015 and still lists the old non-secure http:// addresses. Visitors and search engines can both take that as a sign the site isn\u2019t kept up, even though your practice is active."
    }
  ],

  // Agreement fields. Anything still "[IN BRACKETS]" is a blank Michelle fills before sending.
  agreement: {
    firmLegalName: "Lowcountry Law Office on Aging, Mental Health & Disabilities, LLC",
    firmAddress: "1024 eWall Street, Suite 100, Mt. Pleasant, SC 29464",
    domain: "lowcountrylawofc.com",
    clientEmail: "acf@lowcountrylawofc.com",
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
