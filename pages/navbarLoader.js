// scripts/navbarLoader.js
fetch("pages/KyleHintonProjectsNavbar.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar-container').innerHTML = data;

        window.toggleMobileMenu = function () {
            const menu = document.getElementById("mobileMenu");
            if (menu) {
                menu.classList.toggle("show");
            }
        };
    });

