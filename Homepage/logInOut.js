let statu=JSON.parse(localStorage.getItem('login')) ;
let redirect=document.getElementById('statb');
let name=JSON.parse(localStorage.getItem('data')).fname;
if(statu ){
    let stat=document.getElementById('status');
    stat.innerText=name;
    redirect.classList.add("logout");
    redirect.addEventListener('click',()=>{
        alert("See You Soon!")
        localStorage.setItem('login',false);
        statu=false;
        window.location="Index.html";
    })
    }else{
       redirect.addEventListener('click',()=>{
        window.location="SignIn.html";
    }) 
    }