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
  firmName: "North Ridge Mechanical LLC",
  attn: "Jason Jancse",
  firstName: "Jason",
  city: "Carlisle, PA",
  currentDomain: "northridgemechanical.com",
  currentUrl: "http://www.northridgemechanical.com/",
  previewUrl: "https://clairenhaus.com/previews/north-ridge-mechanical/",
  checkedDate: "October 15, 2026",
  terms: TERMS,

  images: {
    beforeAfterDesktop: "before-after-desktop",
    beforeAfterPhone: "before-after-phone",
    beforeAfterAlt: "Side by side: northridgemechanical.com today, and the new site for North Ridge Mechanical"
  },

  // What we found on the current site (checked live Oct 15, 2026). First item carries a screenshot.
  findings: [
    {
      title: "Your Contact page shows no form, and its map is broken",
      body: "When we opened your Contact page on October 15, the message form never appeared. It is set up to load from Homestead\u2019s form service, and that service refused to display it. The map next to it shows Google\u2019s \u201cThis page can\u2019t load Google Maps correctly\u201d error. So a customer who clicks Contact Us sees an empty page apart from your phone number and email at the top. We didn\u2019t send a test message, so it\u2019s worth a quick look on your side. Your new Contact page has a working request form, one-tap calling and a directions link.",
      image: { name: "contact-form", width: 980, height: 886, alt: "The Contact page of northridgemechanical.com on a phone, beside the new contact page", caption: "Your Contact page on the same phone: today on the left, your new site on the right." }
    },
    {
      title: "Browsers mark the site \u201cNot secure\u201d",
      body: "northridgemechanical.com only works over plain http. The secure https version doesn\u2019t connect at all, so Chrome labels every page \u201cNot secure\u201d, and the form on your home page asks visitors for their name, email and phone number over an unencrypted connection. Your new site runs on https with a valid certificate."
    },
    {
      title: "Hard to read on a phone",
      body: "The site has no mobile setup, so a phone shows the full 1,004-pixel-wide desktop page shrunk to fit the screen. On an iPhone the text ends up at under 40% of its normal size, and customers have to pinch and zoom to read your services. Most people looking for heating or AC help are on their phones. Your new site is built for phones first."
    },
    {
      title: "Your phone number can\u2019t be tapped",
      body: "717-241-5994 is at the top of every page and in every page title, but always as plain text, so someone on a phone has to remember it or type it in to call you. On your new site your number and email open the phone or mail app with one tap, and a Call Now button stays at the bottom of the screen on phones."
    },
    {
      title: "Small details that date the site",
      body: "The footer on every page still reads \u201cCopyright 2012\u201d, and the home page says \u201cover 15 years of experience\u201d while your About page says Jason has served the area since 1997. The Services page title, the text shown in Google results and browser tabs, reads \u201cHeating Reapir PA\u201d, and the service-area list says \u201cBoling Springs\u201d. Small things, but they can make customers wonder whether the site is still looked after."
    },
    {
      title: "Nothing tells Google or AI who you are",
      body: "None of your five pages has structured data, the behind-the-scenes labels that tell search engines and AI assistants your business name, address, phone, services and the towns you serve. Your new site carries all of it on every page, with its own page for each service and twelve FAQ answers marked up so they can be quoted."
    }
  ],

  // Agreement fields. Anything still "[IN BRACKETS]" is a blank Michelle fills before sending.
  agreement: {
    firmLegalName: "North Ridge Mechanical LLC",
    firmAddress: "7816 Wertzville Road, Carlisle, PA 17013",
    domain: "northridgemechanical.com",
    clientEmail: "nridgemechanical@gmail.com",
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
