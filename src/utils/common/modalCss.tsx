import styled, { keyframes } from 'styled-components';

// 회원가입 모달
export const loginMemberShipModalCss: ReactModal.Styles = {
    overlay: {
        width: "100%", 
        zIndex: "10",
        top: "0",
        left: "0",
    },
    content: {
        width: "500px",
        height: "584px",
        zIndex: "150",
        position: "absolute",
        top: "55%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        borderRadius: "10px",
        boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
        justifyContent: "center",
        overflow: "auto",
        padding: "0px",
        border: ""
    },
};

// 회원정보 수정 모달
export const loginMemberShipModifyModalCss: ReactModal.Styles = {
    overlay: {
        width: "100%",
        zIndex: "99999",
        background: "",
        top: "0",
        left: "0",
    },
    content: {
        opacity : 100,
        width: "500px",
        height: "584px",
        zIndex: "999990",
        position: "absolute",
        top: "55%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        borderRadius: "10px",
        boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
        justifyContent: "center",
        overflow: "auto",
        padding: "0px",
        border: "",
    },
};

// 탈것 리뷰 평점 모달
export const horseScoreReViewModal: ReactModal.Styles = {
    overlay: {
        width: "100%",
        zIndex: "10",
        top: "0",
        left: "0",
        background: "",
    },
    content: {
        width: "1400px",
        height: "800px",
        zIndex: "150",
        position: "absolute",
        top: "500px",
        left: "50%",
        transform: "translate(-50%, -50%)",
        borderRadius: "10px",
        boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
        justifyContent: "center",
        overflow: "auto",
        padding: "0px",
        border: ""
    },
};

// 소환영웅 리뷰 평점 모달
export const heroScoreReViewModal: ReactModal.Styles = {
    overlay: {
        width: "100%",
        zIndex: "10",
        top: "0",
        left: "0",
        background: "",
    },
    content: {
        width: "1400px",
        height: "800px",
        zIndex: "150",
        position: "absolute",
        top: "500px",
        left: "50%",
        transform: "translate(-50%, -50%)",
        borderRadius: "10px",
        boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
        justifyContent: "center",
        overflow: "auto",
        padding: "0px",
        border: ""
    },
};

// 장비 대여 모달
export const equipmentBorrowModal: ReactModal.Styles = {
    overlay: {
        width: "100%",
        zIndex: "99999999999999999",
        top: "0",
        left: "0"
    },
    content: {
        width: "1400px",
        height: "800px",
        zIndex: "150",
        position: "absolute",
        top: "500px",
        left: "50%",
        transform: "translate(-50%, -50%)",
        borderRadius: "10px",
        boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
        justifyContent: "center",
        overflow: "auto",
        padding: "0px",
        border: ""
    },
};

interface flowmoDelContentType {
    $open_value: string
}
export const FlowModalContent = styled.div<flowmoDelContentType>`
        position: relative;
        -webkit-background-clip: padding-box;
        background-clip: padding-box;
        border: 1px solid rgba(29,29,32,0.9);
        border-radius: 6px;
        outline: 0;
        -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
        overflow: hidden;
        height: 100%;
        animation :  ${(prop) => prop.$open_value === 'true' ? fadeIn : fadeOut}  0.2s ease-in;
        transition: visibility 0.2s ease-out;
`

interface moDelContentType {
    $modalstate: string
}
export const ModalContent = styled.div<moDelContentType>`
        position: relative;
        -webkit-background-clip: padding-box;
        background-clip: padding-box;
        border: 1px solid rgba(29,29,32,0.9);
        border-radius: 6px;
        outline: 0;
        -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
        overflow: hidden;
        height: 100%;
        animation :  ${prop => prop.$modalstate === 'true' ? fadeIn : fadeOut}  0.2s ease-in;
        transition: visibility 0.2s ease-out;
`
interface flowModalButtonType {
    height : string,
    width  : string,
    bgcolor  : string
}
export const FlowModalButtonStyle = styled.button<flowModalButtonType>`
     border-radius : 10px;
             width : ${(prop) => prop.width};
            height : ${(prop) => prop.height};
        background : ${(prop) => prop.bgcolor};
       font-weight : 600;
       font-family : 'Pretendard-Regular';
         font-size : 18px;

         &:hover {
            background : var(--green500);
         }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;



