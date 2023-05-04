
import { BrowserRouter as Router, Route,Routes, Navigate } from "react-router-dom";
import { Index } from "../index/index";
import { Builds } from "../builds/builds";
import { Personagens } from "../builds/personagens";
import { Personagem } from "../builds/personagem";
import { Personagensl } from "../builds/personagensl";
import { Contents } from "../Contents";
import { FormContent } from "../formContent";
import { Login } from "../Login";

import './App.css'

import {NavBar}  from '../../components/nav/navbar'
import { Ficha } from "../builds/ficha";
import { uri } from "../../../uri";
import { useState,useEffect } from "react";




export function App() {
  
  const [Pers,setPers]=useState([])
  const [usuario,setUsuario]=useState(localStorage.getItem('session')? JSON.parse(localStorage.getItem('session')).user:"") 
  useEffect(()=>{
    
    async function fetchPers(){
      
        //const data=await(await fetch("http://localhost:3000")).json()
        const data=await(await fetch(uri)).json()
        
        setPers(data)
        
        
    }
    fetchPers()
    
   
},[])
  return (
  
    <Router >
      <div className='content'>
        
            <header>
              <NavBar usuario={usuario} setUsuario={setUsuario}/>
            </header>
            
          <div className='contentBody'>
            <Routes >
              
              <Route exact path="/" element={<Index/>} />
              <Route path="/builds" element={usuario? <Builds Pers={Pers} />:<Navigate to="/login" />} />
              <Route path="/pers" element={usuario? <Personagens Pers={Pers}/>:<Personagensl Pers={Pers}/>}  />
              <Route path="/info/:id" element={<Personagem Pers={Pers}/>} />
              <Route path="/ficha" element={<Ficha Pers={Pers}/>} />
              <Route path="/contents" element={<Contents Pers={Pers}/>} />
              <Route path="/contents/form" element={usuario? <FormContent Pers={Pers} />:<Navigate to="/login" />} />
              <Route path="login" element={<Login setUsuario={setUsuario}/>}/>
            </Routes>
            
          </div>
        
      {/** <div className='footer'></div>
        <footer></footer>*/}
        
      </div>
    </Router>
   
  )
}

