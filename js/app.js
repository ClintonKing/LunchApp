$(document).ready(function(){
    console.log("Ready!");
});


/*OnClick Event*/

function ImageClick() {
    if (document.getElementById("Triangle").src == "images/tri_green"){
        document.getElementById("Triangle").src = "images/tri_red"
    }
      else if (document.getElementById("Triangle").src == "images/tri_red") {
        document.getElementById("Triangle").src = "images/tri_green"
        }  
    }