window.addEventListener("DOMContentLoaded", () => {
    
    //최상단 메인 particles
    particlesJS("particleVisual", {
        particles: {
            number: {
                value:190, density: {
                    enable:true, 
                    value_area: 2998.7610382026364,
                }
            }
            , color: {
                value: "#cccccc",
            }
            , shape: {
                type:"circle", 
                stroke: {
                    width: 2, 
                    color: "#fff",
                }
            }
            , opacity: {
                value:0.2, random:false, anim: {
                    enable:false, speed:1, opacity_min:0.1, sync: false,
                }
            }
            , size: {
                value:3, random:true, anim: {
                    enable:false, speed:40, size_min:0.1, sync: false,
                }
            }
            , line_linked: {
                enable:true, distance:200, color:"#cccccc", opacity:0.5, width: 1,
            }
            , move: {
                enable:true, speed:6, direction:"top-right", random:false, straight:false, out_mode:"out", bounce:false, attract: {
                    enable:true, rotateX:600, rotateY: 1200,
                }
            }
    //모바일 네비게이션 오픈
    NAV_OPEN_BTN.addEventListener("click", () => {
        activeClass = "active";
        NAV_OPEN_BTN.classList.toggle(activeClass);

        if(NAV_OPEN_BTN.classList.contains(activeClass)) {
            NAV.style.display = "block";
            setTimeout( () => {
                NAV.classList.add(activeClass);
            },100);
        } else {
            NAV.classList.remove(activeClass)
            setTimeout( () => {
                NAV.style.display = "none";
            },300);
        }
        , interactivity: {
            detect_on:"canvas", events: {
                onhover: {
                    enable:true, mode: "repulse",
                }
                , onclick: {
                    enable:true, mode: "push",
                }
                , resize: true,
            }
            , modes: {
                grab: {
                    distance:400, line_linked: {
                        opacity: 1,
                    }
                }
                , bubble: {
                    distance:400, size:56.84540486109416, duration:2, opacity:8, speed: 3,
                }
                , repulse: {
                    distance:200, duration: 0.4,
                }
                , push: {
                    particles_nb: 4,
                }
                , remove: {
                    particles_nb: 2,
                }
            }
        }, 
        retina_detect:true
    });
    //nav 메뉴 클릭시 스크롤 이동 이벤트
    const NAV_MENUS = document.querySelectorAll("nav .menu");
    const MAIN_CONTENT_SECTION = document.querySelectorAll("main > section");
    for(let i = 0; i < NAV_MENUS.length; i++) {
        let currentClass = "current";

        NAV_MENUS[i].addEventListener("click", (e) => {

            NAV_MENUS.forEach( (navMenus) => {
                navMenus.classList.remove(currentClass);
            });

            e.currentTarget.classList.add(currentClass);
            window.scrollTo(0,MAIN_CONTENT_SECTION[i].offsetTop);
        });

        window.addEventListener("scroll", () => {
            let scrY = this.scrollY + 100;

            if(scrY >= MAIN_CONTENT_SECTION[i].offsetTop) {
                if(NAV_MENUS[i].classList.contains(currentClass)) return;

                NAV_MENUS.forEach( (navMenus) => {
                    navMenus.classList.remove(currentClass);
                });
                
                NAV_MENUS[i].classList.add(currentClass);
            }
        });
    }

    
    
    //about skill 탭컨텐츠 실행
    const SKILLS_DETAIL = [
        {
            "name": `HTML5`,
            "description": `HTML5의 시멘틱 요소를 활용하여 웹 페이지의 구조를 더 명확하게 표현하고,
            목적에 맞는 디테일한 class명을 기입하여 추후 유지보수하는데 있어 용이하도록 마크업을 합니다.`
        },
        {
            "name": `CSS3`,
            "description": `CSS3 기술인 flex, grid 기술을 활용하여 레이아웃을 구축 할 수 있으며,
            IE 서비스 종료 이후 더욱 적극적으로 사용하여 스킬업을 하고 있습니다, 
            또한 디자인 시안에 맞춰 웹 페이지,웹 애플리케이션등 을 구축 할 수 있습니다.`
        },
        {
            "name": `JAVASCRIPT`,
            "description": `Javscript의 기본문법을 이해하고 동적인 웹 페이지, 웹 애플리케이션을 구축 할 수 있습니다.
            웹과 상호작용하여 이벤트 처리, 데이터 처리를 할 수 있으며, axios를 활용하여 서버와 비동기적 데이터를 주고 받을 수 있습니다.
            추가적으로 DOM을 쉽고 빠르게 제어 할 수 있는 JS라이브러리 제이쿼리를 능숙하게 다룰 수 있으며, swiper등과 같은 ui를 구현해주는 플러그인을 능숙하게 다룰 수 있습니다. 
            프레임워크(Vue.js)를 학습 & 공부를 지속적으로 하면서 효율적이고 강력한 웹 개발을 지향하고있습니다.`,
        },
        {
            "name": `Vue.js`,
            "description": `Vue.js를 활용하여 재사용이 가능한 컴포넌트 기반의 웹 애플리케이션을 구축 할 수 있습니다.
            'v-for','v-if','데이터바인딩' 등 Vue의 기본 문법을 이해하고, state를 관리하는 'Vuex',컴포넌트간 데이터를 처리할때 사용하는 'emitter'등의 다양한 플러그인을 활용 할 수 있습니다.
            상대적으로 React에 비해 코드의 자율성이 낮지만 그만큼 유지보수를 하거나, 협업하는데 있어 장벽이 낮다라고 생각하여 선택했습니다.
            트랜드에 맞춰 Vue3를 활용한 SPA(Single Page Application) 개발 방식을 선호합니다. 
            Vue의 개발환경을 설정해주는 도구인 Vue Cli를 활용하며 webpack 설정에 대한 고민을 최소화 합니다.
            `
        },
        {
            "name": `SCSS`,
            "description": `CSS전처리기인 SCSS을 활용하여 자주 사용하는 스타일과 컬러,속성등을 변수,mixin으로 관리하며, 
            상위 선택자의 반복을 피하고 편리하게 복잡한 구조를 작성 할 수 있습니다. 
            기본 문법을 활용하여 반복된 클래스명을 관리 할 수 있습니다.
            `
        },
        {
            "name": `Git`,
            "description": `협업하는데 있어 Git의 기본 사용법을 이해하고, 
            branch의 구조등을 논의하여 협업관리자와 함께 코드 관리를 간편하게 하며, 
            컨플릭트가 일어났을 때 대처 할 수 있습니다. Git을 사용하여 팀원들과 업무 방식, 커밋 방식등의 개선점을 제안하며
            효율적인 업무방식을 발전시키기위해 노력합니다. 또한, Git GUI툴인 소스트리(SourceTree)를 사용하여 보다 쉬운 난이도로 협업합니다.`
        }

    ];
    const SKILLS_BTNS = document.querySelectorAll(".about-my-skil-btn");
    const SKILL_DETAIL_NAME_EL = document.querySelector(".about-my-skil-detail-name");
    const SKILL_DETAIL_DESC_EL = document.querySelector(".about-my-skil-detail-desc");
    
    for(let i = 0; i < SKILLS_BTNS.length; i++) {
        SKILLS_BTNS[i].addEventListener("click", (e) => {
            activeClass = "active";
            SKILLS_BTNS.forEach( (skillsBtn) => {
                skillsBtn.classList.remove(activeClass);
            });
            
            e.currentTarget.classList.add(activeClass);
            SKILL_DETAIL_NAME_EL.textContent = SKILLS_DETAIL[i].name;
            SKILL_DETAIL_DESC_EL.textContent = SKILLS_DETAIL[i].description;
        });
    }
});

let activeClass;
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

/**
 * 메인 키워드 페이드 인앤아웃 효과 함수
 */

let keywordFade = () => {
    activeClass = "active"
    let currentTarget = document.querySelector(`.pofol-keyword.${activeClass}`);
    currentTarget.classList.remove(activeClass);
    
    let nextTarget = currentTarget.nextElementSibling;

    if(!nextTarget) {
        nextTarget = document.querySelector(".pofol-keyword:first-child");
    }

    nextTarget.classList.add(activeClass); 
}


/**
 * 
 * @param {nodeList 형태의 탭버튼 DOM요소} tabs 
 * @param {nodeList 형태의 탭 컨텐츠 요소} contents 
 */
let tabAndContActive = (tabs,contents) => {
    activeClass = "active";
    for(let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener("click", () => {

            tabs.forEach( (tab,idx) => {
                tab.classList.remove(activeClass);
                contents[idx].classList.remove(activeClass);
            });

            tabs[i].classList.add(activeClass);
            contents[i].classList.add(activeClass);
        });
    }
}