/* PROSPECT DATA: the only file to edit for a new prospect.
   Copy this whole folder to /p/<firm>-<6 random chars>/, edit the values below,
   and replace the three images in img/ (same file names). Values written as
   "[LIKE THIS]" show highlighted on the agreement page as blanks still to fill. */
window.PROSPECT = {
  "firmName": "Law Offices of Joshua N. Garick, P.C.",
  "attn": "Joshua N. Garick",
  "firstName": "Joshua",
  "city": "Reading, MA",
  "currentDomain": "garicklaw.com",
  "currentUrl": "https://www.garicklaw.com/",
  "previewUrl": "https://clairenhaus.com/previews/law-offices-of-joshua-n-garick-p-c/",
  "checkedDate": "October 14, 2026",
  "images": {
    "beforeAfterDesktop": "before-after-desktop",
    "beforeAfterPhone": "before-after-phone",
    "beforeAfterAlt": "Side by side: garicklaw.com today, and the new site for the Law Offices of Joshua N. Garick, P.C."
  },
  "findings": [
    {
      "title": "Hard to read on a phone",
      "body": "The site has no mobile setup, so a phone shows the full 1,001-pixel-wide desktop page shrunk to fit the screen. On an iPhone that makes everything about 39% of its normal size, and the body text is set at 12 pixels to begin with, so it appears roughly 5 pixels tall and visitors have to pinch and zoom to read about your practice. Your new site is built for phones first and reflows to any screen.",
      "image": {
        "name": "phone-text",
        "width": 980,
        "height": 749,
        "alt": "The Wage Claims page of garicklaw.com on a phone, beside the same page on the new site",
        "caption": "Your Wage Claims page on the same phone: today on the left, your new site on the right. Checked October 14, 2026."
      }
    },
    {
      "title": "Your phone number is part of a picture",
      "body": "The (617) 600-7520 at the top of every page is part of the logo image, and none of the site’s 15 main pages has a tap-to-call link, so a visitor on a phone can’t tap to call and has to type the number in. On your new site the number is a one-tap call button on every page, with a call bar that stays at the bottom of the screen on phones."
    },
    {
      "title": "Template placeholder pages are still live",
      "body": "The site still publishes the sample content that came with its WordPress theme: 38 “Portfolio” pages of Lorem ipsum filler text (“Client: Template Square”) and 5 “Testimonial” pages of the same filler, each titled with the firm’s name. They’re listed in the site’s own sitemap, the file that tells Google which pages to show, so they can turn up in search results next to your real pages. Your new site launches with only your real pages and a clean sitemap.",
      "image": {
        "name": "placeholder-pages",
        "width": 980,
        "height": 593,
        "alt": "A Lorem ipsum placeholder page on garicklaw.com, and the site’s sitemap listing the placeholder Portfolio pages",
        "caption": "One of the 38 placeholder pages (left) and the sitemap that lists them for search engines (right). Checked October 14, 2026."
      }
    },
    {
      "title": "Dates and figures that look out of date",
      "body": "The newest News post is from September 20, 2019, and the footer reads © 2012–2019, which can make visitors wonder whether the practice is current. The Wage Claims page still says the Massachusetts minimum wage is $10.00 an hour; it has been $15.00 since January 2023. Your new site leaves out anything time-sensitive that would go stale."
    },
    {
      "title": "Broken badges and blocked code",
      "body": "The Super Lawyers and Avvo badges on the home page don’t load, because those services now block their images from being shown on other sites, so visitors see an empty box and a line of alt text. Every page also asks for a script over an insecure connection, which browsers block, and http://www.garicklaw.com still loads without switching visitors to the secure https:// version. Your new site loads cleanly and securely."
    },
    {
      "title": "Nothing tells Google or AI who you are",
      "body": "None of the 15 pages has a page description for search results, and none carries structured data, the behind-the-scenes labels that tell search engines and AI assistants your address, phone, practice areas and credentials. Your new site carries all of it on every page, plus eleven FAQs written only from facts on your own site, such as the courts you’re admitted to, appeals and pro bono eligibility."
    }
  ],
  "agreement": {
    "firmLegalName": "Law Offices of Joshua N. Garick, P.C.",
    "firmAddress": "34 Salem Street, Suite 202, Reading, MA 01867",
    "domain": "garicklaw.com",
    "clientEmail": "joshua@garicklaw.com",
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
