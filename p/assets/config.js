/* Clairen Haus personal sales pages: shared settings for EVERY prospect page under /p/.
   Fill STRIPE_DEPOSIT_LINK once with the Stripe Payment Link for the $1,500 deposit
   (e.g. "https://buy.stripe.com/..."). Until it starts with https://, the agreement page's
   button falls back to "email Michelle" instead of payment. */
window.CH_CONFIG = {
  STRIPE_DEPOSIT_LINK: "https://buy.stripe.com/4gM14o8NN5Ib0PH31obQY0d",

  company: "Clairen Haus",
  companyLegal: "Clairen Haus LLC",
  companyAddress: "8735 Dunwoody Pl, Atlanta, GA 30350",
  contactName: "Michelle Robinson",
  contactFirst: "Michelle",
  contactEmail: "hello@clairenhaus.com",
  site: "https://clairenhaus.com/",

  price: { build: 3000, deposit: 1500, balance: 1500, care: 199 },

  // Care plan: the first month after launch is free; billing starts this many days after launch.
  // Every sales page, agreement and thank-you page reads it.
  careFreeDays: 30,

  // SIGNED COPY BY EMAIL. When a client signs, the agreement page emails a signed copy (details, the drawn
  // signature as a PNG, and the full agreement as an HTML file) BEFORE sending them to Stripe.
  // Sent through FormSubmit (formsubmit.co: free, no backend, no account). The endpoint below is FormSubmit's
  // private alias for Tab's mailbox (michelle.robinson@mail.tab.bot), which keeps an archive of every copy;
  // SIGNED_COPY_CC is where Michelle receives them. FormSubmit asks for a one-time "Activate Form" click per
  // website domain, emailed to the alias's address; it is already done for clairenhaus.com and the
  // ch-proposal-taylorworden-em8oa6.sites.tab.bot review copy. Set SIGNED_COPY_ENDPOINT to "" to turn it off.
  SIGNED_COPY_ENDPOINT: "https://formsubmit.co/b78921b76baf71f6dfd0b727a057213f",
  SIGNED_COPY_CC: "michelle@clairenhaus.com,hello@clairenhaus.com",
  SIGNED_COPY_TIMEOUT_MS: 7000   // never keep a client waiting longer than this; payment opens either way
};
