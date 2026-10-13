/* PROSPECT DATA: the only file to edit for a new prospect.
   Copy this whole folder to /p/<firm>-<6 random chars>/, edit the values below,
   and replace the three images in img/ (same file names). Values written as
   "[LIKE THIS]" show highlighted on the agreement page as blanks still to fill. */
window.PROSPECT = {
  firmName: "Taylor Worden Law Firm",
  attn: "Ryan Worden",                 // optional; "" hides it
  firstName: "Ryan",                   // used on the thank-you page; "" for none
  city: "Indianapolis, IN",
  currentDomain: "taylorwordenlaw.com",
  currentUrl: "http://taylorwordenlaw.com",
  previewUrl: "https://clairenhaus.com/previews/taylor-worden/",

  images: {
    beforeAfterDesktop: "before-after-desktop",   // img/<name>.webp + .jpg
    beforeAfterPhone: "before-after-phone",
    beforeAfterAlt: "Side by side: taylorwordenlaw.com today, and the new Taylor Worden Law Firm site"
  },

  // What we found on the current site (checked live Oct 12, 2026). First item may carry a screenshot.
  findings: [
    {
      title: "Hidden ads for replica watches on every page",
      body: "At the bottom of every page there is a block of text advertising replica watches, with 6 links to outside watch sites. It is set to be invisible, so visitors never see it, but Google and AI assistants read it as part of your site. Text like this is usually slipped in by spammers through an outdated site or hosting account, so it is worth having whoever manages your hosting take a look. Your new site carries none of it.",
      image: { name: "hidden-text", width: 980, height: 294, alt: "The hidden replica-watch text from the Taylor Worden homepage, made visible", caption: "The hidden block from your homepage, made visible so you can see it." }
    },
    {
      title: "Visitors on https:// get a security warning",
      body: "The secure version of your site serves a certificate issued to your web host (brinkster.com), not to taylorwordenlaw.com, and it expired on March 13, 2026. Browsers show a “not secure” warning instead of your site."
    },
    {
      title: "No phone layout",
      body: "The site has no mobile setup, so phones show the full desktop page shrunk down. Visitors have to pinch and zoom to read it or to find your number."
    },
    {
      title: "Nothing tells Google or AI who you are",
      body: "There is no page description and no structured data, the behind-the-scenes labels that tell search engines and AI assistants who you are, where you are, and what you handle."
    },
    {
      title: "The FAQ page is still a placeholder",
      body: "It reads: “We are currently working on compiling our frequently asked questions.” Your new site has FAQs written from your real practice areas."
    },
    {
      title: "Visits aren’t being measured",
      body: "The site still uses Google’s old Universal Analytics tag, which stopped collecting data in July 2023. If you would like visit numbers, current analytics can be set up at launch."
    }
  ],

  // Agreement fields. Anything still "[IN BRACKETS]" is a blank Michelle fills before sending.
  agreement: {
    firmLegalName: "The Taylor Worden Law Firm",
    firmAddress: "1111 E 54th St, Suite 120, Indianapolis, IN 46220",
    domain: "taylorwordenlaw.com",
    clientEmail: "info@taylorwordenlaw.com",
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
