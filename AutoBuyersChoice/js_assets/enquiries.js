
var vehicles = {
    "Polo Tsi": {
        label: "Polo TSI",
        price: "R373 800 (excluding optional extras)",
        details: "Hatchback, petrol, 5 seats. Great for small families and first-time buyers.",
        performance: "The Polo TSI is known for a good balance of performance it has many vairiants with each having their own different horse power,kw and so on.",
        fuel: "It runs on petrol and is a popular, affordable choice with an efficient engine.",
        reliability: "It is one of the most relaible cars out there with many being able to clock 150 000km without any major issues if maintained well.",
        features: "It comes in Trendline, Comfortline, Lifestyle and R-Line trims.The current models come with advance like lane assist, Parking sensors, Self Park and collision assist and many more."
    },
    "BMW X7": {
        label: "BMW X7",
        price: "R2 100 000 (entry-level)",
        details: "SUV, petrol or diesel, 5 or 7 seats. A good family car for long road trips.",
        performance: "The X7 combines luxury, performance and space, with variants such as the X7 40d and X7 M50d they come with different horse power,kw and so on.",
        fuel: "It is a heavy fuel consumer because of its size, but the diesel variants have good fuel economy overall.",
        reliability: "It has one of the most reliable engines out there which most of them reach +- 100 000km without any problems if maintained very well.",
        features: "Some variants come with M Performance parts and features like lane assist, seat massage, some they come with 7 seaters."
    },
    "Toyota LandCruiser": {
        label: "Toyota LandCruiser",
        price: "R714 000 (entry-level)",
        details: "Diesel, 2 or 5 seats. Built for heavy-duty and off-road use.",
        performance: "It is very capable off-road and on gravel, and is used for towing and pulling heavy loads. It is not fast, but the power makes up for it.",
        fuel: "It uses a lot of fuel, especially the V8 variants,dual-tank setups can reach 180 litres.",
        reliability: "It is known for being very strong and reliable, This is one car we can say it is the most relaible many reaching 300 000km without any issues due to the fact of less tech in the car.",
        features: "It is less modern in tech and design, and is available as a single or double cab."
    },
    "Mercedes-Benz V-Class": {
        label: "Mercedes-Benz V-Class",
        price: "R2 260 000 (base to mid luxury trims)",
        details: "Mini van, petrol or diesel, 6 or 8 seats. Good for big families, events and long trips.",
        performance: "It performs well for a vehicle of its size. There are many variants of this like V250d or V300d which come in different horse power and kw. For it's sizes these cars are capable.",
        fuel: "It has good fuel economy for its size, which makes it practical for long-distance travel.",
        reliability: "This is a good car when it comes to reliability as it as made for long distance it can easily reach 140 000km without any challenges if well maintained and no services missed.",
        features: "Trims include AMG-Line and Avantgarde, and some variants have a mini fridge, tables and a Burmester sound system, Lane assist, self parking and many more."
    }
};

var form = document.getElementById("enquiryForm");
var fields = {
    name: document.getElementById("name"),
    email: document.getElementById("email"),
    vehicle: document.getElementById("vehicle"),
    topic: document.getElementById("topic"),
    message: document.getElementById("message")
};
var counter = document.getElementById("messageCount");
var statusBox = document.getElementById("formStatus");
var submitButton = document.getElementById("submitButton");
var responseBox = document.getElementById("enquiryResponse");

function setError(key, text) {
    var field = fields[key];
    document.getElementById(key + "Error").textContent = text;
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

function checkVehicle() {
    if (fields.vehicle.value === "") {
        return setError("vehicle", "Please select a vehicle.");
    }
    return setError("vehicle", "");
}

function checkTopic() {
    if (fields.topic.value === "") {
        return setError("topic", "Please select what you would like to know about.");
    }
    return setError("topic", "");
}

function checkMessage() {
    var value = fields.message.value.trim();
    if (value !== "" && value.length < 10) {
        return setError("message", "If you add a message it must be at least 10 characters long.");
    }
    if (value.length > 500) {
        return setError("message", "Your message may not be longer than 500 characters.");
    }
    return setError("message", "");
}

fields.name.addEventListener("blur", checkName);
fields.email.addEventListener("blur", checkEmail);
fields.vehicle.addEventListener("change", checkVehicle);
fields.topic.addEventListener("change", checkTopic);
fields.message.addEventListener("blur", checkMessage);

fields.message.addEventListener("input", function () {
    counter.textContent = fields.message.value.length + " / 500";
});

function topicAnswer(car, topic) {
    if (topic === "Performance") {
        return car.performance;
    }
    if (topic === "Fuel Economy") {
        return car.fuel;
    }
    if (topic === "Reliability") {
        return car.reliability;
    }
    if (topic === "Features") {
        return car.features;
    }
    if (topic === "Price") {
        return "The price above is the starting price. The final price depends on the trim and any optional extras you choose.";
    }
    return "Our team will read your message and reply with the answer.";
}

function showResponse() {
    var car = vehicles[fields.vehicle.value];
    var firstName = fields.name.value.trim().split(" ")[0];

    document.getElementById("responseIntro").textContent =
        "Hi " + firstName + ", here is what you asked about the " + car.label + ".";
    document.getElementById("responsePrice").textContent = "Starting price: " + car.price;
    document.getElementById("responseDetails").textContent = car.details;
    document.getElementById("responseTopic").textContent =
        fields.topic.value + ": " + topicAnswer(car, fields.topic.value);
    document.getElementById("responseAvailability").textContent =
        "Availability and exact pricing are confirmed by our team. We will reply to " +
        fields.email.value.trim() + " as soon as possible.";

    form.hidden = true;
    responseBox.hidden = false;
    responseBox.scrollIntoView({ behavior: "smooth", block: "start" });
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    statusBox.textContent = "";

    var results = [
        checkName(),
        checkEmail(),
        checkVehicle(),
        checkTopic(),
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
            showResponse();
        })
        .catch(function () {
            statusBox.textContent =
                "We could not send your enquiry. Please check your internet connection and try again.";
            submitButton.disabled = false;
            submitButton.value = "Submit Enquiry";
        });
});