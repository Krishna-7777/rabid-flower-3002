
document.getElementById('submit').addEventListener('click', (event) => {
    event.preventDefault();
    window.location = "results.html";
    let squery = document.querySelector('form>input').value;
    
    
    localStorage.setItem('squery', squery);
})


let sdata=data.filter((element)=>element.includes(element.title));
console.log(sdata);



