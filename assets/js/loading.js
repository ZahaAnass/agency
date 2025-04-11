class LoadingAnimation extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div id="loader">
                <canvas id="dotlottie-canvas" style="width: 300px; height: 300px;"></canvas>
            </div>
        `;
    }
}

customElements.define('loading-animation', LoadingAnimation);