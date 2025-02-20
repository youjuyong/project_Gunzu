import { horseScoreReViewModal } from "../../../utils/common/modalCss";
import Modal from "react-modal";
import React, {useCallback, useEffect, useRef, useState} from "react";
import { useNavigate } from "react-router-dom";
import UseEnterBtnClick from "../../../utils/common/useEnterBtnClick";
import { InputTagIdValidate } from "../../../utils/common/dataValidateCheck";
import { axiosCall          } from "../../../utils/common/common";
import { API_IP_INFO        } from "../../../utils/apiUrl";

interface horseListType {
    HORSE_ID                    : string, // 탈것 ID
    HORSE_NAME                  : string, // 탈것 이름
    HORSE_NUM                   : number, // 탈것 순번
    HORSER_LIMIT_CON            : string, // 탈것 탑승 조건
    HORSE_BURF_TYPE             : string, // 탈것 버프 타입
    HORSE_LIFE                  : string, // 탈것 수명
    HORSE_HOUSE_BURF_TYPE       : string, // 탈것 마구간 버프타입
    HORSE_BURF_PER_TYPE         : string, // 탈것 버프 퍼센트
    MAX_SPED                    : number, // 최대 속도
    MAX_AGIL                    : number, // 최대 순발력
    MAX_FORCE                   : number, // 최대 근력
    MAX_MAGIC_FORCE             : number, // 최대 도력
    BIG_SHOP_PRICE              : string, // 대상전 가격
    HORSE_BURF_TYPE_CODE        : string, // 탈것 버프 타입 코드
    HORSE_HOUSE_BURF_TYPE_CDOE  : string, // 탈것 마구간 버프 타입 코드
    SPECIAL_BURF_NUM            : number, // 탈것 특수버프 수치
    SCORE                       : number  // 탈것 평점
}

interface horseReviewType {
    modalBoolean   : boolean,
    setModalIsOpen : (e : any) => void,
    horsData       : any
}

const HorseReviewMd = ( props : horseReviewType ) => {

    const buttonElement = UseEnterBtnClick();
   
    console.log(props);
    return ( 
        <div>
            <Modal
                isOpen={props.modalBoolean}
                style={horseScoreReViewModal}
                onRequestClose={() => props.setModalIsOpen(false)}
                ariaHideApp={false}
                contentLabel="Pop up Message"
                shouldCloseOnOverlayClick={false}
            >
                 <div className="modal-dialog popup_horseReview" role="document">
                    <div className="horse-modal-content">
                        {/* <!-- 해더 영역 --> */}
                        <div className="modal-header">
                            <h2>{props.horsData.HORSE_NAME} 상세정보</h2>
                            <button type="button" className="close" data-dismiss="modal" onClick={() => {
                                props.setModalIsOpen(false)
                            }}>닫기
                            </button>
                        </div>
                        {/* <!-- ./해더 영역 --> */}

                        {/* <!-- 컨텐츠 영역 --> */}
                        <div className="horse_popcontent">
                            <h2>기본사항</h2>
                            <div className="poplinepaddingbox">
                                <table className="poptable poptable_horseScoreplus">
                                    <thead></thead>
                                    <tbody>
                                        <tr>
                                            <th className="com">아이디</th>
                                            <td><input type="text" name="USER_ID" />
                                            <button  className="onajiIdCheck" >중복확인
                                            </button></td>
                                        </tr>
                                        <tr>
                                            <th className="com">비밀번호</th>
                                        </tr>
                                        <tr>
                                            <th className="com">닉네임</th>
                                        </tr>
                                        <tr>
                                            <th>의정부 주민 여부</th>
                                            <td className="checkPersonTd"><span className="checkPersonSpan1" >예</span><input id="alarmbox" className="checkPerson1" type="checkbox" name="yesCheck" readOnly/></td>
                                            <td className="checkPersonTd"><span className="checkPersonSpan2">아니요</span><input id="alarmbox" className="checkPerson2"  type="checkbox" name="noCheck"  readOnly/></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="horseRevie_buttonset">
                                <button ref={buttonElement} >저장
                                </button> 
                                <button data-dismiss="modal" onClick={() => {
                                    props.setModalIsOpen(false)
                                }}>취소
                                </button>
                            </div>
                        </div>
                        {/* <!-- ./컨텐츠 영역 --> */}
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export const HorseReviewModal = React.memo(HorseReviewMd);
