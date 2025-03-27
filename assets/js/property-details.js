const properties = {
    1: {
        title: "Modern Apartment in New York",
        price: "$450,000",
        location: "Manhattan, New York",
        features: [
            { icon: "bed", text: "3 Bedrooms" },
            { icon: "bath", text: "2 Bathrooms" },
            { icon: "ruler-combined", text: "1,200 sqft" },
            { icon: "car", text: "1 Garage" },
            { icon: "calendar", text: "Built in 2021" },
            { icon: "map-marker-alt", text: "Manhattan, New York" }
        ],
        description: "This modern apartment in the heart of Manhattan offers stunning city views and contemporary living spaces. The open-concept layout features high ceilings, floor-to-ceiling windows, and premium finishes throughout. The kitchen is equipped with stainless steel appliances and granite countertops.",
        amenities: [
            "Central Air Conditioning",
            "High-Speed Internet",
            "Security System",
            "Fitness Center",
            "24/7 Concierge",
            "Pet Friendly"
        ]
    },
    2: {
        title: "Spacious Family Home",
        price: "$750,000",
        location: "Beverly Hills, Los Angeles",
        features: [
            { icon: "bed", text: "4 Bedrooms" },
            { icon: "bath", text: "3 Bathrooms" },
            { icon: "ruler-combined", text: "2,400 sqft" },
            { icon: "car", text: "2 Garage" },
            { icon: "calendar", text: "Built in 2019" },
            { icon: "map-marker-alt", text: "Beverly Hills, Los Angeles" }
        ],
        description: "This spacious family home in Beverly Hills offers the perfect blend of luxury and comfort. The property features a grand entrance, formal dining room, and a gourmet kitchen with top-of-the-line appliances. The backyard includes a swimming pool and outdoor kitchen.",
        amenities: [
            "Swimming Pool",
            "Outdoor Kitchen",
            "Smart Home System",
            "Wine Cellar",
            "Home Office",
            "Garden"
        ]
    },
    3: {
        title: "Luxury Waterfront Villa",
        price: "$1,200,000",
        location: "South Beach, Miami",
        features: [
            { icon: "bed", text: "5 Bedrooms" },
            { icon: "bath", text: "4 Bathrooms" },
            { icon: "ruler-combined", text: "3,500 sqft" },
            { icon: "car", text: "3 Garage" },
            { icon: "calendar", text: "Built in 2020" },
            { icon: "map-marker-alt", text: "South Beach, Miami" }
        ],
        description: "This stunning waterfront villa offers breathtaking ocean views and luxurious living spaces. The property features high-end finishes, an open-concept layout, and premium amenities throughout. The gourmet kitchen is equipped with top-of-the-line appliances and custom cabinetry.",
        amenities: [
            "Ocean View",
            "Private Beach Access",
            "Infinity Pool",
            "Smart Home System",
            "Wine Cellar",
            "Home Theater"
        ]
    },
    4: {
        title: "Downtown Luxury Condo",
        price: "$520,000",
        location: "Loop, Chicago",
        features: [
            { icon: "bed", text: "2 Bedrooms" },
            { icon: "bath", text: "2 Bathrooms" },
            { icon: "ruler-combined", text: "1,100 sqft" },
            { icon: "car", text: "1 Garage" },
            { icon: "calendar", text: "Built in 2022" },
            { icon: "map-marker-alt", text: "Loop, Chicago" }
        ],
        description: "This modern downtown condo offers the perfect urban lifestyle. The unit features floor-to-ceiling windows with stunning city views, an open-concept living area, and a designer kitchen. The building includes premium amenities and 24/7 security.",
        amenities: [
            "City View",
            "Fitness Center",
            "Rooftop Deck",
            "24/7 Security",
            "Package Reception",
            "Bike Storage"
        ]
    },
    5: {
        title: "Modern House with Garden",
        price: "$680,000",
        location: "Queen Anne, Seattle",
        features: [
            { icon: "bed", text: "3 Bedrooms" },
            { icon: "bath", text: "2 Bathrooms" },
            { icon: "ruler-combined", text: "1,800 sqft" },
            { icon: "car", text: "2 Garage" },
            { icon: "calendar", text: "Built in 2021" },
            { icon: "map-marker-alt", text: "Queen Anne, Seattle" }
        ],
        description: "This modern house in Queen Anne features a beautiful garden and contemporary design elements. The home includes a spacious kitchen with island, hardwood floors throughout, and a finished basement. The backyard offers a perfect space for outdoor entertaining.",
        amenities: [
            "Garden",
            "Hardwood Floors",
            "Finished Basement",
            "Smart Home System",
            "Storage Shed",
            "Fenced Yard"
        ]
    },
    6: {
        title: "Cozy Studio Apartment",
        price: "$380,000",
        location: "Brooklyn, New York",
        features: [
            { icon: "bed", text: "1 Bedroom" },
            { icon: "bath", text: "1 Bathroom" },
            { icon: "ruler-combined", text: "650 sqft" },
            { icon: "car", text: "No Garage" },
            { icon: "calendar", text: "Built in 2023" },
            { icon: "map-marker-alt", text: "Brooklyn, New York" }
        ],
        description: "This cozy studio apartment in Brooklyn offers a perfect blend of comfort and style. The unit features an efficient layout, modern appliances, and plenty of natural light. The building includes common areas and is close to public transportation.",
        amenities: [
            "Modern Appliances",
            "High Ceilings",
            "Common Areas",
            "Laundry Room",
            "Bike Storage",
            "Pet Friendly"
        ]
    }
};

// Get property ID from URL
const urlParams = new URLSearchParams(window.location.search);
const propertyId = parseInt(urlParams.get('id')) || 1;
const property = properties[propertyId];

// Update page content
document.getElementById('property-title').textContent = property.title;
document.getElementById('property-price').textContent = property.price;
document.getElementById('property-description').textContent = property.description;

// Update features
const featuresGrid = document.getElementById('property-features');
property.features.forEach(feature => {
    featuresGrid.innerHTML += `
        <div class="feature-item">
            <i class="fas fa-${feature.icon}"></i>
            <span>${feature.text}</span>
        </div>
    `;
});

// Update amenities
const amenitiesList = document.getElementById('property-amenities');
property.amenities.forEach(amenity => {
    amenitiesList.innerHTML += `
        <li class="col-md-4 mb-2">
            <i class="fas fa-check text-success me-2"></i>${amenity}
        </li>
    `;
});

function changeMainImage(src) {
    document.getElementById('mainImage').src = src;
}

// Handle form submission
document.getElementById('visit-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for scheduling a visit! We will contact you shortly.');
    this.reset();
});