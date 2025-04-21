import { Section2Titleh3, SpanTagStyle1 } from "../../../../utils/commonStyles";
import { LazyImageHook    } from "../../../../../src/utils/common/common";
import MetaTag              from "../../../../utils/common/SEOMetaTag";

/* 소환영웅 기간만료 */
const RecallHeroWordInfoCompo = () => {
    return (
        <> 
         <MetaTag title="소환영웅 만료" description="소환영웅 만료 에대한 정보를 알려주는 페이지입니다." keywords="군주온라인, 소환영웅"></MetaTag>
            <div className='intro_title'>
                 <Section2Titleh3 className='pretend' url={'st2'}>소환영웅 만료시</Section2Titleh3>
                 <p className="pretend"> "소환영웅이 소환이 안되는 경우. 소환영웅의 사용 만료일 확인이 필요합니다"</p><br/>
                  <LazyImageHook src={require("../../../../assets/image/recallInfo4.png")} alt={'소환영웅'} className={''} height={363}/> 
                  <p className="pretend"> "만약 만료일이 군주력을 지난 경우에는 '선무당 NPC'에서 기간 연장이 가능합니다."</p><br/>
                  <LazyImageHook src={require("../../../../assets/image/sunmudang.png")} alt={'소환영웅'} className={''} height={363}/> 
                  <p className="pretend"> "하지만 만료일이 오래된 경우에는 소환 영웅의 값과 부적값을 잘 고려하셔야 됩니다."</p><br/>
                  <LazyImageHook src={require("../../../../assets/image/gigan.png")} alt={'소환영웅'} className={''} height={100}/> 
                  <p className="pretend"> <SpanTagStyle1 color={'--orange600'} weight={700}>"기간 연장 부적이 비싸기 때문에 '연장기간'이 영웅 값을 넘을 수 있기 때문입니다."</SpanTagStyle1><br/>
                  "따라서 영웅을 연장해서 다시 사용할지 새로운 영웅으로 교체할지를 잘 판단하시길 바랍니다."</p>
            </div>
        </>
    )
}

export default RecallHeroWordInfoCompo;