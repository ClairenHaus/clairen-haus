/* PROSPECT DATA: the only file to edit for a new prospect.
   Copy this whole folder to /p/<firm>-<6 random chars>/, edit the values below,
   and replace the three images in img/ (same file names). Values written as
   "[LIKE THIS]" show highlighted on the agreement page as blanks still to fill. */
window.PROSPECT = {
  firmName: "Law Offices of Cicio & Cicio, P.C.",
  attn: "Anthony L. Cicio, Jr.",       // optional; "" hides it
  firstName: "Anthony",                // used on the thank-you page; "" for none
  city: "Birmingham, AL",
  currentDomain: "cicio-ciciolawoffices.com",
  currentUrl: "http://cicio-ciciolawoffices.com",
  previewUrl: "https://clairenhaus.com/previews/law-offices-of-cicio-cicio-p-c/",
  checkedDate: "October 13, 2026",   // day the findings below were last checked; shown on the sales page

  images: {
    beforeAfterDesktop: "before-after-desktop",   // img/<name>.webp + .jpg
    beforeAfterPhone: "before-after-phone",
    beforeAfterAlt: "Side by side: cicio-ciciolawoffices.com today, and the new Cicio & Cicio site"
  },

  // What we found on the current site (checked live Oct 13, 2026). First item may carry a screenshot.
  findings: [
    {
      title: "Two homepage links lead to a “404 Not Found” page",
      body: "On your homepage, the “Automobile Accident” and “Tractor Trailer Truck Accident” links point to a mistyped address, so a visitor who clicks either one lands on a server error page instead of your accident pages. The pages themselves still exist; the links just don’t reach them. Every link on your new site goes where it says.",
      image: { name: "broken-link", width: 980, height: 363, alt: "The 404 Not Found page a visitor sees after clicking Automobile Accident on the Cicio & Cicio homepage", caption: "What opens when a visitor clicks “Automobile Accident” on your homepage." }
    },
    {
      title: "Visitors on https:// get a security warning",
      body: "The secure (https) version of your site still uses a certificate that expired on August 1, 2018, so browsers show a warning instead of your site. The plain http version loads, but browsers label it “Not secure.”"
    },
    {
      title: "No phone layout",
      body: "The site has no mobile setup, so phones show the full desktop page shrunk down. Visitors have to pinch and zoom to read it or to find your number."
    },
    {
      title: "Some information is years out of date",
      body: "The newest blog post is dated December 30, 2016, and the Automobile Accidents page still quotes Alabama traffic statistics from 2011."
    },
    {
      title: "Nothing tells Google or AI who you are",
      body: "There is no structured data, the behind-the-scenes labels that tell search engines and AI assistants who you are, where you are, and what you handle. Instead the homepage carries a hidden list of 357 keywords, a tag Google has ignored for years. Your new site has structured data on every page."
    },
    {
      title: "Visits aren’t being measured",
      body: "The site still uses Google’s old Universal Analytics tag, which stopped collecting data in July 2023. If you would like visit numbers, current analytics can be set up at launch."
    }
  ],

  // Agreement fields. Anything still "[IN BRACKETS]" is a blank Michelle fills before sending.
  agreement: {
    firmLegalName: "Law Offices of Cicio & Cicio, P.C.",
    firmAddress: "2153 14th Avenue South, Birmingham, AL 35205",
    domain: "cicio-ciciolawoffices.com",
    clientEmail: "ciciolaw@yahoo.com",
    pageLimit: "16",
    paymentMethod: "card or bank payment through Stripe",
    hourlyRate: "$125 per hour",
    pauseDays: "30",
    handoverDays: "14",
    liabilityMonths: "3",
    governingState: "Georgia",
    clairenTitle: "Founder"
  }
};
