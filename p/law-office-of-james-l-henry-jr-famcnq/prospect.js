/* PROSPECT DATA: the only file to edit for a new prospect.
   Copy this whole folder to /p/<firm>-<6 random chars>/, edit the values below,
   and replace the three images in img/ (same file names). Values written as
   "[LIKE THIS]" show highlighted on the agreement page as blanks still to fill. */
window.PROSPECT = {
  "firmName": "Law Office of James L. Henry, Jr.",
  "attn": "James L. Henry, Jr.",
  "firstName": "Jim",
  "city": "Chattanooga, TN",
  "currentDomain": "thechattanoogaattorney.com",
  "currentUrl": "https://www.thechattanoogaattorney.com/",
  "previewUrl": "https://clairenhaus.com/previews/law-office-of-james-l-henry-jr/",
  "checkedDate": "October 14, 2026",
  "images": {
    "beforeAfterDesktop": "before-after-desktop",
    "beforeAfterPhone": "before-after-phone",
    "beforeAfterAlt": "Side by side: thechattanoogaattorney.com today, and the new Law Office of James L. Henry, Jr. site"
  },
  "findings": [
    {
      "title": "Hard to read on a phone",
      "body": "The site has no mobile setup, so a phone shows the full 980-pixel-wide desktop page shrunk to fit the screen. On an iPhone the text ends up at about 40% of its normal size, and visitors have to pinch and zoom to read your practice areas or find your number. Your new site is built for phones first and reflows to any screen.",
      "image": {
        "name": "phone-text",
        "width": 1020,
        "height": 810,
        "alt": "The Contact page of thechattanoogaattorney.com on a phone, beside the same page on the new site",
        "caption": "The same Contact page on the same phone: today on the left, your new site on the right."
      }
    },
    {
      "title": "The map on your Contact page is blank",
      "body": "Your Contact page says “Please click on the Google Map to the right for easy driving directions,” but the map shows as an empty gray box. It is loaded over an insecure http:// link, and browsers block insecure content on a secure page. The map was also set up for 412 Broad Street. Your new site has a one-tap “Get directions” button instead."
    },
    {
      "title": "Your office address may be out of date",
      "body": "Every page of your site lists 412 Broad Street, Chattanooga, TN 37402. Your listing with the Tennessee Board of Professional Responsibility and other directories now show 101 Frazier Ave, Chattanooga, TN 37405. If you’ve moved, the website is the place people are most likely to look, so it should match. Your new site uses 101 Frazier Ave, and we’ll confirm it with you before launch."
    },
    {
      "title": "Your phone number can’t be tapped",
      "body": "(423) 756-3898 appears on every page as plain text, so a visitor on a phone has to copy it or type it in to call you. On your new site the number is a tap-to-call button on every page, and your email opens the mail app with one tap."
    },
    {
      "title": "The Facebook and Twitter icons don’t lead to you",
      "body": "The social icons at the bottom of every page link to the Facebook and Twitter home pages (facebook.com and twitter.com), not to pages for your office, so a visitor who clicks them leaves your site with nowhere to go."
    },
    {
      "title": "The site disagrees with itself, and shows its age",
      "body": "The homepage offers “over 38 years of experience,” while the footer of every page says “over 30 years.” The footer also reads “Copyright (c) 2018,” the only post on the Blog page is from October 2010, and the homepage’s news bar reads “Lastest Updates.” Your new site states your background once, consistently, with no dated content to go stale."
    },
    {
      "title": "Nothing tells Google or AI who you are",
      "body": "Every page has an empty description, and there is no structured data, the behind-the-scenes labels that tell search engines and AI assistants your address, phone, practice areas and who you are. There is no FAQ for them to draw answers from either. Your new site carries all of it on every page, plus fourteen FAQs written only from facts on your own site."
    },
    {
      "title": "Parts of the site load insecurely",
      "body": "http://thechattanoogaattorney.com still loads without switching visitors to the secure https:// version, and on the secure version the page still requests its heading font and map over plain http, which browsers block. That is why the headings fall back to a default font and the map stays empty. Your new site loads everything securely."
    }
  ],
  "agreement": {
    "firmLegalName": "Law Office of James L. Henry, Jr.",
    "firmAddress": "101 Frazier Ave, Chattanooga, TN 37405",
    "domain": "thechattanoogaattorney.com",
    "clientEmail": "info@thechattanoogaattorney.com",
    "pageLimit": "9",
    "paymentMethod": "card or bank payment through Stripe",
    "hourlyRate": "$125 per hour",
    "pauseDays": "30",
    "handoverDays": "14",
    "liabilityMonths": "3",
    "governingState": "Georgia",
    "clairenTitle": "Founder"
  }
};
