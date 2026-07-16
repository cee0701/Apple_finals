
function initCarousel() {
  const track = document.querySelector("#carousel-track");
  if (!track) return;

  
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
