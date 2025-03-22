import { heroScoreReViewModal       } from "../../../utils/common/modalCss";
import Modal from "react-modal";
import React from "react";
import { heroInfo                               } from "../../../section2Component/gameInfoComponent/gamInfoInnerComponent/recallHero/heroContextList";
import { ReViewCompo                                } from "../../../commComponent/ReViewCompo";
import { horsePassive1, horsePassive2, heroSkill } from "../../../section2Component/gameInfoComponent/gamInfoInnerComponent/recallHero/heroContextList";

interface heroListType {
    HERO_ID              : string, // 영웅 ID
    HERO_NAME            : string, // 영웅 이름
    HERO_NUM             : number, // 영웅 순번
    HERO_TYPE            : string, // 영웅타입
    HERO_VERSION_TYPE    : string, // 영웅 버전 타입
    HERO_WEAPON_TYPE_CODE: string, // 영웅 무기 타입 코드
    HERO_WEAPON_TYPE     : string, // 영웅 무기 타입
    HERO_BURF_TYPE       : string, // 영웅 버프 타입
    M_FORCE              : number, // 근력
    AGIL                 : number, // 순발력
    LIFE                 : number, // 생명력
    MAGIC_FORCE          : number, // 도력
    DEFAULT_LONG         : string, // 사거리
    DEFAULT_DAM          : string, // 기본 데미지
    DEFAULT_SHEILD       : string, // 기본 방어력
    AMULET               : string, // 부적 
    SELF_BURF            : string, // 자기 버프
    ELF_PREMIUM          : string, // 프리미엄 버프
    PLUS_STAT            : string, // 보너스 스탯
    SCORE                : number  // 리뷰 점수
}
interface heroReviewType {
    modalBoolean   : boolean,
    setModalIsOpen : (e : any) => void,
    heroData       : heroListType | any
}

const heroReviewMd = ( props : heroReviewType ) => {
    const imgUrl = heroInfo.filter((imgInfo : any) => imgInfo.heroId === props.heroData.HERO_ID).map((m : any) => m.imgUrl)[0];
    console.log(props);
    const userId = sessionStorage.getItem("id");
    const passiveHtml1 = horsePassive1.filter( (v : any)  => props.heroData.HERO_ID === v.heroId)?.[0];
    const passiveHtml2 = horsePassive2.filter( (v : any)  => props.heroData.HERO_ID === v.heroId)?.[0];
    const   skillHtml  = heroSkill?.filter((v : any) => props.heroData.HERO_ID === v.heroId)?.[0];

    return ( 
        <div>
            <Modal
                isOpen={props.modalBoolean}
                style={heroScoreReViewModal}
                onRequestClose={() => props.setModalIsOpen({openBoolean : false, heroData : {}})}
                ariaHideApp={false}
                contentLabel="Pop up Message"
                shouldCloseOnOverlayClick={false}
            >
                 <div className="modal-dialog popup_horseReview" role="document">
                    <div className="horse-modal-content">
                        {/* <!-- 해더 영역 --> */}
                        <div className="modal-header">
                            <h2>{props.heroData.HORSE_NAME} 상세정보</h2>
                            <button type="button" className="close" data-dismiss="modal" onClick={() => {
                                props.setModalIsOpen({openBoolean : false, heroData : {}})
                            }}>닫기
                            </button>
                        </div>
                        {/* <!-- ./해더 영역 --> */}

                        {/* <!-- 컨텐츠 영역 --> */}
                        <div className="horse_popcontent">
                            <div className="popchild heroReviewChild reviewImgDiv">
                                <img src={imgUrl}></img>
                            </div>
                            <div className="popchild heroReviewChild reviewDetailDiv">
                                <table>
                                    <thead></thead>
                                    <tbody>
                                        <tr>
                                            <th>영웅이름</th>
                                            <td>{props.heroData.HERO_NAME}</td>
                                        </tr>
                                        <tr>
                                            <th>착용무기</th>
                                            <td>{props.heroData.HERO_WEAPON_TYPE}</td>
                                        </tr>
                                        <tr>
                                            <th>사거리</th>
                                            <td>{props.heroData.DEFAULT_LONG}</td>
                                        </tr>
                                        <tr>
                                            <th>기본데미지</th>
                                            <td>{props.heroData.DEFAULT_DAM}</td>
                                        </tr>
                                        <tr>
                                            <th>기본방어력</th>
                                            <td>{props.heroData.DEFAULT_SHEILD}</td>
                                        </tr>
                                        <tr>
                                            <th>부적</th>
                                            <td>{props.heroData.AMULET}</td>
                                        </tr>
                                        <tr>
                                            <th>보너스 스탯</th>
                                            <td>{props.heroData.PLUS_STAT }</td>
                                        </tr>
                                        <tr>
                                            <th>자기버프/</th>
                                            <td>{props.heroData.SELF_BURF}</td>
                                        </tr>
                                        <tr>
                                            <th>프리미엄버프</th>
                                            <td>{props.heroData.ELF_PREMIUM}</td>
                                        </tr>
                                        <tr>
                                            <th className="horseBurf">◆ 패시브1</th>
                                            <td>
                                                {passiveHtml1?.Burf === null   || passiveHtml1?.Burf  === undefined?  '정보없음' : passiveHtml1.Burf()      }
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className="horsePassive">◆ 패시브2</th>
                                            <td>
                                                {passiveHtml2?.Skill === null  || passiveHtml2?.Skill === undefined?  '정보없음' : passiveHtml2.Skill() }
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className="horseSkill ">■ 마법</th>
                                            <td>
                                                {skillHtml?.Skill     === null  || skillHtml?.Skill   === undefined?  '정보없음' : skillHtml.Skill()    }
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <ReViewCompo userId={userId} objectId={props.heroData.HORSE_ID} objectType={'horse'}></ReViewCompo>
                            <div className="horseRevie_buttonset">
                                <button data-dismiss="modal" onClick={() => {
                                    props.setModalIsOpen({openBoolean : false, heroData : {}})
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

export const RecallHeroReviewModal = React.memo(heroReviewMd);
