var RECIPIENT = "autobuyerschoice@gmail.com";

var form = document.getElementById("contactForm");
var fields = {
    name: document.getElementById("contactName"),
    email: document.getElementById("contactEmail"),
    phone: document.getElementById("contactPhone"),
    type: document.getElementById("contactType"),
    message: document.getElementById("contactMessage")
};
var counter = document.getElementById("contactCount");
var statusBox = document.getElementById("contactStatus");
var submitButton = document.getElementById("contactSubmit");
var responseBox = document.getElementById("contactResponse");

function setError(key, text) {
    var field = fields[key];
    var box = document.getElementById(
        "contact" + key.charAt(0).toUpperCase() + key.slice(1) + "Error"
    );
    box.textContent = text;
    if (text) {
        field.setAttribute("aria-invalid", "true");
        field.classList.add("invalid");
    } else {
        field.removeAttribute("aria-invalid");
        field.classList.remove("invalid");
    }
    return text === "";
}

function checkName() {
    var value = fields.name.value.trim();
    if (value === "") {
        return setError("name", "Please enter your full name.");
    }
    if (value.length < 2 || value.length > 60) {
        return setError("name", "Your name must be between 2 and 60 characters.");
    }
    if (!/^[A-Za-z\u00C0-\u024F][A-Za-z\u00C0-\u024F\s'\-\.]*$/.test(value)) {
        return setError("name", "Your name may only contain letters, spaces, hyphens and apostrophes.");
    }
    return setError("name", "");
}

function checkEmail() {
    var value = fields.email.value.trim();
    if (value === "") {
        return setError("email", "Please enter your email address.");
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) {
        return setError("email", "Please enter a valid email address, e.g. name@example.com.");
    }
    return setError("email", "");
}

function checkPhone() {
    var value = fields.phone.value.replace(/[\s\-\(\)]/g, "");
    if (value === "") {
        return setError("phone", "Please enter your phone number.");
    }
    if (!/^(0|\+27)[0-9]{9}$/.test(value)) {
        return setError("phone", "Enter a valid South African number, e.g. 0678901129 or +27678901129.");
    }
    return setError("phone", "");
}

function checkType() {
    if (fields.type.value === "") {
        return setError("type", "Please select the type of message.");
    }
    return setError("type", "");
}

function checkMessage() {
    var value = fields.message.value.trim();
    if (value === "") {
        return setError("message", "Please type your message.");
    }
    if (value.length < 10) {
        return setError("message", "Your message must be at least 10 characters long.");
    }
    if (value.length > 500) {
        return setError("message", "Your message may not be longer than 500 characters.");
    }
    return setError("message", "");
}

fields.name.addEventListener("blur", checkName);
fields.email.addEventListener("blur", checkEmail);
fields.phone.addEventListener("blur", checkPhone);
fields.type.addEventListener("change", checkType);
fields.message.addEventListener("blur", checkMessage);

fields.message.addEventListener("input", function () {
    counter.textContent = fields.message.value.length + " / 500";
});

function buildMailto() {
    var subject = fields.type.value + " from " + fields.name.value.trim();
    var body =
        "Name: " + fields.name.value.trim() + "\n" +
        "Email: " + fields.email.value.trim() + "\n" +
        "Phone: " + fields.phone.value.trim() + "\n" +
        "Message type: " + fields.type.value + "\n\n" +
        "Message:\n" + fields.message.value.trim();

    return "mailto:" + RECIPIENT +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);
}

function showSuccess() {
    var mailtoLink = buildMailto();
    var firstName = fields.name.value.trim().split(" ")[0];

    document.getElementById("contactResponseText").textContent =
        "Hi " + firstName + ", we have received your " +
        fields.type.value.toLowerCase() + " message and will reply to " +
        fields.email.value.trim() + " as soon as possible.";
    document.getElementById("mailtoLink").setAttribute("href", mailtoLink);

    form.hidden = true;
    responseBox.hidden = false;
    responseBox.scrollIntoView({ behavior: "smooth", block: "start" });

    window.location.href = mailtoLink;
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    statusBox.textContent = "";

    var results = [
        checkName(),
        checkEmail(),
        checkPhone(),
        checkType(),
        checkMessage()
    ];

    if (results.indexOf(false) !== -1) {
        statusBox.textContent = "Please fix the errors above and try again.";
        var firstInvalid = form.querySelector(".invalid");
        if (firstInvalid) {
            firstInvalid.focus();
        }
        return;
    }

    submitButton.disabled = true;
    submitButton.value = "Sending...";

    fetch(form.action, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(new FormData(form)).toString()
    })
        .then(function () {
            showSuccess();
        })
        .catch(function () {
            statusBox.textContent =
                "We could not send your message. Please check your internet connection and try again.";
            submitButton.disabled = false;
            submitButton.value = "Send Message";
        });
});