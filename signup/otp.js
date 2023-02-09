document.querySelector("form").addEventListener("submit",saveData);

const defaultOtp=1234;
function saveData(){
    event.preventDefault();
  
var otp=document.getElementById("otp").value;
if(defaultOtp==otp){
    window.location.href="./index.html";
}



}
