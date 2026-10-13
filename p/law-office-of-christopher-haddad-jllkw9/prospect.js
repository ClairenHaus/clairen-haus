/* PROSPECT DATA: the only file to edit for a new prospect.
   Copy this whole folder to /p/<firm>-<6 random chars>/, edit the values below,
   and replace the three images in img/ (same file names). Values written as
   "[LIKE THIS]" show highlighted on the agreement page as blanks still to fill. */
// Findings checked live on chrishaddad.com, October 13, 2026.
window.PROSPECT = {
  "firmName": "The Law Office of Christopher A. Haddad, P.A.",
  "attn": "Christopher A. Haddad",
  "firstName": "Chris",
  "city": "West Palm Beach, FL",
  "currentDomain": "chrishaddad.com",
  "currentUrl": "https://www.chrishaddad.com/",
  "previewUrl": "https://clairenhaus.com/previews/law-office-of-christopher-haddad/",
  "checkedDate": "October 13, 2026",
  "images": {
    "beforeAfterDesktop": "before-after-desktop",
    "beforeAfterPhone": "before-after-phone",
    "beforeAfterAlt": "Side by side: chrishaddad.com today, and the new Law Office of Christopher A. Haddad site"
  },
  "findings": [
    {
      "title": "Hard to read on a phone",
      "body": "The site has no mobile setup, so a phone shows the full 1,000-pixel-wide desktop page shrunk to fit the screen. On an iPhone that makes your bio and practice areas about 39% of their normal size, and visitors have to pinch and zoom to read them. Your new site is built for phones first and reflows to any screen.",
      "image": {
        "name": "phone-text",
        "width": 980,
        "height": 380,
        "alt": "Christopher Haddad's bio on chrishaddad.com on a phone, beside the same bio on the new site",
        "caption": "Your bio on the same phone, at the same scale: today on the left, your new site on the right."
      }
    },
    {
      "title": "Google is told your News pages don\u2019t exist",
      "body": "Your News section, including the 2023 write-ups of the Stand Your Ground dismissal and the first-degree murder case where all charges were dropped, displays for visitors, but every one of those pages answers search engines with a \u201c404 not found\u201d code. Search engines generally leave pages that report \u201cnot found\u201d out of their results, so your strongest recent results are unlikely to show up in a search. Your new site puts those results on your practice pages, where they load normally."
    },
    {
      "title": "Your number can be tapped in only one place",
      "body": "561-832-1126 can be tapped in the header, but the site tells iPhones not to turn phone numbers into links, so the number in your page text, on the Contact page and in the footer is plain text a visitor has to copy or type. On your new site every number and email opens the phone or mail app with one tap, and phones get a call button that stays on screen."
    },
    {
      "title": "Three fax numbers and two email addresses",
      "body": "Your profile lists fax 561-832-1127, the Contact page lists 561-418-6162, and the footer on every page lists 561-418-6862. Your profile gives chris@chrishaddad.com while the Contact page gives info@chrishaddad.com. Your new site shows one set of contact details everywhere, once you confirm which ones you use."
    },
    {
      "title": "A broken badge on your profile",
      "body": "The National Trial Lawyers seal on your attorney profile loads from their website, and that image no longer exists there, so visitors see a broken image in its place. Your new site loads every image from your own site, so nothing breaks when another site changes."
    },
    {
      "title": "Signs the site isn\u2019t kept up",
      "body": "The footer still reads \u00a9 2013, and the Juvenile Law page ends with a stray news teaser from 2015 (\u201cAbout 300 who committed violent crimes as juveniles to be re-sentenced. Read Full Article\u201d) in the middle of the page text. Small things, but they make a visitor wonder whether the site is current."
    },
    {
      "title": "Nothing tells Google or AI who you are",
      "body": "There is no structured data, the behind-the-scenes labels that tell search engines and AI assistants your address, phone, practice areas and background, and no FAQ content for them to draw answers from. The homepage has four main headings competing with each other, and your logo and photo carry no text description. Your new site carries all of it on every page, plus twelve FAQs written only from facts on your own site."
    },
    {
      "title": "Your visitor statistics setting is out of date",
      "body": "The site\u2019s analytics setting still holds an old Universal Analytics ID and no current Google Analytics 4 ID. Google stopped processing Universal Analytics data in July 2023, so the site is most likely not measuring who visits or how they found you. Your new site is ready for current analytics at launch."
    }
  ],
  "agreement": {
    "firmLegalName": "The Law Office of Christopher A. Haddad, P.A.",
    "firmAddress": "319 Clematis Street, Suite 812, West Palm Beach, FL 33401",
    "domain": "chrishaddad.com",
    "clientEmail": "chris@chrishaddad.com",
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
