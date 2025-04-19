import { loginMemberShipModalCss } from "../../../utils/common/modalCss";
import Modal from "react-modal";
import React, {useCallback, useEffect, useRef, useState} from "react";
import { useNavigate } from "react-router-dom";
import UseEnterBtnClick from "../../../utils/common/useEnterBtnClick";
import { InputTagIdValidate } from "../../../utils/common/dataValidateCheck";
import { AxiosCall, errorHandler, Token  } from "../../../utils/common/common";
import { API_IP_INFO        } from "../../../utils/apiUrl";

interface memberShipType {
    modalBoolean : boolean,
    setModalIsOpen : () => void
}

interface basicObjectType {
    USER_ID        : string | undefined | null,
    USER_PW        : string | undefined ,
    USER_NAME      : string | undefined,
    CITY_USER_NAME : string
}



const LoginMemberShipMd = ( props : any ) => {
    const navigate = useNavigate();
    const buttonElement = UseEnterBtnClick();
    const [cityPerson,   setCityPerson] = useState<any>({yesCheck : false, noCheck : true});
    const [inputValue,   setInputValue] = useState<basicObjectType>({USER_ID : '', USER_PW : '', USER_NAME : '', CITY_USER_NAME : ''});
    const [middleCheck, setMiddleCheck] = useState(false);
    const token = Token();

    // 저장 버튼 클릭시
    function saveBitInfo() {
        
        if ( !middleCheck ) {
            alert("ID 중복체크를 해주세요.");
            return;
        } else if ( !inputValue.USER_PW ) {
            alert("비밀번호를 입력해 주세요.");
            return;
        }  else if ( !InputTagIdValidate(inputValue.USER_PW) ) {
            alert("비밀번호는 영숫자 조합, 4~16자리를 입력해주세요."); 
            return;
        }  else if ( !inputValue.USER_NAME ) {
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
            userId   : inputValue.USER_ID,
            userName : inputValue.USER_NAME,
            userPwd  : inputValue.USER_PW,
            cityName : inputValue.CITY_USER_NAME,
            cityYn   : cityPerson.noCheck === true ? 'N' : 'Y'
        }
        AxiosCall("put", API_IP_INFO + '/user/new-info', param, (data) => {
            
            if ( data === 1 ) {
                alert("회원가입 완료!!");
                props.setModalIsOpen(false);
            }
          
         }, (e) => {
                         errorHandler(e.response);
         }, token);
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
        if ( name === 'USER_ID' ) { setMiddleCheck(false); };
    }

    function checkUserId () {
      
        if ( !inputValue.USER_ID ) 
        {
            alert("ID를 입력해주세요.");
            return;
        } 
        else if ( !InputTagIdValidate(inputValue.USER_ID)  ) 
        {
            alert("ID는 영숫자 조합, 4~16자리를 입력해주세요."); 
            return;
        }
     
        AxiosCall("get", API_IP_INFO + '/user/middle-check', {userId : inputValue.USER_ID}, (data) => {
            if ( data.length > 0 ) {
                alert("이미 존재 하는 ID입니다.")
                return;
            } else {
                alert("사용 가능한 ID입니다.");
                setMiddleCheck(true);
            }
         }, (e) => {
                         errorHandler(e.response);
         }, token);

    }

    return ( 
        <div>
            <Modal
                isOpen={props.modalBoolean}
                style={loginMemberShipModalCss}
                onRequestClose={() => props.setModalIsOpen(false)}
                ariaHideApp={false}
                contentLabel="Pop up Message"
                shouldCloseOnOverlayClick={false}
            >
                 <div className="modal-dialog popup_bitplus" role="document">
                    <div className="modal-content">
                        {/* <!-- 해더 영역 --> */}
                        <div className="modal-header">
                            <h2>회원가입</h2>
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
                                            <td><input type="text" name="USER_ID" onChange={inputValChangeHandle} value={inputValue?.USER_ID ?? ''}/>
                                            <button  className="onajiIdCheck" onClick={checkUserId}>중복확인
                                            </button></td>
                                        </tr>
                                        <tr>
                                            <th className="com">비밀번호</th>
                                            <td><input type="password" name="USER_PW" onChange={inputValChangeHandle} value={inputValue?.USER_PW ?? ''}/></td>
                                        </tr>
                                        <tr>
                                            <th className="com">닉네임</th>
                                            <td><input type="text" name="USER_NAME" onChange={inputValChangeHandle} value={inputValue?.USER_NAME ?? ''}/></td>
                                        </tr>
                                        <tr>
                                            <th>의정부 주민 여부</th>
                                            <td className="checkPersonTd"><span className="checkPersonSpan1" >예</span><input id="alarmbox" className="checkPerson1" type="checkbox" name="yesCheck" checked={cityPerson?.yesCheck ?? false} onChange={changeCityPerson} readOnly/></td>
                                            <td className="checkPersonTd"><span className="checkPersonSpan2">아니요</span><input id="alarmbox" className="checkPerson2"  type="checkbox" name="noCheck" checked={cityPerson?.noCheck ?? false} onChange={changeCityPerson} readOnly/></td>
                                        </tr>
                                        <tr style={cityPerson.noCheck === true ? {display: 'none'} : {display: ''}}>
                                            <th className="com">주민명</th>
                                            <td><input id="alarmbox" type="text" name="CITY_USER_NAME" onChange={inputValChangeHandle} value={inputValue?.CITY_USER_NAME ?? ''}/></td>
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

export const LoginMemberShipModal = React.memo(LoginMemberShipMd);
