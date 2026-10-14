/* PROSPECT DATA: the only file to edit for a new prospect.
   Copy this whole folder to /p/<firm>-<6 random chars>/, edit the values below,
   and replace the three images in img/ (same file names). Values written as
   "[LIKE THIS]" show highlighted on the agreement page as blanks still to fill. */
window.PROSPECT = {
  "firmName": "Raffaele Puppio",
  "attn": "Michael A. Raffaele",
  "firstName": "Michael",
  "city": "Media, PA",
  "currentDomain": "raffaelepuppio.com",
  "currentUrl": "http://www.raffaelepuppio.com/",
  "previewUrl": "https://clairenhaus.com/previews/raffaele-puppio-llp/",
  "checkedDate": "October 14, 2026",
  "images": {
    "beforeAfterDesktop": "before-after-desktop",
    "beforeAfterPhone": "before-after-phone",
    "beforeAfterAlt": "Side by side: raffaelepuppio.com today, and the new Raffaele Puppio site"
  },
  "findings": [
    {
      "title": "Your Contact page is cut off on phones",
      "body": "On an iPhone, the introduction on your Contact page runs about 745 pixels wide on a 390-pixel screen, so the right half of every line is simply cut off, and so is the parking note about Miller Street. The page can\u2019t be scrolled sideways to read the rest. Your new site is built for phones first, and every line fits the screen.",
      "image": {
        "name": "phone-text",
        "width": 980,
        "height": 427,
        "alt": "The Contact page of raffaelepuppio.com on a phone, beside the same page on the new site",
        "caption": "The same Contact page on the same phone: today on the left, your new site on the right."
      }
    },
    {
      "title": "There is no secure version of the site",
      "body": "raffaelepuppio.com only loads over plain http://. The https:// address doesn\u2019t connect at all, because no security certificate is set up, so browsers such as Chrome label every page \u201cNot secure\u201d, including the Contact page where visitors type their name, phone number and message. Your new site launches on https:// with a certificate that renews itself."
    },
    {
      "title": "Your phone number can only be tapped in the header",
      "body": "610.891.6710 is a tap-to-call link only in the small header bar. On the Contact page and on each attorney\u2019s bio it\u2019s plain text, so a visitor on a phone has to copy it or type it in. On your new site every phone number and email opens the phone or mail app with one tap."
    },
    {
      "title": "A garbled character in your main menu",
      "body": "The Family Law menu, on every page, shows \u201cGrandparents\ufffd Rights\u201d: the apostrophe was saved in an old character format and now displays as a question-mark symbol. The same kind of glitch turns Jennifer Ganley\u2019s bio into \u201cSt. Joseph=s University\u201d. Small things, but they are in front of every visitor."
    },
    {
      "title": "Nothing tells Google or AI who you are",
      "body": "There is no structured data on the site, the behind-the-scenes labels that tell search engines and AI assistants your address, phone, attorneys and practice areas, and the FAQ page has just three questions. Your new site carries all of it on every page, plus ten FAQs written only from facts on your own site."
    },
    {
      "title": "The homepage blog links are from 2019",
      "body": "The \u201cFrom the Blog\u201d links on your homepage lead to three posts from March 2019, the most recent on the blog. It can leave visitors wondering whether the site is kept up, even though your press releases continue into 2024."
    },
    {
      "title": "Wrong addresses show a bare error page",
      "body": "A mistyped or outdated address on raffaelepuppio.com shows the server\u2019s plain \u201c404 Not Found\u201d message, with no logo, menu or phone number, so the visitor has nowhere to go. Your new site has a branded \u201cpage not found\u201d page that points people to your practice areas, attorneys and phone number."
    }
  ],
  "agreement": {
    "firmLegalName": "Raffaele Puppio, LLP",
    "firmAddress": "19 West Third Street, Media, PA 19063",
    "domain": "raffaelepuppio.com",
    "clientEmail": "Raffaele@raffaelepuppio.com",
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
