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

  price: { build: 3000, deposit: 1500, balance: 1500, care: 199 }
};
