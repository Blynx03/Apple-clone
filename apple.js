// show section 5 - movie pictures

let beforeImgCont = document.querySelector(".before-container");
let beforeDescCont = document.querySelector(".before-button-desc-container");
let beforeImg = document.querySelector(".before-movie-picture");
let beforeCategory = document.querySelector(".before-category");
let beforeMovieDesc = document.querySelector(".before-movie-desc");

let mainImgCont = document.querySelector(".main-container");
let mainDescCont = document.querySelector(".main-button-desc-container");
let mainImg = document.querySelector(".main-movie-picture");
let mainCategory = document.querySelector(".main-category");
let mainMovieDesc = document.querySelector(".main-movie-desc");


let afterImgCont = document.querySelector(".after-container");
let afterDescCont = document.querySelector(".after-button-desc-container");
let afterImg = document.querySelector(".after-movie-picture");
let afterCategory = document.querySelector(".after-category");
let afterMovieDesc = document.querySelector(".after-movie-desc");

let afterAfterImgCont = document.querySelector(".after-after-container");
let afterAfterImg = document.querySelector(".after-after-movie-picture");
let afterAfterCategory = document.querySelector(".after-after-category");
let afterAfterMovieDesc = document.querySelector(".after-after-movie-desc");
let counter = 1;
let movieInterval;

let isPlayPauseBtnClicked = false;
console.log(typeof(running));
document.addEventListener("mouseover", locateX);

// start animation when cursor is in target position


const movieDesc = {
    "category": [
        "Drama •",
        "Thriller •",
        "Comedy •",
        "Comedy •",
        "Holiday •",
        "Drama •",
        "Comedy •",
        "Documentary •",
        "Drama •",
        "Thriller •"
    ],
    "description": [
        "Inspired by a gripping true story.",
        "The very bottom of top secret.",
        "New Season.",
        "Start your holidays on a high note.",
        "Happiness is the holidays.",
        "Family. It's a killer.",
        "Emmy® wins including Outstanding Comedy.",
        "Unknown. Unexplained. Unbelievable. Until now.",
        "Welcome to Bombay.",
        "The rescue is only the beginning."
    ]
}

function locateX() {
    let mainDiv = document.querySelector('.main-container')
    let imageXLocation = mainDiv.getBoundingClientRect().top;
    let windowHeight = window.innerHeight;
        console.log("x location = " + imageXLocation + " window height = " + windowHeight);
    if (imageXLocation <= 550 && imageXLocation >= 50) {
        animateMoviePictures();
        document.removeEventListener("mouseover", locateX);
    }
}
// animating section 5 - movie pictures

function animateMoviePictures() {
    
    let playPauseToggle = document.querySelector(".pause-play-btn");

    playPauseToggle.addEventListener("click", playPauseAnimation);
    

    movieInterval = setInterval(() => {
        beforeImgCont.style.animation = "animate-pic-fly-left 0.6s ease-out forwards";

        mainImgCont.style.animation = "animate-pic-fly-left-blur 0.6s ease-out forwards";
        mainDescCont.style.animation = "animate-btn-desc-container-blur 0.6s ease-out forwards";

        afterImgCont.style.animation = "animate-pic-fly-left-focus 0.6s ease-out forwards";
        afterDescCont.style.animation = "animate-btn-desc-container-focus 0.6s ease-out forwards";

        afterAfterImgCont.style.animation = "animate-pic-fly-left-blur 0.6s ease-out forwards";
        console.log("counter = " + counter);

        document.querySelector(".middot1").style.animation = "animate-middot1 0.6s linear once forwards";
        document.querySelector(".middot2").style.animation = "animate-middot2 0.6s linear once forwards";

        movieTimeout = setTimeout(() => {

            if (counter === 1) {
                beforeImg.src = "images/movie-image10.png";
                beforeCategory.textContent = movieDesc.category[10];
                beforeMovieDesc.textContent = movieDesc.description[10];
                
                mainImg.src = "images/movie-image" + (counter) + ".png";
                mainCategory.textContent = movieDesc.category[counter - 1];
                mainMovieDesc.textContent = movieDesc.description[counter - 1];                

                afterImg.src = "images/movie-image" + (counter + 1) + ".png";
                afterCategory.textContent = movieDesc.category[counter];
                afterMovieDesc.textContent = movieDesc.description[counter];

                afterAfterImg.src = "images/movie-image" + (counter + 2) + ".png";
                afterAfterCategory.textContent = movieDesc.category[counter + 1];
                afterAfterMovieDesc.textContent = movieDesc.description[counter + 1];

                document.querySelector(".middot" + counter).style.color = "gray";
                document.querySelector(".middot10").style.color = "lightgrey";

            } else if (counter === 9) {
                beforeImg.src = "images/movie-image" + (counter - 1) + ".png";
                beforeCategory.textContent = movieDesc.category[counter - 2];
                beforeMovieDesc.textContent = movieDesc.description[counter - 2];

                mainImg.src = "images/movie-image" + (counter) + ".png";
                mainCategory.textContent = movieDesc.category[counter - 1];
                mainMovieDesc.textContent = movieDesc.description[counter - 1];

                afterImg.src = "images/movie-image" + (counter + 1) + ".png";
                afterCategory.textContent = movieDesc.category[counter];
                afterMovieDesc.textContent = movieDesc.description[counter];

                afterAfterImg.src = "images/movie-image1.png";
                afterAfterCategory.textContent = movieDesc.category[0];
                afterAfterMovieDesc.textContent = movieDesc.description[0];

                document.querySelector(".middot" + counter).style.color = "gray";
                document.querySelector(".middot" + (counter-1)).style.color = "lightgrey";

            } else if (counter === 10) {
                beforeImg.src = "images/movie-image" + (counter - 1) + ".png";
                beforeCategory.textContent = movieDesc.category[counter - 2];
                beforeMovieDesc.textContent = movieDesc.description[counter - 2];

                mainImg.src = "images/movie-image" + (counter) + ".png";
                mainCategory.textContent = movieDesc.category[counter - 1];
                mainMovieDesc.textContent = movieDesc.description[counter - 1];

                afterImg.src = "images/movie-image1.png";
                afterCategory.textContent = movieDesc.category[0];
                afterMovieDesc.textContent = movieDesc.description[0];

                afterAfterImg.src = "images/movie-image2.png";
                afterAfterCategory.textContent = movieDesc.category[1];
                afterAfterMovieDesc.textContent = movieDesc.description[1];

                document.querySelector(".middot" + counter).style.color = "gray";
                document.querySelector(".middot" + (counter-1)).style.color = "lightgrey";

            } else {
                beforeImg.src = "images/movie-image" + (counter - 1) + ".png";
                beforeCategory.textContent = movieDesc.category[counter - 2];
                beforeMovieDesc.textContent = movieDesc.description[counter - 2];

                mainImg.src = "images/movie-image" + (counter) + ".png";
                mainCategory.textContent = movieDesc.category[counter - 1];
                mainMovieDesc.textContent = movieDesc.description[counter - 1]; 

                afterImg.src = "images/movie-image" + (counter + 1) + ".png";
                afterCategory.textContent = movieDesc.category[counter];
                afterMovieDesc.textContent = movieDesc.description[counter];

                afterAfterImg.src = "images/movie-image" + (counter + 2) + ".png";
                afterAfterCategory.textContent = movieDesc.category[counter + 1];
                afterAfterMovieDesc.textContent = movieDesc.description[counter + 1];

                document.querySelector(".middot" + counter).style.color = "gray";
                document.querySelector(".middot" + (counter-1)).style.color = "lightgrey";
            }
            if (counter === 5) {
                mainCategory.style.textShadow = "0 0 10px black";
                mainMovieDesc.style.textShadow = "0 0 10px black";
            }
            // resetting animation

            beforeImgCont.style.removeProperty("animation");
            beforeDescCont.style.removeProperty("animation");

            mainImgCont.style.removeProperty("animation");
            mainDescCont.style.removeProperty("animation");
    
            afterImgCont.style.removeProperty("animation");
            afterDescCont.style.removeProperty("animation");
    
            afterAfterImgCont.style.removeProperty("animation");

            document.querySelector(".middot1").style.removeProperty("animation");
            document.querySelector(".middot2").style.removeProperty("animation");
    

        }, 500);
        counter++;
        if (counter > 10) {
            counter = 1;
        }
    }, 4500);

}

// Pause and Playing animation
// let playPauseBtn = document.querySelector(".pause-play-btn");

function playPauseAnimation() {

    if (isPlayPauseBtnClicked ? pauseMovie() : playMovie());
}

function pauseMovie() {
    let playPauseSymbol = document.querySelector(".symbol");
    playPauseSymbol.classList.replace("pause-symbol", "play-symbol");
    
    isPlayPauseBtnClicked = false;

    beforeImgCont.classList.add("paused");
    mainImgCont.classList.add("paused");
    afterImgCont.classList.add("paused");
    afterAfterImgCont.classList.add("paused");
}

function playMovie() {
    let playPauseSymbol = document.querySelector(".symbol");
    playPauseSymbol.classList.replace("play-symbol", "pause-symbol");
    beforeImgCont.classList.remove("paused");
    mainImgCont.classList.remove("paused");
    afterImgCont.classList.remove("paused");
    afterAfterImgCont.classList.remove("paused");
    isPlayPauseBtnClicked = true;
}


// function playPauseAnimation() {

//     let playPauseSymbol = document.querySelector(".symbol");
//     console.log("outside the if " + running);
//     if (running === true) {
//         console.log("inside the if " + running);
//         playPauseSymbol.classList.replace("pause-symbol", "play-symbol");

//         beforeImgCont.classList.remove("before-container");
//         mainImgCont.classList.remove("main-container");
//         afterImgCont.classList.remove("after-container");
//         afterAfterImgCont.classList.remove("after-after-container");
//         running = false;
//         clearInterval(movieInterval);
//     } else {
//         playPauseSymbol.classList.replace("play-symbol", "pause-symbol");

//         beforeImgCont.classList.add("before-container");
//         mainImgCont.classList.add("main-container");
//         afterImgCont.classList.add("after-container");
//         afterAfterImgCont.classList.add("after-after-container");
//         running = true;
//         animateMoviePictures();
//     }    


// }

//     let playPauseSymbol = document.querySelector(".symbol");
//     console.log("outside the if " + running);
//     if (running === false) {
//         console.log("inside the if " + running);
//         playPauseSymbol.classList.replace("pause-symbol", "play-symbol");

//         beforeImgCont.classList.add("paused");
//         mainImgCont.classList.add("paused");
//         mainDescCont.classList.add("paused");

//         afterImgCont.classList.add("paused");
//         afterDescCont.classList.add("paused");

//         afterAfterImgCont.classList.add("paused");
        
//     } else {
//         playPauseSymbol.classList.replace("play-symbol", "pause-symbol");

//         beforeImgCont.classList.add("running");

//         mainImgCont.classList.add("running");
//         mainDescCont.classList.add("running");

//         afterImgCont.classList.add("running");
//         afterDescCont.classList.add("running");

//         afterAfterImgCont.classList.add("running");
        
//     }
// }