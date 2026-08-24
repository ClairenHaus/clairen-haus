# The Ops Council Waitlist

Static landing page for The Ops Council.

Path: `/ops-council/`

The hero and coach photography are stored as chunked base64 text assets so the GitHub connector can publish the full visual build without binary upload support. `script.js` reassembles them in the browser.

The waitlist form posts to `/api/waitlist` and needs a live endpoint before collecting registrations.
