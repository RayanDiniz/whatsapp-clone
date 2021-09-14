
import { MdChat } from "react-icons/md";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FaCircleNotch } from "react-icons/fa";
import user from "../assets/user.png";
import "./BarraUser.css";
const BarraUser = () => {
    return (
        <header className="barra-do-usuario">
            <div className="perfil-img">
                <div className="perfil-img-margin">
                   
                    <img src={user} width="40px"></img>
                </div>
            </div>
            <div className="butons-icons">
                <FaCircleNotch className="icon"/>
                <MdChat className="icon"/>
                <BiDotsVerticalRounded className="icon"/>
            </div>
            
        </header>
    )
}
export default BarraUser;