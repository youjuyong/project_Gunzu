import { Link                  } from "react-router-dom";
import { hongGilDongHeader     } from "../../../../utils/ContextList";
import { LazyImageHook         } from "../../../../../src/utils/common/common";
import Section2BackgroundDiv, { Section2Titleh3 }    from "../../../../utils/commonStyles";
import MetaTag                  from "../../../../utils/common/SEOMetaTag";

/* 홍길동이란? */
const HongGilDongWordInfoCompo = () => {
    return (
        <> 
                 <MetaTag title="[군주온라인 홍길동 전투향상술]" description="군주온라인 홍길동 전투향상술 에대한 정보를 알려주는 페이지입니다." keywords="군주온라인, 홍길동 전투향상술"></MetaTag>
            <div className='intro_title'>
                <Section2Titleh3 className='pretend' url={'st2'}>전투향상술 이란?</Section2Titleh3>
                <p className="pretend"> "무기별 전투 능력을 향상 시킬 수 있는 기술입니다. <span>'홍길동 NPC'</span> 에게 돈과, 기술점수를 사용하여 배울 수 있습니다."<br/> "초보자 때에는 배울 필요가 없지만 레벨이 점점 상승하고 사냥터의 몬스터가 강해질수록 전투향상술의 중요성은 매우 높아집니다."</p>
                
                <Section2BackgroundDiv width={'500px'} height={'500px'}>
                    <LazyImageHook src={require("../../../../assets/image/hong.png")} alt={'홍길동'} className={''} height={350}/> 
                </Section2BackgroundDiv>
                <p className="pretend"> 
                    "영광 마을 우측에 홍길동 NPC가 있습니다."<br></br><br></br>
                    <span className='redSpan'>준비물 : 200~300억, 무기별 기술 점수( 경험기술 + 기본기술(책)  장비제외x)</span>
                </p>
                <Section2BackgroundDiv width={'400px'} height={'600px'}>
                    <LazyImageHook src={require("../../../../assets/image/hong1.png")} alt={'홍길동1'} className={''} height={607}/> 
                </Section2BackgroundDiv>
                <p className="pretend">"홍길동 NPC를 우클릭시 나오는 창입니다."<br/><br/>  <br/> 
                               <span> ① : 기술을 배우기 위해 필요한 것들입니다. 해당 무기 기술점수 (해당 무기 착용 후 사냥으로 올린 점수or책), 돈</span> <br/> 
                                ② : 무기 목록 <br/> 
                                ③ : 현재 습득한 무기별 기술 목록 현황<br/> 
                                ④ : 4번째, 5번째 기술 선택 목록<br/> 
                                ⑤ : 기술 습득 조건<br/>   
                                ⑥ : 기술등급 기술점수, 기술익히기 버튼, 현재 가지고 있는 기술점수<br/>  
                                <br/>  <br/> 
                <span className="pretend">"처음 전투향상술 배우시는 분들은 ③번 목록에 3개입니다." </span><br></br>
                    "4번째, 5번째 기술은 ④번항목에서 배우 실 수 있습니다."<br></br>
                    "전투향상술은 무조건 5번째 5단계 까지 돈을 끌어 모아서 라도 배우셔야 합니다. 마스터 유무가 천지 차이 입니다."<br></br>
                    <span className="pretend"> "간혹 초보자분 들께서 안 배워 진다고 하실 때 에는 99% 돈 or 기술점수가 부족한 경우입니다."</span>
                   <br></br> "사냥을 통해 올리시면 됩니다."
                   
                </p><br></br>
                <Section2BackgroundDiv width={'305px'} height={'495px'}>    
                    <LazyImageHook src={require("../../../../assets/image/hong2.png")} alt={'홍길동5'} className={''} height={607}/> 
                </Section2BackgroundDiv>
                <p className="pretend"> 
                    "기술 초기화는 상태 정보창'기술정보' 에서 하실 수 있습니다."<br></br><br></br>
                </p>

                <div className="horseHouseAlert">
                    { hongGilDongHeader[1] &&  <Link to={hongGilDongHeader[1]?.mainUrl} state={{ url : hongGilDongHeader[1]?.url, menuName : hongGilDongHeader[1]?.title, mainMenuName : hongGilDongHeader[1].mainMenu}} ><button title="무기별 전투 향상술 추천 바로가기" >{hongGilDongHeader[1]?.title}</button></Link> }
                 </div>
            </div>
        </>
    )
}


export default HongGilDongWordInfoCompo;