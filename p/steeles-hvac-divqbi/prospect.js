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
  "firmName": "Steele's Refrigeration, Heating & Air Conditioning",
  "attn": "Steele Dilling",
  "firstName": "Steele",
  "city": "Denton, MD",
  "currentDomain": "steeleshvac.com",
  "currentUrl": "http://www.steeleshvac.com/",
  "previewUrl": "https://clairenhaus.com/previews/steeles-hvac/",
  "checkedDate": "October 15, 2026",
  "terms": TERMS,
  "images": {
    "beforeAfterDesktop": "before-after-desktop",
    "beforeAfterPhone": "before-after-phone",
    "beforeAfterAlt": "Side by side: steeleshvac.com today, and the new site for Steele\u2019s Refrigeration, Heating & Air Conditioning"
  },
  "findings": [
    {
      "title": "Your \u201cThe Company\u201d and FAQ pages still say \u201cComing Soon!\u201d",
      "body": "When we opened steeleshvac.com on October 15, the page linked as \u201cThe Company\u201d showed only \u201cComing Soon!\u201d and your business hours, and so did the FAQ page. Those are the two pages a new customer opens to decide whether to trust you, and right now they say nothing about you, Steele, or the work you do. Your new site has a full About page with you as President/Owner, your Maryland Master HVAC license, your Carrier dealer status and your careers message, plus 13 answered FAQs.",
      "image": {
        "name": "company-page",
        "width": 1600,
        "height": 582,
        "alt": "The \u201cThe Company\u201d page of steeleshvac.com, which reads Coming Soon, beside the new About page",
        "caption": "Your \u201cThe Company\u201d page today (left) and your new About page (right)."
      }
    },
    {
      "title": "Your Special Offers page is advertising 2014 deals",
      "body": "The Special Offers page in your main menu still reads \u201cSteele\u2019s Winter Specials! Call before Dec 31st, 2014\u201d, with $40 off a service agreement, $20 off a service call and 30% off geothermal, all expired almost twelve years ago. A customer who calls to ask for one of those is an awkward conversation. The home page also still lists the Federal Income Tax Credit. Your new site leaves expired offers out, and current specials can go up whenever you want them."
    },
    {
      "title": "Browsers mark the site \u201cNot secure\u201d",
      "body": "steeleshvac.com only works over plain http. The secure https address fails to connect, so Chrome labels every page \u201cNot secure\u201d, and your Request Service and Free Estimate forms send customers\u2019 names, addresses, phone numbers and emails over an unencrypted connection. Your new site runs on https with a valid certificate."
    },
    {
      "title": "Hard to use on a phone",
      "body": "The site has no mobile setup, so an iPhone shows the full desktop page shrunk to fit the screen, and customers have to pinch and zoom to read anything or tap a menu link. Most people searching for heating or A/C help are on their phones. Your new site is built for phones first, with a Call Now button that stays at the bottom of the screen."
    },
    {
      "title": "Your phone numbers can\u2019t be tapped",
      "body": "(410) 643-0005, (410) 479-5560 and 888-518-HVAC appear on every page, but always as plain text, so someone on a phone has to remember the number and type it in. On your new site every number and email opens the phone or mail app with one tap."
    },
    {
      "title": "Small details that date the site",
      "body": "The footer on every page reads \u201cCopyright 2010\u201d, and the home page says \u201cmore than 25 years\u201d, while your Facebook page says you\u2019ve served the community for 40. The \u201cThe Company\u201d page\u2019s browser-tab title says \u201cCareers and Employment\u201d, and the Refer A Friend page\u2019s says \u201cProducts and Services\u201d. Small things, but they can make customers wonder whether the site is still looked after."
    },
    {
      "title": "Nothing tells Google or AI who you are",
      "body": "None of your pages has structured data, the behind-the-scenes labels that tell search engines and AI assistants your business name, address, phone, hours, services and the towns you serve. Your new site carries all of it on every page, with its own page for each service, your 28 service towns, and FAQ answers marked up so they can be quoted."
    }
  ],
  "agreement": {
    "firmLegalName": "Steele's Refrigeration, Heating & Air Conditioning, Inc.",
    "firmAddress": "503 South 5th Avenue, Denton, MD 21629",
    "domain": "steeleshvac.com",
    "clientEmail": "sales@steeleshvac.com",
    "pageLimit": "16",
    "paymentMethod": "card or bank payment through Stripe",
    "hourlyRate": "$125 per hour",
    "pauseDays": "30",
    "handoverDays": "14",
    "liabilityMonths": "3",
    "governingState": "Georgia",
    "clairenTitle": "Founder"
  }
};
