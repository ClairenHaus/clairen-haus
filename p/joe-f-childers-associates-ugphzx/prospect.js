/* PROSPECT DATA: the only file to edit for a new prospect.
   Copy this whole folder to /p/<firm>-<6 random chars>/, edit the values below,
   and replace the three images in img/ (same file names). Values written as
   "[LIKE THIS]" show highlighted on the agreement page as blanks still to fill. */
window.PROSPECT = {
  firmName: "Joe F. Childers & Associates",
  attn: "Joe F. Childers",            // optional; "" hides it
  firstName: "Joe",                    // used on the thank-you page; "" for none
  city: "Lexington, KY",
  currentDomain: "jchilderslaw.com",
  currentUrl: "https://jchilderslaw.com/",
  previewUrl: "https://clairenhaus.com/previews/joe-f-childers-associates/",
  checkedDate: "October 14, 2026",   // day the findings below were last checked; shown on the sales page

  images: {
    beforeAfterDesktop: "before-after-desktop",   // img/<name>.webp + .jpg
    beforeAfterPhone: "before-after-phone",
    beforeAfterAlt: "Side by side: what visitors to jchilderslaw.com see today (an unrelated gambling site, blurred), and the new Joe F. Childers & Associates site"
  },

  // What we found on the current site (checked live Oct 14, 2026). First item may carry a screenshot.
  findings: [
    {
      title: "Every page now sends visitors to an unrelated gambling site",
      body: "Each page of jchilderslaw.com, including Attorneys, About Us and Contact, still carries an instruction that forwards visitors to childersbaxterlaw.com, the firm\u2019s former address. That address changed hands this summer and now forwards to an unrelated gambling site, so anyone who types in your address or follows an old link lands there in an instant and never sees your practice. Directory listings such as Super Lawyers still point to childersbaxterlaw.com too. You still own jchilderslaw.com, so this is fixable right away, and your new site launches there with nothing pointing anywhere else.",
      image: { name: "redirect-path", width: 980, height: 415, alt: "The Attorneys page that still exists on jchilderslaw.com, beside the unrelated gambling site visitors are forwarded to (blurred)", caption: "Your Attorneys page is still on jchilderslaw.com (left), but every visitor is forwarded to an unrelated site (right, blurred)." }
    },
    {
      title: "The email link on your home page goes to the wrong address",
      body: "The email link on the Home and About Us pages, and the second one on the Attorneys page, shows joe@jchilderslaw.com but actually opens a message to joe@childerslaw.com, without the \u201cj\u201d. That domain is set up to accept no email at all, so a message sent from those links never reaches you. On your new site every email and phone link goes straight to joe@jchilderslaw.com and 859.253.9824."
    },
    {
      title: "Your current content went with the old address",
      body: "The practice description you published most recently, covering environmental and land use, property and royalties, employment, civil rights, personal injury, commercial litigation and probate and estate work, lived on childersbaxterlaw.com and is no longer online. The pages left on jchilderslaw.com date from 2012: they still say \u201cover 30 years trial experience\u201d and list an older set of practice areas. Your new site brings your current description and full biography back, page by page."
    },
    {
      title: "Hard to read on a phone",
      body: "The pages on jchilderslaw.com have no mobile setup, so a phone shows the full 1,064-pixel-wide desktop layout shrunk to fit, with text too small to read without pinching and zooming. Your phone number is plain text on every page, with no tap-to-call link. Your new site is built for phones first, with Call and Email buttons always one tap away."
    },
    {
      title: "Nothing tells Google or AI who you are",
      body: "All four pages share the same long title, none has a page description, and there is no structured data, the behind-the-scenes labels that tell search engines and AI assistants your address, phone, attorney and practice areas. The site map was last updated in 2012. Your new site carries all of it on every page, plus a page for each practice area and ten FAQs written only from your own published facts."
    }
  ],

  // Agreement fields. Anything still "[IN BRACKETS]" is a blank Michelle fills before sending.
  agreement: {
    firmLegalName: "Joe F. Childers & Associates",
    firmAddress: "201 West Short Street, Suite 300, Lexington, KY 40507",
    domain: "jchilderslaw.com",
    clientEmail: "joe@jchilderslaw.com",
    pageLimit: "14",
    paymentMethod: "card or bank payment through Stripe",
    hourlyRate: "$125 per hour",
    pauseDays: "30",
    handoverDays: "14",
    liabilityMonths: "3",
    governingState: "Georgia",
    clairenTitle: "Founder"
  }
};
