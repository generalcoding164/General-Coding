// bio

var bioCont = document.querySelector("#bio");

setTimeout(() => {
    bioCont.innerHTML = "And, I can make apps for you when I am ready ! 😄";
}, 5000);

// selecting appBar
var appBarTabLists = document.querySelectorAll(".appBarItem");
appBarTabLists.forEach((tab) => {
    tab.addEventListener("click", () => {
        appBarTabLists.forEach((tab) => {
            tab.classList.remove("selectedTab");
        });
        tab.classList.add("selectedTab");
    });
});

// making app Bar invisible
var appBar = document.querySelector(".appBar");
var lastScrollY = window.scrollY;
console.log(lastScrollY);

window.addEventListener("scroll",()=>{
    if (lastScrollY<window.scrollY) {
        appBar.classList.add("hidden");
    } else if (lastScrollY>window.screenY) {
        appBar.classList.remove("hidden");
    }
    lastScrollY = window.scrollY;
});
