// Get property ID from URL
const urlParams = new URLSearchParams(window.location.search);
const propertyId = parseInt(urlParams.get('id')) || 1;

// Fetch property data from JSON file
fetch('assets/data/properties-data.json')
    .then(response => response.json())
    .then(data => {
        const property = data.properties.find(p => p.id === propertyId);
        if (!property) {
            console.error('Property not found');
            return;
        }

        // Update page content
        document.getElementById('property-title').textContent = property.title;
        document.getElementById('property-price').textContent = property.price;
        document.getElementById('property-description').textContent = property.description || 'No description available';

        // Update features
        const featuresGrid = document.getElementById('property-features');
        featuresGrid.innerHTML = ''; // Clear existing content
        property.features.forEach(feature => {
            featuresGrid.innerHTML += `
                <div class="col-md-4">
                    <div class="bg-white p-2 rounded shadow-sm d-flex align-items-center gap-2">
                        <i class="fas fa-${feature.icon} text-primary fs-5"></i>
                        <span>${feature.text}</span>
                    </div>
                </div>
            `;
        });

        // Update amenities
        const amenitiesList = document.getElementById('property-amenities');
        amenitiesList.innerHTML = ''; // Clear existing content
        
        // Add location as an amenity
        amenitiesList.innerHTML += `
            <li class="bg-light p-2 rounded mb-2">
                <i class="fas fa-map-marker-alt text-success me-2"></i>${property.location}
            </li>
        `;
        
        // Add property type as an amenity
        amenitiesList.innerHTML += `
            <li class="bg-light p-2 rounded mb-2">
                <i class="fas fa-home text-success me-2"></i>${property.type.charAt(0).toUpperCase() + property.type.slice(1)}
            </li>
        `;
        
        // Add additional amenities
        if (property.amenities && property.amenities.length > 0) {
            property.amenities.forEach(amenity => {
                amenitiesList.innerHTML += `
                    <li class="bg-light p-2 rounded mb-2">
                        <i class="fas fa-check text-success me-2"></i>${amenity}
                    </li>
                `;
            });
        }

        // Update main image
        const mainImage = document.getElementById('mainImage');
        mainImage.src = property.image;
        mainImage.alt = property.title;

        // Update agent card
        const agentImage = document.querySelector('.agent-image');
        const agentName = document.querySelector('.agent-card h4');
        const agentTitle = document.querySelector('.agent-card p.text-muted');
        const agentExperience = document.querySelector('.agent-card p.text-muted.mb-3');
        const agentContact = document.querySelector('.agent-card .agent-contact');

        agentImage.src = property.agent.image;
        agentImage.alt = property.agent.name;
        agentName.textContent = property.agent.name;
        agentTitle.textContent = property.agent.title;
        agentExperience.textContent = property.agent.experience;

        // Add agent contact details
        agentContact.innerHTML = `
            <p><i class="fas fa-phone-alt text-primary me-2"></i>${property.agent.phone}</p>
            <p><i class="fas fa-envelope text-primary me-2"></i>${property.agent.email}</p>
        `;
    })
    .catch(error => console.error('Error loading property data:', error));

// Handle form submission
document.getElementById('visit-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for scheduling a visit! Our agent will contact you shortly to confirm the appointment.');
    this.reset();
});