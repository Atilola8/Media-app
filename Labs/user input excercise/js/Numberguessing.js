function checkNum() {
// declearing the answer to be 18 
    const answer = 18;
    var num = document.querySelector('#numInput').value;
    var message = document.querySelector('#message');

// This code i ran is to determine the answer to the guess number and show if it is wrong.
    if(num > answer) { 
        message.innerHTML = "that is too high";
    } else if (num < answer) {
        message.innerHTML = "that is too low";
    } else {
        message.innerHTML = "that is correct";
    } 
}

//This is to clear the inital guess after reloading. 
function clearBox() {
    document.querySelector('#numInput').value = '';
}