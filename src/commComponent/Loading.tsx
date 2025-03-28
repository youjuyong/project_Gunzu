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

export const MainLoading = () => {

    return (
        <>
        <div className='mainLoadingContent'>
            <div className='mainLoading'>Loading...</div>
            <div className="loader">
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
            </div>
        </div>
        </>
    )
}
