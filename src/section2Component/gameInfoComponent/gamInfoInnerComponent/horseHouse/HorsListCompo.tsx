import { useState                  } from "react";
import { useQuerySingle            } from "../../../../utils/common/common";
import { API_IP_INFO               } from "../../../../utils/apiUrl";
import { HorseListTableCompo       } from "../../../../component/table/HorseListTableCompo";

interface HouseHeaderType {
    rideLimitType         : string,  // 탈것 조건
    horseHouseBurpType    : string,  // 마구간 버프 타입
    horseBurpType         : string,  // 탈것 버프 종류
    horseLifeType         : string,  // 탈것 수명
    horseHouseBurpPercent : string,  // 마구간 버프 비율
    keyword               : string   // 키보드 입력
}

/* 탈것 리스트 */
const HorsListCompo = () => {
    const [ form, setForm ] = useState({inputValue: ''});
    const { inputValue    } = form;

    const { data          } = useQuerySingle("get-header-type", null, `${API_IP_INFO}/horse/stall-table-header`, 60000 * 5, 60000 * 10, false, true, false);
    
    const [searchValue, setSearchValue] = useState<HouseHeaderType>({
        rideLimitType         : '',
        horseHouseBurpType    : '',
        horseBurpType         : '',
        horseLifeType         : '',
        horseHouseBurpPercent : '',
        keyword               : ''
    });

    // 헤더 셀렉트 박스 변경시
    const onChangeCondition = (e: any) => {
        const {name, value} = e.target;
        setSearchValue({...searchValue, [name]: value});
    }

    // 검색창 변경시
    const changeKeyWordValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setForm({...form, [name]: value});
    }

    // 검색 버튼 클릭
    const searchkeyWord = () => {
        setSearchValue({...searchValue, ['keyword'] :inputValue });
    }

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
                                                                <option value={x.COMM_CD} key={idx}>{x.COMM_CD_KOR_NAME}</option>
                                                            )
                                                        })
                                                    }
                                                 </select>
                                            </td>
                                            <th>특수버프종류 : </th>
                                            <td>
                                                 <select defaultValue={""} name="horseBurpType" onChange={onChangeCondition}>
                                                    <option value="">전체</option>
                                                    {
                                                        data?.horseBurpType.map((x: any, idx: number) => {
                                                            return (
                                                                <option value={x.COMM_CD} key={idx}>{x.COMM_CD_KOR_NAME}</option>
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
                                                                <option value={x.COMM_CD} key={idx}>{x.COMM_CD_KOR_NAME}</option>
                                                            )
                                                        })
                                                    }
                                                 </select>
                                            </td>
                                            <th>마구간 버프 타입 : </th>
                                            <td>
                                                 <select defaultValue={""} name="horseHouseBurpType" onChange={onChangeCondition}>
                                                    <option value="">전체</option>
                                                    {
                                                        data?.horseHouseBurpType.map((x: any, idx: number) => {
                                                            return (
                                                                <option value={x.COMM_CD} key={idx}>{x.COMM_CD_KOR_NAME}</option>
                                                            )
                                                        })
                                                    }
                                                 </select>
                                            </td>
                                            <th>마구간 버프 비율(%) : </th>
                                            <td>
                                                 <select defaultValue={""} name="horseHouseBurpPercent" onChange={onChangeCondition}>
                                                    <option value="">전체</option>
                                                    {
                                                        data?.horseHouseBurpPercent.map((x: any, idx: number) => {
                                                            return (
                                                                <option value={x.COMM_CD} key={idx}>{x.COMM_CD_KOR_NAME}</option>
                                                            )
                                                        })
                                                    }
                                                 </select>
                                            </td>
                                            <th></th>
                                            <td>
                                                <input  id="input_keword" type="text" className='in150' placeholder="이름을 입력해주세요." name='inputValue' value={inputValue} onChange={changeKeyWordValue} ></input>
                                                <button id="btn_search" className="search" onClick={searchkeyWord}>조회</button>
                                            </td>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                    </section>
                    <section className="horseRideSection2" >
                         {/* 테이블 컴포넌트 */}
                        <HorseListTableCompo queryKeyValue = "get-horse-list"
                                             apiUrl        = "/horse/list"
                                             selectTType   = { searchValue }
                        ></HorseListTableCompo>
                    </section>
                </div>
            </div>
        </>
    )
}

export default HorsListCompo;