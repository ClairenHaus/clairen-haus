const IMAGE_MANIFEST = {
  cameron: ["./data/cameron-cutout-1.txt", "./data/cameron-cutout-2.txt"],
  riley: ["./data/riley-cutout-1.txt", "./data/riley-cutout-2.txt"],
  blake: ["./data/blake-cutout-1.txt", "./data/blake-cutout-2.txt"]
};

async function loadImageData(key) {
  const parts = await Promise.all(IMAGE_MANIFEST[key].map(async (url) => {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Could not load ${url}`);
    return response.text();
  }));
  return `data:image/webp;base64,${parts.join("")}`;
}

async function hydrateCoachImages() {
  try {
    const [cameron, riley, blake] = await Promise.all([
      loadImageData("cameron"),
      loadImageData("riley"),
      loadImageData("blake")
    ]);
    const map = { cameron, riley, blake };
    document.querySelectorAll("[data-image-key]").forEach((img) => {
      img.src = map[img.dataset.imageKey];
    });
  } catch (error) {
    console.error("Coach image hydration failed", error);
  }
}

hydrateCoachImages();

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
      body: JSON.stringify({ email, source: "ops-council-waitlist" })
    });
    if (!response.ok) throw new Error("endpoint-not-connected");
    form.reset();
    statusEl.textContent = "Your seat is saved. Watch your inbox for opening updates.";
  } catch (error) {
    statusEl.textContent = "The waitlist is not connected yet.";
  } finally {
    button.disabled = false;
    button.innerHTML = original;
  }
});
