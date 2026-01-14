fetch("partials/navbar.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;

    // Mobile menu toggle
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });

    // Active link highlight
    const currentPage = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll("#navMenu a").forEach(link => {
      if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
      }
    });
  })
  .catch(err => console.error("Navbar load error:", err));
