/* PROSPECT DATA: the only file to edit for a new prospect.
   Copy this whole folder to /p/<firm>-<6 random chars>/, edit the values below,
   and replace the three images in img/ (same file names). Values written as
   "[LIKE THIS]" show highlighted on the agreement page as blanks still to fill. */
window.PROSPECT = {
  "firmName": "Robbie Barker, Attorney at Law",
  "attn": "Robbie Barker",
  "firstName": "Robbie",
  "city": "Conroe, TX",
  "currentDomain": "attorneyofconroe.com",
  "currentUrl": "https://www.attorneyofconroe.com/",
  "previewUrl": "https://clairenhaus.com/previews/robbie-barker-attorney-at-law/",
  "checkedDate": "October 14, 2026",
  "images": {
    "beforeAfterDesktop": "before-after-desktop",
    "beforeAfterPhone": "before-after-phone",
    "beforeAfterAlt": "Side by side: attorneyofconroe.com today, and the new Robbie Barker, Attorney at Law site"
  },
  "findings": [
    {
      "title": "Your number and email can’t be tapped on a phone",
      "body": "None of the 9 pages on attorneyofconroe.com has a tap-to-call link for your number or a tap-to-email link for your address. The site’s code also tells iPhones not to turn phone numbers into links on their own, so someone reading your home page on a phone has to memorize or copy (936) 900-9580 to call you. On your new site the number is a tap-to-call button at the top of every page, and your email is one tap away."
    },
    {
      "title": "Hard to read on a phone",
      "body": "The site has no mobile setup, so a phone lays every page out 980 pixels wide and shrinks it to about 40% of its size. Your 20-pixel body text shows at about 8 pixels on an iPhone, and the office hours in the sidebar at under 6. Visitors have to pinch and zoom to read your practice areas or find your address. Your new site is built for phones first and reflows to any screen."
    },
    {
      "title": "Two different phone numbers",
      "body": "Most of your pages give (936) 900-9580, but your Contact page and your Practice Areas page give 936-900-9085. On the Contact page both numbers sit side by side, so a caller can’t tell which one to use, and Google can pick up either. Your new site shows one number, the same on every page, and tells search engines exactly which number and address belong to the office.",
      "image": {
        "name": "two-numbers",
        "width": 1030,
        "height": 330,
        "alt": "The attorneyofconroe.com Contact page with 936 900-9085 in the page and (936)-900-9580 in the sidebar highlighted",
        "caption": "Your Contact page today: two different numbers on one screen."
      }
    },
    {
      "title": "Google is told you practice family and labor law",
      "body": "The description your Practice Areas page gives search engines says your fields of law “include family law, criminal law, labor law, and other legal disciplines”, and your About page’s says the office has “an experienced team of specialist attorneys”. Both are leftover template text from the site builder, and Google may show them under your name. Your page itself says you are “focused exclusively on criminal defense”. Every page title is also just “ROBBIE BARKER, ATTORNEY AT LAW” plus the page name, with no mention of Conroe or criminal defense, and there is no structured data (the behind-the-scenes labels that tell Google and AI assistants your address, phone and practice). Your new site has an accurate title and description on every page and full structured data."
    },
    {
      "title": "Resource links that go nowhere",
      "body": "On your Resources page, the Texas Department of Criminal Justice entry links to a blank address, and the site named beside it, jail.state.tx.us, no longer exists. The Montgomery County and Montgomery County Jail entries are colored like links but can’t be clicked. Your new site’s Resources page links straight to the Montgomery County Jail roster, the county site and the Texas Department of Criminal Justice, all checked.",
      "image": {
        "name": "resources-links",
        "width": 1030,
        "height": 365,
        "alt": "The attorneyofconroe.com Resources page with the Texas Department of Criminal Justice, jail.state.tx.us, MCTX.org and jailroster.mctx.org entries highlighted",
        "caption": "Your Resources page today. None of the highlighted entries opens a working page."
      }
    },
    {
      "title": "Your results stop in 2014",
      "body": "Your Case Results page opens with “Check back regularly to stay informed”, but the newest result on it is from 2014. A few typos have also crept in over the years: “Feloney” on that page, “Aggresive defense” on About and “Directons” on How To Find Us. Your new site presents your published results cleanly, with a clear disclaimer, in a format that’s easy to add to."
    },
    {
      "title": "A site builder’s look from a decade ago",
      "body": "The pages use a fixed-width layout on a patterned background, with stock banner photos, and every footer shows the builder’s “Login”, “Logout” and “Edit page” links to visitors. Your new site has a modern, accessible design with a full page for each of your practice areas, a profile that leads with your background as a former prosecutor, and directions to your office by the courthouse."
    }
  ],
  "agreement": {
    "firmLegalName": "Robbie Barker, Attorney at Law",
    "firmAddress": "204 W. Davis, Conroe, TX 77301",
    "domain": "attorneyofconroe.com",
    "clientEmail": "attorneyrobbie@yahoo.com",
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
