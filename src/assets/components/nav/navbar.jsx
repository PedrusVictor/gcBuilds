import './navbar.css'
import { Link } from 'react-router-dom'

export function NavBar(){
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
            <Link to='/'><img  /></Link> <h1>Chaser Builders</h1> 
            </div>
         
        <div style={{display:"flex",width:"20em",justifyContent:"space-around"}}>
            
                
                <><Link to='/'>Inicio</Link></>
                <><Link to='/pers' > Personagem</Link> </>
            
        
        </div>
            
           
        </div>
        
    )
}