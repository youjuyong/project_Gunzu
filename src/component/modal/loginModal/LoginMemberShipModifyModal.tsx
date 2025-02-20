import { loginMemberShipModifyModalCss } from "../../../utils/common/modalCss";
import Modal from "react-modal";
import React, { useEffect, useState} from "react";
import { useNavigate        } from "react-router-dom";
import UseEnterBtnClick       from "../../../utils/common/useEnterBtnClick";
import { axiosCall          } from "../../../utils/common/common";
import { API_IP_INFO        } from "../../../utils/apiUrl";

interface memberShipType {
    modalBoolean   : boolean,
    setModalIsOpen : (data:any) => void,
    id             : string | null,
    name           : string | null,
    cityYn         : string | null,
    cityUserName   : string | null
}
interface basicObjectType {
    USER_NAME      : string | undefined | null,
    CITY_USER_NAME : string
}

const LoginMemberShipModifyMd = ( props : memberShipType ) => {
    const movePage      = useNavigate();
    const buttonElement = UseEnterBtnClick();
    const [cityPerson, setCityPerson] = useState<any>({yesCheck : false, noCheck : true});
    const [inputValue, setInputValue] = useState<basicObjectType>({USER_NAME : '', CITY_USER_NAME : ''});

    // 저장 버튼 클릭시
    function saveBitInfo() {
        
        if ( !inputValue.USER_NAME ) {
            alert("닉네임을 입력해주세요."); 
            return;
        }  else if ( inputValue.USER_NAME.length > 15 ) {
            alert("닉네임은 15자리까지 입력가능합니다."); 
            return;
        }   else if ( cityPerson.yesCheck && !inputValue.CITY_USER_NAME ) {
            alert("주민명을 입력해주세요."); 
            return;
        }  else if ( cityPerson.yesCheck &&  inputValue.CITY_USER_NAME.length > 15 ) {
            alert("주민명은 15자리까지 입력가능합니다."); 
            return;
        } 

        const param = {
            userId   : props.id,
            userName : inputValue.USER_NAME,
            cityName : inputValue.CITY_USER_NAME,
            cityYn   : cityPerson.noCheck === true ? 'N' : 'Y'
        }
        if ( window.confirm("수정 하시겠습니까?"))  {
            axiosCall("patch", API_IP_INFO + '/user/modify-info', param, (data) => {
                    if ( data === 1 ) {
                        alert("수정 완료 되었습니다. 다시 로그인 해주세요.");
                        movePage("/");
                        localStorage.clear();
                        window.location.reload();
                    }
            });
        } else {
            return;
        }
        
    }

    // 의정부 주민 여부 체크박스
    function changeCityPerson ( e : any ) {
        const { name } = e.target;
        if      ( name === "yesCheck" ) { setCityPerson({yesCheck : true,  noCheck : false}) }
        else if ( name === "noCheck"  ) { setCityPerson({yesCheck : false, noCheck : true});  setInputValue({...inputValue, CITY_USER_NAME : ''}) }
    }

    // input 창 변경시
    function inputValChangeHandle(e: any) {
        const {name, value} = e.target;
        setInputValue({...inputValue, [name]: value});
    }

    useEffect(() => {
        setInputValue({...inputValue, USER_NAME : props?.name !== undefined ? props.name : '',  CITY_USER_NAME : props?.cityUserName ? props.cityUserName : ''})
        setCityPerson({...cityPerson, yesCheck : props.cityYn === 'Y' ? true : false, noCheck : props.cityYn === 'N' ? true : false});
    },[props.modalBoolean]);


    return ( 
        <div>
            <Modal
                isOpen={props.modalBoolean}
                style={loginMemberShipModifyModalCss}
                onRequestClose={() => props.setModalIsOpen(false)}
                ariaHideApp={false}
                contentLabel="Pop up Message"
                shouldCloseOnOverlayClick={false}
            >
                 <div className="modal-dialog popup_bitplus" role="document">
                    <div className="modal-content">
                        {/* <!-- 해더 영역 --> */}
                        <div className="modal-header">
                            <h2>회원 정보 수정</h2>
                            <button type="button" className="close" data-dismiss="modal" onClick={() => {
                                props.setModalIsOpen(false)
                            }}>닫기
                            </button>
                        </div>
                        {/* <!-- ./해더 영역 --> */}

                        {/* <!-- 컨텐츠 영역 --> */}
                        <div className="popcontent">
                            <h2>기본사항</h2>
                            <div className="poplinepaddingbox">
                                <table className="poptable poptable_bitplus">
                                    <thead></thead>
                                    <tbody>
                                        <tr>
                                            <th className="com">아이디</th>
                                            <td><input type="text" name="USER_ID" value={props?.id ?? ''} disabled/></td>
                                        </tr>
                                        <tr>
                                            <th className="com">닉네임</th>
                                            <td><input type="text" name="USER_NAME" placeholder="닉네임을 입력해주세요." onChange={inputValChangeHandle} value={inputValue?.USER_NAME ?? ''}/></td>
                                        </tr>
                                        <tr>
                                            <th>의정부 주민 여부</th>
                                            <td className="checkPersonTd"><span className="checkPersonSpan1" >예</span><input id="alarmbox" className="checkPerson1" type="checkbox" name="yesCheck" checked={cityPerson?.yesCheck ?? false} onChange={changeCityPerson} readOnly/></td>
                                            <td className="checkPersonTd"><span className="checkPersonSpan2">아니요</span><input id="alarmbox" className="checkPerson2"  type="checkbox" name="noCheck" checked={cityPerson?.noCheck ?? false} onChange={changeCityPerson} readOnly/></td>
                                        </tr>
                                        <tr style={cityPerson.noCheck === true ? {display: 'none'} : {display: ''}}>
                                            <th className="com">주민명</th>
                                            <td><input id="alarmbox" type="text" placeholder="주민명을 입력해주세요." name="CITY_USER_NAME" onChange={inputValChangeHandle} value={inputValue?.CITY_USER_NAME ?? ''}/></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="buttonset">
                                <button ref={buttonElement} onClick={saveBitInfo}>저장
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

const LoginMemberShipModifyModal = React.memo(LoginMemberShipModifyMd);
export default LoginMemberShipModifyModal;