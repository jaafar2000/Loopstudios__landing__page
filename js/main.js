
let img = document.querySelector(".open__close__menu");
let mobileMenu = document.querySelector(".mobile__menu")

img.addEventListener("click",function(){
    if (img.classList.contains("H__menu")){
        img.classList.replace("H__menu","c__menu");
        if (mobileMenu.classList.contains("hide")){
            mobileMenu.classList.replace("hide","show")
        }else {
            mobileMenu.classList.add("show")
        }


    }else if(img.classList.contains("c__menu")){
        img.classList.replace("c__menu","H__menu");
        mobileMenu.classList.replace("show","hide")
    }
})