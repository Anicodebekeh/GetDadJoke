const menu = document.querySelector("#menu");
const close =document.querySelector("#close");
const sidebar=document.querySelector(".side-bar")




menu.addEventListener("click", function (){
    sidebar.style.display ="block"
    menu.style.display="none"
    close.style.display="block"
})

close.addEventListener("click", function (){
    sidebar.style.display ="none"
    menu.style.display="block"
    close.style.display="none"
})




// function openMenu(){
//     menu.classList.add('right-menu')
//     close.style.display ="block"
//     menu.classList.add("hide")
//     // menu.style.visibility ="hidden"
//     // menu.style.display="none"
    
// }


// menu.addEventListener('click', openMenu
//     // menu.classList.add('right-menu')
  
//     // close.style.display ="block"
//     // menu.style.display="none"
// )

// close.addEventListener("click", () => {
//     menu.classList.remove("right-menu")
//     close.style.display ="none"

// })