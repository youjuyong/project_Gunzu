
/* 헤더  */
export const headerNavInfo = [
    {
        title   : "게임정보",
        url     : "headerNavGameInfo",
        subMenu : [{
            subTitle  : "마구간",
            subUrl    : "gameInfo/horseHouseInfo/horseHouseWordInfo",
            url       : "horseHouseWordInfo",   
            menuName  : "마구간이란?"
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

/* 게임정보(마구간) */
export const horseHousePageheader = [
    {
        url       : "horseHouseWordInfo",
        mainMenu  : "마구간",
        title     : "마구간이란?",
        imgUrl    : require("../assets/image/book.png"),
        imgAlt    : "마구간이란",
        className : "horseHouseInfo"
    },
    {
        url       : "horseHouseWideMehodInfo",
        mainMenu  : "마구간",
        title     : "마구간 확장 방법",
        imgUrl    : require("../assets/image/horseWide.png"),
        imgAlt    : "마구간 확장 방법",
        className : "horseWideInfo"
    },
    {
        url       : "horseListInfo",
        mainMenu  : "마구간",
        title     : "탈것 목록",
        imgUrl    : require("../assets/image/horse.png"),
        imgAlt    : "탈것 목록",
        className : "horseList"
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
    }
]
