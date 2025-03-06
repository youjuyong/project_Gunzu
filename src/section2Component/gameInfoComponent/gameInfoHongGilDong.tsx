import { Routes, Route, Outlet } from "react-router-dom";

/* Inner Header  */
import HongGilDongHeaderCompo  from "../gameInfoComponent/gameInfoHeaderComponent/HongGilDongHeaderCompo";         // 홍길동

const gameInfoHongGilDong = () => {
    return (
        <>
                <header className="section2Header snans" role="section2-header">
                        <HongGilDongHeaderCompo/>
                </header>
                <div className="section2HighLight">
                        <Outlet/>
                </div>
        </>
    )
}


export default gameInfoHongGilDong;