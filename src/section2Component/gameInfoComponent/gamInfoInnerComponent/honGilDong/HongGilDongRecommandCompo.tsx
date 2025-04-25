import { useEffect, useState   } from "react";
import { LazyImageHook         } from "../../../../../src/utils/common/common";
import { Section2Titleh3       } from "../../../../utils/commonStyles";

/* 전추향상술 추천 */
const HongGilDongRecommandCompo = () => {
    const [barPosition, setBarPosition] = useState(200);
    const handleScroll = () => {

        if ( window.scrollY < 500 ) return;
        const position = 3400 < 200 - 500 + window.scrollY ? 3400 : 200  - 500 + window.scrollY;
        setBarPosition(position);
      };

      useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        window.scrollTo(0, 650);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

      // 사이드 바 클릭시
      const onClickHandler = ( e : any ) => {
        const { innerHTML } = e.target;
        if      ( innerHTML === '1' )  { window.scrollTo(0, 650);  } 
        else if ( innerHTML === '2' )  { window.scrollTo(0, 1180); } 
        else if ( innerHTML === '3' )  { window.scrollTo(0, 1680); } 
        else if ( innerHTML === '4' )  { window.scrollTo(0, 2200); } 
        else if ( innerHTML === '5' )  { window.scrollTo(0, 2800); } 
        else if ( innerHTML === '6' )  { window.scrollTo(0, 3400); } 
      }

    return (
        <>
              <div className='hongButtonDiv'>
                    <div className="HongSideBar  pretend"  style={{ top: barPosition }}>
                        <div className="nectangle"></div>
                        <ul>
                            <li onClick={onClickHandler}>
                                <p className={barPosition < 800 ? 'circle click' : 'circle'}>1</p>
                                <p className="circletext pretend">검</p>
                            </li>
                            <li onClick={onClickHandler}>
                                <p className={barPosition >= 800 && barPosition < 1343  ? 'circle click' : 'circle'}>2</p>
                                <p className="circletext pretend">창</p>
                            </li>
                            <li onClick={onClickHandler}>
                                <p className={barPosition >= 1343 && barPosition < 1800  ? 'circle click' : 'circle'}>3</p>
                                <p className="circletext pretend">총</p>
                            </li>
                            <li onClick={onClickHandler}>
                                <p className={barPosition >= 1800 && barPosition < 2300  ? 'circle click' : 'circle'}>4</p>
                                <p className="circletext pretend">활</p>
                            </li>
                            <li onClick={onClickHandler}>
                                <p className={barPosition >= 2300 && barPosition < 3000  ? 'circle click' : 'circle'}>5</p>
                                <p className="circletext pretend">지팡이</p>
                            </li>
                            <li onClick={onClickHandler}>
                                <p className={barPosition >= 3000 && barPosition < 3400  ? 'circle click' : 'circle'}>6</p>
                                <p className="circletext pretend">도끼</p>
                            </li>
                        </ul>
                    </div>
                    <div className="intro_title">
                        <Section2Titleh3 url={'st7'}><LazyImageHook src={require("../../../../assets/image/craftTypeImg/sword.png")} alt={'검'} className={'hong_img'} height={40}></LazyImageHook>검</Section2Titleh3>
                        <div className="table_div">
                            <table className="hong_table pretend">
                                <thead className="orange_thead">
                                    <tr>
                                        <th>순서</th>
                                        <th>종류</th>
                                        <th>기술명</th>
                                        <th>설명</th>
                                        <th>1단계</th>
                                        <th>2단계</th>
                                        <th>3단계</th>
                                        <th>4단계</th>
                                        <th>5단계</th>
                                    </tr>
                                </thead>
                                <tbody className="orange_tbody">
                                    <tr>
                                        <th>1</th>
                                        <th>검</th>
                                        <th>무기공격력증가술</th>
                                        <th>무기공격력증가</th>
                                        <td>4%</td>
                                        <td>8%</td>
                                        <td>12%</td>
                                        <td>16%</td>
                                        <td>20%</td>
                                    </tr>
                                    <tr>
                                        <th>2</th>
                                        <th>검</th>
                                        <th>회피증가술</th>
                                        <th>회피율증가</th>
                                        <td>4%</td>
                                        <td>8%</td>
                                        <td>12%</td>
                                        <td>16%</td>
                                        <td>20%</td>
                                    </tr>
                                    <tr>
                                        <th>3</th>
                                        <th>검</th>
                                        <th>체력증가술</th>
                                        <th>체력증가</th>
                                        <td>4%</td>
                                        <td>8%</td>
                                        <td>12%</td>
                                        <td>16%</td>
                                        <td>20%</td>
                                    </tr>
                                    <tr>
                                        <th>4</th>
                                        <th>검</th>
                                        <th>만류귀종</th>
                                        <th>경험치획득율</th>
                                        <td>20%</td>
                                        <td>40%</td>
                                        <td>60%</td>
                                        <td>80%</td>
                                        <td>100%</td>
                                    </tr>
                                    <tr>
                                        <th>5</th>
                                        <th>검</th>
                                        <th>흡성증가술</th>
                                        <th>흡성대법 확률증가</th>
                                        <td>4%</td>
                                        <td>8%</td>
                                        <td>12%</td>
                                        <td>16%</td>
                                        <td>20%</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p className="pretend">"장비가 매우 좋으시면 5번째 흡성증가술을 '무기공격력증폭술'로 바꾸셔도 되지만 대부분 해당사항이 아니시니"<br></br>
                                "흡성 증가술을 찍어줍니다."
                            </p>
                        </div>
                    </div>
                    <div className="intro_title">
                        <Section2Titleh3 url={'st7'}><LazyImageHook src={require("../../../../assets/image/craftTypeImg/spear.png")} alt={'창'} className={'hong_img'} height={40}></LazyImageHook>창</Section2Titleh3>
                        <div className="table_div">
                            <table className="hong_table pretend">
                                <thead className="blue_thead">
                                    <tr>
                                        <th>순서</th>
                                        <th>종류</th>
                                        <th>기술명</th>
                                        <th>설명</th>
                                        <th>1단계</th>
                                        <th>2단계</th>
                                        <th>3단계</th>
                                        <th>4단계</th>
                                        <th>5단계</th>
                                    </tr>
                                </thead>
                                <tbody className="blue_tbody">
                                    <tr>
                                        <th>1</th>
                                        <th>창</th>
                                        <th>마법공격증가술</th>
                                        <th>마법공격력증가</th>
                                        <td>4%</td>
                                        <td>8%</td>
                                        <td>12%</td>
                                        <td>16%</td>
                                        <td>20%</td>
                                    </tr>
                                    <tr>
                                        <th>2</th>
                                        <th>창</th>
                                        <th>방어증가술</th>
                                        <th>방어력증가</th>
                                        <td>6%</td>
                                        <td>12%</td>
                                        <td>18%</td>
                                        <td>24%</td>
                                        <td>30%</td>
                                    </tr>
                                    <tr>
                                        <th>3</th>
                                        <th>창</th>
                                        <th>무기공격력증폭술</th>
                                        <th>무기공격력증가</th>
                                        <td>2%</td>
                                        <td>4%</td>
                                        <td>6%</td>
                                        <td>8%</td>
                                        <td>10%</td>
                                    </tr>
                                    <tr>
                                        <th>4</th>
                                        <th>창</th>
                                        <th>공격력간격감소술</th>
                                        <th>데미지간격감소</th>
                                        <td>10%</td>
                                        <td>20%</td>
                                        <td>30%</td>
                                        <td>40%</td>
                                        <td>50%</td>
                                    </tr>
                                    <tr>
                                        <th>5</th>
                                        <th>창</th>
                                        <th>흡성증가술</th>
                                        <th>흡성대법 확률증가</th>
                                        <td>4%</td>
                                        <td>8%</td>
                                        <td>12%</td>
                                        <td>16%</td>
                                        <td>20%</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p className="pretend">"창은 마법중에 경험치 증가 스킬이 있기 때문에 4번째 스킬 '만류귀종'이 없고 대신 '공격력간격감소술'을 찍어줍니다."<br></br>
                            </p>
                        </div>
                    </div>
                    <div className="intro_title">
                        <Section2Titleh3 url={'st7'}><LazyImageHook src={require("../../../../assets/image/craftTypeImg/gun.png")} alt={'총'} className={'hong_img'} height={40}></LazyImageHook>총</Section2Titleh3>
                        <div className="table_div">
                            <table className="hong_table pretend">
                                <thead className="gray_thead">
                                    <tr>
                                        <th>순서</th>
                                        <th>종류</th>
                                        <th>기술명</th>
                                        <th>설명</th>
                                        <th>1단계</th>
                                        <th>2단계</th>
                                        <th>3단계</th>
                                        <th>4단계</th>
                                        <th>5단계</th>
                                    </tr>
                                </thead>
                                <tbody className="gray_tbody">
                                    <tr>
                                        <th>1</th>
                                        <th>총</th>
                                        <th>무기공격력증가술</th>
                                        <th>무기공격력증가</th>
                                        <td>4%</td>
                                        <td>8%</td>
                                        <td>12%</td>
                                        <td>16%</td>
                                        <td>20%</td>
                                    </tr>
                                    <tr>
                                        <th>2</th>
                                        <th>총</th>
                                        <th>마법사용간격감소술</th>
                                        <th>마법 사용 쿨타임 감소</th>
                                        <td>6%</td>
                                        <td>12%</td>
                                        <td>18%</td>
                                        <td>24%</td>
                                        <td>30%</td>
                                    </tr>
                                    <tr>
                                        <th>3</th>
                                        <th>총</th>
                                        <th>흡성증가술</th>
                                        <th>흡성대법 확률 증가</th>
                                        <td>4%</td>
                                        <td>8%</td>
                                        <td>12%</td>
                                        <td>16%</td>
                                        <td>20%</td>
                                    </tr>
                                    <tr>
                                        <th>4</th>
                                        <th>총</th>
                                        <th>만류귀종</th>
                                        <th>경험치 획득량 증가</th>
                                        <td>20%</td>
                                        <td>40%</td>
                                        <td>60%</td>
                                        <td>80%</td>
                                        <td>100%</td>
                                    </tr>
                                    <tr>
                                        <th>5</th>
                                        <th>총</th>
                                        <th>무기공격력증폭술</th>
                                        <th>무기공격력증폭</th>
                                        <td>2%</td>
                                        <td>4%</td>
                                        <td>6%</td>
                                        <td>8%</td>
                                        <td>10%</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p className="pretend">"총은 무난하게 4단계 '만류귀종' 찍어줍니다."<br></br>
                            </p>
                        </div>
                    </div>
                    <div className="intro_title">
                        <Section2Titleh3 url={'st7'}><LazyImageHook src={require("../../../../assets/image/craftTypeImg/bow.png")} alt={'활'} className={'hong_img'} height={40}></LazyImageHook>활</Section2Titleh3>
                        <div className="table_div">
                            <table className="hong_table pretend">
                                <thead className="red_thead">
                                    <tr>
                                        <th>순서</th>
                                        <th>종류</th>
                                        <th>기술명</th>
                                        <th>설명</th>
                                        <th>1단계</th>
                                        <th>2단계</th>
                                        <th>3단계</th>
                                        <th>4단계</th>
                                        <th>5단계</th>
                                    </tr>
                                </thead>
                                <tbody className="red_tbody">
                                    <tr>
                                        <th>1</th>
                                        <th>활</th>
                                        <th>마법공격증가술</th>
                                        <th>마법공격력 증가</th>
                                        <td>4%</td>
                                        <td>8%</td>
                                        <td>12%</td>
                                        <td>16%</td>
                                        <td>20%</td>
                                    </tr>
                                    <tr>
                                        <th>2</th>
                                        <th>활</th>
                                        <th>명중증가술</th>
                                        <th>명중률 증가</th>
                                        <td>4%</td>
                                        <td>8%</td>
                                        <td>12%</td>
                                        <td>26%</td>
                                        <td>20%</td>
                                    </tr>
                                    <tr>
                                        <th>3</th>
                                        <th>활</th>
                                        <th>사거리증가술</th>
                                        <th>사거리 증가</th>
                                        <td>0%</td>
                                        <td>0%</td>
                                        <td>0%</td>
                                        <td>1%</td>
                                        <td>2%</td>
                                    </tr>
                                    <tr>
                                        <th>4</th>
                                        <th>활</th>
                                        <th>만류귀종</th>
                                        <th>경험치 획득량 증가</th>
                                        <td>20%</td>
                                        <td>40%</td>
                                        <td>60%</td>
                                        <td>80%</td>
                                        <td>100%</td>
                                    </tr>
                                    <tr>
                                        <th>5</th>
                                        <th>활</th>
                                        <th>흡성증가술</th>
                                        <th>흡성대법 확률 증가</th>
                                        <td>4%</td>
                                        <td>8%</td>
                                        <td>12%</td>
                                        <td>16%</td>
                                        <td>20%</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p className="pretend">"활도 무난하게 4번째 '만류귀종' 5번째 '흡성증가술'을 찍어줍니다."<br></br>
                            </p>
                        </div>
                    </div>
                    <div className="intro_title">
                        <Section2Titleh3 url={'st7'}><LazyImageHook src={require("../../../../assets/image/craftTypeImg/magin_stick.png")} alt={'지팡이'} className={'hong_img'} height={40}></LazyImageHook>지팡이</Section2Titleh3>
                        <div className="table_div">
                            <table className="hong_table pretend">
                                <thead className="green_thead">
                                    <tr>
                                        <th>순서</th>
                                        <th>종류</th>
                                        <th>기술명</th>
                                        <th>설명</th>
                                        <th>1단계</th>
                                        <th>2단계</th>
                                        <th>3단계</th>
                                        <th>4단계</th>
                                        <th>5단계</th>
                                    </tr>
                                </thead>
                                <tbody className="green_tbody">
                                    <tr>
                                        <th>1</th>
                                        <th>지팡이</th>
                                        <th>마법공격증가술</th>
                                        <th>마법 공격력 증가</th>
                                        <td>4%</td>
                                        <td>8%</td>
                                        <td>12%</td>
                                        <td>16%</td>
                                        <td>20%</td>
                                    </tr>
                                    <tr>
                                        <th>2</th>
                                        <th>지팡이</th>
                                        <th>필요도력감소술</th>
                                        <th>소비 마나 감소</th>
                                        <td>6%</td>
                                        <td>12%</td>
                                        <td>18%</td>
                                        <td>24%</td>
                                        <td>30%</td>
                                    </tr>
                                    <tr>
                                        <th>3</th>
                                        <th>지팡이</th>
                                        <th>도력증가술</th>
                                        <th>도력 증가</th>
                                        <td>4%</td>
                                        <td>8%</td>
                                        <td>12%</td>
                                        <td>16%</td>
                                        <td>20%</td>
                                    </tr>
                                    <tr>
                                        <th>4</th>
                                        <th>지팡이</th>
                                        <th>만류귀종</th>
                                        <th>경험치 획득량 증가</th>
                                        <td>20%</td>
                                        <td>40%</td>
                                        <td>60%</td>
                                        <td>80%</td>
                                        <td>100%</td>
                                    </tr>
                                    <tr>
                                        <th>5</th>
                                        <th>지팡이</th>
                                        <th>흡성증가술</th>
                                        <th>흡성대법 확률 증가</th>
                                        <td>4%</td>
                                        <td>8%</td>
                                        <td>12%</td>
                                        <td>16%</td>
                                        <td>20%</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p className="pretend">"지팡이는 몬스터 수가 많아 지는 중후반 사냥시 굉장히 선호하는 무기중 하나입니다."<br></br>
                            "4번 '만류귀종'은 불변이고 5번 흡성증가술 아니면 무기공격력증폭술이 있지만 생존을 위해 흡성을 추천드립니다."
                            </p>
                        </div>
                    </div>
                    <div className="intro_title">
                        <Section2Titleh3 url={'st7'}><LazyImageHook src={require("../../../../assets/image/craftTypeImg/ax.png")} alt={'도끼'} className={'hong_img'} height={40}></LazyImageHook>도끼</Section2Titleh3>
                        <div className="table_div">
                            <table className="hong_table pretend">
                                <thead className="yellow_thead">
                                    <tr>
                                        <th>순서</th>
                                        <th>종류</th>
                                        <th>기술명</th>
                                        <th>설명</th>
                                        <th>1단계</th>
                                        <th>2단계</th>
                                        <th>3단계</th>
                                        <th>4단계</th>
                                        <th>5단계</th>
                                    </tr>
                                </thead>
                                <tbody className="yellow_tbody">
                                    <tr>
                                        <th>1</th>
                                        <th>도끼</th>
                                        <th>필살증가술</th>
                                        <th>필살율 증가</th>
                                        <td>6%</td>
                                        <td>12%</td>
                                        <td>18%</td>
                                        <td>24%</td>
                                        <td>30%</td>
                                    </tr>
                                    <tr>
                                        <th>2</th>
                                        <th>도끼</th>
                                        <th>강신술</th>
                                        <th>피격 모션율 감소</th>
                                        <td>4%</td>
                                        <td>8%</td>
                                        <td>12%</td>
                                        <td>16%</td>
                                        <td>20%</td>
                                    </tr>
                                    <tr>
                                        <th>3</th>
                                        <th>도끼</th>
                                        <th>공격력간격감소율</th>
                                        <th>공격력 간격 감소</th>
                                        <td>10%</td>
                                        <td>20%</td>
                                        <td>30%</td>
                                        <td>40%</td>
                                        <td>50%</td>
                                    </tr>
                                    <tr>
                                        <th>4</th>
                                        <th>도끼</th>
                                        <th>만류귀종</th>
                                        <th>경험치 획득량 증가</th>
                                        <td>20%</td>
                                        <td>40%</td>
                                        <td>60%</td>
                                        <td>80%</td>
                                        <td>100%</td>
                                    </tr>
                                    <tr>
                                        <th>5</th>
                                        <th>도끼</th>
                                        <th>무기공격력증폭술</th>
                                        <th>무기공격력증폭</th>
                                        <td>2%</td>
                                        <td>4%</td>
                                        <td>6%</td>
                                        <td>8%</td>
                                        <td>10%</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p className="pretend">"도끼는 흡성스킬이 있기 때문에 5번 스킬은 '무기 공격력 증폭술' 추천드립니다. 더 안정감 있는 사냥을 원하시면 흡성을 추천해 드립니다.  "<br></br>
                            </p>
                        </div>
                    </div>
              </div>

        </>
    )
}


export default HongGilDongRecommandCompo;