# Personal sales pages (/p/)

Private, noindex pages, one per prospect: sales page -> agreement (sign) -> Stripe deposit -> thank-you.

    /p/assets/config.js        shared settings: STRIPE_DEPOSIT_LINK, contact email, prices (edit once)
    /p/assets/sales.js         shared renderer, signature pad, payment hand-off (don't edit per prospect)
    /p/assets/sales.css        Clairen Haus design tokens (from /assets/css/home.css), Jost self-hosted
    /p/<slug>/prospect.js      THE ONLY FILE TO EDIT for a prospect: firm, preview URL, findings, agreement fields
    /p/<slug>/img/             before-after-desktop, before-after-phone, hidden-text (.webp + .jpg)
    /p/<slug>/index.html       sales page        (identical in every prospect folder)
    /p/<slug>/agreement/       agreement + sign  (identical in every prospect folder)
    /p/<slug>/thanks/          thank-you         (identical in every prospect folder)
    /p/thanks/                 shared thank-you; set this as the Stripe Payment Link's after-payment redirect

## New prospect

1. Copy `/p/taylor-worden-em8oa6/` to `/p/<firm>-<6 random letters/digits>/` (unguessable slug).
2. Edit `prospect.js`: firm name, attn, domain, preview URL, findings (only things you verified), agreement fields.
   Any value written "[LIKE THIS]" shows highlighted on the agreement page with a "Draft" notice listing it.
3. Replace the images in `img/` with the same file names (or change the names in prospect.js).
   A finding without an `image` simply shows text.
4. Check it: the page loads with and without the trailing slash, the agreement shows no "Draft" notice.

## How signing works now (no backend yet)

The client ticks "I agree", types name, title and email, and draws a signature. The button stays disabled until all
are done. On continue, the signature (PNG), name, title, email and timestamp are kept in the browser tab
(sessionStorage) and shown on the page and the thank-you page; the client is sent to STRIPE_DEPOSIT_LINK with
`client_reference_id=<slug>__<name>` and `prefilled_email=<email>`. Nothing is saved on a server: storing signatures
comes with the build-portal phase. If STRIPE_DEPOSIT_LINK isn't an https link, the button instead opens an email to
Michelle with the signature details.
