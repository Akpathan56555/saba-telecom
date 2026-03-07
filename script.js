// WHATSAPP BUY

function buy(name){
let phone="919978256555"
let msg="Hello SABA TELECOM, I want to buy "+name
window.open("https://wa.me/"+phone+"?text="+encodeURIComponent(msg))
}


// SEARCH

function searchMobile(){
let input=document.getElementById("search").value.toLowerCase()
let products=document.querySelectorAll(".product")

products.forEach(p=>{
let name=p.innerText.toLowerCase()

if(name.includes(input)){
p.style.display=""
}else{
p.style.display="none"
}
})
}


// FILTER

function filterBrand(brand){

let products=document.querySelectorAll(".product")

products.forEach(p=>{

if(brand=="all"){
p.style.display=""
}
else if(p.classList.contains(brand)){
p.style.display=""
}
else{
p.style.display="none"
}

})
}


// SLIDER

var images=["banner1.png","banner2.png","banner3.png"]

var i=0

function slide(){

var slideImg=document.getElementById("slide")

if(slideImg){

slideImg.src=images[i]

i++

if(i==images.length){
i=0
}

}

}

setInterval(slide,3000)


// DEFAULT MOBILES

let defaultMobiles=[

{
name:"IQ Z6 Lite 5G",
ram:"6GB / 128GB",
price:"28000",
image:"IQ z6 lite 5g.jpeg",
video:"",
brand:"IQ"
},

{
name:"Realme 7",
ram:"6GB / 128GB",
price:"8000",
image:"realme7.jpeg",
video:"",
brand:"Realme"
},

{
name:"Realme 11x 5G",
ram:"8GB / 128GB",
price:"10000",
image:"realme 11x 5g.jpeg",
video:"",
brand:"Realme"
},

{
name:"Motorola G72",
ram:"6GB / 128GB",
price:"10000",
image:"motorolag72.jpeg",
video:"",
brand:"Motorola"
},

{
name:"Redmi Note 7 Pro",
ram:"4GB / 64GB",
price:"8000",
image:"redmi note 7 pro.jpeg",
video:"",
brand:"Redmi"
},

{
name:"Samsung Galaxy F23 5G",
ram:"6GB / 128GB",
price:"25000",
image:"samsung galaxy f23 5g.jpeg",
video:"",
brand:"Samsung"
}

]


// ADMIN PANEL MOBILES

let savedMobiles=JSON.parse(localStorage.getItem("mobiles")) || []

let mobiles=[...defaultMobiles,...savedMobiles]


// SHOW MOBILES

let html=""

mobiles.forEach(m=>{

html+=`

<div class="product ${m.brand}">

<img src="${m.image}">

${m.video ? `<video controls width="100%">
<source src="${m.video}" type="video/mp4">
</video>` : ""}

<h3>${m.name}</h3>

<p>Ram: ${m.ram}</p>

<p class="price">₹${m.price}</p>

<button onclick="buy('${m.name}')">Buy on WhatsApp</button>

</div>

`

})

document.getElementById("products").innerHTML=html



// IMAGE ZOOM

document.querySelectorAll(".product img").forEach(img=>{

img.addEventListener("click",function(){

let popup=document.createElement("div")

popup.style.position="fixed"
popup.style.top="0"
popup.style.left="0"
popup.style.width="100%"
popup.style.height="100%"
popup.style.background="rgba(0,0,0,0.9)"
popup.style.display="flex"
popup.style.justifyContent="center"
popup.style.alignItems="center"

popup.innerHTML="<img src='"+this.src+"' style='max-width:90%;max-height:90%'>"

popup.onclick=function(){
document.body.removeChild(popup)
}

document.body.appendChild(popup)

})

})


// REPAIR BUTTON

function repair(){

let phone="919978256555"

let msg="Hello SABA TELECOM, I want to repair my mobile"

window.open("https://wa.me/"+phone+"?text="+encodeURIComponent(msg))

}


let repairServiceName=""

function openRepair(service){

repairServiceName=service

document.getElementById("problemType").value=service

document.getElementById("repairForm").style.display="flex"

}

function closeForm(){

document.getElementById("repairForm").style.display="none"

}

function sendRepair(){

let name=document.getElementById("custName").value
let model=document.getElementById("mobileModel").value
let problem=document.getElementById("problemType").value

let phone="919978256555"

let msg="Hello SABA TELECOM%0AName: "+name+"%0AMobile Model: "+model+"%0AProblem: "+problem

window.open("https://wa.me/"+phone+"?text="+msg)

}