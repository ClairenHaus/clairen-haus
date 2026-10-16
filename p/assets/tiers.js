/* Clairen Haus personal sales pages: PRICING v2 tier renderer (Oct 16 2026). Shared, do not edit per prospect.
   Draws the Good/Better/Best cards, the agreement's package box and the tier lines, from the TERMS block in each
   prospect's own /p/<slug>/prospect.js (which calls CHTiers.render(TERMS) and owns every price and pay link).
   Pages that never call it (older law-firm pages) are untouched. */
(function () {
  "use strict";
  var parts = location.pathname.split("/").filter(Boolean);
  var pIdx = parts.indexOf("p");
  var base = "/p/" + (pIdx >= 0 ? parts[pIdx + 1] : "") + "/";
  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }
  function list(items, cls) {
    var ul = el("ul", cls || "check-list");
    (items || []).forEach(function (t) { ul.append(el("li", null, t)); });
    return ul;
  }
  function render(T) {
    var labels = ["Good", "Better", "Best"];
    // Sales page: busy-season note (tax only) and the three cards.
    var urg = document.getElementById("tier-urgency");
    if (urg) {
      if (T.urgency && T.urgency.title) {
        urg.querySelector("[data-tier-urgency-title]").textContent = T.urgency.title;
        urg.querySelector("[data-tier-urgency-body]").textContent = T.urgency.body;
        urg.hidden = false;
      } else { urg.hidden = true; }
    }
    var cards = document.getElementById("tier-cards");
    if (cards) {
      cards.textContent = "";
      T.tiers.forEach(function (t, i) {
        var popular = t.id === T.popularTier;
        var card = el("article", "tier-card" + (popular ? " is-popular" : ""));
        card.setAttribute("aria-labelledby", "tier-" + t.id);
        if (popular) card.append(el("p", "tier-badge", "Most popular"));
        card.append(el("p", "tier-rank", (labels[i] || "") + " · Tier " + (i + 1)));
        var h = el("h3", "tier-name", t.name); h.id = "tier-" + t.id; card.append(h);
        card.append(el("p", "tier-pitch", t.pitch));
        var amt = el("p", "tier-amount", t.priceText); amt.append(el("small", null, "one-time")); card.append(amt);
        card.append(el("p", "tier-care", "Paid in full when you sign, then " + T.careText + "/month care. First month free."));
        var a = el("a", "btn btn-lg tier-btn " + (popular ? "btn-primary" : "btn-secondary"), "Choose " + t.name);
        a.href = base + t.agreementPath;
        a.setAttribute("data-tier", t.id);
        card.append(a);
        card.append(list(t.features, "check-list tier-features"));
        if (t.busy) card.append(el("p", "tier-busy", t.busy));
        cards.append(card);
      });
    }
    // Agreement: chosen package box with links to switch.
    var chosen = document.getElementById("tier-chosen");
    if (chosen && T.tier) {
      chosen.textContent = "";
      var top = el("div", "tier-chosen-top");
      var left = el("div");
      left.append(el("p", "tier-chosen-label", "Your package"));
      left.append(el("p", "tier-chosen-name", T.tier.name));
      var right = el("p", "tier-chosen-price", T.tier.priceText);
      right.append(el("small", null, "one-time, then " + T.careText + "/mo care, first month free"));
      top.append(left, right);
      chosen.append(top);
      chosen.append(list(T.tier.features, "check-list tier-features"));
      var sw = el("p", "tier-switch");
      sw.append(document.createTextNode("Want a different package? "));
      T.tiers.filter(function (t) { return t.id !== T.tier.id; }).forEach(function (t, i) {
        if (i) sw.append(document.createTextNode(" or "));
        var l = el("a", null, t.name + " (" + t.priceText + ")"); l.href = base + t.agreementPath; sw.append(l);
      });
      chosen.append(sw);
      chosen.hidden = false;
    }
    // Agreement Section 1: the chosen tier's extra deliverables, before the launch line.
    var scope = document.getElementById("tier-scope");
    if (scope && T.tier) {
      var last = scope.lastElementChild;
      (T.tier.scope || []).forEach(function (s) { scope.insertBefore(el("li", "tier-scope-item", s), last); });
    }
  }
  window.CHTiers = { render: render };
})();
