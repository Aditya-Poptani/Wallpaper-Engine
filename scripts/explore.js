const lenis = new Lenis({
    autoRaf: true,
  });





const fsCloseBtnELem = document.querySelector("#fullScreen-closeBtn")

fsCloseBtnELem.addEventListener("click",() =>{
    const saveBtnELem = document.querySelector("#saveBtn")
    saveBtnELem.querySelector("span").innerHTML = `Save`;
    let saveIconELem2 = document.querySelector("#save-icon")
    gsap.to(".full-screen",{
        opacity:0,
        transform:"translate(-50%,-50%)",
        pointerEvents:"none",
        duration:0.3
    })
    
    document.querySelector("main").classList.remove("no-scroll");
        console.log("hello")

})

let columns = document.querySelectorAll(".columns")
columns.forEach(column => {
    imgConsElems2 = column.querySelectorAll(".img-container")
    imgConsElems2.forEach(imgCon =>{
        imgCon.addEventListener("click",function(){
            const imgSrc = imgCon.querySelector("img").getAttribute("src");
            const saveBtnELem = document.querySelector("#saveBtn");
            const saveIconELem = document.querySelector("#save-icon")
            saveIconELem.classList = ""
            saveIconELem.classList.add("ri-bookmark-line")
            let lsSaveAuth = 0
            let lsImgCount = localStorage.length
            saveBtnELem.style.setProperty("pointer-events","all")

            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i); // Get the key at index `i`
                const value = localStorage.getItem(key); // Get the value for the key    
                if (value === String(imgSrc)) {
                    lsSaveAuth++
                }
            }
            if (lsSaveAuth > 0) {
                saveIconELem.classList.replace("ri-bookmark-line","ri-check-line")
                saveBtnELem.querySelector("span").innerHTML = `Saved`;
            }
            saveBtnELem.addEventListener("click",function(){
                if (!saveIconELem.classList.add("ri-check-line")) {
                    saveIconELem.classList.remove("ri-bookmark-line")
                    saveIconELem.classList.add("ri-check-line")
                    saveBtnELem.querySelector("span").innerHTML = `Saved`;
                    console.log(imgSrc)
                    localStorage.setItem(`img${lsImgCount}`,imgSrc)
                    saveBtnELem.style.setProperty("pointer-events","none")
                }
            })
            })
        })
})

