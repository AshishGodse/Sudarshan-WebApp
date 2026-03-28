/* ============================================
   Sudarshan - Core App JavaScript
   Handles: Navigation, Floating Ads
   ============================================ */

(function () {
    "use strict";

    // --- Mobile Navigation Toggle ---
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", function () {
            hamburger.classList.toggle("open");
            navLinks.classList.toggle("open");
        });

        // Close menu when a link is clicked
        navLinks.querySelectorAll(".nav-link").forEach(function (link) {
            link.addEventListener("click", function () {
                hamburger.classList.remove("open");
                navLinks.classList.remove("open");
            });
        });
    }

    // --- Floating Ad Management ---
    var AD_REAPPEAR_DELAY = 60000; // 1 minute in milliseconds

    function setupAd(adId, closeId) {
        var adEl = document.getElementById(adId);
        var closeBtn = document.getElementById(closeId);

        if (!adEl || !closeBtn) return;

        closeBtn.addEventListener("click", function () {
            adEl.classList.add("hidden");

            // Reappear after 1 minute
            setTimeout(function () {
                adEl.classList.remove("hidden");
            }, AD_REAPPEAR_DELAY);
        });
    }

    setupAd("adLeft", "adCloseLeft");
    setupAd("adRight", "adCloseRight");
})();
