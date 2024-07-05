function showImage() {
    // Get the input value
    const imageNumber = document.getElementById('imageNumber').value;

    // Get the image container
    const imageContainer = document.getElementById('imageContainer');

    // Clear the previous image
    imageContainer.innerHTML = '';

    // Define the path format for the images
    const imagePath = `Database/${imageNumber}.jpeg`;

    // Create a new image element
    const img = document.createElement('img');
    img.src = imagePath;
    img.alt = `Image ${imageNumber}`;
    
    // Add the CSS class to the image
    img.classList.add('resized-image');

    // Check if the image exists
    img.onerror = function() {
        // If the image doesn't exist, show an error message
        imageContainer.innerHTML = '<p>Image not found. Please enter a valid number.</p>';
    };

    // Add the image to the container
    imageContainer.appendChild(img);
}
