import { Section2Titleh3, SpanTagStyle1 } from "../../../../utils/commonStyles";
import { LazyImageHook    } from "../../../../../src/utils/common/common";

/* 소환영웅 부적? */
const RecallHeroWordInfoCompo = () => {
    return (
        <> 
            <div className='intro_title'>
                <Section2Titleh3 className='pretend' url={'st2'}>무방풀 이란?</Section2Titleh3>
                <p className="pretend">"소환영웅을 판다는 자막을 보면 간혹  <SpanTagStyle1 color={'--red600'} weight={700}>'무방풀'</SpanTagStyle1>이라는 용어를 볼 수 있습니다."<br></br>
                "이건 '무기/방어구 부적 풀' 이라는 말의 줄임말로 무기/방어구 부적을 다 부착했다는 의미입니다."
                </p>
                <LazyImageHook src={require("../../../../assets/image/mubangInfo.png")} alt={'소환영웅1'} className={''} height={363}/>  <br></br> 
                <p className="pretend">"소환 영웅 탭에서 빨간 부분을 확인하시면 됩니다. 100레벨 이전의 소환 영웅도 부적의 개수에 따라 장비 착용가능 레벨이 상승하고" <br></br>
                "소환 영웅의 레벨과 부적 부착 횟수가일치 할 때 공격력/방어력이 보너스 됩니다." </p><br></br> 
                <LazyImageHook src={require("../../../../assets/image/sunbudang.png")} alt={'소환영웅1'} className={''} height={287}/> 
                <p className="pretend">"부적 부착 방법은 소환영웅 소환상태에서 선무당 NPC, 장착 에서 강화 할 수 있습니다." <br></br></p><br></br> <br></br> 
                <Section2Titleh3 className='pretend' url={'st2'}>무방풀은 필수?</Section2Titleh3><br></br> <br></br> 
                <p className="pretend">"무방풀은  <SpanTagStyle1 color={'--main600'} weight={700}>'필수가 아니라 권장사항 입니다.'</SpanTagStyle1>"<br></br>
                "무방풀에 따른 능력치 증가는 근소하기 때문에 무조건 무방풀을 고집할 필요는 없습니다."
                </p><br></br> 
                <LazyImageHook src={require("../../../../assets/image/recall_pricee.png")} alt={'소환영웅1'} className={''} height={107}/>  <br></br> 
                <p className="pretend">"하지만 한장에 2~5억으로 초보자에게는 고가의 부적이기 때문에 부적상태를 잘보고 가격을 판단 하셔야 됩니다."<br></br>
                "가격 판단이 어렵다면 처음부터 무방풀 소환영웅을 구입하시는 것을 추천드립니다."
                </p>
            </div>
        </>
    )
}

export default RecallHeroWordInfoCompo;