import React from "react";
import { useState, useLayoutEffect, memo    } from "react";
import { axiosCall                          } from "../../utils/common/common";
import { API_IP_INFO                        } from "../../utils/apiUrl";
import { Link                               } from "react-router-dom";
import { Pagination, useListPage            } from "../../../src/commComponent/TablePageFooterCompo";
import { Loading                            } from "../../commComponent/Loading";
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
    FILE_NUM                    : number, // 파일번호
    FILE_NAME                   : string, // 파일이름
    PRIZE_YN                    : string, // 경품 이벤트 표출여부(ON/OFF)
    PRIZE_BORD_YN               : string, // 경품 이벤트 여부
}

const viewPageDataCnt = 7;  // 한페이지에 보여줄 데이터 갯수
const initCurrentPage = 1;  // 초기 페이지 쪽수
const viewPageCnt     = 5;  // 하단 페이지 목록 표출 갯수 

const EventCp = () => {
    const [ eventBoardList, setEventBoardList ] = useState([]);
    const [isLoading,              setLoading ] = useState(false);
    const [renderList, setViewData, setCurrentPage, currentPage, totalPage, firstPage, lastPage, slicedList] = useListPage(eventBoardList ,viewPageDataCnt, initCurrentPage, viewPageCnt);
    const masterYn = sessionStorage.getItem("masterYn");

    useLayoutEffect(() => {
                 // setLoading(true);
                  axiosCall("get", API_IP_INFO + '/board/event-board-list', null, (data) => {
                     setEventBoardList(data);
                    // setLoading(false);
         });
    },[]);

    const fileDownLoad = (fileNum : number, textId : string) => {
        axiosCall("post", API_IP_INFO + '/board/event-board-file-download', {textId : textId, fileNumber : fileNum}, (data) => {
            console.log("event file down load!!");
        });
    }

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
                                            <th>첨부 파일</th>
                                            <th>작성일</th>
                                            <th>조회수</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                            { slicedList?.length === 0 ? <tr><th className="info_nvl">조건에 맞는 정보가 없습니다.</th></tr> :  <CreateTable data={slicedList} fileDownLoad={fileDownLoad} masterYn={masterYn}></CreateTable> }
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

const EventetValidate = (masterYn : string, event : any) => {

     if ( ( masterYn === 'N' || masterYn === null )) {
         alert("의정부 주민만 이용 가능 합니다. 회원가입 후 반드시 관리자 에게 문의 바랍니다.");
         event.preventDefault();
         return;
     }
}

export const CreateTable = ( props : any ) => {
    return (
        <>  
            {
                props?.data && props.data.map((v : eventBoardListType, i : number) => {
                    return(
                        <tr key={ i } className = {v.IMPT_YN === 'Y' ? 'impt' : ''}>
                            <td>{v?.TEXT_ID}</td>
                            <td>{v.IMPT_YN === 'Y' ? <span className='alert'>중요</span> : ''}<Link to="eventTextInfo" state= {{text_id : v.TEXT_ID, url : 'eventTextInfo',event_term : v.EVENT_TERM,  text_type: v.BORD_TYPE, text_title : v.TEXT_TITL, reg_dt : v.REG_DT, prize_bord_yn : v.PRIZE_BORD_YN, prize_yn : v.PRIZE_YN}} onClick={(event : any) => EventetValidate(props.masterYn, event)}>{v?.TEXT_TITL}</Link></td>
                            <td>{v?.USER_NAME}</td>
                            <td>{v?.FILE_YN === 'Y' ? <a onClick={() => props.fileDownLoad(v.FILE_NUM, v.TEXT_ID)}className="file" title={v?.FILE_NAME}></a> : ''}</td>
                            <td>{v?.REG_DT}</td>
                            <td>{v?.RTRV_CNT}</td>
                        </tr>
                    )
                })
            }
        </>
    )
};

const Event = React.memo(EventCp);
export default Event ;