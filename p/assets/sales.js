/* Clairen Haus personal sales pages: shared renderer. Do not edit per prospect.
   Reads window.CH_CONFIG (/p/assets/config.js) and the prospect's own
   /p/<slug>/prospect.js, which it loads from the URL, so every prospect folder
   carries identical HTML. */
(function () {
  "use strict";
  var parts = location.pathname.split("/").filter(Boolean);
  var pIdx = parts.indexOf("p");
  var slug = pIdx >= 0 ? parts[pIdx + 1] : "";
  var base = "/p/" + slug + "/";

  function money(n) { return "$" + Number(n).toLocaleString("en-US"); }
  function isBlank(v) { return typeof v === "string" && /^\[.*\]$/.test(v.trim()); }
  function get(obj, path) {
    return path.split(".").reduce(function (o, k) { return o == null ? undefined : o[k]; }, obj);
  }
  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  function render(P, C) {
    var data = { p: P, c: C, base: base,
      links: { sales: base, agreement: base + "agreement/", thanks: base + "thanks/" }, price: {
      build: money(C.price.build), deposit: money(C.price.deposit),
      balance: money(C.price.balance), care: money(C.price.care) } };

    document.querySelectorAll("[data-p]").forEach(function (n) {
      var v = get(data, n.getAttribute("data-p"));
      if (v == null || v === "") { if (n.hasAttribute("data-optional")) n.hidden = true; return; }
      n.textContent = v;
      if (isBlank(v)) n.classList.add("blank");
    });
    document.querySelectorAll("[data-p-href]").forEach(function (n) {
      var spec = n.getAttribute("data-p-href");
      var v = spec.charAt(0) === "@" ? "mailto:" + C.contactEmail + "?subject=" +
        encodeURIComponent(spec.slice(1) + " – " + P.firmName) : get(data, spec);
      if (v) n.setAttribute("href", v);
    });
    document.querySelectorAll("[data-p-hide-if-empty]").forEach(function (n) {
      if (!get(data, n.getAttribute("data-p-hide-if-empty"))) n.hidden = true;
    });

    var page = document.body.getAttribute("data-page");
    if (P.generic) document.querySelectorAll(".header-for, .footer-private").forEach(function (n) { n.hidden = true; });
    var titles = { sales: "Your new website, " + P.firmName, agreement: "Agreement, " + P.firmName,
      thanks: "Thank you, " + P.firmName };
    if (titles[page] && !P.generic) document.title = titles[page] + " | " + C.company;

    // Before/after picture
    var ba = document.getElementById("before-after");
    if (ba && P.images) {
      var im = P.images, pic = el("picture");
      var s1 = el("source"); s1.media = "(max-width: 640px)"; s1.type = "image/webp"; s1.srcset = base + "img/" + im.beforeAfterPhone + ".webp";
      var s2 = el("source"); s2.media = "(max-width: 640px)"; s2.srcset = base + "img/" + im.beforeAfterPhone + ".jpg";
      var s3 = el("source"); s3.type = "image/webp"; s3.srcset = base + "img/" + im.beforeAfterDesktop + ".webp";
      var img = el("img"); img.src = base + "img/" + im.beforeAfterDesktop + ".jpg"; img.alt = im.beforeAfterAlt || "";
      img.width = 2000; img.height = 698; img.decoding = "async";
      pic.append(s1, s2, s3, img); ba.prepend(pic);
    }

    // Findings
    var list = document.getElementById("findings");
    if (list && P.findings) {
      P.findings.forEach(function (f, i) {
        var li = el("li", "finding" + (f.image ? " finding-lead" : ""));
        var head = el("div", "finding-head");
        head.append(el("span", "finding-num", String(i + 1)), el("h3", null, f.title));
        li.append(head, el("p", null, f.body));
        if (f.image) {
          var fig = el("figure", "finding-shot"), pic2 = el("picture");
          var sw = el("source"); sw.type = "image/webp"; sw.srcset = base + "img/" + f.image.name + ".webp";
          var i2 = el("img"); i2.src = base + "img/" + f.image.name + ".jpg"; i2.alt = f.image.alt || "";
          i2.width = f.image.width || 980; i2.height = f.image.height || 294; i2.loading = "lazy";
          pic2.append(sw, i2);
          var full = el("a"); full.href = base + "img/" + f.image.name + ".jpg"; full.target = "_blank"; full.rel = "noopener";
          full.setAttribute("aria-label", "Open the screenshot full size"); full.append(pic2); fig.append(full);
          if (f.image.caption) fig.append(el("figcaption", null, f.image.caption));
          li.append(fig);
        }
        list.append(li);
      });
    }

    if (page === "agreement") agreement(P, C);
    if (page === "thanks") thanks(P);
    document.documentElement.classList.add("ch-ready");
  }

  function agreement(P, C) {
    var today = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
    document.querySelectorAll("[data-today]").forEach(function (n) { n.textContent = today; });

    var blanks = Array.prototype.slice.call(document.querySelectorAll(".agreement .blank"))
      .map(function (n) { return n.textContent; })
      .filter(function (v, i, a) { return a.indexOf(v) === i; });
    var warn = document.getElementById("draft-warning");
    if (warn && blanks.length) {
      warn.hidden = false;
      warn.querySelector("[data-blanks]").textContent = blanks.join(", ");
    }

    var form = document.getElementById("sign-form");
    var btn = document.getElementById("pay-btn");
    var note = document.getElementById("pay-note");
    var link = String(C.STRIPE_DEPOSIT_LINK || "");
    var live = /^https:\/\/\S+$/.test(link);
    if (!live) {
      btn.textContent = "Payment link coming. Email Michelle to finish";
      note.textContent = "Online payment is being set up. Your signature details will open in an email to " +
        C.contactName + " (" + C.contactEmail + "), and she will reply with the secure deposit link.";
    }
    var fields = ["agree", "signer-name", "signer-title", "signer-email"].map(function (id) { return document.getElementById(id); });
    var pad = signaturePad(document.getElementById("sig-pad"), function () { sync(); });
    var status = document.getElementById("sig-status");
    function valid() {
      return fields[0].checked && fields[1].value.trim().length > 1 && fields[2].value.trim().length > 0 &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields[3].value.trim()) && pad.hasInk();
    }
    function sync() {
      btn.disabled = !valid();
      if (pad.hasInk()) {
        status.hidden = false;
        status.querySelector("img").src = pad.dataUrl();
        status.querySelector("[data-sig-time]").textContent = "Signed " + new Date(pad.signedAt()).toLocaleString("en-US");
      } else { status.hidden = true; }
    }
    fields.forEach(function (f) { f.addEventListener("input", sync); f.addEventListener("change", sync); });
    document.getElementById("sig-clear").addEventListener("click", function () { pad.clear(); sync(); });
    sync();

    var sending = false;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (sending) return;
      if (!valid()) { sync(); return; }
      var now = new Date();
      var sig = { name: fields[1].value.trim(), title: fields[2].value.trim(), email: fields[3].value.trim(),
        firm: P.firmName, slug: slug, signedAt: now.toISOString(), signaturePng: pad.dataUrl() };
      try { sessionStorage.setItem("ch-signature", JSON.stringify(sig)); } catch (x) {}
      var sigLine = document.getElementById("signed-line");
      sigLine.textContent = "Signed electronically by " + sig.name + ", " + sig.title + ", " + P.agreement.firmLegalName +
        " (" + sig.email + ") on " + stamp(now) + ".";
      sigLine.hidden = false;
      var sigImg = document.getElementById("client-sig-img");
      if (sigImg) { sigImg.src = sig.signaturePng; sigImg.hidden = false; }
      ["client-sig-name", "client-sig-title", "client-sig-date"].forEach(function (id, i) {
        var n = document.getElementById(id);
        if (n) n.textContent = [sig.name, sig.title, now.toLocaleDateString("en-US")][i];
      });

      // Email the signed copy first, then go on. The client is never held longer than the timeout.
      sending = true;
      btn.disabled = true;
      btn.textContent = "Saving your signed copy…";
      btn.setAttribute("aria-busy", "true");
      sendSignedCopy(sig, now, P, C).then(function (result) {
        try { sessionStorage.setItem("ch-signed-copy", result); } catch (x) {}
        btn.textContent = live ? "Opening secure payment…" : "Opening your email…";
        if (live) {
          var ref = (slug + "__" + sig.name).replace(/[^A-Za-z0-9_-]+/g, "_").slice(0, 200);
          var url = link + (link.indexOf("?") >= 0 ? "&" : "?") + "client_reference_id=" + encodeURIComponent(ref) +
            "&prefilled_email=" + encodeURIComponent(sig.email);
          location.href = url;
        } else {
          var body = "I have read and agree to the Website Build and Care Plan Agreement at " + location.href.split("#")[0] + "\n\n" +
            "Firm: " + P.agreement.firmLegalName + "\nName: " + sig.name + "\nTitle: " + sig.title + "\nEmail: " + sig.email +
            "\nSigned: " + stamp(now) + " (signature drawn on the page)\n\nPlease send me the deposit link.";
          location.href = "mailto:" + C.contactEmail + "?subject=" + encodeURIComponent("Signed agreement – " + P.firmName) +
            "&body=" + encodeURIComponent(body);
          setTimeout(function () { sending = false; btn.removeAttribute("aria-busy"); sync(); }, 1500);
        }
      });
    });

    var printBtn = document.getElementById("print-btn");
    if (printBtn) printBtn.addEventListener("click", function () { window.print(); });
  }


  /* Date with time zone, e.g. "October 12, 2026 at 10:15 PM EDT". */
  function stamp(d) {
    try {
      return d.toLocaleString("en-US", { year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "2-digit", timeZoneName: "short" });
    } catch (x) { return d.toString(); }
  }

  /* Signed copy by email (no backend): one multipart POST to the FormSubmit endpoint in config.js, carrying the
     signing details, the drawn signature as a PNG and the full agreement as an HTML file. FormSubmit answers a
     delivered submission with a redirect (seen here as an "opaqueredirect" response). Resolves "sent", "unconfirmed",
     "failed", "timeout" or "off" and never rejects, so payment always opens. */
  function sendSignedCopy(sig, when, P, C) {
    var endpoint = String(C.SIGNED_COPY_ENDPOINT || "");
    if (!/^https:\/\//.test(endpoint) || !window.fetch || !window.FormData || !window.Blob) return Promise.resolve("off");
    var tz = "";
    try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ""; } catch (x) {}
    var signedAt = stamp(when) + (tz ? " (" + tz + ")" : "") + " · " + when.toISOString().replace(/\.\d+Z$/, "Z") + " UTC";
    var pageUrl = location.href.split("#")[0];
    var fd = new FormData();
    fd.append("_subject", "Signed agreement: " + (P.agreement.firmLegalName || P.firmName) + " (" + sig.name + ")");
    fd.append("_template", "table");
    fd.append("_captcha", "false");
    fd.append("_next", location.origin + "/p/thanks/");
    if (C.SIGNED_COPY_CC) fd.append("_cc", C.SIGNED_COPY_CC);
    fd.append("Firm", P.agreement.firmLegalName || P.firmName);
    fd.append("Signed by", sig.name);
    fd.append("Title", sig.title);
    fd.append("email", sig.email);            // FormSubmit sets Reply-To from a field named "email"
    fd.append("Signed at", signedAt);
    fd.append("Prospect page", sig.slug || "");
    fd.append("Full agreement", "Attached: the signed agreement (opens in any browser, printable) and the signature image.");
    fd.append("Next step", "Client was sent to the Stripe deposit checkout. Check Stripe for the payment.");
    // Note: FormSubmit silently drops submissions whose text fields contain a link (it answers 200
    // "submitted successfully" and sends nothing), so links and the agreement text travel only in the attachment.
    var file = (sig.slug || "client") + "-" + when.toISOString().slice(0, 10);
    try { fd.append("signature", dataUrlToBlob(sig.signaturePng), "signature-" + file + ".png"); } catch (x) {}
    try { fd.append("signed_agreement", new Blob([signedCopyHtml(sig, signedAt, pageUrl, P)], { type: "text/html" }), "signed-agreement-" + file + ".html"); } catch (x) {}

    var ms = Number(C.SIGNED_COPY_TIMEOUT_MS) || 7000;
    var timer;
    var timeout = new Promise(function (resolve) { timer = setTimeout(function () { resolve("timeout"); }, ms); });
    var post = fetch(endpoint, { method: "POST", body: fd, redirect: "manual", mode: "cors", credentials: "omit" })
      .then(function (r) {
        // Only FormSubmit's redirect to _next means the email was accepted; its 200 pages are
        // "needs activation" or a silently dropped submission.
        if (r.type === "opaqueredirect" || (r.status >= 300 && r.status < 400)) return "sent";
        return r.ok ? "unconfirmed" : "failed";
      })
      .catch(function () { return "failed"; });
    return Promise.race([post, timeout]).then(function (v) { clearTimeout(timer); return v; });
  }

  function dataUrlToBlob(u) {
    var parts = u.split(","), bin = atob(parts[1]), n = bin.length, a = new Uint8Array(n);
    while (n--) a[n] = bin.charCodeAt(n);
    return new Blob([a], { type: (parts[0].match(/:(.*?);/) || [0, "image/png"])[1] });
  }

  function escapeHtml(v) {
    return String(v).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; });
  }

  /* A standalone, printable HTML copy of the agreement exactly as shown, with the drawn signature inlined. */
  function signedCopyHtml(sig, signedAt, pageUrl, P) {
    var article = document.querySelector(".agreement");
    var body = article ? article.cloneNode(true) : document.createElement("div");
    var img = body.querySelector("#client-sig-img");
    if (img) { img.removeAttribute("hidden"); img.setAttribute("src", sig.signaturePng); }
    var css = "body{font:16px/1.6 Georgia,'Times New Roman',serif;color:#2A1F1A;max-width:760px;margin:32px auto;padding:0 20px}" +
      "h1{font-size:26px;margin:0 0 8px}h3{font-size:18px;margin:26px 0 6px}a{color:#2A1F1A}" +
      ".meta{font:14px/1.55 Arial,Helvetica,sans-serif;background:#F6EFE9;border-radius:8px;padding:12px 16px;margin:0 0 24px}" +
      ".sig-table{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:12px}.sig-table strong{display:block;margin-bottom:6px}" +
      ".client-sig-img{display:block;max-width:300px;width:100%;height:auto;margin:6px 0;border-bottom:1px solid #8a7f78}" +
      "@media print{.meta{background:none;border:1px solid #ccc}}";
    return "<!doctype html><html lang=\"en\"><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\">" +
      "<title>Signed agreement – " + escapeHtml(P.agreement.firmLegalName || P.firmName) + "</title><style>" + css + "</style></head><body>" +
      "<h1>Website Build and Care Plan Agreement</h1>" +
      "<p class=\"meta\"><strong>Signed electronically</strong> by " + escapeHtml(sig.name) + ", " + escapeHtml(sig.title) + ", " +
      escapeHtml(P.agreement.firmLegalName || P.firmName) + " (" + escapeHtml(sig.email) + ")<br>" + escapeHtml(signedAt) +
      "<br>Signed at: " + escapeHtml(pageUrl) + "</p>" + body.outerHTML + "</body></html>";
  }

  /* Draw-your-signature pad: finger, stylus or mouse (pointer events). */
  function signaturePad(canvas, onChange) {
    var ctx = canvas.getContext("2d"), drawing = false, ink = false, last = null, at = null, strokes = [];
    function size() {
      var r = canvas.getBoundingClientRect(), d = window.devicePixelRatio || 1;
      var keep = ink ? canvas.toDataURL() : null;
      canvas.width = Math.round(r.width * d); canvas.height = Math.round(r.height * d);
      ctx.setTransform(d, 0, 0, d, 0, 0);
      ctx.lineWidth = 2.4; ctx.lineCap = "round"; ctx.lineJoin = "round"; ctx.strokeStyle = "#2A1F1A";
      if (keep) { var im = new Image(); im.onload = function () { ctx.drawImage(im, 0, 0, r.width, r.height); }; im.src = keep; }
    }
    function pos(e) { var r = canvas.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; }
    canvas.addEventListener("pointerdown", function (e) {
      e.preventDefault(); drawing = true; last = pos(e);
      try { canvas.setPointerCapture(e.pointerId); } catch (x) {}
      ctx.beginPath(); ctx.arc(last.x, last.y, 1.1, 0, Math.PI * 2); ctx.fillStyle = "#2A1F1A"; ctx.fill();
    });
    canvas.addEventListener("pointermove", function (e) {
      if (!drawing) return;
      e.preventDefault();
      var p = pos(e);
      ctx.beginPath(); ctx.moveTo(last.x, last.y); ctx.lineTo(p.x, p.y); ctx.stroke();
      if (Math.abs(p.x - last.x) + Math.abs(p.y - last.y) > 0) ink = true;
      last = p;
    });
    function end() { if (!drawing) return; drawing = false; if (ink) { at = Date.now(); onChange(); } }
    canvas.addEventListener("pointerup", end);
    canvas.addEventListener("pointercancel", end);
    canvas.addEventListener("pointerleave", end);
    window.addEventListener("resize", size);
    size();
    return {
      hasInk: function () { return ink; },
      dataUrl: function () { return ink ? canvas.toDataURL("image/png") : ""; },
      signedAt: function () { return at; },
      clear: function () { ink = false; at = null; ctx.clearRect(0, 0, canvas.width, canvas.height); }
    };
  }

  function thanks(P) {
    var who = P.firstName || "";
    try {
      var s = JSON.parse(sessionStorage.getItem("ch-signature") || "null");
      if (s && s.name) who = s.name.split(" ")[0];
      var box = document.getElementById("thanks-sig");
      if (box && s && s.signaturePng) {
        box.querySelector("img").src = s.signaturePng;
        box.querySelector("[data-sig-who]").textContent = "Signed by " + s.name + ", " + s.title + " on " + new Date(s.signedAt).toLocaleString("en-US");
        box.hidden = false;
      }
    } catch (x) {}
    var h = document.getElementById("thanks-heading");
    if (h) h.textContent = who ? "Thank you, " + who + "." : "Thank you.";
  }

  function fail() {
    var m = document.getElementById("load-error");
    if (m) m.hidden = false;
  }

  // Shared thank-you page (/p/thanks/): the Stripe link's one redirect for every prospect.
  // It finds the prospect from the signature saved in this tab before checkout.
  if (slug === "thanks") {
    var saved = null;
    try { saved = JSON.parse(sessionStorage.getItem("ch-signature") || "null"); } catch (x) {}
    if (saved && /^[a-z0-9-]+$/.test(saved.slug || "")) { slug = saved.slug; base = "/p/" + slug + "/"; }
    else {
      var go = function () { render({ generic: true, firmName: "your firm", currentDomain: "your domain", previewUrl: "https://clairenhaus.com/previews/", agreement: {} }, window.CH_CONFIG); };
      if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", go); else go();
      return;
    }
  }
  if (!slug) { fail(); return; }
  var s = document.createElement("script");
  s.src = base + "prospect.js";
  s.onload = function () {
    if (window.PROSPECT && window.CH_CONFIG) render(window.PROSPECT, window.CH_CONFIG); else fail();
  };
  s.onerror = fail;
  document.head.appendChild(s);
})();
