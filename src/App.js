import React from 'react'
import Home from './components/home'
import NavBar from './components/NavBar';
import Singers from './components/singers';
import Albums from './components/albums';

import { Route,Routes } from 'react-router-dom';


export default function App() {
  return (
    <> 
      <div>
      <NavBar/>
        <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route path='/singers' element={<Singers />}></Route>
            <Route path='/albums' element={<Albums />}></Route>
        </Routes>
      </div>
    </>
  )
}