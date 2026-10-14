/* PROSPECT DATA: the only file to edit for a new prospect.
   Copy this whole folder to /p/<firm>-<6 random chars>/, edit the values below,
   and replace the three images in img/ (same file names). Values written as
   "[LIKE THIS]" show highlighted on the agreement page as blanks still to fill. */
window.PROSPECT = {
  firmName: "Philip C. Puglisi, LLC",
  attn: "Philip C. Puglisi",            // optional; "" hides it
  firstName: "Philip",                  // used on the thank-you page; "" for none
  city: "Wyckoff, NJ",
  currentDomain: "philippuglisilaw.com",
  currentUrl: "https://philippuglisilaw.com/",
  previewUrl: "https://clairenhaus.com/previews/philip-c-puglisi-llc/",
  checkedDate: "October 14, 2026",   // day the findings below were last checked; shown on the sales page

  images: {
    beforeAfterDesktop: "before-after-desktop",   // img/<name>.webp + .jpg
    beforeAfterPhone: "before-after-phone",
    beforeAfterAlt: "Side by side: philippuglisilaw.com today, and the new Philip C. Puglisi, LLC site"
  },

  // What we found on the current site (checked live Oct 14, 2026). First item may carry a screenshot.
  findings: [
    {
      title: "A line of code shows at the bottom of ten pages",
      body: "Custody, Child Support, Mediation, Collaborative Divorce, Domestic Violence, Asset Division, the Prenuptial and Postnuptial Agreement pages, Modification and Suggested Readings all end with the text [elementor-template id=\u201d254\u2033] where a section of the page was meant to appear. Visitors reading about their custody or support question reach the end of the page and see a piece of website code instead. Your new site has no page builder underneath, so nothing like this can show through.",
      image: { name: "stray-code", width: 980, height: 420, alt: "The bottom of the Custody page on philippuglisilaw.com, ending in the text [elementor-template id=254]", caption: "The end of your Custody page today, as any visitor sees it (checked October 14, 2026)." }
    },
    {
      title: "Two menu links open empty pages",
      body: "\u201cBlog\u201d and \u201cClient Reviews\u201d are both in the main menu, but each opens a page with a heading and nothing underneath. Someone checking your reviews before calling finds a blank page. Your new site only links to pages that have something on them."
    },
    {
      title: "Suggested Readings opens with another company\u2019s note",
      body: "Your book list starts with a pasted message from Consumer Affairs about an online dating guide (\u201cWould you allow us to help your community?\u201d) before your own recommendations. Your new site keeps your eleven recommended books and adds a checklist for preparing for a first meeting, taken from your own article."
    },
    {
      title: "Your email can\u2019t be tapped, and the fax number differs between pages",
      body: "pcplaw@optimum.net appears only on the Contact page, as plain text, so a visitor on a phone has to copy it by hand. The Contact page lists your fax as (201) 431-8403 while the Directions page shows 201-341-8403. On your new site the phone and email are one tap on every page, and the contact details match everywhere."
    },
    {
      title: "Your experience is described three different ways",
      body: "The homepage says \u201cover 38+ years\u201d, the description Google shows for your bio page says \u201cover 35 years\u201d, and an article says \u201cjust under 40 years\u201d. Together with \u201cCopyright 2019\u201d in the footer, it can make the site look less current than your practice is. Your new site leans on facts that don\u2019t go out of date: Temple Law 1980, your Arizona Court of Appeals clerkship and your mediator accreditation."
    },
    {
      title: "Nothing tells Google or AI that you are a family law firm",
      body: "The site\u2019s behind-the-scenes labels describe a generic web page and organization, with no address, phone, attorney, practice areas or FAQs, and several search descriptions carry typos such as \u201cLaww Offices\u201d and \u201cPhilip CPuglisi\u201d. Your new site labels every page as a family law practice in Wyckoff, with your details, ten practice areas and fourteen FAQs written only from your own articles."
    },
    {
      title: "A draft page is public",
      body: "A page titled \u201cPossible Photos\u201d, holding three stock image previews, is live at philippuglisilaw.com/possible-photos/ and listed in the sitemap Google reads. Your new site launches with only finished pages and a clean sitemap."
    }
  ],

  // Agreement fields. Anything still "[IN BRACKETS]" is a blank Michelle fills before sending.
  agreement: {
    firmLegalName: "Philip C. Puglisi, LLC",
    firmAddress: "279 Franklin Avenue, Wyckoff, NJ 07481",
    domain: "philippuglisilaw.com",
    clientEmail: "pcplaw@optimum.net",
    pageLimit: "17",
    paymentMethod: "card or bank payment through Stripe",
    hourlyRate: "$125 per hour",
    pauseDays: "30",
    handoverDays: "14",
    liabilityMonths: "3",
    governingState: "Georgia",
    clairenTitle: "Founder"
  }
};
