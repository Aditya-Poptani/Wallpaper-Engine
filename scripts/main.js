const lenis = new Lenis({
    autoRaf: true,
  });

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });

let loadingTl = gsap.timeline()
gsap.to(".loadingBar-progress",{
    width:"70%",
    duration:2,
})
window.onload = function(){
    loadingTl.to(".loading-screen",{
        opacity:0,
        duration:0.9,
        delay:2.5,
        ease:"power2.inOut"
    })
    setTimeout(() => {
        gsap.to(".loadingBar-progress",{
            width:"100%",
            duration:0.8,
        })
    }, 1000);
    setTimeout(() => {
        document.querySelector("body").style.setProperty("overflow","visible")
        document.querySelector("html").style.setProperty("overflow","visible")
        document.querySelector(".loading-screen").style.setProperty("pointer-events","none")
    }, 4500);
}



window.addEventListener("mousemove",function(dets){
    gsap.to(".cursor",{
        x:dets.x,
        y:dets.y,
        duration:1.5,
        ease:"expo"

    })
})

const subHeadingElem = document.querySelector(".subHeading")
let subHeadingTl = gsap.timeline({
    repeat:-1,
    yoyo:false
})

subHeadingTl
.to(subHeadingElem,{
    duration: 2, 
    onUpdate: () => {
        subHeadingElem.innerHTML = `"Upon these walls, art doth whisper—grace in pattern, soul in hue. A dance of color, a sonnet of design, where beauty lingers and elegance stays true."`;
    },
    delay:10    
})
.to(subHeadingElem,{
    duration: 2, 
    onUpdate: () => {
        subHeadingElem.innerHTML = `"A wall unadorned is but a tale untold. With every curve and every shade, wallpaper weaves poetry upon the quiet stone, turning mere rooms into realms of wonder."`;
    },
    delay:10
})
.to(subHeadingElem,{
    duration: 2, 
    onUpdate: () => {
        subHeadingElem.innerHTML = `"Like the brush of dawn upon the sky, so too does wallpaper grace the walls—soft yet bold, silent yet profound, a tapestry where dreams reside."`;
    },
    delay:10
})
.to(subHeadingElem,{
    duration: 2, 
    onUpdate: () => {
        subHeadingElem.innerHTML = `"Design is but the breath of beauty, and in the dance of pattern and light, wallpaper sings a song of elegance—a whisper of art upon the canvas of space."`;
    },
    delay:10
})


function homebgImageAnimation(){
    const imgContainerElems = document.querySelectorAll(".homebg-img-container");
    imgContainerElems.forEach(imgContainer => {
    const delay = parseFloat(getComputedStyle(imgContainer).getPropertyValue('--delay'));
    const size = parseFloat(getComputedStyle(imgContainer).getPropertyValue('--s2'));

    gsap.to(imgContainer, {
        top: `${size}vw`,
        duration: 20,
        scale:0.7,
        // x:100,
        delay: delay,
        repeat: -1, 
        ease: "none" 
    }); 
})
}
homebgImageAnimation()

function epxloreSliderAnimation(){
    const exSliderH3ELems = document.querySelectorAll(".explore-h3");
    exSliderH3ELems.forEach(exH3 => {
    const delay = parseFloat(getComputedStyle(exH3).getPropertyValue('--h3-delay'));

    gsap.to(exH3, {
        left:"-10.12%",
        duration: 20,
        delay: delay,
        repeat: -1, 
        ease: "none" 
    });
})   
}
epxloreSliderAnimation()

function exCursorShrinkAni(){
    document.querySelector(".explore-container").addEventListener("mouseenter",function(dets){
        document.querySelector(".cursor").innerHTML = `Click`;
        gsap.to(".cursor",{
            scale:5,
            duration:0.5,
            ease:"expo"
        })
    })
    document.querySelector(".explore-container").addEventListener("mouseleave",function(dets){
        document.querySelector(".cursor").innerHTML = ``;
        gsap.to(".cursor",{
            scale:1,
            duration:0.5,
            ease:"expo"
    
        })
    })
}
exCursorShrinkAni()

function MainColorChangeAni(){
    gsap.to(".home",{
        backgroundColor: "var(--primary2)",
        duration:1.2,
        scrollTrigger:{
            trigger:".page2",
            scrub:2,
            // markers:true,
            start:"top 25%",
            end:"80% 80%"
        }
    })
    gsap.to(".page2",{
        backgroundColor: "var(--primary2)",
        duration:1.2,
        scrollTrigger:{
            trigger:".page2",
            scrub:2,
            // markers:true,
            start:"top 25%",
            end:"80% 80%"
        }
    })
    gsap.to(".page3",{
        backgroundColor: "rgb(11, 11, 11)",
        duration:1.2,
        scrollTrigger:{
            trigger:".page2",
            scrub:2,
            // markers:true,
            start:"top 25%",
            end:"80% 80%"
        }
    })    
}
// MainColorChangeAni()

gsap.to(".img-container",{
    x:"10vw",
    duration:1.2,
    scrollTrigger:{
        trigger:".page2",
        scrub:2,
        // markers:true,
        start:"top 25%",
        end:"80% 80%"
    }
})

// gsap.to(".home-main",{
//     transform: "rotateX(5deg)",
//     // filter:"sepia(3)",
//     duration:1.2,
//     scrollTrigger:{
//         trigger:".page2",
//         scrub:true
//     }
// })
gsap.to(".coolbg",{
    scale:1.3,
    duration:1.2,
    ease:"power2",
    scrollTrigger:{
        trigger:".page2",
        scrub:true
    }
})

// Shery.textAnimate(".tagline h1",{
//     style: 1,
//     y: 10,
//     delay: 0.1,
//     duration: 0.3,
//     ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//     multiplier: 0.1,
// })

gsap.from(".tagline h1",{
    y:100,
    opacity:0,
    duration:1,
    stagger:0.3,
    ease:"expo",
    delay:0.6
})

gsap.from(".nav-right-section button",{
    opacity:0,
    duration:1,
    stagger:0.3,
    ease:"expo",
    delay:0.6
})

gsap.from(".text-logo",{
    opacity:0,
    duration:1,
    stagger:0.3,
    ease:"expo",
    delay:0.6
})
gsap.from(".nav-right-section i",{
    opacity:0,
    opacity:0,
    duration:1,
    stagger:0.3,
    ease:"expo",
    delay:0.6
})
gsap.from(".home-rectangle-graphic",{
   width:"0%",
    duration:1,
    ease:"expo",
    delay:0.9,
})

gsap.from(".explore-container",{
    y:700,
    scrollTrigger:{
        trigger: ".page2",
        scroller:"body",
        scrub:2,
        start:"top bottom",
        end:"50% 30%",
        scrub:2
    }
})
gsap.from(".explore-tagline-container",{
    y:700,
    scrollTrigger:{
        trigger: ".page2",
        scroller:"body",
        scrub:2,
        start:"top bottom",
        end:"50% 30%",
        scrub:2
    }
})
gsap.from(".explore-overlay",{
    y:700,
    scrollTrigger:{
        trigger: ".page2",
        scroller:"body",
        scrub:2,
        start:"top bottom",
        end:"50% 30%",
        scrub:2
    }
})

function pageSeperaterAnimation(){
    const svg = document.querySelector('.seperater-line-svg');
    const path = document.querySelector('.seperater-line-path');

    const computedStyle = getComputedStyle(svg);
    const vw = parseFloat(computedStyle.width);
    const vh = parseFloat(computedStyle.height);

    const startX = 1 / 100 * vw; 
    const startY = 50 / 100 * vh;
    const centerX = 50 / 100 * vw; 
    const centerY = 50 / 100 * vh; 
    const endX = 99 / 100 * vw;  
    const endY = 50 / 100 * vh;   

    path.setAttribute('d',`M ${startX} ${startY} Q ${centerX} ${centerY} ${endX} ${endY}`);


    let initialPath = `M ${startX} ${startY} Q ${centerX} ${centerY} ${endX} ${endY}`
    let finalPath = `M ${startX} ${startY} Q ${centerX} ${centerY} ${endX} ${endY}`

    svg.addEventListener("mousemove",function(dets){
        // console.log(dets.y)
        // const AnicenterY = dets.y; / 100 * vh; 
        initialPath = `M ${startX} ${startY} Q ${dets.x} ${dets.y-110} ${endX} ${endY}`
        gsap.to(path,{
            attr:{d:initialPath},
            duration:1,
            ease:"elastic.out(1,0.5)"
        })
    })
    svg.addEventListener("mouseleave",function(dets){
        // console.log(dets.y)
        gsap.to(path,{
            attr:{d:finalPath},
            duration:1.5,
            ease:"elastic.out(1,0.2)"
        })
    })
}
pageSeperaterAnimation()

let catTL = gsap.timeline({
    scrollTrigger:{
        trigger:".page3",
        // markers:true,
        scrub: 3,
        start:"top 0%",
        end:"top -350%",
        pin:true
    }
})

catTL.to(".category-card",{
    transform:"translateX(-220%)",
},"start");




// document.querySelector(".home-main").addEventListener("mouseenter",function(){
//     gsap.to(".wrapper-img",{
//         // height:"105%",
//         // width:"105%",
//         scale:1.09,
//         duration:0.5,
//         ease:"power2"
//     })
// })
// document.querySelector(".home-main").addEventListener("mouseleave",function(){
//     gsap.to(".wrapper-img",{
//         // height:"100%",
//         // width:"100%",
//         scale:1,
//         duration:0.5,
//         ease:"power2"
//     })
// })

gsap.from(".category-title",{
    y:100,
    opacity:0,
    duration:1,
    ease:"power2",
    scrollTrigger:{
        trigger:".page3",
        start:"top 30%"
    }
})

let menuTl = gsap.timeline();


menuTl.to(".home-main-overlay",{
    opacity:1,
    duration:0.3
},"start")
menuTl.to(".home-main nav",{
    height:0,
    duration:0.3,
    ease:"expo.in"
},"start")
menuTl.to(".home",{
    maskImage:`linear-gradient(
        to bottom,
        var(--primary3) 0%,
        transparent
    );`,
    duration:0.3
})
menuTl.to(".menu-section",{
    width:"30%",
    duration:0.3
})



menuTl.pause()
document.querySelector("#menu-arrow").addEventListener("click",function(){
    menuTl.play()
    gsap.to(".menu-closeBtn",{
        opacity:1,
        duration:0.3,
    },)
    gsap.to(".menu-closeBtn i",{
        opacity:1,
        duration:0.3,
        delay:0.3
    },)
})
document.querySelector(".navRight-right-container span").addEventListener("click",function(){
    menuTl.play()
    gsap.to(".menu-closeBtn",{
        opacity:1,
        duration:0.3,
    },)
    gsap.to(".menu-closeBtn i",{
        opacity:1,
        duration:0.3,
        delay:0.3
    },)
})
document.querySelector(".menu-closeBtn").addEventListener("click",function(){
    gsap.to(".menu-closeBtn",{
        opacity:0,
        duration:0.3,
    },)
    gsap.to(".menu-closeBtn i",{
        opacity:0,
        duration:0.3,
    },)
    menuTl.reverse()
    menuTl.pasue()
})


const menuLinkELem = document.querySelectorAll(".menu-links");
menuLinkELem.forEach(menuLink => {
    menuLink.addEventListener("mouseenter",function(){
        gsap.to(menuLink.querySelector("div") ,{
            height:"100%",
            duration:0.3
        })
        gsap.to(menuLink.querySelector("h2"),{
            // color:"#F4B4C6",
            duration:0.3,
            transform:"translateY(-110%)"
        })
        gsap.to(menuLink.querySelector("#menu-link-duplicate"),{
            // color:"#F4B4C6",
            duration:0.3,
            transform:"translateY(0%)",
            delay:0,
        })
        gsap.to(menuLink.querySelector("#menu-link-duplicate"),{
            duration:0.3,
            transform:"translateY(0%)",
            opacity:1
        })
    })
    menuLink.addEventListener("mouseleave",function(){
        gsap.to(menuLink.querySelector("div"),{
            height:"0%",
            duration:0.3,
            delay:0.2
        })
        gsap.to(menuLink.querySelector("h2"),{
            // color:"#151313",
            duration:0.3,
            transform:"translateY(0%)",
            delay:0.2
        })
        gsap.to(menuLink.querySelector("#menu-link-duplicate"),{
            // color:"#151313",
            duration:0.3,
            opacity:0,
            transform:"translateY(100%)"
        })
    })
})


document.getElementById("footerHomeBtn").addEventListener("click", function () {
    window.scrollTo({
      top: 0, // Scroll to the top
      behavior: "smooth", // Smooth scrolling animation
    });
});

const homeSaveFsCloseBtn = document.querySelector("#homeSavefullScreen-closeBtn")
  homeSaveFsCloseBtn.addEventListener("click",function(){
      
  })

function homeSaveClose(){
    console.log("hello");
    gsap.to(".homeSaved-fullscreen",{
        opacity:0,
        transform:"translate(-50%,-50%)",
        pointerEvents:"none",
        duration:0.3
    })
    document.querySelector(".main").style.setProperty("height","none")
    document.querySelector(".main").style.setProperty("width","none")
    document.querySelector(".main").style.setProperty("overflow","visible")
    document.querySelector("body").style.setProperty("overflow-x","hidden")
    document.querySelector(".page3").style.setProperty("visibility","visible")
    document.querySelector(".explore-container").style.setProperty("display","block")
    // document.querySelector(".footer").style.setProperty("display","block")
}

const moonThemeBtnElem = document.getElementById("moonBtn");
const sunThemeBtnElem = document.getElementById("sunBtn");
const htmlElement = document.documentElement;

sunThemeBtnElem.addEventListener("click",() => {
    const themeClassCheck = sunThemeBtnElem.classList.contains("active-theme");

    if (!themeClassCheck) {
        sunThemeBtnElem.classList.add("active-theme")
        moonThemeBtnElem.classList.remove("active-theme")

        gsap.to(":root", {
            "--primary": "#F4B4C6",
            "--primary2": "#F4B4C6",
            "--primary3":'#151313',
            "--primary3-light":"rgba(21, 19, 19, 0.771)",
            duration: 0.5, // Animation duration
            ease: "power2.out", // Smooth easing
        });
        // gsap.to(":root", {
        //     boxShadow:"20px 0 90px 10px black",
        //     duration: 0.5, // Animation duration
        //     ease: "power2.out", // Smooth easing
        // });
    }
})

moonThemeBtnElem.addEventListener("click",() => {
    const themeClassCheck = moonThemeBtnElem.classList.contains("active-theme");

    if (!themeClassCheck) {
        moonThemeBtnElem.classList.add("active-theme")
        sunThemeBtnElem.classList.remove("active-theme")

        gsap.to(":root", {
            "--primary": "rgb(11, 11, 11)",
            "--primary2": "#151313",
            "--primary3":'#F4B4C6',
            "--primary3-light":"#f4b4c6c5",
            duration: 0.5, // Animation duration
            ease: "power2.out", // Smooth easing
        });
        // gsap.to(":root", {
        //     boxShadow:"20px 0 90px 10px var(--primary3-light)",
        //     duration: 0.5, // Animation duration
        //     ease: "power2.out", // Smooth easing
        // });
    }
})

const saveLink1ELem = document.querySelector("#home-save-icon1")
const saveLink2ELem = document.querySelector("#home-save-icon2")
const saveLinksContainer = document.querySelector("#homeSaved-icon-container")

saveLinksContainer.addEventListener("mouseenter",() => {
    gsap.to(".iconHai1",{
        opacity:0,
        duration:0.4
    })
    gsap.to(saveLink1ELem,{
        transform:"translateY(0)",
        duration:0.5,
        delay:0.3
    })
})
saveLinksContainer.addEventListener("mouseleave",() => {
    gsap.to(saveLink1ELem,{
        transform:"translateY(0)",
        duration:0.3
    })
    gsap.to(saveLink2ELem,{
        transform:"translateY(100%)",
        duration:0.3
    })
})

