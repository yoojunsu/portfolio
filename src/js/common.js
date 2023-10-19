window.addEventListener("DOMContentLoaded", () => {

    //AOS 
    AOS.init({
        duration: 1500,
    });

    //최초 로드시 checkDivice 함수 실행 및 리사이즈시 동일 함수 실행
    checkDivice();
    window.addEventListener("resize",checkDivice);

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

    
    //최상단 메인 particles
    particlesJS("particleVisual", {"particles":{"number":{"value":120,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"star","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.1683582663908799,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":3,"direction":"bottom-right","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"grab"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});

    //고정되어있는 컨텐츠 영역 particles
    particlesJS("particleContent", {"particles":{"number":{"value":33,"density":{"enable":true,"value_area":800}},"color":{"value":"#ccd6f6"},"shape":{"type":"star","stroke":{"width":2,"color":"#ccd6f6"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.18939543399174544,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":2,"direction":"right","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});
    
    //about skill 탭컨텐츠 실행
    const SKILLS_DETAIL = [
        {
            "name": `HTML5`,
            "description": `HTML5의 시맨틱 요소를 활용하여 웹 페이지의 구조를 더 명확하게 표현 하는 것을 지향하며, 언제나 접근성 및 검색엔진최적화(SEO)를 고려하여 마크업을 합니다.
            또한, css,Javascript와의 상호작용을 고려하여 class명과 id명을 적절하게 사용합니다.`
        },
        {
            "name": `CSS3`,
            "description": `CSS3기술을 적극적으로 활용하여, 유연한 웹 레이아웃을 만들 수 있고 디자인 시안에 맞게 웹 페이지,웹 애플리케이션을 구축합니다.
            특히 최신 레이아웃 기술인 flex,grid 기술을 적극적으로 사용 및 선호합니다.`
        },
        {
            "name": `JAVASCRIPT`,
            "description": `Javscript의 기본문법을 이해하고 동적인 웹 페이지, 웹 애플리케이션을 구축 할 수 있습니다.
            이벤트 처리,데이터 처리, 서버와의 비동기 통신을 다루며, jQuery를 능숙하게 다를 수 있으며 Vue.js와 같은 프레임워크를 활용하여 효율적인 개발을 지향합니다.
            또한, 작업 생산률을 높여주는 플러그인을 활용 및 커스터마이징 할 수 있습니다.`,
        },
        {
            "name": `Vue.js`,
            "description": `Vue.js를 활용하여 재사용이 가능한 컴포넌트 기반의 웹 애플리케이션을 구축 할 수 있습니다.
            Vue기본문법을 이해하며, Vuex,Vue Router를 활용하여 State관리와 라우팅을 구현 합니다. Vue Cli와, 현대적인 SPA개발 방식을 선호하여, webpack설정에 대한 고민을 최소화 합니다.
            `
        },
        {
            "name": `SCSS`,
            "description": `CSS전처리기인 SCSS를 활용하여 스타일 관리를 개선하고 변수와 mixin을 적극 활용하여 
            작업 생산률을 높이는 것을 지향합니다. 기본문법 및 기초적인 Scss 내장함수를 이해하고있어, 필요시 적극적으로 사용합니다.
            `
        },
        {
            "name": `Git`,
            "description": `Git을 사용하여 협업하고, 버전 관리를 할 수 있습니다. 논의를 통해 Branch 전략과, 커밋 관리를 통해 효율적입 협업 및 형상관리를 할 수 있으며, 
            대규모 프로젝트시에는 Git의 GUI도구인 소스트리(SourceTree)를 보다 간편하게 Git을 다루고, 필요시 Git의 필수 명령어를 이해하여 터미널 또한 적극 활용합니다.`
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

    //프로젝트 더보기
    LOAD_MORE_PROJECT_BTN.addEventListener("click",() => {
        loadMoreProject();
    });

    //티스토리 blog 데이터 셋팅
    blogDataSet();

    //contact 문의 form 동작
    const FORM_SEND_BTN = document.getElementById("sendBtn");
    const FORM_RESET_BTN = document.getElementById("resetBtn");
    FORM_SEND_BTN.addEventListener("click",() => {
        sendMessage();
    });

    FORM_RESET_BTN.addEventListener("click",formReset);

    //form 전송 완료 확인 팝업 닫기
    const FORM_SEND_MODAL_CLOSE_BTN = document.getElementById("modalCloseBtn");
    FORM_SEND_MODAL_CLOSE_BTN.addEventListener("click", () => {
        modalClose(FORM_SEND_MODAL);

        //모달 닫기시 작성한 form 내용 reset
        formReset();
    });
});


//전역변수
let activeClass;
const NAV = document.querySelector("nav");
const NAV_OPEN_BTN = document.getElementById("navOpenBtn");
/**
 * 디바이스 체크 및 대응 함수
 */
let checkDivice = () => {

    //디바이스 체크 및 동작 대응
    let screenWidth = window.innerWidth;
    
    if(screenWidth <= 550) {
        NAV.style.display = "none";
        NAV.classList.remove("active");
        NAV_OPEN_BTN.classList.remove("active");
    } else {
        NAV.style.display = "block";
        NAV_OPEN_BTN.classList.remove("active");
    }

    //모바일 browse url주소창 height 100vh 값 대응을위한 설정
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
}

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
 * 메인 상단 비주얼 영역 lottie
 */
const VISUAL_ANI_BOX = document.getElementById('visualAniWrap');
let visualAni = bodymovin.loadAnimation({
    wrapper: VISUAL_ANI_BOX,
    animType: 'svg',
    loop: true,
    autoplay: true,
    path: "./lottie/intro.json",
});

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
 * 탭 클릭시 해당 컨텐츠 노출되는 함수
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

/**
 * 프로젝트 더보기 함수
 */
const LOAD_MORE_PROJECT_BTN = document.getElementById("loadMoreBtn");
let projectData = [
    {
        name: "미인대회 리뉴얼",
        descriptions: {
            0: "미인대회 소개&참가신청 사이트 (10개)",
            1: "구현 & 운영(업체이슈로 오픈 보류)",
            2: "퍼블리싱 100%",
            3: "PHP(Laravel)",
            4: "적응형 웹",
            5: "HTML, CSS, JAVASCRIPT",
        },
        url: "http://dev.sejongsoheon.kr/"
    },
    {
        name: "한국프리미엄브랜드 진흥원",
        descriptions: {
            0: "행사 주최 & 마케팅 대행사 업체 사이트",
            1: "Vue.js 기반 사이트로 리뉴얼 & 관리자페이지 구현",
            2: "퍼블리싱 100%",
            3: "PHP(Laravel)",
            4: "적응형 웹",
            5: "HTML, CSS, SCSS, Bootstrap, JAVASCRIPT, Vue.js",
        },
        url: "http://www.kpbrand.kr/"
    },
    {
        name: "한프진 주최 시상식 홍보 랜딩",
        descriptions: {
            0: "한프진 주최 시상식 홍보목적의 랜딩 - 동일 컨셉 12개 페이지",
            1: "신규 구현",
            2: "퍼블리싱 100%",
            3: "PHP",
            4: "적응형 웹",
            5: "HTML, CSS, SCSS, JAVASCRIPT",
        },
        url: "http://landing4.kpbrand.kr/"
    },
    {
        name: "헬시엑소",
        descriptions: {
            0: "엑소바이옴코리아 소속 건강식품 쇼핑몰",
            1: "관리자페이지 구현 & 본페이지 운영",
            2: "퍼블리싱 100%",
            3: "PHP(Laravel)",
            4: "적응형 웹",
            5: "HTML, CSS, Bootstrap, JAVASCRIPT, Vue.js",
        },
        url: "http://www.healthyexo.kr/"
    },
    {
        name: "엑소리젠-제품 소개 랜딩 페이지",
        descriptions: {
            0: "엑소리젠 주력 상품 소개 랜딩페이지",
            1: "신규 페이지 구현",
            2: "퍼블리싱 100%",
            3: "JAVA(외주개발)",
            4: "적응형 웹",
            5: "HTML, CSS, SCSS, JAVASCRIPT(Jquery)",
        },
        url: "https://www.exoregen.kr/myoffice/pub.do?prgId=osMain.osPentaLanding"
    },
    {
        name: "결혼정보회사 DB수집 랜딩",
        descriptions: {
            0: "퍼플스 그룹 산하 결혼정보 3사 고객 DB수집 페이지 다수",
            1: "구현 및 운영",
            2: "퍼블리싱 100%",
            3: "ASP",
            4: "모바일 웹",
            5: "HTML, CSS, SCSS, JAVASCRIPT(Jquery)",
        },
        url: "https://yoojunsu.notion.site/DB-653fd999579c4cc5a5b41d0e71e43597"
    },
    {
        name: "결혼정보회사 상담예약 모바일 프로젝트",
        descriptions: {
            0: "퍼플스 그룹 산하 결혼정보 3사 고객 DB수집 페이지 다수",
            1: "구현 및 운영",
            2: "퍼블리싱 100%",
            3: "ASP",
            4: "모바일 웹",
            5: "HTML, CSS, SCSS, JAVASCRIPT(Jquery)",
        },
        url: "https://yoojunsu.notion.site/51bc1070ccef4c1f908ac6bebf4eaff4?pvs=4",
    },
    {
        name: "퍼플스-트리니티 멤버 신규페이지",
        descriptions: {
            0: "특별회원 프로그램 소개 페이지",
            1: "신규페이지 구현",
            2: "퍼블리싱 100%",
            3: "ASP",
            4: "적응형 웹",
            5: "HTML, CSS, SCSS, JAVASCRIPT(Jquery)",
        },
        url: "http://www.purples.co.kr/sub/sub4/sub4_14.asp"
    },
    {
        name: "퍼플스-매니저 채용 신규페이지",
        descriptions: {
            0: "신규 커플매니저 채용 페이지",
            1: "신규페이지 구현",
            2: "퍼블리싱 100%",
            3: "ASP",
            4: "적응형 웹",
            5: "HTML, CSS, SCSS, JAVASCRIPT(Jquery)",
        },
        url: "http://www.purples.co.kr/sub/recruit.asp"
    },
    {
        name: "퍼플스-TV CF 소개페이지",
        descriptions: {
            0: "TV CF 제작기념 소개페이지",
            1: "신규페이지 구현",
            2: "퍼블리싱 100%",
            3: "ASP",
            4: "적응형 웹",
            5: "HTML, CSS, SCSS, JAVASCRIPT(Jquery)",
        },
        url: "http://www.purples.co.kr/sub/sub1/sub1_24.asp"
    },
    {
        name: "디노블",
        descriptions: {
            0: "결혼정보회사 사이트",
            1: "기존 사이트 유지보수 운영",
            2: "퍼블리싱 100%",
            3: "ASP",
            4: "모바일 웹",
            5: "HTML, CSS, SCSS, JAVASCRIPT(Jquery)",
        },
        url: "http://dnoble.co.kr/"
    },
    {
        name: "르매리",
        descriptions: {
            0: "결혼정보회사 사이트",
            1: "기존 사이트 유지보수 운영",
            2: "퍼블리싱 100%",
            3: "ASP",
            4: "모바일 웹",
            5: "HTML, CSS, SCSS, JAVASCRIPT(Jquery)",
        },
        url: "http://www.lemarry.co.kr/"
    },
    {
        name: "쇼핑몰 PC웹 템플릿 구축",
        descriptions: {
            0: "카페 24기반 쇼핑몰 PC웹 구현",
            1: "신규 제작",
            2: "디자인(포토샵 기반) & 퍼블리싱 100%",
            3: "퍼블리싱 100%",
            4: "PC 웹",
            5: "HTML, CSS, SCSS, JAVASCRIPT(Jquery)",
        },
        url: "http://skin-skin12.tlsghkxld.cafe24.com/index.html"
    },
];
let currentIdx = 0;
let loadMoreProject = () => {
    const PROJECT_LIST = document.querySelector(".project-list");

    // 가져올 프로젝트 갯수
    let addProjectsNum = 3;

    // 추가할 프로젝트 
    let addProjectsData = projectData.slice(currentIdx, currentIdx + addProjectsNum);

    addProjectsData.forEach( (project) => {
        const projectHTML = `
            <li class="work project" data-aos="zoom-in">
                <div class="work-inner">
                    <span class="work-txt">WORK</span>
                    <h3 class="work-name">
                        ${project.name}
                    </h3>
                    <ul class="work-info-list">
                        <li class="work-info">
                            <span>${project.descriptions[0]}</span>
                        </li>
                        <li class="work-info">
                            <span>${project.descriptions[1]}</span>
                        </li>
                        <li class="work-info">
                            <span>${project.descriptions[2]}</span>
                        </li>
                        <li class="work-info">
                            <span>${project.descriptions[3]}</span>
                        </li>
                        <li class="work-info">
                            <span>${project.descriptions[4]}</span>
                        </li>
                        <li class="work-info">
                            <span>${project.descriptions[5]}</span>
                        </li>
                    </ul>
                    <div class="work-link-wrap">
                        <a href="${project.url}" class="work-link" target="_blank">
                            <span>URL</span>
                        </a> 
                    </div>
                </div>
            </li>
        `
        //프로젝트 추가
        PROJECT_LIST.innerHTML += projectHTML;

        console.log(projectHTML);
    });

    // project갯수 업데이트
    currentIdx += addProjectsNum;

    //모든 프로젝트 데이터 출력시 버튼 삭제
    if(currentIdx >= projectData.length) {
        LOAD_MORE_PROJECT_BTN.remove();
    }
}


/**
 * loading animation
 */
const LOADING_SCREEN = document.getElementById('loadingScreen');
const LOADING_ANI_BOX = document.getElementById('loadingAniWrap');
let loadingAni = bodymovin.loadAnimation({
    wrapper: LOADING_ANI_BOX,
    animType: 'svg',
    loop: true,
    autoplay: false,
    path: "./lottie/loading.json",
});

let loadingScreenShow = () => {
    loadingAni.play();
    LOADING_SCREEN.style.display = "block";
}

let loadingScreenHide = () => {
    loadingAni.pause();
    LOADING_SCREEN.style.display = "none";
}

/**
 * layer modal 오픈 함수
 */
let modalOpen = (modalTarget) => {
    activeClass = "active";

    MODAL_WRAP.style.display = "block";
    modalTarget.style.display = "block";
    setTimeout( () => {
        modalTarget.classList.add(activeClass);
    },300);
}

let modalClose = (modalTarget) => {
    activeClass = "active";
    modalTarget.classList.remove(activeClass)
    setTimeout( () => {
        MODAL_WRAP.style.display = "none";
        modalTarget.style.display = "none";
    },500);
}
/**
 * contact form 전송 함수
 */
const DUMMY_URL = "https://jsonplaceholder.typicode.com/posts";
const MODAL_WRAP = document.querySelector(".modal-wrap");
const FORM_SEND_MODAL = document.getElementById("formSendModal");
const FORM_SEND_NAME_EL = document.getElementById("formSendName");
const FORM_SEND_EMAIL_EL = document.getElementById("formSendEmail");
let sendMessage = () => {
    const NAME_INPUT = document.getElementById("userName");
    const EMAIL_INPUT = document.getElementById("userEmail");
    const MSG_INPUT = document.getElementById("userMsg");
    const NAME_VALUE = NAME_INPUT.value;
    const EMAIL_VALUE = EMAIL_INPUT.value;
    const MSG_VALUE = MSG_INPUT.value;
    let errClass = "error";
    let setTimer = 2000;

    if(!NAME_VALUE) {
        NAME_INPUT.classList.add(errClass);
        NAME_INPUT.focus();
        setTimeout( () => {
            NAME_INPUT.classList.remove(errClass);
        },setTimer);
        return;
    } else if(!EMAIL_VALUE || !validateEmail(EMAIL_VALUE)) {
        EMAIL_INPUT.classList.add(errClass);
        EMAIL_INPUT.focus();
        setTimeout( () => {
            EMAIL_INPUT.classList.remove(errClass);
        },setTimer);
        return;
    } else if(!MSG_VALUE) {
        MSG_INPUT.classList.add(errClass);
        MSG_INPUT.focus();
        setTimeout( () => {
            MSG_INPUT.classList.add(errClass);
        });
        return;
    }

    loadingScreenShow();

    axios.post(DUMMY_URL, {
        "name": NAME_VALUE,
        "email": EMAIL_VALUE,
        "msg": MSG_VALUE,
    }).then( (res) => {
        loadingScreenHide();
        console.log(res.data);
        FORM_SEND_NAME_EL.textContent = res.data.name;
        FORM_SEND_EMAIL_EL.textContent = res.data.email;
        modalOpen(FORM_SEND_MODAL);
    }).catch( (err) => {
        console.error(err);
        loadingScreenHide();
    });
}


/**
 * 티스토리 블로그 게시물 get & 셋팅
 */
let token = "69c451451f1534208377e6f59804259e_cd72d6d4885791c064acfeb57143c82f";
let blogDataSet = async() => {
    try {
        const listRes = await axios.get(`https://www.tistory.com/apis/post/list?access_token=${token}&output=json&blogName=Joroki&page=1`);
        const blogPostData = listRes.data.tistory.item.posts;
        let blogPostHtml = '';
        for(let i = 0; i < blogPostData.length; i++) {
            let blogPost = blogPostData[i];

            blogPostHtml += `
                <li class="blog-content">
                    <span class="post-num-wrap">
                        No.
                        <strong class="post-number">${blogPost.id}</strong>
                    </span>
                    <span class="content-date">${blogPost.date}</span>
                    <h4 class="content-title">${blogPost.title}</h4>
                    <a href="${blogPost.postUrl}" class="content-link" target="_blank">
                        <span>Go to Post</span>
                        <i class="xi-long-arrow-right"></i>
                    </a>
                </li>
            `
        }

        document.getElementById("blogContentList").innerHTML = blogPostHtml;
        document.getElementById("blogCountText").textContent = listRes.data.tistory.item.totalCount;
    } catch (err) {
        console.log(err);
    }
    
}
/**
 * contact form reset 함수
 */

let formReset = () => {
    const CONTACT_FORM = document.getElementById("contactForm");
    CONTACT_FORM.reset();
}
/**
 * 이메일 정규식 검증 함수
 * @param {이메일 value 값이 담긴 변수 기입} email  
 */
function validateEmail(email) {
    // 간단한 이메일 유효성 검증을 위한 정규식
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
}
