import { useState } from "react"
import { uri } from "../../uri"
import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom";


export function Login(props){
    const navigate = useNavigate();
    const [login,setLogin]=useState("")
    const [password,setPassword]=useState("")
    const[signin,setSignin]=useState(false)
    

  const session=JSON.parse(localStorage.getItem('session'))
    function Signup(){

        const user={login:login,password: password}
        fetch(`${uri}/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
            })
    .then(response => response.json())
    .then(data=>{navigate("/")})
    .catch(error => console.error(error));
    } 

   
    function Login(){
      if(login&&password){
        const user={login:login,password: password}
        fetch(`${uri}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
            })
    .then(response => response.json())
    .then(data => { localStorage.setItem("session",JSON.stringify(data));props.setUsuario(data.user);navigate("/")})
   
    .catch(error => console.error(error));
      }
      else{confirm("existem campos não preenchidos")}
        
    }

    
/*
function Login(){
    const user = { login: login, password: password };
    console.log("login")
    axios.post(`${uri}/login`, user, {
      headers: {
        'Content-Type': 'application/json'
      },
      
    })
    .then(response => {
      // Store token in local storage
      localStorage.setItem('authToken', response.data.token);
      // Redirect to home page
      navigate("/");
    })
    .catch(error => console.error(error));
  }
*/
    return(

        <>
        <h1>{session? session.user.login:""}</h1>
        {signin?<h1>Cadastrar</h1>:<h1>Login</h1>}
        
        
        <div className="form-group">
            <label>Login:</label><input type="text" name="login" onChange={(e)=>setLogin(e.target.value)}/>
            <label>Senha:</label><input type="password" name="password"  onChange={(e)=>setPassword(e.target.value)}/>
            {signin?<button onClick={Signup}>Cadastrar</button>:<button onClick={Login}>Login</button>}
            
            <div>
                <label htmlFor="login-signin"> Login </label><input type="radio" id="login-signin" name="login-signin" defaultChecked  onClick={()=>setSignin(false)}/>
                <label htmlFor="login-signin"> SignUp</label><input type="radio" id="login-signin" name="login-signin"  onClick={()=>setSignin(true)}/>
            </div>
           <h1>{signin}</h1> 
        </div>
        </>
    )
}