document.querySelector("form").addEventListener("submit",saveData);
var sData=JSON.parse(localStorage.getItem("signInData")) || [];

const defaultOtp=1234;
function saveData(){
    event.preventDefault();
  
var otp=document.getElementById("otp").value;
if(defaultOtp==otp){
    var data=JSON.parse(localStorage.getItem("dataExist"));
    sData.push(data);
    localStorage.setItem("signInData",sData);
    window.location.href="./products.html";
}



}
