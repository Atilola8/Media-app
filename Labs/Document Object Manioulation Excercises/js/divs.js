for (var i = 0; i < 100; i++) {
    // We need something to add our new element too
    let target = document.querySelector("#divs");
    // Now we have to create a NEW element
    let box = document.createElement('div');
    // Removed the float for the answer as they will stack on top other wise.
    box.style.float = "left";
    box.style.height = "20px";
    box.style.width = "20px";
    box.style.backgroundColor = randomColor();
    // Now we add it to our Div
    target.appendChild(box);
}

// basically changing the color of the divs when reloading. 
function randomColor() {
    var r = Math.round(Math.random() * 255);
    var g = Math.round(Math.random() * 255);
    var b = Math.round(Math.random() * 255);
    var colorString = "rgb(" + r + "," + g + "," + b + ")";
    return colorString;
}

