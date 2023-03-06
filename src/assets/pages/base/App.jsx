
import { BrowserRouter as Router, Route, Link,Routes, BrowserRouter } from "react-router-dom";
import { Index } from "../index/index";
import { Builds } from "../builds/builds";
import { Personagens } from "../builds/personagens";
import { Personagem } from "../builds/personagem";
import './App.css'

import {NavBar}  from '../../components/nav/navbar'
import { Ficha } from "../builds/ficha";
import { uri } from "../../../uri";
import { useState,useEffect } from "react";

export function App() {
  const [Pers,setPers]=useState([])

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
              <NavBar/>
            </header>
            
          <div className='contentBody'>
            <Routes >
              
              <Route exact path="/" element={<Index/>} />
              <Route path="/builds" element={<Builds Pers={Pers}/>} />
              <Route path="/pers" element={<Personagens Pers={Pers}/>}  />
              <Route path="/info/:id" element={<Personagem Pers={Pers}/>} />
              <Route path="/ficha" element={<Ficha Pers={Pers}/>} />
              
              
            </Routes>
            
          </div>
        
      {/** <div className='footer'></div>
        <footer></footer>*/}
        
      </div>
    </Router>
   
  )
}

