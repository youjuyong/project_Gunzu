
/* 마굿간 설명 */
const HorsHouseExplainCompo = () => {
    return (
        <>
        <div className='intro_title'>
            <h3>마구간 이란?</h3>
            <p> "마을 내에 '시전'이란 건물 안에 있는 장소. 말을 넣어 둘 수 있는 곳을 의미합니다. "<br/> "초보자 때에는 사용할 일이 거의 없지만 점점 레벨이 상승하고 사냥터의 몬스터가 강해질수록 마구간의 중요성은 높아집니다."</p>
            <div className="introduce_magugan">
                <img src={require("../../../assets/image/maul_sigon.png")}></img>
                <img src={require("../../../assets/image/magutganClick.png")}></img>
            </div>
            <p> "시전 건물을 우클릭시"<br/> ① : 시전에 입장 하는 버튼 입니다. <br/> ② : 마구간에 입장 하는 버튼입니다. <br/> ③ : 마구간을 확장 하는 버튼으로 '시전확장이용권으로' 마구간을 늘릴 수 있습니다. <br/> ④ : 마구간에 넣은 말에 따라 버프를 얻을 수 있습니다. 말별 마굿간 버프에 대해서는 밑의 버튼을 이용하여 알 수 있습니다.</p>
        </div>
        </>
    )
}

export default HorsHouseExplainCompo;