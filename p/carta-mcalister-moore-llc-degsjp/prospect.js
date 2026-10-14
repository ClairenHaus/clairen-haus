/* PROSPECT DATA: the only file to edit for a new prospect.
   Copy this whole folder to /p/<firm>-<6 random chars>/, edit the values below,
   and replace the three images in img/ (same file names). Values written as
   "[LIKE THIS]" show highlighted on the agreement page as blanks still to fill. */
window.PROSPECT = {
  "firmName": "Carta, McAlister & Moore, LLC",
  "attn": "Mark R. Carta",
  "firstName": "Mark",
  "city": "Darien, CT",
  "currentDomain": "cmm-law.com",
  "currentUrl": "https://www.cmm-law.com/",
  "previewUrl": "https://clairenhaus.com/previews/carta-mcalister-moore-llc/",
  "checkedDate": "October 14, 2026",
  "images": {
    "beforeAfterDesktop": "before-after-desktop",
    "beforeAfterPhone": "before-after-phone",
    "beforeAfterAlt": "Side by side: cmm-law.com today, and the new Carta, McAlister & Moore site"
  },
  "findings": [
    {
      "title": "Your severance guide link leads to a security warning",
      "body": "On your Employment Disputes page, the “Negotiating Your Severance Agreement” download points to a bare server address (75.103.74.48) instead of cmm-law.com. A visitor’s browser shows a “Your connection is not private” warning, and anyone who clicks past it gets a “403 Forbidden” error, so the guide never opens. The “Collaborative Divorce” link on your Divorce & Family Law page points to the same address. On your new site every link stays on your own domain, and the severance guide opens from both the Employment page and Mark’s bio.",
      "image": {
        "name": "broken-guide",
        "width": 980,
        "height": 279,
        "alt": "The severance guide link on cmm-law.com's Employment Disputes page, beside the browser security warning it leads to",
        "caption": "The guide link on your Employment Disputes page today, and what a visitor’s browser shows after clicking it."
      }
    },
    {
      "title": "The homepage still opens with a COVID-19 notice",
      "body": "The first thing visitors read on your homepage, and the first screen on a phone, is “COVID-19 Notice – We are here to support you and your business… throughout the COVID-19 crisis.” The footer on every page reads © 2019, and the newest post on your News page is from May 2020. Together they can make visitors wonder whether the site is kept up. Your new site opens with what you do and who you are."
    },
    {
      "title": "Your News page still announces a partner who is no longer listed",
      "body": "The News page still features “Sebastian D’Acunto is named Partner,” but he no longer appears among your professionals, so a visitor comparing the two pages gets a mixed picture of who is at the firm. Your new site presents your current attorneys and paralegals, each with a profile page."
    },
    {
      "title": "The “save contact” buttons on attorney bios are broken",
      "body": "The contact-card icons on the attorney bio pages download nothing: Darcy’s and Glen’s lead to a “page not found” error, and Tim’s points to Glen’s file, which is missing too. On your new site each attorney’s direct line and email are one tap away on their own page."
    },
    {
      "title": "A broken award badge appears on every page",
      "body": "In the footer of every page, a 2021 Expertise.com award badge is loaded from another company’s server, and that image no longer loads. Visitors see a broken-image icon and the word “Expertise.com” where the badge should be. Your new site carries no third-party images that can break."
    },
    {
      "title": "Your search listing reads as a half-finished sentence",
      "body": "The description Google can show for your homepage reads “Rated among top lawyers in Fairfield County. and are honored to be Connecticut’s only LEGUS member.” Fourteen of the nineteen pages we checked have no description at all, so search results fall back to whatever text Google picks. Your new site gives every page its own clear title and description."
    },
    {
      "title": "Nothing tells Google or AI who your attorneys are",
      "body": "The site’s only structured data is a generic page label. Nothing identifies Carta, McAlister & Moore as a law firm, or gives search engines and AI assistants your address, attorneys, practice areas or the ten towns you serve, and there is no FAQ content for them to draw answers from. Your new site carries all of it on every page, plus fourteen FAQs written only from facts on your own site."
    }
  ],
  "agreement": {
    "firmLegalName": "Carta, McAlister & Moore, LLC",
    "firmAddress": "777 Post Road, 2nd Floor, Darien, CT 06820",
    "domain": "cmm-law.com",
    "clientEmail": "mcarta@cmm-law.com",
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
