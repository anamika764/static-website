setInterval(changeButtonColor, 1000); // Change color every second

function changeButtonColor() {
    var button = document.getElementById("readMoreBtn");
    var randomColor = getRandomColor();
    button.style.backgroundColor = randomColor;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}