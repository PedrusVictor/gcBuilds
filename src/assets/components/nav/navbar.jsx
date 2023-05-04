import './navbar.css'
import { NavLink,useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { uri } from '../../../uri'

export function NavBar(props){
    const location = useLocation();
    const navigate=useNavigate()
    const [isOpen, setIsOpen] = useState(true);
   
    const contList=[
      {"path":"/wb","text":"World Boss"},
      {"path":"/vulc","text":"Vulcanus"}
    ]
    const links = [
        { path: '/', text: 'Inicio', id: 'home' },
        { path: '/pers', text: 'Personagem', id: 'pers' },
        { path: '/contents', text: 'Modos de Jogo', id: 'Contents' },
        
       
      ];

      function Logout(){

      
        fetch(`${uri}/logout`,{
          method:'Post',
          headers: { 'Content-Type': 'application/json' }
        })
        .then(response=>{localStorage.clear();navigate("/login");props.setUsuario(null)})
        .catch(error => console.error(error));
      }
    return(

        <div className='nav'>

        
         <div className='navLogo'>
            <NavLink to='/' className={location.pathname==="/"?"active":""}  >
                <img  />
            </NavLink> <h1>Chaser Builders</h1> 
            </div>
         
        <div style={{display:"flex",width:"20em",justifyContent:"space-around"}}>
            

        {links.map(({ path, text, id }) => (
          <NavLink
            key={id}
            to={path}
            className={location.pathname === path ? 'active' : "link" }
            
          >
            {text}
          </NavLink>
        ))}

          
          
                
            
        
        </div>
        <div>
        <label>{props.usuario?props.usuario.login:""}</label>
        {/*<NavLink to="/login" className={location.pathname === '/login' ? 'active' : "link" }>
          {!localStorage.getItem("session")?'login':'logout'}
        </NavLink>*/}
        <NavLink  to="/login" className={location.pathname === '/login' ? 'active' : "link" } onClick={props.usuario?Logout:""}>
          {!props.usuario?'login/cadastro':'logout'}
        </NavLink>
        
        </div>
           
        </div>
        
    )
}