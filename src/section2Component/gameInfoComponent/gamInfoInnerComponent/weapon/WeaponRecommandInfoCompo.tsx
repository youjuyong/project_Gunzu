import { Link                  } from "react-router-dom";
import { hongGilDongHeader     } from "../../../../utils/ContextList";
import { LazyImageHook         } from "../../../../../src/utils/common/common";
import Section2BackgroundDiv, { Section2Titleh3, IntroComentPtag, IntroduceContentTypeP2, IntroduceType1Div, IntroduceType1Dl, IntroduceType1Dt, IntroduceType1Span, IntroduceType1Dd, IntroduceContentTypeSpan }    from "../../../../utils/commonStyles";
import MetaTag                  from "../../../../utils/common/SEOMetaTag";
import { useState              } from "react";
const WeaponRecommandInfoCompo = () => {

     const [viewPage, setViewPage] = useState('spear');
    
     const ButtonClickHandler = ( e : React.MouseEvent<HTMLButtonElement>  ) => {
           const { name } : any = e.target;
           setViewPage(name);
     };

    return (
        <> 
              <MetaTag title="무기추천" description="무기 추천에 대한 정보를 알려주는 페이지입니다." keywords="군주온라인, 무기 추천"></MetaTag>
              <div className='intro_title title1'>
                <h3 className="magutganiran_h3 pretend">무기 추천</h3>
                <p className='pOne pretend'> "군주 온라인에는 <span className='sp1'>'총', '검', '지팡이', '도끼', '활', '창'</span> 이렇게 6가지의 무기가 있습니다."<br/> "각각의 무기들의 특징과 장/단점에 대해 알아보고 자신에게 맞는 무기가 무엇인지 찾아보시길 바랍니다."</p>
                <div className="content_warp conten1">
                    <div className="weapon_Serize">
                        <ul>
                            <li className={ viewPage === 'spear' ? 'on' : ''}>
                                <button type="button" className='pretend' name='spear' onClick={ButtonClickHandler}>창</button>
                            </li>
                            <li className={ viewPage === 'sword' ? 'on' : ''}>
                                <button type="button" className='pretend'  name='sword' onClick={ButtonClickHandler}>검(평타)</button>
                            </li>
                            <li className={ viewPage === 'sword_magic' ? 'on' : ''}>
                                <button type="button" className='pretend'  name='sword_magic' onClick={ButtonClickHandler}>검(마법)</button>
                            </li>
                            <li className={ viewPage === 'ex' ? 'on' : ''}>
                                <button type="button" className='pretend' name='ex' onClick={ButtonClickHandler}>도끼</button>
                            </li>
                            <li className={ viewPage === 'bow' ? 'on' : ''}>
                                <button type="button" className='pretend' name='bow' onClick={ButtonClickHandler}>활</button>
                            </li>
                            <li className={ viewPage === 'gun' ? 'on' : ''}>
                                <button type="button" className='pretend' name='gun' onClick={ButtonClickHandler}>총</button>
                            </li>
                            <li className={ viewPage === 'magic' ? 'on' : ''}>
                                <button type="button" className='pretend' name='magic' onClick={ButtonClickHandler}>지팡이</button>
                            </li>
                        </ul>
                    </div>
                    <IntroduceType1Div>
                    {
                        viewPage === 'spear' ? 
                        <IntroduceType1Dl>
                            <IntroduceType1Dt>
                                <LazyImageHook src={require("../../../../assets/image/test33.png")} alt={'군주'} className={'weaponImg1'} height={309}/> 
                                <IntroduceType1Span>"초보자에게 안성 맞춤 6각형 무기"</IntroduceType1Span>
                            </IntroduceType1Dt>
                            <IntroduceType1Dd>
                                    <IntroduceContentTypeP2 color="var(--orange500)">장점</IntroduceContentTypeP2>
                                    <IntroduceContentTypeSpan>저비용 고효율</IntroduceContentTypeSpan>
                                    <IntroduceContentTypeSpan>무난한 공격속도, 공격력</IntroduceContentTypeSpan>
                                    <IntroduceContentTypeSpan>저렙때 경험치 스킬을 이용해 빠른성장 가능</IntroduceContentTypeSpan>
                                    <IntroduceContentTypeSpan>무기 매물 많음</IntroduceContentTypeSpan>
                            </IntroduceType1Dd>
                            <IntroduceType1Dd>
                                    <IntroduceContentTypeP2 color="var(--purple500)">단점</IntroduceContentTypeP2>
                                    <IntroduceContentTypeSpan>뛰어나지 않은 공격속도, 공격력</IntroduceContentTypeSpan>
                                    <IntroduceContentTypeSpan>마나를 많이 소모함</IntroduceContentTypeSpan>
                            </IntroduceType1Dd>
                            
                            <IntroComentPtag color="var(--black)">'창'은 주로 저 레벨 유저들이 많이 사용하는 무기 타입 중 하나로 뛰어난 가성비를 자랑합니다."<br></br>
                                "창이 초보자들에게 좋은 이유는 다른 무기 타입에게는 없는 '피살저하술' 이라는 스킬이 있기 때문입니다."<br></br>
                            </IntroComentPtag>
                            <LazyImageHook src={require("../../../../assets/image/pisal.png")} alt={'피살저하술'} className={'weaponImg2'} height={309}/> 
                            <IntroComentPtag color="var(--black)">
                                "이 스킬은 적을 처치할 때 경험치 2배를 얻게 해주는 스킬입니다. 다른 타입들이 후반에 배우는 홍길동 경험치 증가 기술 '만류귀종을'"<br></br>
                                "배우기 이전에 성장 차이를 벌릴 수 있습니다."<br></br>
                                "또한 매물이 많고 사고팔기 편하다는 장점이 있습니다."<br></br>
                                "하지만 고레벨로 갈수록 높아지는 몬스터의 방어력에 비해 평범한 공격력과, 공격 속도는 단점이 될 수 있습니다."<br></br>
                            </IntroComentPtag>
                        </IntroduceType1Dl>
                    :  viewPage === 'sword' ?
                    <IntroduceType1Dl>
                        <IntroduceType1Dt>
                            <LazyImageHook src={require("../../../../assets/image/test33.png")} alt={'군주'} className={'weaponImg1'} height={309}/> 
                            <IntroduceType1Span>"가장 빠른 공격속도를 자랑 하는 무기"</IntroduceType1Span>
                        </IntroduceType1Dt>
                        <IntroduceType1Dd>
                                <IntroduceContentTypeP2 color="var(--orange500)">장점</IntroduceContentTypeP2>
                                <IntroduceContentTypeSpan> 고효율</IntroduceContentTypeSpan>
                                <IntroduceContentTypeSpan>무난한 공격속도, 공격력</IntroduceContentTypeSpan>
                                <IntroduceContentTypeSpan>저렙때 경험치 스킬을 이용해 빠른성장 가능</IntroduceContentTypeSpan>
                                <IntroduceContentTypeSpan>무기 매물 많음</IntroduceContentTypeSpan>
                        </IntroduceType1Dd>
                        <IntroduceType1Dd>
                                <IntroduceContentTypeP2 color="var(--purple500)">단점</IntroduceContentTypeP2>
                                <IntroduceContentTypeSpan>뛰어나지 않은 공격속도, 공격력</IntroduceContentTypeSpan>
                                <IntroduceContentTypeSpan>마나를 많이 소모함</IntroduceContentTypeSpan>
                        </IntroduceType1Dd>
                        <IntroComentPtag color="var(--black)">'창'은 주로 저 레벨 유저들이 많이 사용하는 무기 타입 중 하나로 뛰어난 가성비를 자랑합니다."<br></br>
                            "창이 초보자들에게 좋은 이유는 다른 무기 타입에게는 없는 '피살저하술' 이라는 스킬이 있기 때문입니다."<br></br>
                        </IntroComentPtag>
                        <LazyImageHook src={require("../../../../assets/image/pisal.png")} alt={'피살저하술'} className={'weaponImg2'} height={309}/> 
                        <IntroComentPtag color="var(--black)">
                            "이 스킬은 적을 처치할 때 경험치 2배를 얻게 해주는 스킬입니다. 다른 타입들이 후반에 배우는 홍길동 경험치 증가 기술 '만류귀종을'"<br></br>
                            "배우기 이전에 성장 차이를 벌릴 수 있습니다."<br></br>
                            "또한 매물이 많고 사고팔기 편하다는 장점이 있습니다."<br></br>
                            "하지만 고레벨로 갈수록 높아지는 몬스터의 방어력에 비해 평범한 공격력과, 공격 속도는 단점이 될 수 있습니다."<br></br>
                        </IntroComentPtag>
                    </IntroduceType1Dl>
                    :
                    ''
                    }
                      </IntroduceType1Div>
                </div>
              </div>

              
        </>
    )
}


export default WeaponRecommandInfoCompo;