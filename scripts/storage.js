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