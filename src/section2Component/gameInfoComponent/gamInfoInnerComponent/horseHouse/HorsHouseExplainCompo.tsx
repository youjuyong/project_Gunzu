import { Link                 } from "react-router-dom";
import { horseHousePageheader } from "../../../../utils/ContextList";
import { LazyImageHook        } from "../../../../../src/utils/common/common";
import MetaTag                  from "../../../../utils/common/SEOMetaTag";

/* 마굿간 설명 */
const HorsHouseExplainCompo = () => {

    return (
        <>
        <MetaTag title="마구간" description="마구간 에대한 정보를 알려주는 페이지입니다." keywords="군주온라인, 마구간"></MetaTag>
        <div className='intro_title'>
            <h3 className="magutganiran_h3 pretend">마구간 이란?</h3>
            <p className='pretend'> "마을 내에 '시전'이란 건물 안에 있는 장소. 말을 넣어 둘 수 있는 곳을 의미합니다. "<br/> "초보자 때에는 사용할 일이 거의 없지만 점점 레벨이 상승하고 사냥터의 몬스터가 강해질수록 마구간의 중요성은 높아집니다."</p>
            <div className="introduce_magugan">
                <LazyImageHook src={require("../../../../assets/image/maul_sigon.png")} alt={'마구간시전'} className={''} height={433}/> 
                <LazyImageHook src={require("../../../../assets/image/magutganClick.png")} alt={'마구간시전'} className={''} height={421}/> 
            </div>
            <p className="pretend"> "시전 건물을 우클릭시"<br/><br/>
                ① : 시전에 입장 하는 버튼 입니다. <br/> 
                ② : 마구간에 입장 하는 버튼입니다. <br/> 
                ③ : 마구간을 확장 하는 버튼으로 '시전개조이용권'으로 마구간을 늘릴 수 있습니다. <br/> 
                ④ : 말의 수명을 보여줍니다. 버프는 말의 수명이 다하면 버프가 사라집니다. <br/> 
                ⑤ : 마구간에 넣은 말에 따라 버프를 얻을 수 있습니다.  
                <Link  to = { horseHousePageheader[2].mainUrl } 
                    state = {{         url : horseHousePageheader[2].url
                            ,     menuName : horseHousePageheader[2].title
                            , mainMenuName : horseHousePageheader[2].mainMenu}} 
                            className="intro_a" >{horseHousePageheader[2].title}
                </Link>에서 마구간 버프 종류,퍼센트에 대해 알수 있습니다.<br/> 
                <br/> 
                <span className="pretend">"이처럼 마구간에는 말을 보관하는 기능 이외에 버프를 부여하는 역할도 있습니다."</span>
            </p>
            <div className="introduce_magugan2">
                <LazyImageHook src={require("../../../../assets/image/magutgan3.png")} alt={'마구간시전'} className={''} height={318}/> 
                <p className='pretend'> 처음 마구간에 들어 갔을 때 활성화가 되어 있지 않은 상태 입니다.</p>
                <LazyImageHook src={require("../../../../assets/image/magutgan4.png")} alt={'마구간시전'} className={''} height={345}/> 
            </div>
            <p> "대상전에서 '시전개조이용권'을 구매하여 활성화가 가능합니다."<br/><br/>
                <span> "다음은 마구간 유의 사항에 대해 알아 보겠습니다."</span><br/><br/>
            </p>

            <div className="horseHouseAlert">
                <Link to={horseHousePageheader[1].mainUrl} state={{ url : horseHousePageheader[1].url, menuName : horseHousePageheader[1].title, mainMenuName : horseHousePageheader[1].mainMenu}} ><button title="마구간 유의 사항 바로가기" >{horseHousePageheader[1].title}</button></Link>
            </div>
        </div>
        </>
    )
}

export default HorsHouseExplainCompo;