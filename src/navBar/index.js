import React from 'react';
import { Link } from "react-router-dom";
import { useToggle } from '../hook/toogle'


export const NavBar =()=> {
    const[remove, setRemove]=useToggle(false)
       
    return <>
    
    <nav

    className="navbar navbar-light bg-light">
       
        <div className="container">
        <span className="navbar-brand mains logo"><span className="blue">Rezki</span> Wissem</span>
        <div className="ms-auto ">
                <ul className={remove?"nav me-5 nav-force":"nav me-5"}>
                    <li className="nav-item">
                        <Link to="/" className="nav-link mainsx "  >Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/skill" className="nav-link mainsx "  >Skills</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/work" className="nav-link mainsx " >Projets</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link mainsx " >Contact</Link>
                    </li>
                </ul>
                <div className="burger" onClick={setRemove}>
                    <div className="line1"></div>
                    <div  className="line2"></div>
                    <div  className="line3"></div>
                </div>
        </div>
      </div>
    </nav>
    </>
}
