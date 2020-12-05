console.log("yo");


var navItem = document.getElementsByClassName("navItem");
var selectedDivItem = null;

var divContents = { one: "#FF0000",
two: "00FF00",
three: "0000FF"
}


var divContents2 = {

        one: "red",
        two: "green",
        three: "blue"


}
   



for (var i = 0; i < navItem.length; i++){
navItem[i].addEventListener("click", onDivCLicked);


}

function onDivCLicked(event) {



    
/* if(selectedDivItem != null){
selectedDivItem.classList.remove("selected");
}

event.target.classList.add("selected"); */

selectedDivItem = event.target;


var divName = event.target.getAttribute("data-page");

selectedDivItem.style.backgroundColor = divContents[divName];
selectedDivItem.innerHTML = divContents2[divName];





}



 
/* 
function boxes(){

    for (var i = 0; i < 3; i++){
        let newDv = document.createElement("div");
        newDv.style.width = 200 + "px";
        newDv.style.height = 200 + "px";
        newDv.style.backgroundColor = "#808080";
        newDv.style.cssFloat = "left";
        newDv.style.margin = 5 + "px";
        document.body.appendChild(newDv);


        
        


    }

}
boxes();

function doThis(){
  
    



} */