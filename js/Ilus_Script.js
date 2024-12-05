function openLightbox(image) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    lightboxImg.src = image.src;
    lightbox.style.display = "flex"; 
}

function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none"; 
    const lightboxImg = document.getElementById("lightbox-img");
    lightboxImg.src = ""; 
}


  