
/* 헤더  */
export const headerNavInfo = [
    
    {
        title    : "왕실시스템",
        url      : "systemOfKingWordInfo",
        subUrl   : "gameInfo/systemOfKing/systemOfKingWordInfo",
        subTitle : "왕실시스템",
        menuName : "왕실이란?",
    },
    {
        title    : "제조/장인",
        url      : "systemOfKingWordInfo",
        subUrl   : "gameInfo/craftsManInfo/craftsManListInfo",
        subTitle : "제조/장인",
        menuName : "장인목록",
        subMenu  : [{
            subTitle     : "제조/장인",
            subUrl       : "gameInfo/craftsManInfo/craftsManListInfo",
            url          : "craftsManListInfo",   
            menuName     : "장인목록",
            subClassCnt  : 4
        }]
    },
    {
        title    : "통계",
        url      : "headerNavGameData",
        subUrl   : "gameInfo/staticsInfo/villageStaticsInfo",
        subTitle : "통계",
        menuName : "주민수",
        subMenu  : [{
                subTitle    : "주민수",
                subUrl      : "gameInfo/staticsInfo/villageStaticsInfo",
                url         : "villageStaticsInfo",   
                menuName    : "주민수",
                subClassCnt : 3
            }, {
                subTitle    : "양이전쟁",
                subUrl      : "gameInfo/staticsInfo/yangStaticsInfo",
                url         : "yangStaticsInfo",   
                menuName    : "양이전쟁",
                subClassCnt : 4
            }
        ]
    },
    {
        title    : "게임정보",
        url      : "horseHouseWordInfoo",
        subUrl   : "gameInfo/horseHouseInfo/horseHouseWordInfo",
        subTitle : "마구간",
        menuName : "마구간이란?",
        subMenu : [{
            subTitle    : "마구간",
            subUrl      : "gameInfo/horseHouseInfo/horseHouseWordInfo",
            url         : "horseHouseWordInfo",   
            menuName    : "마구간이란?",
            subClassCnt : 3
        }, {
            subTitle    : "소환영웅",
            subUrl      : "gameInfo/recallHeroInfo/recallHeroWordInfo",
            url         : "recallHeroWordInfo",
            menuName    : "소환영웅이란?",
            subClassCnt : 4
        }, {
            subTitle    : "영웅강림",
            subUrl      : "heroChangeInfo",
            url         : "",
            menuName    : "영웅강림?",
            subClassCnt : 4
        }, {
            subTitle    : "홍길동",
            subUrl      : "gameInfo/hongGilDongInfo/hongGilDongWordInfo",
            url         : "hongGilDongWordInfo",
            menuName    : "전투향상술이란?",
            subClassCnt : 3
        }]
    },
    {
        title    : "이벤트",
        url      : "eventInfo",
        subUrl   : "eventInfo",
        subTitle : "이벤트",
        menuName : "이벤트공지"
    },
    {
        title    : "게시판",
        url      : "mainBoardInfo",
        subUrl   : "mainBoardInfo",
        subTitle : "게시판",
        menuName : "공지사항",
        subMenu  : [{
            subTitle     : "공지사항",
            subUrl       : "mainBoardInfo",
            url          : "mainBoardInfo",   
            menuName     : "공지사항",
            subClassCnt  : 4
        }]
    },
    {
        title   : "홈페이지소개",
        url     : "introduce",
        subUrl  : "introduce",
        subTitle : "홈페이지소개",
        menuName : "소개"
    }
];

export const loginHeaderNav = [
    {
        title     : "로그인",
        url       : "loginInfo",
        subUrl    : "loginInfo",
        subTitle  : "로그인",
        menuName  : "로그인"
    },
    {
        title     : "내정보",
        url       : "/",
        subUrl    : "/",
        subTitle  : "내정보",
        menuName  : "내정보"
    }
]

/* Section1 슬라이드 */
export const SwiperImgList = [
    {
        url : "SliderImg2",
        alt : "슬라이드1"
    }
    // {
    //     url : "main_test",
    //     alt : "슬라이드2"
    // },
    // {
    //     url : "main_test2",
    //     alt : "슬라이드3"
    // }
]

/* 게임정보(마구간) */
export const horseHousePageheader = [
    {
        mainUrl   : "/gameInfo/horseHouseInfo/horseHouseWordInfo",
        url       : "horseHouseWordInfo",
        mainMenu  : "마구간",
        title     : "마구간이란?",
        imgUrl    : require("../assets/image/book.png"),
        imgAlt    : "마구간이란",
        className : "horseHouseInfo"
    },
    {
        mainUrl   : "/gameInfo/horseHouseInfo/horseHouseWideMehodInfo",
        url       : "horseHouseWideMehodInfo",
        mainMenu  : "마구간",
        title     : "마구간 유의 사항",
        imgUrl    : require("../assets/image/horseWide.png"),
        imgAlt    : "마구간 유의 사항",
        className : "horseWideInfo"
    },
    {
        mainUrl   : "/gameInfo/horseHouseInfo/horseListInfo",
        url       : "horseListInfo",
        mainMenu  : "마구간",
        title     : "탈것 목록",
        imgUrl    : require("../assets/image/horse.png"),
        imgAlt    : "탈것 목록",
        className : "horseList"
    }
]

/* 게임정보(주민수) */
export const villageStaticsheader = [
    {
        mainUrl   : "/gameInfo/staticsInfo/villageStaticsInfo",
        url       : "villageStaticsInfo",
        mainMenu  : "주민수",
        title     : "마을별 주민수 통계",
        imgUrl    : null,
        imgAlt    : "마을별 주민수 통계",
        className : null
    }
]

/* 게임정보(양이전쟁) */
export const yangStaticsheader = [
    {
        mainUrl   : "/gameInfo/staticsInfo/yangStaticsInfo",
        url       : "yangStaticsInfo",
        mainMenu  : "양이전쟁",
        title     : "마을별 양이전쟁 통계",
        imgUrl    : null,
        imgAlt    : "마을별 양이전쟁 통계",
        className : null
    }
]

/* 장인 목록 */
export const craftsManHeader = [
    {
        mainUrl   : "/gameInfo/craftsManInfo/craftsManListInfo",
        url       : "craftsManListInfo",
        mainMenu  : "장인목록",
        title     : "장인리스트",
        imgUrl    : require("../assets/image/craftsMan.png"),
        imgAlt    : "장인리스트?",
        className : "craftsManListInfo"
    }
];

/* 왕실 시스템 */
export const systemOfKingPageHeader = [
    {
        mainUrl   : "/gameInfo/systemOfKing/systemOfKingWordInfo",
        url       : "systemOfKingWordInfo",
        mainMenu  : "왕실시스템",
        title     : "왕실이란?",
        imgUrl    : require("../assets/image/book.png"),
        imgAlt    : "왕실이란?",
        className : "systemOfKingWordInfo"
    },
    {
        mainUrl   : "/gameInfo/systemOfKing/systemOfKingLawInfo",
        url       : "systemOfKingLawInfo",
        mainMenu  : "왕실시스템",
        title     : "왕실 법안",
        imgUrl    : require("../assets/image/rawSystem.png"),
        imgAlt    : "왕실 법안",
        className : "systemOfKingLawInfo"
    },
    {
        mainUrl   : "/gameInfo/systemOfKing/systemOfKingMacroPatrol",
        url       : "systemOfKingMacroPatrol",
        mainMenu  : "왕실시스템",
        title     : "매크로 순찰",
        imgUrl    : require("../assets/image/macro.png"),
        imgAlt    : "매크로 순찰",
        className : "systemOfKingMacroPatrol"
    },
    {
        mainUrl   : "/gameInfo/systemOfKing/systemOfKingMacoThinking",
        url       : "systemOfKingMacoThinking",
        mainMenu  : "왕실시스템",
        title     : "매크로 판별창",
        imgUrl    : require("../assets/image/searchRaw.png"),
        imgAlt    : "매크로 판별창",
        className : "systemOfKingMacoThinking"
    }
]

/* 게임정보(소환영웅) */
export const recallHeroPageheader = [
    {
        mainUrl   : "/gameInfo/recallHeroInfo/recallHeroWordInfo",
        url       : "recallHeroWordInfo",
        mainMenu  : "소환영웅",
        title     : "소환영웅이란?",
        imgUrl    : require("../assets/image/book.png"),
        imgAlt    : "소환영웅이란?",
        className : "recallHeroWord"
    },
    {
        mainUrl   : "/gameInfo/recallHeroInfo/recallHeroRecommand",
        url       : "recallHeroRecommand",
        mainMenu  : "소환영웅",
        title     : "소환영웅 추천",
        imgUrl    : require("../assets/image/recommand.png"),
        imgAlt    : "소환영웅 추천",
        className : "recallHeroRecommand"
    },
    {
        mainUrl   : "/gameInfo/recallHeroInfo/recallHeroAmulet",
        url       : "recallHeroAmulet",
        mainMenu  : "소환영웅",
        title     : "소환영웅 부적",
        imgUrl    : require("../assets/image/amulet.png"),
        imgAlt    : "소환영웅이란?",
        className : "recallHeroAmulet"
    },
    {
        mainUrl   : "/gameInfo/recallHeroInfo/recallHeroExpiration",
        url       : "recallHeroExpiration",
        mainMenu  : "소환영웅",
        title     : "소환영웅 만료",
        imgUrl    : require("../assets/image/clock.png"),
        imgAlt    : "소환영웅 만료?",
        className : "recallHeroExpiration"
    },
    {
        mainUrl   : "/gameInfo/recallHeroInfo/recallHeroList",
        url       : "recallHeroList",
        mainMenu  : "소환영웅",
        title     : "소환영웅 목록",
        imgUrl    : require("../assets/image/recallHero.png"),
        imgAlt    : "소환영웅 목록",
        className : "recallHeroList"
    }
]

/* 홍길동 정보 */
export const hongGilDongHeader = [
    {
        mainUrl   : "/gameInfo/hongGilDongInfo/hongGilDongWordInfo",
        url       : "hongGilDongWordInfo",
        mainMenu  : "홍길동",
        title     : "전투향상술이란?",
        imgUrl    : null,
        imgAlt    : '',
        className : "hongGilDongWordInfo"
    },
    {
        mainUrl   : "/gameInfo/hongGilDongInfo/hongGilDongRecommand",
        url       : "hongGilDongRecommand",
        mainMenu  : "홍길동",
        title     : "전투향상술 추천",
        imgUrl    : null,
        imgAlt    : '',
        className : "hongGilDongRecommand"
    }
]

/* 말 이미지 리스트 */
export const horseImgInfo = [
    {
        horseId : "HOS1",
        imgUrl  : require("../assets/image/horseFolder/normal_horse.gif")
    },
    {
        horseId : "HOS2",
        imgUrl  : require("../assets/image/horseFolder/black_horse.gif")
    },
    {
        horseId : "HOS3",
        imgUrl  : require("../assets/image/horseFolder/white_horse.gif")
    },
    {
        horseId : "HOS4",
        imgUrl  : require("../assets/image/horseFolder/red_to_horse.gif")
    },
    {
        horseId : "HOS5",
        imgUrl  : require("../assets/image/horseFolder/zibri_horse.gif")
    },
    {
        horseId : "HOS6",
        imgUrl  : require("../assets/image/horseFolder/HOS6.gif")
    },
    {
        horseId : "HOS7",
        imgUrl  : require("../assets/image/horseFolder/HOS7.gif")
    },
    {
        horseId : "HOS8",
        imgUrl  : require("../assets/image/horseFolder/HOS8.gif")
    },
    {
        horseId : "HOS9",
        imgUrl  : require("../assets/image/horseFolder/HOS9.gif")
    },
    {
        horseId : "HOS10",
        imgUrl  : require("../assets/image/horseFolder/HOS10.gif")
    },
    {
        horseId : "HOS11",
        imgUrl  : require("../assets/image/horseFolder/HOS11.gif")
    },
    {
        horseId : "HOS12",
        imgUrl  : require("../assets/image/horseFolder/HOS12.gif")
    },
    {
        horseId : "HOS13",
        imgUrl  : require("../assets/image/horseFolder/HOS13.gif")
    },
    {
        horseId : "HOS14",
        imgUrl  : require("../assets/image/horseFolder/HOS14.gif")
    },
    {
        horseId : "HOS15",
        imgUrl  : require("../assets/image/horseFolder/HOS15.gif")
    },
    {
        horseId : "HOS16",
        imgUrl  : require("../assets/image/horseFolder/HOS16.gif")
    },
    {
        horseId : "HOS17",
        imgUrl  : require("../assets/image/horseFolder/HOS17.gif")
    },
    {
        horseId : "HOS18",
        imgUrl  : require("../assets/image/horseFolder/HOS18.gif")
    },
    {
        horseId : "HOS19",
        imgUrl  : require("../assets/image/horseFolder/HOS19.gif")
    },
    {
        horseId : "HOS20",
        imgUrl  : require("../assets/image/horseFolder/HOS20.gif")
    },
    {
        horseId : "HOS21",
        imgUrl  : require("../assets/image/horseFolder/HOS21.gif")
    },
    {
        horseId : "HOS22",
        imgUrl  : require("../assets/image/horseFolder/HOS22.gif")
    },
    {
        horseId : "HOS23",
        imgUrl  : require("../assets/image/horseFolder/HOS23.gif")
    },
    {
        horseId : "HOS24",
        imgUrl  : require("../assets/image/horseFolder/HOS24.gif")
    },
    {
        horseId : "HOS25",
        imgUrl  : require("../assets/image/horseFolder/HOS25.gif")
    },
    {
        horseId : "HOS26",
        imgUrl  : require("../assets/image/horseFolder/HOS26.gif")
    },
    {
        horseId : "HOS27",
        imgUrl  : require("../assets/image/horseFolder/HOS27.gif")
    },
    {
        horseId : "HOS28",
        imgUrl  : require("../assets/image/horseFolder/HOS28.gif")
    },
    {
        horseId : "HOS29",
        imgUrl  : require("../assets/image/horseFolder/HOS29.gif")
    },
    {
        horseId : "HOS30",
        imgUrl  : require("../assets/image/horseFolder/HOS30.gif")
    },
    {
        horseId : "HOS31",
        imgUrl  : require("../assets/image/horseFolder/HOS31.gif")
    },
    {
        horseId : "HOS32",
        imgUrl  : require("../assets/image/horseFolder/HOS32.gif")
    },
    {
        horseId : "HOS33",
        imgUrl  : require("../assets/image/horseFolder/HOS33.gif")
    },
    {
        horseId : "HOS34",
        imgUrl  : require("../assets/image/horseFolder/HOS34.gif")
    },
    {
        horseId : "HOS35",
        imgUrl  : require("../assets/image/horseFolder/HOS35.gif")
    },
    {
        horseId : "HOS36",
        imgUrl  : require("../assets/image/horseFolder/HOS36.gif")
    },
    {
        horseId : "HOS37",
        imgUrl  : require("../assets/image/horseFolder/HOS37.gif")
    },
    {
        horseId : "HOS38",
        imgUrl  : require("../assets/image/horseFolder/HOS38.gif")
    },
    {
        horseId : "HOS39",
        imgUrl  : require("../assets/image/horseFolder/HOS39.gif")
    },
    {
        horseId : "HOS40",
        imgUrl  : require("../assets/image/horseFolder/HOS40.gif")
    },
    {
        horseId : "HOS41",
        imgUrl  : require("../assets/image/horseFolder/HOS41.gif")
    },
    {
        horseId : "HOS42",
        imgUrl  : require("../assets/image/horseFolder/HOS42.gif")
    },
    {
        horseId : "HOS43",
        imgUrl  : require("../assets/image/horseFolder/HOS43.gif")
    },
    {
        horseId : "HOS44",
        imgUrl  : require("../assets/image/horseFolder/HOS44.gif")
    },
    {
        horseId : "HOS45",
        imgUrl  : require("../assets/image/horseFolder/HOS45.gif")
    },
    {
        horseId : "HOS46",
        imgUrl  : require("../assets/image/horseFolder/HOS46.gif")
    },
    {
        horseId : "HOS47",
        imgUrl  : require("../assets/image/horseFolder/HOS47.gif")
    },
    {
        horseId : "HOS48",
        imgUrl  : require("../assets/image/horseFolder/HOS48.gif")
    },
    {
        horseId : "HOS49",
        imgUrl  : require("../assets/image/horseFolder/HOS49.gif")
    },
    {
        horseId : "HOS50",
        imgUrl  : require("../assets/image/horseFolder/HOS50.gif")
    },
    {
        horseId : "HOS51",
        imgUrl  : require("../assets/image/horseFolder/HOS51.gif")
    },
    {
        horseId : "HOS52",
        imgUrl  : require("../assets/image/horseFolder/HOS52.gif")
    },
    {
        horseId : "HOS53",
        imgUrl  : require("../assets/image/horseFolder/HOS53.gif")
    },
    {
        horseId : "HOS54",
        imgUrl  : require("../assets/image/horseFolder/HOS54.gif")
    },
    {
        horseId : "HOS55",
        imgUrl  : require("../assets/image/horseFolder/HOS55.gif")
    },
    {
        horseId : "HOS56",
        imgUrl  : require("../assets/image/horseFolder/HOS56.gif")
    }
]



// 말 버프
export const horseBurf =  [
    {
        horseId : "HOS1",
        Burf    : null
    },
    {
        horseId : "HOS2",
        Burf    : null
    },
    {
        horseId : "HOS3",
        Burf    : null
    },
    {
        horseId : "HOS4",
        Burf    : null
    },
    {
        horseId : "HOS5",
        Burf    : null
    },
    {
        horseId : "HOS6",
        Burf    : null
    },
    {
        horseId : "HOS7",
        Burf    : null
    },
    {
        horseId : "HOS8",
        Burf    : null
    },
    {
        horseId : "HOS9",
        Burf    : null
    },
    {
        horseId : "HOS10",
        Burf    : function() {
            return (
                <>
                    <p>무기술 5 증가</p>
                    <p>흑룡세트 착용시 공격력/방어력 +5%</p>
                </>
          )}
    },
    {
        horseId : "HOS11",
        Burf    : function() {
            return (
                <>
                    <p>물리공격력 100증가</p>
                    <p>무기술 3증가</p>
                </>
          )}
    },
    {
        horseId : "HOS12",
        Burf    : function() {
            return (
                <>
                    <p>물리공격력 2800증가</p>
                    <p>무기술 15증가</p>
                    <p>탑승 시 명마이펙트</p>
                </>
          )}
    },
    {
        horseId : "HOS13",
        Burf    : function() {
            return (
                <>
                    <p>물리공격력 1000증가</p>
                    <p>무기술 9증가</p>
                </>
          )}
    },
    {
        horseId : "HOS14",
        Burf    : function() {
            return (
                <>
                    <p>마법공격력 15%증가</p>
                    <p>모든 기술 5증가</p>
                </>
          )}
    },
    {
        horseId : "HOS15",
        Burf    : function() {
            return (
                <>
                    <p>물리공격력 3500증가</p>
                    <p>무기술 20증가</p>
                </>
          )}
    },
    {
        horseId : "HOS16",
        Burf    : function() {
            return (
                <>
                    <p>마법공격력 250증가</p>
                    <p>마법공격력 20%증가</p>
                    <p>모든기술 8증가</p>
                </>
          )}
    },
    {
        horseId : "HOS17",
        Burf    : function() {
            return (
                <>
                    <p>물리공격력 4000증가</p>
                    <p>무기술 30증가</p>
                </>
          )}
    },
    {
        horseId : "HOS18",
        Burf    : function() {
            return (
                <>
                    <p>마법공격력 500증가</p>
                    <p>마법공격력 30%증가</p>
                    <p>모든기술 10증가</p>
                    <p>근력/순발력/생명력 + 50</p>
                </>
          )}
    },
    {
        horseId : "HOS19",
        Burf    : null
    },
    {
        horseId : "HOS20",
        Burf    : null
    },
    {
        horseId : "HOS21",
        Burf    : null
    },
    {
        horseId : "HOS22",
        Burf    : null
    },
    {
        horseId : "HOS23",
        Burf    : null
    },
    {
        horseId : "HOS24",
        Burf    : null
    },
    {
        horseId : "HOS25",
        Burf    : null
    },
    {
        horseId : "HOS26",
        Burf    : null
    },
    {
        horseId : "HOS27",
        Burf    : null
    },
    {
        horseId : "HOS28",
        Burf    : null
    },
    {
        horseId : "HOS29",
        Burf    : null
    },
    {
        horseId : "HOS30",
        Burf    : null
    },
    {
        horseId : "HOS31",
        Burf    : null
    },
    {
        horseId : "HOS32",
        Burf    : null
    },
    {
        horseId : "HOS33",
        Burf    : null
    },
    {
        horseId : "HOS34",
        Burf    : null
    },
    {
        horseId : "HOS35",
        Burf    : null
    },
    {
        horseId : "HOS36",
        Burf    : null
    },
    {
        horseId : "HOS37",
        Burf    : null
    },
    {
        horseId : "HOS38",
        Burf    : null
    },
    {
        horseId : "HOS39",
        Burf    : null
    },
    {
        horseId : "HOS40",
        Burf    : null
    },
    {
        horseId : "HOS41",
        Burf    : null
    },
    {
        horseId : "HOS42",
        Burf    : null
    },
    {
        horseId : "HOS43",
        Burf    : null
    },
    {
        horseId : "HOS44",
        Burf    : null
    },
    {
        horseId : "HOS45",
        Burf    : null
    },
    {
        horseId : "HOS46",
        Burf    : null
    },
    {
        horseId : "HOS47",
        Burf    : null
    },
    {
        horseId : "HOS48",
        Burf    : null
    },
    {
        horseId : "HOS49",
        Burf    : null
    },
    {
        horseId : "HOS50",
        Burf    : null
    },
    {
        horseId : "HOS51",
        Burf    : function() {
                    return (
                        <>
                            <p>순발력:150 / 생명력 : 250</p>
                            <p>피해저항 +8%</p>
                            <p>치명타 피해저항 +8%</p>
                            <p>방어력 5500</p>
                        </>
                  )}
    },
    {
        horseId : "HOS52",
        Burf    : function() {
                    return (
                        <>
                            <p>순발력:150 / 생명력 : 250</p>
                            <p>피해저항 +8%</p>
                            <p>치명타 피해저항 +8%</p>
                            <p>방어력 5500</p>
                        </>
                  )}
    },
    {
        horseId : "HOS53",
        Burf    : function() {
                    return (
                        <>
                            <p>순발력:150 / 생명력 : 250</p>
                            <p>피해저항 +8%</p>
                            <p>치명타 피해저항 +8%</p>
                            <p>방어력 5500</p>
                        </>
                  )}
    },
    {
        horseId : "HOS54",
        Burf    : null
    },
    {
        horseId : "HOS55",
        Burf    : null
    },
    {
        horseId : "HOS56",
        Burf    : null
    }
]

// 말 스페셜 스킬
export const horseSpecialSkill =  [
    {
        horseId : "HOS1",
        Skill    : null
    },
    {
        horseId : "HOS2",
        Skill    : null
    },
    {
        horseId : "HOS3",
        Skill    : null
    },
    {
        horseId : "HOS4",
        Skill    : null
    },
    {
        horseId : "HOS5",
        Skill    : null
    },
    {
        horseId : "HOS6",
        Skill    : null
    },
    {
        horseId : "HOS7",
        Skill    : null
    },
    {
        horseId : "HOS8",
        Skill    : null
    },
    {
        horseId : "HOS9",
        Skill    : null
    },
    {
        horseId : "HOS10",
        Skill    : null
    },
    {
        horseId : "HOS11",
        Skill    : null
    },
    {
        horseId : "HOS12",
        Skill    : null
    },
    {
        horseId : "HOS13",
        Skill    : null
    },
    {
        horseId : "HOS14",
        Skill    : null
    },
    {
        horseId : "HOS15",
        Skill    : null
    },
    {
        horseId : "HOS16",
        Skill    : null
    },
    {
        horseId : "HOS17",
        Skill    : null
    },
    {
        horseId : "HOS18",
        Skill    : null
    },
    {
        horseId : "HOS19",
        Skill    : null
    },
    {
        horseId : "HOS20",
        Skill    : null
    },
    {
        horseId : "HOS21",
        Skill    : null
    },
    {
        horseId : "HOS22",
        Skill    : null
    },
    {
        horseId : "HOS23",
        Skill    : null
    },
    {
        horseId : "HOS24",
        Skill    : null
    },
    {
        horseId : "HOS25",
        Skill    : null
    },
    {
        horseId : "HOS26",
        Skill    : null
    },
    {
        horseId : "HOS27",
        Skill    : null
    },
    {
        horseId : "HOS28",
        Skill    : null
    },
    {
        horseId : "HOS29",
        Skill    : null
    },
    {
        horseId : "HOS30",
        Skill    : null
    },
    {
        horseId : "HOS31",
        Skill    : null
    },
    {
        horseId : "HOS32",
        Skill    : null
    },
    {
        horseId : "HOS33",
        Skill    : null
    },
    {
        horseId : "HOS34",
        Skill    : null
    },
    {
        horseId : "HOS35",
        Skill    : null
    },
    {
        horseId : "HOS36",
        Skill    : null
    },
    {
        horseId : "HOS37",
        Skill    : null
    },
    {
        horseId : "HOS38",
        Skill    : null
    },
    {
        horseId : "HOS39",
        Skill    : null
    },
    {
        horseId : "HOS40",
        Skill    : null
    },
    {
        horseId : "HOS41",
        Skill    : null
    },
    {
        horseId : "HOS42",
        Skill    : null
    },
    {
        horseId : "HOS43",
        Skill    : null
    },
    {
        horseId : "HOS44",
        Skill    : null
    },
    {
        horseId : "HOS45",
        Skill    : null
    },
    {
        horseId : "HOS46",
        Skill    : null
    },
    {
        horseId : "HOS47",
        Skill    : null
    },
    {
        horseId : "HOS48",
        Skill    : null
    },
    {
        horseId : "HOS49",
        Skill    : null
    },
    {
        horseId : "HOS50",
        Skill    : null
    },
    {
        horseId : "HOS51",
        Skill   : function() {
                    return (
                        <>
                             <p>[은하수빛파도 (ALT+2)]</p>
                             <p>▷ 스킬 시전 시 20 범위 내 존재하는</p>
                             <p>모든 아군 캐릭터 버프 부여</p>
                             <p>ㄴ 공격력 5% 증가</p>
                             <p>ㄴ 인식된 캐릭터 수 1명당 1% (최대20%)</p>
                             <p>마법력 3000 / 신경기관 5 소모</p>
                             <p>스킬 재사용대기시간 300초 /지속시간20초</p>
                        </>
                  )}
    },
    {
        horseId : "HOS52",
        Skill    : function() {
                    return (
                        <>
                            <p>순발력:150 / 생명력 : 250</p>
                            <p>피해저항 +8%</p>
                            <p>치명타 피해저항 +8%</p>
                            <p>방어력 5500</p>
                        </>
                  )}
    },
    {
        horseId : "HOS53",
        Skill    : function() {
                    return (
                        <>
                            <p>순발력:150 / 생명력 : 250</p>
                            <p>피해저항 +8%</p>
                            <p>치명타 피해저항 +8%</p>
                            <p>방어력 5500</p>
                        </>
                  )}
    },
    {
        horseId : "HOS54",
        Skill    : null
    },
    {
        horseId : "HOS55",
        Skill    : null
    },
    {
        horseId : "HOS56",
        Skill    : null
    }
]

// 말 스페셜 스킬
export const horsePassive =  [
    {
        horseId : "HOS1",
        Passive    : null
    },
    {
        horseId : "HOS2",
        Passive    : null
    },
    {
        horseId : "HOS3",
        Passive    : null
    },
    {
        horseId : "HOS4",
        Passive    : null
    },
    {
        horseId : "HOS5",
        Passive    : null
    },
    {
        horseId : "HOS6",
        Passive    : null
    },
    {
        horseId : "HOS7",
        Passive    : null
    },
    {
        horseId : "HOS8",
        Passive    : null
    },
    {
        horseId : "HOS9",
        Passive    : null
    },
    {
        horseId : "HOS10",
        Passive    : null
    },
    {
        horseId : "HOS11",
        Passive    : null
    },
    {
        horseId : "HOS12",
        Passive    : null
    },
    {
        horseId : "HOS13",
        Passive    : null
    },
    {
        horseId : "HOS14",
        Passive    : null
    },
    {
        horseId : "HOS15",
        Passive    : null
    },
    {
        horseId : "HOS16",
        Passive    : null
    },
    {
        horseId : "HOS17",
        Passive    : null
    },
    {
        horseId : "HOS18",
        Passive    : null
    },
    {
        horseId : "HOS19",
        Passive    : null
    },
    {
        horseId : "HOS20",
        Passive    : null
    },
    {
        horseId : "HOS21",
        Passive    : null
    },
    {
        horseId : "HOS22",
        Passive    : null
    },
    {
        horseId : "HOS23",
        Passive    : null
    },
    {
        horseId : "HOS24",
        Passive    : null
    },
    {
        horseId : "HOS25",
        Passive    : null
    },
    {
        horseId : "HOS26",
        Passive    : null
    },
    {
        horseId : "HOS27",
        Passive    : null
    },
    {
        horseId : "HOS28",
        Passive    : null
    },
    {
        horseId : "HOS29",
        Passive    : null
    },
    {
        horseId : "HOS30",
        Passive    : null
    },
    {
        horseId : "HOS31",
        Passive    : null
    },
    {
        horseId : "HOS32",
        Passive    : null
    },
    {
        horseId : "HOS33",
        Passive    : null
    },
    {
        horseId : "HOS34",
        Passive    : null
    },
    {
        horseId : "HOS35",
        Passive    : null
    },
    {
        horseId : "HOS36",
        Passive    : null
    },
    {
        horseId : "HOS37",
        Passive    : null
    },
    {
        horseId : "HOS38",
        Passive    : null
    },
    {
        horseId : "HOS39",
        Passive    : null
    },
    {
        horseId : "HOS40",
        Passive    : null
    },
    {
        horseId : "HOS41",
        Passive    : null
    },
    {
        horseId : "HOS42",
        Passive    : null
    },
    {
        horseId : "HOS43",
        Passive    : null
    },
    {
        horseId : "HOS44",
        Passive    : null
    },
    {
        horseId : "HOS45",
        Passive    : null
    },
    {
        horseId : "HOS46",
        Passive    : null
    },
    {
        horseId : "HOS47",
        Passive    : null
    },
    {
        horseId : "HOS48",
        Passive    : null
    },
    {
        horseId : "HOS49",
        Passive    : null
    },
    {
        horseId : "HOS50",
        Passive    : null
    },
    {
        horseId : "HOS51",
        Passive   : function() {
                    return (
                        <>
                             <p>지휘버프( 관직/행수 전용 )</p>
                             <p>치명피해 감소 +8%</p>
                             <p>방어력(근순도 합계)*3+500증가</p>
                             <p>*지휘권한 보유 캐릭터 한정 적용</p>
                             <p>  ㄴ대행수/행수 : 마을 유저 한정 적용</p>
                             <p>  ㄴ 군주/판서  : 모든 유저 적용</p>
                        </>
                  )}
    },
    {
        horseId : "HOS52",
        Passive    : function() {
                    return (
                        <>
                            <p>지휘버프( 관직/행수 전용 )</p>
                             <p>치명피해 감소 +8%</p>
                             <p>방어력(근순도 합계)*3+500증가</p>
                             <p>*지휘권한 보유 캐릭터 한정 적용</p>
                             <p>  ㄴ대행수/행수 : 마을 유저 한정 적용</p>
                             <p>  ㄴ 군주/판서  : 모든 유저 적용</p>
                        </>
                  )}
    },
    {
        horseId : "HOS53",
        Passive    : function() {
                    return (
                        <>
                            <p>지휘버프( 관직/행수 전용 )</p>
                             <p>치명피해 감소 +8%</p>
                             <p>방어력(근순도 합계)*3+500증가</p>
                             <p>*지휘권한 보유 캐릭터 한정 적용</p>
                             <p>  ㄴ대행수/행수 : 마을 유저 한정 적용</p>
                             <p>  ㄴ 군주/판서  : 모든 유저 적용</p>
                        </>
                  )}
    },
    {
        horseId : "HOS54",
        Passive    : null
    },
    {
        horseId : "HOS55",
        Passive    : null
    },
    {
        horseId : "HOS56",
        Passive    : null
    }
]