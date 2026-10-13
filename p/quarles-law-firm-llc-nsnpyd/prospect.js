/* PROSPECT DATA: the only file to edit for a new prospect.
   Copy this whole folder to /p/<firm>-<6 random chars>/, edit the values below,
   and replace the three images in img/ (same file names). Values written as
   "[LIKE THIS]" show highlighted on the agreement page as blanks still to fill. */
window.PROSPECT = {
  "firmName": "Quarles Law Firm, LLC",
  "attn": "Randy Quarles",
  "firstName": "Randy",
  "city": "Mountain Brook, AL",
  "currentDomain": "quarleslawfirm.com",
  "currentUrl": "https://quarleslawfirm.com/",
  "previewUrl": "https://clairenhaus.com/previews/quarles-law-firm-llc/",
  "checkedDate": "October 13, 2026",
  "images": {
    "beforeAfterDesktop": "before-after-desktop",
    "beforeAfterPhone": "before-after-phone",
    "beforeAfterAlt": "Side by side: quarleslawfirm.com today, and the new Quarles Law Firm, LLC site"
  },
  "findings": [
    {
      "title": "Hard to read on a phone",
      "body": "The site has no mobile setup, so a phone shows the full 980-pixel-wide desktop page shrunk to fit the screen. On an iPhone that makes your bios, your family law FAQs and your phone number about 40% of their normal size, and visitors have to pinch and zoom to read them. Your new site is built for phones first and reflows to any screen.",
      "image": {
        "name": "phone-text",
        "width": 980,
        "height": 552,
        "alt": "Randy Quarles's bio on quarleslawfirm.com on a phone, beside the same bio on the new site",
        "caption": "Randy's bio on the same phone, at the same scale: today on the left, your new site on the right."
      }
    },
    {
      "title": "Your phone number and emails can’t be tapped",
      "body": "(205) 874-7000 and both attorney email addresses appear as plain text on every page, so a visitor on a phone has to copy them or type them in. The Contact page even mentions “the above address link”, but there is no link. On your new site every number and email opens the phone or mail app with one tap."
    },
    {
      "title": "Your sitemap points search engines to another address",
      "body": "The sitemap and crawl instructions on quarleslawfirm.com (sitemap.xml and robots.txt) list every page under your web host’s internal address, 000ec9f.rcomhost.com, instead of quarleslawfirm.com. Search engines are being handed a map of a different website. Your new site launches with a sitemap that lists your own pages at your own address."
    },
    {
      "title": "Page titles read like keyword lists",
      "body": "Each page’s title is a string of keywords such as “Civil Litigation, Divorce, Family Law, Birmingham, Alabama”, and none of the eight pages has a description, so Google writes its own. The Contact page title also misspells Alabama as “Alablama”. On your new site every page has its own clear title and description naming the firm, the topic and Mountain Brook."
    },
    {
      "title": "Nothing tells Google or AI who you are",
      "body": "There is no structured data, the behind-the-scenes labels that tell search engines and AI assistants your address, phone, attorneys and practice areas. Your excellent family law FAQs, more than twenty answers, are not marked up as questions and answers, so AI tools have nothing labeled to quote. Your new site carries all of it on every page, with the FAQ answers drawn only from your own site."
    },
    {
      "title": "Business clients have no page to land on",
      "body": "Your business and commercial work (banking and finance, business formation, contracts, creditor rights, insurance coverage and real estate disputes) appears only as a short list on the About page. Someone searching for a lender liability or contract lawyer in Birmingham finds nothing that speaks to them. Your new site gives each of your fourteen practice areas its own page."
    },
    {
      "title": "Signs the site isn’t being kept up",
      "body": "The footer reads © 2016-2024, the newest blog post is from June 2017, and the Martindale-Hubbell badges on both bios say 2016. A background image the pages ask for is missing on every page, and the plain http:// address still opens without switching to the secure https:// version. Your new site is current, secure and easy to keep up to date."
    }
  ],
  "agreement": {
    "firmLegalName": "Quarles Law Firm, LLC",
    "firmAddress": "300 Office Park Drive, Suite 100, Mountain Brook, AL 35223",
    "domain": "quarleslawfirm.com",
    "clientEmail": "rquarles@quarleslawfirm.com",
    "pageLimit": "23",
    "paymentMethod": "card or bank payment through Stripe",
    "hourlyRate": "$125 per hour",
    "pauseDays": "30",
    "handoverDays": "14",
    "liabilityMonths": "3",
    "governingState": "Georgia",
    "clairenTitle": "Founder"
  }
};
