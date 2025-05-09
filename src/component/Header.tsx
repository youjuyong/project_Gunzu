import { Link, useLocation         } from "react-router-dom";
import { headerNavInfo             } from "../utils/ContextList";
import { loginHeaderNav            } from "../utils/ContextList";
import { useLayoutEffect, useState } from "react";
import { useSelector               } from "react-redux";
import { rootState                 } from "../utils/reducer/index";

const Header = () => {
    const { state  } = useLocation();
    const [ mobiLoogin, setMobiLogin ] = useState(false);
    const { userId } = useSelector((state: rootState)=>state.userReducer);
    const [ navOnoff, setNavOnOff ] = useState(false);

    useLayoutEffect(() => {

        const mainMenu = document.querySelector('.header__inner__section'),
              subMenu  = document.querySelector('.sub-menu-wrap'),
              btnMenu  = document.querySelector('.menubtn');


        function addClass () {
            subMenu && subMenu?.classList.add('sub-menu-hover');
        }

        function removeClass () {
            setTimeout(() => {
                subMenu && subMenu?.classList.remove('sub-menu-hover');
            })
        }

        mainMenu && mainMenu.addEventListener('mouseover', addClass);
    
        // 헤더 hover 풀시
        mainMenu && mainMenu.addEventListener('mouseleave', removeClass);

        window.addEventListener("resize", function () { 

            if ( window.innerWidth > 1430 ) 
            {
                setNavOnOff(false);
                setMobiLogin(false);
                // 헤더 hover 시
                mainMenu && mainMenu.addEventListener('mouseover', addClass);
    
                // 헤더 hover 풀시
                mainMenu && mainMenu.addEventListener('mouseleave', removeClass);

            } 
            else 
            {
                setMobiLogin(true);
                setNavOnOff(false);
                mainMenu && mainMenu.removeEventListener('mouseover',addClass);
                mainMenu && mainMenu.removeEventListener('mouseleave', removeClass);
            }
        })

        if ( window.innerWidth > 1430 ) {
            setMobiLogin(false);
        } else {
            setMobiLogin(true);
        }

        return () => {
             mainMenu && mainMenu.removeEventListener('mouseover',addClass);
             mainMenu && mainMenu.removeEventListener('mouseleave', removeClass);
             btnMenu && btnMenu.removeEventListener('mouseleave', removeClass);
        }
    },[]);

    function peronInfoClickHandler () {
        let bgDiv     : any = document.querySelector("#loginDivBg");
        let layOutDiv : any = document.querySelector("#loginlayOut");
        if ( bgDiv?.style !== null ) 
        {
            bgDiv.style.visibility = "visible";
        }
        if ( layOutDiv?.style !== null ) 
        {
            layOutDiv.style.visibility = "visible";
            layOutDiv.style.opacity = 1;
        }
    }

    const menuClick = ( e : React.MouseEvent<HTMLButtonElement>  ) => {
        setNavOnOff(!navOnoff);
    }
    
    return (
         <>
            <header id="header" role="banner" className='headerMain'>
                <div className="header__inner__section">
                    <div className="header__logo">
                        <h1>
                        <img  src={require("../assets/image/gurideak.png")} alt="구리댁"></img>
                            <a href="/">GURIDAEK.COM<em>구리댁닷컴</em></a>
                        </h1>
                    </div>
                    {
                        ( mobiLoogin && ( state?.loginSuccss || userId !== null )) ? <li key={'header42'} id="loginInfoAtag" className='mobil_login' onClick={peronInfoClickHandler}><a>{loginHeaderNav[1].title}</a></li> 
                        : ( mobiLoogin && ( userId === null || userId === undefined)) ? <li key={'header32'} className='mobil_login'><Link to={ loginHeaderNav[0].subUrl } state={{ url : loginHeaderNav[0].url, menuName : loginHeaderNav[0].menuName, mainMenuName : loginHeaderNav[0].subTitle} } className="tab snans">{ loginHeaderNav[0].title }</Link></li>
                        : ''
                    }
                    <button className ={ "menubtn " +  (navOnoff === true ? 'off' : '')}  onClick={menuClick} title="메뉴">메뉴</button>
                    <nav className="header__nav" role="navigation" aria-label="메인 메뉴">
                        <ul className="header__nav_menu">
                            {
                                headerNavInfo.map(( info : any, index : number ) => {
                                    const { url, title, menuName, subTitle, subUrl } = info;
                                    return (
                                        <li key={ index }><Link to={ subUrl } state={{ url : url, menuName : menuName, mainMenuName : subTitle}} className="tab snans">{ title }</Link></li>
                                    )
                                })
                            }
                            {
                                ( state?.loginSuccss || userId !== null ) ?  <li key={'header42'} id="loginInfoAtag" onClick={peronInfoClickHandler}><a>{loginHeaderNav[1].title}</a></li> :  
                                                                         <li key={'header32'}><Link to={ loginHeaderNav[0].subUrl } state={{ url : loginHeaderNav[0].url, menuName : loginHeaderNav[0].menuName, mainMenuName : loginHeaderNav[0].subTitle} } className="tab snans">{ loginHeaderNav[0].title }</Link></li>
                            }
                        </ul>
                    </nav>
                    <div className="sub-menu-wrap">
                        <div className="sub-menu">
                            {
                                headerNavInfo.map(( info, index ) => {
                                    const { subMenu } = info;
                                    return (
                                      <div key= {'div' + index }>
                                          <ul key= {'ul' + index }>
                                             {
                                               subMenu && subMenu.map(( subInfo : any, subIndex : number ) => {
                                                   const { subTitle, subUrl, url, menuName, subClassCnt, title } = subInfo;
                                                   return ( 
                                                            title && <li key= {'sub' + subIndex }><Link to={ subUrl } state={{ url : url, menuName : menuName, mainMenuName : subTitle}} className={ subClassCnt === 3?  'tab subheader snans headerThClass' : 'tab subheader snans'} >{ title }</Link></li> 
                                                    )
                                                })
                                             }
                                          </ul>
                                      </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    {
                        navOnoff &&
                        <nav className="mobile_nav pretend" role="navigation" aria-label="모바일 메뉴 탭">
                            <ul>
                                {
                                     headerNavInfo.map(( info : any, index ) => {
                                        const { url, title, menuName, subTitle, subUrl, subMenu } = info;
                                        return (
                                                <li className="menu">
                                                        <Link to={ subUrl } state={{ url : url, menuName : menuName, mainMenuName : subTitle}} className="tab snans">{ title }</Link>
                                                        {
                                                            
                                                             ( subMenu !==undefined ) && subMenu?.length > 0 &&
                                                             <ul className="mobiMenu">
                                                             {
                                                                subMenu.map(( subInfo : any, subIndex : number ) => {
                                                                    const { subTitle, subUrl, url, menuName, subClassCnt, title } = subInfo;
                                                                    return (
                                                                               title && <li key= {'sub' + subIndex }><Link to={ subUrl } state={{ url : url, menuName : menuName, mainMenuName : subTitle}}  >{ title }</Link></li> 
                                                                    )
                                                                })
                                                             }
                                                            </ul> 
                                                        }
                                                </li>
                                        )
                                     })
                                }
                            </ul>
                        </nav>
                    }
                    
                </div>
            </header>
        </>
    );
};

export default Header;