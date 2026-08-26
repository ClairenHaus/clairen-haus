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
    const response = await fetch(`${url}?v=5`);
    if (!response.ok) throw new Error(`Could not load ${url}`);
    return response.text();
  }));
  return `data:image/webp;base64,${parts.join("")}`;
}

async function hydrateHeroImages() {
  try {
    const [desktop, mobile] = await Promise.all([
      loadImageData("heroDesktop"),
      loadImageData("heroMobile")
    ]);

    const heroImg = document.querySelector(".hero-media img");
    const heroSource = document.querySelector(".hero-media source");

    if (heroImg) heroImg.src = desktop;
    if (heroSource) heroSource.srcset = mobile;
  } catch (error) {
    console.error("Hero image hydration failed", error);
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
