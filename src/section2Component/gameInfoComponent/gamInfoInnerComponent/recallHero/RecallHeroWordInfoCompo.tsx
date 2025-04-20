import { Section2Titleh3 ,Section2Thead, Section2TheadTh, Section2Tbody, Section2TbodyTh, Section2TableDiv, SpanTagStyle1  } from "../../../../utils/commonStyles";
import { LazyImageHook    } from "../../../../../src/utils/common/common";
import MetaTag              from "../../../../utils/common/SEOMetaTag";

/* 소환영웅이란? */
const RecallHeroWordInfoCompo = () => {
    return (
        <> 
         <MetaTag title="[군주온라인 소환영웅]" description="[군주온라인 소환영웅] 에대한 정보를 알려주는 페이지입니다." keywords="군주온라인, 소환영웅"></MetaTag>
            <div className='intro_title'>
                <Section2Titleh3 className='pretend' url={'st2'}>소환영웅 이란?</Section2Titleh3>
                <p className="pretend"> "소환영웅은 소환 상태일때 캐릭터 뒤에 따라다니는 영웅을 뜻합니다.<br/>
                "소환영웅은 '대기' 모드와 '공격' 모드가 있습니다. '공격'모드일 경우 캐릭터(소유자)와 함께 몬스터를 공격 하고,"<br></br>"대기"모드 일때는 <span>'신체령 프리미엄'</span>을 사용하여 자신의 능력치에 비례하여 캐릭터(소유자)에게 버프를 부여 할 수 있습니다.</p>
                <LazyImageHook src={require("../../../../assets/image/recallHeroGame.png")} alt={'소환영웅1'} className={''} height={177}/> 
                <p className="pretend"> "소환영웅 상태는 '상태 정보창' {">"} '소환 영웅' 에서 확인 하실 수 있습니다. "<br/></p>
                <LazyImageHook src={require("../../../../assets/image/reacalInfo_f.png")} alt={'소환영웅2'} className={''} height={363}/> 
                <p className="pretend"> 
                                ① : 소환 영웅의 이름을 변경 할 수 있습니다.<br/> 
                                ② : 소환 영웅의 영혼 강화(영강) 상태를 보여줍니다.<br/> 
                                ③ : 소환 영웅의 스탯을 보여줍니다. 대개 올 도력을 찍어줍니다.<br/> 
                                ④ : 소환 영웅의 방어구, 무기 강화 부적 부착 상태, 공격/대기 상태, 등을 보여줍니다.<br/> 
                                ⑤ : 소환 영웅의 능력, 고유 효과를 보여줍니다.  
                                <br/> <br/>     </p>
                <LazyImageHook src={require("../../../../assets/image/recallInfo4.png")} alt={'소환영웅'} className={''} height={363}/> 
                      <p className="pretend">"소환 영웅에서 중요한 건  <SpanTagStyle1 color={'--red600'} weight={700}>'영력' </SpanTagStyle1>과  <SpanTagStyle1 color={'--red600'} weight={700}>'사용 만료일' </SpanTagStyle1>입니다."<br></br><br></br>
                      "영력은 1상승 할 때마다 소환 영웅의 공격력, 방어력을 1%씩 증가시켜줍니다. 영력 10단위마다 공격력과 방어력이 10%추가 됩니다."<br></br>
                                            "영력이 증가할 수록 성능"이 더 좋다고 볼 수 있습니다. 영력을 증가 시키기 위해서는 '호패와' 해당 '소환 영웅 인형'이 필요합니다."<br></br>
                                            "다음은 영력 강화 단계에 따른 호패와 소환 인형 필요 갯수입니다."<br></br>
                      </p>
                        <Section2TableDiv width="500px">
                                <table className="hong_table pretend">
                                    <Section2Thead color={'--yellow400'}>
                                        <tr>
                                            <Section2TheadTh widthpertectage={'8%'} >아이템</Section2TheadTh>
                                            <Section2TheadTh widthpertectage={'8%'}>단계</Section2TheadTh>
                                        </tr>
                                    </Section2Thead>
                                    <Section2Tbody color={'--yellow200'} height={'300px'}>
                                        <tr>
                                            <Section2TbodyTh widthpertectage={'8%'}>호패 각 1개</Section2TbodyTh>
                                            <Section2TbodyTh widthpertectage={'8%'}>1~9</Section2TbodyTh>
                                        </tr>
                                        <tr>
                                            <Section2TbodyTh widthpertectage={'8%'}>소환영웅 인형 1개</Section2TbodyTh>
                                            <Section2TbodyTh widthpertectage={'8%'}>10</Section2TbodyTh>
                                        </tr>
                                        <tr>
                                            <Section2TbodyTh widthpertectage={'8%'}>호패 각 2개</Section2TbodyTh>
                                            <Section2TbodyTh widthpertectage={'8%'}>11~19</Section2TbodyTh>
                                        </tr>
                                        <tr>
                                            <Section2TbodyTh widthpertectage={'8%'}>소환영웅 인형 2개</Section2TbodyTh>
                                            <Section2TbodyTh widthpertectage={'8%'}>20</Section2TbodyTh>
                                        </tr>
                                        <tr>
                                            <Section2TbodyTh widthpertectage={'8%'}>호패 각 3개</Section2TbodyTh>
                                            <Section2TbodyTh widthpertectage={'8%'}>21~29</Section2TbodyTh>
                                        </tr>
                                        <tr>
                                            <Section2TbodyTh widthpertectage={'8%'}>소환영웅 인형 3개</Section2TbodyTh>
                                            <Section2TbodyTh widthpertectage={'8%'}>30</Section2TbodyTh>
                                        </tr>
                                        <tr>
                                            <Section2TbodyTh widthpertectage={'8%'}>호패 각 4개</Section2TbodyTh>
                                            <Section2TbodyTh widthpertectage={'8%'}>31~39</Section2TbodyTh>
                                        </tr>
                                        <tr>
                                            <Section2TbodyTh widthpertectage={'8%'}>소환영웅 인형 4개</Section2TbodyTh>
                                            <Section2TbodyTh widthpertectage={'8%'}>40</Section2TbodyTh>
                                        </tr>
                                        <tr>
                                            <Section2TbodyTh widthpertectage={'8%'}>호패 각 5개</Section2TbodyTh>
                                            <Section2TbodyTh widthpertectage={'8%'}>41~49</Section2TbodyTh>
                                        </tr>
                                        <tr>
                                            <Section2TbodyTh widthpertectage={'8%'}>소환영웅 인형 5개</Section2TbodyTh>
                                            <Section2TbodyTh widthpertectage={'8%'}>50</Section2TbodyTh>
                                        </tr>
                                        <tr>
                                            <Section2TbodyTh widthpertectage={'8%'}>호패 각 6개</Section2TbodyTh>
                                            <Section2TbodyTh widthpertectage={'8%'}>51~59</Section2TbodyTh>
                                        </tr>
                                        <tr>
                                            <Section2TbodyTh widthpertectage={'8%'}>소환영웅 인형 6개</Section2TbodyTh>
                                            <Section2TbodyTh widthpertectage={'8%'}>60</Section2TbodyTh>
                                        </tr>
                                        <tr>
                                            <Section2TbodyTh widthpertectage={'8%'}>호패 각 7개</Section2TbodyTh>
                                            <Section2TbodyTh widthpertectage={'8%'}>61~69</Section2TbodyTh>
                                        </tr>
                                        <tr>
                                            <Section2TbodyTh widthpertectage={'8%'}>소환영웅 인형 7개</Section2TbodyTh>
                                            <Section2TbodyTh widthpertectage={'8%'}>70</Section2TbodyTh>
                                        </tr>
                                        <tr>
                                            <Section2TbodyTh widthpertectage={'8%'}>호패 각 8개</Section2TbodyTh>
                                            <Section2TbodyTh widthpertectage={'8%'}>71~79</Section2TbodyTh>
                                        </tr>
                                        <tr>
                                            <Section2TbodyTh widthpertectage={'8%'}>소환영웅 인형 8개</Section2TbodyTh>
                                            <Section2TbodyTh widthpertectage={'8%'}>80</Section2TbodyTh>
                                        </tr>
                                    </Section2Tbody>
                            </table>
                        </Section2TableDiv>
                        <p className="pretend">"간혹 복귀 유저들이 고영강이 필수인지 묻는 분들이 계시는데  <SpanTagStyle1 color={'--main600'} weight={700}>고영강은 필수가 아닙니다.</SpanTagStyle1> 개인적으로<br></br>
                        "영혼 강화에 투자할 자본을 방어구나 무기에 투자하는 게 더 좋다고 생각합니다."<br></br>
                      "하지만 소환영웅은 영웅 따라 영강 따라 가격이 천차만별이기 때문에 자세한 건 마을 분들에게 문의하시고 구입하시길 권장해 드립니다."<br></br>
                      <SpanTagStyle1 color={'--red600'} weight={700}>"사용만료일은 간혹 초보자분들이 만료일이 지난 영웅을 구입하여 돈을 날리는 경우가 있습니다."<br></br></SpanTagStyle1>
                                            "반드시 구입 전에 왼쪽 상단의 군주력과 영웅 만료일을 확인 후 구입하시길 바랍니다."<br></br>
                      </p>
            </div>
        </>
    )
}

export default RecallHeroWordInfoCompo;