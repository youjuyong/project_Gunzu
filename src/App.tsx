import React from "react";
import { Suspense, lazy } from "react";
import { MainLoading    } from "./commComponent/Loading";

/*component*/
const Header = lazy(() => import("./component/Header"));
const Main   = lazy(() => import("./component/Main"));
const Footer = lazy(() => import("./component/Footer"));

function App() {
  return (
    <>
        <Suspense fallback={<MainLoading/>}>
            <Header/> 
                <Main/>
            <Footer/>
       </Suspense>
    </>
  );
};

export default App;
