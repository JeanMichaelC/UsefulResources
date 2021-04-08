var modal = document.getElementById('galleryModal');

// Click listener for all gallery items
var galleryItem = document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', event => {
        // Gets attr from clicked element
        var image = item.querySelectorAll('.gallery-image');
        var source = '' + image[0].getAttribute('src');

        // Sets attr from modalImage
        document.getElementById('modalImage').setAttribute('src', source);

        // Shows the modal
        var modal = document.getElementById('galleryModal');
        modal.style.display = 'flex';  
    });
});

// Now we close the modal
modal.onclick = function() {
    modal.style.display = 'none';
}