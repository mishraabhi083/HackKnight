import {FaHome,FaMeteor,FaUser,FaHeart} from 'react-icons/fa'
import {Link,Outlet,NavLink} from 'react-router-dom'
const NavBar=()=>{
    return <>
        <div className="container d-flex justify-content-center">
            <NavLink to="/" className="btn btn-light btn-pill m-4 p-2">
            <div className=""> <FaHome color="#dd6666"/> Home</div>
            </NavLink>
            <NavLink to="register" className="btn btn-light btn-pill m-4 p-2">
            <div className=" "> <FaMeteor color="#dd6666"/> Register</div>
            </NavLink>
            <NavLink to="participants" className="btn btn-light btn-pill m-4 p-2">
            <div className=" "> <FaUser color="#dd6666"/> Participants</div>
            </NavLink>
            <NavLink to="about" className="btn btn-light btn-pill m-4 p-2">
            <div className=" "> <FaHeart color="#dd6666"/> About</div>
            </NavLink>
        </div>
        <Outlet/>
    </>
}

export default NavBar