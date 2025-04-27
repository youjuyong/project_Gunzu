import { Link } from "react-router-dom";

const LocationCompo = ( props : any ) => {

    return (
        <>
            <div className="location pretend">
                    <ul>
                        <li>
                            <Link to="/">
                                <img src={require("../assets/image/home.png") } alt="홈" title="홈 바로가기"></img>
                            </Link>
                        </li>
                        <li>{props?.mainMenuName}</li>
                        <li>{props?.submenu}</li>
                    </ul>
            </div>
        </>
    )
}

export default LocationCompo;