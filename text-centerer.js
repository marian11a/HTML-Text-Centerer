document.addEventListener('mouseover', function(event) {
    var element = event.target;
    element.style.outline = '2px solid blue';
});

document.addEventListener('mouseout', function(event) {
    var element = event.target;
    element.style.outline = '';
});

document.addEventListener('click', function(event) {
    var element = event.target;
    var currentTextAlign = element.style.textAlign;

    if (!currentTextAlign || currentTextAlign === 'left') {
        element.style.textAlign = 'center';
    } else if (currentTextAlign === 'center') {
        element.style.textAlign = 'right';
    } else {
        element.style.textAlign = 'left';
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the default behavior of the Enter key (e.g., submitting forms)

        generateNewHTML();
    }
});

function generateNewHTML() {
    var htmlContent = document.documentElement.outerHTML;

    // Create a new Blob object containing the HTML content
    var blob = new Blob([htmlContent], {type: 'text/html'});

    // Create a temporary anchor element to download the file
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'centered_html.html';
    document.body.appendChild(a);
    a.click(); // Trigger the click event to start downloading
    document.body.removeChild(a); // Clean up the temporary anchor element
}