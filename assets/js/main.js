//Declare variables for cloak here
const local_title = localStorage.getItem("title");
const local_icon = localStorage.getItem("icon");

//If the window already has title stored in localstorage
if (window.localStorage.hasOwnProperty("title")) {
  document.title = local_title;
}
//Fetch and set from user's input
if (window.localStorage.hasOwnProperty("icon")) {
  document.querySelector("link[rel=icon]").href = local_icon;
}

//Add Google Analytics
const gascript = document.createElement("script");
gascript.setAttribute("async", "");
gascript.setAttribute("src", "https://www.googletagmanager.com/gtag/js?id=UA-159383230-1");
const inlinegascript = document.createElement("script");
inlinegascript.innerHTML = `window.dataLayer = window.dataLayer || []; 
function gtag(){dataLayer.push(arguments);} 
gtag('js', new Date()); 
gtag('config', 'UA-159383230-1');`
document.head.append(gascript, inlinegascript);

//Semantic - Major.Minor.Patch
const sArr = [`1`, `4`, `0`];
const version = "v" + sArr.join(".");

//Fetch visit count
const visitapi = "https://raw.githubusercontent.com/tw31120071857/website-views/main/index.html";
fetch(visitapi)
.then((res) => res.json())
.then((res) => {
  document.getElementById("visit-count").innerText = " " + parseInt(res.value).toLocaleString("en-US"); //Add commas
});

//Turn off GSAP null warnings (if present)
try {
  gsap.config({
    nullTargetWarn: false,
  });
} catch {
  //empty b/c no need for return
}

//Hamburger Menu Navbar
const toggleMenu = () => {
  $("#hamburgerMenu").toggleClass("collapsed");
  $(".aa-mobile-overlay").animate(
    {
      height: "toggle",
      opacity: "toggle",
    },
    300
  );
};

const navHeight = 90;
const scrollNavHeight = 65;
let isExpanded = true;

$(window).scroll(function () {
  if ($(window).scrollTop() > navHeight) {
    $(".aa-nav").addClass("aa-small-nav");
    $(".aa-nav-icon").addClass("aa-small-nav-icon");
    $(".aa-nav-items").addClass("aa-small-nav-items");
    $(".aa-hamburger-menu").addClass("aa-small-hamburger-menu");
    isExpanded = false;
  }

  if (!isExpanded && $(window).scrollTop() < navHeight) {
    $(".aa-nav").removeClass("aa-small-nav");
    $(".aa-nav-icon").removeClass("aa-small-nav-icon");
    $(".aa-nav-items").removeClass("aa-small-nav-items");
    $(".aa-hamburger-menu").removeClass("aa-small-hamburger-menu");
    $(".aa-nav-item > a").css("color", "white");
    isExpanded = true;
  }
});

//Prepend Navbar (using innerHTML because there's no escaped input)
const $header = document.createElement("header");
$header.innerHTML = `
<nav class="aa-nav">
<div class="aa-nav-icon-container">
  <a href="/"><img class="aa-nav-icon" src="/assets/img/socials/icon.png" alt="BCHS Unblocked Games" /></a>
</div>
<div class="aa-nav-items">
  <span class="aa-nav-item"><a href="/" target="_top">Home</a></span>
  <span class="aa-nav-item"><a href="/games.html" target="_top">Games</a></span>
  <span class="aa-nav-item"><a href="/holy-unblocker.html" target="_top">Holy Unblocker</a></span>
  <span class="aa-nav-item"><a href="/chat.html" target="_top">Chat</a></span>
  <span class="aa-nav-item"><a href="/changelog.html" target="_top">Changelog</a></span>
  <span class="aa-nav-item"><a href="https://forms.gle/ckyJ6yjMjSBDrTwKA" target="_top">Request Games</a></span>
  <span class="aa-nav-item"><a href="https://github.com/tw31120071857/BCHS-Unblocked-Games-V3" target="_top">Github</a></span>
  <span class="aa-nav-item"><a href="/faq.html" target="_top">FAQ</a></span>
  <span class="aa-nav-item"><a href="https://forms.gle/tHRagEXzHKQmbN4CA" target="_top">Report a Problem</a></span>
  <span class="aa-nav-item"><a href="https://discord.gg/GtTGC8RQmC" target="_top">Discord</a></span>
  <span class="aa-nav-item"><a href="/settings.html" target="_top">Settings</a></span>
  <span class="aa-nav-item"><div class="users-online"><i class="fas fa-users"></i> <span id="user-count"></span></div></span>
</div>
</nav>

<div class="aa-hamburger-menu collapsed" id="hamburgerMenu" onclick="toggleMenu()">
<span class="aa-icon-bar"></span>
<span class="aa-icon-bar"></span>
<span class="aa-icon-bar"></span>
</div>

<div class="aa-mobile-overlay">
<ul class="aa-mobile-nav-items">
  <li><a href="/" target="_top">Home</a></li>
  <li><a href="/games.html" target="_top">Games</a></li>
  <li><a href="/faq.html" target="_top">FAQ</a></li>
  <li><a href="/changelog.html" target="_top">Changelog</a></li>
  <li><a href="/changelog.html" target="_top">Settings</a></li>
</ul>
</div>`;
document.body.prepend($header);

//Append footer (using innerHTML because there's no escaped input)
const $footer = document.createElement("footer");
$footer.classList.add("footer");
const copyrightDate = new Date().getFullYear(); //get the current year
$footer.innerHTML = `<div class="footer__container">
<div class="footer-content">
    <div class="footer-content__left">
        <h2 class="footer-content__title">
            <span class="footer-content__title_span1"></span><span class="footer-content__title_span2"></span>
            
        </h2>
        <p class="footer-content__text">
            Free games for everyone.
        </p>
        <div class="socials">
            <div class="socials__inner">
                <a href="https://instagram.com/officialBCHS Unblocked Games/" target="_blank" class="socials__link" rel="noreferrer">
                    <img src="/assets/img/socials/instagram.svg" alt="Instagram">
                </a>                
                <a href="https://tiktok.com/@officialBCHS Unblocked Games" target="_blank" class="socials__link" rel="noreferrer">
                    <img src="/assets/img/socials/tiktok.svg" alt="TikTok">
                </a>
                <a href="https://discord.gg/yXJgyuByYZ" target="_blank" class="socials__link" rel="noreferrer">
                    <img src="/assets/img/socials/discordicon.svg" alt="Discord">
                </a>
                <a href="mailto:help.BCHS Unblocked Games@gmail.com" target="_blank" class="socials__link" rel="noreferrer">
                    <img src="/assets/img/socials/gmail.svg" alt="Email">
                </a>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" class="socials__link" rel="noreferrer">
                    <img src="/assets/img/socials/youtube.svg" alt="Youtube">
                </a>
            </div>
        </div>
        <div class="footer__visits"><i class="fas fa-eye"></i><span id="visit-count">0</span></div>
        <a href="/changelog.html" target="_top" class="footer__version"><i class="fas fa-code-branch"></i><div class="version">${version}</div></a>
        
    </div> 
    <div class="footer-content__right">
        <div class="footer-content__wrapper">
          <nav class="footer-content__nav">
          <a class="footer-content__nav-link" href="/" target="_top">Home</a>
          <a class="footer-content__nav-link" href="/games.html" target="_top">Games</a>
          <a class="footer-content__nav-link" href="/faq.html" target="_top">FAQ</a>
          <a class="footer-content__nav-link" href="/terms.html" target="_top">Terms of Service</a>
          <a class="footer-content__nav-link" href="https://github.com/tw31120071857/BCHS-Unblocked-Games-V3" target="_top">Github</a>
          <a class="footer-content__nav-link" href="/holy-unblocker.html" target="_top">Holy Unblocker</a>
          <a class="footer-content__nav-link" href="/chat.html" target="_top">Chat</a>
        </nav>
        <nav class="footer-content__nav">
          <a class="footer-content__nav-link" href="/changelog.html" target="_top">Changelog</a>
          <a class="footer-content__nav-link" href="/settings.html" target="_top">Settings</a>
          <a class="footer-content__nav-link" href="/dmca.html" target="_top">DMCA</a>
          <a class="footer-content__nav-link" href="/privacy.html" target="_top">Privacy Policy</a>
          <a class="footer-content__nav-link" href="https://forms.gle/ckyJ6yjMjSBDrTwKAl" target="_top">Request Games</a>
          <a class="footer-content__nav-link" href="https://forms.gle/tHRagEXzHKQmbN4CA" target="_top">Report a Problem</a>
          <a class="footer-content__nav-link" href="https://discord.gg/GtTGC8RQmC" target="_top">Discord</a>
    </nav>
        </div>
    </div>
</div>
<div class="footer-copyright">
    <p class="footer-copyright__text">Copyright BCHS Unblocked Games © 2021-${copyrightDate}. All rights reserved to respective owners</p>
</div>
</div>`;

//Check for essential pages
if (document.body.dataset.ess) {
  document.body.appendChild($footer);
} else {
  let bottomwrapper = document.getElementsByClassName("content-wrapper");
  bottomwrapper[bottomwrapper.length - 1].appendChild($footer);
}
