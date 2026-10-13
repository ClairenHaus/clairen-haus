/* PROSPECT DATA: the only file to edit for a new prospect.
   Copy this whole folder to /p/<firm>-<6 random chars>/, edit the values below,
   and replace the three images in img/ (same file names). Values written as
   "[LIKE THIS]" show highlighted on the agreement page as blanks still to fill. */
window.PROSPECT = {
  firmName: "Asheville Law Offices",
  attn: "Jennifer Belter Formichella",  // optional; "" hides it
  firstName: "Jennifer",               // used on the thank-you page; "" for none
  city: "Asheville, NC",
  currentDomain: "asheville-law.com",
  currentUrl: "https://asheville-law.com/",
  previewUrl: "https://clairenhaus.com/previews/asheville-law-offices/",
  checkedDate: "October 13, 2026",   // day the findings below were last checked; shown on the sales page

  images: {
    beforeAfterDesktop: "before-after-desktop",   // img/<name>.webp + .jpg
    beforeAfterPhone: "before-after-phone",
    beforeAfterAlt: "Side by side: asheville-law.com today, and the new Asheville Law Offices site"
  },

  // What we found on the current site (checked live Oct 13, 2026). First item may carry a screenshot.
  findings: [
    {
      title: "The top of every page says “Couldn’t load plugin.”",
      body: "The picture area beside your logo was built as a Flash slideshow. Adobe ended Flash at the end of 2020 and browsers no longer run it, so on the Home, About Us and Contact Us pages visitors now see a “Couldn’t load plugin.” notice sitting on top of the photo. Your new site uses no plugins at all.",
      image: { name: "flash-plugin", width: 980, height: 398, alt: "The header of asheville-law.com in Chrome today, showing the message Couldn't load plugin", caption: "Your homepage header in Chrome today (Oct 13, 2026)." }
    },
    {
      title: "No phone layout",
      body: "The site is a fixed 800-pixel-wide page with no mobile setup, so phones show the whole desktop page shrunk down. Visitors have to pinch and zoom to read your practice areas or find your number. On the new site the phone number and email are one tap away."
    },
    {
      title: "Sixteen practice areas, but no page for any of them",
      body: "The site has three pages, and your sixteen practice areas appear only as a list in the sidebar. When someone searches for help with a real estate closing, a title problem or a lease in Asheville, there is no page about that work for Google or an AI assistant to show them. The new site gives each area its own page, plus pages for you, the firm, FAQs and contact."
    },
    {
      title: "Nothing tells Google or AI who you are",
      body: "There is no structured data, the behind-the-scenes labels that tell search engines and AI assistants the firm’s name, address, phone, practice areas and attorney. Your name appears only on the About Us page, never on the homepage. The new site labels all of it on every page."
    },
    {
      title: "The directions point to landmarks that have changed",
      body: "Your Contact Us directions tell visitors to look for the Vance Monument, which was removed from Pack Square in 2021, and the “BB&T building,” which reopened in 2019 as The Arras. The new site keeps your directions and parking guide but leaves out the landmarks that are gone."
    },
    {
      title: "Visits aren’t being measured",
      body: "The site still uses Google’s old ga.js Analytics tag. Google stopped collecting data for that kind of property in July 2023. If you would like visit numbers, current analytics can be set up at launch."
    }
  ],

  // Agreement fields. Anything still "[IN BRACKETS]" is a blank Michelle fills before sending.
  agreement: {
    firmLegalName: "The Law Offices of Jennifer Belter Formichella, PLLC",
    firmAddress: "1 North Pack Square, Suite 414, Asheville, NC 28801",
    domain: "asheville-law.com",
    clientEmail: "info@asheville-law.com",
    pageLimit: "15",
    paymentMethod: "card or bank payment through Stripe",
    hourlyRate: "$125 per hour",
    pauseDays: "30",
    handoverDays: "14",
    liabilityMonths: "3",
    governingState: "Georgia",
    clairenTitle: "Founder"
  }
};
