const lenis = new Lenis({
    autoRaf: true,
  });

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });

window.addEventListener("mousemove",function(dets){
    gsap.to(".cursor",{
        x:dets.x,
        y:dets.y,
        duration:1.5,
        ease:"expo"

    })
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
        backgroundColor: "#D6A96F",
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
        backgroundColor: "#D6A96F",
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
        backgroundColor: "#D6A96F",
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
MainColorChangeAni()

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

gsap.to(".home-main",{
    transform: "rotateX(5deg)",
    filter:"sepia(3)",
    duration:1.2,
    scrollTrigger:{
        trigger:".page2",
        scrub:true
    }
})

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
        console.log(dets.y)
        // const AnicenterY = dets.y; / 100 * vh; 
        initialPath = `M ${startX} ${startY} Q ${dets.x} ${dets.y-110} ${endX} ${endY}`
        gsap.to(path,{
            attr:{d:initialPath},
            duration:1,
            ease:"elastic.out(1,0.3)"
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


gsap.to(".category-card",{
    transform:"translateX(-220%)",
    scrollTrigger:{
        trigger:".page3",
        // markers:true,
        scrub:2,
        start:"top 0%",
        end:"top -350%",
        pin:true
    }
},"start");

// const categoryCardElem = document.querySelector('.category-card');
// categoryCardElem.addEventListener("mouseenter",function(){
//     gsap.from(".category-description",{
//         y:50,
//         opacity:0,
//         duration:0.6
//     })
// })
