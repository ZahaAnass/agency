let propertiesData = null;
let currentPage = 1;
let propertiesPerPage = 6;
let currentFilter = 'all';

// Fetch properties data
fetch('assets/data/properties-data.json')
    .then(response => response.json())
    .then(data => {
        propertiesData = data;
        displayProperties();
        updatePagination();
    })
    .catch(error => console.error('Error loading properties:', error));

// Display properties
function displayProperties() {
    const propertiesContainer = document.getElementById('properties-container');
    if (!propertiesContainer || !propertiesData) return;

    const startIndex = (currentPage - 1) * propertiesPerPage;
    const endIndex = startIndex + propertiesPerPage;
    
    // Filter properties based on current filter
    let filteredProperties = propertiesData.properties;
    if (currentFilter !== 'all') {
        filteredProperties = propertiesData.properties.filter(property => property.type === currentFilter);
    }
    
    const propertiesToShow = filteredProperties.slice(startIndex, endIndex);
    
    propertiesContainer.innerHTML = propertiesToShow.map(property => `
        <div class="col-md-4 mb-4">
            <div class="property-card">
                <div class="card h-100">
                    <img src="${property.image}" class="card-img-top property-image" alt="${property.title}">
                    <div class="card-body">
                        <div class="property-price">${property.price}</div>
                        <h5 class="property-title">${property.title}</h5>
                        <p class="property-location">
                            <i class="fas fa-map-marker-alt"></i> ${property.location}
                        </p>
                        <div class="property-features">
                            ${property.features.map(feature => `
                                <div class="feature">
                                    <i class="fas fa-${feature.icon}"></i>
                                    <span>${feature.text}</span>
                                </div>
                            `).join('')}
                        </div>
                        <a href="property-details.html?id=${property.id}" class="btn btn-primary w-100 mt-3">View Details</a>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Update pagination
function updatePagination() {
    const paginationContainer = document.getElementById('pagination');
    if (!paginationContainer || !propertiesData) return;

    // Filter properties based on current filter
    let filteredProperties = propertiesData.properties;
    if (currentFilter !== 'all') {
        filteredProperties = propertiesData.properties.filter(property => property.type === currentFilter);
    }

    const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);
    
    let paginationHTML = `
        <li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
            <a class="page-link" href="#" data-page="${currentPage - 1}">Previous</a>
        </li>
    `;

    for (let i = 1; i <= totalPages; i++) {
        paginationHTML += `
            <li class="page-item ${currentPage === i ? 'active' : ''}">
                <a class="page-link" href="#" data-page="${i}">${i}</a>
            </li>
        `;
    }

    paginationHTML += `
        <li class="page-item ${currentPage === totalPages ? 'disabled' : ''}">
            <a class="page-link" href="#" data-page="${currentPage + 1}">Next</a>
        </li>
    `;

    paginationContainer.innerHTML = paginationHTML;

    // Add event listeners to pagination buttons
    paginationContainer.querySelectorAll('.page-link').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const newPage = parseInt(e.target.dataset.page);
            if (newPage >= 1 && newPage <= totalPages) {
                currentPage = newPage;
                displayProperties();
                updatePagination();
            }
        });
    });
}

// Handle filter buttons
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const filter = e.target.dataset.filter;
        
        // Update active state
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        e.target.classList.add('active');
        
        // Update filter and reset to first page
        currentFilter = filter;
        currentPage = 1;
        
        // Update display
        displayProperties();
        updatePagination();
    });
}); 