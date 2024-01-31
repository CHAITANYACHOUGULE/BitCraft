import { Link } from "react-router-dom";
import LogoImg from "../../Assets/logo.png";
import './Header.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { useRef } from "react";

function Header(){

    const responsiveDiv = useRef();

    function openResponsiveDiv(){
        responsiveDiv.current.style.display = "grid";
    }

    function closeResponsiveDiv(){
        responsiveDiv.current.style.display = "none";
    }

    return(
        <div className="header-main-div">
            <Link to='/'>
                <img src={LogoImg} alt="" className="logo-img"/>
            </Link>
            <div className="header-nav-div">
                <ul>
                    <li>
                        <Link className="nav-links">Explore</Link>
                        <Link className="nav-links">Trending</Link>
                        <Link className="nav-btn">Login</Link>
                        <Link className="nav-btn">Sign Up</Link>
                    </li>
                </ul>
            </div>
            <GiHamburgerMenu className="hamburger" onClick={openResponsiveDiv}/>
            <div ref={responsiveDiv} className="nav-responsive-div">
                <IoCloseSharp onClick={closeResponsiveDiv} className="close-btn"/>
                <ul>
                    <li>
                        <div className="nav-div1">
                            <Link className="nav-links responsive-links">Explore</Link>
                            <Link className="nav-links responsive-links" >Trending</Link>
                        </div>
                        <div className="nav-btn-div">
                            <Link className="nav-btn">Login</Link>
                        </div>
                        <div className="nav-btn-div">
                            <Link className="nav-btn">Sign Up</Link>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;