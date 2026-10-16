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
  "firmName": "Reinl Accounting, Inc.",
  "attn": "Andrew Burg",
  "firstName": "Andrew",
  "city": "Chilton, WI",
  "currentDomain": "reinlaccounting.com",
  "currentUrl": "http://www.reinlaccounting.com/",
  "previewUrl": "https://clairenhaus.com/previews/reinl-accounting/",
  "checkedDate": "October 16, 2026",
  "terms": TERMS,
  "images": {
    "beforeAfterDesktop": "before-after-desktop",
    "beforeAfterPhone": "before-after-phone",
    "beforeAfterAlt": "Side by side: reinlaccounting.com today, and the new site for Reinl Accounting, Inc."
  },
  "findings": [
    {
      "title": "On a phone, the site shrinks to a tiny desktop page",
      "body": "When we opened reinlaccounting.com on a phone on October 16, every page loaded as a full desktop layout squeezed onto the screen, with text too small to read without pinching and zooming. The site has no phone layout. Your new site is built for phones first, with readable text, a one-tap menu and Call, Directions and Portal buttons that stay at the bottom of the screen."
    },
    {
      "title": "Nobody can tap to call you",
      "body": "We checked every page: there isn’t a single tap-to-call link on the site. Your number, 920-849-8848, appears only as plain text in the footer line and on the Contact page. On your new site the number is one tap from every page, along with directions to the office and your client portal."
    },
    {
      "title": "Browsers mark it “Not Secure”, and the tabs don’t say your name",
      "body": "The site only loads over plain http, so Chrome and Safari show “Not Secure” beside your address, on the same site where clients open their NetClient CS® portal. The page titles also read just “- Home”, “- Firm Profile” and “- Contact Us”, so your firm’s name is missing from browser tabs and from Google’s results. Your new site runs on https and every page title carries Reinl Accounting and Chilton."
    },
    {
      "title": "The home page leads with an IRS news feed, not your firm",
      "body": "The first thing a visitor sees is the template’s scrolling tax-alert feed and a general welcome note. Your services, your team and your hours each sit on separate inner pages. Your new home page opens with who you are, Established 1999, your CPAs and Enrolled Agents, your hours and a big map of your Grand Street office."
    },
    {
      "title": "A few details are out of date",
      "body": "The Firm Profile still says the firm has grown to “a staff of five accountants”, while your Contact page lists six accountants plus Niki. The Forms and Links page points to “2021 Federal Withholding Tables” and Wisconsin tables “After April 1, 2014”. Your new site has a Team page for all seven of you and a cleaned-up Forms & Links page."
    },
    {
      "title": "Your team has no page of its own",
      "body": "Kyle, Andrew, Lori, Korry, Mary, Kim and Niki appear only as names and emails at the bottom of the Contact page. Your new site gives the team its own page, and tells Google and AI assistants your name, address, hours, services and people on every page."
    }
  ],
  "agreement": {
    "firmLegalName": "Reinl Accounting, Inc.",
    "firmAddress": "292 E. Grand Street, P.O. Box 330, Chilton, WI 53014",
    "domain": "reinlaccounting.com",
    "clientEmail": "andrew@reinlaccounting.com",
    "pageLimit": "15",
    "paymentMethod": "card or bank payment through Stripe",
    "hourlyRate": "$125 per hour",
    "pauseDays": "30",
    "handoverDays": "14",
    "liabilityMonths": "3",
    "governingState": "Georgia",
    "clairenTitle": "Founder"
  }
};
