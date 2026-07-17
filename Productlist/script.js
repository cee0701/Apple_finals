
function searchProducts() {
  const input = document.getElementById("searchBar").value.toLowerCase();
  const products = document.querySelectorAll(".product");

  products.forEach(product => {
    const name = product.querySelector("h3").textContent.toLowerCase();
    if (name.includes(input)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}


function filterCategory(category) {
  const sections = document.querySelectorAll("section");

  sections.forEach(section => {
    if (category === "All" || section.id.toLowerCase().includes(category.toLowerCase())) {
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
  });
}


function buyProduct(productName) {
  alert("You selected " + productName + " for purchase!");
}
