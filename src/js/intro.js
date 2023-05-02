//intro animations 
const INTRO_ANI_BOX = document.getElementById('introAniBox');
let introAni = bodymovin.loadAnimation({
    wrapper: INTRO_ANI_BOX,
    animType: 'svg',
    loop: false,
    autoplay: true,
    path: "../lottie/intro-new-lottie.json",
});

//intro percentage animations
const INTRO = document.querySelector(".intro-box");
const PERCENTAGE_BAR = document.getElementById("percentageBar");
const LOADING_TXT_BOX = document.querySelector(".loading-txt-box");
const LOADING_TXT_EL = document.querySelectorAll(".loading-txt");
const CONNECT_TXT_EL = document.querySelectorAll(".connect-txt");
const ACTIVE_CLASS = "active";

setTimeout( () => {
    PERCENTAGE_BAR.style.width = "100%";
},300);

setTimeout ( () => {
    LOADING_TXT_EL.forEach( (loadingTxts) => {
        loadingTxts.classList.remove(ACTIVE_CLASS);
    });

    setTimeout( () => {
        CONNECT_TXT_EL.forEach( (connectTxts) => {
            LOADING_TXT_BOX.remove();
            connectTxts.classList.add(ACTIVE_CLASS);
        });
    },1000);
},3000);

setTimeout( () => {
    INTRO.classList.add("close");

    if(INTRO.classList.contains("close") === true) {
        setTimeout( () => {
            INTRO.remove();
        },1000);
    }
},6000);
