let squery=localStorage.getItem("squery");
let newData=[];
newData=data.filter(element=>{
    return element.title.toLowerCase().includes(squery);
})
let trips=JSON.parse(localStorage.getItem("trips"))||[];
console.log(newData);
newData.forEach((element,index) => {
    let box=document.createElement('div');
    let box1=document.createElement('div');
    let box2=document.createElement('div');
    let image=document.createElement('img');
    let name=document.createElement('h3');
    let n=document.createElement('h4');
    let p1=document.createElement('p');
    let p2=document.createElement('p');
    let p3=document.createElement('p');

    name.setAttribute('style',"display:inline;")
    n.classList.add("heart");
         n.innerHTML='<i class="fa-regular fa-heart"></i>';
   
    
    image.setAttribute('src',element.image.url)
    name.innerHTML=element.title;
    p1.innerText=element.secondaryText;
    p2.innerText="Reviews and Opinions";
    let r=Math.random()*(15274-1234)+(1234);
    p3.innerText=Math.ceil(r);

    box1.append(image);
    box2.append(name,p1,p2,p3);
    box.append(n,box1,box2);
    document.getElementById('display').append(box);

    n.addEventListener('click',()=>{
        
        n.innerHTML='<i class="fa-solid fa-heart"></i>';
            for (let i in trips) {
              if (trips[i] == element) {
                return alert("Product Already in Trips\nFavourite Section" )
              }
            }
            trips.push(element);
            localStorage.setItem('trips', JSON.stringify(trips));
            alert("Product Added To Trips");
          
    })
});
