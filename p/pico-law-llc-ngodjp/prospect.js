/* PROSPECT DATA: the only file to edit for a new prospect.
   Copy this whole folder to /p/<firm>-<6 random chars>/, edit the values below,
   and replace the three images in img/ (same file names). Values written as
   "[LIKE THIS]" show highlighted on the agreement page as blanks still to fill. */
window.PROSPECT = {
  "firmName": "The Law Offices of Deborah L. Pico, LLC",
  "attn": "Deborah L. Pico",
  "firstName": "Deborah",
  "city": "Fort Lee, NJ",
  "currentDomain": "picolawllc.com",
  "currentUrl": "https://picolawllc.com/",
  "previewUrl": "https://clairenhaus.com/previews/pico-law-llc/",
  "checkedDate": "October 14, 2026",
  "images": {
    "beforeAfterDesktop": "before-after-desktop",
    "beforeAfterPhone": "before-after-phone",
    "beforeAfterAlt": "Side by side: picolawllc.com today, and the new site for The Law Offices of Deborah L. Pico, LLC"
  },
  "findings": [
    {
      "title": "The contact box covers your homepage text",
      "body": "On a standard 1366-pixel laptop screen, the floating “Get Assistance Now” box stays pinned to the lower right and sits on top of the homepage: it covers the “Deborah L. Pico – Attorney At Law” caption under your photo and the ends of lines in your welcome text. On a phone, the floating “Call” button sits over your paragraphs the same way. On your new site nothing floats over the content, and the call button lives in the menu.",
      "image": {
        "name": "phone-text",
        "width": 980,
        "height": 426,
        "alt": "The picolawllc.com homepage on a 1366-pixel laptop with the floating contact box covering the caption and text, beside the same area of the new site",
        "caption": "The same spot on the same laptop screen: today on the left, with the floating box circled; your new site on the right."
      }
    },
    {
      "title": "The page slides sideways on a phone",
      "body": "On a 390-pixel iPhone screen your homepage is 398 pixels wide, so the page drifts left and right as visitors scroll with their thumb. Your new site is built for phones first and fits any screen exactly."
    },
    {
      "title": "834 near-copy town and ZIP pages",
      "body": "Your sitemap lists 853 addresses. All but 19 are town and ZIP-code versions of the same handful of pages with the place name swapped in, such as “Experienced lawyers in Allendale, NJ” and “Legal Services in Uptown, NYC”. Google’s spam policies describe large sets of near-identical location pages as “doorway” pages, which can weigh on how the whole site ranks. Your new site has 15 real pages, each about one subject."
    },
    {
      "title": "Your search listings read awkwardly",
      "body": "Each page’s search description is filled in automatically from its title, so Google can show sentences like “The Law Offices Of Deborah L. Pico, LLC is an experienced lawyers in Northern, NJ with reputation for good service…”. The homepage title, “Experienced lawyers in Northern, NJ”, doesn’t mention you or Fort Lee. Every page on your new site has its own written title and description."
    },
    {
      "title": "Nothing tells Google or AI who you are",
      "body": "There is no structured data, the behind-the-scenes labels that tell search engines and AI assistants your address, phone, practice areas and credentials, and no FAQ content for them to draw answers from. Your new site carries all of it on every page, plus twelve FAQs written only from facts on your own site."
    },
    {
      "title": "Several resource links lead to “page not found”",
      "body": "Six of the resource links on your Links page now land on “page not found” errors, including the NJ Courts probate page and the Bergen County Bar Association. The “Aging And Community Services” link on your Elder Law page is one of them."
    },
    {
      "title": "A mistyped address shows a blank white page",
      "body": "Any outdated or mistyped address on picolawllc.com returns a completely empty page, with no menu, phone number or way back to your site, and there is no robots.txt file to guide search engines. Your new site launches with a branded “page not found” page and a clean sitemap."
    }
  ],
  "agreement": {
    "firmLegalName": "The Law Offices of Deborah L. Pico, LLC",
    "firmAddress": "530 Main Street, Suite 200, Fort Lee, NJ 07024",
    "domain": "picolawllc.com",
    "clientEmail": "DPico@PicoLawLLC.com",
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
