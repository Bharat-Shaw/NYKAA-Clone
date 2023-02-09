document.querySelector("form").addEventListener("submit",saveData);
var lc=JSON.parse(localStorage.getItem("userData")) || [];

function saveData(){
    event.preventDefault();
  
var email=document.getElementById("email").value;

if(lc.length==0){
    window.location.href="./signup.html"; 
}
else{
var x=lc.filter(function(elem){
    return elem.email===email;
})
//console.log(x);
if(x.length!=0){
window.location.href="./otp.html"
}
else{
    window.location.href="./signup.html";  
}
}



}
