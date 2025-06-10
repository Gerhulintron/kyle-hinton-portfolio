// scripts/navbarLoader.js
fetch("pages/KyleHintonProjectsNavbar.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar-container').innerHTML = data;

        const isInPagesDir = window.location.pathname.includes('/pages/');
        const prefix = isInPagesDir ? './' : 'pages/';
        const homePath = isInPagesDir ? '../index.html' : 'index.html';

        document.querySelectorAll('[data-rel]').forEach(link => {
            const rel = link.getAttribute('data-rel');
            if (rel === 'home' || rel === 'portfolio') {
                link.setAttribute('href', homePath);
            } else if (rel) {
                link.setAttribute('href', `${prefix}${capitalize(rel)}.html`);
            }
        });

        function capitalize(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }

        const navbar = document.querySelector('.navbar');
        if (navbar) {
            const spotlight = document.createElement('div');
            spotlight.classList.add('spotlight');
            navbar.appendChild(spotlight);

            navbar.addEventListener('mousemove', function (e) {
                spotlight.style.display = 'block';
                const x = e.clientX - navbar.getBoundingClientRect().left;
                const y = e.clientY - navbar.getBoundingClientRect().top;
                spotlight.style.transform = `translate(${x}px, ${y}px)`;
            });

            navbar.addEventListener('mouseleave', function () {
                spotlight.style.display = 'none';
            });
        }

        window.toggleMobileMenu = function () {
            const menu = document.getElementById("mobileMenu");
            if (menu) {
                menu.classList.toggle("show");
            }
        };
    });
