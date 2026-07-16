
const NAV_ITEMS = [
  {
    label: "Products",
    href: "https://www.apple.com/store",
    variant: "pill",
  },
  {
  label: "About us",
  href: "about%20us/aboutus.html",  
  variant: "text",
}

];


function scrollToTop(event) {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}


function createNavButton({ label, href, variant }) {
  const link = document.createElement("a");
  link.href = href;
  link.textContent = label;
  link.className = variant === "pill" ? "nav-btn nav-btn--pill" : "nav-btn nav-btn--text";

  if (href === "#") {
    link.addEventListener("click", (event) => event.preventDefault());
  }

  return link;
}


function renderNavigation(containerSelector = "#nav-links") {
  const container = document.querySelector(containerSelector);
  if (!container) {
    console.warn("Navigation container not found:", containerSelector);
    return;
  }

  container.replaceChildren();

  NAV_ITEMS.forEach((item) => {
    container.appendChild(createNavButton(item));
  });
}


function initBrandLink(containerSelector = "#nav-brand") {
  const brand = document.querySelector(containerSelector);
  if (!brand) return;

  brand.href = "#top";
  brand.setAttribute("aria-label", "Apple — back to top");
  brand.addEventListener("click", scrollToTop);
}


function initFooterBrandLink() {
  const footerBrand = document.querySelector("#footer-brand");
  if (!footerBrand) return;

  footerBrand.href = "#top";
  footerBrand.setAttribute("aria-label", "Apple — back to top");
  footerBrand.addEventListener("click", scrollToTop);
}


function initScrollShadow() {
  const nav = document.querySelector(".nav");
  if (!nav) return;

  window.addEventListener("scroll", () => {
    nav.classList.toggle("nav--scrolled", window.scrollY > 10);
  });
}


function initFooterLinks() {
  document.querySelectorAll(".footer-col a[href='#']").forEach((link) => {
    link.addEventListener("click", (event) => event.preventDefault());
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderNavigation();
  initBrandLink();
  initFooterBrandLink();
  initScrollShadow();
  initFooterLinks();
});