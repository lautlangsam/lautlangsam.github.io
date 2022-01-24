
$(document).ready(function () {
    $(".content-to-load").load("./home.html")

    // const app = document.getElementById("winamp")
    // const webamp = new Webamp();
    // webamp.renderWhenReady(app);
    // glitchyBanner();
    startTypewriter();
})

$("#nav-home").click(function () {
    $(".content-to-load").load("./home.html");
})

$("#nav-tour").click(function () {
    $(".content-to-load").load("./tour.html");
})

$("#nav-news").click(function () {
    $(".content-to-load").load("./news.html");
})

$("#nav-about").click(function () {
    $(".content-to-load").load("./about.html");
})

$("#nav-merch").click(function () {
    $(".content-to-load").load("./merch.html");
})


function glitchyBanner() {

    //TODO:: glitchy effect randomize on mobile
    //TODO:: glitchy effect on hover on desktop
    //TODO:: randomize timeouts
    setTimeout(function () {
        $("#header-img").attr("src", "./assets/gifs/band_glitchy.gif");
        setTimeout(function () {
            $("#header-img").attr("src", "./assets/img/massa_band.jpg");
            glitchyBanner();
        }, 1500)
    }, 4000)
}

function startTypewriter() {
    let subheader = document.getElementById("subheader-typejs")

    let typewriter = new Typewriter(subheader, {
        delay: 50
    });

    //TODO:: add other texts from booklets
    typewriter.typeString("the distance between where I am and where I want to be is always the same.").start();
}