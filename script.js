function toggleInputFields() {
    const imageCount = parseInt(document.getElementById('imageCount').value);
    const secondInputContainer = document.getElementById('secondInputContainer');

    if (imageCount === 1) {
        secondInputContainer.style.display = 'none';
    } else {
        secondInputContainer.style.display = 'block';
    }
}

function showImages() {
    const imageCount = parseInt(document.getElementById('imageCount').value);

    let imageNumber1 = document.getElementById('imageNumber1').value.trim();
    let imageNumber2 = document.getElementById('imageNumber2').value.trim();

    const imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = '';

    if (imageNumber1 === '' || isNaN(imageNumber1)) {
        alert('Please enter a valid atomic number for the first survey.');
        return;
    }

    imageNumber1 = parseInt(imageNumber1);

    const firstImagePath = `Database/${imageNumber1}.jpeg`;
    const firstImg = document.createElement('img');
    firstImg.src = firstImagePath;
    firstImg.alt = `Image ${imageNumber1}`;
    firstImg.classList.add('resized-image');
    firstImg.onerror = function() {
        imageContainer.innerHTML = '<p>The entrerd number is either not valid or the corresponding atom is not included in the book.<br>Please try again</p>';
    };
    imageContainer.appendChild(firstImg);

    if (imageCount === 2) {
        if (imageNumber2 === '' || isNaN(imageNumber2)) {
            alert('Please enter a valid atomic number for the second survey.');
            return;
        }

        imageNumber2 = parseInt(imageNumber2);

        const secondImagePath = `Database/${imageNumber2}.jpeg`;
        const secondImg = document.createElement('img');
        secondImg.src = secondImagePath;
        secondImg.alt = `Image ${imageNumber2}`;
        secondImg.classList.add('resized-image');
        secondImg.onerror = function() {
            imageContainer.innerHTML = '<p>The entrerd number is either not valid or the corresponding atom is not included in the book.<br>Please try again</p>';
        };
        imageContainer.appendChild(secondImg);
    }
}

document.getElementById('imageNumber1').addEventListener('input', function() {
    this.value = this.value.replace(/\D/g, ''); 
});

document.getElementById('imageNumber2').addEventListener('input', function() {
    this.value = this.value.replace(/\D/g, ''); 
});
