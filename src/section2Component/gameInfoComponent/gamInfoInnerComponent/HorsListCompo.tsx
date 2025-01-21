/* 탈것 리스트 */
const HorsListCompo = () => {
    return (
        <>  
             <div className='contenbox'>
                <div className='horseInnerDiv'>
                    <section className="horseRideSection1" >
                        <div className="rideSelectArea">
                            <table className="table tableHorse">
                                <thead>
                                    <tr>
                                        <th>사용조건</th>
                                        <td>
                                            <select name="" id="">
                                                <option value="">전체</option>
                                                <option value="">전직캐전용</option>
                                                <option value="">레벨20이상</option>
                                            </select>
                                        </td>
                                        <th>공격타입</th>
                                        <td>
                                            <select name="" id="">
                                                <option value="">전체</option>
                                                <option value="">물리공격력</option>
                                                <option value="">마법공격력</option>
                                            </select>
                                        </td>
                                        <th>수명</th>
                                        <td>
                                            <select name="" id="">
                                                <option value="">전체</option>
                                                <option value="">1달</option>
                                                <option value="">2달</option>
                                            </select>
                                        </td>
                                        <th>마굿간 버프 타입</th>
                                        <td>
                                            <select name="" id="">
                                                <option value="">전체</option>
                                                <option value="">물리공격력</option>
                                                <option value="">마법공격력</option>
                                                <option value="">방어력</option>
                                            </select>
                                        </td>
                                        <th>마굿간 버프 %비율</th>
                                        <td>
                                            <select name="" id="">
                                                <option value="">전체</option>
                                                <option value="">4%</option>
                                                <option value="">6%</option>
                                                <option value="">8%</option>
                                                <option value="">10%</option>
                                            </select>
                                        </td>
                                        <th></th>
                                        <td>
                                            <input id="input_keword" type="text" className='in150' placeholder="이름을 입력해주세요." ></input>
                                            <button id="btn_search" className="search">조회</button>
                                        </td>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </section>
                    <section className="horseRideSection2" >
                        <div className="rideListArea">
                            <table className="table rideListTable">
                                <caption>탈것 리스트</caption>
                                <thead>
                                    <tr>
                                        <th>이미지</th>
                                        <th>이름</th>
                                        <th>사용조건</th>
                                        <th>수명</th>
                                        <th>공격타입</th>
                                        <th>최대능력치</th>
                                        <th>효과</th>
                                        <th>마굿간 버프</th>
                                        <th>대상전 가격</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>이미지</td>
                                        <td>천리매</td>
                                        <td>전직퀘</td>
                                        <td>1999일(2달)</td>
                                        <td>물리공격력</td>
                                        <td>최대능력치</td>
                                        <td>효과</td>
                                        <td>물공 8%</td>
                                        <td>200억</td>
                                    </tr>
                                    <tr>
                                        <td>이미지</td>
                                        <td>이름</td>
                                        <td>사용조건</td>
                                        <td>수명</td>
                                        <td>공격타입</td>
                                        <td>최대능력치</td>
                                        <td>효과</td>
                                        <td>마굿간 버프</td>
                                        <td>대상전 가격</td>
                                    </tr>
                                    <tr>
                                        <td>이미지</td>
                                        <td>이름</td>
                                        <td>사용조건</td>
                                        <td>수명</td>
                                        <td>공격타입</td>
                                        <td>최대능력치</td>
                                        <td>효과</td>
                                        <td>마굿간 버프</td>
                                        <td>대상전 가격</td>
                                    </tr>
                                    <tr>
                                        <td>이미지</td>
                                        <td>이름</td>
                                        <td>사용조건</td>
                                        <td>수명</td>
                                        <td>공격타입</td>
                                        <td>최대능력치</td>
                                        <td>효과</td>
                                        <td>마굿간 버프</td>
                                        <td>대상전 가격</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="board_bottom centerlistboxbottom">
                                <div className="pagebtnbox">
                                    <button className="btn_pageleftmax"></button>
                                    <button className="btn_pageleft"></button>
                                    <button className="btn_pageright"></button>
                                    <button className="btn_pagerightmax"></button>
                                    <ul className="pagenumber">
                                        <li>1</li>
                                        <li>2</li>
                                        <li>3</li>
                                        <li>4</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default HorsListCompo;