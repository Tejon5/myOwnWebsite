import React from "react";
import "./NavBar.css";

const Navbar = ({isScrolling}) =>{

    const toTheTop = () =>{
        window.scrollTo({top:0, left:0, behavior: "smooth"})
    }

    return (
        <nav className={`navbar ${isScrolling>20 ? "scrolling" : null}`}>
            <div className="logo" onClick={toTheTop}>Juan Villalba</div>
        </nav>
    )
}

export default Navbar;