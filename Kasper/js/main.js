// StartScroll
let scrollUp = document.querySelector("#ScrollUp");

window.addEventListener("scroll", function (e) {
    if (this.window.pageYOffset > 300) {
        if (!scrollUp.classList.contains("scrollActive")) {
            scrollUp.classList.remove("scrollNotActive");
            scrollUp.classList.add("scrollActive");
            scrollUp.style.display = "block"
        }
    } else {
        if (scrollUp.classList.contains("scrollActive")) {
            scrollUp.classList.remove("scrollActive");
            scrollUp.classList.add("scrollNotActive");
            this.setTimeout(function() {
                scrollUp.style.display = "none"
            }, 250);
        }
    }
});

scrollUp.addEventListener("click", backToTop => {
    window.scrollTo(0, 0)
});
// EndScroll
// Search

let search = document.querySelector("header .search");
let searchText = document.getElementById("search");
let icon = document.querySelector("header .search .icon");
let clear = document.querySelector("header .search .clear");

icon.onclick = function() {
    search.classList.toggle("active")
}

clear.onclick = function() {
    searchText.value = "";
}

// ToggleMenu
let toggleMenu = document.querySelector("header nav .toggle-menu");
let menu = document.querySelector("header .container nav ul");

toggleMenu.onclick = function() {
    menu.classList.toggle("active")
}
// ScrollImage
$(function() {
    $('.slider, .carousel-item').height($(window).height());
});

// Portfolio

let switchLi = document.querySelectorAll(".portfolio .shuffle li");
let imgs = document.querySelectorAll(".portfolio .imagesContainer .box");

switchLi.forEach((li) => {
    li.addEventListener("click", removeActive);
    li.addEventListener("click", manageImgs);
})

function removeActive() {
    switchLi.forEach((li) => {
        li.classList.remove("active");
        this.classList.add("active");
    })
}

function manageImgs() {
    imgs.forEach((img) => {
        img.style.display = "none";
    });
    document.querySelectorAll(this.dataset.cat).forEach((e) => {
        e.style.display = "block";
    })
}

//Stats

let skillsSection = document.querySelector(".skills");
let skillsProgress = document.querySelectorAll(".skills .ourSkills .progress .progress-bar");

let number = document.querySelectorAll(".stats .box .number");
let stats = document.querySelector(".about");
let started = false;


window.onscroll = function() {
    if (window.scrollY >= skillsSection.offsetTop - 600) {
        skillsProgress.forEach((e) => {
            e.style.width = e.dataset.progress;
        }) 
    }
    if (window.scrollY >= stats.offsetTop) {
        if (!started) {
            number.forEach((num) => startCount(num))
        }
        started = true;
    }
}

function startCount(e) {
    let goal = e.dataset.goal;
    let count = setInterval(() => {
        e.textContent++;
        if (e.textContent == goal) {
            clearInterval(count)
        }
    }, 1);
}