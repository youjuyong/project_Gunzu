import React from "react";
import { Suspense, lazy } from "react";
import { MainLoading    } from "./commComponent/Loading";

/*component*/
import Header   from "./component/Header";
import Footer   from "./component/Footer";
const Main = lazy(() => import("./component/Main"));

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
