document.querySelector("form").addEventListener("submit",saveData);
var sData=JSON.parse(localStorage.getItem("signInData")) || [];

function saveData(){
    event.preventDefault();
  
var otp=document.getElementById("otp").value;
if(otp){
    var data=JSON.parse(localStorage.getItem("dataExist"));
    sData.push(data);
    localStorage.setItem("signInData",sData);
    window.location.href="./products.html";
}



}
