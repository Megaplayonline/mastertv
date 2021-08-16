/*JS SEARCH FILTRADO*/
$(document).ready(function(){
$('#myInput').on('input',function(){
var value = $(this).val().toLowerCase();
$('.card').filter(function(){
$(this).toggle($(this).find('a').attr('title').toLowerCase().indexOf(value) > -1)
});});});
/*FIN SEARCH FILTRADO*/

//load window

window.onload = function(){
    //code
    document.getElementById("load").style.display = "none";
    
document.getElementById("home").style.display = "block";    
}

/*setTimeout(function(){
    document.getElementById("load").style.display = "none";
    
document.getElementById("home").style.display = "block";    
}, 5000);*/


window.onscroll = function() { 
var scroll = window.pageYOffset; 
if (scroll > 20) {
document.getElementById("header").style.display = "none"; } 
else { 
   document.getElementById("header").style.display = "initial"; 

    } 

}


//image slider
setInterval ( function changeImg () { 
    
     var img = document.querySelector("#img-slide");
     var img2 = document.querySelector("#img-slide2");
     var img3 = document.querySelector("#img-slide3");
     var img4 = document.querySelector("#img-slide4");
         
    img.src = images[counter];
    img2.src = images[counter];
    img3.src = images[counter];
    img4.src = images[counter];
    counter++;
    
    if(counter > images.length - 1){
        counter = 0;
    }
}, 2000);


//tabs
function tabs(tabc) {
    var i;
    var tabs = document.getElementsByClassName("tabsc");
    for (i = 0; i < tabs.length; i++) {
       tabs[i].style.display = "none";  
    }
    document.getElementById(tabc).style.display = "block";  
}
