(function () {
    var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
        return;
    }

    var targets = document.querySelectorAll(
        "main > h1, main > h2, main > h3, main > p, main > img, main > table, .container, .gallery, .accordion"
    );

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    targets.forEach(function (element) {
        element.classList.add("reveal");
        observer.observe(element);
    });
})();