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
let oldMiddotCounter;

let isRunning = true;

document.addEventListener("mouseover", locateX);

// start animation when cursor is in target position


const movieDesc = {
    "title": [
        "emancipation",
        "slowhorses",
        "littleamerica",
        "spirited",
        "charliebrown",
        "badsisters",
        "tedlasso",
        "prehistoricplanet",
        "shantaram",
        "echo3"
    ],
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
    ],
//     "streamBtn": [
//         ""
//     ]
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
    // middotListen();
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

// // put function to middots
// function middotListen() {
//     let middots = document.querySelectorAll(".middot");
//     middots.forEach(middot => {
//         middot.addEventListener("click", (e) => {
//         oldMiddotCounter = counter;
//         counter = Number(e.target.attributes.value.value);
//         console.log(e);
//         console.log("new counter is " + counter);
//         document.querySelector(".middot" + (oldMiddotCounter)).style.color = "lightgrey";
//         document.querySelector(".middot" + counter).style.color = "gray";
//         middotClicked(oldMiddotCounter);
//        });
//     });
// }

// function middotClicked(oldMiddotCounter) {
//     let playPauseSymbol = document.querySelector(".symbol");
//     let loopCounter = 1;
//     playPauseSymbol.classList.replace("pause-symbol", "play-symbol");
//     console.log('outside oldMiddot = ' + oldMiddotCounter + "counter =" + counter);
//     isRunning = false;
//     clearInterval(movieInterval);

//     if (counter < oldMiddotCounter) {
//         while (oldMiddotCounter != counter) {
//             console.log('inside oldMiddot = '+oldMiddotCounter +"counter =" + counter);
//             setTimeout(() => {
//                 beforeImgCont.style.animation = "animate-pic-fly-left 0.1s ease-out forwards";

//                 mainImgCont.style.animation = "animate-pic-fly-left-blur 0.1s ease-out forwards";
//                 mainDescCont.style.animation = "animate-btn-desc-container-blur 0.6s ease-out forwards";
        
//                 afterImgCont.style.animation = "animate-pic-fly-left-focus 0.1s ease-out forwards";
//                 afterDescCont.style.animation = "animate-btn-desc-container-focus 0.6s ease-out forwards";
        
//                 afterAfterImgCont.style.animation = "animate-pic-fly-left-blur 0.1s ease-out forwards";
     
//                 beforeImg.src = "images/movie-image" + (oldMiddotCounter - 1) + ".png";
//                 beforeCategory.textContent = movieDesc.category[oldMiddotCounter - 2];
//                 beforeMovieDesc.textContent = movieDesc.description[oldMiddotCounter - 2];
                
//                 mainImg.src = "images/movie-image" + (oldMiddotCounter) + ".png";
//                 mainCategory.textContent = movieDesc.category[oldMiddotCounter - 1];
//                 mainMovieDesc.textContent = movieDesc.description[oldMiddotCounter - 1];                
    
//                 afterImg.src = "images/movie-image" + (oldMiddotCounter + 1) + ".png";
//                 afterCategory.textContent = movieDesc.category[oldMiddotCounter];
//                 afterMovieDesc.textContent = movieDesc.description[oldMiddotCounter];
    
//                 afterAfterImg.src = "images/movie-image" + (oldMiddotCounter + 2) + ".png";
//                 afterAfterCategory.textContent = movieDesc.category[oldMiddotCounter + 1];
//                 afterAfterMovieDesc.textContent = movieDesc.description[oldMiddotCounter + 1];
    
//                 document.querySelector(".middot" + oldMiddotCounter).style.color = "gray";
//                 document.querySelector(".middot" + (oldMiddotCounter + 1)).style.color = "lightgrey";
    
//                 oldMiddotCounter++;
//                 loopCounter++;
//             }, 300 * loopCounter);
//         }
//     }
// }

// Pause and Playing animation

function playPauseAnimation() {

    if (isRunning ? pauseMovie() : playMovie());
}

function pauseMovie() {
    let playPauseSymbol = document.querySelector(".symbol");
    playPauseSymbol.classList.replace("pause-symbol", "play-symbol");
    
    isRunning = false;
    console.log("pauseMovie is clicked. is running = " + isRunning)
    clearInterval(movieInterval);

}

function playMovie() {
    let playPauseSymbol = document.querySelector(".symbol");
    playPauseSymbol.classList.replace("play-symbol", "pause-symbol");

    isRunning = true;
    animateMoviePictures();

}


// Create search link DOM and animation

function appleSearch() {
    const bodyFilter = document.querySelector("html");
    bodyFilter.style.animation = "filter-background 1000ms linear forwards";
    // remove opacity of old navigation bar
    const oldNav = document.querySelector(".nav-container");
    oldNav.style.animation = "animate-fade 1000ms linear forwards";

    // create new navigation container and put on top of existing nav bar
    const newDiv = document.querySelector(".header-container");
    const searchContainer = document.createElement("div");
    newDiv.appendChild(searchContainer);
    searchContainer.classList.add("search-nav-container");
    searchContainer.style.animation = "animate-focus 1000ms linear forwards",
                                    "animate-blink 1000ms linear infinite";

    // on the new nav container, make three new containers -- for search logo, search input and exit logo 
        const container1 = document.createElement("div");
        const container2 = document.createElement("input");
        const container3 = document.createElement("div");
        searchContainer.appendChild(container1);
        container1.classList.add("search-icon", "search-container2");

        searchContainer.appendChild(container2);
        container2.classList.add("search-input");
        container2.setAttribute("type", "text");
        container2.setAttribute("autofocus", "autofocus");

        container2.setAttribute("placeholder", "Search apple.com/ca");
        
        searchContainer.appendChild(container3);
        container3.classList.add("exit-icon");
        container3.setAttribute("onclick", 'appleLinks("home")');
        const x1 = document.createElement("div");
        const x2 = document.createElement("div");
        container3.appendChild(x1);
        x1.classList.add("x1");
        container3.appendChild(x2);
        x2.classList.add("x2");


    // making search logo using existing search logo to the first container
        const handle = document.createElement("div");
        const glass = document.createElement("div");
        container1.appendChild(glass);
        glass.classList.add("round-glass2");
        container1.appendChild(handle);
        handle.classList.add("handle2");


    // search input and exit logo
}
   

// url links

function appleLinks(link) {
    let goToLink;
    let linkId = true;
    switch (link) {
        case "logo": goToLink = "www.apple.com/ca";
                    break;
        case "store": goToLink = "www.apple.com/ca/store/";
                    break;
        case "mac": goToLink = "www.apple.com/ca/mac/";
                    break;
        case "ipad": goToLink = "www.apple.com/ca/ipad/";
                    break;
        case "iphone": goToLink = "www.apple.com/ca/iphone/";
                    break;
        case "watch": goToLink = "www.apple.com/ca/watch/";
                    break;
        case "airpods": goToLink = "www.apple.com/ca/airpods/";
                    break;
        case "tv-home": goToLink = "www.apple.com/ca/tv-home/";
                    break;
        case "only-on-apple": goToLink = "www.apple.com/ca/services/";
                    break;
        case "accessories": goToLink = "www.apple.com/ca/accessories/all/";
                    break;
        case "support": goToLink = "www.apple.com/ca/en-ca/";
                    break;
        case "home": goToLink = "index.html";
                    linkId = false;
                    break;
        case "iphone14": goToLink = "www.apple.com/ca/iphone-14/"
                    break;
        case "sec1-buy": goToLink = "www.apple.com/ca/shop/buy-iphone/iphone-14";
                    break;
        case "apple-gift": goToLink = "www.apple.com/ca/shop/gifts";
                    break;             
        case "ipad10": goToLink = "www.apple.com/ca/ipad-10.9/";
                    break;
        case "watch-series-8": goToLink = "www.apple.com/ca/apple-watch-series-8/";
                    break;
        case "watch-ultra": goToLink = "www.apple.com/ca/apple-watch-ultra/";
                    break;
        case "macbook-air": goToLink = "www.apple.com/ca/macbook-air/";
                    break;            
        case "homepod-mini": goToLink = "www.apple.com/ca/homepod-mini/";
                    break;
        case "buy-ultra": goToLink = "www.apple.com/ca/shop/buy-watch/apple-watch-ultra";
                    break;
        case "airtag": goToLink = "www.apple.com/ca/airtag/";
                    break;
        case "gift-card": goToLink = "www.apple.com/ca/gift-cards";
                    break;

        // Services 
        case "music": goToLink = "www.apple/com/ca/apple-music/";
                    break;
        case "tv-plus": goToLink = "www.apple.com/ca/apple-tv-plus/";
                    break;
        case "fitness": goToLink = "www.apple.com/ca/apple-fitness-plus/";
                    break;
        case "news": goToLink = "www.apple.com/ca/apple-news/";
                    break;
        case "arcade": goToLink = "www.apple.com/ca/apple-arcade/";
                    break;
        case "icloud": goToLink = "www.apple.com/ca/icloud/";
                    break;
        case "one": goToLink = "www.apple.com/ca/apple-one/";
                    break;
        case "pay": goToLink = "www.apple.com/ca/apple-pay/";
                    break;
        case "books": goToLink = "www.apple.com/ca/apple-books/";
                    break;
        case "podcast": goToLink = "www.apple.com/ca/apple-podcasts/";
                    break;
        case "app-store": goToLink = "www.apple.com/ca/app-store/";
                    break;

        // Account 
        case "apple-id": goToLink = "appleid.apple.com/";
                    break;
        case "apple-store": goToLink = "www.apple.com/ca/store";
                    break;
        case "icloud-website": goToLink = "www.icloud.com/";
                    break;

        // Apple Store 
        case "retail": goToLink = "www.apple.com/ca/retail/";
                    break;
        case "genius-bar": goToLink = "www.apple.com/ca/geniusbar/";
                    break;
        case "today": goToLink = "www.apple.com/ca/today/";
                    break;
        case "camp": goToLink = "www.apple.com/ca/today/camp/";
                    break;
        case "apple-store-app": goToLink = "www.apple.com/ca/apple-store";
                    break;
        case "refurbished": goToLink = "www.apple.com/ca/refurbished";
                    break;
        case "financing": goToLink = "www.apple.com/ca/shop/browse/financing";
                    break;
        case "trade-in": goToLink = "www.apple.com/ca/trade-in/";
                    break;
        case "order-status": goToLink = "www.apple.com/ca/shop/";
                    break;
        case "shopping-help": goToLink = "www.apple.com/ca/shop/help/";
                    break;

        // For Business 
        case "business": goToLink = "www.apple.com/ca/business/";
                    break;
        case "shop-for-business": goToLink = "www.apple.com/ca/retail/business/";
                    break;
        case "business-financing": goToLink = "www.apple.com/ca/financing/#business";
                    break;

        // For Education 
        case "education": goToLink = "www.apple.com/ca/education/";
                    break;
        case "k-12": goToLink = "www.apple.com/ca/education/k12/how-to-buy/";
                    break;
        case "university": goToLink = "www.apple.com/ca_edu_93120/store";
                    break;
        case "education-financing": goToLink = "www.apple.com/ca/financing/#education/";
                    break;

        // For Healthcare
        case "healthcare": goToLink = "www.apple.com/ca/healthcare/";
                    break;
        case "health": goToLink = "www.apple.com/ca/healthcare/apple-watch/";
                    break;
        case "health-records": goToLink = "www.apple.com/ca/healthcare/health-records/";
                    break;


        // Apple Values
        case "accessibility": goToLink = "www.apple.com/ca/accessibility/";
                    break;
        case "education-initiative": goToLink = "www.apple.com/ca/education-initiative/";
                    break;
        case "environment": goToLink = "www.apple.com/ca/environment/";
                    break;
        case "privacy": goToLink = "www.apple.com/ca/privacy/";
                    break;
        case "responsibility": goToLink = "www.apple.com/ca/supplier-responsibility/";
                    break;

        // About Apple
        case "newsroom": goToLink = "www.apple.com/ca/newsroom/";
                    break;
        case "leadership": goToLink = "www.apple.com/ca/leadership/";
                    break;
        case "opportunities": goToLink = "www.apple.com/careers/ca/";
                    break;
        case "investors": goToLink = "investor.apple.com/investor-relations/default.aspx";
                    break;
        case "ethics": goToLink = "www.apple.com/compliance/";
                    break;
        case "events": goToLink = "www.apple.com/ca/apple-events/";
                    break;
        case "contact": goToLink = "www.apple.com/ca/contact/";
                    break;

        // footer content
        case "legal-privacy": goToLink = "www.apple.com/ca/legal/privacy/";
                    break; 
        case "cookies": goToLink = "www.apple.com/ca/legal/privacy/en-ww/cookies/";
                    break; 
        case "terms-of-use": goToLink = "www.apple.com/ca/legal/internet-services/terms/site.html";
                    break; 
        case "refunds": goToLink = "www.apple.com/ca/shop/browse/open/salespolicies";
                    break; 
        case "legal": goToLink = "www.apple.com/ca/legal/";
                    break; 
        case "sitemap": goToLink = "www.apple.com/ca/sitemap/";
                    break;

        default: goToLink = "www.apple.com/ca"



    }
    setTimeout(function() {
        if (linkId === false) {
            window.location.href = goToLink;
        } else {
            window.location.href = window.location.protocol + "//" + goToLink;
        }
    }, 300);
}
