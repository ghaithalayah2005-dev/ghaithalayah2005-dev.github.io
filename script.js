// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sticky Navbar on Scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
    } else {
        navbar.style.boxShadow = "none";
    }
});

// Modal Functions
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // منع التمرير في الخلفية
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // إعادة التمرير
    }
}

function openImageModal(src, alt) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById("img01");
    const captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = src;
    captionText.innerHTML = alt;
    document.body.style.overflow = "hidden";
}

// Close modal when clicking outside of it
window.onclick = function (event) {
    const modals = document.getElementsByClassName('modal');
    for (let modal of modals) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function (event) {
    if (event.key === "Escape") {
        const modals = document.getElementsByClassName('modal');
        for (let modal of modals) {
            if (modal.style.display === "block") {
                modal.style.display = "none";
                document.body.style.overflow = "auto";
            }
        }
    }
});

// Simple Console Greeting
console.log("Welcome to my portfolio! Built with love and code.");

// Ensure no modal is visible on initial page load (fix accidental open modals)
document.addEventListener('DOMContentLoaded', function () {
    const modals = document.getElementsByClassName('modal');
    for (let modal of modals) {
        modal.style.display = 'none';
    }
    // clear image modal content just in case
    const modalImg = document.getElementById('img01');
    if (modalImg) modalImg.src = '';
    const caption = document.getElementById('caption');
    if (caption) caption.innerHTML = '';
    document.body.style.overflow = 'auto';
});

// Live Arabic date/time in the navbar
function updateTime() {
    const now = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    const timeString = now.toLocaleDateString('ar-YE', options);
    const el = document.getElementById('date-time');
    if (el) el.innerText = timeString;
}

// update every second and run immediately
setInterval(updateTime, 1000);
updateTime();

// Mobile menu toggle behavior
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', function () {
            navLinks.classList.toggle('active');
            // aria-expanded for accessibility
            const expanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', (!expanded).toString());
            // toggle class for simple animation
            this.classList.toggle('open');
        });

        // Close the menu when a nav link is clicked (mobile)
        navLinks.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', function () {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    mobileMenu.classList.remove('open');
                    mobileMenu.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }
});

