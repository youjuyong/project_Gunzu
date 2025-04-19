import { loginMemberShipModifyModalCss } from "../../../utils/common/modalCss";
import Modal from "react-modal";
import React, { useEffect, useState} from "react";
import { useNavigate        } from "react-router-dom";
import { InputTagIdValidate } from "../../../utils/common/dataValidateCheck";
import { AxiosCall, errorHandler, Token } from "../../../utils/common/common";
import { API_IP_INFO        } from "../../../utils/apiUrl";
import UseEnterBtnClick       from "../../../utils/common/useEnterBtnClick";

interface memberShipType {
    modalBoolean   : boolean,
    setModalIsOpen : (data:any) => void,
    id             : string | null,
    name           : string | null,
    cityYn         : string | null,
    cityUserName   : string | null
}

interface basicObjectType {
    USER_PW        :  string,
    USER_PW_RE     : string
}

const LoginPassWordModifyMd = ( props : memberShipType ) => {
    const movePage      = useNavigate();
    const token = Token();
    const buttonElement = UseEnterBtnClick();
    const [inputValue,   setInputValue] = useState<basicObjectType>({USER_PW : '', USER_PW_RE:''});

    // 저장 버튼 클릭시
    function saveBitInfo() {
        if ( !inputValue.USER_PW ) {
            alert("비밀번호를 입력해 주세요.");
            return;
        }  else if (!inputValue.USER_PW_RE) {
            alert("비밀번호 확인을 입력해 주세요.");
            return;
        }  else if ( !InputTagIdValidate(inputValue.USER_PW) ) {
            alert("비밀번호는 영숫자 조합, 4~16자리를 입력해주세요."); 
            return;
        }  else if ( !InputTagIdValidate(inputValue.USER_PW_RE) ) {
            alert("비밀번호 확인은 영숫자 조합, 4~16자리를 입력해주세요."); 
            return;
        }  else if ( inputValue.USER_PW_RE !== inputValue.USER_PW ) {
            alert("비밀번호와 비밀번호확인이 다릅니다."); 
            return;
        }  
       

        const param = {
            userId    : props.id,
            userPwd   : inputValue.USER_PW,
        }
        
        if ( window.confirm("비밀번호를 수정 하시겠습니까?"))  {
            AxiosCall("patch", API_IP_INFO + '/user/pass-modify-info', param, (data) => {
                    if ( data === 1 ) {
                        alert("수정 완료 되었습니다. 다시 로그인 해주세요.");
                        movePage("/");
                        sessionStorage.clear();
                        window.location.reload();
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
    }

    useEffect(() => {
            setInputValue({USER_PW : '', USER_PW_RE:''})
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
                            <h2>패스워드 수정</h2>
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
                                            <th className="com">비밀번호</th>
                                            <td><input type="password" name="USER_PW" placeholder="비밀번호를 입력해주세요." onChange={inputValChangeHandle} value={inputValue?.USER_PW ?? ''}/></td>
                                        </tr>
                                        <tr>
                                            <th className="com">비밀번호 확인</th>
                                            <td><input type="password" name="USER_PW_RE" placeholder="비밀번호 확인을 입력해주세요." onChange={inputValChangeHandle} value={inputValue?.USER_PW_RE ?? ''}/></td>
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

const LoginPassWordModifyModal = React.memo(LoginPassWordModifyMd);
export default LoginPassWordModifyModal;