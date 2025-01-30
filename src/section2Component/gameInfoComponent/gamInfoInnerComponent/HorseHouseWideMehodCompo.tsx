
/* 마굿간 유의 사항 */
const HorseHouseWideMehodCompo = () => {
    return (
        <> 
            <div className='intro_title'>
                <h3 className="magutganAlert_h3">마구간 유의 사항</h3>
                <p className="alert_pTag">"다음은 마굿간 유의 사항입니다." <br/><br/><br/>
                    <span className="magutgan_alert_title_span">1. 한 캐릭당 최대 15개의 말 버프를 중첩 시킬수 있습니다.<br/> </span><br/><br/>
                </p>
                <div className="alert_magugan">
                    <img src={require("../../../assets/image/magutgan_alert1.png")}></img>
                    <p>한 캐릭당 최대 3개의 시전을 받을수 있습니다. </p>
                    <img src={require("../../../assets/image/magutgan_alert2.png")}></img>
                    <p>시전 하나에 최대 5마리의 말을 넣을 수 있습니다. <br/><br/>
                      1개 시전에 지금 마법공격력 8%를 올려주는 백미호가 5마리면 <span className="magutgan_alert_span">8% * 5 = 40% </span><br/>
                      3개 시전에 백미호 15마리를 넣을경우  <span className="magutgan_alert_span">8% * 15 = 120% </span>를 올려줍니다.
                    </p>
                    <img src={require("../../../assets/image/magutgan_alert3.png")}></img>
                        <p>만약에, 1개의 시전에만 방어력 8%를 올려주는 '채운'으로만 채울 경우. <br/>
                        <span className="magutgan_alert_span">방어력 40%, 마법공격력 80%</span>의 버프가 적용됩니다.<br/>
                        이처럼, 시전마다 버프타입을 바꿔서 넣는 것도 가능합니다.<br/><br/>
                    </p>
                </div>
                <p className="alert_pTag">
                    <span className="magutgan_alert_title_span">2. 마구간의 버프 타입을 통일하자.</span><br/><br/><br/>
                    다음 예시를 보면
                </p>
                <div className="alert_magugan2">
                    <img src={require("../../../assets/image/magutgan_alert4.png")}></img>
                    <p> 
                        마법 공격력 <span className="magutgan_alert_span">( 1% + 8% = 9%)</span>
                        , 물리 공격력 <span className="magutgan_alert_span">1% </span>  , 방어력 <span className="magutgan_alert_span">1% </span> 가 있다면 <br/>
                        가장 %가 높은 마법 공격력만 적용되고 물리 공격력과, 방어력이 적용되지 않습니다.<br/>
                        따라서 시전별로 타입은 달라도 마구간의 버프 타입은 통일이 되어야 합니다.<br/><br/><br/><br/><br/>


                        <span className="magutgan_alert_title_span">요약하면</span><br/><br/>
                        1. 마구간의 버프 타입은 통일 시키자.<br/><br/>
                        2. 시전은 3개를 사용해 최대 15마리를 중첩시킬 수 있다.<br/><br/>
                        3. 분명 마구간 버프는 비용이 많이 들어가는 컨텐츠 입니다. 하지만 본인의 자본을 생각하여 마구간 버프를 사용 해도 됩니다. <br/>
                        꼭 15마리 말을 채울 필요도 없고 12%의 말을 넣을 필요없습니다. 자본이 없다면 8% 말을 넣고 행수 오라를 받는것도 방법입니다.
                    </p>
                </div>
            </div>
        </>
    )
}

export default HorseHouseWideMehodCompo;