//intro animations 
const INTRO_ANI_BOX = document.getElementById('introAniBox');
let introAni = bodymovin.loadAnimation({
    wrapper: INTRO_ANI_BOX,
    animType: 'svg',
    loop: true,
    autoplay: true,
    path: "../lottie/intro.json",
});

//intro percentage animations
const HTML_ = document.querySelector("html,body");
const INTRO = document.querySelector(".intro-box");
const PERCENTAGE_BAR = document.getElementById("percentageBar");
const LOADING_TXT_BOX = document.querySelector(".loading-txt-box");
const LOADING_TXT_EL = document.querySelectorAll(".loading-txt");
const CONNECT_TXT_EL = document.querySelectorAll(".connect-txt");

/**common.js 전역변수 activeClass  재정의  */
activeClass = "active";

setTimeout( () => {
    PERCENTAGE_BAR.style.width = "100%";
},300);

setTimeout ( () => {
    LOADING_TXT_EL.forEach( (loadingTxts) => {
        loadingTxts.classList.remove(activeClass);
    });

    setTimeout( () => {
        CONNECT_TXT_EL.forEach( (connectTxts) => {
            LOADING_TXT_BOX.remove();
            connectTxts.classList.add(activeClass);
        });
    },1000);
},3000);

setTimeout( () => {
    INTRO.classList.add("close");

    if(INTRO.classList.contains("close") === true) {
        setTimeout( () => {
            INTRO.remove();
            HTML_.style.overflowY = "auto";
            VISUAL_ANI_BOX.classList.add("on");
            //typing 실행
            let typingTextNewLine = `CONNECT PORTFOLIO :)`;
            typing("#typing",typingTextNewLine);

            setTimeout( () => {
                //Home 키워드 fade 실행
                document.querySelector(".pofol-keyword:first-child").classList.add(activeClass);
                setInterval(keywordFade,2000);
            },2500);
        },1000);
    }
},6000);
