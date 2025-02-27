document.querySelectorAll('.zoomable').forEach(item => {
    item.addEventListener('click', function () {
        const fullscreenView = document.getElementById('fullscreen-view');
        const fullscreenImg = document.getElementById('fullscreen-img');
        const fullscreenVideo = document.getElementById('fullscreen-video');

        fullscreenView.style.display = "flex";

        if (this.tagName === "IMG") {
            fullscreenImg.src = this.src;
            fullscreenImg.style.display = "block";
            fullscreenVideo.style.display = "none";
        } else if (this.tagName === "VIDEO") {
            fullscreenVideo.src = this.querySelector("source").src;
            fullscreenVideo.style.display = "block";
            fullscreenImg.style.display = "none";
        }
    });
});

document.getElementById('close-btn').addEventListener('click', function () {
    document.getElementById('fullscreen-view').style.display = "none";
});