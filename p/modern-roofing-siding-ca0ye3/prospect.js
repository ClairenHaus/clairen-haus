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
  "firmName": "Modern Roofing & Siding Plus",
  "attn": "Otis Nelson",
  "firstName": "Otis",
  "city": "Ashland, ME",
  "currentDomain": "modernroofingandsiding.com",
  "currentUrl": "https://modernroofingandsiding.com/",
  "previewUrl": "https://clairenhaus.com/previews/modern-roofing-siding/",
  "checkedDate": "October 16, 2026",
  "terms": TERMS,
  "images": {
    "beforeAfterDesktop": "before-after-desktop",
    "beforeAfterPhone": "before-after-phone",
    "beforeAfterAlt": "Side by side: modernroofingandsiding.com today, and the new site for Modern Roofing & Siding Plus"
  },
  "findings": [
    {
      "title": "Your footer still says “Copyright this business website”",
      "body": "When we opened modernroofingandsiding.com on October 16, the bottom of every page read “2009 - 2020 Copyright this business website. All rights reserved.” That’s the website builder’s placeholder line, never swapped for your name, and it stops at 2020. Next to it, the “VeriSign Trust Seal” shows as a broken image, because the address the seal loads from no longer exists. Your new footer carries your business name, your address, both phone numbers, your email and a current year.",
      "image": {
        "name": "footer-today",
        "width": 1400,
        "height": 470,
        "alt": "The footer of modernroofingandsiding.com, zoomed in, showing the template copyright line and the broken VeriSign seal",
        "caption": "The bottom of every page on your site today."
      }
    },
    {
      "title": "On a phone, it’s a shrunken desktop page",
      "body": "Your site has no phone layout. A phone shows the whole desktop page shrunk down, so the text is too small to read without pinching, and the page is wider than the screen (1,050 pixels on a 390-pixel phone), so it slides sideways. Neither phone number can be tapped to call. Your new site is built for phones first, and a Call button stays at the bottom of the screen on every page."
    },
    {
      "title": "A few typos customers will notice",
      "body": "The Services and Home pages have small slips that are easy to miss when you’ve read them a hundred times: “vinyl widows”, “pluming”, “renevations”, “Ashphalt Roofing”, “New Consrtuction”, “NO MESS gaurantee” and “VISA, MasterCard, Discover excepted”. The Contact page says “Benidicta” and “Equal Oppertunity Employer”. Your new site keeps your words and your voice, with the spelling cleaned up."
    },
    {
      "title": "The site doesn’t show everything you do now",
      "body": "Your Facebook cover lists excavation, septic systems, foundations, driveways, framing and trusses, and says you’re DEP certified. Otis posted a video of a concrete pour on September 1. The website mentions none of that. It covers roofing, siding, windows and remodeling, and its Bathroom & Kitchen Gallery has just three small photos. Your new site gives each service its own page, adds a Foundations & Site Work page from your Facebook list, and puts your best project photos in one gallery."
    },
    {
      "title": "Your address isn’t the same everywhere",
      "body": "Your website gives 863 Portage Rd, PO Box 157, Ashland, and the Contact page says your home base is in Nashville. Yelp and the BBB list 77 Masardis Rd, Ashland. A customer looking you up can find two different street addresses. We’ll put whichever address you confirm on every page and in the information Google reads."
    },
    {
      "title": "Nothing tells Google who you are",
      "body": "No page on the site carries structured data, so search engines and AI assistants get no clear record of your business name, address, phone numbers, services or service area. Your 22 customer testimonials sit at the bottom of the Services page. Your new site has a Reviews page with every testimonial quoted as written, a Service Area page from Fort Kent and Allagash to Patten and Benedicta, and an FAQ, all marked up so they can be read and quoted."
    }
  ],
  "agreement": {
    "firmLegalName": "Modern Roofing & Siding Plus",
    "firmAddress": "863 Portage Rd, PO Box 157, Ashland, ME 04732",
    "domain": "modernroofingandsiding.com",
    "clientEmail": "ginger@modernroofingandsiding.com",
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
