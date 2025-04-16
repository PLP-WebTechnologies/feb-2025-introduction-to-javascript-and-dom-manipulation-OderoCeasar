// Change text content dynamically
document.getElementById('changeTextButton').addEventListener('click', function() {
    document.getElementById('dynamicText').textContent = "Text has been changed!";
});

// Modify CSS styles via JavaScript
document.getElementById('toggleStyleButton').addEventListener('click', function() {
    const textElement = document.getElementById('dynamicText');
    textElement.classList.toggle('highlight');
});

// Add or remove an element when a button is clicked
document.getElementById('addElementButton').addEventListener('click', function() {
    const newElement = document.createElement('p');
    newElement.textContent = "This is a new paragraph!";
    document.getElementById('elementContainer').appendChild(newElement);
});

document.getElementById('removeElementButton').addEventListener('click', function() {
    const container = document.getElementById('elementContainer');
    if (container.lastChild) {
        container.removeChild(container.lastChild);
    }
});