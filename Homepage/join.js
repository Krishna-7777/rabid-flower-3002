let tdata=[];
function storeData(){
let fname=document.getElementById('fn').value;
let nname=document.getElementById('nn').value;
let email=document.getElementById('em').value;
let pass=document.getElementById('pa').value;
let chkemail=(JSON.parse(localStorage.getItem('data')).email)||undefined;
if(fname==""|| email==""|| pass==""||nname==""){
    alert("All Fields are Required")
}else if(email==chkemail){
    alert("This mail exists\nPlease Sign In");
    window.location="SignIn.html";
}
else{

let data={fname,email,pass};

localStorage.setItem("data",JSON.stringify(data))
alert("You have joined Trippy!")
localStorage.setItem('login',true);
window.location="Index.html"
}}

document.getElementById('submit').addEventListener('click',(event)=>{
    event.preventDefault();
    storeData();
})