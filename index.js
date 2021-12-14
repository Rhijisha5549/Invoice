//Add Button Functionality//
document.getElementById("search_b").addEventListener('click', search);
function search(){
    //alert("Hello");
    var SearchBtn = document.getElementById("search_b");
    var modalBg1 = document.getElementById("bg1");
    var span_a1 = document.getElementById("close_cross1");
    var span_a2 = document.getElementById("cancel1");
    
    SearchBtn.onclick = function (){
        modalBg1.style.display = "block";
        window1.style.opacity = "0.75";
    }
    //For Close sign ('X') at the header section of the modal//
    span_a1.onclick = function (){
        modalBg1.style.display = "none";
        window1.style.background ="#58687E";
        window1.style.opacity = "1";
    }
    //For Cancel button//
    span_a2.onclick = function (){
        modalBg1.style.display = "none";
        window1.style.background ="#58687E";
        window1.style.opacity = "1";

    }
}

