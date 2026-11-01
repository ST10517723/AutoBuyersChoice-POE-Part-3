var vehicles = [
    {
        name: "Volkswagen Polo TSI",
        type: "Hatchback",
        fuel: ["Petrol"],
        seats: "5",
        price: 373800,
        image: "_images/AutoBuyersChoice Volkswagen Polo Tsi.jpg",
        alt: "A grey Volkswagen Polo TSI parked in front of some trees",
        description: "A popular, affordable hatchback that is great for small families and first-time buyers."
    },
    {
        name: "BMW X7",
        type: "SUV",
        fuel: ["Petrol", "Diesel"],
        seats: "5 or 7",
        price: 2100000,
        image: "_images/AutoBuyersChoice Bmw X7.jpg",
        alt: "A white BMW X7 SUV parked in a parking lot",
        description: "A supersized luxury SUV with lots of space, ideal for families and long road trips."
    },
    {
        name: "Toyota LandCruiser",
        type: "Van",
        fuel: ["Diesel"],
        seats: "2 or 5",
        price: 714000,
        image: "_images/AutoBuyersChoice Toyota LandCruiser.jpg",
        alt: "Several Toyota LandCruiser off-road vehicles parked in a row outdoors",
        description: "A strong, reliable off-road vehicle built for heavy-duty work and rough roads."
    },
    {
        name: "Mercedes-Benz V-Class",
        type: "Mini Van",
        fuel: ["Petrol", "Diesel"],
        seats: "6 or 8",
        price: 2260000,
        image: "_images/AutoBuyersChoice Mercedes Benz V class.jpg",
        alt: "A dark Mercedes-Benz V-Class van with its headlights on",
        description: "A spacious, comfortable luxury van that is good for big families, events and long trips."
    }
];

var searchInput = document.getElementById("vehicleSearch");
var typeSelect = document.getElementById("vehicleType");
var fuelSelect = document.getElementById("vehicleFuel");
var sortSelect = document.getElementById("vehicleSort");
var clearButton = document.getElementById("vehicleClear");
var grid = document.getElementById("vehicleGrid");
var countText = document.getElementById("vehicleCount");
var noResults = document.getElementById("noResults");

function formatPrice(number) {
    return "R" + String(number).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function fillTypeOptions() {
    var types = [];
    vehicles.forEach(function (vehicle) {
        if (types.indexOf(vehicle.type) === -1) {
            types.push(vehicle.type);
        }
    });
    types.sort().forEach(function (type) {
        var option = document.createElement("option");
        option.value = type;
        option.textContent = type;
        typeSelect.appendChild(option);
    });
}

function matches(vehicle) {
    var term = searchInput.value.trim().toLowerCase();
    var haystack = (
        vehicle.name + " " +
        vehicle.type + " " +
        vehicle.fuel.join(" ") + " " +
        vehicle.description
    ).toLowerCase();

    if (term !== "" && haystack.indexOf(term) === -1) {
        return false;
    }
    if (typeSelect.value !== "" && vehicle.type !== typeSelect.value) {
        return false;
    }
    if (fuelSelect.value !== "" && vehicle.fuel.indexOf(fuelSelect.value) === -1) {
        return false;
    }
    return true;
}

function sortVehicles(list) {
    var mode = sortSelect.value;
    return list.sort(function (a, b) {
        if (mode === "priceLow") {
            return a.price - b.price;
        }
        if (mode === "priceHigh") {
            return b.price - a.price;
        }
        return a.name.localeCompare(b.name);
    });
}

function createCard(vehicle) {
    var card = document.createElement("article");
    card.className = "vehicle-card";

    var image = document.createElement("img");
    image.src = vehicle.image;
    image.alt = vehicle.alt;
    image.loading = "lazy";

    var body = document.createElement("div");
    body.className = "vehicle-card-body";

    var title = document.createElement("h3");
    title.textContent = vehicle.name;

    var details = document.createElement("p");
    details.className = "vehicle-details";
    details.textContent =
        vehicle.type + " | " + vehicle.fuel.join(" / ") + " | " + vehicle.seats + " seats";

    var description = document.createElement("p");
    description.textContent = vehicle.description;

    var price = document.createElement("p");
    price.className = "vehicle-price";
    price.textContent = "From " + formatPrice(vehicle.price);

    var link = document.createElement("a");
    link.className = "vehicle-link";
    link.href = "enquiries.html";
    link.textContent = "Enquire about this vehicle";

    body.appendChild(title);
    body.appendChild(details);
    body.appendChild(description);
    body.appendChild(price);
    body.appendChild(link);

    card.appendChild(image);
    card.appendChild(body);

    return card;
}

function render() {
    var results = sortVehicles(vehicles.filter(matches));

    grid.innerHTML = "";
    results.forEach(function (vehicle) {
        grid.appendChild(createCard(vehicle));
    });

    countText.textContent =
        "Showing " + results.length + " of " + vehicles.length + " vehicles";
    noResults.hidden = results.length !== 0;
}

function clearFilters() {
    searchInput.value = "";
    typeSelect.value = "";
    fuelSelect.value = "";
    sortSelect.value = "name";
    render();
}

searchInput.addEventListener("input", render);
typeSelect.addEventListener("change", render);
fuelSelect.addEventListener("change", render);
sortSelect.addEventListener("change", render);
clearButton.addEventListener("click", clearFilters);

fillTypeOptions();
render();