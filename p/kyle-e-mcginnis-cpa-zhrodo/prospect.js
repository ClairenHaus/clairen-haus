/* PROSPECT DATA: the only file to edit for this prospect (Kyle E. McGinnis, CPA).
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
  "firmName": "Kyle E. McGinnis, CPA",
  "attn": "Kyle E. McGinnis",
  "firstName": "Kyle",
  "city": "Springfield, IL",
  "currentDomain": "kyleemcginnis.com",
  "currentUrl": "http://www.kyleemcginnis.com/",
  "previewUrl": "https://clairenhaus.com/previews/kyle-e-mcginnis-cpa/",
  "checkedDate": "October 16, 2026",
  "terms": TERMS,
  "images": {
    "beforeAfterDesktop": "before-after-desktop",
    "beforeAfterPhone": "before-after-phone",
    "beforeAfterAlt": "Side by side: kyleemcginnis.com today, and the new site for Kyle E. McGinnis, CPA"
  },
  "findings": [
    {
      "title": "Your home page has no phone number, address or email",
      "body": "When we opened kyleemcginnis.com on October 16, the home page didn\u2019t show (217) 753-3377, your East Pine Street address or an email anywhere. The only place they appear is the Contact Us page, one more click away. On your new site the phone number is in the header of every page, in the first screen of the home page, and in a Call button that stays at the bottom of the screen on phones."
    },
    {
      "title": "On a phone it\u2019s a shrunken desktop page",
      "body": "The site has no mobile setup, so an iPhone draws the full 980-pixel desktop layout and shrinks it to fit. The text is too small to read without pinching and zooming, and the menu links are tiny targets. Your new site is built for phones first, with large type and tap-to-call and tap-to-email on every page."
    },
    {
      "title": "The words aren\u2019t really yours",
      "body": "The welcome message, the firm profile and the service descriptions are the standard text that comes with the CCH Site Builder template. The same paragraphs appear word for word on many other CPA firms\u2019 websites. Nothing on the site says who Kyle is, and your best proof isn\u2019t on the page: a pass on your 2021 peer review is only a PDF link, and your three 5-star Google reviews don\u2019t appear at all. Your new site puts your name, the peer review result and those reviews up front, and we\u2019ll add a few lines about you in your own words.",
      "image": {
        "name": "services-page",
        "width": 1600,
        "height": 640,
        "alt": "The Client Services page of kyleemcginnis.com beside the new Services page",
        "caption": "Your Client Services page today (left) and your new Services page (right), with its own page for each of your 14 services."
      }
    },
    {
      "title": "Browsers warn visitors away from the secure address",
      "body": "kyleemcginnis.com only works over plain http, so Chrome marks it \u201cNot secure\u201d. If someone types the https:// address, the browser shows a privacy warning instead of your site, because the security certificate is for a different name. Your new site runs on https with a valid certificate."
    },
    {
      "title": "Google sees \u201c- Home\u201d instead of your name",
      "body": "Every page title is just a dash and the page name: \u201c- Home\u201d, \u201c- Firm Profile\u201d, \u201c- Contact Us\u201d. That title is what shows in Google results and on browser tabs, so your firm\u2019s name is missing from both. There is also no structured data telling search engines and AI assistants your name, address, phone and services. Your new site has a clear title on every page, its own page for each service, and that structured data built in."
    },
    {
      "title": "Small details that date the site",
      "body": "The footer on every page still says \u201cDesigned by CCH Site Builder\u201d, and the phone number can only be tapped to call on the Contact Us page. Small things, but they can make visitors wonder whether the site is still looked after."
    }
  ],
  "agreement": {
    "firmLegalName": "Kyle E. McGinnis, CPA",
    "firmAddress": "200 East Pine St., Springfield, IL 62704",
    "domain": "kyleemcginnis.com",
    "clientEmail": "shelley@kyleemcginnis.com",
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
