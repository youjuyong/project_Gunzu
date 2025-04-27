import { loginMemberShipModalCss } from "../../../utils/common/modalCss";
import Modal from "react-modal";
import React, {useState} from "react";
import UseEnterBtnClick from "../../../utils/common/useEnterBtnClick";
import { InputTagIdValidate } from "../../../utils/common/dataValidateCheck";
import { AxiosCall, errorHandler, Token  } from "../../../utils/common/common";
import { API_IP_INFO        } from "../../../utils/apiUrl";

interface memberShipType {
    modalBoolean : boolean,
    setModalIsOpen : () => void
}

interface basicObjectType {
    USER_ID         : string | undefined | null,
    USER_PW         : string | undefined ,
    USER_PW_CONFIRM : string | undefined
}



const PassWordSeletMd = ( props : any ) => {
    const buttonElement = UseEnterBtnClick();
    const [inputValue,   setInputValue] = useState<basicObjectType>({USER_ID : '', USER_PW : '', USER_PW_CONFIRM : ''});
    const [middleCheck, setMiddleCheck] = useState(false);
    const token = Token();

    // 저장 버튼 클릭시
    function saveBitInfo() {
        
        if ( !middleCheck ) {
            alert("ID 확인 체크를 해주세요.");
            return;
        } else if ( !inputValue.USER_PW ) {
            alert("비밀번호를 입력해 주세요.");
            return;
        }  else if ( !InputTagIdValidate(inputValue.USER_PW) ) {
            alert("비밀번호는 영숫자 조합, 4~16자리를 입력해주세요."); 
            return;
        }  else if ( !inputValue.USER_PW_CONFIRM ) {
            alert("비밀번호 재확인을 입력해 주세요.");
            return;
        }  else if ( !InputTagIdValidate(inputValue.USER_PW_CONFIRM ) ) {
            alert("비밀번호 재확인은 영숫자 조합, 4~16자리를 입력해주세요."); 
            return;
        } else if ( inputValue.USER_PW_CONFIRM !== inputValue.USER_PW ) {
            alert("비밀번호와 비밀번호 재확인이 다릅니다."); 
            return;
        }

        const param = {
            userId    : inputValue.USER_ID,
            userPwd   : inputValue.USER_PW,
        }
        
        if ( window.confirm("비밀번호를 수정 하시겠습니까?"))  {
            AxiosCall("patch", API_IP_INFO + '/user/pass-modify-info', param, (data) => {
                    if ( data === 1 ) {
                        alert("수정 완료 되었습니다.");
                        props.setModalIsOpen(false);
                    }
            }, (e) => {
                            errorHandler(e.response);
            }, token);
        } else {
            return;
        }
                
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
     
        AxiosCall("get", API_IP_INFO + '/user/id-check', {userId : inputValue.USER_ID}, (data) => {
            if ( data?.id ) 
            {
                alert(`${data.username}님 확인 되었습니다. 변경 하실 비밀번호를 입력해주세요.`);
                setMiddleCheck(true);
                return;
            } 
            else
            {
                alert("존재 하지 않는 ID입니다.");
                setMiddleCheck(false);
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
                                            <button  className="onajiIdCheck" onClick={checkUserId}>ID 확인
                                            </button></td>
                                        </tr>
                                        <tr>
                                            <th className="com">변경 비밀번호</th>
                                            <td><input type="password" name="USER_PW" onChange={inputValChangeHandle} value={inputValue?.USER_PW ?? ''}/></td>
                                        </tr>
                                        <tr>
                                            <th className="com">비밀번호 재확인</th>
                                            <td><input type="password" name="USER_PW_CONFIRM" onChange={inputValChangeHandle} value={inputValue?.USER_PW_CONFIRM ?? ''}/></td>
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

export const PassWordSelModal = React.memo(PassWordSeletMd);
