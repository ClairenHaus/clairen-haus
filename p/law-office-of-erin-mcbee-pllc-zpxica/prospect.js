/* PROSPECT DATA: the only file to edit for a new prospect.
   Copy this whole folder to /p/<firm>-<6 random chars>/, edit the values below,
   and replace the three images in img/ (same file names). Values written as
   "[LIKE THIS]" show highlighted on the agreement page as blanks still to fill. */
window.PROSPECT = {
  "firmName": "Law Office of Erin McBee, PLLC",
  "attn": "Erin McBee",
  "firstName": "Erin",
  "city": "Harvard, MA",
  "currentDomain": "lawofficeoferinmcbee.com",
  "currentUrl": "https://lawofficeoferinmcbee.com/",
  "previewUrl": "https://clairenhaus.com/previews/law-office-of-erin-mcbee-pllc/",
  "checkedDate": "October 14, 2026",
  "images": {
    "beforeAfterDesktop": "before-after-desktop",
    "beforeAfterPhone": "before-after-phone",
    "beforeAfterAlt": "Side by side: lawofficeoferinmcbee.com today, and the new Law Office of Erin McBee, PLLC site"
  },
  "findings": [
    {
      "title": "Three of your seven menu links lead to “Not Found”",
      "body": "The menu on every page of your site lists seven pages. Three of them, Estate Planning Components, Helpful Links & Resources, and MA Medicaid & Estate Tax Figures & Rates, open a plain “404 Not Found” server page, so a visitor looking for your estate planning overview, your recommended links or the Medicaid figures hits a dead end. Your sitemap still asks Google to visit all three. Your new site has a real page behind every menu item, including a full Estate Planning page and a Helpful Links page with every link checked.",
      "image": {
        "name": "dead-links",
        "width": 1200,
        "height": 598,
        "alt": "The lawofficeoferinmcbee.com menu beside the 404 Not Found page that three of its links open",
        "caption": "The menu on every page, and where three of its links go."
      }
    },
    {
      "title": "Hard to read on a phone",
      "body": "The site has no mobile setup, so a phone lays every page out 980 pixels wide and shrinks it to about 40% of its size. Your welcome text shows about 7 pixels tall on an iPhone, and your bio on the About page about 4. Visitors have to pinch and zoom to read anything or to use the menu. Your new site is built for phones first, with a Call and Email bar always at the bottom of the screen.",
      "image": {
        "name": "phone-text",
        "width": 980,
        "height": 896,
        "alt": "The lawofficeoferinmcbee.com About page on an iPhone, beside Erin’s bio on the new site",
        "caption": "The same phone: your About page today on the left, the new bio page on the right."
      }
    },
    {
      "title": "Your phone number can’t be tapped",
      "body": "(978) 391-1600 is on every page, but always as plain text, so someone on a phone can’t tap it to call you. They have to memorize it or copy it by hand. On your new site the number is a tap-to-call button at the top of every page, and your email is a tap-to-send link."
    },
    {
      "title": "Your home page still lists a 2019 seminar as “upcoming”",
      "body": "Under “Upcoming Seminars”, your home page still announces the September 26, 2019 “Take Control of Your Future” panel at Rivercourt Residences, just below a “Past Fundraisers” heading with nothing under it. It quietly tells visitors the site hasn’t been looked at in years. Your new site keeps your seminar history as a proper Past Seminars list, and invites groups to book you for the next one.",
      "image": {
        "name": "seminar-2019",
        "width": 750,
        "height": 450,
        "alt": "The Upcoming Seminars box on the lawofficeoferinmcbee.com home page, showing Sept. 26, 2019, highlighted",
        "caption": "Your home page today."
      }
    },
    {
      "title": "Links that no longer go anywhere",
      "body": "The newest post on your blog is from December 2016 (“Tax Changes are Coming in 2017”), and the blog’s own About and My Office links open “not found”. Your About page still links to Google+, which Google shut down in 2019, and to your law school memo, which now returns “not found”. On your Services page, the AARP and Caregiver.org end-of-life links are dead, and the geriatric care managers’ association has since been renamed. Your new site has one Resources page with every link checked and named as it is today."
    },
    {
      "title": "Search engines get mixed signals",
      "body": "The description Google may show under your name is a list of 19 search terms (“Lawyer, attorney, Erin McBee, business formation, long term care, living will…”), and every page ends with a block of 24 town names. Google’s spam policies name keyword stuffing, including blocks of text listing the cities a page is trying to rank for, and say it can make a page rank lower or drop out of results. The site also gives search engines no structured data (the behind-the-scenes labels for your address, phone, practice areas and service area), and still tells browsers to behave like Internet Explorer 7. Your new site has a clear title and description on every page, structured data naming your towns and both of your states, and the towns you serve written naturally on the Contact page."
    }
  ],
  "agreement": {
    "firmLegalName": "Law Office of Erin McBee, PLLC",
    "firmAddress": "206 Ayer Road, Suite 6, Harvard, MA 01451",
    "domain": "lawofficeoferinmcbee.com",
    "clientEmail": "erin@lawofficeoferinmcbee.com",
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
