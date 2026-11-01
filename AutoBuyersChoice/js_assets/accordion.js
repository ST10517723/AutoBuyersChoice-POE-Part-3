var accordionButtons = document.querySelectorAll(".accordion-button");

function openPanel(button) {
    var panel = document.getElementById(button.getAttribute("aria-controls"));
    button.setAttribute("aria-expanded", "true");
    button.parentElement.parentElement.classList.add("open");
    panel.style.maxHeight = panel.scrollHeight + "px";
}

function closePanel(button) {
    var panel = document.getElementById(button.getAttribute("aria-controls"));
    button.setAttribute("aria-expanded", "false");
    button.parentElement.parentElement.classList.remove("open");
    panel.style.maxHeight = null;
}

accordionButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        var isOpen = button.getAttribute("aria-expanded") === "true";

        accordionButtons.forEach(function (other) {
            closePanel(other);
        });

        if (!isOpen) {
            openPanel(button);
        }
    });
});

window.addEventListener("resize", function () {
    accordionButtons.forEach(function (button) {
        if (button.getAttribute("aria-expanded") === "true") {
            openPanel(button);
        }
    });
});

if (accordionButtons.length > 0) {
    openPanel(accordionButtons[0]);
}