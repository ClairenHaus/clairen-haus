/* PROSPECT DATA: the only file to edit for a new prospect.
   Copy this whole folder to /p/<firm>-<6 random chars>/, edit the values below,
   and replace the three images in img/ (same file names). Values written as
   "[LIKE THIS]" show highlighted on the agreement page as blanks still to fill. */
window.PROSPECT = {
  "firmName": "The Law Offices of G. Randall Avery, Esq.",
  "attn": "G. Randall Avery",
  "firstName": "Randall",
  "city": "Darien, CT",
  "currentDomain": "randallaveryesq.com",
  "currentUrl": "https://www.randallaveryesq.com/",
  "previewUrl": "https://clairenhaus.com/previews/the-law-offices-of-g-randall-avery-esq/",
  "checkedDate": "October 14, 2026",
  "images": {
    "beforeAfterDesktop": "before-after-desktop",
    "beforeAfterPhone": "before-after-phone",
    "beforeAfterAlt": "Side by side: randallaveryesq.com today, and the new site for The Law Offices of G. Randall Avery, Esq."
  },
  "findings": [
    {
      "title": "Your Contact page lists your fax as “1-2-3-202-2209”",
      "body": "Your homepage gives the fax number correctly, as 1-203-202-2209, but the Contact page reads “1-2-3-202-2209 Facsimile”. On a phone your site turns that line into a tappable link, so anyone who taps it is sent to dial 1-2-3-202-2209. On your new site the phone, fax, email and address are listed once, correctly, on every page, and the phone number and email open with one tap.",
      "image": {
        "name": "fax-number",
        "width": 980,
        "height": 608,
        "alt": "The Contact page of randallaveryesq.com on a phone, showing the fax as 1-2-3-202-2209, beside the new Contact page showing (203) 202-2209",
        "caption": "Your Contact page on a phone today (left), and on your new site (right)."
      }
    },
    {
      "title": "The “Follow us” icons open the website builder’s pages, not yours",
      "body": "Every page ends with “FOLLOW US:” and Facebook and Twitter icons. Both still point to the template’s placeholders, facebook.com/wix and twitter.com/wix, the website builder’s own accounts, so a visitor who taps them leaves your site for a software company. Your new site has no placeholder links, and can link your firm’s own Facebook page if you’d like."
    },
    {
      "title": "The site still shows its 2012 template",
      "body": "The footer of every page reads “© 2012 by Lawyer & Lawyer.”, the template’s sample credit rather than your firm’s name. The Firm page describes you as a “thirty-three year resident” of Rowayton, a figure that never changes as the years pass. Your new site is written around dates that stay true: practicing since 1978, in Darien since 2009."
    },
    {
      "title": "Google and AI assistants get very little to go on",
      "body": "Your inner pages are titled “FIRM | randallaveryesq”, “ATTORNEYS | randallaveryesq” and “CONTACT | randallaveryesq”, without your name or Darien, and only the homepage has a search description. The only structured data (the behind-the-scenes labels search engines and AI assistants read) is the site name “randallaveryesq”, and the homepage photos are labelled “001.JPG”. Your new site gives every page a clear title and description, and labels your address, phone, practice areas, education and appellate cases, with an FAQ answered from your own information."
    },
    {
      "title": "Your Attorneys page lists only your education",
      "body": "The Attorneys page shows your three schools and nothing else. Your experience since 1978, the courts you have appeared in, your appeals and your years of service in Rowayton and Norwalk are spread across other pages, or missing. DiNuzzo and Reid v. Landsberger appear only as one-line notes on the homepage. Your new site has a full profile page, a page for each of your seven practice areas, and a Cases page linking to the published decisions."
    }
  ],
  "agreement": {
    "firmLegalName": "The Law Offices of G. Randall Avery, Esq.",
    "firmAddress": "30 Old Kings Highway South, Darien, CT 06820",
    "domain": "randallaveryesq.com",
    "clientEmail": "graveryesq@gmail.com",
    "pageLimit": "14",
    "paymentMethod": "card or bank payment through Stripe",
    "hourlyRate": "$125 per hour",
    "pauseDays": "30",
    "handoverDays": "14",
    "liabilityMonths": "3",
    "governingState": "Georgia",
    "clairenTitle": "Founder"
  }
};
