function defaultImage(image) {
    image.onerror = "";
    image.src = "/img/broken.jpg";
    return true;
}