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
  "firmName": "K&T Seamless Guttering and Siding",
  "attn": "",
  "firstName": "",
  "city": "Sunrise Beach, MO",
  "currentDomain": "wedrainyourrain.com",
  "currentUrl": "https://wedrainyourrain.com/",
  "previewUrl": "https://clairenhaus.com/previews/kt-seamless-guttering/",
  "checkedDate": "October 16, 2026",
  "terms": TERMS,
  "images": {
    "beforeAfterDesktop": "before-after-desktop",
    "beforeAfterPhone": "before-after-phone",
    "beforeAfterAlt": "Side by side: wedrainyourrain.com today, and the new site for K&T Seamless Guttering and Siding"
  },
  "findings": [
    {
      "title": "Every photo on your site is missing",
      "body": "When we opened wedrainyourrain.com on October 16, the photo on your home page showed as a broken image. We checked the rest: all seven photos on the site (one on Home, four on Services, two on About Us) come back “not found” from the old Yahoo hosting. Your Facebook page is full of great job photos, so your new site has an Our Work page built from them, plus your own photos on every service page."
    },
    {
      "title": "The site has lost its design",
      "body": "Your pages load their look (colors, layout and fonts) from Yahoo’s old website builder. Those files no longer exist, so every page now shows as plain black text and blue links on a white background, with the menu as a bare list. Your new site carries its own design, in the navy and red of your logo, so nothing outside it can break it."
    },
    {
      "title": "On a phone, it’s a shrunken desktop page",
      "body": "The site has no phone layout, so a phone shows the whole page shrunk down and the text is too small to read without pinching. Your phone number, (573) 374-8726, is plain text on every page, so a customer can’t tap it to call. Your new site is built for phones first, with a Call button that stays at the bottom of the screen on every page."
    },
    {
      "title": "Your contact form may not be reaching you",
      "body": "The Contact Us form depends on a Yahoo script that now comes back “not found”, so we couldn’t confirm it still delivers messages. We didn’t send a test, but it’s worth trying one yourself. The new site’s form is built to deliver straight to your inbox, with your number and email one tap away beside it."
    },
    {
      "title": "Your website is years behind your Facebook",
      "body": "The site still says “Over 28 years experience” and “Copyright 2011 … Web Hosting by Yahoo!”. Your Facebook says 40 plus years, a Top 5 nomination for Best of the Lake 2026, your booth at the Laurie Hillbilly Fair and the big red trailer. No page tells Google your business name, address, services or service area in a form it can read. Your new site does, on every page, with a Service Area page for Sunrise Beach, Camdenton, Osage Beach, Lake Ozark, Laurie, Versailles, Eldon and Stover, and an FAQ answered from your own words."
    }
  ],
  "agreement": {
    "firmLegalName": "K&T Morris Enterprises, Inc., d/b/a K&T Seamless Guttering and Siding",
    "firmAddress": "11608 North State Highway 5, Sunrise Beach, MO 65079",
    "domain": "wedrainyourrain.com",
    "clientEmail": "kent@wedrainyourrain.com",
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
