var dvInput = document.getElementById("dvInput");
//var userTxt = document.getElementById("userTxt");
//var vv = userTxt.split(" ")[1];

dvInput.style.backgroundColor = "#D2B48C";
dvInput.style.height = 100 + "%";
dvInput.style.width = 100 + "%";
//var newDv = document.createElement("div");
//newDv.innerH;
function doThis(){

    var userTxt = document.getElementById("userTxt").value;
    userTxt = userTxt.toLowerCase();

    var check = userTxt.split(" ");
    var badWords = ["clear", "water", "tires"];

    var foundBadWords = check.filter(ya => badWords.includes(ya));

    document.getElementById("wordsFound").innerHTML = foundBadWords.join(", ");
    document.getElementById("wordsAmt").innerHTML = foundBadWords.length;
    document.innerHTML = "the bad word was ";

    console.log(foundBadWords);
    dvInput.style.backgroundColor = "#D2B48C";
    dvInput.style.height = 100 + "%";
    dvInput.style.width = 100 + "%";
}
   // var txt = userTxt.value;

    

//    txt.innerHTML = txt;
//var txt = userTxt.value;


//document.write(txt);

  //  console.log(txt);




