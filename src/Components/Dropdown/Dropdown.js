import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./Dropdown.css";

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click)
  }
  
  const menuItems = [
    {
      title: "fklsdjfklsdjfkljsdlfkjsdkfjskldjfslk",
      path: "/tank1",
      cName: "dropdown-link"
    },
    {
      title: "Tank 2",
      path: "/tank2",
      cName: "dropdown-link"
    },
    {
      title: "Tank 3",
      path: "/tank3",
      cName: "dropdown-link"
    }
  ]

  return(
    <>
      <ul  className="dropdown-menu">
        {menuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} to={item.path} onClick={() => setClick(false)}>
                {item.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Dropdown;