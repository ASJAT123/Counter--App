const count = document.querySelector(".count")
const minus = document.querySelector(".minus-btn")
const plus = document.querySelector(".plus-btn")
const input = document.querySelector(".input1")
const reset = document.querySelector(".reset-btn")

minus.addEventListener("click",()=>{
   const count2 = parseInt(count.innerText)
    count.innerText = count2 - parseInt(input.value ||0)
   
})
plus.addEventListener("click",()=>{
   const count2 = parseInt(count.innerText)
    count.innerText = count2 + parseInt(input.value ||0  )   

   
})
reset.addEventListener("click",()=>{
   count.innerText= 0

   
})


