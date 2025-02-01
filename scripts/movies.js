const lenis = new Lenis({
    autoRaf: true,
  });


const categoryLinkELem = document.querySelectorAll(".categoryLink");
const homeImgELem = document.querySelector(".home-wallpaper-container").querySelector("img");
const homeImgBoderElem = document.querySelector(".homeImgBorder");

categoryLinkELem.forEach(categoryLink => {
    categoryLink.addEventListener("click",function(){
        categoryLinkELem.forEach(link => {
            if (link.classList.contains("active-link")){
                link.classList.remove("active-link")
                link.querySelector("div").style.setProperty("height","0%");
                link.querySelector("div").style.setProperty("bottom","0");
            }
            
        })
        categoryLink.classList.add("active-link");
        gsap.to(categoryLink.querySelector("div"),{
            height:"200%",
            duration:0.3,
            bottom:"-200%"
        })
    })
})

function homeImgLoader(img,imgBorder){
    window.onload = function(){
        imgBorder.style.setProperty("display","block")
    }
}
homeImgLoader(homeImgELem,homeImgBoderElem)

let closingBtnHello = document.querySelector(".movieLayers-fullscreen .nav i")
closingBtnHello.addEventListener("click",function(){
    let tl = gsap.timeline()
    tl.to(".movieLayers-fullscreen",{
        overflowY:"hidden",
        duration:0.05,
        ease:"power2.inOut"
    }) 
    tl.to(".movieLayers-fullscreen .nav i",{
        scale:0,
        // top:0,
        duration:0.2,
        ease:"power2.inOut"
    },">")
    tl.to(".movieLayers-fullscreen section .columns",{
        opacity:0,
        transform: "translateY(5%)",
        duration:0.5,
        ease:"power2.inOut"
    },">")
    tl.to(".movieLayers-fullscreen",{
        opacity:1,
        top:'-100%',
        // height:"0",
        duration:0.5,
        pointerEvents:"none",
        ease:"power2.inOut"
    }) 
    setTimeout(() => {
        document.querySelector("body").classList.remove("no-scroll")  
    }, 1300);
})