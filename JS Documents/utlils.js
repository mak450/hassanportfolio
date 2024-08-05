let menu = document.querySelector(".menu")
let sidebar = document.querySelector(".sidebar")

menu.addEventListener("click", ()=>{
sidebar.style.width = "90%"
})


sidebar.querySelector(".cross").addEventListener("click",()=>{
    sidebar.style.width = "0"
})



