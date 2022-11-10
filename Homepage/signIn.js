let data=JSON.parse(localStorage.getItem('data'));
let chkemail=data.email;
let chkpass=data.pass;


function checkdata(){
let email=document.getElementById('em').value;
let pass=document.getElementById('pa').value;

if(email==""|| pass==""){
    alert("All Fields are Required")
}else if(email==chkemail&&pass==chkpass){
alert("Welcome back! \nSign In Successful")
localStorage.setItem('login',true);
window.location="Index.html"
}else if(email==chkemail){
    alert("Wrong Password \nPlease Try Again");
window.location="SignIn.html"
}else{
    alert("This email don't exist\nPlease join!")
window.location="Join.html"
}}

document.getElementById('submit').addEventListener('click',(event)=>{
    event.preventDefault();
   checkdata();
})


