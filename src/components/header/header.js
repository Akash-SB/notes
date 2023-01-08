import React from 'react'
import logo from '../../assets/images/post-it.png'
import { RiRefreshFill } from "react-icons/ri";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";

function Header() {
  return (
    <header>
        <div className="logo">
            <a href="#">
                <img src={logo} alt="Logo" />
            </a>
        </div>
        <div className="search-bar">
            <input type="search" name="search" id="search" />
        </div>
        <div className="other-menu">
            <ul>
                <li>
                    <a href="#">
                        <RiRefreshFill />                        
                    </a>               
                </li>
                <li>
                <a href="#">
                        <BsFillGrid1X2Fill />                        
                    </a>
                </li>
                <li>
                    <a href="#">
                        <IoSettings />                        
                    </a> 
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Header