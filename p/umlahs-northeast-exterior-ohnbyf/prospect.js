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
  "firmName": "Umlah's Northeast Exterior",
  "attn": "James Umlah",
  "firstName": "James",
  "city": "Stewartstown, NH",
  "currentDomain": "umlahsne.com",
  "currentUrl": "https://www.umlahsne.com/",
  "previewUrl": "https://clairenhaus.com/previews/umlahs-northeast-exterior/",
  "checkedDate": "October 15, 2026",
  "terms": TERMS,
  "images": {
    "beforeAfterDesktop": "before-after-desktop",
    "beforeAfterPhone": "before-after-phone",
    "beforeAfterAlt": "Side by side: umlahsne.com today, and the new site for Umlah's Northeast Exterior"
  },
  "findings": [
    {
      "title": "Your before-and-after roofing photos are shown at thumbnail size",
      "body": "Your Roofing page has some of your best work on it: real before-and-after photos of North Country homes. But when we opened it on October 15, the photos sat in a narrow column, most of them only about 100 pixels wide on a full-size screen, and the BEFORE and AFTER labels had drifted away from the photos they belong to, so it’s hard to tell which picture is which. Your new site gives those pairs their own Projects page, side by side and full width, with each one clearly labeled.",
      "image": {
        "name": "roofing-page",
        "width": 1400,
        "height": 509,
        "alt": "The Roofing page of umlahsne.com today, beside the new Projects page",
        "caption": "Your Roofing page today on the left, your new Projects page on the right."
      }
    },
    {
      "title": "Hard to read on a phone",
      "body": "The site has no mobile setup, so a phone shows the full 980-pixel-wide desktop page shrunk to fit the screen, and visitors have to pinch and zoom to read anything. Most homeowners looking for a roofer or a siding quote are searching on their phones. Your new site is built for phones first."
    },
    {
      "title": "Your phone number can’t be tapped",
      "body": "603-246-7160 appears on your home, About and Contact pages, but always as plain text. None of your eight pages has a tap-to-call link, so someone on a phone has to remember the number or type it in. On your new site your home line, cell and email open with one tap, and a Call button stays at the bottom of the screen on phones."
    },
    {
      "title": "The “Chat button below” isn’t there",
      "body": "Your Contact page says customers can reach you through “Facebook or the Chat button below”, but no chat button appears. The page still uses Facebook’s website chat plugin, which Facebook retired in May 2024. Your new site has a quote request form on the Contact page and on the home page, plus one-tap calling."
    },
    {
      "title": "The free-plan builder ad on every page",
      "body": "Every page ends with “Make a free website with Yola”, the ad that comes with Yola’s free plan, and the pages are set in an old Times-style font inside a fixed table layout. It works, but it reads as a site from another era. Your new site is clean, fast and branded only as Umlah’s Northeast Exterior."
    },
    {
      "title": "Google sees web addresses instead of your name",
      "body": "Page titles (the text shown in Google results and browser tabs) read “umlahsne.com”, “northeastexterior.biz/roofing” and “northeastexterior.biz/references”. The northeastexterior.biz address doesn’t load any more. None of your pages has structured data, the behind-the-scenes labels that tell search engines and AI assistants your name, phone, services and service area. Your new site has a proper title and full structured data on every page."
    }
  ],
  "agreement": {
    "firmLegalName": "Umlah's Northeast Exterior",
    "firmAddress": "20 Circle Drive, Pittsburg, NH 03592",
    "domain": "umlahsne.com",
    "clientEmail": "northeastexterior@gmail.com",
    "pageLimit": "13",
    "paymentMethod": "card or bank payment through Stripe",
    "hourlyRate": "$125 per hour",
    "pauseDays": "30",
    "handoverDays": "14",
    "liabilityMonths": "3",
    "governingState": "Georgia",
    "clairenTitle": "Founder"
  }
};
