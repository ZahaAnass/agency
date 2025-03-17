class SpecialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="footer pt-5 pb-2 ">
            <div class="container">
                <div class="row ">
                    <div class="col-md-4">
                        <h2 class="pb-2">A propos de nous</h2>
                        <p class="text-white-50">
                            Votre partenaire de confiance pour toutes vos transactions immobilières. 
                            Nous vous aidons à trouver la propriété idéale ou à vendre votre bien au meilleur prix.
                        </p>
                    </div>
                    <div class="col-md-4">
                        <h2 class="pb-1">Links</h2>
                        <ul class="list-unstyled links">
                            <li><a href="index.html" class="text-white-50">Home</a></li>
                            <li><a href="about.html" class="text-white-50">A propos</a></li>
                            <li><a href="properties.html" class="text-white-50">Services</a></li>
                            <li><a href="contact.html" class="text-white-50">Contact</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4">
                        <h2 class="pb-2">Contact</h2>
                        <p class="text-white-50">
                            <i class="fa fa-map-marker-alt pe-2"></i> 123 Main Street, New York, NY 10001
                        </p>
                        <p class="text-white-50">
                            <i class="fa fa-phone-alt pe-2"></i> +1 123 456 7890
                        </p>
                        <a href="#" class="btn rounded-pill main-btn btn-primary w-100 mt-3">anass@gmail.com</a>
                        <ul class="d-flex mt-5 list-unstyled gap-4 justify-content-center justify-content-md-start">
                            <li>
                                <a href="#" class="d-block text-light">
                                    <i class="fa-brands fa-facebook fa-lg facebook rounded-circle p-2"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="d-block text-light">
                                    <i class="fa-brands fa-twitter fa-lg twitter rounded-circle p-2"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="d-block text-light">
                                    <i class="fa-brands fa-linkedin fa-lg linkedin rounded-circle p-2"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="d-block text-light">
                                    <i class="fa-brands fa-youtube fa-lg youtube rounded-circle p-2"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr>
                <div class="text-center text-white-50">
                    <p>&copy; 2025 All Rights Reserved. Designed by <a href="#" class="text-white-50">Anass</a></p>
                </div>
            </div>
        </footer>
        `;
    }
}

class SpecialHeader extends HTMLElement {
    connectedCallback() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        this.innerHTML = `
        <header class="header">
            <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div class="container">
                    <a class="navbar-brand" href="index.html"><img src="assets/images/logo.png" class="im-fluid" alt=""></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fa-solid fa-bars"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link nav-links ${currentPage === 'index.html' ? 'active' : ''}" href="index.html">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link nav-links ${currentPage === 'about.html' ? 'active' : ''}" href="about.html">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link nav-links ${currentPage === 'services.html' ? 'active' : ''}" href="services.html">Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link nav-links ${currentPage === 'contact.html' ? 'active' : ''}" href="contact.html">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        `;
    }
}

customElements.define('special-footer', SpecialFooter);
customElements.define('special-header', SpecialHeader);