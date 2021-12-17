const zdj=document.querySelector(".content__slider__first")
const h1=document.querySelector(".content__slider__zdj__h1")
let content=document.querySelector(".content")
let napis = document.querySelector(".content__slider__zdj__napis")
let button=document.querySelector(".content__slider__buttons")


let cytaty=["True friends are like diamonds — bright, beautiful, valuable, and always in style.","Follow your heart, but take your brain with you.","Be Brave, Be Bold, Be Beautiful, Be You.","Always Look On The Bright Side Of Life.","Difficult roads often lead to beautiful destinations.","Collect Moments Not Things.","Beauty is in the eye of the beholder.","Between the pages of a book is a lovely place to be."]
let cytat=cytaty[Math.floor(Math.random()*cytaty.length)]
h1.textContent="loading..."

let img=[{plik:"tlo1.png",text:""},{plik:"tlo2.png",text:""},{plik:"tlo3.png",text:""}]
let index=0
setInterval(()=>{
    if(index===3)return index=0
img[index].text=cytaty[Math.floor(Math.random()*cytaty.length)]

zdj.src=img[index].plik
h1.innerHTML=img[index].text

let button=[...document.querySelectorAll(".content__slider__buttons__a")]

let active=button.findIndex(el=>el.classList.contains("active"))

button[active].classList.remove("active")
button[index].classList.add("active")
index++

console.log(active)
/////////////
let trzy=content.scrollTop
console.log(window.scrollY)
},2000)

setInterval(()=>{
    console.log(window.scrollY)
    if(window.scrollY>=130){
napis.style.opacity="0"
    }
    else if(window.scrollY<=130)
    {
    napis.style.opacity="1"
    }

    if(window.scrollY>=220){
        button.style.opacity="0"
            }
            else if(window.scrollY<=220)
            {
                button.style.opacity="1"
            }

},100)