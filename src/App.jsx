import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

/*component*/
import Header  from "./component/Header";

/*view*/
import Pratice2 from "./views/Pratice2";
import Pratice3 from "./views/Pratice3";
import Pratice4 from "./views/Pratice4";
import Pratice5 from "./views/Pratice5";

function App() {
  return (
    <>
      
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="headerNavGameInfo" element={<Pratice2/>}/>
          <Route path="headerNavEvent" element={<Pratice3/>}/>
          <Route path="headerNavBoard" element={<Pratice4/>}/>
          <Route path="Pratice5" element={<Pratice5/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
