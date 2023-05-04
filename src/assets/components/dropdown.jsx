import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './dropdown.css'
function Dropdown(props) {
  const [isOpen, setIsOpen] = useState(true);




  return (
    <div className="dropdown" onMouseEnter={()=>setIsOpen(true)}>
      <NavLink to="/contents"   className={location.pathname === "/conteudos" ? 'active' : "link" }>
        Conteudo
      </NavLink>
      {isOpen && (
        <div className="dropdown-menu"  onMouseLeave={()=>setIsOpen(false)}>
            {props.menuList.map((item)=><NavLink key={item.text} to={item.path} >{item.text}</NavLink>)}
          
          
        </div>
      )}
    </div>
  );
}

export default Dropdown;
