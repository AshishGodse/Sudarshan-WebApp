/* ============================================
   Sudarshan - Contact Form Handler
   Client-side validation for contact form
   ============================================ */

(function () {
    "use strict";

    var form = document.getElementById("contactForm");
    if (!form) return;

    var fields = {
        name: {
            el: document.getElementById("name"),
            error: document.getElementById("nameError"),
            validate: function (val) {
                if (!val.trim()) return "Name is required.";
                if (val.trim().length < 2) return "Name must be at least 2 characters.";
                if (val.trim().length > 100) return "Name must be under 100 characters.";
                return "";
            },
        },
        email: {
            el: document.getElementById("email"),
            error: document.getElementById("emailError"),
            validate: function (val) {
                if (!val.trim()) return "Email is required.";
                // Basic email pattern
                var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!pattern.test(val.trim())) return "Please enter a valid email address.";
                return "";
            },
        },
        subject: {
            el: document.getElementById("subject"),
            error: document.getElementById("subjectError"),
            validate: function (val) {
                if (!val.trim()) return "Subject is required.";
                if (val.trim().length > 200) return "Subject must be under 200 characters.";
                return "";
            },
        },
        message: {
            el: document.getElementById("message"),
            error: document.getElementById("messageError"),
            validate: function (val) {
                if (!val.trim()) return "Message is required.";
                if (val.trim().length < 10) return "Message must be at least 10 characters.";
                if (val.trim().length > 2000) return "Message must be under 2000 characters.";
                return "";
            },
        },
    };

    // Real-time validation on blur
    Object.keys(fields).forEach(function (key) {
        var field = fields[key];
        if (field.el) {
            field.el.addEventListener("blur", function () {
                var msg = field.validate(field.el.value);
                field.error.textContent = msg;
            });
            field.el.addEventListener("input", function () {
                if (field.error.textContent) {
                    field.error.textContent = field.validate(field.el.value);
                }
            });
        }
    });

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        var isValid = true;

        Object.keys(fields).forEach(function (key) {
            var field = fields[key];
            var msg = field.validate(field.el.value);
            field.error.textContent = msg;
            if (msg) isValid = false;
        });

        if (!isValid) return;

        // Since this is a static site, show success message
        // In production, you can integrate with a service like Formspree, Netlify Forms, or EmailJS
        var successEl = document.getElementById("formSuccess");
        var submitBtn = form.querySelector(".submit-btn");

        submitBtn.disabled = true;
        submitBtn.textContent = "Sending...";

        // Simulate send delay
        setTimeout(function () {
            form.style.display = "none";
            if (successEl) successEl.style.display = "block";
        }, 800);
    });
})();
