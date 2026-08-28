const IMAGE_MANIFEST = {
  jordan: ["./data/jordan-cutout-fix-1.txt", "./data/jordan-cutout-fix-2.txt", "./data/jordan-cutout-fix-3.txt", "./data/jordan-cutout-fix-4.txt"],
  cameron: ["./data/cameron-cutout-1.txt", "./data/cameron-cutout-2.txt"],
  riley: ["./data/riley-cutout-1.txt", "./data/riley-cutout-2.txt"],
  blake: ["./data/blake-cutout-1.txt", "./data/blake-cutout-2.txt"]
};

const HERO_DESKTOP_PARTS = [
  "hero-desktop-1.txt",
  "hero-desktop-2.txt",
  "hero-desktop-3.txt",
  "hero-desktop-4.txt",
  "hero-desktop-5.txt",
  "hero-desktop-6.txt",
  "hero-desktop-7.txt",
  "hero-desktop-8.txt",
  "hero-desktop-9.txt",
  "hero-desktop-10.txt",
  "hero-desktop-11.txt",
  "hero-desktop-12.txt",
  "hero-desktop-13.txt",
  "hero-desktop-14.txt",
  "hero-desktop-15.txt"
];

const HERO_MOBILE_PARTS = [
  "hero-mobile-1.txt",
  "hero-mobile-2.txt"
];

const RAW_DATA_ROOT = "https://raw.githubusercontent.com/ClairenHaus/clairen-haus/main/ops-council/data/";

async function loadImageData(key) {
  const parts = await Promise.all(IMAGE_MANIFEST[key].map(async (url) => {
    const response = await fetch(`${url}?v=8`, { cache: "no-store" });
    if (!response.ok) throw new Error(`Could not load ${url}`);
    return response.text();
  }));
  const base64 = parts.join("").replace(/\s+/g, "");
  return `data:image/webp;base64,${base64}`;
}

async function loadHeroData(partNames) {
  const parts = await Promise.all(partNames.map(async (name) => {
    const url = `${RAW_DATA_ROOT}${name}?v=8`;
    const response = await fetch(url, { cache: "no-store", mode: "cors" });
    if (!response.ok) throw new Error(`Could not load ${name}: ${response.status}`);
    return response.text();
  }));

  const base64 = parts.join("").replace(/\s+/g, "");
  if (!base64.startsWith("UklGR")) throw new Error("Hero payload is not a WebP base64 stream");
  return `data:image/webp;base64,${base64}`;
}

async function hydrateHeroImage() {
  const heroMedia = document.querySelector(".hero-media");
  const heroImg = document.querySelector(".hero-media img");
  const heroSource = document.querySelector(".hero-media source");
  const heroShade = document.querySelector(".hero-shade");
  const heroCopy = document.querySelector(".hero-copy");
  const scrollCue = document.querySelector(".scroll-cue");

  if (!heroMedia || !heroImg) return;

  heroMedia.style.zIndex = "0";
  if (heroShade) heroShade.style.zIndex = "1";
  if (heroCopy) {
    heroCopy.style.position = "relative";
    heroCopy.style.zIndex = "2";
  }
  if (scrollCue) scrollCue.style.zIndex = "2";
  if (heroSource) heroSource.remove();

  try {
    const parts = window.matchMedia("(max-width: 720px)").matches
      ? HERO_MOBILE_PARTS
      : HERO_DESKTOP_PARTS;
    const dataUri = await loadHeroData(parts);

    // Set both the image and the parent background. Either rendering path is sufficient.
    heroImg.src = dataUri;
    heroImg.style.display = "block";
    heroImg.style.opacity = "1";
    heroImg.style.visibility = "visible";
    heroMedia.style.backgroundImage = `url("${dataUri}")`;
    heroMedia.style.backgroundSize = "cover";
    heroMedia.style.backgroundPosition = "center center";
    heroMedia.style.backgroundRepeat = "no-repeat";
    heroMedia.style.opacity = "1";
    heroMedia.style.visibility = "visible";
  } catch (error) {
    console.error("Hero image hydration failed", error);
    heroImg.style.display = "none";
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
