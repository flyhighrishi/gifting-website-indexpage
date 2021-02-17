var circle=document.getElementById("circle");
var upBtn=document.getElementById("upBtn");
var downBtn=document.getElementById("downBtn");
var rotateValue=circle.style.transform;
var rotateSum;
var color1=["#161d6f","#350b40","#1e212d","#121013"]
upBtn.onclick=function(){
    rotateSum=rotateValue+"rotate(-90deg)";
    circle.style.transform=rotateSum;
    rotateValue=rotateSum;
}
downBtn.onclick=function(){
    rotateSum=rotateValue+"rotate(+90deg)";
    circle.style.transform=rotateSum;
    rotateValue=rotateSum;
}
var i=0;
document.querySelector("upBtn").addEventListener("click",function(){
    i=1<color1.length ? ++i:0;
    document.querySelector("body").style.background=color1[i];
})