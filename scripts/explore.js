const lenis = new Lenis({
    autoRaf: true,
  });

const imgConsElems = document.querySelectorAll(".img-container");

imgConsElems.forEach(imgCon =>{
    imgCon.addEventListener("click",function(){
        const imgSrc = imgCon.querySelector("img").getAttribute("src")
        const fullScreenElem = document.querySelector(".full-screen");

        fullScreenElem.querySelector("img").setAttribute("src",imgSrc)

        setTimeout(() => {
            gsap.to(".full-screen",{
                transform:"translate(-50%,-50%)",
                opacity:1,
                pointerEvents:"all",
                duration:0.3,
            })
        },20);
        
        document.querySelector("main").classList.add("no-scroll");
    })
})



imgConsElems.forEach(imgCon =>{
    imgCon.addEventListener("mouseenter",function(){
        gsap.to(imgCon.querySelector("img"),{
            filter:"brightness(0.2)",
            duration:0.1
        })
        gsap.to(imgCon.querySelector("h4"),{
            opacity:1,
            duration:0.1
        })
        
    })
    imgCon.addEventListener("mouseleave",function(){
        gsap.to(imgCon.querySelector("img"),{
            filter:"brightness(1)",
            duration:0.1
        })
        gsap.to(imgCon.querySelector("h4"),{
            opacity:0,
            duration:0.1
        })
        
    })
})




const fsCloseBtnELem = document.querySelector("#fullScreen-closeBtn")

fsCloseBtnELem.addEventListener("click",() =>{
    gsap.to(".full-screen",{
        opacity:0,
        transform:"translate(-50%,-50%)",
        pointerEvents:"none",
        duration:0.3
    })
    document.querySelector("main").classList.remove("no-scroll");
})

