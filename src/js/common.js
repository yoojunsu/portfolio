window.addEventListener("DOMContentLoaded", () => {
    
});


/**
 * 타이핑 효과 함수
 * @param {타이핑 요소의 아이디or클래스 기입} typingEl 
 * @param {타이밍 처리 될 텍스트 문자열 기입} typingText 
 */
let typing = (typingEl, typingText) => {
    let i = 0;
    const TYPING_El = document.querySelector(typingEl);
    const TYPING_TEXT = typingText;

    let typingActive = () => {
        if(i < TYPING_TEXT.length) {
            let typingContent = TYPING_TEXT.charAt(i);
            TYPING_El.innerHTML += typingContent;
            i++;
        }
    }

    setInterval(typingActive,100);
}

let keywordFade = () => {
    const ACTIVE_CLASS = "active";
    let currentTarget = document.querySelector(`.pofol-keyword.${ACTIVE_CLASS}`);
    currentTarget.classList.remove(ACTIVE_CLASS);
    
    let nextTarget = currentTarget.nextElementSibling;

    if(!nextTarget) {
        nextTarget = document.querySelector(".pofol-keyword:first-child");
    }

    nextTarget.classList.add(ACTIVE_CLASS); 
}