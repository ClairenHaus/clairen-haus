/* PROSPECT DATA: the only file to edit for a new prospect.
   Copy this whole folder to /p/<firm>-<6 random chars>/, edit the values below,
   and replace the three images in img/ (same file names). Values written as
   "[LIKE THIS]" show highlighted on the agreement page as blanks still to fill. */
window.PROSPECT = {
  "firmName": "Law Offices of Matthew D. Borrelli",
  "attn": "Matthew D. Borrelli",
  "firstName": "Matthew",
  "city": "Needham, MA",
  "currentDomain": "borrellilegal.com",
  "currentUrl": "http://borrellilegal.com/",
  "previewUrl": "https://clairenhaus.com/previews/law-offices-of-matthew-d-borrelli/",
  "checkedDate": "October 14, 2026",
  "images": {
    "beforeAfterDesktop": "before-after-desktop",
    "beforeAfterPhone": "before-after-phone",
    "beforeAfterAlt": "Side by side: borrellilegal.com today, and the new Law Offices of Matthew D. Borrelli site"
  },
  "findings": [
    {
      "title": "Your home page still advertises a 2006 seminar",
      "body": "The “Recent Developments” box on your home page invites visitors to enroll in a free homebuyers seminar. The page it opens says “In 2006 we will be conducting a free homebuyers seminar” and asks people to fill out a sign-up form. It also lists 617-557-9300 for questions, while every other page gives 781-444-8060. A visitor can’t tell whether the seminar, or that number, is still current. Your new site shows only current information and one phone number everywhere.",
      "image": {
        "name": "seminar",
        "width": 648,
        "height": 602,
        "alt": "The Recent Developments box on the borrellilegal.com home page, and the seminar page that says In 2006 we will be conducting a free homebuyers seminar, with the 617 number highlighted",
        "caption": "Your home page today, and the seminar page its Recent Developments box links to."
      }
    },
    {
      "title": "Hard to read on a phone",
      "body": "The site has no mobile setup, so a phone lays every page out 980 pixels wide and shrinks it to about 40% of its size. Body text shows at roughly 6 pixels on an iPhone, and the address and phone number in the footer at about 4. Visitors have to pinch and zoom to read anything, and your number can’t be tapped to call on any page. Your new site is built for phones first, with a tap-to-call button at the top of every page."
    },
    {
      "title": "Keyword stuffing in your page titles",
      "body": "Your page titles, which show in browser tabs and often as the headline of your Google listing, are lists of search terms: “Massachusetts lawyer wills, real estate, estate planning, criminal law, lawyers, litigation, MA attorneys, Needham, attorney”. On the home page the list ends with “Prempro”, a prescription drug name that appears six times in that page’s code, though no page on your site is about it. Packing pages with keyword lists like this is called keyword stuffing. Google’s spam policies name keyword stuffing directly and say it can make a page rank lower or drop out of results altogether. Your new site gives every page one clear, unique title and description that match what the page actually says.",
      "image": {
        "name": "keyword-stuffing",
        "width": 980,
        "height": 381,
        "alt": "The title and keyword tags behind the borrellilegal.com home page, with each mention of Prempro highlighted",
        "caption": "The code behind your home page today. Each “Prempro” is highlighted."
      }
    },
    {
      "title": "Your home page is almost all pictures",
      "body": "Apart from the footer, every heading, practice area and link on your home page is an image of text. The whole page has about 200 characters of real text, so Google and screen readers find almost nothing there about real estate, estate planning or criminal defense, and the menus are an image map that can’t be read aloud. Your new site’s home page is real text, with each practice area described and linked to its own page."
    },
    {
      "title": "Your will FAQ cites repealed sections",
      "body": "Your Estate Planning page explains how a will must be signed and witnessed and cites G.L. c. 191, §§ 1 and 5. Those sections were repealed when the Massachusetts Uniform Probate Code took effect, and the rule now sits in G.L. c. 190B, § 2-502. You know this better than any website, and the plain-English rule on your page still reads right; we mention it only because a reader who looks up the citation lands on a repealed section. Your new site explains the rule in plain words and keeps your own FAQ answers.",
      "image": {
        "name": "will-statute",
        "width": 700,
        "height": 300,
        "alt": "The handwritten-will answer on borrellilegal.com with the citations G.L. c. 191, § 1 and c. 191, § 5 highlighted",
        "caption": "Your Estate Planning page today."
      }
    },
    {
      "title": "Hard to reach by email, and not secure",
      "body": "Your Contact page has a form but no email address. The only visible routes to email are a “contact us” link on the condominium page and a “Closing Form” link in the footer that opens an email rather than a form. The site also has no secure (https) version at all, so browsers label it “Not secure” and the contact form sends names, phone numbers and email addresses unencrypted. Your new site lists your phone, fax, email and closing-documents address on the Contact page and in every footer, and is served securely."
    },
    {
      "title": "Small details that date the site",
      "body": "The footer reads “Copyright © 2003-2006”. The Route 128 directions send drivers to exits 19A and 19B, but Massachusetts renumbered its highway exits in 2021 and the Highland Avenue ramps are now Exit 35. The Condominium Conversions heading is spelled “Cond0minium”, with a zero. Your new site has current directions, a clean condominium page that keeps your four-step explanation, and a layout that won’t look dated next to other Needham firms."
    }
  ],
  "agreement": {
    "firmLegalName": "Law Offices of Matthew D. Borrelli",
    "firmAddress": "105 Chestnut Street, Suite 28, Needham, MA 02492",
    "domain": "borrellilegal.com",
    "clientEmail": "re@borrellilegal.com",
    "pageLimit": "12",
    "paymentMethod": "card or bank payment through Stripe",
    "hourlyRate": "$125 per hour",
    "pauseDays": "30",
    "handoverDays": "14",
    "liabilityMonths": "3",
    "governingState": "Georgia",
    "clairenTitle": "Founder"
  }
};
