let span1 =document.querySelector(".navbar-toggler-icon");
let span2 =document.querySelector(".remove");
span1.addEventListener("click",()=>{
    span1.classList.toggle("remove");
    span2.classList.toggle("remove");
})
span2.addEventListener("click",()=>{
    span1.classList.toggle("remove");
    span2.classList.toggle("remove");
})

let menu = document.querySelector(".short span");
let short = document.querySelector(".short")
menu.addEventListener("click",(e)=>{
    short.classList.toggle("open")
})
window.onscroll=(e)=>{
    if(scrollY >= 56){
        menu.style.cssText = "display:inherit";
    }else if(scrollY < 56){
        menu.style.cssText = "display:none";
    }
};

let moreBtn = document.querySelector(".projects .more");
let hideBox = document.querySelectorAll(".projects .content .hide");
let h6 = document.querySelectorAll(".projects .more h6")
console.log(h6)
moreBtn.addEventListener("click",()=>{
    hideBox.forEach((e)=>{
        e.classList.toggle("hide");
    });
    h6.forEach((e)=>{
        e.classList.toggle("hide");
    });
});
