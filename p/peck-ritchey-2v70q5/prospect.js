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
  firmName: "Peck Ritchey, LLC",
  attn: "Kerry R. Peck",                 // optional; "" hides it
  firstName: "Kerry",                     // used on the thank-you page; "" for none
  city: "Chicago, IL",
  currentDomain: "peckritchey.com",
  currentUrl: "https://www.peckritchey.com/",
  previewUrl: "https://clairenhaus.com/previews/peck-ritchey/",
  checkedDate: "October 16, 2026",   // day the findings below were last checked; shown on the sales page

  images: {
    beforeAfterDesktop: "before-after-desktop",   // img/<name>.webp + .jpg
    beforeAfterPhone: "before-after-phone",
    beforeAfterAlt: "Side by side: peckritchey.com today, and the new Peck Ritchey, LLC site"
  },

  // What we found on the current site (checked live Oct 16, 2026). First item may carry a screenshot.
  findings: [
    {
      title: "Your Contact page gives Oak Brook the Northbrook address",
      body: "The \u201cOak Brook Location\u201d block on your Contact page reads 707 Skokie Blvd., Suite 600, Oak Brook, IL 60523. That is the Northbrook street address with an Oak Brook city and ZIP. The map under that block, the footer on the same page and your site\u2019s own structured data all say 700 Commerce Dr., Suite 500. A client who copies the address from the block gets Northbrook. The new site carries one address per office, used everywhere, with a one-tap directions link for each.",
      image: { name: "oak-brook", width: 1330, height: 356, alt: "The Oak Brook block on the peckritchey.com Contact page showing 707 Skokie Blvd., beside the Oak Brook office card on the new site showing 700 Commerce Dr.", caption: "Your Contact page today (left) and the new contact page (right)." }
    },
    {
      title: "Every page tells Google it is a five-star \u201cProduct\u201d",
      body: "All 15 pages we checked carry this hidden markup: {\"@type\": \"Product\", \"name\": \"Contact Us\", \"aggregateRating\": {\"ratingValue\": \"5\", \"reviewCount\": \"123\"}} (the name changes to match each page: \u201cHome\u201d, \u201cCareers\u201d, \u201cStaff\u201d). The firm\u2019s organization markup repeats the same 5-star, 123-review rating. None of those reviews appear on the page. Google\u2019s guidelines say a business may not mark up ratings of itself, that review markup must describe the thing on the page, and that a law firm is a LegalService, not a Product. Markup that does not match what is on the page is what Google’s “spammy structured markup” manual action is for, and that action removes a site’s rich results. The new site describes the firm as a LegalService with its four offices, hours and attorneys, and no rating it can\u2019t show.",
    },
    {
      title: "A phone number that is on none of your pages is in your code",
      body: "Your site\u2019s structured data lists (855) 328-5787 as the firm\u2019s main telephone, its customer-service contact point, and the Oak Brook office phone. That number appears nowhere on any page; every page shows (312) 201-0900 and the three suburban numbers. Google and AI assistants read the code, not the page, so a search result or voice assistant can hand a client the 855 number. The new site\u2019s code and pages carry the same numbers.",
    },
    {
      title: "Six pages say \u201ccall us at [phone-number]\u201d in their search description",
      body: "The page description inside your site’s code (the schema block your SEO plugin writes for search engines) on the Contact, Practice Areas, News, Estate Planning, Kerry R. Peck and Timothy J. Ritchey pages still contains the template placeholder \u201c[phone-number]\u201d, for example: \u201cFor more information about how we may be able to help you, call us at [phone-number] today.\u201d On the new site, every page has a written description with the real number.",
    },
    {
      title: "The Attorneys page is a bulleted list",
      body: "The page that introduces your 15 attorneys is a plain list of names in two bullet lists, with no photos, titles or practice areas, and its browser title reads \u201cChicago, IL Elder Abuse Attorneys, Nursing Home Neglect Lawyers\u201d. Your Contact page\u2019s title is \u201cChicago, Illinois Elder Abuse Lawyers, Nursing Home Neglect Attorneys\u201d. Those titles are what show in Google results and browser tabs. The new site shows every attorney with photo, title and a bio page, and each page is titled for what it is.",
    },
    {
      title: "Your Facebook link goes to Peck Bloom LLC",
      body: "The Facebook icon on every page, and your structured data, link to facebook.com/pages/Peck-Bloom-LLC/779409708750599, a page address under the firm\u2019s former name. The structured data also lists a Twitter account over plain http://. The new site links to the firm\u2019s current LinkedIn and Instagram profiles under the Peck Ritchey name.",
    },
    {
      title: "Small things that add up",
      body: "Your home page sends a phone about 930 KB across 52 requests and a desktop about 1.6 MB across 62 requests, and each page\u2019s HTML alone is close to 500 KB before compression. The Case Results banner image (case_results__banner-1540x480.jpg) returns 404 on the Contact and Attorneys pages. Your Attorneys list links each name, but the two Of Counsel attorneys sit under their own heading with no explanation of what Of Counsel means. The new home page is about 190 KB across 12 requests, with no missing files.",
    }
  ],

  // Agreement fields. Anything still "[IN BRACKETS]" is a blank Michelle fills before sending.
  agreement: {
    firmLegalName: "Peck Ritchey, LLC",
    firmAddress: "321 S. Plymouth Ct., 6th Floor, Chicago, IL 60604",
    domain: "peckritchey.com",
    clientEmail: "kpeck@peckritchey.com",
    pageLimit: "31",
    paymentMethod: "card or bank payment through Stripe",
    hourlyRate: "$125 per hour",
    pauseDays: "30",
    handoverDays: "14",
    liabilityMonths: "3",
    governingState: "Georgia",
    clairenTitle: "Founder"
  }
};
