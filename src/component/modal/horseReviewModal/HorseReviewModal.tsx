import { horseScoreReViewModal } from "../../../utils/common/modalCss";
import Modal from "react-modal";
import React from "react";
import { horseImgInfo                               } from "../../../utils/ContextList";
import { ReViewCompo                                } from "../../../commComponent/ReViewCompo";
import { horseBurf, horseSpecialSkill, horsePassive } from "../../../utils/ContextList";

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
    horsData       : horseListType | any
}

const HorseReviewMd = ( props : horseReviewType ) => {

    const imgUrl = horseImgInfo.filter((imgInfo : any) => imgInfo.horseId === props.horsData.HORSE_ID).map((m : any) => m.imgUrl)[0];
    
    const userId = sessionStorage.getItem("id");
    const burfHtml    = horseBurf.filter(        (v : any)  => props.horsData.HORSE_ID === v.horseId)?.[0];
    const passiveHtml = horsePassive.filter(     (v : any)  => props.horsData.HORSE_ID === v.horseId)?.[0];
    const skillHtml   = horseSpecialSkill?.filter((v : any) => props.horsData.HORSE_ID === v.horseId)?.[0];

    return ( 
        <div>
            <Modal
                isOpen={props.modalBoolean}
                style={horseScoreReViewModal}
                onRequestClose={() => props.setModalIsOpen({openBoolean : false, horseData : {}})}
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
                                props.setModalIsOpen({openBoolean : false, horseData : {}})
                            }}>닫기
                            </button>
                        </div>
                        {/* <!-- ./해더 영역 --> */}

                        {/* <!-- 컨텐츠 영역 --> */}
                        <div className="horse_popcontent">
                            <div className="popchild reviewImgDiv">
                                <img src={imgUrl}></img>
                            </div>
                            <div className="popchild reviewDetailDiv">
                                <table>
                                    <thead></thead>
                                    <tbody>
                                        <tr>
                                            <th>품명</th>
                                            <td>{props.horsData.HORSE_NAME}</td>
                                        </tr>
                                        <tr>
                                            <th>탑승조건</th>
                                            <td>{props.horsData.HORSER_LIMIT_CON}</td>
                                        </tr>
                                        
                                        <tr>
                                            <th>수명</th>
                                            <td>{props.horsData.HORSE_LIFE}</td>
                                        </tr>
                                        <tr>
                                            <th>마구간 버프타입</th>
                                            <td>{props.horsData.HORSE_HOUSE_BURF_TYPE}</td>
                                        </tr>
                                        <tr>
                                            <th>마구간 버프 퍼센트</th>
                                            <td>{props.horsData.HORSE_BURF_PER_TYPE}</td>
                                        </tr>
                                        <tr>
                                            <th>최대 속도</th>
                                            <td>{props.horsData.MAX_SPED}</td>
                                        </tr>
                                        <tr>
                                            <th>최대 순발력</th>
                                            <td>{props.horsData.MAX_AGIL}</td>
                                        </tr>
                                        <tr>
                                            <th>최대 도력</th>
                                            <td>{props.horsData.MAX_MAGIC_FORCE }</td>
                                        </tr>
                                        <tr>
                                            <th>최대 근력</th>
                                            <td>{props.horsData.MAX_FORCE}</td>
                                        </tr>
                                        <tr>
                                            <th className="horseBurf">●특수버프</th>
                                            <td>
                                                {burfHtml?.Burf === null        || burfHtml?.Burf       === undefined?  '정보없음' : burfHtml.Burf()      }
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className="horsePassive">◆패시브</th>
                                            <td>
                                                {passiveHtml?.Passive === null  || passiveHtml?.Passive === undefined?  '정보없음' : passiveHtml.Passive() }
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className="horseSkill ">■특수스킬</th>
                                            <td>
                                                {skillHtml?.Skill     === null  || skillHtml?.Skill     === undefined?  '정보없음' : skillHtml.Skill()    }
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <ReViewCompo userId={userId} objectId={props.horsData.HORSE_ID} objectType={'horse'}></ReViewCompo>
                            <div className="horseRevie_buttonset">
                                <button data-dismiss="modal" onClick={() => {
                                    props.setModalIsOpen({openBoolean : false, horseData : {}})
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
