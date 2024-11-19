let menu = document.getElementById("menu")
let closei = document.getElementById("close")
let mobile_nav_bar = document.getElementById("mobile_nav_bar")

menu.addEventListener("click",()=>{
    menu.style.display="none"
    closei.style.display="block"
    mobile_nav_bar.style.display="flex"

    closei.addEventListener("click",()=>{
        menu.style.display="block"
        closei.style.display="none"
        mobile_nav_bar.style.display="none"
    })
})