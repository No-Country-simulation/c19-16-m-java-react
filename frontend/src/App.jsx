
import './App.css'

import Login from './Pages/Login/Login.jsx'
import Register from "./Pages/register/Register.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register2 from './Pages/register/Register2.jsx';
import Register3 from './Pages/register/Register3.jsx';
import Confirmation from './Pages/Transfer/Confirmation.jsx';
import AmountDetails from './Pages/Transfer/AmountDetails.jsx';
import AccountDails from './Pages/Transfer/AccountDetails.jsx';

import Home from './Pages/Home/Home'
import Transfer from './Pages/Transfer/Transfer' 
import Footer from './components/Footer'
import Success from './Pages/Transfer/Success.jsx';
import TransferStepContainer from './Pages/Transfer/TransferStepContainer.jsx';
import LoaderPage from './Pages/LoaderPager/LoaderPage.jsx';

import './css/main.css'



function App() {


  return (

    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} />
          
          <Route path='/Register' element={<Register />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/RegisterPaso2' element={<Register2 />} />
          <Route path='/RegisterPaso3' element={<Register3 />} />
          <Route path='/Transfers' element={<Transfer />} />
          <Route path='/TransferStepContainer' element={<TransferStepContainer  />} />
        
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
