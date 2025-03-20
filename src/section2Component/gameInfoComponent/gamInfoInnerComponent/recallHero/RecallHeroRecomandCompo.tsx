import { useState, useEffect } from "react";

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
                        </ul>
                    </div>
                    {
                        viewPage === 'sword' ? 
                            <div className="content">
                                <ul>
                                    <li>
                                        <div className="number_content pretend">대길이</div>
                                        <div className='recallImg'>
                                            <img src={require("../../../../assets/image/horseFolder/HOS10.gif")}></img>
                                        </div>
                                        <div className='recall_content_text'>
                                            <p className="pretend">추가 경험치 : 0%</p>
                                        </div>
                                        <div className='recall_content_exp'>
                                            <p className="pretend">추가 경험치 : 0%</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="number_content pretend">미실이</div>
                                    </li>
                                </ul>
                            </div>
                        : viewPage === 'spear' ?
                         <div className="content">
                                <ul>
                                    <li>
                                        <div className="number_content">미실이</div>
                                    </li>
                                    <li>
                                        <div className="number_content">미실이</div>
                                    </li>
                                </ul>
                        </div>
                        : viewPage === 'spear' ?
                        '' 
                        : 
                        ''
                    }
                </div>
        </>
    )
}

export default RecallHeroWordInfoCompo;