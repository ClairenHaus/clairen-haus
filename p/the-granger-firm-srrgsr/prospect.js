/* PROSPECT DATA: the only file to edit for a new prospect.
   Copy this whole folder to /p/<firm>-<6 random chars>/, edit the values below,
   and replace the three images in img/ (same file names). Values written as
   "[LIKE THIS]" show highlighted on the agreement page as blanks still to fill. */
// Findings checked live on thegrangerfirm.com, October 13, 2026.
window.PROSPECT = {
  "firmName": "The Granger Firm",
  "attn": "Blair H. Granger",
  "firstName": "Blair",
  "city": "Paoli, PA",
  "currentDomain": "thegrangerfirm.com",
  "currentUrl": "https://www.thegrangerfirm.com/",
  "previewUrl": "https://clairenhaus.com/previews/the-granger-firm/",
  "checkedDate": "October 13, 2026",
  "images": {
    "beforeAfterDesktop": "before-after-desktop",
    "beforeAfterPhone": "before-after-phone",
    "beforeAfterAlt": "Side by side: thegrangerfirm.com today, and the new Granger Firm site"
  },
  "findings": [
    {
      "title": "Hard to read on a phone",
      "body": "The site has no mobile setup, so a phone shows the full 1,000-pixel-wide desktop page shrunk to fit the screen. On an iPhone that renders everything at about 39% of its normal size, so the 13-pixel body text reads at roughly 5 pixels, and visitors have to pinch and zoom to read a bio or find your number. Your new site is built for phones first and reflows to any screen.",
      "image": {
        "name": "phone-text",
        "width": 980,
        "height": 473,
        "alt": "David Scaggs' practice description on thegrangerfirm.com on a phone, beside the same paragraph on the new site",
        "caption": "The same paragraph from David Scaggs’ bio on the same phone: today on the left, your new site on the right."
      }
    },
    {
      "title": "“Use our online form” leads to a page with no form",
      "body": "Fourteen pages, including all three attorney bios, the FAQ and the practice pages, say “Click here to use our online form.” The link opens the Contact page, which has no form at all, only a disclaimer and the info@ address. Your new site has a real contact page with a short form (it sends nothing in this preview) and one-tap phone and email."
    },
    {
      "title": "Your phone number can’t be tapped",
      "body": "(610) 640-7500 appears on every page, but never as a tap-to-call link, so a visitor on a phone has to copy it or type it in. Your new site makes the number one tap from every page, with a call button that stays at the bottom of the screen on phones."
    },
    {
      "title": "Course links on the attorney bios are broken",
      "body": "On Blair’s and David’s pages, the “Handling the Failure to Disclose Case” link opens a “not found” page, and so does David’s “Title 101” link (both PDFs are missing from the server). They sit right where a referring lawyer or client checks your teaching credentials."
    },
    {
      "title": "Current news, but a 2017 footer",
      "body": "Your homepage carries 2026 news (the August 2026 Real Estate 101 webcast and December’s Real Estate Institute), yet the footer on most pages still reads “© 2011–2017”, which can make an actively maintained site look abandoned. A few small typos also sit in the homepage news box (“at the at the”, “possesion”, “municipalies”). Your new site keeps the year current and the news cleanly edited."
    },
    {
      "title": "Nothing tells Google or AI who you are",
      "body": "There is no structured data on any page: the behind-the-scenes labels that tell search engines and AI assistants your address, phone, attorneys and practice areas. Your FAQ answers are excellent but aren’t marked up for them either. Your new site carries all of it on every page, plus 15 FAQs written only from your own published guidance."
    },
    {
      "title": "Built on 2009-era code",
      "body": "The site runs jQuery 1.3.2 (released in 2009) and draws its headings with Cufón, an old font script from the same era, and http://thegrangerfirm.com still loads without switching visitors to the secure https:// version. Your new site is plain, fast, modern HTML and CSS served only over https."
    }
  ],
  "agreement": {
    "firmLegalName": "The Granger Firm",
    "firmAddress": "1800 East Lancaster Avenue, Suite K, Paoli, PA 19301",
    "domain": "thegrangerfirm.com",
    "clientEmail": "info@thegrangerfirm.com",
    "pageLimit": "19",
    "paymentMethod": "card or bank payment through Stripe",
    "hourlyRate": "$125 per hour",
    "pauseDays": "30",
    "handoverDays": "14",
    "liabilityMonths": "3",
    "governingState": "Georgia",
    "clairenTitle": "Founder"
  }
};
