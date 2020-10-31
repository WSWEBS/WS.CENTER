document.getElementById("main").style.width = screen.width + "px" + "-10px" ;
// document.getElementById("main").style.height = screen.height + "px"  ;



let phone = navigator.userAgent.toLocaleLowerCase();
if(phone.includes("android")){
document.getElementById("h3").innerHTML= "<h5>WS CENTER</h5>"   ;
document.getElementById("img").style.width= "70px" ;
document.getElementById("img").style.objectFit="cover";
document.getElementById("main").style.height="1900px";
}else if(phone.includes("iphone")){
    document.getElementById("main").style.height="1900px";
}





function url(){
    window.open("https://wswebs.github.io/ENCODER/hash.html");
   
}
function url2(){
    window.open("https://wswebs.github.io/Radio_alarab/radio2")
}
function url3(){
    window.open("https://wswebs.github.io/W.S.A/W.A.V.html")
}






