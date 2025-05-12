import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from "./pages/Home"
import Contact from './pages/Contact';
import Sample from './pages/Sample';

const App = ()=>{
    return (
        <div>
            <Routes>
              <Route path='/' element={<Home></Home>}></Route>
              <Route path='/contact' element={<Contact></Contact>}></Route>
              <Route path='/sample' element={<Sample></Sample>}></Route>
            </Routes>
        </div>
    );
}
export default App;