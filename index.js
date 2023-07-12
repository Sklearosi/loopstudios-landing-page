let burger = document.getElementById("burger")
let menu = document.getElementById("menu-div")
let body = document.querySelector("body")
let closeMenu = document.getElementById("xmark")


burger.addEventListener("click", () => {
    menu.classList.toggle("active")
    body.classList.add("preventscroll")
    
})


closeMenu.addEventListener("click", () => {
    menu.classList.toggle("active")
    body.classList.remove("preventscroll")
 
})

