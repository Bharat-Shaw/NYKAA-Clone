document.querySelector("form").addEventListener("submit",saveData);
var lc=JSON.parse(localStorage.getItem("userData")) || [];
function saveData(){
    event.preventDefault();
    var name=document.getElementById("name").value;
var phone=document.getElementById("phone").value;
var email=document.getElementById("email").value;
var password=document.getElementById("password").value;
var obj={
    name:name,
    phone:phone,
    email:email,
    password:password
};
lc.push(obj);
console.log(lc);

localStorage.setItem("userData",JSON.stringify(lc));

}
