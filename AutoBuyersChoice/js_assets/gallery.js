var galleryButtons = Array.from(document.querySelectorAll(".gallery-item"));

if (galleryButtons.length > 0) {
    var lightbox = document.createElement("div");
    lightbox.className = "lightbox";
    lightbox.setAttribute("role", "dialog");
    lightbox.setAttribute("aria-modal", "true");
    lightbox.setAttribute("aria-label", "Photo viewer");
    lightbox.innerHTML =
        "<button type=\"button\" class=\"lightbox-close\" aria-label=\"Close photo viewer\">&times;</button>" +
        "<button type=\"button\" class=\"lightbox-arrow lightbox-prev\" aria-label=\"Previous photo\">&#8249;</button>" +
        "<figure class=\"lightbox-figure\">" +
        "<img class=\"lightbox-image\" src=\"\" alt=\"\">" +
        "<figcaption class=\"lightbox-caption\"></figcaption>" +
        "</figure>" +
        "<button type=\"button\" class=\"lightbox-arrow lightbox-next\" aria-label=\"Next photo\">&#8250;</button>";
    document.body.appendChild(lightbox);

    var lightboxImage = lightbox.querySelector(".lightbox-image");
    var lightboxCaption = lightbox.querySelector(".lightbox-caption");
    var closeButton = lightbox.querySelector(".lightbox-close");
    var prevButton = lightbox.querySelector(".lightbox-prev");
    var nextButton = lightbox.querySelector(".lightbox-next");
    var currentIndex = 0;
    var lastFocused = null;

    function showPhoto(index) {
        var button = galleryButtons[index];
        var thumbnail = button.querySelector("img");
        currentIndex = index;
        lightboxImage.src = button.getAttribute("data-full");
        lightboxImage.alt = thumbnail.alt;
        lightboxCaption.textContent = button.getAttribute("data-caption");
    }

    function openLightbox(index) {
        lastFocused = document.activeElement;
        showPhoto(index);
        lightbox.classList.add("open");
        document.body.classList.add("no-scroll");
        closeButton.focus();
    }

    function closeLightbox() {
        lightbox.classList.remove("open");
        document.body.classList.remove("no-scroll");
        if (lastFocused) {
            lastFocused.focus();
        }
    }

    function movePhoto(step) {
        var next = (currentIndex + step + galleryButtons.length) % galleryButtons.length;
        showPhoto(next);
    }

    galleryButtons.forEach(function (button, index) {
        button.addEventListener("click", function () {
            openLightbox(index);
        });
    });

    closeButton.addEventListener("click", closeLightbox);
    prevButton.addEventListener("click", function () {
        movePhoto(-1);
    });
    nextButton.addEventListener("click", function () {
        movePhoto(1);
    });

    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener("keydown", function (event) {
        if (!lightbox.classList.contains("open")) {
            return;
        }
        if (event.key === "Escape") {
            closeLightbox();
        } else if (event.key === "ArrowLeft") {
            movePhoto(-1);
        } else if (event.key === "ArrowRight") {
            movePhoto(1);
        } else if (event.key === "Tab") {
            var focusable = [closeButton, prevButton, nextButton];
            var first = focusable[0];
            var last = focusable[focusable.length - 1];
            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        }
    });
}