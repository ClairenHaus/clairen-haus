/* PROSPECT DATA: the only file to edit for a new prospect.
   Copy this whole folder to /p/<firm>-<6 random chars>/, edit the values below,
   and replace the three images in img/ (same file names). Values written as
   "[LIKE THIS]" show highlighted on the agreement page as blanks still to fill. */
window.PROSPECT = {
  firmName: "Law Offices of David J. Reed",
  attn: "David J. Reed",               // optional; "" hides it
  firstName: "David",                  // used on the thank-you page; "" for none
  city: "Roswell, GA",
  currentDomain: "davidjreed.com",
  currentUrl: "http://davidjreed.com",
  previewUrl: "https://clairenhaus.com/previews/law-offices-of-david-j-reed/",
  checkedDate: "October 13, 2026",   // day the findings below were last checked; shown on the sales page

  images: {
    beforeAfterDesktop: "before-after-desktop",   // img/<name>.webp + .jpg
    beforeAfterPhone: "before-after-phone",
    beforeAfterAlt: "Side by side: davidjreed.com today, and the new Law Offices of David J. Reed site"
  },

  // What we found on the current site (checked live Oct 13, 2026). First item may carry a screenshot.
  findings: [
    {
      title: "The site still shows its 2006 date, and parts of it have stopped working",
      body: "Every page ends with “Last modified: December 05, 2006”, and the hit counter on your homepage now shows as a broken image. The site was built in Microsoft FrontPage, which Microsoft stopped making in 2006, and the server no longer runs the FrontPage features the site depends on. Your new site is built on current standards and is easy to keep up to date.",
      image: { name: "old-footer", width: 760, height: 132, alt: "The bottom of the davidjreed.com homepage: a broken Hit Counter image and the line Last modified: December 05, 2006", caption: "The bottom of your homepage today." }
    },
    {
      title: "The “Information Request” forms likely aren’t reaching you",
      body: "The request forms on your Litigation, Business Law, Estate Planning and Contract Review pages, and the Feedback form, send to a FrontPage form handler that no longer exists on your server: its address answers “not found”. We didn’t submit one, so we can’t say for certain, but a visitor who fills one in is most likely sending their request nowhere. On the new site, every page leads to a tap-to-call number and your email."
    },
    {
      title: "No secure (https) version",
      body: "https://davidjreed.com does not connect at all, and the regular address loads without encryption, so browsers mark the site “Not secure”. The new site runs on https."
    },
    {
      title: "No phone layout",
      body: "The site has no mobile setup, so phones show the whole desktop page shrunk down. Visitors have to pinch and zoom to read it or to find your number."
    },
    {
      title: "Nothing tells Google or AI who you are",
      body: "There is no page description and no structured data, the behind-the-scenes labels that tell search engines and AI assistants your name, office, phone number and practice areas. The new site carries them on every page, including an FAQ written from your own guidance."
    },
    {
      title: "Your Links page points to services that no longer exist",
      body: "It still links to MapBlast and Microsoft TerraServer for directions and maps, among other older resources. The new contact page has written directions from GA-400 and a one-tap map link."
    }
  ],

  // Agreement fields. Anything still "[IN BRACKETS]" is a blank Michelle fills before sending.
  agreement: {
    firmLegalName: "Law Offices of David J. Reed",
    firmAddress: "1503 Bombay Lane, Oakbrook Centre, Roswell, GA 30076",
    domain: "davidjreed.com",
    clientEmail: "davidjreed@davidjreed.com",
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
