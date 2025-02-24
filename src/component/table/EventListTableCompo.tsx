import react from "react";
import { useState, useLayoutEffect    } from "react";
import { axiosCall                    } from "../../utils/common/common";
import { API_IP_INFO                  } from "../../utils/apiUrl";
import { Link                         } from "react-router-dom";
import { Pagination, useListPage      } from "../../../src/commComponent/TablePageFooterCompo";
import { Loading                      } from "../../commComponent/Loading";
interface eventBoardListType {
    TEXT_ID                     : string, // 공지 ID
    RTRV_CNT                    : number, // 조회수
    TEXT_TITL                   : string, // 공지 제목
    USER_NAME                   : string, // 등록자 이름
    REG_DT                      : string, // 등록날짜
    BORD_TYPE                   : string, // 공지 타입
    IMPT_YN                     : string, // 공지 중요도
    EVENT_TERM                  : number, // 이벤트 차수
    FILE_YN                     : string, // 파일 유무
    FILE_NUM                    : number  // 파일번호
}

const viewPageDataCnt = 7;  // 한페이지에 보여줄 데이터 갯수
const initCurrentPage = 1;  // 초기 페이지 쪽수
const viewPageCnt     = 5;  // 하단 페이지 목록 표출 갯수 

const Event = () => {
    const [ eventBoardList, setEventBoardList ] = useState([]);
    const [isLoading,              setLoading ] = useState(false);
    const [renderList, setViewData, setCurrentPage, currentPage, totalPage, firstPage, lastPage, slicedList] = useListPage(eventBoardList ,viewPageDataCnt, initCurrentPage, viewPageCnt);
    
    useLayoutEffect(() => {
        setLoading(true);
                 axiosCall("get", API_IP_INFO + '/board/event-board-list', null, (data) => {
                    setEventBoardList(data);
                    setLoading(false);
                });
    },[]);

    return (
        <>
                            <div className="boardSearchBox">
                                <select>
                                        <option>제목</option>
                                        <option>내용</option>
                                </select>
                                <input type="text" placeholder="검색어를 입력해주세요."></input>
                                <button></button>
                            </div>
                            <p className = "count">"총"
                                <span>{eventBoardList.length}</span>
                                건의게시물이 있습니다.
                            </p>
                            { isLoading ? <Loading/> : <>
                                <table className="event_table">
                                    <caption>공지사항 리스트</caption>
                                    <thead>
                                        <tr>
                                            <th>번호</th>
                                            <th>제목</th>
                                            <th>작성자</th>
                                            <th>작성일</th>
                                            <th>첨부 파일</th>
                                            <th>조회수</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                            { slicedList?.length === 0 ? <tr><th className="info_nvl">조건에 맞는 정보가 없습니다.</th></tr> :  <CreateTable data={slicedList}></CreateTable> }
                                    </tbody>
                                </table>
                            </>
                            }
                            <Pagination
                                                                setCurrentPage={setCurrentPage}
                                                                currentPage={currentPage}
                                                                totalPage={totalPage}
                                                                firstPage={firstPage}
                                                                lastPage={lastPage}
                            />
        </>
    )
}

export const CreateTable = ( props : any ) => {
    return (
        <>  
            {
                props?.data && props.data.map((v : eventBoardListType, i : number) => {

                    return(
                        <tr key={ i } className = {v.IMPT_YN === 'Y' ? 'impt' : ''}>
                            <td>{v?.TEXT_ID}</td>
                            <td>{v.IMPT_YN === 'Y' ? <span className='alert'>중요</span> : ''}<Link to="eventTextInfo" state= {{text_id : v.TEXT_ID, url : 'eventTextInfo',event_term : v.EVENT_TERM,  text_tpe: v.BORD_TYPE, text_title : v.TEXT_TITL, reg_dt : v.REG_DT}}>{v?.TEXT_TITL}</Link></td>
                            <td>{v?.USER_NAME}</td>
                            <td>{v?.REG_DT}</td>
                            <td>{v?.FILE_YN === 'Y' ? <a className="file"></a> : ''}</td>
                            <td>{v?.RTRV_CNT}</td>
                        </tr>
                    )
                })
            }
        </>
    )
};


export default Event;