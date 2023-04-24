//intro animations 
const INTRO_ANI_BOX = document.getElementById('introAniBox');

let introAni = bodymovin.loadAnimation({
    wrapper: INTRO_ANI_BOX,
    animType: 'svg',
    loop: true,
    autoplay: true,
    path: "../lottie/intro2-lottie.json",
});

const PERCENTAGE_BAR = document.getElementById("percentageBar");
setTimeout( () => {
    PERCENTAGE_BAR.style.width = "100%";
},300);
