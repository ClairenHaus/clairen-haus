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
  firmName: "Clark & Stevens",
  attn: "Robert E. Stevens",            // optional; "" hides it
  firstName: "Bob",                    // used on the thank-you page; "" for none
  city: "Hilton Head Island, SC",
  currentDomain: "clarkandstevens.com",
  currentUrl: "https://www.clarkandstevens.com/",
  previewUrl: "https://clairenhaus.com/previews/clark-stevens/",
  checkedDate: "October 16, 2026",   // day the findings below were last checked; shown on the sales page

  images: {
    beforeAfterDesktop: "before-after-desktop",   // img/<name>.webp + .jpg
    beforeAfterPhone: "before-after-phone",
    beforeAfterAlt: "Side by side: clarkandstevens.com today, and the new Clark & Stevens, P.A. site"
  },

  // What we found on the current site (checked live Oct 16, 2026). First item may carry a screenshot.
  findings: [
    {
      title: "A chat box opens by itself over your homepage headline",
      body: "Within a few seconds of opening clarkandstevens.com on a computer, a \u201cHow can we help?\u201d panel pops open on its own and sits over \u201cOne Team. Many Solutions.\u201d and the line beneath it, before the visitor has touched anything. The panel is mostly empty space: a Call button, an Email button, and \u201cPowered by Scorpion\u201d at the bottom. I opened the site twice in fresh browsers and it happened both times. On a phone, the same widget\u2019s greeting bubble and a Call bar sit over the bottom of every page I opened. Your new site has no pop-ups: the phone number, address and a contact form are one tap away in the header and footer of every page.",
      image: { name: "chat-panel", width: 1330, height: 434, alt: "The chat panel that opens on its own over the clarkandstevens.com homepage headline", caption: "Your homepage a few seconds after it loads, with the chat panel open over the headline." }
    },
    {
      title: "Your site gives four different figures for the firm\u2019s experience",
      body: "The homepage banner says \u201cFamily Lawyers with more than 85 years of combined experience.\u201d Two paragraphs down, the same page says the firm has represented clients \u201cfor more than 25 years.\u201d The \u201cHow We Stand Apart\u201d block near the bottom of every page says \u201cOver 80 Years of Combined Experience.\u201d And the description written into the page\u2019s code for Google to show under your listing says \u201cfor more than 30 years.\u201d A careful reader notices. The new site states one figure, more than 80 years, in one place, and it is a one-line change if you would rather say something else."
    },
    {
      title: "Bill Clark is listed as retired and as a practicing partner at the same time",
      body: "The Home and About pages show \u201cWilliam C. Clark- Retired\u201d directly above the title \u201cATTORNEY & PARTNER.\u201d His bio page is written in the present tense (\u201cBill Clark practices in the fields of family law, personal injury, medical malpractice\u2026\u201d), and the Family Law page says \u201cFor over 40 years, William C. Clark has assisted clients\u2026\u201d with his name linked to a page address that no longer exists (it silently redirects to the About page). Someone choosing a lawyer cannot tell whether Bill still takes cases. The new site introduces you as the attorney, keeps Bill\u2019s bio with his retirement stated plainly and his achievements in the past tense, and links go where they say."
    },
    {
      title: "Two links in your legal content lead nowhere, and one FAQ answer was never written",
      body: "On the Family Law FAQ, the \u201cChild Support Calculator\u201d link points to a page on the old state.sc.us DSS server (dss/csed/calculator.htm), which no longer answers at all, so the page just spins. On the Visitation Rights page, the \u201cHilton Head initiatives\u201d link lands on the Town of Hilton Head\u2019s \u201cError 404 - Page Not Found\u201d page. And the FAQ question \u201cHow long do I have to be a resident of South Carolina before I can file for divorce?\u201d is answered with \u201cFurther details on this matter coming soon.\u201d Every link on the new site was checked before it was built, and it carries no placeholder text."
    },
    {
      title: "Google can\u2019t read your phone number from the site\u2019s business data",
      body: "Your pages carry a block of structured data describing the firm as a LegalService, which is good, but the phone number in it is filed under \u201ctelePhone\u201d, which is not a property Google or schema.org recognise (the correct one is \u201ctelephone\u201d), so the number is ignored. The logo in it is a relative path (\u201c/images/logos/Dark-Logo\u2026png\u201d) rather than a full address, and the block names no attorney, no email and no hours. The new site carries complete LegalService and Person data for the firm and for you, with the phone, address, practice areas, AAML fellowship and credentials marked up so Google and AI assistants read them correctly."
    },
    {
      title: "Small things that add up",
      body: "There is no email address anywhere on your site, so the only ways to reach you are the phone and a form. Your Privacy Policy says you may email visitors \u201cto tell you about specials, new products or services\u201d, which reads like a retailer\u2019s template rather than a law firm\u2019s. The page still loads Google\u2019s old Universal Analytics script alongside the current one, and that old service stopped recording visits in July 2023. And when I fetched your homepage from the command line, without a full web browser, the site refused the request (HTTP 403), which is something to be aware of as more people ask AI assistants for a lawyer. The new site is written for a law firm, loads one analytics tag, and is built to be read by people and by the assistants they use."
    }
  ],

  // Agreement fields. Anything still "[IN BRACKETS]" is a blank Michelle fills before sending.
  agreement: {
    firmLegalName: "Clark & Stevens, P.A.",
    firmAddress: "60 Arrow Rd., Hilton Head Island, SC 29928",
    domain: "clarkandstevens.com",
    clientEmail: "[CLIENT EMAIL]",
    pageLimit: "8",
    paymentMethod: "card or bank payment through Stripe",
    hourlyRate: "$125 per hour",
    pauseDays: "30",
    handoverDays: "14",
    liabilityMonths: "3",
    governingState: "Georgia",
    clairenTitle: "Founder"
  }
};
