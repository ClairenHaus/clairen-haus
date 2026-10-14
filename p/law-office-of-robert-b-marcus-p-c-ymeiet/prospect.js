/* PROSPECT DATA: the only file to edit for a new prospect.
   Copy this whole folder to /p/<firm>-<6 random chars>/, edit the values below,
   and replace the three images in img/ (same file names). Values written as
   "[LIKE THIS]" show highlighted on the agreement page as blanks still to fill. */
window.PROSPECT = {
  "firmName": "Law Office of Robert B. Marcus P.C.",
  "attn": "Robert B. Marcus",
  "firstName": "Robert",
  "city": "White Plains, NY",
  "currentDomain": "rmarcuslaw.com",
  "currentUrl": "https://rmarcuslaw.com/",
  "previewUrl": "https://clairenhaus.com/previews/law-office-of-robert-b-marcus-p-c/",
  "checkedDate": "October 14, 2026",
  "images": {
    "beforeAfterDesktop": "before-after-desktop",
    "beforeAfterPhone": "before-after-phone",
    "beforeAfterAlt": "Side by side: rmarcuslaw.com today, and the new Law Office of Robert B. Marcus P.C. site"
  },
  "findings": [
    {
      "title": "The map on your Directions page doesn\u2019t load",
      "body": "Your Directions page has a Google map, but today it shows Google\u2019s message \u201cThis page can\u2019t load Google Maps correctly\u201d instead of your office. Google no longer accepts the map\u2019s setup on the page, so the map stays grayed out behind that box for every visitor. Your written driving and parking directions are still excellent, so your new site keeps all of them and adds one-tap Google Maps and Apple Maps links to One North Broadway, with no embedded map that can break this way.",
      "image": {
        "name": "map-check",
        "width": 1090,
        "height": 305,
        "alt": "The Directions page on rmarcuslaw.com showing Google's \"This page can't load Google Maps correctly\" message, beside the new contact page with tap-to-call and map links",
        "caption": "Your Directions page today on the left, the new contact page on the right."
      }
    },
    {
      "title": "Hard to read on a phone",
      "body": "Every page is set to a fixed width of 1,000 pixels, so a phone shows the whole desktop page shrunk to fit, at roughly 40% of its normal size. Visitors have to pinch and zoom to read your case results or find your number. Your new site is built for phones first and reflows to any screen, with a call button that stays at the bottom of the screen."
    },
    {
      "title": "Your phone number is a picture",
      "body": "The phone number and address at the top of every page are images, not text, so nobody can tap the number to call, and search engines can\u2019t read it. Nowhere on the site can (914) 831-9911 be tapped to call. On your new site your number and email are tap-to-call and tap-to-email on every page."
    },
    {
      "title": "Your practice areas only appear in Albanian",
      "body": "The only list of the cases you handle (construction accidents, car and truck accidents, pedestrian accidents, slip and falls, and medical and pharmaceutical malpractice) is inside the flyer image on your Shqip page. English-speaking visitors don\u2019t see it, and Google and AI assistants can\u2019t read text inside an image, so the site never says in words what kinds of cases you take. Your new site gives each practice area its own page, and keeps a full Albanian page in real text."
    },
    {
      "title": "Search engines get very little to go on",
      "body": "Your page titles are just \u201cHome\u201d, \u201cAbout\u201d and \u201cCase Results\u201d, with no page descriptions, no headings and no structured data telling Google and AI assistants who you are, where you are and what you do. Your photo on the About page is labelled \u201cDirections\u201d, and your sitemap lists rmarcuslaw.com/robert@rmarcuslaw.com as a page, which returns \u201cnot found\u201d. Your new site has clear titles and descriptions and full structured data on every page, plus fourteen FAQs written only from your own information."
    },
    {
      "title": "Signs the site hasn\u2019t been updated",
      "body": "The footer reads \u00a9 2018, the Directions and Disclaimer pages still say \u00a9 2014 with a different web designer\u2019s credit, and the awards list ends in 2017 and 2018. The Case Results page also has a few typos, such as \u201cPlantiff\u2019s\u201d and \u201cnot casually related\u201d (for \u201ccausally\u201d). Your new site is clean, current and easy to keep up to date."
    }
  ],
  "agreement": {
    "firmLegalName": "Law Office of Robert B. Marcus P.C.",
    "firmAddress": "One North Broadway, Suite 412, White Plains, NY 10601",
    "domain": "rmarcuslaw.com",
    "clientEmail": "robert@rmarcuslaw.com",
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
