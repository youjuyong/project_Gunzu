import {Link} from "react-router-dom"

const MainPageInfoCompo = () => {
    return(
        <section id="section2">
            <div className="section2Div">
                <article className="service">
                    <h2>서비스 바로가기</h2>
                    <ul>
                        <li><Link to='gameInfo/horseHouseInfo/horseHouseWordInfo' state={{menuName:'마구간이란?', mainMenuName:'마구간', url: 'horseHouseWordInfo' }} className="service3">마구간<span>마구간 버프 소개</span></Link></li>
                        <li><Link to='' className="service2">홍길동<span>전투향상술 소개</span></Link></li>
                        <li><Link to='' className="service5">영웅강림<span>영웅강림 소개</span></Link></li>
                        <li><Link to='gameInfo/horseHouseInfo/horseListInfo' state={{menuName:'탈것 목록', mainMenuName:'마구간', url: 'horseListInfo' }}  className="service6">탈것<span>각종탈것 소개</span></Link></li>
                        <li><Link to='' className="service4">소환영웅<span>소환영웅 소개</span></Link></li>
                        <li><Link to='' className="service7">무기추천<span>무기별 소개</span></Link></li>
                        <li><Link to='' className="service8">정령<span>팅키 정령</span></Link></li>
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default MainPageInfoCompo;