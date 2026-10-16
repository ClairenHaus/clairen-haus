/* PROSPECT DATA: the only file to edit for this prospect (Delores I. Nance, CPA, P.C.).
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
  "vertical": "tax",
  "launch": "0–3 business days",
  "care": 99,
  "defaultTier": "fast-track",
  "popularTier": "automator",
  "urgency": {
    "title": "Busy season is coming.",
    "body": "You know how January to April goes: phone tag to book appointments, documents arriving by email, the same intake questions on every call. The Automator and The Client Machine take that admin off your desk before the rush, so you keep your sanity for the returns."
  },
  "tiers": [
    {
      "id": "fast-track",
      "name": "The Fast Track",
      "price": 1497,
      "pitch": "A modern, professional face for your firm, ready in days.",
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
      "pitch": "Save 5+ hours a week during busy season by automating your scheduling and document collection.",
      "features": [
        "Everything in The Fast Track",
        "Scheduling integration (Calendly or Acuity)",
        "Secure Client Portal integration (TaxDome or Liscio link)"
      ],
      "scope": [
        "integration of Client’s online scheduling tool (Calendly or Acuity) into the Site, so visitors can book appointments online;",
        "a link from the Site to Client’s secure client portal (for example TaxDome or Liscio) for document collection;"
      ],
      "busy": "Clients book their own appointments and send documents securely, so January to April isn’t phone tag and email attachments.",
      "payLink": "https://buy.stripe.com/7sYeVeaVVb2v2XPdG2bQY0i",
      "stripeLink": "plink_1URAcEJQOpmS2MxAWYSGsq93"
    },
    {
      "id": "client-machine",
      "name": "The Client Machine",
      "price": 2997,
      "pitch": "Pre-screen leads and get found by local taxpayers searching for help.",
      "features": [
        "Everything in The Automator",
        "Custom dynamic Tax Intake Form",
        "On-page Local SEO setup (your Google Business Profile link and page metadata)"
      ],
      "scope": [
        "integration of Client’s online scheduling tool (Calendly or Acuity) into the Site, so visitors can book appointments online;",
        "a link from the Site to Client’s secure client portal (for example TaxDome or Liscio) for document collection;",
        "a custom dynamic tax intake form on the Site that pre-screens new client inquiries and delivers them to Client;",
        "on-page local SEO setup: optimized page titles, descriptions and metadata, and the Site linked with Client’s Google Business Profile;"
      ],
      "busy": "New clients arrive pre-screened with their details already in, before the rush starts.",
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
  "firmName": "Delores I. Nance, CPA, P.C.",
  "attn": "Delores I. Nance",
  "firstName": "Delores",
  "city": "Gilbert, AZ",
  "currentDomain": "nancecpa.com",
  "currentUrl": "http://www.nancecpa.com/",
  "previewUrl": "https://clairenhaus.com/previews/delores-i-nance-cpa/",
  "checkedDate": "October 16, 2026",
  "terms": TERMS,
  "images": {
    "beforeAfterDesktop": "before-after-desktop",
    "beforeAfterPhone": "before-after-phone",
    "beforeAfterAlt": "Side by side: nancecpa.com today, and the new site for Delores I. Nance, CPA, P.C."
  },
  "findings": [
    {
      "title": "Booking a meeting is hidden in two \u201cClick HERE\u201d lines",
      "body": "Your site lets new clients book a 30- or 60-minute meeting at the Gilbert office, which is a great thing to offer. But when we opened nancecpa.com on October 16, the only way in was two lines of small text reading \u201cClick HERE to Schedule\u2026\u201d, below the welcome paragraphs on the home page. On your new site, \u201cBook a meeting\u201d is in the header of every page and in the first screen of the home page, and on phones it stays at the bottom of the screen next to a Call button."
    },
    {
      "title": "On a phone it\u2019s a shrunken desktop page",
      "body": "The site has no mobile setup, so an iPhone draws the full 980-pixel desktop layout and shrinks it to fit. The text is too small to read without zooming, and 480-821-4005 at the top can\u2019t be tapped to call. It\u2019s only tap-to-call on the Contact Us page. Your new site is built for phones first, with tap-to-call and tap-to-book everywhere."
    },
    {
      "title": "Browsers warn visitors away from the secure address",
      "body": "nancecpa.com only works over plain http, so Chrome marks it \u201cNot secure\u201d. If someone types https://www.nancecpa.com, the browser shows a privacy warning instead of your site, because the security certificate is for a different name. Your new site runs on https with a valid certificate."
    },
    {
      "title": "Your best information is buried",
      "body": "Your step-by-step directions to Suite 191 (enter by Breeze Dental and State Farm, go around behind the fountain) are excellent, but they sit on a page called \u201cInfo Center\u201d. The fact that the Gilbert office is accepting new clients is only on Contact Us, and your 24 services are one long page of links. Your new site has an Offices page with your directions in your own words, \u201caccepting new clients\u201d right on the home page, and its own page for each group of services.",
      "image": {
        "name": "services-page",
        "width": 1600,
        "height": 640,
        "alt": "The Client Services page of nancecpa.com beside the new Services page",
        "caption": "Your Client Services page today (left) and your new Services page (right)."
      }
    },
    {
      "title": "A broken link and template text",
      "body": "The Links page points visitors to \u201cNance Financial Group LLC\u201d at moneyconcepts.com/dnance, which now returns a \u201c404 Not Found\u201d page. The welcome message on the home page is the standard text that came with the CCH Site Builder template, and the same paragraphs appear on many other CPA firms\u2019 sites. The header graphic is template clip art, not anything about you or Gilbert."
    },
    {
      "title": "Nothing tells Google or AI who you are",
      "body": "None of your pages has structured data, the behind-the-scenes labels that tell search engines and AI assistants your firm\u2019s name, both office addresses, phone and services. Your new site carries all of it on every page, plus an FAQ marked up so it can be quoted."
    }
  ],
  "agreement": {
    "firmLegalName": "Delores I. Nance, CPA, P.C.",
    "firmAddress": "2680 South Val Vista Drive, Building 16, Suite 191, Gilbert, AZ 85295",
    "domain": "nancecpa.com",
    "clientEmail": "delores@nancecpa.com",
    "pageLimit": "20",
    "paymentMethod": "card or bank payment through Stripe",
    "hourlyRate": "$125 per hour",
    "pauseDays": "30",
    "handoverDays": "14",
    "liabilityMonths": "3",
    "governingState": "Georgia",
    "clairenTitle": "Founder"
  }
};
