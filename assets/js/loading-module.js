import { DotLottie } from "https://cdn.jsdelivr.net/npm/@lottiefiles/dotlottie-web/+esm";

const dotLottie = new DotLottie({
    autoplay: true,
    loop: true,
    canvas: document.querySelector('#dotlottie-canvas'),
    src: "https://lottie.host/88c54173-7610-43c1-bebf-86eaf9528387/hqQWsUlUgq.lottie",
});

window.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.classList.add("hidden");
    }, 2000);
});