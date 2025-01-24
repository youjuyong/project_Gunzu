
/* 헤더  */
export const headerNavInfo = [
    {
        title   : "게임정보",
        url     : "headerNavGameInfo",
        subMenu : [{
            subTitle  : "마굿간",
            subUrl    : "horseHouseInfo/horseHouseWordInfo",
            url       : "horseHouseWordInfo"   
        }, {
            subTitle  : "퀘스트",
            subUrl    : "questInfo",
            url       : ""   
        }, {
            subTitle  : "영웅강림",
            subUrl    : "heroChangeInfo",
            url       : ""   
        }]
    },
    {
        title    : "이벤트",
        url      : "headerNavEvent",
        subMenu : [{
            subTitle  : "경품",
            subUrl    : "eventRequest"
        }, {
            subTitle  : "일정",
            subUrl    : "eventCalen"
        }]
    },
    {
        title   : "게시판",
        url     : "headerNavBoard"
    }
];

/* Section1 슬라이드 */
export const SwiperImgList = [
    {
        url : "SliderImg1",
        alt : "슬라이드1"
    },
    {
        url : "SliderImg2",
        alt : "슬라이드2"
    },
    {
        url : "SliderImg3",
        alt : "슬라이드3"
    }
]

/* 게임정보(마굿간) */
export const horseHousePageheader = [
    {
        url       : "horseHouseWordInfo",
        title     : "마굿간 이란?",
        imgUrl    : require("../assets/image/book.png"),
        imgAlt    : "마굿간 이란",
        className : "horseHouseInfo"
    },
    {
        url       : "horseHouseWideMehodInfo",
        title     : "마굿간 확장 방법",
        imgUrl    : require("../assets/image/horseWide.png"),
        imgAlt    : "마굿간 확장 방법",
        className : "horseWideInfo"
    },
    {
        url       : "horseListInfo",
        title     : "탈것 목록",
        imgUrl    : require("../assets/image/horse.png"),
        imgAlt    : "탈것 목록",
        className : "horseList"
    }
]
