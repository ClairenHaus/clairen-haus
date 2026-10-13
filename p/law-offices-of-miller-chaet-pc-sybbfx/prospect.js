/* PROSPECT DATA: the only file to edit for a new prospect.
   Copy this whole folder to /p/<firm>-<6 random chars>/, edit the values below,
   and replace the three images in img/ (same file names). Values written as
   "[LIKE THIS]" show highlighted on the agreement page as blanks still to fill. */
window.PROSPECT = {
  firmName: "Law Offices of Miller & Chaet, PC",
  attn: "J. Christopher Miller",       // optional; "" hides it
  firstName: "Chris",                  // used on the thank-you page; "" for none
  city: "Alpharetta, GA",
  currentDomain: "northfultonwills.com",
  currentUrl: "https://northfultonwills.com/",
  previewUrl: "https://clairenhaus.com/previews/law-offices-of-miller-chaet-pc/",
  checkedDate: "October 13, 2026",   // day the findings below were last checked; shown on the sales page

  images: {
    beforeAfterDesktop: "before-after-desktop",   // img/<name>.webp + .jpg
    beforeAfterPhone: "before-after-phone",
    beforeAfterAlt: "Side by side: northfultonwills.com today, and the new Law Offices of Miller & Chaet site"
  },

  // What we found on the current site (checked live Oct 13, 2026). First item may carry a screenshot.
  findings: [
    {
      title: "On a phone, links to your inner pages open the homepage instead",
      body: "Every page on the site sends any screen narrower than 800 pixels to a separate mobile homepage. So when someone on a phone taps a link to Chris\u2019s bio, your contact page or your firm history (from Google, an email, or a text from a friend who recommends you), they land on the mobile homepage and have to find the page again. We checked this on four of your pages. On the new site every link opens the page it points to, on any screen.",
      image: { name: "phone-redirect", width: 980, height: 752, alt: "Left: opening Chris Miller's bio link on a phone today lands on the mobile homepage. Right: the same link on the new site opens his bio.", caption: "Left: Chris\u2019s bio link opened on a phone today. Right: the same link on your new site." }
    },
    {
      title: "A team page in the menu leads to \u201cPage Not Found\u201d",
      body: "The \u201cWho We Are\u201d menu on every page lists Terina Kobus, but her page returns \u201c404 Page Not Found.\u201d She isn\u2019t on your Firm History team list or the mobile menu, so the desktop menu likely just needs updating. The new site shows only the people with current bios on your site."
    },
    {
      title: "Your photos are very large files",
      body: "The headshots on the bio pages are 2.5 to 2.8 MB each (three of them are 2,236 pixels square), and the team photo is 2.9 MB, all shown at a fraction of that size. On a phone connection that is slow to load. The new site uses the same photos at under 35 KB each."
    },
    {
      title: "Google\u2019s description still calls you \u201ca new firm\u201d",
      body: "Every page shares the same title and the same description: \u201cThere is a new firm in Alpharetta for quality guidance on Wills, Trusts and Estate Planning.\u201d That is what can show under your name in search results. On the new site each page has its own title and description."
    },
    {
      title: "Nothing tells Google or AI who you are",
      body: "There is no structured data, the behind-the-scenes labels that tell search engines and AI assistants your firm\u2019s name, address, phone, attorneys and practice areas. The new site carries it on every page, including each attorney and your FAQs."
    },
    {
      title: "The main site was built before smartphones",
      body: "The desktop pages have no mobile setup, are laid out with tables, and run a 2008 version of jQuery (1.2.6). On the separate mobile homepage, the practice areas are listed but can\u2019t be tapped. The new site is one site that adapts to every screen."
    }
  ],

  // Agreement fields. Anything still "[IN BRACKETS]" is a blank Michelle fills before sending.
  agreement: {
    firmLegalName: "Law Offices of Miller & Chaet, PC",
    firmAddress: "11800 Amber Park Drive, Suite 130, Alpharetta, GA 30009",
    domain: "northfultonwills.com",
    clientEmail: "admin@northfultonwills.com",
    pageLimit: "16",
    paymentMethod: "card or bank payment through Stripe",
    hourlyRate: "$125 per hour",
    pauseDays: "30",
    handoverDays: "14",
    liabilityMonths: "3",
    governingState: "Georgia",
    clairenTitle: "Founder"
  }
};
