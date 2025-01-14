const lenis = new Lenis({
    autoRaf: true,
  });

const categoryLinkELem = document.querySelectorAll(".categoryLink");


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