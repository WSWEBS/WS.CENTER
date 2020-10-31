

let arbc = document.getElementById("ar");
let english = document.getElementById("en");
let title = document.getElementById("div1");
let par = document.getElementById("p1");
let par2 = document.getElementById("p2");
let par3 = document.getElementById("p3");
let h21 = document.getElementById("h11");
let pr4 = document.getElementById("p4");
arbc.onclick= ()=>{
setlng("arbc");
localStorage.setItem("lang","arbc");
};
english.onclick = ()=>{
  setlng("english");
  localStorage.setItem("lang","english");
};

onload = ()=>{
 setlng(localStorage.getItem("lang"));
};
function setlng(getlng){
  if(getlng === "arbc"){
  title.innerHTML = "<h5>مواقعي الكترونية </h5>";
  par.innerHTML="موقع للتشفير وفك التشفير بنظام 64 بت";
par2.innerHTML="تطبيق ويب  للاستماع للراديو  بمظهر عصري  ";
par3.innerHTML="موقع لعشاق ومحبي علي نجم";
h21.innerHTML="حقوق الملكية";
pr4.innerHTML="تم إنشاء جميع المواقع من قبل وقاص السعدون";

}

else if(getlng === "english"){
title.innerHTML = "MY Websites";
par.innerHTML="website for encoding   and  decoding with system 64 bit";
par2.innerHTML="It's an application for listening radio with a modern look";
par3.innerHTML="It's a website for Ali Najam fans and lovers";
h21.innerHTML="PROPERTY RIGHTS";
pr4.innerHTML="All websites are created by waqqas alsadoon";
}
}

