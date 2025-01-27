
/* 마굿간 설명 */
const HorsHouseExplainCompo = () => {
    return (
        <>
        <div className='intro_title'>
            <h3>마구간 이란?</h3>
            <p> "마을 내에 '시전'이란 건물 안에 있는 장소로 말을 넣어 둘 수 있는 곳을 의미합니다. "<br/> "초보자 때에는 사용할 일이 거의 없지만 점점 레벨이 상승하고 사냥터의 몬스터가 강해질수록 마구간의 중요성은 높아집니다."</p>
            <div className="introduce_magugan">
                <img src={require("../../../assets/image/maul_sigon.png")}></img>
            </div>
        </div>
        </>
    )
}

export default HorsHouseExplainCompo;