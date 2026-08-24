const IMAGE_MANIFEST = {"hero-desktop": ["./data/hero-desktop-1.txt", "./data/hero-desktop-2.txt", "./data/hero-desktop-3.txt", "./data/hero-desktop-4.txt", "./data/hero-desktop-5.txt"], "hero-mobile": ["./data/hero-mobile-1.txt", "./data/hero-mobile-2.txt", "./data/hero-mobile-3.txt", "./data/hero-mobile-4.txt"], "jordan-full": ["./data/jordan-full-1.txt"], "cameron-full": ["./data/cameron-full-1.txt"], "riley-full": ["./data/riley-full-1.txt"], "blake-full": ["./data/blake-full-1.txt"]};

async function loadImageData(key) {
  const parts = await Promise.all(IMAGE_MANIFEST[key].map(async (url) => {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Could not load ${url}`);
    return response.text();
  }));
  return `data:image/jpeg;base64,${parts.join("")}`;
}

async function hydrateImages() {
  try {
    const [desktop, mobile, jordan, cameron, riley, blake] = await Promise.all([
      loadImageData("hero-desktop"),
      loadImageData("hero-mobile"),
      loadImageData("jordan-full"),
      loadImageData("cameron-full"),
      loadImageData("riley-full"),
      loadImageData("blake-full")
    ]);
    document.getElementById("heroDesktopImage").src = desktop;
    document.getElementById("heroMobileSource").srcset = mobile;
    const map = {"jordan-full": jordan, "cameron-full": cameron, "riley-full": riley, "blake-full": blake};
    document.querySelectorAll("[data-image-key]").forEach(img => { img.src = map[img.dataset.imageKey]; });
    document.documentElement.classList.add("images-ready");
  } catch (err) {
    console.error("Image hydration failed", err);
  }
}

hydrateImages();

// The front-end is ready. Connect this endpoint to Supabase, Postmark, or your preferred waitlist service.
// Expected request body: { email: "founder@example.com", source: "ops-council-waitlist" }
const WAITLIST_ENDPOINT = "/api/waitlist";

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
        source: "ops-council-waitlist"
      })
    });

    if (!response.ok) throw new Error("endpoint-not-connected");

    form.reset();
    statusEl.textContent = "Your seat is saved. Watch your inbox for opening updates.";
  } catch (error) {
    statusEl.textContent = "The page is ready. Connect the waitlist endpoint before launch.";
  } finally {
    button.disabled = false;
    button.innerHTML = original;
  }
});
