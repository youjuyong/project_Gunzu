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
                                <div className='circle'>
                                    <LazyImageHook src={require("../../../../assets/image/spearMain.gif")} alt={'군주'} className={'weaponImg1'} height={309}/> 
                                </div>
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
                                "창이 초보자들에게 좋은 이유는 다른 무기 타입에게는 없는 '갑을창술' 이라는 스킬이 있기 때문입니다."<br></br>
                            </IntroComentPtag>
                            <LazyImageHook src={require("../../../../assets/image/pisal.png")} alt={'갑을창술'} className={''} height={309}/> 
                            <IntroComentPtag color="var(--black)">
                                "이 스킬은 적을 처치할 때 경험치 2배를 얻게 해주는 스킬입니다. 다른 타입들이 후반에 배우는 홍길동 경험치 증가 기술 '만류귀종을'"<br></br>
                                "배우기 이전에 성장 차이를 벌릴 수 있습니다."<br></br>
                                "또한 매물이 많고 사고팔기 편하다는 장점이 있습니다."<br></br>
                                "하지만 고레벨로 갈수록 높아지는 몬스터의 방어력에 비해 평범한 공격력과, 공격 속도는 단점이 될 수 있습니다."<br></br>
                                "게임을 시작한지 얼마 안되시는 분들에게 추천해 드립니다."<br></br>
                            </IntroComentPtag>
                        </IntroduceType1Dl>
                    :  viewPage === 'sword' ?
                    <IntroduceType1Dl>
                        <IntroduceType1Dt>
                            <div className='circle'>
                            <LazyImageHook src={require("../../../../assets/image/sword_recommand.gif")} alt={'검평타'} className={'weaponImg1'} height={309}/> 
                            </div>
                            <IntroduceType1Span>"가장 빠른 공격속도로 적을 베는 무기"</IntroduceType1Span>
                        </IntroduceType1Dt>
                        <IntroduceType1Dd>
                                <IntroduceContentTypeP2 color="var(--orange500)">장점</IntroduceContentTypeP2>
                                <IntroduceContentTypeSpan>무기중 가장 빠른 공격속도</IntroduceContentTypeSpan>
                                <IntroduceContentTypeSpan>빠른 공격속도로 노가다, 사냥 다재다능</IntroduceContentTypeSpan>
                                <IntroduceContentTypeSpan>적당한 무기 가격</IntroduceContentTypeSpan>
                                <IntroduceContentTypeSpan>낮은 인챈트 의존도</IntroduceContentTypeSpan>
                        </IntroduceType1Dd>
                        <IntroduceType1Dd>
                                <IntroduceContentTypeP2 color="var(--purple500)">단점</IntroduceContentTypeP2>
                                <IntroduceContentTypeSpan>낮은 공격력으로 인한 한방컷 높음</IntroduceContentTypeSpan>
                                <IntroduceContentTypeSpan>무기 내구도 소모량 빠름</IntroduceContentTypeSpan>
                        </IntroduceType1Dd>
                        <IntroComentPtag color="var(--black)">'검'은 6가지 무기 중 가장 빠른 공격 속도를 자랑합니다. 중 저자본부터 고자본까지"<br></br>
                            "큰 단점 없이사용할 수 있으며 나중에 되팔기도 괜찮은 무기 타입 중 하나입니다."<br></br>
                            "특히 소환영웅인 '대길이'는 사용자의 무기가 검일 경우 대길이의 추가 무기 공격력의 50%만큼" <br></br>
                            "사용자의 무기 공격력을 올려주기 때문에 거의 필수입니다."<br></br>
                        </IntroComentPtag>
                        <LazyImageHook src={require("../../../../assets/image/dagili.png")} alt={'대길이'} className={'weaponImg2'} height={309}/> 
                        <IntroComentPtag color="var(--black)">
                            "낮은 레벨 부터 고레벨 까지 많이 사용되는 무기 타입입니다."<br></br>
                            "풀영강 대길이도 매우 비싼 편이 아니기 때문에 나름 가성비가 좋다고 생각하고"<br></br>
                            "사냥 속도도 상당히 빠르기 때문에 추천해 드리는 무기 중 하나입니다."<br></br>
                        </IntroComentPtag>
                    </IntroduceType1Dl>
                    : viewPage ===  'sword_magic' ?
                        <IntroduceType1Dl>
                            <IntroduceType1Dt>
                                <div className='circle'>
                                <LazyImageHook src={require("../../../../assets/image/sword-magin.gif")} alt={'검마법'} className={'weaponImg1'} height={309}/> 
                                </div>
                                <IntroduceType1Span>"강력한 한방 범위 마법을 가진 무기"</IntroduceType1Span>
                            </IntroduceType1Dt>
                            <IntroduceType1Dd>
                                    <IntroduceContentTypeP2 color="var(--orange500)">장점</IntroduceContentTypeP2>
                                    <IntroduceContentTypeSpan>강한 마법스킬로 인한 빠른 사냥 속도</IntroduceContentTypeSpan>
                                    <IntroduceContentTypeSpan>범위기로 주변 다수의 적을 타격</IntroduceContentTypeSpan>
                                    <IntroduceContentTypeSpan>낮은 인챈트 의존도</IntroduceContentTypeSpan>
                            </IntroduceType1Dd>
                            <IntroduceType1Dd>
                                    <IntroduceContentTypeP2 color="var(--purple500)">단점</IntroduceContentTypeP2>
                                    <IntroduceContentTypeSpan>높은 진입장벽</IntroduceContentTypeSpan>
                                    <IntroduceContentTypeSpan>좁은 범위기로 정확한 자리에서 스킬을 사용해야하는 번거로움</IntroduceContentTypeSpan>
                                    <IntroduceContentTypeSpan>높은 약 소모량</IntroduceContentTypeSpan>
                            </IntroduceType1Dd>
                            <IntroComentPtag color="var(--black)">'검(마법)'은 강력한 범위 마법스킬과 짧은 스킬 재사용으로 빠른 사냥 속도를 자랑합니다."<br></br>
                                "특히 고레벨 사냥터로 갈수록 사냥 포인터에 쌓이는 몹이 많기 때문에 마법 공격은 높은 효율을 보여줍니다."<br></br>
                                "검(마법)의 주력 스킬인 '대정신공'은 강력한 마법공격력과 재사용 시간도 1초 밖에 걸리지 않습니다."<br></br>
                            </IntroComentPtag>
                            <LazyImageHook src={require("../../../../assets/image/sword_skill.PNG")} alt={'검마법스킬'} className={'weaponImg1'} height={309}/> 
                            <IntroComentPtag color="var(--black)">
                                "하지만 검(마법)을 포함한 마법 타입 무기들 특징으로 진입장벽이 조금 있습니다."<br></br>
                                "소환 영웅인 '설옥'이는 매물이 별로 없고 가격도 높게 형성되어 있기 때문에 자본이 필요합니다. 또한 탈것은 "<br></br>
                                "마법 공격력을 올려주는 보트류나, 레이지류를 쓰신다면 무기 타입을 바꾸기 애매하게 되어버리는 단점이 존재합니다."<br></br>
                                "또한 '좌표'를 정확히 찍어야 최적의 효율을 발휘하기에 자리를 잘 잡아야 하는 번거로움도 존재합니다.<br></br>
                            </IntroComentPtag>
                            <LazyImageHook src={require("../../../../assets/image/seouloK.png")} alt={'선문서가설옥'} className={'weaponImg3'} height={309}/> 
                        </IntroduceType1Dl>
                    : viewPage === 'ex' ?
                        <IntroduceType1Dl>
                            <IntroduceType1Dt>
                                <div className='circle'>
                                    <LazyImageHook src={require("../../../../assets/image/ex-recommand.gif")} alt={'도끼'} className={'weaponImg1'} height={309}/> 
                                </div>
                                <IntroduceType1Span>"높은 생존력과 파괴력을 가진 무기"</IntroduceType1Span>
                            </IntroduceType1Dt>
                            <IntroduceType1Dd>
                                    <IntroduceContentTypeP2 color="var(--orange500)">장점</IntroduceContentTypeP2>
                                    <IntroduceContentTypeSpan>뛰어난 생존력</IntroduceContentTypeSpan>
                                    <IntroduceContentTypeSpan>무난한 한방컷</IntroduceContentTypeSpan>
                                    <IntroduceContentTypeSpan>공성리그 공격 대표 무기</IntroduceContentTypeSpan>
                            </IntroduceType1Dd>
                            <IntroduceType1Dd>
                                    <IntroduceContentTypeP2 color="var(--purple500)">단점</IntroduceContentTypeP2>
                                    <IntroduceContentTypeSpan>짧은 사거리</IntroduceContentTypeSpan>
                            </IntroduceType1Dd>
                            <IntroComentPtag color="var(--black)">"공성 리그 공격조의 꽃 '도끼'는 높은 흡성률과 방어력으로 높은 생존력을 자랑합니다."<br></br>
                                "옛날에는 도끼를 공성 리그에서만 볼 수 있었는데 최근에는 사냥터에서도 도끼는 사랑받는 무기로 탈바꿈되었습니다."<br></br>
                                "높은 무기 공격력으로 몬스터 한방컷을 맞추기 수월하기 때문에 사냥 속도도 뒤떨어지지 않습니다."<br></br>
                            </IntroComentPtag>
                            <IntroComentPtag color="var(--black)">
                                "도끼 무기의 단점으로 사거리가 짧다는 점인데 이것 또한 강림을 이용하면 해결이 되는 문제입니다."<br></br>
                                "도끼를 선택하시는 분은 창으로 푸르미르까지 착용하시고 전투향상술을 배우신 다음 푸르미르 도끼로 바꾸시는 것을 추천해 드립니다."
                            </IntroComentPtag>
                        </IntroduceType1Dl>
                    : viewPage === 'bow' ?
                        <IntroduceType1Dl>
                                <IntroduceType1Dt>
                                    <div className='circle'>
                                    <LazyImageHook src={require("../../../../assets/image/bow-recommen.gif")} alt={'철비박'} className={'weaponImg1'} height={309}/> 
                                    </div>
                                    <IntroduceType1Span>"공성리그 제외하고 애정으로 하는 무기"</IntroduceType1Span>
                                </IntroduceType1Dt>
                                <IntroduceType1Dd>
                                        <IntroduceContentTypeP2 color="var(--orange500)">장점</IntroduceContentTypeP2>
                                        <IntroduceContentTypeSpan>강력한 철비박으로 공성리그 수비활약</IntroduceContentTypeSpan>
                                </IntroduceType1Dd>
                                <IntroduceType1Dd>
                                        <IntroduceContentTypeP2 color="var(--purple500)">단점</IntroduceContentTypeP2>
                                        <IntroduceContentTypeSpan>사냥속도가 느리다.</IntroduceContentTypeSpan>
                                        <IntroduceContentTypeSpan>공격속도가 느리다.</IntroduceContentTypeSpan>
                                        <IntroduceContentTypeSpan>무기를 되팔기 어렵다.</IntroduceContentTypeSpan>
                                </IntroduceType1Dd>
                                <IntroComentPtag color="var(--black)">'다른 게임에서 '활'이라는 무기는 대개 뛰어나다고 평가받는데 군주온라인에서는 예외입니다."<br></br>
                                    "영웅강림이 나오기 이전에는 '활'이 긴 사거리로 주목 받는 시대가 있었지만, 이제는 의미가 퇴색되어 버렸습니다."<br></br>
                                    "많이 쓰지도 않는 공성리그 수비를 제외하고 활은 진자 애정을 가지고 선택하는 무기입니다."<br></br>
                                </IntroComentPtag>
                                <LazyImageHook src={require("../../../../assets/image/bow.PNG")} alt={'철비박'} className={'weaponImg1'} height={309}/> 
                                <IntroComentPtag color="var(--black)">
                                    "강력한 마법 화살을 3개를 한번에 쏘기 때문에 오직 대인전을 위한 스킬입니다."<br></br>
                                    "전체적인 평가는 느린 공격속도로 사냥속도도 느리고 선택할 이유가 없다고 생각합니다."<br></br>
                                    "후반에 공성리그를 제외하고 초보때 활을 선택하는 것은 그다지 추천해드리지 않습니다."<br></br>
                                </IntroComentPtag>
                            </IntroduceType1Dl>
                    : viewPage === 'gun' ?
                        <IntroduceType1Dl>
                            <IntroduceType1Dt>
                                <div className='circle'>
                                <LazyImageHook src={require("../../../../assets/image/gun_recomaand.gif")} alt={'총'} className={'weaponImg1'} height={309}/> 
                                </div>
                                <IntroduceType1Span>"강력한 한방으로 적을 제압하는 무기"</IntroduceType1Span>
                            </IntroduceType1Dt>
                            <IntroduceType1Dd>
                                    <IntroduceContentTypeP2 color="var(--orange500)">장점</IntroduceContentTypeP2>
                                    <IntroduceContentTypeSpan>강력한 마법 공격으로 공성리그 수비활약</IntroduceContentTypeSpan>
                                    <IntroduceContentTypeSpan>높은 공격력</IntroduceContentTypeSpan>
                                    <IntroduceContentTypeSpan>긴 사정거리</IntroduceContentTypeSpan>
                            </IntroduceType1Dd>
                            <IntroduceType1Dd>
                                    <IntroduceContentTypeP2 color="var(--purple500)">단점</IntroduceContentTypeP2>
                                    <IntroduceContentTypeSpan>답답한 공격속도</IntroduceContentTypeSpan>
                                    <IntroduceContentTypeSpan>무기 되팔기 어렵다.</IntroduceContentTypeSpan>
                            </IntroduceType1Dd>
                            <IntroComentPtag color="var(--black)">"'활' 보다는 높은 공격력으로 사냥에서 우월한 면이 있지만, 현재로써는 '총'은 비주류 무기입니다."<br></br>
                                "영웅 강림이 나오기 이전에는 긴 사정거리로 많은 사람들이 선택했지만, 영웅 강림으로 보완되고 공성리그 하나를 보고"<br></br>
                                "선택하는 무기가 되었습니다."<br></br>
                            </IntroComentPtag>
                            <LazyImageHook src={require("../../../../assets/image/gigong.PNG")} alt={'기공탄'} className={'weaponImg1'} height={309}/> <br></br><br></br>
                            <LazyImageHook src={require("../../../../assets/image/sigon.PNG")} alt={'시공파해술'} className={'weaponImg1'} height={309}/> 
                            <IntroComentPtag color="var(--black)">
                                "사냥에서는 그다지 이점이 없지만 공성 리그에서는 차원이 다른 파괴력으로 상대의 갑옷을 부실 수 있기 때문에"<br></br>
                                "후반 컨텐츠를 생각 하시는 분께서 선택하시길 추천해 드립니다."<br></br>
                            </IntroComentPtag>
                        </IntroduceType1Dl>
                      :  
                      <IntroduceType1Dl>
                            <IntroduceType1Dt>
                                <div className='circle'>
                                <LazyImageHook src={require("../../../../assets/image/magin-hwayum.gif")} alt={'지팡이'} className={'weaponImg1'} height={309}/> 
                                </div>
                                <IntroduceType1Span>"사냥1티어, 공성 등 다재다능 무기"</IntroduceType1Span>
                            </IntroduceType1Dt>
                            <IntroduceType1Dd>
                                    <IntroduceContentTypeP2 color="var(--orange500)">장점</IntroduceContentTypeP2>
                                    <IntroduceContentTypeSpan>넓은 범위 마법 공격</IntroduceContentTypeSpan>
                                    <IntroduceContentTypeSpan>다양한 컨텐츠에서 사용가능</IntroduceContentTypeSpan>
                                    <IntroduceContentTypeSpan>무기 매물이 많다</IntroduceContentTypeSpan>
                            </IntroduceType1Dd>
                            <IntroduceType1Dd>
                                    <IntroduceContentTypeP2 color="var(--purple500)">단점</IntroduceContentTypeP2>
                                    <IntroduceContentTypeSpan>약 소모량이 크다.</IntroduceContentTypeSpan>
                                    <IntroduceContentTypeSpan>인챈트 의존도가 크다.(비용증가)</IntroduceContentTypeSpan>
                                    <IntroduceContentTypeSpan>비용이 많이 든다.</IntroduceContentTypeSpan>
                            </IntroduceType1Dd>
                            <IntroComentPtag color="var(--black)">"지팡이는 사냥, 공성리그 등 다양한 콘텐츠 활약 가능한 무기 타입입니다."<br></br>
                                "특히 사냥 부분에서 넓은 범위기를 가지고 있는것은 고레벨로 갈수록 몹의수가 증가하기 때문에 엄청난 이점입니다."<br></br>
                                "공성 리그에서도 강력한 마법을 가지고 탄탄한 수비를 할 수 있는 무기입니다."<br></br>
                                "특히 지팡이 스킬중 '화염방사술'은 재사용 시간이 1초에 넓은 범위 마법이기 때문에 없어서는 안 될 마법중 하나입니다."<br></br>
                            </IntroComentPtag>
                            <LazyImageHook src={require("../../../../assets/image/hwayum.PNG")} alt={'화염방사술'} className={'weaponImg1'} height={309}/> <br></br><br></br>
                            <IntroComentPtag color="var(--black)">
                                "하지만 초기 비용이 굉장히 많이 듭니다. 특히 소환영웅 '오례' 이상급을 가지고 있지 않으시다면 그다지 추천해 드리지 않습니다."<br></br>
                                "또한 스킬 한 번에 어마어마한 마력을 소모 하기 때문에 약값도 생각을 하셔야 됩니다. "<br></br>
                                "초기 자본이 많으시고 다양한 콘텐츠를 즐기고 싶으신 분들에게 추천해 드리는 무기중 하나입니다. "<br></br>
                            </IntroComentPtag>
                        </IntroduceType1Dl>
                    }
                      </IntroduceType1Div>
                </div>
              </div>

              
        </>
    )
}


export default WeaponRecommandInfoCompo;