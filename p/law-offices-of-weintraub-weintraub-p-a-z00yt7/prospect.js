/* PROSPECT DATA: the only file to edit for a new prospect.
   Copy this whole folder to /p/<firm>-<6 random chars>/, edit the values below,
   and replace the three images in img/ (same file names). Values written as
   "[LIKE THIS]" show highlighted on the agreement page as blanks still to fill. */
window.PROSPECT = {
  firmName: "Weintraub & Weintraub",
  attn: "Peter B. Weintraub",          // optional; "" hides it
  firstName: "Peter",                  // used on the thank-you page; "" for none
  city: "Boca Raton, FL",
  currentDomain: "weintraublawfirm.com",
  currentUrl: "http://weintraublawfirm.com",
  previewUrl: "https://clairenhaus.com/previews/law-offices-of-weintraub-weintraub-p-a/",
  checkedDate: "October 13, 2026",   // day the findings below were last checked; shown on the sales page

  images: {
    beforeAfterDesktop: "before-after-desktop",   // img/<name>.webp + .jpg
    beforeAfterPhone: "before-after-phone",
    beforeAfterAlt: "Side by side: weintraublawfirm.com today, and the new Weintraub & Weintraub site"
  },

  // What we found on the current site (checked live Oct 13, 2026). First item may carry a screenshot.
  findings: [
    {
      title: "Your bios are one click deeper than most visitors go",
      body: "Your Attorneys page shows two names and nothing else. Peter’s admissions to the Southern District of Florida, the Bankruptcy Court and the Eleventh Circuit, and Toni’s background, sit on separate pages with addresses like jsp3346735.php, which tell visitors, Google and AI assistants nothing about who you are. Your new site gives each of you a full profile page.",
      image: { name: "attorneys-page", width: 980, height: 425, alt: "The Attorneys page on weintraublawfirm.com, showing only the two attorneys’ names", caption: "Your Attorneys page today: two names, no credentials." }
    },
    {
      title: "Browsers mark the site “Not secure”",
      body: "The site only works on http://, so Chrome labels it “Not secure” in the address bar. The https:// version uses a certificate the firm issued to itself, which expired on July 30, 2019, so anyone who reaches it gets a full-page security warning instead of your site."
    },
    {
      title: "No phone layout",
      body: "The site has no mobile setup, so phones show the full desktop page shrunk down. Visitors have to pinch and zoom to read anything, and your phone number is plain text, so it can’t be tapped to call."
    },
    {
      title: "Eleven practice areas, one sentence",
      body: "The Firm Profile page lists real estate, commercial litigation, bankruptcy, construction law and seven other areas in a single line, and no page explains any of them. Your new site has a page for each area, so people searching for that kind of help can find you."
    },
    {
      title: "Nothing tells Google or AI who you are",
      body: "There is no structured data and no sitemap. The page description Google reads says “BOCA RATON, FL, Florida lawyers focusing on, Bankruptcy, Business Law, Commercial Law”, which leaves out real estate and commercial litigation, the core of your practice."
    },
    {
      title: "The newsletter articles date from 2009",
      body: "Each Real Estate Newsletter article ends “Copyright 2009 LexisNexis” and is written for “most states” rather than Florida. They can carry over at launch, and fresh Florida-specific articles can be added whenever you like."
    }
  ],

  // Agreement fields. Anything still "[IN BRACKETS]" is a blank Michelle fills before sending.
  agreement: {
    firmLegalName: "Law Offices of Weintraub & Weintraub, P.A.",
    firmAddress: "7700 Congress Ave., Suite 1110, Boca Raton, FL 33487",
    domain: "weintraublawfirm.com",
    clientEmail: "PBW@weintraublawfirm.com",
    pageLimit: "18",
    paymentMethod: "card or bank payment through Stripe",
    hourlyRate: "$125 per hour",
    pauseDays: "30",
    handoverDays: "14",
    liabilityMonths: "3",
    governingState: "Georgia",
    clairenTitle: "Founder"
  }
};
