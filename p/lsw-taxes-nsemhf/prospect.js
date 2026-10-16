/* PROSPECT DATA: the only file to edit for this prospect.
   Copied from the shared template (/p/<firm>-<6 random chars>/). Shared files in /p/assets/ are untouched.
   LSW Taxes is a GIFT build (Michelle, Oct 16 2026 9:00 AM ET): see PRICE AND TERMS below. */

/* ======================= PRICE AND TERMS: the ONE place to change them =======================
   GIFT OFFER for LSW Taxes (Michelle, Oct 16 2026 9:00 AM ET): "gifting her this site in exchange
   for a review and to use her in adver[tising]... Just pay hosting."
   $0 build. $29/month hosting only, billed by card through Stripe from the day she signs.
   The old $797 link (plink_1UR9bDJQOpmS2MxAeSzeTbwK, https://buy.stripe.com/6oU3cwaVV0nR1TLcBYbQY0h)
   is still active in Stripe but no longer used on these pages. */
var TERMS = {
  gift: true,             // the build is a gift in exchange for a review + marketing permission
  build: 0,               // one-time build fee: $0 (gift)
  dueAtSigning: 29,       // first month of hosting, charged at signing by the Stripe subscription link
  care: 29,               // hosting only, per month, billed monthly from signing
  launch: "0–3 business days",
  payLink: "https://buy.stripe.com/4gM5kE8NNc6zdCtbxUbQY0k"   // live Stripe link: $29/month recurring, no build charge (plink_1URAoIJQOpmS2MxAWPNV7vkB, price_1URAoBJQOpmS2MxAuRdmWblg, prod_lsw_taxes_hosting)
};
/* ============================================================================================ */

(function (T) {
  function m(n) { return "$" + Number(n).toLocaleString("en-US"); }
  T.buildText = m(T.build); T.dueText = m(T.dueAtSigning); T.restText = "$0"; T.careText = m(T.care);
  T.offerLine = "Your website is a gift. $0 for the build, just " + m(T.care) + "/month hosting.";
  T.plan = "$0 build (a gift), then " + m(T.care) + "/month hosting";
  T.priceSub = "Our gift to you, in exchange for an honest review and permission to feature you in our marketing. Includes two rounds of revisions.";
  T.careSub = "Starts the day you sign, billed monthly by card. Month-to-month.";
  T.stepPay = "Sign the agreement online and start your " + m(T.care) + "/month hosting. Takes a few minutes. Nothing is charged for the build.";
  T.stepLaunch = "Two rounds of revisions, then live on your domain in " + T.launch + ". Nothing is due for the build.";
  T.payStepLabel = "Start hosting";
  T.agreeLead = "Read it below, then sign at the bottom and continue to start your " + m(T.care) + "/month hosting. The build itself is free.";
  T.payNote = "Next, Stripe’s secure checkout shows " + m(T.care) + " per month for hosting and asks for your card. There is no charge for the build. Your email is filled in for you so your receipt reaches you.";
  T.payButton = "Sign and start hosting (" + m(T.care) + "/mo)";
  T.thanksLead = "Your hosting is set up and your new website is on its way. Stripe has emailed your receipt.";
  T.launchNote = "Once you approve the final version, your site goes live. Nothing is due for the build; your " + m(T.care) + "/month hosting simply renews each month.";
  // Point the shared renderer at these terms for this prospect only (shared config.js is not edited).
  var C = window.CH_CONFIG;
  if (C) {
    C.price = { build: T.build, deposit: T.dueAtSigning, balance: 0, care: T.care };
    C.STRIPE_DEPOSIT_LINK = T.payLink;
  }
})(TERMS);

window.PROSPECT = {
  "firmName": "LSW Taxes",
  "attn": "Lecrecia Williams",
  "firstName": "Lecrecia",
  "city": "Hazel Crest, IL",
  "currentDomain": "lswtaxes.weebly.com",
  "currentUrl": "https://lswtaxes.weebly.com/",
  "previewUrl": "https://clairenhaus.com/previews/lsw-taxes/",
  "checkedDate": "October 16, 2026",
  "terms": TERMS,
  "images": {
    "beforeAfterDesktop": "before-after-desktop",
    "beforeAfterPhone": "before-after-phone",
    "beforeAfterAlt": "Side by side: lswtaxes.weebly.com today, and the new site for LSW Taxes"
  },
  "findings": [
    {
      "title": "There’s no phone number or email anywhere on your website",
      "body": "We checked all five pages of lswtaxes.weebly.com on October 16: Home, Services, Links and About Me, on a computer and on a phone. None of them shows a phone number or an email address. The only way to reach you is a three-field form under “Contact Me:” on the About Me page. Your Facebook page lists (888) 407-6796 and lswtaxes@yahoo.com, but someone who finds the website never sees them. Your own home page quotes the IRS’s advice to “choose a preparer you will be able to contact after the return is filed”. On your new site the phone number and email are on every page, one tap to call or write, with a Call button that stays on screen on phones.",
      "image": {
        "name": "contact-before-after",
        "width": 1600,
        "height": 640,
        "alt": "The About Me page of lswtaxes.weebly.com with only a contact form, beside the new Contact page with phone and email",
        "caption": "Your About Me page today (left) and your new Contact page (right)."
      }
    },
    {
      "title": "The web address on your Facebook cover doesn’t open",
      "body": "Your new Facebook cover photo (updated August 29) sends people to www.lswtaxes.com. When we tried it on October 16, it didn’t load: the www address doesn’t exist yet, and lswtaxes.com without the www shows a connection error. The Website link on your Facebook page still points to the old Weebly site. Your new site can go live right on lswtaxes.com, so the address on your cover finally leads somewhere."
    },
    {
      "title": "On a phone, your site loses its design",
      "body": "Phone visitors get a separate mobile version of your site, and its stylesheet is missing (the file returns “not found”). So on a phone the pages show as plain black text in the browser’s default font, with no colors, no layout and no tap-to-call button. The home page is also wider than the screen (431 pixels on a 390-pixel iPhone), so it slides sideways. Your new site is built for phones first."
    },
    {
      "title": "Your home page links to someone else’s website",
      "body": "The line “For more information go to About Me and Services” near the bottom of your home page doesn’t open your own pages. Both links go to another tax company’s website (iwtax.com), to pages about Durham and North Carolina taxes, and both now show an error. Every link on your new site goes where it says."
    },
    {
      "title": "Your site and your Facebook tell two different stories",
      "body": "Your Facebook page says “Virtual Tax Preparation · Serving Clients Nationwide”, but the website never mentions virtual service and talks about home offices instead. The About Me page says you’re located in Hazel Crest, IL on a computer but in Homewood, IL on a phone. The Services page still describes bank products from Chase Bank, Refund Anticipation Loans and an advance of up to $1,500 “before leaving my office”, and payment by cash, check or money order. Your new site leads with what your Facebook says today, and we left the older offers off until you tell us what’s current."
    },
    {
      "title": "Small details that make the site look unfinished",
      "body": "The photo on your home page still carries the stock-photo site’s watermark. Several of the theme’s background images no longer load (titletab_left.png and footer_top.png among them), and the footer carries Weebly’s “Powered by” ad. There’s no logo: your new LSW logo from Facebook isn’t on the site. And nothing on the site tells Google or AI assistants your business name, phone, services or area served. Your new site uses your logo and your colors, and carries all of that on every page."
    }
  ],
  "agreement": {
    "firmLegalName": "LSW Taxes LLC",
    "firmAddress": "Hazel Crest, Illinois",
    "domain": "lswtaxes.com",
    "clientEmail": "lswtaxes@yahoo.com",
    "pageLimit": "10",
    "paymentMethod": "card or bank payment through Stripe",
    "hourlyRate": "$125 per hour",
    "pauseDays": "30",
    "handoverDays": "14",
    "liabilityMonths": "3",
    "governingState": "Georgia",
    "clairenTitle": "Founder"
  }
};
