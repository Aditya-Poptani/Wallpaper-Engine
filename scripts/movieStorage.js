let sciFi = ["The Prestige", "The Matrix", "Blade Runner 2049", "The Terminator", "Tron Legacy", "Dune", "Intersteller", "2001", "Arrival"]
let superheroes = ["The Dark Knight"]
let thriller = ["Prisoners", "Fight Club", "Oppenheimer"]
let romance = ["Fifty Shades Of Grey","La La Land", "500 Days Of Summer", "Titanic", "How To Lose A Guy In 10 Days", "Remember Me", "The Notebook", "Veer Zaara", "Before We Go", "Breathe"]
let action = ["Oldboy", "Kill Bill", "The Terminator", "Top Gun", "Blade", "Jumanji", "Rush Hour", "Star Wars Series", "Gladiator"]

let allGenres = {
    "sciFi": sciFi,
    "action": action,
    "thriller": thriller,
    "romance": romance,
    "superheroes": superheroes
}
let noOfMovieImgs = {
    "Fifty Shades Of Grey":1,
    "Prisoners": 1,
    "The Prestige": 1,
    "The Dark Knight": 1,
    "The Matrix": 1,
    "Blade Runner 2049": 1,
    "The Terminator": 1,
    "2001": 1,
    "Tron Legacy": 1,
    "Arrival": 1,
    "Dune": 1,
    "Fight Club": 1,
    "Intersteller": 1,
    "Oppenheimer": 1,
    "La La Land": 1,
    "500 Days Of Summer": 1,
    "Titanic": 1,
    "How To Lose A Guy In 10 Days": 1,
    "Remember Me": 1,
    "The Notebook": 1,
    "Before We Go": 1,
    "Breathe": 1,
    "Oldboy": 1,
    "Kill Bill": 1,
    "The Terminator": 1,
    "Top Gun": 1,
    "Blade": 1,
    "Jumanji": 1,
    "Rush Hour": 1,
    "Star Wars Series": 1,
    "Gladiator": 1
}



function laodMovieCards(categoryName, allGenres) {
    let spanCategoryName = categoryName
    const showcaingSectionELem = document.querySelector(".showcasing-section")
    showcaingSectionELem.innerHTML = `<div class="SC-columns SC-column1"></div>
                <div class="SC-columns SC-column2"></div>
                <div class="SC-columns SC-column3"></div>`
    showcaingSectionELem.innerHTML += `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stop-color="#FF4D4D" />
                        <stop offset="100%" stop-color="#4D94FF" />
                      </linearGradient>
                    <path fill="url(#gradient)" d="M40.1,-61.4C53.6,-53.7,67.2,-45.3,72.2,-33.3C77.2,-21.3,73.6,-5.6,69.3,8.5C65,22.6,60.1,35.3,51.7,44.5C43.2,53.7,31.2,59.5,17.7,65.9C4.3,72.4,-10.6,79.5,-22.7,76.4C-34.8,73.2,-44.2,59.9,-53.9,47.4C-63.5,35,-73.3,23.5,-79,9.1C-84.6,-5.3,-85.9,-22.6,-77.9,-33.7C-69.9,-44.7,-52.4,-49.6,-37.9,-56.8C-23.3,-64,-11.7,-73.7,0.8,-75C13.3,-76.2,26.6,-69.1,40.1,-61.4Z" transform="translate(100 100)" />
                  </svg>`
    if (categoryName == "sci-fi") {
        categoryName = "sciFi"
    }
    let columnCount = 1
    let usingCategory = allGenres[categoryName]
    let catCLone = [...usingCategory]
    console.log(usingCategory)
    if (usingCategory.length <= 9) {
        for (let i = 0; i < usingCategory.length; i++) {
            let ImgPath = `MOVIEimgs-2/${usingCategory[i]}-1_result.webp`
            let filledColumn = document.querySelector(`.SC-column${columnCount}`)
            filledColumn.innerHTML += `<div class="showcasing-movie-container">
                        <img src="${ImgPath}" alt="">
                        <h1>${usingCategory[i]}</h1>
                    </div>`;
            if (columnCount == 3){
                columnCount = 1
            }else{
                columnCount++
            }        
            console.log("hello")
        }
    }else{
        for (let i = 0; i < 9; i++) {
            let randomMovieIndex = Math.floor(Math.random() * catCLone.length)
            let RandomMovie = catCLone[randomMovieIndex]
            let ImgPath = `MOVIEimgs-2/${RandomMovie}-1_result.webp`
            let filledColumn = document.querySelector(`.SC-column${columnCount}`)
            filledColumn.innerHTML += `<div class="showcasing-movie-container">
                        <img src="${ImgPath}" alt="">
                        <h1>${RandomMovie}</h1>
                    </div>`;
            if (columnCount == 3){
                columnCount = 1
            }else{
                columnCount++
            } 
            // console.log(usingCategory.length,randomMovieIndex,RandomMovie,ImgPath,catCLone)
            catCLone.splice(randomMovieIndex,1) 
                   

        }
    }
    
    
    showcaseAllmovieLayers(noOfMovieImgs)

}

function loadFeaturedMovies(allGenres,noOfMovieImgs) {
    const showcaingSectionELem = document.querySelector(".showcasing-section")
    showcaingSectionELem.innerHTML = `<div class="SC-columns SC-column1"></div>
                <div class="SC-columns SC-column2"></div>
                <div class="SC-columns SC-column3"></div>`

    let columnCount = 1

    let allMovieNames = Object.keys(noOfMovieImgs)
    for (let i = 0; i < 9; i++) {
        let listOfGenres = Object.keys(allGenres)
        let randomMovieIndex = Math.floor(Math.random() * allMovieNames.length)
        let RandomMovie = allMovieNames[randomMovieIndex]
        let ImgPath = `MovieImages/${RandomMovie}-1.jpg`
        let filledColumn = document.querySelector(`.showcasing-section .SC-column${columnCount}`)
        filledColumn.innerHTML += `<div class="showcasing-movie-container">
                    <img src="${ImgPath}" alt="">
                    <h1>${RandomMovie}</h1>
                </div>`
        if (columnCount == 3){
            columnCount = 1
        }else{
            columnCount++
        }       
        allMovieNames.splice(randomMovieIndex,1) 
    }
    showcaseAllmovieLayers(noOfMovieImgs)

}
loadFeaturedMovies(allGenres,noOfMovieImgs)

const movieCategoryLinkElems = document.querySelectorAll(".categoryLink");
movieCategoryLinkElems.forEach(categoryLink => {
    categoryLink.addEventListener("click", function () {
        let categorySpan = categoryLink.querySelector("span").innerHTML
        if (categorySpan == "Featured") {
            loadFeaturedMovies(allGenres,noOfMovieImgs)
        } else {
            laodMovieCards(categorySpan, allGenres)
        }
    })
})

function showcaseAllmovieLayers(noOfMovieImgs) {
    let showcasingMovieElem = document.querySelectorAll(".showcasing-movie-container");
    let fullscreen = document.querySelector(".movieLayers-fullscreen")
    showcasingMovieElem.forEach(movie => {
        movie.addEventListener("click", function () {

            let tl = gsap.timeline()
            tl.to(".movieLayers-fullscreen", {
                opacity: 1,
                top: 0,
                // height:"100vh",
                duration: 0.5,
                pointerEvents: "all",
                ease: "power2.inOut"
            })
            tl.to(".movieLayers-fullscreen .nav i", {
                scale: 1,
                // top:0,
                duration: 0.3,
                ease: "power2.inOut"
            }, ">")
            tl.to(".movieLayers-fullscreen section .columns", {
                opacity: 1,
                transform: "translateY(0%)",
                duration: 0.5,
                ease: "power1.inOut"
            }, ">")

            if (fullscreen.offsetHeight > window.innerHeight) {
                fullscreen.style.overflowY = "auto";
            }
            let prefix = movie.querySelector("h1").innerHTML
            let count = noOfMovieImgs[prefix]

            console.log(prefix)
            console.log(count)
            document.querySelector(".movieLayers-fullscreen section").scrollTop = 0;
            const columnsElems = document.querySelectorAll(".columns");
            columnsElems.forEach(column => {
                column.innerHTML = ``;
            })

            let columnCount = 1

            for (let index = 1; index < count + 1; index++) {
                let src = `MOVIEimgs-2/${prefix}-${index}_result.webp`;
                let filledColumn = document.querySelector(`.column${columnCount}`)
                filledColumn.innerHTML += `<div class="MovieImg-container"><h4>Click to open</h4><img src="${src}"></div>`
                if (columnCount == 4) {
                    columnCount = 1
                } else {
                    columnCount++
                }
            }

            document.querySelector(".movieLayers-fullscreen").addEventListener("wheel", function (e) {
                e.stopPropagation(); // Prevent the parent container from blocking the scroll
            });
            setTimeout(() => {
                document.querySelector("body").classList.add("no-scroll") 
            }, 500);
            // document.querySelector("html").style.setProperty("overflow", "hidden")

        })



    })
}
showcaseAllmovieLayers(noOfMovieImgs)

function getMovieImages(categoryName, shortForms, imgsCount) {


}
