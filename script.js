const count = document.querySelector(".count")
const minus = document.querySelector(".minus-btn")
const plus = document.querySelector(".plus-btn")
const input = document.querySelector(".input1")
const reset = document.querySelector(".reset-btn")

minus.addEventListener("click",()=>{
   const count2 = parseInt(count.innerText)
    count.innerText = count2 - 1
   
})
plus.addEventListener("click",()=>{
   const count2 = parseInt(count.innerText)
    count.innerText = count2 + 1
   
})
reset.addEventListener("click",()=>{
   input.innerText = parseInt(0)
   
})


