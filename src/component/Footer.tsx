
import { FotterButton       } from "../utils/commonStyles";

const Footer = () => {
    return (
        <footer id="footer" className="pretend">
            {<img src={require("../assets/image/city_mark.png")} className="city_mark" alt="마을 마크" title ="마을 마크"></img> }
            <div style={{ marginBottom : '5px' }}>
                <FotterButton width={'80px'} className="pretend"><a href="https://open.kakao.com/o/sM1uYllh"><img src={require("../assets/image/kakao.png")} ></img>오픈카톡</a></FotterButton>
                <FotterButton width={'80px'} className="pretend"><a href="https://github.com/youjuyong/project_Gunzu"><img src={require("../assets/image/git.png")} style={{ paddingRight: '3px' }}></img>Github</a></FotterButton>
            </div>
            <address >군주온라인 세종 의정부마을.<span> 관련문의 행보관이다텨 </span></address>
            COPYRIGHT © GUNZU ONLINE SEJONG Uijeongbu CITY. ALL RIGHTS RESERVED.
        </footer>
    )
}

export default Footer;