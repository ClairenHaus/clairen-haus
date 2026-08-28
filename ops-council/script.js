const IMAGE_MANIFEST = {
  jordan: ["./data/jordan-cutout-fix-1.txt", "./data/jordan-cutout-fix-2.txt", "./data/jordan-cutout-fix-3.txt", "./data/jordan-cutout-fix-4.txt"],
  cameron: ["./data/cameron-cutout-1.txt", "./data/cameron-cutout-2.txt"],
  riley: ["./data/riley-cutout-1.txt", "./data/riley-cutout-2.txt"],
  blake: ["./data/blake-cutout-1.txt", "./data/blake-cutout-2.txt"]
};

async function loadImageData(key) {
  const parts = await Promise.all(IMAGE_MANIFEST[key].map(async (url) => {
    const response = await fetch(`${url}?v=7`, { cache: "no-store" });
    if (!response.ok) throw new Error(`Could not load ${url}`);
    return response.text();
  }));
  const base64 = parts.join("").replace(/\s+/g, "");
  return `data:image/webp;base64,${base64}`;
}

function hydrateHeroImage() {
  const heroMedia = document.querySelector(".hero-media");
  const heroImg = document.querySelector(".hero-media img");
  const heroSource = document.querySelector(".hero-media source");
  const heroShade = document.querySelector(".hero-shade");
  const heroCopy = document.querySelector(".hero-copy");
  const scrollCue = document.querySelector(".scroll-cue");

  if (!heroMedia) return;

  const desktopUrl = "https://raw.githubusercontent.com/ClairenHaus/clairen-haus/main/ops-council/assets/hero-desktop.webp?v=20260827-3";
  const mobileUrl = "https://raw.githubusercontent.com/ClairenHaus/clairen-haus/main/ops-council/assets/hero-mobile.webp?v=20260827-3";
  const selectedUrl = window.matchMedia("(max-width: 720px)").matches ? mobileUrl : desktopUrl;

  // Render the hero as a CSS background so it does not depend on picture/srcset,
  // data-URI hydration, or the host serving binary assets correctly.
  heroMedia.style.zIndex = "0";
  heroMedia.style.backgroundImage = `url("${selectedUrl}")`;
  heroMedia.style.backgroundSize = "cover";
  heroMedia.style.backgroundPosition = "center center";
  heroMedia.style.backgroundRepeat = "no-repeat";
  heroMedia.style.opacity = "1";
  heroMedia.style.visibility = "visible";

  if (heroSource) heroSource.remove();
  if (heroImg) heroImg.style.display = "none";

  if (heroShade) heroShade.style.zIndex = "1";
  if (heroCopy) {
    heroCopy.style.position = "relative";
    heroCopy.style.zIndex = "2";
  }
  if (scrollCue) scrollCue.style.zIndex = "2";
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

hydrateHeroImage();
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
