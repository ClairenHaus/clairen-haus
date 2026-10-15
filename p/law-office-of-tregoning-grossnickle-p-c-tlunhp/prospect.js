/* PROSPECT DATA: the only file to edit for a new prospect.
   Copy this whole folder to /p/<firm>-<6 random chars>/, edit the values below,
   and replace the three images in img/ (same file names). Values written as
   "[LIKE THIS]" show highlighted on the agreement page as blanks still to fill. */
window.PROSPECT = {
  "firmName": "Law Office of Tregoning & Grossnickle, P.C.",
  "attn": "Jacquelyn M. Grossnickle and Daniel K. Tregoning",
  "firstName": "",
  "city": "Frederick, MD",
  "currentDomain": "tregoninglaw.com",
  "currentUrl": "http://www.tregoninglaw.com/",
  "previewUrl": "https://clairenhaus.com/previews/law-office-of-tregoning-grossnickle-p-c/",
  "checkedDate": "October 14, 2026",
  "images": {
    "beforeAfterDesktop": "before-after-desktop",
    "beforeAfterPhone": "before-after-phone",
    "beforeAfterAlt": "Side by side: tregoninglaw.com today, and the new Law Office of Tregoning & Grossnickle, P.C. site"
  },
  "findings": [
    {
      "title": "Hard to read on a phone",
      "body": "The site has no mobile setup, so a phone lays every page out 980 pixels wide and shrinks it to about 40% of its size. The biographies, set at 16 pixels, show at about 6 pixels on an iPhone, and the disclaimer at the bottom of each page at about 4. Visitors have to pinch and zoom to read about your practice or find your address. Your new site is built for phones first and reflows to any screen.",
      "image": {
        "name": "phone-text",
        "width": 980,
        "height": 500,
        "alt": "Jacquelyn M. Grossnickle’s biography on tregoninglaw.com on a phone, beside the same biography on the new site",
        "caption": "The same biography on the same phone: today on the left, your new site on the right."
      }
    },
    {
      "title": "No secure version of the site",
      "body": "tregoninglaw.com only loads over plain http. The secure address, https://www.tregoninglaw.com, refuses the connection, so Chrome and Safari label every page “Not secure”. Your Contact page asks visitors for their name, email address and message on that unsecured page, which is exactly where people hesitate. Your new site runs only on a secure https connection."
    },
    {
      "title": "Your browser tabs still say “Law Office of Daniel K. Tregoning, P.C.”",
      "body": "Five of your seven pages, including Practice Areas, Attorneys and Jacquelyn’s own biography, carry the title “LAW OFFICE OF DANIEL K. TREGONING, P.C.” in the browser tab and in Google results, while the pages themselves say Tregoning & Grossnickle. Your Home and Contact pages have no title at all, so the tab shows only the web address. No page has a search description or structured data (the behind-the-scenes labels that tell Google and AI assistants your address, phone and practice areas). Your new site gives every page its own accurate title and description, under the current firm name, with full structured data."
    },
    {
      "title": "Your number and emails can’t be tapped",
      "body": "301-668-5310 appears at the top of every page as plain text, so a visitor on a phone has to copy it or type it in. The two attorney email addresses, dkt@tregoninglaw.com and jmg@tregoninglaw.com, are plain text on the biography pages, and neither appears on the Home or Contact page. On your new site the number is a tap-to-call button on every page, and both emails open the mail app with one tap."
    },
    {
      "title": "Your home page says very little",
      "body": "Visitors arriving at tregoninglaw.com see one short welcome paragraph and a stock photo. Your attorneys, your practice areas and the parking notes on your Directions page are all a click or two away, and nothing on the page invites a call. Your new home page introduces both attorneys, lays out each practice area, and puts your phone, email and parking information right up front."
    },
    {
      "title": "A dated site-builder look",
      "body": "The pages use a narrow, fixed-width table layout centered on a large empty background, on a Network Solutions site-builder template whose code is marked 2010, with “Web Hosting powered by Network Solutions®” in every footer. Your new site has a modern, accessible design with a page for each part of your practice, full profiles for Danny and Jacquelyn, and your Steiner Way parking notes on the Contact page."
    }
  ],
  "agreement": {
    "firmLegalName": "Law Office of Tregoning & Grossnickle, P.C.",
    "firmAddress": "352 West Patrick Street, Frederick, MD 21701",
    "domain": "tregoninglaw.com",
    "clientEmail": "jmg@tregoninglaw.com",
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
