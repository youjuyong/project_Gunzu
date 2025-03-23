import { useState, useEffect } from "react";
import { REC20_INFO, REC21_INFO, REC25_INFO, REC26_INFO, REC29_INFO, REC30_INFO, REC33_INFO, REC34_INFO, REC35_INFO, REC38_INFO, REC39_INFO } from "./heroContextList";
/* 소환영웅 추천 */
const RecallHeroWordInfoCompo = () => {

    const [viewPage, setViewPage] = useState('sword');

    const ButtonClickHandler = ( e : React.MouseEvent<HTMLButtonElement>  ) => {
       const { name } : any = e.target;
       setViewPage(name);
    };

    return (
        <> 
                <div className="content_warp ">
                    <div className="weapon_Serize">
                        <ul>
                            <li className={ viewPage === 'sword' ? 'on' : ''}>
                                <button type="button" className='pretend'  name='sword' onClick={ButtonClickHandler}>검(평타)</button>
                            </li>
                            <li className={ viewPage === 'spear' ? 'on' : ''}>
                                <button type="button" className='pretend' name='spear' onClick={ButtonClickHandler}>창</button>
                            </li>
                            <li className={ viewPage === 'ex' ? 'on' : ''}>
                                <button type="button" className='pretend' name='ex' onClick={ButtonClickHandler}>도끼</button>
                            </li>
                            <li className={ viewPage === 'bow' ? 'on' : ''}>
                                <button type="button" className='pretend' name='bow' onClick={ButtonClickHandler}>활</button>
                            </li>
                            <li className={ viewPage === 'gun' ? 'on' : ''}>
                                <button type="button" className='pretend' name='gun' onClick={ButtonClickHandler}>총</button>
                            </li>
                            <li className={ viewPage === 'magic' ? 'on' : ''}>
                                <button type="button" className='pretend' name='magic' onClick={ButtonClickHandler}>검(마법)/지팡이</button>
                            </li>
                        </ul>
                    </div>
                    {
                        viewPage === 'sword' ? 
                            <div className="content">
                                <ul>
                                    {/* 언년이 */}
                                    <REC20_INFO></REC20_INFO> 
                                    {/* 대길이 */}
                                    <REC21_INFO></REC21_INFO>
                                    {/* 미실이 */}
                                    <REC25_INFO></REC25_INFO>
                                    {/* 명량이순신 */}
                                    <REC26_INFO></REC26_INFO>
                                    {/* 시리 */}
                                    <REC30_INFO></REC30_INFO>
                                    {/* 유복이 */}
                                    <REC33_INFO></REC33_INFO>
                                     {/* 사방청룡 */}
                                    <REC38_INFO></REC38_INFO>
                                </ul>
                            </div>
                        : viewPage === 'spear' ?
                         <div className="content">
                                <ul>
                                    {/* 언년이 */}
                                    <REC20_INFO></REC20_INFO> 
                                    {/* 대길이 */}
                                    <REC21_INFO></REC21_INFO>
                                    {/* 미실이 */}
                                    <REC25_INFO></REC25_INFO>
                                    {/* 명량이순신 */}
                                    <REC26_INFO></REC26_INFO>
                                    {/* 시리 */}
                                    <REC30_INFO></REC30_INFO>
                                    {/* 유복이 */}
                                    <REC33_INFO></REC33_INFO>
                                     {/* 사방청룡 */}
                                    <REC38_INFO></REC38_INFO>
                                </ul>
                        </div>
                        : viewPage === 'ex' ?
                        <div className="content">
                                <ul>
                                    {/* 언년이 */}
                                    <REC20_INFO></REC20_INFO> 
                                    {/* 대길이 */}
                                    <REC21_INFO></REC21_INFO>
                                    {/* 미실이 */}
                                    <REC25_INFO></REC25_INFO>
                                    {/* 명량이순신 */}
                                    <REC26_INFO></REC26_INFO>
                                    {/* 시리 */}
                                    <REC30_INFO></REC30_INFO>
                                    {/* 유복이 */}
                                    <REC33_INFO></REC33_INFO>
                                    {/* 충의호권호수 */}
                                    <REC35_INFO></REC35_INFO>
                                     {/* 사방청룡 */}
                                    <REC38_INFO></REC38_INFO>
                                </ul>
                        </div>
                         : viewPage === 'bow' ? 
                         <div className="content">
                            <ul>
                                {/* 언년이 */}
                                <REC20_INFO></REC20_INFO> 
                                {/* 대길이 */}
                                <REC21_INFO></REC21_INFO>
                                {/* 미실이 */}
                                <REC25_INFO></REC25_INFO>
                                {/* 명량이순신 */}
                                <REC26_INFO></REC26_INFO>
                                {/* 시리 */}
                                <REC30_INFO></REC30_INFO>
                                {/* 유복이 */}
                                <REC33_INFO></REC33_INFO>
                                {/* 사방청룡 */}
                                <REC38_INFO></REC38_INFO>
                            </ul>
                         </div>
                     : viewPage === 'gun' ? 
                     <div className="content">
                        <ul>
                            {/* 언년이 */}
                            <REC20_INFO></REC20_INFO> 
                            {/* 대길이 */}
                            <REC21_INFO></REC21_INFO>
                            {/* 미실이 */}
                            <REC25_INFO></REC25_INFO>
                            {/* 명량이순신 */}
                            <REC26_INFO></REC26_INFO>
                            {/* 시리 */}
                            <REC30_INFO></REC30_INFO>
                            {/* 유복이 */}
                            <REC33_INFO></REC33_INFO>
                            {/* 사방청룡 */}
                            <REC38_INFO></REC38_INFO>
                        </ul>
                     </div>
                     :
                     <div className="content">
                     <ul>
                         {/* 오례 */}
                         <REC29_INFO></REC29_INFO> 
                         {/* 설옥 */}
                         <REC34_INFO></REC34_INFO> 
                         {/* 금선 */}
                         <REC39_INFO></REC39_INFO> 
                     </ul>
                  </div>
                    }
                </div>
        </>
    )
}

export default RecallHeroWordInfoCompo;