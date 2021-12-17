/////////////////////////////////////////////////////// index 2
let dunText=document.querySelector(".index2__text")
let dziobak=document.querySelector(".index2__dziobak")
let button=document.querySelector("button")
let textIndex=0
let textLetter=0
let tablica=["Siema co tam slychac?","Widzieliscie tego dziobaka ?","Jak go złapie....","Gdzie on sie schował?"]
dunText.style.fontSize="20px"

setTimeout(()=>{ let marcin=  setInterval(()=>{


    dunText.innerHTML+=tablica[textIndex][textLetter]
    textLetter++
    if(textLetter===tablica[textIndex].length){
        textLetter=0
        textIndex++
        dunText.innerHTML=""
        if(textIndex===tablica.length){
            dunText.innerHTML=""
            textIndex=0
            setTimeout(()=>{
                console.log("wait")
            },3000)
        }
    }
    
    
    
    },150)
},2000)

 button.addEventListener("click",()=>{
    window.location ="index.html";
 })

