
// Filter functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const propertyItems = document.querySelectorAll('.property-item');
    
    // Filter button click event
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterValue = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter properties
            propertyItems.forEach(item => {
                // First remove any existing animation classes
                item.classList.remove('fadeIn');
                
                if (filterValue === 'all' || item.getAttribute('data-type') === filterValue) {
                    item.style.display = 'block';
                    // Add animation with a slight delay
                    setTimeout(() => {
                        item.classList.add('fadeIn');
                    }, 50);
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // Search form submission
    const searchForm = document.getElementById('property-search');
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const location = document.getElementById('location').value;
        const priceRange = document.getElementById('price-range').value;
        const propertyType = document.getElementById('property-type').value;
        
        // Filter properties based on search criteria
        propertyItems.forEach(item => {
            const itemLocation = item.getAttribute('data-location');
            const itemPrice = parseInt(item.getAttribute('data-price'));
            const itemType = item.getAttribute('data-type');
            
            let locationMatch = !location || itemLocation === location;
            let typeMatch = !propertyType || itemType === propertyType;
            let priceMatch = true;
            
            // Handle price range filtering
            if (priceRange) {
                if (priceRange === '1000000+') {
                    priceMatch = itemPrice >= 1000000;
                } else {
                    const [min, max] = priceRange.split('-').map(Number);
                    priceMatch = itemPrice >= min && itemPrice <= max;
                }
            }
            
            // Show or hide based on all filters
            if (locationMatch && typeMatch && priceMatch) {
                item.style.display = 'block';
                // Add animation
                setTimeout(() => {
                    item.classList.add('fadeIn');
                }, 50);
            } else {
                item.style.display = 'none';
                item.classList.remove('fadeIn');
            }
        });
    });
});
