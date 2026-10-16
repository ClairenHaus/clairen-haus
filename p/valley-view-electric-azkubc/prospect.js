/* PROSPECT DATA: the only file to edit for this prospect.
   Copied from the shared template (/p/<firm>-<6 random chars>/). Shared files in /p/assets/ are untouched. */

/* ======================= PRICE AND TERMS (PRICING v2, Oct 16 2026): the ONE place to change them =======================
   Michelle, Oct 16 2026: Good/Better/Best tiers, each paid in full at signing, then the $99/month care plan
   (first month free) on EVERY tier. Launch timing everywhere: "0–3 business days".
   Each card's button opens agreement/?tier=<id>; the agreement then states that tier, its price and what is included,
   and pays that tier's own live Stripe link (payLink). vertical "tax" carries the busy-season pitch on tiers 2 and 3;
   "trade" (contractors) carries none. The cards are drawn by /p/assets/tiers.js from this block.
   Live Stripe links: Fast Track plink_1UR06vJQOpmS2MxAsdNI7CYH · Automator plink_1URAcEJQOpmS2MxAWYSGsq93 ·
   Client Machine plink_1URAcFJQOpmS2MxAmp8VUBci. Prices: 1497 / 2197 / 2997. */
var TERMS = {
  "vertical": "trade",
  "launch": "0–3 business days",
  "care": 99,
  "defaultTier": "fast-track",
  "popularTier": "automator",
  "urgency": null,
  "tiers": [
    {
      "id": "fast-track",
      "name": "The Fast Track",
      "price": 1497,
      "pitch": "A modern, professional face for your business, ready in days.",
      "features": [
        "The core pre-built website, using your existing content",
        "Standard contact form",
        "Mobile optimization"
      ],
      "scope": [],
      "busy": "",
      "payLink": "https://buy.stripe.com/cNi3cwfcb0nReGxdG2bQY0g",
      "stripeLink": "plink_1UR06vJQOpmS2MxAsdNI7CYH"
    },
    {
      "id": "automator",
      "name": "The Automator",
      "price": 2197,
      "pitch": "Save 5+ hours a week by automating your scheduling and document collection.",
      "features": [
        "Everything in The Fast Track",
        "Scheduling integration (Calendly or Acuity)",
        "Secure customer portal / document link"
      ],
      "scope": [
        "integration of Client’s online scheduling tool (Calendly or Acuity) into the Site, so visitors can book appointments online;",
        "a link from the Site to Client’s secure customer portal or document-upload page for document collection;"
      ],
      "busy": "",
      "payLink": "https://buy.stripe.com/7sYeVeaVVb2v2XPdG2bQY0i",
      "stripeLink": "plink_1URAcEJQOpmS2MxAWYSGsq93"
    },
    {
      "id": "client-machine",
      "name": "The Client Machine",
      "price": 2997,
      "pitch": "Pre-screen leads and get found by local customers searching for help.",
      "features": [
        "Everything in The Automator",
        "Custom dynamic service intake form",
        "On-page Local SEO setup (your Google Business Profile link and page metadata)"
      ],
      "scope": [
        "integration of Client’s online scheduling tool (Calendly or Acuity) into the Site, so visitors can book appointments online;",
        "a link from the Site to Client’s secure customer portal or document-upload page for document collection;",
        "a custom dynamic service intake form on the Site that pre-screens new customer inquiries and delivers them to Client;",
        "on-page local SEO setup: optimized page titles, descriptions and metadata, and the Site linked with Client’s Google Business Profile;"
      ],
      "busy": "",
      "payLink": "https://buy.stripe.com/dRm7sM4xx2vZbul9pMbQY0j",
      "stripeLink": "plink_1URAcFJQOpmS2MxAmp8VUBci"
    }
  ]
};
/* ============================================================================================ */

(function (T) {
  function m(n) { return "$" + Number(n).toLocaleString("en-US"); }
  var path = location.pathname, want = "", known = false;
  try { want = (new URLSearchParams(location.search).get("tier") || "").toLowerCase(); } catch (x) {}
  if (!want && /\/thanks\/?$/.test(path)) { try { want = sessionStorage.getItem("ch-tier") || ""; } catch (x) {} }
  var tier = T.tiers.filter(function (t) { return t.id === want; })[0];
  known = !!tier;
  if (!tier) tier = T.tiers.filter(function (t) { return t.id === T.defaultTier; })[0] || T.tiers[0];
  if (/\/agreement\/?$/.test(path)) { try { sessionStorage.setItem("ch-tier", tier.id); } catch (x) {} }
  T.tiers.forEach(function (t) { t.priceText = m(t.price); t.agreementPath = "agreement/?tier=" + t.id; });
  T.tier = tier; T.tierKnown = known;
  T.build = tier.price; T.dueAtSigning = tier.price; T.payLink = tier.payLink;
  T.tierName = tier.name; T.buildText = m(tier.price); T.dueText = T.buildText; T.restText = "$0"; T.careText = m(T.care);
  T.tierLine = tier.name + ", " + T.buildText + " one-time build fee, paid in full at signing, then the " + T.careText + "/month care plan (first month free).";
  T.priceRange = m(T.tiers[0].price) + " to " + m(T.tiers[T.tiers.length - 1].price);
  T.plan = T.buildText + ", paid in full at signing";
  T.priceSub = "Paid in full when you sign. Includes two rounds of revisions.";
  T.stepPay = "Choose your package, sign the agreement online and pay its build fee. Takes a few minutes.";
  T.stepLaunch = "Two rounds of revisions, then live on your domain. Nothing more is due at launch.";
  T.payStepLabel = "Pay";
  T.agreeLead = "Your package: " + tier.name + " (" + T.buildText + "). Read the agreement below, then sign at the bottom and continue to pay the " + T.buildText + " build fee.";
  T.feeIntro = "The build fee for " + tier.name + " package is " + T.buildText + ", paid in full on signing through the secure payment link on this page. Work begins when payment is received.";
  T.feePart1 = ""; T.feePart2 = "";
  T.feeRefund = "The payment made on signing covers work started and is non-refundable once work has begun, except as stated in Section 11.";
  T.payNote = "Next, Stripe’s secure checkout shows " + T.buildText + " and asks for your company name and contact details. Your email is filled in for you so your receipt reaches you.";
  T.payButton = "Sign and pay " + T.buildText;
  T.thanksLead = known ? "Your payment for " + tier.name + " is in and your new website is underway. Stripe has emailed your receipt." :
    "Your payment is in and your new website is underway. Stripe has emailed your receipt.";
  T.launchNote = "Once you approve the final version, your site goes live. Nothing more is due at launch.";
  T.launchHeading = "Launch, in " + T.launch;
  // Point the shared renderer at this tier for this prospect only (shared config.js is not edited).
  var C = window.CH_CONFIG;
  if (C) {
    C.price = { build: T.build, deposit: T.dueAtSigning, balance: 0, care: T.care };
    C.STRIPE_DEPOSIT_LINK = T.payLink;
  }
  if (window.CHTiers) { try { window.CHTiers.render(T); } catch (x) {} }
})(TERMS);

window.PROSPECT = {
  "firmName": "Valley View Electric",
  "attn": "Mike & Jenny Siewert",
  "firstName": "Mike & Jenny",
  "city": "Searles, MN",
  "currentDomain": "valleyviewelecmn.com",
  "currentUrl": "http://valleyviewelecmn.com/",
  "previewUrl": "https://clairenhaus.com/previews/valley-view-electric/",
  "checkedDate": "October 16, 2026",
  "terms": TERMS,
  "images": {
    "beforeAfterDesktop": "before-after-desktop",
    "beforeAfterPhone": "before-after-phone",
    "beforeAfterAlt": "Side by side: valleyviewelecmn.com today, and the new site for Valley View Electric"
  },
  "findings": [
    {
      "title": "The request form on your home page doesn’t load",
      "body": "When we opened valleyviewelecmn.com on October 16, the “Request Information” form on your home page showed up as an empty space. The form is supplied by your website builder, and its server now refuses to show it inside your page (it answers with an error and a “don’t display in a frame” rule), so visitors see nothing where the Name, Email, Phone and Request boxes should be. Google’s listing for your site still shows those form fields, so it used to work. Anyone who tries to reach you that way simply can’t. Your new site has a working request form on the home page and the Contact page, plus a Request a Quote button on every page.",
      "image": {
        "name": "request-form",
        "width": 1600,
        "height": 713,
        "alt": "The empty space on the valleyviewelecmn.com home page where the request form should be, beside the new Contact page with its form",
        "caption": "Your home page today, with the blocked request form outlined (left), and your new Contact page (right)."
      }
    },
    {
      "title": "On a phone, your site is a shrunken desktop page",
      "body": "Your site has no mobile layout. On a 390-pixel-wide phone screen, the page is drawn about 1,000 pixels wide and shrunk to fit, so the text is tiny and visitors have to pinch and zoom. Your phone number, 507-233-9457, is plain text on every page, so it can’t be tapped to call. Your new site is built for phones first: large text, a tap-to-call button in the header, and a Call / Request a Quote bar that stays at the bottom of the screen."
    },
    {
      "title": "Your newest service is hard to find",
      "body": "In April you announced that you’re now a certified distributor and installer of AGI CMC hazard monitoring equipment. On your website it’s a small logo and a PDF link at the very bottom of the home page, with no page that explains it. Your new site gives hazard monitoring and grain temperature systems their own page, with your certification badge, and features it on the home page."
    },
    {
      "title": "Your services share one short page",
      "body": "Electrical design and wiring, troubleshooting and your 42-foot bucket truck each get a short paragraph on a single Services page, and the industrial, commercial, agricultural and residential work you do is a single line of words on the home page. Your new site has a page for each service, written from your own words, so people searching for exactly that can find it."
    },
    {
      "title": "Small details that make the site look out of date",
      "body": "Every page ends with the builder’s ad: “Website Designed at Homestead™ Create a Website and List Your Business.” The site doesn’t use a single photo of your trucks or your work, while your Facebook cover shows your whole fleet, including the bucket truck. And nothing on the site tells Google or AI assistants your business name, address, phone, hours or services. Your new site uses your own logo and fleet photo, and carries all of that information on every page."
    }
  ],
  "agreement": {
    "firmLegalName": "Valley View Electric, Inc.",
    "firmAddress": "18205 State Hwy. 15, Searles, MN 56073",
    "domain": "valleyviewelecmn.com",
    "clientEmail": "mike@valleyviewelecmn.com",
    "pageLimit": "9",
    "paymentMethod": "card or bank payment through Stripe",
    "hourlyRate": "$125 per hour",
    "pauseDays": "30",
    "handoverDays": "14",
    "liabilityMonths": "3",
    "governingState": "Georgia",
    "clairenTitle": "Founder"
  }
};
