import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './Pagecompos/Home'
import Services from './Pagecompos/Services'
import Ipss from './Pagecompos/Ipss'

export default function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/Ipss' element={<Ipss/>}/>
        <Route path='/Training' element={<Home/>}/>  
        <Route path='/Aboutus' element={<Home/>}/>
      </Routes>
    </Router>

    

    
      
    </div>
  )
}
