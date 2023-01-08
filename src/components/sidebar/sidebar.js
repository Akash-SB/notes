import React from 'react'
import { BsLightbulbFill } from "react-icons/bs";
import { FaBell } from "react-icons/fa";
import { BiCategory, BiArchiveIn, BiTrashAlt } from "react-icons/bi";

function Sidebar() {
  return (
    <div>
        <ul>
            <li>
                <a href="#">
                    <BsLightbulbFill />
                </a>
            </li>
            <li>
                <a href="#">
                    <FaBell />
                </a>
            </li>
            <li>
                <a href="#">
                    <BiCategory />
                </a>
            </li>   
            <li>
                <a href="#">
                    <BiArchiveIn />
                </a>
            </li>     
            <li>
                <a href="#">
                    <BiTrashAlt />
                </a>
            </li> 
        </ul>
    </div>
  )
}

export default Sidebar