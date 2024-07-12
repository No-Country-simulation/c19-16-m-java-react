import { useState } from 'react'
import './App.css'
import Login from './Pages/Login/Login'
import Home from './Pages/Home/Home'

import Footer from './components/Footer'
import './css/main.css'

function App() {


  return (
    <div className='main'>
    {/* <Login/> */}
    <Home/>
    <Footer/>
    

    </div>
  )
}

export default App
