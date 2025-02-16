import { useRef, useEffect } from "react";

function UseEnterBtnClick () {
    const buttonElement = useRef<HTMLButtonElement>(null);
   
    useEffect(() => {
        const handleKeyDown = (e : any) => {
            if(e.key === 'Enter') {
                buttonElement.current && buttonElement.current.click();
            }
        }
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    },[]);

    return buttonElement;
}

export default UseEnterBtnClick;