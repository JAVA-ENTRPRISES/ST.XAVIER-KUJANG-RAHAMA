document.addEventListener('DOMContentLoaded', () => {

    /* ================= HEADER WITH LOGO ================= */
    const header = document.getElementById("main-header");

    if (header) {
        header.innerHTML = `
        <div class="header-container">

            <div class="logo-section">
                <img src="images/logo.png" alt="School Logo" class="logo-img">
                
                <div class="school-text">
                    <h1>St. Xavier High School</h1>
                    <span>Bhubaneswar</span>
                </div>
            </div>

            <ul class="nav-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="facility.html">Facility</a></li>
                <li><a href="gallery.html">Gallery</a></li>
                <li><a href="mandatory.html">Disclosure</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>

        </div>`;
    }

    /* ================= FORM ================= */
    const contactForm = document.getElementById('schoolContactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Your inquiry has been sent successfully!');
            contactForm.reset();
        });
    }

    /* ================= ACTIVE LINK ================= */
    const currentLocation = window.location.pathname.split("/").pop() || "index.html";

    const navLinks = document.querySelectorAll('.nav-links li a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentLocation) {
            link.classList.add('active');
        }
    });

});
hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
});