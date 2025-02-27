import { Link, useLocation    } from "react-router-dom";
import { villageStaticsheader } from "../../../utils/ContextList";
import { useEffect } from "react";
interface type {
    url       : string,
    title     : string,
    imgUrl    : string  | any,
    className : string  | any,
    imgAlt    : string,
    mainMenu  : string
}

export const VillageStaticsCompo = () => {

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
                    villageStaticsheader && villageStaticsheader.map(( headerInfo : type, index : number ) => {
                        const { url, imgUrl, title, className, imgAlt, mainMenu } = headerInfo;
                        return (
                             <div key={ 'horseDiv' + index } >  
                                    <Link key={ 'horseLink' + index } to={ url } className= "gameInfoButton nanum" state={{ url : url, menuName : title, mainMenuName : mainMenu  }} onClick={ gameInfoHeaderHandle }> 
                                         <span key={ 'gaim' + index } className="text">{ imgUrl &&  <img  className={ className } src={ imgUrl } alt={ imgAlt }/> }{ title }</span>
                                          <span key={ 'gaime' + index } className="masker" style={{ height : state?.url === url ? '100%' : '' }}>
                                          <span key={ 'gamid' + index }>{ imgUrl &&  <img  className={ className } src={ imgUrl } alt={ imgAlt }/> }{ title }</span>
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

export default VillageStaticsCompo;