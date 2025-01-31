import { Link } from "react-router-dom"
import { horseHousePageheader } from "../../utils/ContextList";

const MainPageInfoCompo = () => {
    return(
        <section id="section2">
            <div className="section2Div">
                <article className="service">
                    <h2>서비스 바로가기</h2>
                    <ul>
                        <li><Link to='gameInfo/horseHouseInfo/horseHouseWordInfo' state={{ menuName : horseHousePageheader[0].title , mainMenuName : horseHousePageheader[0].mainMenu, url: horseHousePageheader[0].url }} className="service3">마구간<span>마구간 버프 소개</span></Link></li>
                        <li><Link to='' className="service2">홍길동<span>전투향상술 소개</span></Link></li>
                        <li><Link to='' className="service5">영웅강림<span>영웅강림 소개</span></Link></li>
                        <li><Link to='gameInfo/horseHouseInfo/horseListInfo' state={{ menuName : horseHousePageheader[2].title , mainMenuName : horseHousePageheader[2].mainMenu, url: horseHousePageheader[2].url }}  className="service6">탈것<span>각종탈것 소개</span></Link></li>
                        <li><Link to='' className="service4">소환영웅<span>소환영웅 소개</span></Link></li>
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
                            <h3> 차 공성 순위 <span>4건</span></h3>
                            <ul>
                                <li className="btndown">
                                    <button></button>
                                </li>
                                <li></li>
                                <li></li>
                            </ul>
                            {/* <Link to="">
                                <img src="" title=""></img>
                            </Link> */}
                        </section>

                        <section className="main_section2">
                            <h3> 양이전쟁 순위 <span>4건</span></h3>
                            <ul className="yangiUl">
                                <li className="btndown">
                                    <button title="이전"></button>
                                </li>
                                <li className="btnplay">
                                    <button title="재생"></button>
                                </li>
                                <li className="btnup">
                                    <button title="정지"></button>
                                </li>
                            </ul>
                            <div className="yangi_list">
                                    <ul>
                                        <div>
                                        <li></li>
                                        </div>
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