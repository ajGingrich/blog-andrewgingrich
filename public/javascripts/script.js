$('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
});

function defaultImage(image) {
    image.onerror = "";
    image.src = "/img/broken.jpg";
    return true;
}