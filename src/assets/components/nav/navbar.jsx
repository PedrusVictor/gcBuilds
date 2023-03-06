import './navbar.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
export function NavBar(){

    const [currentPage,setCurrentPage]=useState("home")
    const [hoverPage,setHoverPage]=useState()
    return(

        <div className='nav'>

        {/** 
         * <ul>
            <li><Link to='/'><img  /></Link></li>
            <li><Link to="#">  Chaser Builders</Link></li>
            <li><Link to='/'>Inicio</Link></li>
            <li><Link to='/pers' > Personagem</Link> </li>
            
           
        </ul> 
        */}
         <div className='navLogo'>
            <Link to='/' className={currentPage==="home"?"active":""}  onClick={()=>setCurrentPage("home")}><img  /></Link> <h1>Chaser Builders</h1> 
            </div>
         
        <div style={{display:"flex",width:"20em",justifyContent:"space-around"}}>
            
                
                <><Link to='/' className={currentPage==="home"&&hoverPage!="pers"?"active":""}  onClick={()=>setCurrentPage("home")} onMouseEnter={()=>setHoverPage("home")} onMouseLeave={()=>setHoverPage("")}>Inicio</Link></>
                <><Link to='/pers'className={currentPage==="pers"&&hoverPage!="home"?"active":""}  onClick={()=>setCurrentPage("pers")} onMouseEnter={()=>setHoverPage("pers")} onMouseLeave={()=>setHoverPage("")}> Personagem</Link> </>
            
        
        </div>
            
           
        </div>
        
    )
}