function makegreen () {
    document.querySelector(".inputparent").style.background = "#8DD3BB";
    document.querySelector(".inputparent1").style.background = "none";
    document.querySelector(".radio2").display = "none";
    document.querySelector(".inputparent3").style.background = "none";
}
function makegreen1 () {
    document.querySelector(".inputparent1").style.background = "#8DD3BB";
    document.querySelector(".inputparent").style.background = "none";
    document.querySelector(".radio1").display = "none";
    document.querySelector(".radio3").display = "none";
    document.querySelector(".inputparent3").style.background = "none";
}

function makegreen2 () {
    document.querySelector(".inputparent3").style.background = "#8DD3BB";
    document.querySelector(".inputparent").style.background = "none";
    document.querySelector(".radio1").display = "none";
    document.querySelector(".inputparent1").style.background = "none";
}

function popupmodal(){
    document.getElementById("modal").style.background = "rgba(0, 0, 0, 0.467)";
    document.getElementById("modalcard").style.display = "flex";
    document.getElementById("modalcard").style.display = "flex";
    document.getElementById("modal").style.display = "flex";
}
function closemodal(){
    document.getElementById("modalcard").style.display = "none";
    document.getElementById("modal").style.display = "none";
}