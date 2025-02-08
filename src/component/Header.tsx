import react from "react";
import { Link             } from "react-router-dom";
import { headerNavInfo    } from "../utils/ContextList";
import { useEffect        } from "react";


const Header = () => {

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