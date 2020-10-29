//the function of this code is to print hello and the value the user input. 
function sayHello() {
    let txtName = document.querySelector("#txtName");
let dvOutput = document.querySelector("#dvOutput");
    dvOutput.innerHTML = "Hello" + txtName.value;
}
