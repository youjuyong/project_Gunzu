import react from "react";
import { Link, useLocation       } from "react-router-dom";
import { headerNavInfo           } from "../utils/ContextList";
import { loginHeaderNav          } from "../utils/ContextList";
import { useEffect               } from "react";
import { axiosCall, errorHandler } from "../utils/common/common";
import { API_IP_INFO         } from "../utils/apiUrl";


const Header = () => {
    const { pathname, state} = useLocation();
    const id = localStorage.getItem("id");

    useEffect(() => {
        const mainMenu = document.querySelector('.header__inner__section'),
              subMenu  = document.querySelector('.sub-menu-wrap');

        // 헤더 hover 시
        mainMenu && mainMenu.addEventListener('mouseover', () => {
                subMenu && subMenu.classList.add('sub-menu-hover');
        });

        // 헤더 hover 풀시
        mainMenu && mainMenu.addEventListener('mouseleave', () => {
            setTimeout(() => {
                subMenu && subMenu.classList.remove('sub-menu-hover');
            });
        });
      
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
                                ( state?.loginSuccss || id !== null ) ?  <li key={'header42'} id="loginInfoAtag" onClick={peronInfoClickHandler}><a>{loginHeaderNav[1].title}</a></li> :  
                                                                         <li key={'header32'}><Link to={ loginHeaderNav[0].subUrl } state={{ url : loginHeaderNav[0].url, menuName : loginHeaderNav[0].menuName, mainMenuName : loginHeaderNav[0].subTitle}} className="tab snans">{ loginHeaderNav[0].title }</Link></li>
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
                                                   const { subTitle, subUrl, url, menuName } = subInfo;
                                                   return ( 
                                                            <li key= {'sub' + subIndex }><Link to={ subUrl } state={{ url : url, menuName : menuName, mainMenuName : subTitle}} className="tab subheader snans">{ subTitle }</Link></li> 
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
                </div>
            </header>
        </>
    );
};

export default Header;