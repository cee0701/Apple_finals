/**
 * Initializes the carousel by cloning items once
 * so the scroll animation loops seamlessly forever.
 */
function initCarousel() {
  const track = document.querySelector("#carousel-track");
  if (!track) return;

  // Prevent double-cloning
  if (track.dataset.cloned === "true") return;

  const items = Array.from(track.children);
  items.forEach((item) => {
    const clone = item.cloneNode(true);
    clone.setAttribute("aria-hidden", "true");
    track.appendChild(clone);
  });

  track.dataset.cloned = "true";
}

document.addEventListener("DOMContentLoaded", initCarousel);
