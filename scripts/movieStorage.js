let sciFi = ["The Prestige","The Matrix","Blade Runner 2049","The Terminator","Tron Legacy","Dune","Intersteller","2001","Arrival"]
let superheroes = ["The Dark Knight"]
let thriller = ["Prisoners","Fight Club","Oppenheimer"]
let romance = ["La La Land","500 Days Of Summer","Titanic","How To Lose A Guy In 10 Days","Remember Me","The Notebook","Veer Zaara","Before We Go","Breathe"]
let action = ["Oldboy","Kill Bill","The Terminator","Top Gun","Blade","Jumanji","Rush Hour","Star Wars Series","Gladiator"]

let allGenres = {
    "sciFi":sciFi,
    "action":action,
    "thriller":thriller,
    "romance":romance,
    "superheroes":superheroes
}

function laodMovieCards(categoryName,allGenres){
    let spanCategoryName = categoryName
    const showcaingSectionELem = document.querySelector(".showcasing-section")
    showcaingSectionELem.innerHTML = ``
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
    let usingCategory = allGenres[categoryName]
    for (let i = 0; i < usingCategory.length; i++) {
        let ImgPath = `MovieImages/${usingCategory[i]}-1.jpg`
        showcaingSectionELem.innerHTML+= `<div class="showcasing-movie-container">
                    <img src="${ImgPath}" alt="">
                    <h1>${usingCategory[i]}</h1>
                </div>`
    }


}

function loadFeaturedMovies(allGenres){
    const showcaingSectionELem = document.querySelector(".showcasing-section")
    showcaingSectionELem.innerHTML = ``
    showcaingSectionELem.innerHTML += `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stop-color="#FF4D4D" />
                        <stop offset="100%" stop-color="#4D94FF" />
                      </linearGradient>
                    <path fill="url(#gradient)" d="M40.1,-61.4C53.6,-53.7,67.2,-45.3,72.2,-33.3C77.2,-21.3,73.6,-5.6,69.3,8.5C65,22.6,60.1,35.3,51.7,44.5C43.2,53.7,31.2,59.5,17.7,65.9C4.3,72.4,-10.6,79.5,-22.7,76.4C-34.8,73.2,-44.2,59.9,-53.9,47.4C-63.5,35,-73.3,23.5,-79,9.1C-84.6,-5.3,-85.9,-22.6,-77.9,-33.7C-69.9,-44.7,-52.4,-49.6,-37.9,-56.8C-23.3,-64,-11.7,-73.7,0.8,-75C13.3,-76.2,26.6,-69.1,40.1,-61.4Z" transform="translate(100 100)" />
                  </svg>`

    for (let i = 0; i < 9; i++) {
        let listOfGenres = Object.keys(allGenres)
        let randomGenreIndex = Math.floor(Math.random() * listOfGenres.length)
        let randomGenrePrefix= listOfGenres[randomGenreIndex]
        let randomGenreList = allGenres[randomGenrePrefix]
        console.log(randomGenreList)
        let RandomMovie = Math.floor(Math.random() * randomGenreList.length)
        let ImgPath = `MovieImages/${randomGenreList[RandomMovie]}-1.jpg`
        showcaingSectionELem.innerHTML+= `<div class="showcasing-movie-container">
                    <img src="${ImgPath}" alt="">
                    <h1>${randomGenreList[RandomMovie]}</h1>
                </div>`
    }              
    

}

const movieCategoryLinkElems = document.querySelectorAll(".categoryLink");
movieCategoryLinkElems.forEach(categoryLink => {
    categoryLink.addEventListener("click",function(){
        let categorySpan = categoryLink.querySelector("span").innerHTML
        if (categorySpan == "Featured") {
            loadFeaturedMovies(allGenres)
        }else{
            laodMovieCards(categorySpan,allGenres)
        }
    })
})