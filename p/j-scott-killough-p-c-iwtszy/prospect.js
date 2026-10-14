/* PROSPECT DATA: the only file to edit for a new prospect.
   Copy this whole folder to /p/<firm>-<6 random chars>/, edit the values below,
   and replace the three images in img/ (same file names). Values written as
   "[LIKE THIS]" show highlighted on the agreement page as blanks still to fill. */
window.PROSPECT = {
  "firmName": "J. Scott Killough, P.C.",
  "attn": "J. Scott Killough",
  "firstName": "Scott",
  "city": "Tyler, TX",
  "currentDomain": "killough-law.com",
  "currentUrl": "https://killough-law.com/",
  "previewUrl": "https://clairenhaus.com/previews/j-scott-killough-p-c/",
  "checkedDate": "October 14, 2026",
  "images": {
    "beforeAfterDesktop": "before-after-desktop",
    "beforeAfterPhone": "before-after-phone",
    "beforeAfterAlt": "Side by side: killough-law.com today, and the new J. Scott Killough, P.C. site"
  },
  "findings": [
    {
      "title": "Your Areas of Practice and FAQ pages say \u201cInformation coming soon\u201d",
      "body": "Areas of Practice and FAQ are two of the five links in your main menu, and they are the pages a new client is most likely to open. Both currently show a single line, \u201cInformation coming soon.\u201d, and nothing else. Your new site gives each of your nine practice areas its own page, from estate planning and probate to guardianships, tax planning and mediation, and an FAQ page with eleven answers drawn only from facts already on your site.",
      "image": {
        "name": "coming-soon",
        "width": 980,
        "height": 400,
        "alt": "The Areas of Practice page on killough-law.com, which reads only \u201cInformation coming soon.\u201d, beside the new Areas of Practice page",
        "caption": "Your Areas of Practice page today (left), and the same page on your new site (right)."
      }
    },
    {
      "title": "Your phone number can\u2019t be tapped, and there\u2019s no email or contact form",
      "body": "(903) 561-8280 appears in the header, the footer and on the Contact Us page, but always as plain text, so a visitor on a phone has to remember it and dial it by hand. The site also has no email address and no contact form, so calling is the only way to reach you. Your new site puts a Call button on every page, with a call bar that stays at the bottom of the screen on phones, and adds a contact page with directions."
    },
    {
      "title": "Nothing tells Google or AI who you are",
      "body": "Every page shares the same description, a list of keywords, and the inner pages are titled only \u201cAbout Scott\u201d, \u201cAreas of Practice\u201d, \u201cFAQ\u201d and \u201cContact Us\u201d, without your name or Tyler. There is no structured data (the behind-the-scenes labels that tell search engines and AI assistants your address, phone, practice areas and credentials) and no sitemap. Your new site carries all of it on every page, including your board certification, your CPA license and the nine counties you serve."
    },
    {
      "title": "Your experience is understated",
      "body": "Your homepage and About Scott page say you have \u201cover 38 years\u201d of experience as a practicing attorney. You began your legal career in 1985, so it is now more than 40 years, and the figure suggests the site hasn\u2019t been updated in a while. Your new site states the dates themselves (practicing since 1985, in Tyler since 1989, your own firm since 1990), so it never goes out of date."
    },
    {
      "title": "Most images have no description",
      "body": "Seven of the nine images on your homepage have no useful description for screen readers or search engines: the six rotating banner pictures have none, and the logo is labelled only \u201clogo\u201d. The banner captions are part of the pictures themselves, so they can\u2019t be read aloud. Every image on your new site, including your portrait and board-certification badge, is described."
    }
  ],
  "agreement": {
    "firmLegalName": "J. Scott Killough, P.C.",
    "firmAddress": "5520 Old Bullard Rd, Suite 113, Tyler, TX 75703",
    "domain": "killough-law.com",
    "clientEmail": "[CLIENT EMAIL]",
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
