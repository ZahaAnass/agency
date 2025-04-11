// Get blog post ID from URL
const urlParams = new URLSearchParams(window.location.search);
const postId = parseInt(urlParams.get('id')) || 1;

// Fetch blog data from JSON file
fetch('assets/data/blog-data.json')
    .then(response => response.json())
    .then(data => {
        const post = data.posts.find(p => p.id === postId);
        if (!post) {
            console.error('Blog post not found');
            return;
        }

        // Update page title and meta information
        document.title = `${post.title} - Real Estate Agency Blog`;
        document.getElementById('post-title').textContent = post.title;
        document.getElementById('post-date').textContent = post.publishDate;
        document.getElementById('read-time').textContent = post.readTime;
        document.getElementById('post-category').textContent = post.category;

        // Update main image
        const mainImage = document.getElementById('post-image');
        mainImage.src = post.mainImage;
        mainImage.alt = post.title;

        // Update introduction
        document.getElementById('post-introduction').textContent = post.content.introduction;

        // Update content sections
        const contentContainer = document.getElementById('post-content');
        contentContainer.innerHTML = ''; // Clear loading text
        post.content.sections.forEach(section => {
            contentContainer.innerHTML += `
                <div class="mb-4">
                    <h2 class="h3 mb-3">${section.title}</h2>
                    <p>${section.content}</p>
                </div>
            `;
        });

        // Update conclusion
        document.getElementById('post-conclusion').textContent = post.content.conclusion;

        // Update tags
        const tagsContainer = document.getElementById('post-tags');
        tagsContainer.innerHTML = ''; // Clear loading text
        post.tags.forEach(tag => {
            tagsContainer.innerHTML += `
                <a href="#" class="text-decoration-none">
                    <span class="badge bg-light text-dark p-2">${tag}</span>
                </a>
            `;
        });

        // Update author information
        document.getElementById('author-image').src = post.author.image;
        document.getElementById('author-name').textContent = post.author.name;
        document.getElementById('author-role').textContent = post.author.role;
        document.getElementById('author-bio').textContent = post.author.bio;
    })
    .catch(error => console.error('Error loading blog data:', error));

// Handle subscribe form submission
document.querySelector('.subscribe form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="text"]').value;
    if (email) {
        alert('Thank you for subscribing to our blog updates!');
        this.reset();
    }
});
