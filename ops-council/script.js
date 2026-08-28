const IMAGE_MANIFEST = {
  heroDesktop: [
    "./data/hero-desktop-1.txt",
    "./data/hero-desktop-2.txt",
    "./data/hero-desktop-3.txt",
    "./data/hero-desktop-4.txt",
    "./data/hero-desktop-5.txt",
    "./data/hero-desktop-6.txt",
    "./data/hero-desktop-7.txt",
    "./data/hero-desktop-8.txt",
    "./data/hero-desktop-9.txt",
    "./data/hero-desktop-10.txt",
    "./data/hero-desktop-11.txt",
    "./data/hero-desktop-12.txt",
    "./data/hero-desktop-13.txt",
    "./data/hero-desktop-14.txt",
    "./data/hero-desktop-15.txt"
  ],
  heroMobile: [
    "./data/hero-mobile-1.txt",
    "./data/hero-mobile-2.txt"
  ],
  jordan: ["./data/jordan-cutout-fix-1.txt", "./data/jordan-cutout-fix-2.txt", "./data/jordan-cutout-fix-3.txt", "./data/jordan-cutout-fix-4.txt"],
  cameron: ["./data/cameron-cutout-1.txt", "./data/cameron-cutout-2.txt"],
  riley: ["./data/riley-cutout-1.txt", "./data/riley-cutout-2.txt"],
  blake: ["./data/blake-cutout-1.txt", "./data/blake-cutout-2.txt"]
};

async function loadImageData(key) {
  const parts = await Promise.all(IMAGE_MANIFEST[key].map(async (url) => {
    const response = await fetch(`${url}?v=6`, { cache: "no-store" });
    if (!response.ok) throw new Error(`Could not load ${url}`);
    return response.text();
  }));
  const base64 = parts.join("").replace(/\s+/g, "");
  return `data:image/webp;base64,${base64}`;
}

async function hydrateHeroImages() {
  const heroMedia = document.querySelector(".hero-media");
  const heroImg = document.querySelector(".hero-media img");
  const heroSource = document.querySelector(".hero-media source");
  const heroShade = document.querySelector(".hero-shade");
  const heroCopy = document.querySelector(".hero-copy");
  const scrollCue = document.querySelector(".scroll-cue");

  // Keep the photography inside the hero stacking context instead of behind it.
  if (heroMedia) heroMedia.style.zIndex = "0";
  if (heroShade) heroShade.style.zIndex = "1";
  if (heroCopy) {
    heroCopy.style.position = "relative";
    heroCopy.style.zIndex = "2";
  }
  if (scrollCue) scrollCue.style.zIndex = "2";

  try {
    const [desktop, mobile] = await Promise.all([
      loadImageData("heroDesktop"),
      loadImageData("heroMobile")
    ]);

    if (!heroImg) return;

    // Avoid <picture>/srcset selection races by assigning the chosen image directly.
    if (heroSource) heroSource.remove();
    heroImg.src = window.matchMedia("(max-width: 720px)").matches ? mobile : desktop;
    heroImg.style.opacity = "1";
    heroImg.style.visibility = "visible";
  } catch (error) {
    console.error("Hero image hydration failed", error);
    if (heroImg) {
      heroImg.src = window.matchMedia("(max-width: 720px)").matches
        ? "./assets/hero-mobile.webp?v=20260827-2"
        : "./assets/hero-desktop.webp?v=20260827-2";
      heroImg.style.opacity = "1";
      heroImg.style.visibility = "visible";
    }
  }
}

async function hydrateCoachImages() {
  try {
    const [jordan, cameron, riley, blake] = await Promise.all([
      loadImageData("jordan"),
      loadImageData("cameron"),
      loadImageData("riley"),
      loadImageData("blake")
    ]);
    const map = { jordan, cameron, riley, blake };

    const jordanImg = document.querySelector(".coach-jordan .coach-visual img");
    if (jordanImg) jordanImg.src = jordan;

    document.querySelectorAll("[data-image-key]").forEach((img) => {
      img.src = map[img.dataset.imageKey];
    });
  } catch (error) {
    console.error("Coach image hydration failed", error);
  }
}

hydrateHeroImages();
hydrateCoachImages();

const WAITLIST_ENDPOINT = "https://iyyatugcngmqplsyzjsq.supabase.co/functions/v1/ops-council-waitlist";
const form = document.getElementById("waitlistForm");
const emailInput = document.getElementById("email");
const statusEl = document.getElementById("formStatus");
const yearEl = document.getElementById("year");

yearEl.textContent = new Date().getFullYear();

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  statusEl.textContent = "";

  const email = emailInput.value.trim();
  if (!email || !emailInput.checkValidity()) {
    statusEl.textContent = "Enter a valid email address.";
    emailInput.focus();
    return;
  }

  const button = form.querySelector("button");
  const original = button.innerHTML;
  button.disabled = true;
  button.textContent = "Saving your seat...";

  try {
    const response = await fetch(WAITLIST_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        source: "ops-council-waitlist",
        website: ""
      })
    });

    const result = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(result.error || "waitlist-save-failed");

    form.reset();
    statusEl.textContent = result.duplicate
      ? "Your seat is already saved."
      : "Your seat is saved. Watch your inbox for opening updates.";
  } catch (error) {
    console.error("Waitlist signup failed", error);
    statusEl.textContent = "We could not save your seat. Please try again.";
  } finally {
    button.disabled = false;
    button.innerHTML = original;
  }
});
