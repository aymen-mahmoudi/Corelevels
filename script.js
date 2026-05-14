const elementSymbolToNumber = {
    H: '1', HE: '2', LI: '3', BE: '4', B: '5', C: '6', N: '7', O: '8', F: '9', NE: '10',
    NA: '11', MG: '12', AL: '13', SI: '14', P: '15', S: '16', CL: '17', AR: '18', K: '19', CA: '20',
    SC: '21', TI: '22', V: '23', CR: '24', MN: '25', FE: '26', CO: '27', NI: '28', CU: '29', ZN: '30',
    GA: '31', GE: '32', AS: '33', SE: '34', BR: '35', KR: '36', RB: '37', SR: '38', Y: '39', ZR: '40',
    NB: '41', MO: '42', TC: '43', RU: '44', RH: '45', PD: '46', AG: '47', CD: '48', IN: '49', SN: '50',
    SB: '51', TE: '52', I: '53', XE: '54', CS: '55', BA: '56', LA: '57', CE: '58', PR: '59', ND: '60',
    PM: '61', SM: '62', EU: '63', GD: '64', TB: '65', DY: '66', HO: '67', ER: '68', TM: '69', YB: '70',
    LU: '71', HF: '72', TA: '73', W: '74', RE: '75', OS: '76', IR: '77', PT: '78', AU: '79', HG: '80',
    TL: '81', PB: '82', BI: '83', PO: '84', AT: '85', RN: '86', FR: '87', RA: '88', AC: '89', TH: '90',
    PA: '91', U: '92'
};

function toggleInputFields() {
    const imageCount = parseInt(document.getElementById('imageCount').value);
    const secondInputContainer = document.getElementById('secondInputContainer');

    secondInputContainer.style.display = imageCount === 1 ? 'none' : 'block';
}

function resolveAtomicNumber(value) {
    const trimmed = value.trim();
    if (!trimmed) {
        return null;
    }

    if (/^\d+$/.test(trimmed)) {
        return parseInt(trimmed);
    }

    const symbol = trimmed.toUpperCase();
    return elementSymbolToNumber[symbol] ? parseInt(elementSymbolToNumber[symbol]) : null;
}

function showImages() {
    const imageCount = parseInt(document.getElementById('imageCount').value);
    const sourceFolder = document.getElementById('sourceFolder').value;

    const imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = '';

    const imageValue1 = document.getElementById('imageNumber1').value;
    const imageValue2 = document.getElementById('imageNumber2').value;

    const atomicNumber1 = resolveAtomicNumber(imageValue1);
    if (!atomicNumber1) {
        alert('Please enter a valid atom symbol or atomic number for the first survey.');
        return;
    }

    appendImage(imageContainer, sourceFolder, atomicNumber1);

    if (imageCount === 2) {
        const atomicNumber2 = resolveAtomicNumber(imageValue2);
        if (!atomicNumber2) {
            alert('Please enter a valid atom symbol or atomic number for the second survey.');
            return;
        }
        appendImage(imageContainer, sourceFolder, atomicNumber2);
    }
}

function appendImage(container, sourceFolder, atomicNumber) {
    const imagePath = `Database/${sourceFolder}/${atomicNumber}.jpeg`;
    const img = document.createElement('img');
    img.src = imagePath;
    img.alt = `${sourceFolder} Image ${atomicNumber}`;
    img.classList.add('resized-image');
    img.onerror = function() {
        container.innerHTML = `<p>The entered symbol or number is not valid or the atom is not included in the ${sourceFolder} source.<br>Please try again.</p>`;
    };
    container.appendChild(img);
}
