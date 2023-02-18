
import { BrowserRouter as Router, Route, Link,Routes } from "react-router-dom";
import { Index } from "../index/index";
import { Builds } from "../builds/builds";
import { Personagens } from "../builds/personagens";
import { Personagem } from "../builds/personagem";
import './App.css'

import {NavBar}  from '../../components/nav/navbar'
import { Ficha } from "../builds/ficha";
export function App() {
  


  return (
    <Router>
      <div className='content'>
        
            <header>
              <NavBar/>
            </header>
            
          <div className='contentBody'>
            <Routes>
              <Route exact path="/" element={<Index/>} />
              <Route path="/builds" element={<Builds/>} />
              <Route path="/pers" element={<Personagens/>} />
              <Route path="/info/:id" element={<Personagem/>} />
              <Route path="/ficha" element={<Ficha/>} />
            </Routes>
            
          </div>
        
      {/** <div className='footer'></div>
        <footer></footer>*/}
        
      </div>
    </Router>
  )
}

