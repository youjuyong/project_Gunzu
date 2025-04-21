import React,{ useState            } from "react";
import { useQuerySingle            } from "../../../../utils/common/common";
import { API_IP_INFO               } from "../../../../utils/apiUrl";
import { HeroListTableCompo        } from "../../../../component/table/HeroListTableCompo";
import UseEnterBtnClick              from "../../../../utils/common/useEnterBtnClick";
import MetaTag                       from "../../../../utils/common/SEOMetaTag";
interface HouseHeaderType {
    heroType              : string,  // 영웅 타입
    versionType           : string,  // 버전 타입
    heroWeaponType        : string,  // 영웅 무기 타입
    heroBurpType          : string,  // 영웅 버프 타입
    keyword               : string   // 키보드 입력
}

/* 소환영웅이란 */
const RecallHeroListCp = () => {
     const buttonElement = UseEnterBtnClick();
     const [ form, setForm ] = useState({inputValue: ''});
     const { inputValue    } = form;
    
    const { data          } = useQuerySingle("get-hero-header-type", null, `${API_IP_INFO}/hero/recall-table-header`, 60000 * 5, 60000 * 10, false, true, false);

    const [searchValue, setSearchValue] = useState<HouseHeaderType>({
            heroType        : '',
            versionType     : '',
            heroWeaponType  : '',
            heroBurpType    : '',
            keyword         : ''
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
         <MetaTag title="소환영웅 목록" description="소환영웅 목록 에대한 정보를 알려주는 페이지입니다." keywords="군주온라인, 소환영웅"></MetaTag>
              <div className='contenbox'>
                           <div className='horseInnerDiv'>
                               <section className="horseRideSection1">
                                   <div className="rideSelectArea">
                                       <table className="table tableHero pretend">
                                               <thead>
                                                   <tr>
                                                       <th>영웅타입 : </th>
                                                       <td>
                                                           <select defaultValue={""} name="heroType" onChange={onChangeCondition}>
                                                               <option value="">전체</option>
                                                               {
                                                                  data && data?.heroType.map((x: any, idx: number) => {
                                                                       return (
                                                                           <option value={x.commCd} key={x.commCd}>{x.commCdKorName}</option>
                                                                       )
                                                                   })
                                                               }
                                                            </select>
                                                       </td>
                                                       <th>버전타입 : </th>
                                                       <td>
                                                            <select defaultValue={""} name="versionType" onChange={onChangeCondition}>
                                                               <option value="">전체</option>
                                                               {
                                                                   data && data?.versionType.map((x: any, idx: number) => {
                                                                       return (
                                                                           <option value={x.commCd} key={x.commCd}>{x.commCdKorName}</option>
                                                                       )
                                                                   })
                                                               }
                                                            </select>
                                                       </td>
                                                       <th>영웅 무기 타입 : </th>
                                                       <td>
                                                           <select defaultValue={""} name="heroWeaponType" onChange={onChangeCondition}>
                                                               <option value="">전체</option>
                                                               {
                                                                   data && data?.heroWeaponType.map((x: any, idx: number) => {
                                                                       return (
                                                                           <option value={x.commCd} key={x.commCd}>{x.commCdKorName}</option>
                                                                       )
                                                                   })
                                                               }
                                                            </select>
                                                       </td>
                                                       <th>영웅 버프 타입 : </th>
                                                       <td>
                                                            <select defaultValue={""} name="heroBurpType" onChange={onChangeCondition}>
                                                               <option value="">전체</option>
                                                               {
                                                                   data && data?.heroBurpType.map((x: any, idx: number) => {
                                                                       return (
                                                                           <option value={x.commCd} key={x.commCd}>{x.commCdKorName}</option>
                                                                       )
                                                                   })
                                                               }
                                                            </select>
                                                       </td>
                                                       <th></th>
                                                       <th></th>
                                                       <td>
                                                           <input  id="input_keword" type="text" className='in150' placeholder="이름을 입력해주세요." name='inputValue' value={inputValue} onChange={changeKeyWordValue}  ></input>
                                                           <button id="btn_search" className="search" onClick={searchkeyWord} ref={buttonElement} >조회</button>
                                                       </td>
                                                   </tr>
                                               </thead>
                                           </table>
                                       </div>
                               </section>
                               <section className="horseRideSection2" >
                                    {/* 테이블 컴포넌트 */}
                                    <HeroListTableCompo queryKeyValue = "get-hero-list"
                                                        apiUrl        = "/hero/list"
                                                        selectTType   = { searchValue }
                                   ></HeroListTableCompo> 
                               </section>
                           </div>
                       </div>
        </>
    )
}

const RecallHeroListCompo = React.memo(RecallHeroListCp);
export default RecallHeroListCompo;