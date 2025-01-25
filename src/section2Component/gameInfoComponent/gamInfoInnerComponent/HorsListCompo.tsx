import { useState, useEffect }       from "react";
import { axiosCall, useQuerySingle } from "utils/common/common";
import { API_IP_INFO }               from "utils/apiUrl";

interface HouseHeaderType {
    rideLimitType         : string,  // 탈것 조건
    horseHouseBurpType    : string,  // 마굿간 버프 타입
    horseBurpType         : string,  // 탈것 버프 종류
    horseLifeType         : string,  // 탈것 수명
    horseHouseBurpPercent : string,  // 마굿간 버프 비율
}

/* 탈것 리스트 */
const HorsListCompo = () => {
    const { data } = useQuerySingle("get-bit-type", null, `${API_IP_INFO}/horse/stall-table-header`, 60000 * 5, 60000 * 10, false, true, false);
    const [searchValue, setSearchValue] = useState<HouseHeaderType>({
        rideLimitType         : '',
        horseHouseBurpType    : '',
        horseBurpType         : '',
        horseLifeType         : '',
        horseHouseBurpPercent : '',
    });
    
    const onChangeCondition = (e: any) => {
        const {name, value} = e.target;

        setSearchValue({...searchValue, [name]: value});
    }

    useEffect(() => {

    },[]);
 
    return (
        <>  
             <div className='contenbox'>
                <div className='horseInnerDiv'>
                    <section className="horseRideSection1" >
                        <div className="rideSelectArea">
                            <table className="table tableHorse snans">
                                    <thead>
                                        <tr>
                                            <th>사용조건 : </th>
                                            <td>
                                                <select defaultValue={""} name="rideLimitType" onChange={onChangeCondition}>
                                                    <option value="">전체</option>
                                                    {
                                                        data?.rideLimitType.map((x: any, idx: number) => {
                                                            return (
                                                                <option value={x.COMM_CLSF_CD} key={idx}>{x.COMM_CD_KOR_NAME}</option>
                                                            )
                                                        })
                                                    }
                                                 </select>
                                            </td>
                                            <th>버프종류 : </th>
                                            <td>
                                                 <select defaultValue={""} name="horseBurpType" onChange={onChangeCondition}>
                                                    <option value="">전체</option>
                                                    {
                                                        data?.horseBurpType.map((x: any, idx: number) => {
                                                            return (
                                                                <option value={x.COMM_CLSF_CD} key={idx}>{x.COMM_CD_KOR_NAME}</option>
                                                            )
                                                        })
                                                    }
                                                 </select>
                                            </td>
                                            <th>수명 : </th>
                                            <td>
                                                <select defaultValue={""} name="horseLifeType" onChange={onChangeCondition}>
                                                    <option value="">전체</option>
                                                    {
                                                        data?.horseLifeType.map((x: any, idx: number) => {
                                                            return (
                                                                <option value={x.COMM_CLSF_CD} key={idx}>{x.COMM_CD_KOR_NAME}</option>
                                                            )
                                                        })
                                                    }
                                                 </select>
                                            </td>
                                            <th>마굿간 버프 타입 : </th>
                                            <td>
                                                 <select defaultValue={""} name="horseHouseBurpType" onChange={onChangeCondition}>
                                                    <option value="">전체</option>
                                                    {
                                                        data?.horseHouseBurpType.map((x: any, idx: number) => {
                                                            return (
                                                                <option value={x.COMM_CLSF_CD} key={idx}>{x.COMM_CD_KOR_NAME}</option>
                                                            )
                                                        })
                                                    }
                                                 </select>
                                            </td>
                                            <th>마굿간 버프 비율(%) : </th>
                                            <td>
                                                 <select defaultValue={""} name="horseHouseBurpPercent" onChange={onChangeCondition}>
                                                    <option value="">전체</option>
                                                    {
                                                        data?.horseHouseBurpPercent.map((x: any, idx: number) => {
                                                            return (
                                                                <option value={x.COMM_CLSF_CD} key={idx}>{x.COMM_CD_KOR_NAME}</option>
                                                            )
                                                        })
                                                    }
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
                          <div className="tableConbin">
                            <table className="table rideListTable snans">
                                <caption>탈것 리스트</caption>
                                <thead>
                                    <tr>
                                        <th>이미지</th>
                                        <th>이름</th>
                                        <th>사용조건</th>
                                        <th>버프종류</th>
                                        <th>수명</th>
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
                                        <td className="sword_attack">물리공격력</td>
                                        <td>1999일(2달)</td>
                                        <td>최대능력치</td>
                                        <td>효과</td>
                                        <td>물공 8%</td>
                                        <td>200억</td>
                                    </tr>
                                    <tr>
                                        <td>이미지</td>
                                        <td>이름</td>
                                        <td>사용조건</td>
                                        <td className="sword_attack">물리공격력</td>
                                        <td>수명</td>
                                        <td>최대능력치</td>
                                        <td>효과</td>
                                        <td>마굿간 버프</td>
                                        <td>대상전 가격</td>
                                    </tr>
                                    <tr>
                                        <td>이미지</td>
                                        <td>이름</td>
                                        <td>사용조건</td>
                                        <td className="magic_attack">마법공격력</td>
                                        <td>수명</td>
                                        <td>최대능력치</td>
                                        <td>효과</td>
                                        <td>마굿간 버프</td>
                                        <td>대상전 가격</td>
                                    </tr>
                                    <tr>
                                        <td>이미지</td>
                                        <td>이름</td>
                                        <td>사용조건</td>
                                        <td className="attackType">마법공격력</td>
                                        <td>수명</td>
                                        <td>최대능력치</td>
                                        <td>효과</td>
                                        <td>마굿간 버프</td>
                                        <td>대상전 가격</td>
                                    </tr>
                                </tbody>
                            </table>
                            </div>
                            <div className="board_bottom centerlistboxbottom">
                                <div className="pagebtnbox">
                                    <button className="btn_pageleftmax"></button>
                                    <button className="btn_pageleft"></button>
                                    <button className="btn_pageright"></button>
                                    <button className="btn_pagerightmax"></button>
                                    <ul className="pagenumber">
                                        <li className="click">1</li>
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