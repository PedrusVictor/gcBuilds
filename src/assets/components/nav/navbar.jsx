import './navbar.css'
import { Link } from 'react-router-dom'

export function NavBar(){
    return(

        <div className='nav'>

        <ul>
            <li><Link to="#"><img src='/src/assets/imgs/gclogo.png' style={{height:"30px"}}/> Chaser Builders</Link></li>
            <li><Link to='/'>Inicio</Link></li>
            <li><Link to='/pers' >Cadastrar Personagem</Link> </li>
            <li><Link to='/builds' >Builds</Link>  </li>
            <li><Link to='/ficha' >ficha</Link>  </li>
        </ul>    
        </div>
        
    )
}