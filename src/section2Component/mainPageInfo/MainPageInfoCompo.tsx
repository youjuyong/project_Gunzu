import { Link } from "react-router-dom"
import { horseHousePageheader, recallHeroPageheader } from "../../utils/ContextList";
import { useState             } from "react"
import { useQuerySingle       } from "../../utils/common/common";
import { API_IP_INFO          } from "../../utils/apiUrl";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
    dots            : false,
    infinite        : true,
    speed           : 1000,
    autoplaySpeed   : 2000,
    slidesToShow    : 8,
    slidesToScroll  : 1,
    autoplay        : true,
    vertical        : true,
    verticalSwiping : true,
};

const MainPageInfoCompo = () => {

    // 양이 전쟁 리스트
    const yangi_data  = useQuerySingle("get-yangi-data", null, `${API_IP_INFO}/stat/yang-rank`, 60000 * 5, 60000 * 10, false, true, false);

    // 주민수 리스트
    const human_cnt_data  = useQuerySingle("get-human-data", null, `${API_IP_INFO}/stat/village-human-cnt`, 60000 * 5, 60000 * 10, false, true, false);
   
    return(
        <section id="section2">
            <div className="section2Div">
                <article className="service">
                    <h2>서비스 바로가기</h2>
                    <ul>
                        <li><Link to='gameInfo/horseHouseInfo/horseHouseWordInfo' state={{ menuName : horseHousePageheader[0].title , mainMenuName : horseHousePageheader[0].mainMenu, url: horseHousePageheader[0].url }} className="service3">마구간<span>마구간 버프 소개</span></Link></li>
                        <li><Link to='' className="service2">홍길동<span>전투향상술 소개</span></Link></li>
                        <li><Link to='' className="service5">영웅강림<span>영웅강림 소개</span></Link></li>
                        <li><Link to='gameInfo/horseHouseInfo/horseListInfo' state={{ menuName : horseHousePageheader[2].title , mainMenuName : horseHousePageheader[2].mainMenu, url: horseHousePageheader[2].url }} className="service6">탈것<span>각종탈것 소개</span></Link></li>
                        <li><Link to='gameInfo/recallHeroInfo/recallHeroWordInfo' state={{ menuName : recallHeroPageheader[0].title , mainMenuName : recallHeroPageheader[0].mainMenu, url: recallHeroPageheader[0].url }} className="service4">소환영웅<span>소환영웅 소개</span></Link></li>
                        <li><Link to='' className="service7">무기추천<span>무기별 소개</span></Link></li>
                        <li><Link to='' className="service8">정령<span>팅키 정령</span></Link></li>
                    </ul>
                </article>
                <article className="realTimeMainInfo">
                    <h2>다양한 <br/> 군주 통계 정보 </h2>
                    <div className="realMainInfo_left">
                        <span className="real_span">
                            다양한 군주 <br/> 통계정보를 안내해 드립니다.
                        </span>
                    </div>
                    <div className="realMainInfo_right">
                        <section className="main_section1">
                            <h3> 주민수 순위 <span>{ human_cnt_data?.data && human_cnt_data?.data.length }건 {human_cnt_data?.data && human_cnt_data?.data[0]?.YES_DATE}</span></h3>
                            <div className="yangi_list">
                                <ul className="yangi_ul" key='ultag'>
                                    <Slider {...settings}>
                                        {
                                            human_cnt_data?.data && human_cnt_data.data.map (( humanStatInfo : any, index : number ) => {
                                                const {
                                                       YES_HUMAN_CNT
                                                      , VILLAGE_NAME
                                                      , YES_RANK
                                                      , DIFF_TYPE
                                                      , DIFF_NUM
                                                      , YES_DATE
                                                    } = humanStatInfo;
                                                    
                                                    let villageName = YES_RANK + '. ' + VILLAGE_NAME;
                                                    return (
                                                        <div key={ 'humandivhu' + index }>
                                                             <li key={ 'humanlihu' + index }>
                                                                <p key={'pHumantag' + index} className="yangi_village_title">
                                                                    <span key={'spanHumantag' + index}>
                                                                        {villageName}<strong>{YES_HUMAN_CNT} 명 </strong>
                                                                    </span>
                                                                </p>
                                                                { 
                                                                    DIFF_TYPE === 'UP'     ? <img src={require("../../assets/image/up.png")}     key={ 'img2' + index }></img>   :
                                                                    DIFF_TYPE === 'DOWN'   ? <img src={require("../../assets/image/down.png")}   key={ 'img2' + index }></img>   :
                                                                    DIFF_TYPE === 'NORMAL' ? <img src={require("../../assets/image/normal.png")} key={ 'img2' + index }></img>   :
                                                                     ''
                                                                }
                                                                <p className={ DIFF_TYPE === 'UP'       ? 'up_p'     :
                                                                               DIFF_TYPE === 'DOWN'     ? 'down_p'   :
                                                                               DIFF_TYPE === 'NORMAL'   ? 'normal_p' : 
                                                                               ''
                                                                } key={'ptag2' + index}>{DIFF_NUM}</p> 
                                                             </li>
                                                        </div>
                                                    )
                                            })
                                        }
                                    </Slider>
                                </ul>
                            </div>
                            {/* <Link to="">
                                <img src="" title=""></img>
                            </Link> */}
                        </section>

                        <section className="main_section2">
                            <h3> 양이전쟁 순위  <span> { yangi_data?.data &&  yangi_data?.data[0]["STAT_DAY"] } 합계</span></h3>
                            <div className="yangi_list">
                                <ul className="yangi_ul" key='ultag'>
                                    <Slider {...settings}>
                                        {
                                            yangi_data?.data && yangi_data.data.map (( statInfo : any, index : number ) => {
                                                const { BYES_KILL
                                                      , BYES_RANK
                                                      , DIFF_NUM
                                                      , DIFF_TYPE
                                                      , VILLAGE_ID
                                                      , VILLAGE_NAME
                                                      , YES_KILL
                                                      , YES_RANK
                                                    } = statInfo;

                                                    let villageName = '';

                                                    if   (   YES_RANK === 1 
                                                          || YES_RANK === 2 
                                                          || YES_RANK === 3  
                                                        ) villageName = '[' + VILLAGE_NAME + ']';
                                                    else  villageName = YES_RANK + '위 ' + '[' + VILLAGE_NAME + ']';

                                                return (
                                                     <div key={'yang_div' + index}>
                                                         <li key={ 'li' + index }>
                                                         { 
                                                            YES_RANK === 1 ? <img src={require("../../assets/image/gold.png")}   key={ 'img1' + index }></img>   :
                                                            YES_RANK === 2 ? <img src={require("../../assets/image/silver.png")} key={ 'img1' + index }></img>   :
                                                            YES_RANK === 3 ? <img src={require("../../assets/image/dong.png")}   key={ 'img1' + index }></img>   :
                                                            ''
                                                         }
                                                             <p key={'ptag' + index} className = {YES_RANK === 1 || YES_RANK === 2 || YES_RANK === 3 ? "top_yangi_village_title" : "yangi_village_title" }>
                                                                 <span key={'spantag' + index}>{villageName}<strong>{YES_KILL}</strong></span>
                                                             </p>
                                                         { 
                                                            DIFF_TYPE === 'UP'     ? <img src={require("../../assets/image/up.png")}     key={ 'img2' + index }></img>   :
                                                            DIFF_TYPE === 'DOWN'   ? <img src={require("../../assets/image/down.png")}   key={ 'img2' + index }></img>   :
                                                            DIFF_TYPE === 'NORMAL' ? <img src={require("../../assets/image/normal.png")} key={ 'img2' + index }></img>   :
                                                            ''
                                                         }
                                                         <p className={ DIFF_TYPE === 'UP'       ? 'up_p'     :
                                                                        DIFF_TYPE === 'DOWN'     ? 'down_p'   :
                                                                        DIFF_TYPE === 'NORMAL'   ? 'normal_p' : 
                                                                        ''
                                                                      } key={'ptag2' + index}>{DIFF_NUM}</p>
                                                        </li>
                                                     </div>
                                                )
                                            })
                                        }
                                    </Slider>
                                </ul>
                            </div>
                        </section>

                        <section className="main_section3">
                            <h3> 공지사항 <span>1건</span></h3>
                            <Link to="" className="boardInfo_plus">
                                <img src={require("../../assets/image/more2.png")}></img>
                            </Link>
                        </section>
                    </div>
                </article>
            </div>
            <section id="section3">
            <div className="section2Div2">
                <h2></h2>
                    <div className="cardContents">
                        <ul className="card_ul">
                            <li>서비스 준비중입니다.</li>
                        </ul>
                    </div>
                <div className="contentsBox"></div>
            </div>
            </section>
        </section>
    )
}

export default MainPageInfoCompo;