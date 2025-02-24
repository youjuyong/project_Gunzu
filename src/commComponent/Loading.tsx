import React from "react";
import {Background, Round} from "../utils/LoadingStyles";

export const Loading = () => {

    return (
        <Background>
             <Round>
            <img className="lodingImg" src={require("../../src/assets/image/loader.gif")} alt="로딩중"/>
            </Round>
        </Background>
    )
}