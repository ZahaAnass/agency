let blogData = null;
let currentPage = 1;
const postsPerPage = 6;

// Fetch and display blog posts
fetch('assets/data/blog-data.json')
    .then(response => response.json())
    .then(data => {
        blogData = data;
        // Update main featured post
        const mainPost = data.posts[0];
        document.querySelector('.main-ques .card img').src = mainPost.mainImage;
        document.querySelector('.main-ques .card-title').textContent = mainPost.title;
        document.querySelector('.main-ques .post-meta').innerHTML = `
            <i class="fas fa-calendar-alt me-1"></i> Published: ${mainPost.publishDate}
            <span class="mx-2">|</span>
            <i class="fas fa-user me-1"></i> By: ${mainPost.author.name}
        `;
        document.querySelector('.main-ques .card-text').textContent = mainPost.content.introduction;
        document.querySelector('.main-ques .btn').href = `blog-details.html?id=${mainPost.id}`;

        // Display first page of posts
        displayPosts(1);
    })
    .catch(error => console.error('Error loading blog data:', error));

function displayPosts(page) {
    currentPage = page;
    const startIdx = 1 + (page - 1) * postsPerPage; // Start from 1 to skip featured post
    const endIdx = startIdx + postsPerPage;
    const postsToShow = blogData.posts.slice(startIdx, endIdx);

    const latestPostsContainer = document.querySelector('.lasted-article .row');
    latestPostsContainer.innerHTML = ''; // Clear existing content

    postsToShow.forEach(post => {
        const postHTML = `
            <div class="col-md-4">
                <div class="card h-100">
                    <img src="${post.mainImage}" class="img-fluid rounded p-2" alt="${post.title}">
                    <div class="card-body">
                        <h5>${post.title}</h5>
                        <p class="post-meta">
                            <i class="fas fa-calendar-alt me-1"></i> ${post.publishDate}
                        </p>
                        <p class="card-text">${post.content.introduction.substring(0, 100)}...</p>
                        <a href="blog-details.html?id=${post.id}" class="btn btn-primary">Read More <i class="fas fa-arrow-right ms-1"></i></a>
                    </div>
                </div>
            </div>
        `;
        latestPostsContainer.innerHTML += postHTML;
    });

    updatePagination();
}

function updatePagination() {
    const totalPosts = blogData.posts.length - 1; // Subtract 1 for featured post
    const totalPages = Math.ceil(totalPosts / postsPerPage);
    const paginationContainer = document.querySelector('.pagination');
    
    let paginationHTML = `
        <li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
            <a class="page-link" href="#" data-page="${currentPage - 1}">Previous</a>
        </li>
    `;

    for (let i = 1; i <= totalPages; i++) {
        paginationHTML += `
            <li class="page-item ${i === currentPage ? 'active' : ''}">
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

    // Add click event listeners to pagination buttons
    const pageLinks = paginationContainer.querySelectorAll('.page-link');
    pageLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const newPage = parseInt(link.dataset.page);
            if (!isNaN(newPage) && newPage > 0 && newPage <= totalPages) {
                displayPosts(newPage);
            }
        });
    });
}

// Handle subscribe form submission
document.querySelector('.subscribe form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="text"]').value;
    if (email) {
        alert('Thank you for subscribing! You will receive our market reports soon.');
        this.reset();
    }
});
