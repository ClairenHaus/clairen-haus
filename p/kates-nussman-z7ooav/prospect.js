/* PROSPECT DATA: the only file to edit for a new prospect.
   Copy this whole folder to /p/<firm>-<6 random chars>/, edit the values below,
   and replace the three images in img/ (same file names). Values written as
   "[LIKE THIS]" show highlighted on the agreement page as blanks still to fill. */

/* PRICE (Michelle, Oct 16 2026): this firm's build is $2,997, not the shared $3,000.
   $1,500 deposit on signing (the shared $1,500 deposit link in /p/assets/config.js) + $1,497 at launch,
   then the $199/month care plan (first month free). Overrides CH_CONFIG.price for this page only. */
window.CH_CONFIG = window.CH_CONFIG || {};
window.CH_CONFIG.price = { build: 2997, deposit: 1500, balance: 1497, care: 199 };

window.PROSPECT = {
  firmName: "Kates Nussman Ellis Earle & Landolfi LLP",
  attn: "Matthew Z. Earle",            // optional; "" hides it
  firstName: "Matthew",                    // used on the thank-you page; "" for none
  city: "Hackensack, NJ",
  currentDomain: "katesnussman.com",
  currentUrl: "https://www.katesnussman.com/",
  previewUrl: "https://clairenhaus.com/previews/kates-nussman/",
  checkedDate: "October 16, 2026",   // day the findings below were last checked; shown on the sales page

  images: {
    beforeAfterDesktop: "before-after-desktop",   // img/<name>.webp + .jpg
    beforeAfterPhone: "before-after-phone",
    beforeAfterAlt: "Side by side: katesnussman.com today, and the new Kates Nussman Ellis Earle & Landolfi LLP site"
  },

  // What we found on the current site (checked live Oct 16, 2026). First item may carry a screenshot.
  findings: [
    {
      title: "Your social links go to profiles under a name the firm no longer uses",
      body: "The Facebook, LinkedIn and X buttons in the footer of every page lead to facebook.com/\u200bKatesNussman\u200bEllisFarhiEarle, linkedin.com/\u200bin/\u200bmichaelfarhi and twitter.com/\u200bmikefarhi. \u201cFarhi\u201d is not in the firm\u2019s name any more and no attorney by that name is listed on the site; it appears only once, in Jack Zakim\u2019s past positions. A visitor who taps those buttons lands on a page under the old name or on one person\u2019s personal profile. Your new site links only to accounts the firm owns today, and leaves the buttons out until you give us those addresses."
    },
    {
      title: "There is no email address anywhere on the site",
      body: "The Contact page says to call 201-488-7211 or fill out the form. Each attorney page has an \u201cEmail me\u201d link, but it opens another form rather than showing an address, and the \u201cEmail us for response\u201d link in the footer just goes back to the Contact page. Someone who wants to send you a document or write from their own mailbox has nowhere to send it. Your new site puts a tap-to-email address beside each phone number as soon as you give us one, with a simple form as the second option."
    },
    {
      title: "Desktop visitors can\u2019t find your Landlord Tenant page from the menu",
      body: "The Practice Areas menu on a desktop lists 11 areas and leaves out Landlord Tenant. The same menu on a phone lists 12, with Landlord Tenant included, and the page itself (/practice-areas/\u200blandlord-tenant/) exists and loads. So anyone browsing on a computer has no way to reach it except the small footer list. Your new site has one menu that is the same on every screen."
    },
    {
      title: "One attorney\u2019s bio is published but not listed",
      body: "Leiona J. Noah has a full attorney page at /attorney/\u200bleiona-j-noah/ describing her as an associate at the firm, but she does not appear on the Attorneys page or in any menu; the only place the page is linked is the XML sitemap. If she is with the firm, clients can\u2019t find her; if she has moved on, the page should come down. Your new site lists exactly the attorneys you tell us to, on the Attorneys page and in the menu together."
    },
    {
      title: "What Google and AI assistants are told about the firm is incomplete",
      body: "The structured data on your pages describes one office, 190 Moore Street in Hackensack, and never mentions the New York office at 347 5th Avenue or the 212-683-1153 line that the footer shows. The logo it points to is a FindLaw image address (wldimages.findlaw.com/\u200bimages/\u200b2239086/\u200b2239086_1.jpg) that answers \u201cforbidden\u201d when opened. Mr. Earle\u2019s record gives his job title as \u201cAttorney\u201d while the page says Partner, and its work location is blank. Your new site describes the firm, both offices and every attorney, with their real titles, in markup Google and AI assistants can read."
    },
    {
      title: "The Terms of Use and Privacy Policy under your contact form belong to your vendor",
      body: "The disclaimer under the contact form says that by submitting it the visitor accepts the Terms of Use and Privacy Policy, and those two links go to internetbrands.com/\u200bibterms and internetbrands.com/\u200bprivacy/\u200bprivacy-highlights, Internet Brands\u2019 own documents, even though the footer links to your own Privacy Policy page at katesnussman.com/\u200bprivacy/. The footer also carries \u201cBusiness Development Solutions by FindLaw\u201d with a link to their marketing page. Your new site links the form only to your own policy, and carries no vendor branding."
    },
    {
      title: "Small things that add up",
      body: "The browser tab on your home page reads \u201cHackensack Employment Lawyer | New Jersey Business Law Attorney | Newark Real Estate Law Firm\u201d, though the firm has no Newark office. Two of the three posts on the home page are labelled \u201cUncategorized\u201d. The \u201cpage not found\u201d screen suggests an About link that is itself a page not found (/about/). And the only measurement tag on the site is a Facebook pixel; there is no Google Analytics tag, so there is no record of how many people visit. Your new site fixes all four."
    }
  ],

  // Agreement fields. Anything still "[IN BRACKETS]" is a blank Michelle fills before sending.
  agreement: {
    firmLegalName: "Kates Nussman Ellis Earle & Landolfi LLP",
    firmAddress: "190 Moore Street, Suite 306, Hackensack, NJ 07601",
    domain: "katesnussman.com",
    clientEmail: "[CLIENT EMAIL]",
    pageLimit: "25",
    paymentMethod: "card or bank payment through Stripe",
    hourlyRate: "$125 per hour",
    pauseDays: "30",
    handoverDays: "14",
    liabilityMonths: "3",
    governingState: "Georgia",
    clairenTitle: "Founder"
  }
};
