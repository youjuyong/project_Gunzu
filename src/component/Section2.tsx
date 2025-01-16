
import { Route, Routes } from "react-router-dom";

import Pratice2 from "../views/Pratice2"; 
import Pratice3 from "../views/Pratice3"; 
import Pratice4 from "../views/Pratice4"; 
import Pratice5 from "../views/Pratice5";

const Section2 = () => {
 
    return (
            <Routes>
                    <Route path="headerNavGameInfo" element={<Pratice2/>}/>
                    <Route path="headerNavEvent"    element={<Pratice3/>}/>
                    <Route path="headerNavBoard"    element={<Pratice4/>}/>
                    <Route path="Pratice5"          element={<Pratice5/>}/>
            </Routes>
    );
}

export default Section2;