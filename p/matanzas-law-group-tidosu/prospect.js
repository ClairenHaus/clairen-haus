/* PROSPECT DATA: the only file to edit for a new prospect.
   Copy this whole folder to /p/<firm>-<6 random chars>/, edit the values below,
   and replace the three images in img/ (same file names). Values written as
   "[LIKE THIS]" show highlighted on the agreement page as blanks still to fill. */
window.PROSPECT = {
  "firmName": "Matanzas Law Firm, P.A.",
  "attn": "Tance E. Roberts",
  "firstName": "Tance",
  "city": "St. Augustine, FL",
  "currentDomain": "matanzaslaw.net",
  "currentUrl": "https://matanzaslaw.net/",
  "previewUrl": "https://clairenhaus.com/previews/matanzas-law-group/",
  "checkedDate": "October 14, 2026",
  "images": {
    "beforeAfterDesktop": "before-after-desktop",
    "beforeAfterPhone": "before-after-phone",
    "beforeAfterAlt": "Side by side: matanzaslaw.net today, and the new Matanzas Law Firm, P.A. site"
  },
  "findings": [
    {
      "title": "The map on your Contact page is blank",
      "body": "The \u201cOur Location\u201d map on your Contact page loads as an empty white box with a pin and no streets. The map service your site builder uses now refuses the site\u2019s map key (it answers with an \u201cunauthorized\u201d error), so visitors looking for 200 Malaga Street get no map at all. Your new site gives the address, phone and email as one-tap links, with direct Google Maps and Apple Maps buttons for directions.",
      "image": {
        "name": "map-blank",
        "width": 1279,
        "height": 704,
        "alt": "The blank map on the matanzaslaw.net Contact page, beside the office details on the new site",
        "caption": "Your Contact page today (left) and the new contact page on a phone (right)."
      }
    },
    {
      "title": "Your email link goes to a different address than the one shown",
      "body": "The Contact page displays info@matanzas.law, but tapping it opens a message addressed to troberts@matanzaslaw.net instead. If that is intentional, no harm done; if not, people writing to the firm may be reaching a different inbox than they expect. On your new site the address people see is the address their message goes to."
    },
    {
      "title": "On a phone, the first screen is mostly empty",
      "body": "Phones are sent to a separate mobile copy of the site. Its home page opens on a large blank blue area before any text appears, and pinch-to-zoom is switched off, so visitors can\u2019t enlarge small text. The Palatka and Bunnell numbers are plain text that can\u2019t be tapped. Your new site is one responsive site, built for phones first, with every number tappable and a call button always in reach."
    },
    {
      "title": "Search results call you \u201cMatanzas Law Group\u201d",
      "body": "Your logo, footer and page text say Matanzas Law Firm, P.A., but every page title, the text Google shows in results and the share preview all say \u201cMatanzas Law Group\u201d. The Attorneys page is titled \u201cMatanzas Law Group - Online\u201d. Your new site uses your firm\u2019s name consistently, with a clear title and description for every page."
    },
    {
      "title": "Nothing tells Google or AI who you are",
      "body": "There is no structured data, the behind-the-scenes labels that tell search engines and AI assistants your address, phone, attorney, credentials and practice areas, and no FAQ content for them to draw answers from. Your new site carries all of it on every page, including your board certification, plus thirteen FAQs written only from facts on your own site."
    },
    {
      "title": "Your practice areas have no pages of their own",
      "body": "Ten practice areas, from Federal & State Tax Law to Mediation, appear only as a list of names, and none links to a page that explains it. Someone searching for help with probate or Medicaid planning in St. Augustine has nothing on your site to land on. Your new site gives each area its own page, plus a page on preparing for your first meeting."
    },
    {
      "title": "The site is built on a retired platform",
      "body": "The site runs on a 2019 version of a website builder that has since been replaced. Its sitemap was last updated in April 2019 and still lists the old http:// addresses, and its crawl instructions tell search engines to skip the mobile copy entirely. Your new site launches with a current sitemap and a single version of every page."
    }
  ],
  "agreement": {
    "firmLegalName": "Matanzas Law Firm, P.A.",
    "firmAddress": "200 Malaga Street, Suite 9, St. Augustine, FL 32084",
    "domain": "matanzaslaw.net",
    "clientEmail": "info@matanzas.law",
    "pageLimit": "16",
    "paymentMethod": "card or bank payment through Stripe",
    "hourlyRate": "$125 per hour",
    "pauseDays": "30",
    "handoverDays": "14",
    "liabilityMonths": "3",
    "governingState": "Georgia",
    "clairenTitle": "Founder"
  }
};
