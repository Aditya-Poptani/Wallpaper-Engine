const categoryElems = document.querySelectorAll(".category-link")

function getImages(categoryName,shortForms,imgsCount){
    let prefix = shortForms[categoryName]
    let count = imgsCount[categoryName]
    // console.log(prefix)
    // console.log(count)

    const columnsElems = document.querySelectorAll(".columns");
    columnsElems.forEach(column => {
        column.innerHTML = ``;
    })

    let columnCount = 1

    for (let index = 1; index < count+1; index++) {
        let src = `Images/${prefix}${index}.jpg`;
        let filledColumn = document.querySelector(`.column${columnCount}`)
        filledColumn.innerHTML += `<div class="img-container"><h4>Click to open</h4><img src="${src}"></div>`
        if (columnCount == 4){
            columnCount = 1
        }else{
            columnCount++
        }
    }

    fullScreenAndHover()    
}

let categoryShortForms = {
    "Nature":"na",
    "Space":"sp",
    "Liminal":"li",
    "Movies":"mo",
    "Art":"ar",
    "Food":"fo",
    "Animated":"ani",
    "Spirituality":"spi",
    "Fashion":"fa",
    "Retro":"re",
    "Futuristic":"fu"
}
let categoryImgCount = {
    "Nature":10,
    "Space":10,
    "Liminal":1,
    "Movies":1,
    "Art":1,
    "Food":1,
    "Animated":1,
    "Spirituality":1,
    "Fashion":1,
    "Retro":1,
    "Futuristic":1
}

function featuredImgLoader(categoryShortForms,categoryImgCount){
    const shortFormsList = Object.keys(categoryShortForms)
    const ImgCountList = Object.keys(categoryImgCount)
    
    const columnsElems = document.querySelectorAll(".columns");
        columnsElems.forEach(column => {
            column.innerHTML = ``;
        })
    let columnCount = 1

    let allImgPaths = []

    for (let index = 0; index < shortFormsList.length; index++) {
        let HalfImgPath = ``
        let prefix = categoryShortForms[shortFormsList[index]]
        for (let i = 1; i < categoryImgCount[shortFormsList[index]]+1; i++) {
            HalfImgPath = `${prefix}${i}`
            allImgPaths.push(HalfImgPath)
        }
    }
    
    console.log(allImgPaths)

    for (let index = 1; index < 30; index++) {
        const randomImgPathIndex = Math.floor(Math.random() * allImgPaths.length)
        const randomImgPath = allImgPaths[randomImgPathIndex]
        
        let src = `Images/${randomImgPath}.jpg`;
        let filledColumn = document.querySelector(`.column${columnCount}`)
        filledColumn.innerHTML += `<div class="img-container"><h4>Click to open</h4><img src="${src}"></div>`
        if (columnCount == 4){
            columnCount = 1
        }else{
            columnCount++
        }
        allImgPaths.splice(randomImgPathIndex,1)
    }
    console.log(allImgPaths)
    fullScreenAndHover()
    
}
featuredImgLoader(categoryShortForms,categoryImgCount)

function fullScreenAndHover(){
    const imgConsElems = document.querySelectorAll(".img-container");
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

    imgConsElems.forEach(imgCon =>{
        imgCon.addEventListener("click",function(){
            const imgSrc = imgCon.querySelector("img").getAttribute("src");
            const fullScreenElem = document.querySelector(".full-screen");
            const downloadBtnElem = document.querySelector("#downloadBtn");

            setTimeout(() => {
                gsap.to(".full-screen",{
                    transform:"translate(-50%,-50%)",
                    opacity:1,
                    pointerEvents:"all",
                    duration:0.3,
                })
            },20);

            fullScreenElem.querySelector("img").setAttribute("src",imgSrc)

            document.querySelector("main").classList.add("no-scroll");

            downloadBtnElem.addEventListener("click",() => {
                downloadBtnElem.setAttribute("href",imgSrc)
            })

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
}

const featuredElem = document.querySelector(".explore-featured-link")
featuredElem.addEventListener("click",function(){
    if (featuredElem.classList.contains("active-category")){
        featuredImgLoader(categoryShortForms,categoryImgCount)
    }else{
        featuredElem.classList.add("active-category")
        removeActiveClass()
        featuredImgLoader(categoryShortForms,categoryImgCount)
    }
    
})

function removeActiveClass(){
    categoryElems.forEach(category => {
        category.classList.remove("active-category");
    })
}

categoryElems.forEach(category => {
    category.addEventListener("click",function(){
        const categoryName = category.innerHTML;
        removeActiveClass();
        featuredElem.classList.remove("active-category");
        category.classList.add("active-category");
        getImages(categoryName,categoryShortForms,categoryImgCount);
        
    })

})


const homeSaveIconELem = document.querySelector(".home-save-icon")
function homeSaveBtnOpen(){
    const homeSaveFsELem = document.querySelector(".homeSaved-fullscreen") 
    homeSaveFsELem.innerHTML = `<i onclick="homeSaveClose()" title="close" id="homeSavefullScreen-closeBtn" class="ri-close-line"></i>`
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i)
        let valueImgSrc = localStorage.getItem(key)
        homeSaveFsELem.innerHTML+= `<div class="savedImg-container">
                <img src="${String(valueImgSrc)}" alt="">
            </div>`
        console.log(valueImgSrc)
    }
    setTimeout(() => {
        gsap.to(".homeSaved-fullscreen",{
            // transform:"translate(-50%,-50%)",
            opacity:1,
            pointerEvents:"all",
            duration:0.2,
        })
        // document.querySelector(".page2").style.setProperty("visibility","hidden")
        // document.querySelector(".page3").style.setProperty("visibility","hidden")
        // document.querySelector("footer").style.setProperty("visibility","hidden")

        document.querySelector(".main").style.setProperty("height","100vh")
        document.querySelector(".main").style.setProperty("width","100vw")
        document.querySelector(".main").style.setProperty("overflow","hidden")
        document.querySelector("body").style.setProperty("overflow-x","hidden")
        document.querySelector(".page3").style.setProperty("visibility","hidden")
        document.querySelector(".explore-container").style.setProperty("display","none")
        // document.querySelector(".footer").style.setProperty("display","none")
    },20);
     
}
