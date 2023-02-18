

import { BrowserRouter as Router,Link, Routes} from "react-router-dom";
import {Index} from '../pages/index/index'
import {Builds} from '../pages/builds/builds'

const Routes=()=>(
           
        <Routes>
            <Route exact path="/"  element={<Index/>}/>
            <Route path="/builds"  element={<Builds/>}/>
        </Routes> 
   
)
export default Routes;
    
