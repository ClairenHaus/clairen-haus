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
  "firmName": "S & A Taxes and Accounting Inc",
  "attn": "Stephanie Callihan",
  "firstName": "Stephanie",
  "city": "Clio, MI",
  "currentDomain": "callihanstaxservice.weebly.com",
  "currentUrl": "https://callihanstaxservice.weebly.com/",
  "previewUrl": "https://clairenhaus.com/previews/s-a-taxes/",
  "checkedDate": "October 16, 2026",
  "terms": TERMS,
  "images": {
    "beforeAfterDesktop": "before-after-desktop",
    "beforeAfterPhone": "before-after-phone",
    "beforeAfterAlt": "Side by side: callihanstaxservice.weebly.com today, and the new site for S & A Taxes and Accounting"
  },
  "findings": [
    {
      "title": "Your website still has the old name and the old number",
      "body": "The site is still “Callihan’s Tax Service” with (810) 223-5713 at the top of every page, while your Facebook page and Google listing say S & A Taxes and Accounting Inc and (810) 368-4687. Someone who finds the old site may call the wrong number or think it’s a different business. Your new site uses the new name, notes that you were Callihan’s Tax Service so returning clients know it’s you, and puts the office number on every page."
    },
    {
      "title": "The home page button says “Button Text”",
      "body": "The one button on your home page still shows the template’s placeholder label, “Button Text”. Under it the site has a single line about your business. Your new home page explains every service, shows your starting prices, and has a real button to call you."
    },
    {
      "title": "On a phone, the photo still carries a stock-photo watermark",
      "body": "On an iPhone-size screen the header photo of the sunset shows the stock site’s “envato” watermark, and the phone number at the top isn’t a tap-to-call link (we found none on any page). Your new site is built for phones first, with a Call button that stays at the bottom of the screen."
    },
    {
      "title": "Your prices on the site are out of date",
      "body": "The About page lists individual returns from $95. Your Facebook page now says taxes start at $105, and senior taxes start at $75. Your new site has a clear pricing page with your current starting prices, so nobody is surprised at the desk."
    },
    {
      "title": "Google has no website to send people to",
      "body": "Your Google listing shows “Add website”, and the current site lives on a free Weebly address with a “Powered by Weebly” badge. Your new site goes on your own domain, gets connected to your Google listing and Facebook page, and tells Google and AI assistants your name, address, hours, prices and services."
    }
  ],
  "agreement": {
    "firmLegalName": "S & A Taxes and Accounting Inc",
    "firmAddress": "185 W. Vienna St., Clio, MI 48420",
    "domain": "callihanstaxservice.weebly.com (moving to a domain Client chooses)",
    "clientEmail": "sandataxes1@gmail.com",
    "pageLimit": "12",
    "paymentMethod": "card or bank payment through Stripe",
    "hourlyRate": "$125 per hour",
    "pauseDays": "30",
    "handoverDays": "14",
    "liabilityMonths": "3",
    "governingState": "Georgia",
    "clairenTitle": "Founder"
  }
};
