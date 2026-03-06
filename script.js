function buy(product){

var phone="919978256555"

var message="Hello I want to buy "+product+" from SABA TELECOM"

var url="https://wa.me/"+phone+"?text="+encodeURIComponent(message)

window.open(url)

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


// IMAGE SLIDER

var images=["banner1.jpg","banner2.jpg","banner3.jpg"]

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