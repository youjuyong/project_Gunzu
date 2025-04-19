import React from "react";
import { useState, useLayoutEffect, memo    } from "react";
import { AxiosCall, errorHandler, Token     } from "../../utils/common/common";
import { API_IP_INFO                        } from "../../utils/apiUrl";
import { Link                               } from "react-router-dom";
import { Pagination, useListPage            } from "../../../src/commComponent/TablePageFooterCompo";
import { Loading                            } from "../../commComponent/Loading";
interface mainBoardListType {
    id                          : string, // 공지 ID
    rtrvCnt                     : number, // 조회수
    textTitl                    : string, // 공지 제목
    wrtr                        : string, // 작성자
    regDt                       : string, // 등록날짜
    imptYn                      : string, // 공지 중요도
}

const viewPageDataCnt = 7;  // 한페이지에 보여줄 데이터 갯수
const initCurrentPage = 1;  // 초기 페이지 쪽수
const viewPageCnt     = 5;  // 하단 페이지 목록 표출 갯수 

const MainCp = () => {
    const token = Token();
    const [mainBoardList, setMainBoardList] = useState([]);
    const [isLoading,           setLoading] = useState(false);
    const [renderList, setViewData, setCurrentPage, currentPage, totalPage, firstPage, lastPage, slicedList] = useListPage(mainBoardList ,viewPageDataCnt, initCurrentPage, viewPageCnt);

    useLayoutEffect(() => {
         setLoading(true);
         AxiosCall("get", API_IP_INFO + '/board/main-board-list', null, (data) => {
                setMainBoardList(data);
                setLoading(false);
         }, (e) => {
                         errorHandler(e.response);
        }, token);
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
                                <span>{mainBoardList.length}</span>
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
                props?.data && props.data.map((v : mainBoardListType, i : number) => {
                    return(
                        <tr key={ i } className = {v.imptYn === 'Y' ? 'impt' : ''}>
                            <td>{v?.id}</td>
                            <td>{v.imptYn === 'Y'       ? <span className='alert'>중요</span> : ''}<Link to="mainBordTextInfo" state= {{text_id : v.id, url : 'mainBordTextInfo', text_title : v.textTitl, reg_dt : v?.regDt.substring(0,10),}}>{v?.textTitl}</Link></td>
                            <td>{v?.wrtr   === undefined ? '관리자' : v.wrtr}</td>
                            <td>{v?.regDt.substring(0,10)}</td>
                            <td>{v?.rtrvCnt}</td>
                        </tr>
                    )
                })
            }
        </>
    )
};

const Main = React.memo(MainCp);
export default Main ;