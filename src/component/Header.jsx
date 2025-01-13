import react         from "react";
import {Link}        from "react-router-dom";
import {headerNavInfo} from "../utils/ContextList";

const Header = () => {

            
    return (
         <>
            <header id="header" role="banner">
                <div className="header__inner__section">
                    <div className="header__logo">
                        <h1>
                            <a href="/">portfolio<em>vite</em></a>
                        </h1>
                    </div>
                    <nav className="header__nav" role="navigation" aria-label="메인 메뉴">
                        <ul>
                            {
                                headerNavInfo.map(( info, index ) => {
                                    const { url, title } = info;
                                    return (
                                        <li key={index}><Link to={url} className="tab gmarket">{title}</Link></li>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;