/* PROSPECT DATA: the only file to edit for a new prospect.
   Copy this whole folder to /p/<firm>-<6 random chars>/, edit the values below,
   and replace the three images in img/ (same file names). Values written as
   "[LIKE THIS]" show highlighted on the agreement page as blanks still to fill. */
window.PROSPECT = {
  firmName: "Law Office of Mary Alice Gwynn, P.A.",
  attn: "Mary Alice Gwynn",            // optional; "" hides it
  firstName: "Mary Alice",             // used on the thank-you page; "" for none
  city: "Delray Beach, FL",
  currentDomain: "mgwynnlaw.com",
  currentUrl: "https://mgwynnlaw.com/",
  previewUrl: "https://clairenhaus.com/previews/law-office-of-mary-alice-gwynn-p-a/",
  checkedDate: "October 13, 2026",   // day the findings below were last checked; shown on the sales page

  images: {
    beforeAfterDesktop: "before-after-desktop",   // img/<name>.webp + .jpg
    beforeAfterPhone: "before-after-phone",
    beforeAfterAlt: "Side by side: mgwynnlaw.com today, and the new Law Office of Mary Alice Gwynn site"
  },

  // What we found on the current site (checked live Oct 13, 2026). No screenshot finding for this firm.
  findings: [
    {
      title: "Your contact form may not be reaching you",
      body: "The form on your Contact page sends messages to an address on your site (/admin/inquiry/) that now answers “page not found.” We didn’t send a test message, so we can’t say for sure, but it’s worth sending yourself one to check that messages from the site are still arriving. On your new site, form messages go straight to your inbox."
    },
    {
      title: "The site is a fixed copy that hasn’t changed since 2023",
      body: "Your pages appear to be a static copy of an earlier version of the site rather than a site you can edit: every page address reads like mgwynnlaw.com/\u200bwww.mgwynnlaw.com/\u200bpractice-areas/\u200bindex.html, the files were last changed in November 2023, and the footer still reads © 2023. Your new site is easy to update whenever something changes."
    },
    {
      title: "Some numbers have fallen behind",
      body: "Your homepage says “over two decades of experience” and your Real Estate page says “for nearly three decades.” Mary Alice opened the firm in 1992, so it’s now more than 30 years. Your new site says “since 1992,” so it never goes out of date."
    },
    {
      title: "Nothing tells Google or AI who you are",
      body: "There is no structured data (the behind-the-scenes labels that tell search engines and AI assistants your name, address, hours and practice areas), no sitemap, and your Contact and FAQ pages carry placeholder descriptions (“Contact Us”, “FAQ Videos”). Your 25 video FAQ answers are great content, but nothing marks them as questions and answers, so AI assistants can’t easily cite them. Your new site labels every page, including all 25 answers."
    },
    {
      title: "Visits aren’t being measured",
      body: "The site still uses Google’s old Universal Analytics tag, which stopped collecting data in July 2023. If you’d like visit numbers, current analytics can be set up at launch."
    }
  ],

  // Agreement fields. Anything still "[IN BRACKETS]" is a blank Michelle fills before sending.
  agreement: {
    firmLegalName: "Law Office of Mary Alice Gwynn, P.A.",
    firmAddress: "817 George Bush Blvd, Delray Beach, FL 33483",
    domain: "mgwynnlaw.com",
    clientEmail: "maryalice@mgwynnlaw.com",
    pageLimit: "12",
    paymentMethod: "card or bank payment through Stripe",
    hourlyRate: "$125 per hour",
    pauseDays: "30",
    handoverDays: "14",
    liabilityMonths: "3",
    governingState: "Georgia",
    clairenTitle: "Founder"
  }
};
