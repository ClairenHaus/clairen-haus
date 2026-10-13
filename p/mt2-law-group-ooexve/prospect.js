/* PROSPECT DATA: the only file to edit for a new prospect.
   Copy this whole folder to /p/<firm>-<6 random chars>/, edit the values below,
   and replace the three images in img/ (same file names). Values written as
   "[LIKE THIS]" show highlighted on the agreement page as blanks still to fill. */
window.PROSPECT = {
  "firmName": "Andy Tindel, Attorney & Counselor at Law, P.C.",
  "attn": "Andy Tindel",
  "firstName": "Andy",
  "city": "Tyler, TX",
  "currentDomain": "andytindel.com",
  "currentUrl": "https://andytindel.com/",
  "previewUrl": "https://clairenhaus.com/previews/mt2-law-group/",
  "checkedDate": "October 13, 2026",
  "images": {
    "beforeAfterDesktop": "before-after-desktop",
    "beforeAfterPhone": "before-after-phone",
    "beforeAfterAlt": "Side by side: andytindel.com today, and the new Andy Tindel, Attorney & Counselor at Law, P.C. site"
  },
  "findings": [
    {
      "title": "Hard to read on a phone",
      "body": "The site has no mobile setup, so a phone shows the full 1,000-pixel-wide desktop page shrunk to fit the screen. On an iPhone your profile, practice areas and news come out at well under half their normal size, and visitors have to pinch and zoom to read them. Your new site is built for phones first and reflows to any screen.",
      "image": {
        "name": "phone-text",
        "width": 1000,
        "height": 666,
        "alt": "Andy Tindel's profile page on andytindel.com on a phone, beside the new profile page on the same phone",
        "caption": "Your profile page on the same phone: today on the left, your new site on the right."
      }
    },
    {
      "title": "The news stops in 2022, but the footer says 2026",
      "body": "The newest item in Legal News is the VLSI v. Intel verdict from November 15, 2022. The copyright line in the footer is filled in automatically with the current year, so it reads “© 2026” above news that is nearly three years old. That mismatch makes the site look unattended, which undersells a practice that is clearly active. Your new site has a News page laid out by year that is easy to add to."
    },
    {
      "title": "Your visitor statistics stopped in 2023",
      "body": "The site still runs the old Universal Analytics tracking code (UA-34745944-1). Google stopped processing data from Universal Analytics on July 1, 2023, so any visits since then have not been counted. Your new site is ready for current analytics from launch."
    },
    {
      "title": "Your phone number can’t be tapped",
      "body": "903-596-0900 appears at the top and bottom of every page as plain text, and the toll-free number too, so someone on a phone has to remember it or type it in. On your new site the number is a one-tap call button on every page, along with your email and one-tap directions to East Line Street."
    },
    {
      "title": "Eight practice areas, one bullet list",
      "body": "Areas of Practice is a single list of eight lines, from patent infringement trials to False Claims Act and personal injury cases, with no page explaining any of them. Someone searching for help with a qui tam case or an insurance dispute finds nothing that speaks to their situation. Your new site gives each area its own page, and links your Appellate and Mediation pages straight from the list."
    },
    {
      "title": "Nothing tells Google or AI who you are",
      "body": "Every page carries the same title, “Andy Tindel - Attorney at Law - Tyler, Texas”, and none has a description or structured data, the behind-the-scenes labels that tell search engines and AI assistants your address, phone, credentials and practice areas. Your new site gives each page its own title and description, and carries that information on every page, plus an FAQ written only from facts on your own site."
    },
    {
      "title": "Built on 2008–2010 technology",
      "body": "The pages are a Dreamweaver template that loads the jQuery code library three times, including versions from 2008 and 2010, and draws headings with Cufón, a 2009 font script. Old code like this is slower, harder to keep up and increasingly likely to break in new browsers. Your new site is clean, fast, current code."
    }
  ],
  "agreement": {
    "firmLegalName": "Andy Tindel, Attorney & Counselor at Law, P.C.",
    "firmAddress": "112 East Line Street, Suite 304, Tyler, TX 75702",
    "domain": "andytindel.com",
    "clientEmail": "atindel@andytindel.com",
    "pageLimit": "18",
    "paymentMethod": "card or bank payment through Stripe",
    "hourlyRate": "$125 per hour",
    "pauseDays": "30",
    "handoverDays": "14",
    "liabilityMonths": "3",
    "governingState": "Georgia",
    "clairenTitle": "Founder"
  }
};
