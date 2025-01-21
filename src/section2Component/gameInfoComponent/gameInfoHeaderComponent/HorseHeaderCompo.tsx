import { Link, useLocation    } from "react-router-dom";
import { horseHousePageheader } from "../../../utils/ContextList";
import { useEffect } from "react";


interface type {
    url   : string,
    title : string
}

export const HorseHouseHeaderCompo = () => {
    
    const location  = useLocation();
    const { state } = location;

    useEffect(() => {
    },[location]);

    function gameInfoHeaderHandle ( e : any ) {
        
        const { parentElement } = e?.target?.parentElement;
    } 

    return (
        <>
            <div className='gameInfoFirstDiv'>
                { 
                    horseHousePageheader.map(( headerInfo : type, index : number ) => {
                        return (
                            <div key={ 'horseDiv' + index } >  
                                <Link key={ 'horseLink' + index } to={ headerInfo.url } className= "gameInfoButton nanum" state={{ url : headerInfo.url }} onClick={ gameInfoHeaderHandle }> 
                                    <span key={ 'gaim' + index } className="text">{ headerInfo.title }</span>
                                    <span key={ 'gaime' + index } className="masker" style={{ height : state?.url === headerInfo?.url ? '100%' : '' }}>
                                        <span key={ 'gamid' + index }>{ headerInfo.title }</span>
                                    </span> 
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default HorseHouseHeaderCompo;